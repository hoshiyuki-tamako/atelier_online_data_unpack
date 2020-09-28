import { Adv } from '@/master/adv';
import cjk from 'cjk-regex';

export interface IDialog {
  name: string;
  dialog: string;
}

export class AdvManager {
  public locale = 'ja-JP';

  #cjkRegex = cjk().toRegExp();

  #advCache = new Map<string, IDialog[]>();

  public setLocale(locale: string) {
    this.locale = locale;
    this.#advCache.clear();
  }

  public async getDialog(adv: string) {
    const jsonPath = `export/${this.locale === 'zh-TW' ? 'tw/' : ''}adv/${adv}.json`;
    if (!this.#advCache.has(jsonPath)) {
      try {
        const data = await fetch(jsonPath).then((p) => p.json()) as Adv;
        this.#advCache.set(jsonPath, data.vOrderList
          .filter((p) => p.vsParam.length >= 3 && (this.#cjkRegex.test(p.vsParam[1]) || this.#cjkRegex.test(p.vsParam[2])))
          .map(({ vsParam: [characterDf, name, dialog] }) => ({
            characterDf,
            name,
            dialog,
          }) as IDialog));
      } catch (e) {
        console.error(e);
        return [];
      }
    }
    return this.#advCache.get(jsonPath);
  }
}
