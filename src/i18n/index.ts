import jaLocale from 'element-ui/lib/locale/lang/ja';
import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW';
import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

function getElementUiLocale(locale: string) {
  switch (locale) {
    case 'zh-TW':
    case 'zh-HK':
    case 'zh-CN':
      return zhTWLocale;
    case 'ja-JP':
      return jaLocale;
    default:
      return {};
  }
}

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('../../public/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      let locale = matched[1];
      messages[locale] = {
        ... locales(key),
        ... getElementUiLocale(locale),
      };
    }
  });
  messages['zh-HK'] = messages['zh-TW'];
  messages['zh-CN'] = messages['zh-TW'];
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'ja-JP',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ja-JP',
  messages: loadLocaleMessages(),
});
