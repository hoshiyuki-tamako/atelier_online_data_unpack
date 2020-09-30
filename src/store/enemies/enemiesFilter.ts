import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public eKind: number | null = null;

  public name = '';

  public sort = 1;

  @MutationAction({ mutate: ['eKind', 'name', 'sort'] })
  public async reset() {
    return {
      eKind: null,
      name: '',
      sort: 1,
    };
  }
}
