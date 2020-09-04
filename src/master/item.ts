export interface Item {
    m_GameObject: MGameObject;
    m_Enabled:    number;
    m_Script:     MGameObject;
    m_Name:       string;
    m_vList:      MVList[];
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export interface MVList {
    DF:            number;
    CATEG:         number;
    GEN:           number;
    PRIO:          number;
    KANA:          string;
    ICON:          number;
    NAME:          string;
    DESC:          string;
    MDL:           number;
    SPC:           Spc[];
    RST:           Rst;
    RAR:           number;
    EQU_BRD:       number;
    RSP:           Rsp[];
    ALT:           Alt;
    EQU:           { [key: string]: Equ };
    EQU_GND:       EquGnd[];
    ELM:           Elm;
    JOB:           number[];
    WPN_KIND:      number;
    GROUP_DF:      number;
    CEIL_RWD_ITEM: CeilRWDItem[];
    RCP_TYPE:      number;
    LRCP_CHARA:    LrcpChara[];
}

export interface Alt {
    CST: number;
    LV:  number;
    EXP: number;
}

export interface CeilRWDItem {
    DF:  number;
    CNT: number;
    QTY: number;
}

export interface Elm {
    FIRE:  number;
    WATER: number;
    WIND:  number;
    EARTH: number;
    LIGHT: number;
    DARK:  number;
}

export interface Equ {
    G: number;
    M: number;
    R: number;
    B: number;
}

export interface EquGnd {
    GEN: number;
    ENB: number;
}

export interface LrcpChara {
    DF: number;
}

export interface Rsp {
    NO: number;
    DF: number;
    NC: number;
}

export interface Rst {
    MN:   number;
    ITEM: any[];
}

export interface Spc {
    THR:   number;
    SKILL: Skill[];
}

export interface Skill {
    DF:  number;
    VAL: number;
}
