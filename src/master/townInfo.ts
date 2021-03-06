import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';

export class TownInfo {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  @Type((_) => List)
  List: List[];
}

export class List {
  iTownId: number;
  iAreaNameId: number;
  iAreaId: number;
  eMusic_Day: number;
  eMusic_Night: number;
  clsExitList: ClsExitList[];

  #townIcons: string[];

  public get townIcons() {
    return this.#townIcons ??= dataManager.townIcons
      .filter((p) => p.startsWith(`Map_Town_${this.iTownId.toString().padStart(2, '0')}`))
      .map((p) => `img/map_town/Texture2D/${p}`);
  }
}

export interface ClsExitList {
  iTownId: number;
  eExit: number;
  iExitArea: number;
  iExitStage: number;
  iExitSpawn: number;
  iExitTown: number;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
