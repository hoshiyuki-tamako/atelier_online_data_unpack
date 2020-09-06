export interface TownInfo {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  List:         List[];
}

export interface List {
  iTownId:      number;
  iAreaNameId:  number;
  iAreaId:      number;
  eMusic_Day:   number;
  eMusic_Night: number;
  clsExitList:  ClsExitList[];
}

export interface ClsExitList {
  iTownId:    number;
  eExit:      number;
  iExitArea:  number;
  iExitStage: number;
  iExitSpawn: number;
  iExitTown:  number;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
