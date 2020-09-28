import { Module } from 'vuex-module-decorators';

import VuexModuleBase from '../base/VuexModuleBase';

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
}
