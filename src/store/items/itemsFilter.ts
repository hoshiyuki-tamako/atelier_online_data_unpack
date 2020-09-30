import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public category: number | null = null;

  public weaponKind: number | null = null;

  public name = '';

  public sort = 1;

  public legendRecipe = false;

  public characterOnlyItem = false;

  @MutationAction({ mutate: ['category', 'weaponKind', 'name', 'sort', 'legendRecipe', 'characterOnlyItem'] })
  public async reset() {
    return {
      category: null,
      weaponKind: null,
      name: '',
      sort: 1,
      legendRecipe: false,
      characterOnlyItem: false,
    };
  }
}
