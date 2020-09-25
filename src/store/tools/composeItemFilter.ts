import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

import { ItemModifier } from '../../logic/modifiers/ItemModifier';

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public itemDf: number | null = null;

  public itemModifiers: ItemModifier[] = [];

  @Mutation
  public setItemDf(df: number | null) {
    this.itemDf = df;
  }

  @Mutation
  public setItemModifiers(itemModifiers: ItemModifier[]) {
    this.itemModifiers = itemModifiers;
  }
}
