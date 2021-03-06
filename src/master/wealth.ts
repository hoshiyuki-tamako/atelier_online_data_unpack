import { Type } from 'class-transformer';

export class Wealth {
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
  NAME: string;
  DESC: string;
  ICON: number;
  CHARA: number;
  SORT: number;
  CATEG: number;

  public get icon() {
    return `img/icon_item01/Texture2D/icon_item01_${this.ICON.toString().padStart(5, '0')}.png`;
  }
}
