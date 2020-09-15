export interface ExtraQuest {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MScript;
  m_Name: string;
  List: List[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface MScript {
  m_FileID: number;
  m_PathID: number;
}

export interface List {
  iDf: number;
  iPosID: number;
  iDungeonID: number;
  iFieldDf: number;
  iQuestDf: number;
  arKeyCharaDf: number[];
  sNormalADV: string;
  sGoodADV: string;
  sTrueADV: string;
}
