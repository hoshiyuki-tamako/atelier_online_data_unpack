import fs from 'fs-extra';
import { ncp } from 'graceful-ncp';
import { escapeRegExp } from 'lodash';
import path from 'path';
import { promisify } from 'util';

import { EWeaponKind } from '../logic/Enums';
import { baseServerId, serverIds } from './config';
import { ExportBase } from './ExportBase';

export interface IAreaModel {
  iAreaID: number;
  iLevel: number;
  root: string;
}

export interface IBattleArea {
  iLevel: number;
  folder: string;
}

export interface IHideAreaFilter {
  iAreaID: number;
  iLevel: number;
}

export interface IGenericModelOption {
  outFolder: string;
  startsWith: string[];
}

async function isDirectoryEmpty(folder: string) {
  const directoryIterator = await fs.opendir(folder);
  const { done } = await directoryIterator[Symbol.asyncIterator]().next();
  if (done) {
    return done;
  }
  await directoryIterator.close();
  return done;
}

export default class ModelExport extends ExportBase {
  public hasAlertedSkipping = {} as { [serverId: string]: boolean };

  public ncp = promisify(ncp);

  public async process(sourceFolder: string, rootFolder: string) {
    const baseModelFolder = path.join(sourceFolder, baseServerId, 'models');
    const baseModelMetaFolder = path.join(sourceFolder, baseServerId, 'modelsMeta');
    const requireFolderExists = await Promise.all([
      fs.pathExists(baseModelFolder),
      fs.pathExists(baseModelMetaFolder),
    ]);
    if (!requireFolderExists.every((p) => p)) {
      console.log(`skipping model process missing ${baseModelFolder} or ${baseModelMetaFolder}`);
      return;
    }

    const [baseModelFolders, isModelMetaFolderEmpty] = await Promise.all([
      fs.readdir(baseModelFolder),
      isDirectoryEmpty(baseModelMetaFolder),
    ]);
    if (!baseModelFolders.length) {
      console.log(`empty base models folder: ${baseModelFolder}`);
      return;
    }
    if (isModelMetaFolderEmpty) {
      console.log(`empty base modelsMeta folder: ${baseModelMetaFolder}`);
      return;
    }

    await Promise.all(serverIds.map((serverId) => [
      this.processItemsModels(serverId, baseModelFolders, sourceFolder, rootFolder),
      this.processEnemiesModels(serverId, baseModelFolders, sourceFolder, rootFolder),
      this.processAreaModels(serverId, baseModelFolders, sourceFolder, rootFolder),
      this.processGenericModels(serverId, baseModelFolders, sourceFolder, rootFolder),
    ]).flat());
  }

  private async processItemsModels(serverId: string, baseModelFolders: string[], sourceFolder: string, rootFolder: string) {
    await Promise.all(
      Object.values(EWeaponKind)
        .filter((p) => +p >= 0)
        .map((p) => EWeaponKind[p].substring(1).toLocaleLowerCase())
        .concat(['helm', 'acc_', 'body'])
        .map((name) => this.processItemModels(serverId, name, baseModelFolders, sourceFolder, rootFolder)),
    );
  }

  private async processItemModels(serverId: string, name: string, baseModelFolders: string[], sourceFolder: string, rootFolder: string) {
    const modelFolder = path.join(sourceFolder, serverId, 'models');
    if (serverId !== baseServerId && !await fs.pathExists(modelFolder)) {
      if (!this.hasAlertedSkipping[serverId]) {
        this.hasAlertedSkipping[serverId] = true;
        console.log(`skipping ${serverId} models process missing: ${modelFolder}`);
      }
      return;
    }
    const serverModelFolders = serverId === baseServerId ? baseModelFolders : await fs.readdir(modelFolder);

    const outFolder = path.join(rootFolder, serverId, 'models', 'items');
    const regex = new RegExp(`^${escapeRegExp(name)}.*`);
    const itemBaseFolders = baseModelFolders.filter((p) => regex.exec(p));
    const itemFolders = serverId === baseServerId ? itemBaseFolders : serverModelFolders.filter((p) => regex.exec(p) && !itemBaseFolders.includes(p));
    await Promise.all(itemFolders.map(async (p) => {
      const sourceModelFolder = path.join(modelFolder, p);
      const outModelFolder = path.join(outFolder, p);
      if (await this.isPathUpToDate(sourceModelFolder, outModelFolder)) {
        return;
      }
      await fs.mkdir(outFolder, { recursive: true });
      await this.ncp(sourceModelFolder, outModelFolder);
    }));
  }

