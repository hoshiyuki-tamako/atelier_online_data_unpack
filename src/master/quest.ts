export interface Quest {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MScript;
  m_Name: string;
  m_vList: MVList[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface MScript {
  m_FileID: number;
  m_PathID: number;
}

export interface MVList {
  DF: number;
  CATEG: number;
  TYPE: number;
  GROUP: number;
  NAME: string;
  KANA: string;
  DESC: string;
  CONDITION: string;
  QUEST_NO: number;
  QUEST_SUB_NO: number;
  CHAPTER: number;
  CHARA: number;
  NPC: number;
  DESTINATION: number;
  AREA: number;
  RNK_PT: number;
  UNLOCK: Unlock[];
  LAST: number;
  INVISIBLE: number;
  IMPORTANT: number;
  PARTY_IN: number;
  KEY_QUEST: number;
  OFFICIAL_EXAMINATION: number;
  CHALLENGE: number;
  COST: Cost;
  EVENT: number;
  NPC_FD: NpcFd[];
  RWD_ITEM: RwdItem[];
  RWD_WTH: RwdWth[];
  FLG_ON: FlgOn[];
  ENM: Enm[];
  BTL: any[];
  QST: any[];
  MIX: any[];
  SKL: any[];
  ACT_SKL: any[];
  DLV: Dlv[];
  ALC: any[];
  GET: Get[];
  PIC: any[];
  REG: Reg[];
  DUN: Dun[];
  ARR: any[];
  SPE: Spe[];
  VIL: Vil[];
  TALK: Talk[];
  ARA: Ara[];
}

export interface Unlock {
  DF: number;
  STP: number;
}

export interface Cost {
  WTH: Wth;
}

export interface Wth {
  DF: number;
  CNT: number;
}

export interface NpcFd {
  DF: number;
  STEP: number;
  MESSAGE: string;
  FD: number;
  POS: number;
  ADV: string;
  PLC: number;
  PLC_ID: number;
  CHA_ID: number;
}

export interface RwdItem {
  DF: number;
  QTY: number;
  TRT: number;
  CNT: number;
  EX_DF0: number;
  EX_QTY0: number;
  EX_TRT0: number;
  EX_CNT0: number;
  EX_DF1: number;
  EX_QTY1: number;
  EX_TRT1: number;
  EX_CNT1: number;
  EX_DF2: number;
  EX_QTY2: number;
  EX_TRT2: number;
  EX_CNT2: number;
  EX_DF3: number;
  EX_QTY3: number;
  EX_TRT3: number;
  EX_CNT3: number;
  EX_DF4: number;
  EX_QTY4: number;
  EX_TRT4: number;
  EX_CNT4: number;
}

export interface RwdWth {
  DF: number;
  CNT: number;
}

export interface FlgOn {
  DF: number;
}

export interface Enm {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Dlv {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Get {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Reg {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Dun {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Spe {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Vil {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Talk {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}

export interface Ara {
  DF: number;
  CATEG: number;
  BDR: number;
  QTY: number;
  AREA: number;
}
