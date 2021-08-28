import Enumerable from 'linq';
import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';
export class ExtraQuest {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MScript;
  m_Name: string;

  @Type((_) => List)
  List: List[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface MScript {
  m_FileID: number;
  m_PathID: number;
}

export class List {
  iDf: number;
  iPosID: number;
  iDungeonID: number;
  iFieldDf: number;
  iQuestDf: number;
  arKeyCharaDf: number[];
  sNormalADV: string;
  sGoodADV: string;
  sTrueADV: string;

  public get advs() {
    return Enumerable.from([this.sNormalADV, this.sGoodADV, this.sTrueADV])
      .where((p) => p && dataManager.advs.includes(p))
      .distinct();
  }
}
