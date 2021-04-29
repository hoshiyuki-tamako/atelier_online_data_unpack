import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModule {
  public importStringJaJp = '';
  public importStringZhTw = '';
  public importStringEn = '';

  public get importString() {
    return (locale: string) => {
      switch (locale) {
        case 'zh-TW':
        case 'zh-HK':
        case 'zh-CN':
          return this.importStringZhTw;
        case 'en':
          return this.importStringEn;
        case 'ja-JP':
        default:
          return this.importStringJaJp;
      }
    };
  }

  @Mutation
  public save({ locale, importString }) {
    switch (locale) {
      case 'zh-TW':
      case 'zh-HK':
      case 'zh-CN':
        this.importStringZhTw = importString;
        break;
      case 'en':
        this.importStringEn = importString;
        break;
      case 'ja-JP':
      default:
        this.importStringJaJp = importString;
    }
  }

  @Mutation
  public clear({ locale }) {
    switch (locale) {
      case 'zh-TW':
      case 'zh-HK':
      case 'zh-CN':
        this.importStringZhTw = '';
        break;
      case 'en':
        this.importStringEn = '';
        break;
      case 'ja-JP':
      default:
        this.importStringJaJp = '';
    }
  }
}
