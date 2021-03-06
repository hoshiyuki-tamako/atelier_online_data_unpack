import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';
import { MVList as EnemyMVList } from './enemy';

export interface IOtherEnemies {
  level: number;
  enemies: EnemyMVList[];
}

export class AreaDetail {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  @Type((_) => List)
  List: List[];
}

export class List {
  iAreaID: number;
  iLevel: number;
  iItemIDList: number[];
  iEnemyIDList: number[];

  #otherEnemies: IOtherEnemies[];
  #dungeonEnemies: IOtherEnemies[];

  public get icon() {
    const filename = `icon_area_${this.iAreaID.toString().padStart(2, '0')}.png`;
    if (!dataManager.files.img.icon_area.Texture2D[filename]) {
      return 'data:,';
    }
    return `img/icon_area/Texture2D/${filename}`;
  }

  public get otherEnemies() {
    return this.#otherEnemies ??= dataManager.spawnerDataManager.enemyIdsInAreaByAreaId[this.iAreaID]
      ?.map(({ level, enemyIds }) => ({
        level,
        enemies: enemyIds.map((p) => dataManager.enemyById[p]).filter((p) => p).sort((a, b) => a.eKind - b.eKind),
      }))
      .filter(({ enemies }) => enemies.length) || [];
  }

  public get dungeonEnemies() {
    return this.#dungeonEnemies ??= dataManager.spawnerDataManager.enemyIdsInDungeonByAreaId[this.iAreaID]
      ?.map(({ level, enemyIds }) => ({
        level,
        enemies: enemyIds.map((p) => dataManager.enemyById[p]).filter((p) => p).sort((a, b) => a.eKind - b.eKind),
      }))
      .filter(({ enemies }) => enemies.length) || [];
  }

  public get kanbans() {
    return dataManager.spawnerDataManager.kanbansByAreaId[this.iAreaID];
  }
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
