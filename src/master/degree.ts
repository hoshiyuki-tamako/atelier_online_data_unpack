import { Type } from 'class-transformer';

export class Degree {
    m_GameObject: MGameObject;
    m_Enabled:    number;
    m_Script:     MGameObject;
    m_Name:       string;

    @Type(_ => List)
    List:         List[];
}

export class List {
    DF:             number;
    STP:            number;
    TYP:            number;
    RTY:            number;
    NAME:           string;
    DESC:           string;
    PRIO:           number;
    KEY_SIDE_QUEST: number;

    public get icon() {
      return `img/icon_degree/Texture2D/icon_degree_${this.TYP.toString().padStart(2, "0")}${this.RTY.toString().padStart(2, "0")}.png`;
    }
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}
