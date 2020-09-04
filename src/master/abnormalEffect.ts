export interface AbnormalEffect {
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
    id:      number;
    name:    string;
    group:   number;
    trarget: number;
    value:   number;
}
