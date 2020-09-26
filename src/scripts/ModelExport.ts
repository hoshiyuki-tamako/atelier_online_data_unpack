import escapeStringRegexp from 'escape-string-regexp';
import fs from 'fs-extra';
import { ncp } from 'ncp';
import path from 'path';
import { promisify } from 'util';

import { EWeaponKind } from '../logic/Enums';

export class ModelExport {
  public async process(sourceFolder: string, rootFolder: string) {
    const modelFolder = path.join(sourceFolder, 'models');
    if (!await fs.pathExists(modelFolder)) {
      return;
    }

    const files = await fs.readdir(modelFolder);
    const itemNames = Object.values(EWeaponKind).filter((p) => +p >= 0).map((p) => EWeaponKind[p].substring(1).toLocaleLowerCase());

    return Promise.all([
      itemNames.map((name) => this.processItemsModels(name, files, modelFolder, rootFolder)),
      this.processAreaModels(files, modelFolder, rootFolder),
    ]);
  }

  private async processItemsModels(name: string, files: string[], modelFolder: string, rootFolder: string) {
    const outFolder = path.join(rootFolder, 'models', 'items');
    const regex = new RegExp(`^${escapeStringRegexp(name)}.*`);
    return Promise.all(
      files.filter((p) => !p.includes('#') && regex.exec(p))
        .map((p) => promisify(ncp)(path.join(modelFolder, p), path.join(outFolder, p)))
    );
  }

  private async processAreaModels(files: string[], modelFolder: string, rootFolder: string) {
    const outFolder = path.join(rootFolder, 'models', 'root');
    const mapAreas = await Promise.all(files.filter((p) => p.includes('root'))
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
      .reverse()
      .map(async (p) => {
        const rootFolder = path.join(modelFolder, p);
        const rootFiles = await fs.readdir(rootFolder);
        const [, areaId, subAreaId] = rootFiles.map((i) => i.match(/^MapArea\_(\d+)\_(\d+)\_ground/i)).filter((p) => p)[0] || [];
        if (!(+areaId || +subAreaId)) {
          return null;
        }

        return {
          rootFolder,
          areaId: +areaId,
          subAreaId: +subAreaId,
        };
      }));
    const maps = {} as any;
    const roots = [] as string[];
    for (const area of mapAreas.filter((p) => p)) {
      maps[area.areaId] = maps[area.areaId] || {};
      if (area.subAreaId in maps[area.areaId]) {
        continue;
      }
      maps[area.areaId][area.subAreaId] = path.basename(area.rootFolder);
      roots.push(area.rootFolder);
    }
    await fs.writeJson(path.join(rootFolder, 'generated', 'areaModel.json'), maps);
    await Promise.all(roots.map((p) => promisify(ncp)(p, path.join(outFolder, path.basename(p)))));
  }
}
