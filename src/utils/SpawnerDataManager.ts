import { DataManager } from './DataManager';
import files from '@/../public/generated/files.json';
import { eSpawnerKind } from '@/logic/Enums';
import { SpawnerData } from '@/models/SpawnerData';
import { plainArrayToClass } from 'class-transformer-for-array';
import Enumerable from 'linq';
import { parse } from 'papaparse';

export interface IEnemyMap {
  level: number;
  enemyIds: number[];
}

export class SpawnerDataManager {
  // data
  public spawnLists = new Map<string, SpawnerData[]>();

  public enemyIdsInAreaByAreaId: { [id: string]: IEnemyMap[] } = {};
  public enemyIdsInDungeonByAreaId: { [id: string]: IEnemyMap[] } = {};

  public spawnerDataByAreaIdLevelId: { [id: string]: { [id: string]: SpawnerData[] }} = {};
  public kanbansByAreaId: { [id: string]: SpawnerData[] } = {};

  public constructor(private dataManager: DataManager) {
  }

  public async load() {
    this.spawnLists.clear();

    const spawnFiles = this.dataManager.locale === 'ja-JP'
      ? files.export.SpawnList.TextAsset
      : files.export.tw.SpawnList.TextAsset
    const spawnListFolders = this.dataManager.locale === 'ja-JP'
      ? 'export/SpawnList/TextAsset'
      : 'export/tw/SpawnList/TextAsset';

    await Promise.all(Object.values(spawnFiles).map(async (csvFileName: string) => {
      try {
        const url = `${spawnListFolders}/${csvFileName}`;
        const { data } = await new Promise((complete, error) => parse(url, {
          download: true,
          skipEmptyLines: true,
          complete,
          error,
        }));
        this.spawnLists.set(csvFileName, plainArrayToClass(SpawnerData, data, { isArray: true }));
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
