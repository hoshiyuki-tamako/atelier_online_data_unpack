import { ExportFileManager } from './../ExportFileManager';
import csv from 'csvtojson';
import fs from 'fs-extra';
import path from 'path';

import { Option } from '../Option';
import { eSpawnerKind } from './../Enums';

export class SpawnerDataManager {
  public spawnerDataCache: { [s: string]: SpawnerData[] } = {};

  public constructor(private exportFileManager: ExportFileManager) {
  }

  public async loadFromCache() {
    if (Object.keys(this.spawnerDataCache).length) {
      return this.spawnerDataCache;
    }

    const filePaths = await fs.readdir(this.exportFileManager.spawnDataFolder);
    return this.spawnerDataCache = Object.fromEntries(
      await Promise.all(
          filePaths
          .map(p => path.join(this.exportFileManager.spawnDataFolder, p))
          .map(async p => [p, await this.fromCsv(p)] as [string, SpawnerData[]])
        )
      );
  }

  public async fromCsv(file: string) {
    const rows = await csv({
      noheader: true,
      output: 'csv',
    }).fromFile(file);

    return rows.map(row => {
      const that = new SpawnerData();
      that.DF = +row[0];
      that.spawnerKind = +row[1];
      return that;
    });
  }
}

export class SpawnerData
{
  public DF: number;
  public spawnerKind: eSpawnerKind;
  //
  public ctrlFlag: number;
	public optionData: string;
}
