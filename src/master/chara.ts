export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export interface MScript {
    m_FileID: number;
    m_PathID: number;
}

export interface SKILL {
    DF: number;
    LV: number;
}

export interface HP {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface SATK {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface SDEF {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface MATK {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface MDEF {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface SPD {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface SDA {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface LDA {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface QTH {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface DDG {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface SADD {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface SPEC {
    HP: HP;
    SATK: SATK;
    SDEF: SDEF;
    MATK: MATK;
    MDEF: MDEF;
    SPD: SPD;
    SDA: SDA;
    LDA: LDA;
    QTH: QTH;
    DDG: DDG;
    SADD: SADD;
}

export interface FD {
    DF: number;
    QTY: number;
}

export interface FDM {
    NO: number;
    GRD: number;
    FD: FD[];
    HP: number;
    SATK: number;
    SDEF: number;
    MATK: number;
    MDEF: number;
    SPD: number;
    SDA: number;
    LDA: number;
    QTH: number;
    DDG: number;
    SADD: number;
}

export interface QST {
    NO: number;
    QUEST_DF: number;
    FLAG_DF: number;
    LV: number;
}

export interface WEAPON {
    GEN: number;
}

export interface GROW {
    STAR: number;
    STONE: number;
}

export interface AvHelmOffset {
    id: number;
    offsetY: number;
}

export interface MDL {
    fScale: number;
    eAnimKind: number;
    avHelmOffset: AvHelmOffset[];
    bMacho: number;
    hairId: number;
    eyeId: number;
    headId: number;
    voice: number;
    weaponId: number;
    bodyId: number;
    shieldId: number;
    helmId: number;
    accId1: number;
    accId2: number;
    accId3: number;
}

export interface BA {
    LV: number;
    DF: number;
}

export interface MVList {
    DF: number;
    CATEG: number;
    NAME: string;
    DESC: string;
    GEN: number;
    ICON: string;
    BTST: number;
    EXC: number;
    SKILL: SKILL[];
    SPEC: SPEC;
    FDM: FDM[];
    QST: QST[];
    WEAPON: WEAPON[];
    GROW: GROW[];
    MDL: MDL;
    BA: BA[];
    GROUP_DF: number;
}

export interface Chara {
    m_GameObject: MGameObject;
    m_Enabled: number;
    m_Script: MScript;
    m_Name: string;
    m_vList: MVList[];
}
