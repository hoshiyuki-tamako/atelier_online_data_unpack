import { Type } from 'class-transformer';

export class SoundList {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;
  @Type((_) => Bgm)
  BGM: Bgm[];
  SE: Bgm[];
  VOICE: Voice;
}

export class Bgm {
  iID: number;
  sFilePath: string;
  bLocal: number;

  public get fileName() {
    return `${this.sFilePath}.wav`;
  }

  public get file() {
    return `audios/musics/${this.fileName}`;
  }
}

export interface Voice {
  viTitleCallList: any[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
