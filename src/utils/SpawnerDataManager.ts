import { eSpawnerKind } from '@/logic/Enums';
import csv from 'csvtojson';

export class SpawnerData
{
  public DF = 0;
  public spawnerKind = eSpawnerKind.Ignore;
}

export class SpawnerDataManager {

  public spawnLists = new Map<string, SpawnerData[]>();

  public locale = 'ja-JP';

  public setLocale(locale: string, files: any) {
    this.locale = locale;

    let spawnFiles = files.export;
    let spawnListFolders = ['export'];
    if (this.locale === 'zh-TW') {
      spawnFiles = spawnFiles.tw;
      spawnListFolders.push('tw');
    }
    spawnListFolders.push('SpawnList', 'TextAsset');

    return Promise.all(Object.values(spawnFiles.SpawnList.TextAsset).map(async (csvFileName: string) => {
      const url = spawnListFolders.join('/') + `/${csvFileName}`;
      const spawnLists = await csv({
        noheader: true,
        output: 'csv',
      }).fromString(await fetch(url).then((i) => i.text()));

      this.spawnLists.set(csvFileName, spawnLists.map((row) => {
        const that = new SpawnerData();
        that.DF = +row[0];
        that.spawnerKind = +row[1];
        return that;
      }));
    }));
  }

}
