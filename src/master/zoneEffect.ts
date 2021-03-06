export interface ZoneEffect {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  List: List[];
}

export interface List {
  id: number;
  name: string;
  effect: number;
  value: number;
  element: number;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
