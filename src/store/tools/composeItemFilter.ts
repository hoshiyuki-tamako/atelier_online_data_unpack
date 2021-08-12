import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, Mutation, MutationAction } from 'vuex-module-decorators';

import { ItemModifier } from '@/logic/modifiers/ItemModifier';

export class MaterialOptions extends ItemModifier {
  public addonQuality = 0;
}
@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public itemDf: number | null = null;

  public materialOptions: MaterialOptions[] = [];

  public allQuality = 1;

  public itemPicker = {
    category: null,
    keyword: '',
  };

  @Mutation
  public updateMaterialOptions(materialOptions: MaterialOptions[]) {
    this.materialOptions = materialOptions;
  }

  @MutationAction({ mutate: ['itemDf', 'materialOptions', 'allQuality', 'itemPicker'] })
  public async reset() {
    return {
      itemDf: null,
      materialOptions: [],
      allQuality: 1,
      itemPicker: {
        category: null,
        keyword: '',
      },
    };
  }
}
