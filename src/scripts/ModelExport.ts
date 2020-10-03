import fs from 'fs-extra';
import { escapeRegExp } from 'lodash';
import { ncp } from 'ncp';
import path from 'path';
import { promisify } from 'util';

import { EWeaponKind } from '../logic/Enums';

export interface IAreaModel {
  iAreaID: number;
  iLevel: number;
  root: string;
}

export default class ModelExport {
  public ncp = promisify(ncp);

  public async process(sourceFolder: string, rootFolder: string) {
    const modelFolder = path.join(sourceFolder, 'models');
    const modelMetaFolder = path.join(sourceFolder, 'modelsMeta');
    const requireFolderExists = await Promise.all([
      fs.pathExists(modelFolder),
      fs.pathExists(modelMetaFolder),
    ]);
    if (!requireFolderExists.every((p) => p)) {
      return;
    }
    const modelFolders = await fs.readdir(modelFolder);
    await Promise.all([
      this.processItemsModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
      this.processEnemiesModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
      this.processAreaModels(modelFolders, sourceFolder, rootFolder, modelFolder, modelMetaFolder),
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
    const regex = new RegExp(`^${escapeRegExp('Enemy044')}.*`);
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
    const hideAreas = [101, 102, 90];
    const deDuplicationAreas = [5, 6];
    const hideAreaFilters = [
      {
        iAreaID: 3,
        iLevel: 901,
      }
    ];

    // start process
    const modelOutFolder = path.join(rootFolder, 'models', 'roots');
    const roots = modelFolders.filter((p) => p.includes('root'))
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
      .reverse();
    const rootMetas = (await Promise.all(roots.map(async (root) => {
      const rootText = await fs.readFile(path.join(modelMetaFolder, root, 'root.fbx'), { encoding: 'utf-8' });
      const connections = rootText.match(/Connections((.|\n|\r)*)/gm)?.join() || '';
      const [, iAreaID, iLevel] = connections.match(/;Model::MapArea_(\d+)_(\d+), Model::root/) || [];
      if (!iAreaID) {
        return null;
      }
      return {
        iAreaID: +iAreaID,
        iLevel: +iLevel,
        root,
      } as IAreaModel;
    })))
      .filter((p) => p && !hideAreas.includes(p.iAreaID) && !hideAreaFilters.some((i) => i.iAreaID === p.iAreaID && i.iLevel === p.iLevel));

    // de duplication
    const removeIndexes = [] as number[];
    const iAreaIdExistsLookup = new Set<number>();
    for (const [i, { iAreaID }] of rootMetas.entries()) {
      if (!deDuplicationAreas.includes(iAreaID)) {
        continue;
      }
      if (iAreaIdExistsLookup.has(iAreaID)) {
        removeIndexes.push(i);
      } else {
        iAreaIdExistsLookup.add(iAreaID);
      }
    }

    const meta = rootMetas.filter((_, i) => !removeIndexes.includes(i));

    await Promise.all([
      fs.writeJson(path.join(rootFolder, 'generated', 'areaModel.json'), meta),
      Promise.all(meta.map(async ({ root }) => {
        const sourceModelFolder = path.join(modelFolder, root);
        const outFolder = path.join(modelOutFolder, root);
        if (await fs.pathExists(outFolder)) {
          return;
        }
        await this.ncp(sourceModelFolder, outFolder);
      })),
    ]);
  }
}
