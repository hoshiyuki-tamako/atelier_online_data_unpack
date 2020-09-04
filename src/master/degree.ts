export interface Degree {
    m_GameObject: MGameObject;
    m_Enabled:    number;
    m_Script:     MGameObject;
    m_Name:       string;
    List:         List[];
}

export interface List {
    DF:             number;
    STP:            number;
    TYP:            number;
    RTY:            number;
    NAME:           string;
    DESC:           string;
    PRIO:           number;
    KEY_SIDE_QUEST: number;
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}
