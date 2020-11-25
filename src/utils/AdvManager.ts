import { EOrderType } from '@/logic/Enums';
import { Adv } from '@/master/adv';

export interface IAdventure {
  order: EOrderType;
}

export interface IDialog extends IAdventure {
  characterDf?: number;
  name: string;
  dialog: string;
  voice?: string;
}

export interface ISelection extends IAdventure {
  options: string[];
}

export interface IBackground extends IAdventure {
  background: string;
  text1: string;
  text2: string;
}

export interface IMusic extends IAdventure {
  id: number;
}

export class AdvManager {
  public locale = 'ja-JP';

  #advCache = new Map<string, Adv>();
  #dialogCache = new Map<string, IAdventure[]>();

  public setLocale(locale: string) {
    this.locale = locale;
    this.#advCache.clear();
    this.#dialogCache.clear();
  }

  public async getAdv(adv: string) {
    const url = this.getAdvJsonUrl(adv);
    if (!this.#advCache.has(url)) {
      this.#advCache.set(url, await fetch(url).then((p) => p.json()));
    }
    return this.#advCache.get(url);
  }

  public async getDialog(adv: string | string[]): Promise<IAdventure[]> {
    if (Array.isArray(adv)) {
      const dialogs = await Promise.all(adv.map((a) => this.getDialog(a)));
      return dialogs.flat();
    }

    const url = this.getAdvJsonUrl(adv);
    if (!this.#dialogCache.has(url)) {
      const data = await this.getAdv(adv);
      const supportedOrders = [EOrderType.eCHARA_TALK, EOrderType.eSELECTION, EOrderType.eBG];
      this.#dialogCache.set(url, data.vOrderList
        .filter((p) => supportedOrders.includes(p.eOrder))
        .map((p) => {
          switch(p.eOrder) {
            case EOrderType.eCHARA_TALK:
              return {
                order: p.eOrder,
                characterDf: +p.vsParam[0],
                name: p.vsParam[1],
                dialog: p.vsParam[2],
                voice: p.vsParam[6],
              } as IDialog;
            case EOrderType.eSELECTION:
              return {
                order: p.eOrder,
                options: p.vsParam,
              } as ISelection;
            case EOrderType.eBG:
              return {
                order: p.eOrder,
                background: p.vsParam[0],
                text1: p.vsParam[1],
                text2: p.vsParam[2],
              } as IBackground;
            case EOrderType.eMUSIC:
              return {
                order: p.eOrder,
                id: +p.vsParam[0],
              } as IMusic;
            default:
              return {
                order: p.eOrder,
                ... p,
              };
          }
        }));
    }
    return this.#dialogCache.get(url);
  }

  private getAdvJsonUrl(adv: string) {
    return `export/${this.locale === 'zh-TW' ? 'tw/' : ''}adv/${adv}.json`;
  }
}
