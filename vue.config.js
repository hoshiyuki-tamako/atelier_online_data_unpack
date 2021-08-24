module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/atelier_online_data_unpack/' : '/',
  transpileDependencies: ['class-transformer', 'class-transformer-for-array', 'class-transformer-validator', 'translate-mutation-observer'],
  pwa: {
    name: 'アトリエオンライン資料庫',
    manifestOptions: {
      icons: [
        {
          src: 'img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-icon-152x152.png',
      msTileImage: 'img/icons/android-icon-144x144.png',
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
