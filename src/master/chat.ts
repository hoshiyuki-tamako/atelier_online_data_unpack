export interface Chat {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  List:         List[];
}

export interface List {
  iId:        number;
  eTab:       number;
  strMessage: string;
  iStampId:   number;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
