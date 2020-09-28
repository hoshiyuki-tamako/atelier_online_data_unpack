import { Module, Mutation } from 'vuex-module-decorators';

import { ItemModifier } from '../../logic/modifiers/ItemModifier';
import VuexModuleBase from '../base/VuexModuleBase';

export class MaterialOptions extends ItemModifier {
  public addonQuality = 0;
}

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public itemDf: number | null = null;

  public materialOptions: MaterialOptions[] = [];

  public itemPicker = {
    category: null,
    keyword: '',
  };

  @Mutation
  public updateMaterialOptions(materialOptions: MaterialOptions[]) {
    this.materialOptions = materialOptions;
  }
}
