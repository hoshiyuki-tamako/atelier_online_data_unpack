export interface GateInfo {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  List:         List[];
}

export interface List {
  iUnlockGateId: number;
  iArea:         number;
  iStage:        number;
  iSpawnNo:      number;
  iUIArea:       number;
  iUINo:         number;
  bDummy:        number;
  strName:       string;
  strDialogName: StrDialogName;
  bDungeon:      number;
  bDebug:        number;
}

export enum StrDialogName {
  Empty = "",
  アカデミー = "アカデミー",
  妖精郷 = "妖精郷",
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
