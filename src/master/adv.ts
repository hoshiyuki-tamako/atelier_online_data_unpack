export interface Adv {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  vOrderList: VOrderList[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface VOrderList {
  eOrder: number;
  vsParam: string[];
}
