import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModule {
  public importStringJaJp = '';

  public importStringZhTw = '';

  public get importString() {
    return (locale: string) => {
      switch (locale) {
        case 'zh-TW':
        case 'zh-HK':
        case 'zh-CN':
          return this.importStringZhTw;
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
      default:
        this.importStringJaJp = '';
    }
  }
}
