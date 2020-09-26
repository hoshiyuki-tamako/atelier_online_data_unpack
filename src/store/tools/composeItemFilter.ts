import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

import { ItemModifier } from '../../logic/modifiers/ItemModifier';

export class MaterialOptions extends ItemModifier {
  public addonQuality = 0;
}

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public itemDf: number | null = null;

  public materialOptions: MaterialOptions[] = [];

  @Mutation
  public setItemDf(df: number | null) {
    this.itemDf = df;
  }

  @Mutation
  public setMaterialOptions(materialOptions: MaterialOptions[]) {
    this.materialOptions = materialOptions;
  }
}
