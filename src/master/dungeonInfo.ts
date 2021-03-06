export interface DungeonInfo {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  List: List[];
}

export interface List {
  iDungeonId: number;
  iAreaNameId: number;
  iAreaId: number;
  iMaxFloor: number;
  iForExtra: number;
  iReturnArea: number;
  iReturnStage: number;
  iReturnSpawn: number;
  strBattleBG: string;
  eMusic: number;
  bEnableFilter: number;
  iFlowIdList: number[];
  eRandomSE: number;
  fRandomSECheckSec: number;
  fRandomSEPer: number;
  a11FSunlight: any[];
  a21FSunlight: any[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
