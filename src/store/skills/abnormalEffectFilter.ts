import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {

  public name = '';

  public has = [] as number[];

  @MutationAction({ mutate: ['name', 'has'] })
  public async reset() {
    return {
      name: '',
      has: [],
    };
  }
}
