import { ItemModifier } from '@/logic/modifiers/ItemModifier';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, Mutation, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public itemModifiers: ItemModifier[] = [];

  public quality = 1;

  public originalQuality = 1;

  public nextQualityExperience = 0;

  @Mutation
  public updateItemModifiers(itemModifiers: ItemModifier[]) {
    this.itemModifiers = itemModifiers;
  }

  @MutationAction({ mutate: ['itemModifiers', 'quality', 'originalQuality', 'nextQualityExperience'] })
  public async reset() {
    return {
      itemModifiers: [],
      quality: 0,
      originalQuality: 0,
      nextQualityExperience: 0,
    };
  }
}
