// @ts-ignore
import { I18n } from 'i18n';

export class I18nService {
  public i18n: I18n;

  public setLocale(locale: string) {
    this.i18n = new I18n({
      locales: ['zh-TW', 'ja-JP'],
      directory: 'docs/locales',
      syncFiles: 'true',
      defaultLocale: locale,
      objectNotation: true,
    });
    return this;
  }
}