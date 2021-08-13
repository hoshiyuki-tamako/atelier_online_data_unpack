import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {

  public name = '';

  @MutationAction({ mutate: ['name'] })
  public async reset() {
    return {
      name: '',
    };
  }
}
