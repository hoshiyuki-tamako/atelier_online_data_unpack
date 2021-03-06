export interface AreaInfo {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  List: List[];
}

export interface List {
  iAreaId: number;
  iAreaNameId: number;
  iHardMode: number;
  iStartPortalID: number;
  cMapColor: CMapColor;
  iRestartStage: number;
  iRestartSpawn: number;
  cMapListColor: CMapColor;
  eMusic_Day: number;
  eMusic_Night: number;
  eOtherMusicList: number[];
  eMusic_NormalBattle: number;
  eMultiKind: number;
  eSunlightKind: number;
  sSunlightAnimPath: SSunlightAnimPath;
  aFixedSunlight: AFixedSunlight[];
}

export interface AFixedSunlight {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface CMapColor {
  rgba: number;
}

export enum SSunlightAnimPath {
  Empty = '',
  The03_MapSunlight = '03_Map_Sunlight',
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
