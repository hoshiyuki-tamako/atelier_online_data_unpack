export interface FieldItem {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  List: List[];
}

export interface List {
  iItemId: number;
  eUse: number;
  eRange: number;
  eStateList: number[];
  bOthers: number;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
