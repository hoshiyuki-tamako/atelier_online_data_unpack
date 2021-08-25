import files from '@/../public/generated/files.json';
import { eSpawnerKind } from '@/logic/Enums';
import { SpawnerData } from '@/models/SpawnerData';
import { plainArrayToClass } from 'class-transformer-for-array';
import Enumerable from 'linq';
import { parse } from 'papaparse';

import { DataManager } from './DataManager';

export interface IEnemyMap {
  level: number;
  enemyIds: number[];
}

export class SpawnerDataManager {
  // data
  public spawnLists = new Map<string, SpawnerData[]>();

  public get enemyIdsInAreaByAreaId() {
    return this.dataManager.cache('SpawnerDataManager.enemyIdsInAreaByAreaId', () => Enumerable.from([...this.spawnLists.keys()])
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
    } as IEnemyMap)).toArray()) as { [id: string]: IEnemyMap[] });
  }
  public get enemyIdsInDungeonByAreaId() {
    return this.dataManager.cache('SpawnerDataManager.enemyIdsInDungeonByAreaId', () => Enumerable.from([...this.spawnLists.keys()])
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
    } as IEnemyMap)).toArray()) as { [id: string]: IEnemyMap[] });
  }

  public get spawnerDataByAreaIdLevelId() {
    return this.dataManager.cache('SpawnerDataManager.spawnerDataByAreaIdLevelId', () => Enumerable.from([...this.spawnLists.keys()])
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
    ) as { [id: string]: { [id: string]: SpawnerData[] }});
  }
  public get kanbansByAreaId() {
    return this.dataManager.cache('SpawnerDataManager.kanbansByAreaId', () => Enumerable.from(Object.entries(this.spawnerDataByAreaIdLevelId))
    .select(([areaId, p]) => ({
      areaId,
      spawnLists: Object.values(p).flat().filter((o) => o.spawnerKind === eSpawnerKind.Kanban),
    }))
    .where((p) => !!p.spawnLists.length)
    .groupBy(({ areaId }) => areaId)
    .toObject((p) => p.key(), (p) => p.selectMany((o) => o.spawnLists).toArray()) as { [id: string]: SpawnerData[] });
  }

  public constructor(private dataManager: DataManager) {
  }

  public clearCache() {
    this.spawnLists.clear();
  }

  public async load() {
    // Make sure dataManager cache is clear before calling this function
    const spawnFiles = this.dataManager.files[this.dataManager.serverId]?.export.SpawnList || files.jp.export.SpawnList;

    await Promise.all(Object.values(spawnFiles).map(async (csvFileName: string) => {
      try {
        const url = `${this.dataManager.exportFolderUrl}SpawnList/${csvFileName}`;
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
  }

  public async loadFromOptimizedData(spawnLists: { [file: string]: string }) {
    await Promise.all(Object.entries(spawnLists).map(async ([file, spawnList]) => {
      try {
        const { data } = await new Promise((complete, error) => parse(spawnList, {
          skipEmptyLines: true,
          complete,
          error,
        }));
        this.spawnLists.set(file, plainArrayToClass(SpawnerData, data, { isArray: true }));
      } catch (e) {
        console.error(e);
      }
    }));
  }
}
