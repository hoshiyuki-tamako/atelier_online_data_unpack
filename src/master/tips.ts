export interface Tips {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  LOADING_LIST: List[];
  BATTLE_LIST: List[];
}

export interface List {
  iID: number;
  sContent: string;
  sTitle: string;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
