export interface Wealth {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  m_vList:      MVList[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface MVList {
  DF:    number;
  NAME:  string;
  DESC:  string;
  ICON:  number;
  CHARA: number;
  SORT:  number;
  CATEG: number;
}
