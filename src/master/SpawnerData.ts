import csv from 'csvtojson';
import fs from 'fs-extra';
import path from 'path';

import { Option } from '../Option';
import { eSpawnerKind } from './../Enums';

export class SpawnerData
{
  public static spawnerDataCache: { [s: string]: SpawnerData[] } = {};

  public static async loadFromCache() {
    if (Object.keys(this.spawnerDataCache).length) {
      return this.spawnerDataCache;
    }

    const folder = path.join(Option.outFolder, 'export', 'SpawnList', 'TextAsset');
    const filePaths = await fs.readdir(folder);
    return this.spawnerDataCache = Object.fromEntries(
      await Promise.all(
          filePaths
          .map(p => path.join(folder, p))
          .map(async p => [p, await this.fromCsv(p)] as [string, SpawnerData[]])
        )
      );
  }

  public static async fromCsv(file: string) {
    const rows = await csv({
      noheader: true,
      output: 'csv',
    }).fromFile(file);

    return rows.map(row => {
      const that = new this();
      that.DF = +row[0];
      that.spawnerKind = +row[1];
      return that;
    });
  }

  public DF: number;
  public spawnerKind: eSpawnerKind;
  //
  public ctrlFlag: number;
	public optionData: string;
}
