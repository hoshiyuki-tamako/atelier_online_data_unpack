import fs from 'fs-extra';
import { escapeRegExp } from 'lodash';
import { ncp } from 'graceful-ncp';
import path from 'path';
import { promisify } from 'util';

import { EWeaponKind } from '../logic/Enums';
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
  public ncp = promisify(ncp);

  public async process(sourceFolder: string, rootFolder: string) {
    const modelFolder = path.join(sourceFolder, 'models');
    const modelMetaFolder = path.join(sourceFolder, 'modelsMeta');
    const requireFolderExists = await Promise.all([
      fs.pathExists(modelFolder),
      fs.pathExists(modelMetaFolder),
    ]);
    if (!requireFolderExists.every((p) => p)) {
      console.log(`skipping model process: missing ${modelFolder} or ${modelMetaFolder}`);
      return;
    }

    const [modelFolders, isModelMetaFolderEmpty] = await Promise.all([
      fs.readdir(modelFolder),
      isDirectoryEmpty(modelMetaFolder),
    ]);
    if (!modelFolders.length) {
      console.log(`empty model folder: ${modelFolder}`);
      return;
    }
    if (isModelMetaFolderEmpty) {
      console.log(`empty modelMeta folder: ${modelMetaFolder}`);
      return;
    }

    await Promise.all([
      this.processItemsModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
      this.processEnemiesModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
      this.processAreaModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
      this.processGenericModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
    ]);
  }

  private async processItemsModels(modelFolders: string[], sourceFolder: string, rootFolder: string, modelFolder: string, modelMetaFolder: string) {
    await Promise.all(
      Object.values(EWeaponKind)
        .filter((p) => +p >= 0)
        .map((p) => EWeaponKind[p].substring(1).toLocaleLowerCase())
        .concat(['helm', 'acc_', 'body'])
        .map((name) => this.processItemModels(name, modelFolders, rootFolder, modelFolder))
    );
  }

  private async processItemModels(name: string, modelFolders: string[], rootFolder: string, modelFolder: string) {
    const outFolder = path.join(rootFolder, 'models', 'items');
    const regex = new RegExp(`^${escapeRegExp(name)}.*`);
    const itemFolders = modelFolders.filter((p) => regex.exec(p));
    await Promise.all(itemFolders.map(async (p) => {
      const sourceModelFolder = path.join(modelFolder, p);
      const outModelFolder = path.join(outFolder, p);
      if (await fs.pathExists(outModelFolder)) {
        return;
      }
      await this.ncp(sourceModelFolder, outModelFolder);
    }));
  }

  private async processEnemiesModels(modelFolders: string[], sourceFolder: string, rootFolder: string, modelFolder: string, modelMetaFolder: string) {
    const outFolder = path.join(rootFolder, 'models', 'enemies');
    const regex = new RegExp(`^${escapeRegExp('Enemy')}.*`, 'i');
    const enemiesFolders = modelFolders.filter((p) => regex.exec(p));
    await Promise.all(enemiesFolders.map(async (p) => {
      const sourceModelFolder = path.join(modelFolder, p);
      const outModelFolder = path.join(outFolder, p);
      if (await fs.pathExists(outModelFolder)) {
        return;
      }
      await this.ncp(sourceModelFolder, outModelFolder);
    }));
  }

  private async processAreaModels(modelFolders: string[], sourceFolder: string, rootFolder: string, modelFolder: string, modelMetaFolder: string) {
    // custom meta
    const hideAreas = [] as number[];
    const deDuplicationAreas = [5, 6, 106] as number[];
    const hideAreaFilters = [] as IHideAreaFilter[];

    // start process
    const modelOutFolder = path.join(rootFolder, 'models', 'roots');
    const roots = modelFolders.filter((p) => p.includes('root'))
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
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
        if (await fs.pathExists(outFolder)) {
          return;
        }
        await this.ncp(sourceModelFolder, outFolder);
      })),
    ]);
  }

  private async processGenericModels(modelFolders: string[], sourceFolder: string, rootFolder: string, modelFolder: string, modelMetaFolder: string) {
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
    await Promise.all(options.map(({ outFolder, startsWith }) => this.processGenericModel(outFolder, startsWith, rootFolder, modelFolders, modelFolder) ));
  }

  private async processGenericModel(outFolder: string, startsWith: string[], rootFolder: string, modelFolders: string[], modelFolder: string) {
    const modelOutFolder = path.join(rootFolder, 'models', outFolder);
    const folders = modelFolders.filter((p) => startsWith.some((s) => p.startsWith(s)))
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
      .reverse();
    await Promise.all([
      Object.values(this.getLatestFromDifferences(folders)).map(async (folder) => {
        const outFolder = path.join(modelOutFolder, folder);
        if (await fs.pathExists(outFolder)) {
          return;
        }
        const sourceModelFolder = path.join(modelFolder, folder);
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
