export interface AdventBattle {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  RankingList:  RankingList[];
}

export interface RankingList {
  EnemyList: EnemyList[];
  ID:        number;
}

export interface EnemyList {
  ScoreList: ScoreList[];
  DF:        number;
}

export interface ScoreList {
  eKind:     number;
  name:      string;
  score:     number;
  border:    number;
  isDiapNum: number;
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
