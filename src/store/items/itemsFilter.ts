import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public category: number | null = null;

  public weaponKind: number | null = null;

  public battleElement: number | null = null;

  public skillElement: number | null = null;

  public name = '';

  public sort = 1;

  public legendRecipe = false;

  public characterOnlyItem = false;

  public has = [] as number[];

  @MutationAction({ mutate: ['category', 'weaponKind', 'battleElement', 'skillElement', 'name', 'sort', 'legendRecipe', 'characterOnlyItem', 'has'] })
  public async reset() {
    return {
      category: null,
      weaponKind: null,
      battleElement: null,
      skillElement: null,
      name: '',
      sort: 1,
      legendRecipe: false,
      characterOnlyItem: false,
      has: [],
    };
  }
}
