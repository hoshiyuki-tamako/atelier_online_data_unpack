import { Type } from 'class-transformer';

export class BlazeArt {
    m_GameObject: MGameObject;
    m_Enabled: number;
    m_Script: MGameObject;
    m_Name: string;

    @Type((_) => MVList)
    m_vList: MVList[];
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export class MVList {
    DF: number;
    LV: LV[];

    public levelExperience(level: number) {
      const index = level - 2;
      if (index < 0) {
        return 0;
      }
      return this.LV[index]?.EXP_PT || 0;
    }
}

export interface LV {
    SKILL_DF: number;
    EXP_PT: number;
}
