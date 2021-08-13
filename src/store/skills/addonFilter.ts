import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public rarity: number | null = null;

  public equipmentUseful = false;

  public hunt = false;

  public name = '';

  public detail = '';

  @MutationAction({ mutate: ['rarity', 'equipmentUseful', 'hunt', 'name', 'detail'] })
  public async reset() {
    return {
      rarity: null,
      equipmentUseful: false,
      hunt: false,
      name: '',
      detail: '',
    };
  }
}