  private async processEnemiesModels(serverId: string, baseModelFolders: string[], sourceFolder: string, rootFolder: string) {
    const modelFolder = path.join(sourceFolder, serverId, 'models');
    if (serverId !== baseServerId && !await fs.pathExists(modelFolder)) {
      if (!this.hasAlertedSkipping[serverId]) {
        this.hasAlertedSkipping[serverId] = true;
        console.log(`skipping ${serverId} models process missing: ${modelFolder}`);
      }
      return;
    }
    const serverModelFolders = serverId === baseServerId ? baseModelFolders : await fs.readdir(modelFolder);

    const outFolder = path.join(rootFolder, serverId, 'models', 'enemies');
    const regex = new RegExp(`^${escapeRegExp('Enemy')}.*`, 'i');
    const enemyBaseFolders = baseModelFolders.filter((p) => regex.exec(p));
    const enemiesFolders = serverId === baseServerId ? enemyBaseFolders : serverModelFolders.filter((p) => regex.exec(p) && !enemyBaseFolders.includes(p));
    await Promise.all(enemiesFolders.map(async (p) => {
      const sourceModelFolder = path.join(modelFolder, p);
      const outModelFolder = path.join(outFolder, p);
      if (await this.isPathUpToDate(sourceModelFolder, outModelFolder)) {
        return;
      }
      await fs.mkdir(outFolder, { recursive: true });
      await this.ncp(sourceModelFolder, outModelFolder);
    }));
  }

  private async processAreaModels(serverId: string, baseModelFolders: string[], sourceFolder: string, rootFolder: string) {
    if (serverId !== baseServerId) {
      return;
    }

    const modelFolder = path.join(sourceFolder, serverId, 'models');
    const modelMetaFolder =  path.join(sourceFolder, serverId, 'modelsMeta');
    if (serverId !== baseServerId && !await fs.pathExists(modelFolder)) {
      if (!this.hasAlertedSkipping[serverId]) {
        this.hasAlertedSkipping[serverId] = true;
        console.log(`skipping ${serverId} models process missing: ${modelFolder}`);
      }
      return;
    }
    const serverModelFolders = serverId === baseServerId ? baseModelFolders : await fs.readdir(modelFolder);

    // custom meta
    const hideAreas = [] as number[];
    const deDuplicationAreas = [5, 6, 106] as number[];
    const hideAreaFilters = [] as IHideAreaFilter[];

    const intlCompare = new Intl.Collator(undefined, { numeric: true }).compare;

    // start process
    const modelOutFolder = path.join(rootFolder, serverId, 'models', 'roots');
    const roots = serverModelFolders.filter((p) => p.includes('root'))
      .sort(intlCompare)
      .reverse();
    const areas = [] as IAreaModel[];
    const areaDungeons = [] as IAreaModel[];

    // parse files and map
    await Promise.all(roots.map(async (root) => {
      const rootText = await fs.readFile(path.join(modelMetaFolder, root, 'root.fbx'), { encoding: 'utf-8' });
      const connections = rootText.match(/Connections((.|\n|\r)*)/gm)?.join() || '';
      const [, iAreaID, iLevel, isDungeon] = connections.match(/;Model::MapArea_(\d+)_(\d+)(\_Dun)?, Model::root/) || [];

      const meta = {
        iAreaID: +iAreaID,
        iLevel: +iLevel,
        root,
      } as IAreaModel;

      if (hideAreas.includes(meta.iAreaID) || hideAreaFilters.some((i) => i.iAreaID === meta.iAreaID && i.iLevel === meta.iLevel)) {
        return;
      }

      if (isDungeon) {
        areaDungeons.push(meta);
      } else if (iAreaID) {
        areas.push(meta);
      }
    }));

    areas.sort((a, b) => -intlCompare(a.root, b.root));
    areaDungeons.sort((a, b) => -intlCompare(a.root, b.root));

    // de-duplication
    const removeIndexes = [] as number[];
    const iAreaIdExistsLookup = new Set<number>();
    for (const [i, { iAreaID }] of areas.entries()) {
      if (!deDuplicationAreas.includes(iAreaID)) {
        continue;
      }
      if (iAreaIdExistsLookup.has(iAreaID)) {
        removeIndexes.push(i);
      } else {
        iAreaIdExistsLookup.add(iAreaID);
      }
    }
    const filteredAreas = areas.filter((_, i) => !removeIndexes.includes(i));

    await Promise.all([
      fs.writeJson(path.join(rootFolder, 'generated', 'areaModel.json'), filteredAreas),
      fs.writeJson(path.join(rootFolder, 'generated', 'areaDungeonModel.json'), areaDungeons),
      Promise.all(filteredAreas.concat(areaDungeons).map(async ({ root }) => {
        const sourceModelFolder = path.join(modelFolder, root);
        const outFolder = path.join(modelOutFolder, root);
        if (await this.isPathUpToDate(sourceModelFolder, outFolder)) {
          return;
        }
        await fs.mkdir(modelOutFolder, { recursive: true });
        await this.ncp(sourceModelFolder, outFolder);
      })),
    ]);
  }

