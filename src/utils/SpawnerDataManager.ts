import files from '@/../public/generated/files.json';
import { eSpawnerKind } from '@/logic/Enums';
import csv from 'csvtojson';
import Enumerable from 'linq';

export class SpawnerData {
  // pos 0
  public DF = 0;

  // pos 1
  public spawnerKind = eSpawnerKind.Ignore;

  // pos 10
  public text = '';
}

export interface IEnemyMap {
  level: number;
  enemyIds: number[];
}

export class SpawnerDataManager {
  // settings
  public locale = 'ja-JP';

  // data
  public spawnLists = new Map<string, SpawnerData[]>();

  public enemyIdsInAreaByAreaId: { [id: string]: IEnemyMap[] } = {};
  public enemyIdsInDungeonByAreaId: { [id: string]: IEnemyMap[] } = {};

  public spawnerDataByAreaIdLevelId: { [id: string]: { [id: string]: SpawnerData[] }} = {};
  public kanbansByAreaId: { [id: string]: SpawnerData[] } = {};

  public async load(locale: string) {
    this.spawnLists.clear();

    this.locale = locale;

    const spawnFiles = this.locale === 'zh-TW'
      ? files.export.tw.SpawnList.TextAsset
      : files.export.SpawnList.TextAsset;
    const spawnListFolders = this.locale === 'zh-TW'
      ? 'export/tw/SpawnList/TextAsset'
      : 'export/SpawnList/TextAsset';

    await Promise.all(Object.values(spawnFiles).map(async (csvFileName: string) => {
      try {
        const url = `${spawnListFolders}/${csvFileName}`;
        const spawnLists = await csv({
          noheader: true,
          output: 'csv',
        }).fromString(await fetch(url).then((i) => i.text()));

        this.spawnLists.set(csvFileName, spawnLists.map((row) => {
          const that = new SpawnerData();
          that.DF = +row[0];
          that.spawnerKind = +row[1];
          that.text = row[9]?.replaceAll(/\<br\\?>|\/\d(\/\d)?$/gi, '\r\n');
          return that;
        }));
      } catch (e) {
        console.error(e);
      }
    }));
    this.processData();
  }

  private processData() {
    this.enemyIdsInAreaByAreaId = Enumerable.from([...this.spawnLists.keys()])
      .where((fileName) => !fileName.includes('Dun'))
      .select((fileName) => ({
        match: fileName.match(/^SpawnList\_(\d+)\_(\d+)/),
        fileName,
      }))
      .where(({ match }) => !!match)
      .select(({ fileName, match }) => ({
        areaId: +match[1],
        level: +match[2] || 0,
        spawnList: this.spawnLists.get(fileName).filter((p) => p.spawnerKind === eSpawnerKind.Enemy),
      }))
      .where(({ spawnList }) => !!spawnList.length)
      .groupBy(({ areaId }) => areaId)
      .toObject((p) => p.key(), (p) => p.select(({ level, spawnList }) => ({
        level,
        enemyIds: spawnList.map((p) => p.DF),
      } as IEnemyMap)).toArray()) as { [id: string]: IEnemyMap[] };
    this.enemyIdsInDungeonByAreaId = Enumerable.from([...this.spawnLists.keys()])
      .where((fileName) => fileName.includes('Dun'))
      .select((fileName) => ({
        match: fileName.match(/^SpawnList\_(\d+)\_(\d+)/),
        fileName,
      }))
      .where(({ match }) => !!match)
      .select(({ fileName, match }) => ({
        areaId: +match[1],
        level: +match[2] || 0,
        spawnList: this.spawnLists.get(fileName).filter((p) => p.spawnerKind === eSpawnerKind.Enemy),
      }))
      .where(({ spawnList }) => !!spawnList.length)
      .groupBy(({ areaId }) => areaId)
      .toObject((p) => p.key(), (p) => p.select(({ level, spawnList }) => ({
        level,
        enemyIds: spawnList.map((p) => p.DF).sort((a, b) => a - b),
      } as IEnemyMap)).toArray()) as { [id: string]: IEnemyMap[] };

    this.spawnerDataByAreaIdLevelId = Enumerable.from([...this.spawnLists.keys()])
      .where((fileName) => !fileName.includes('Dun'))
      .select((fileName) => ({
        match: fileName.match(/^SpawnList\_(\d+)\_(\d+)/),
        fileName,
      }))
      .where(({ match }) => !!match)
      .select(({ fileName, match }) => ({
        areaId: +match[1],
        level: +match[2] || 0,
        spawnList: this.spawnLists.get(fileName),
      }))
      .groupBy((p) => p.areaId)
      .toObject(
        (p) => p.key(),
        (p) => p.groupBy((o) => o.level)
          .toObject((o) => o.key(), (o) => o.selectMany((i) => i.spawnList).toArray()),
      ) as { [id: string]: { [id: string]: SpawnerData[] }};

    this.kanbansByAreaId = Enumerable.from(Object.entries(this.spawnerDataByAreaIdLevelId))
      .select(([areaId, p]) => ({
        areaId,
        spawnLists: Object.values(p).flat().filter((o) => o.spawnerKind === eSpawnerKind.Kanban),
      }))
      .where((p) => !!p.spawnLists.length)
      .groupBy(({ areaId }) => areaId)
      .toObject((p) => p.key(), (p) => p.selectMany((o) => o.spawnLists).toArray()) as { [id: string]: SpawnerData[] };
  }
}
