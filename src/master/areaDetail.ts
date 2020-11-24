import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';

export class AreaDetail {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  @Type(_ => List)
  List:         List[];
}

export class List {
  iAreaID:      number;
  iLevel:       number;
  iItemIDList:  number[];
  iEnemyIDList: number[];

  public get icon() {
    const filename = `icon_area_${this.iAreaID.toString().padStart(2, '0')}.png`;
    if (!dataManager.files.img.icon_area.Texture2D[filename]) {
      return 'data:,';
    }
    return `img/icon_area/Texture2D/${filename}`;
  }
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
