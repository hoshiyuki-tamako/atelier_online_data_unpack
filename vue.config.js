/* eslint-disable */
const path = require('path');

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/atelier_online_data_unpack/' : '/',
  pwa: {
    name: 'アトリエオンライン資料庫',
    manifestOptions: {
      icons: [
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
    },
    iconPaths: {
      favicon32: './img/icons/favicon-32x32.png',
    },
    workboxOptions: {
      exclude: /.*/,
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'ja-JP',
      fallbackLocale: 'ja-JP',
      localeDir: '../public/locales',
      enableInSFC: false,
    },
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  },
};
