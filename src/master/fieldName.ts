export interface FieldName {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  List:         List[];
}

export interface List {
  iAreaNameId:    number;
  strAreaName:    string;
  strAreaNameSub: string;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