  private async processGenericModels(serverId: string, modelFolders: string[], sourceFolder: string, rootFolder: string) {
    const options = [
      {
        outFolder: 'battleAreas',
        startsWith: ['BattleArea_'],
      },
      {
        outFolder: 'dungeons',
        startsWith: ['Dungeon_'],
      },
      {
        outFolder: 'fieldDungeons',
        startsWith: ['FieldDungeon_'],
      },
      {
        outFolder: 'throwables',
        startsWith: ['throw', 'Throw_'],
      },
      {
        outFolder: 'gimmicks',
        startsWith: ['Gimmick_'],
      },
    ] as IGenericModelOption[];
    await Promise.all(options.map(({ outFolder, startsWith }) => this.processGenericModel(serverId, outFolder, startsWith, rootFolder, modelFolders, sourceFolder)));
  }

  private async processGenericModel(serverId: string, outFolder: string, startsWith: string[], rootFolder: string, baseModelFolders: string[], sourceFolder: string) {
    if (serverId !== baseServerId) {
      return;
    }

    const modelFolder = path.join(sourceFolder, serverId, 'models');
    if (serverId !== baseServerId && !await fs.pathExists(modelFolder)) {
      if (!this.hasAlertedSkipping[serverId]) {
        this.hasAlertedSkipping[serverId] = true;
        console.log(`skipping ${serverId} models process missing: ${modelFolder}`);
      }
      return;
    }
    const serverModelFolders = serverId === baseServerId ? baseModelFolders : await fs.readdir(modelFolder);

    const modelOutFolder = path.join(rootFolder, serverId, 'models', outFolder);
    const baseFolders = baseModelFolders.filter((p) => startsWith.some((s) => p.startsWith(s)))
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
      .reverse();
    const folders = serverId === baseServerId ? baseFolders : serverModelFolders.filter((p) => startsWith.some((s) => p.startsWith(s)) && !baseFolders.includes(p))
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
      .reverse();
    await Promise.all([
      Object.values(this.getLatestFromDifferences(folders)).map(async (folder) => {
        const sourceModelFolder = path.join(modelFolder, folder);
        const outFolder = path.join(modelOutFolder, folder);
        if (await this.isPathUpToDate(sourceModelFolder, outFolder)) {
          return;
        }
        await fs.mkdir(modelOutFolder, { recursive: true });
        await this.ncp(sourceModelFolder, outFolder);
      }),
    ]);
  }

  // helpers
  private getLatestFromDifferences(folders: string[]) {
    const result = {} as { [objectName: string]: string };
    for (const folder of folders) {
      const objectName = folder.replace(/\s*\(\d+\)/, '');
      if (!(objectName in result)) {
        result[objectName] = folder;
      }
    }
    return result;
  }
}
