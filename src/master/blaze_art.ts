export interface BlazeArt {
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
    DF: number;
    LV: LV[];
}

export interface LV {
    SKILL_DF: number;
    EXP_PT:   number;
}
