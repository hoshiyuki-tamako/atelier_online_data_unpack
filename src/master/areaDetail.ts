export interface AreaDetail {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  List:         List[];
}

export interface List {
  iAreaID:      number;
  iLevel:       number;
  iItemIDList:  number[];
  iEnemyIDList: number[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
