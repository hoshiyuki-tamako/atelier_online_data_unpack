export interface Enemy {
    m_GameObject: MGameObject;
    m_Enabled:    number;
    m_Script:     MGameObject;
    m_Name:       string;
    m_vList:      MVList[];
    KindList:     KindList[];
    ModelList:    ModelList[];
}

export interface KindList {
    iKind:   number;
    strName: string;
}

export interface ModelList {
    sName:       string;
    iCategory:   number;
    fHitHigh:    number;
    fHitRadius:  number;
    fEffectSize: number;
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export interface MVList {
    DF:                number;
    bBoss:             number;
    eAttackTargetKind: number;
    sNormalAttackFile: SNormalAttackFile;
    sBossStartFile:    string;
    sBossEndFile:      SBossEndFile;
    eKind:             number;
    iCategory:         number;
    musicID:           number;
    strName:           string;
    strAnotherName:    string;
    eSize:             number;
    bAura:             number;
    fViewRadius:       number;
    fViewCos:          number;
    fMoveRadius:       number;
    fMoveSpeed:        number;
    fHitRadius:        number;
    bOnlyOnline:       number;
    fCullingSide:      number;
    strDesc:           string;
    sParam:            SParam;
}

export enum SBossEndFile {
    BossBattleEnd039 = "BossBattleEnd_039",
    BossBattleEnd040 = "BossBattleEnd_040",
    Empty = "",
}

export enum SNormalAttackFile {
    Empty = "",
    NormalAttackEnemy01 = "NormalAttack_Enemy_01",
    NormalAttackEnemy02_01 = "NormalAttack_Enemy_02_01",
    NormalAttackEnemy02_10 = "NormalAttack_Enemy_02_10",
    NormalAttackEnemy06 = "NormalAttack_Enemy_06",
    NormalAttackEnemy10_10 = "NormalAttack_Enemy_10_10",
    NormalAttackEnemy12 = "NormalAttack_Enemy_12",
    NormalAttackEnemy16 = "NormalAttack_Enemy_16",
    NormalAttackEnemy17 = "NormalAttack_Enemy_17",
    NormalAttackEnemy20 = "NormalAttack_Enemy_20",
    NormalAttackEnemy21 = "NormalAttack_Enemy_21",
    NormalAttackEnemy23 = "NormalAttack_Enemy_23",
    NormalAttackEnemy29 = "NormalAttack_Enemy_29",
    NormalAttackEnemy30 = "NormalAttack_Enemy_30",
    NormalAttackEnemy37 = "NormalAttack_Enemy_37",
    NormalAttackEnemy38 = "NormalAttack_Enemy_38",
    NormalAttackEnemy41 = "NormalAttack_Enemy_41",
    NormalAttackEnemy42_01 = "NormalAttack_Enemy_42_01",
    NormalAttackEnemy42_02 = "NormalAttack_Enemy_42_02",
    NormalAttackEnemy44 = "NormalAttack_Enemy_44",
}

export interface SParam {
    MDL:   string;
    NAME:  string;
    DESC:  string;
    ELM:   Elm;
    SKILL: Skill[];
    SPEC:  { [key: string]: Spec };
}

export interface Elm {
    FIRE:  number;
    WATER: number;
    WIND:  number;
    EARTH: number;
    LIGHT: number;
    DARK:  number;
}

export interface Skill {
    DF: number;
}

export interface Spec {
    G: number;
    M: number;
    R: number;
    B: number;
}
