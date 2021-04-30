import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';
import dotProp from 'dot-prop';

export class Degree {
    m_GameObject: MGameObject;
    m_Enabled: number;
    m_Script: MGameObject;
    m_Name: string;

    @Type((_) => List)
    List: List[];
}

export class List {
    DF: number;
    STP: number;
    TYP: number;
    RTY: number;
    NAME: string;
    DESC: string;
    PRIO: number;
    KEY_SIDE_QUEST: number;

    public get iconFile() {
      return `icon_degree_${this.TYP.toString().padStart(2, '0')}${this.RTY.toString().padStart(2, '0')}.png`;
    }

    public get hasIcon() {
      return this.icon !== 'data:,';
    }

    public get icon() {
      const localeDotPathFolder = `${dataManager.serverId}.img.icon_degree`;
      if (dotProp.get(dataManager.files, localeDotPathFolder)?.[this.iconFile]) {
        return `${localeDotPathFolder.replace(/\./g, '/')}/${this.iconFile}`
      } else if (dataManager.files.img.icon_degree.Texture2D[this.iconFile]) {
        return `img/icon_degree/Texture2D/${this.iconFile}`;
      } else {
        return 'data:,';
      }
    }
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}
