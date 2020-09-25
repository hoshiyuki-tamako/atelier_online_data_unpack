import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public category: number | null = null;

  public weaponKind: number | null = null;

  public name = '';

  public sort = 1;

  public legendRecipe = false;

  public characterOnlyItem = false;

  @Mutation
  public setCategory(category: number) {
    this.category = category;
  }
  @Mutation
  public setWeaponKind(weaponKind: number) {
    this.weaponKind = weaponKind;
  }
  @Mutation
  public setName(name: string) {
    this.name = name;
  }
  @Mutation
  public setSort(sort: number) {
    this.sort = sort;
  }
  @Mutation
  public setLegendRecipe(legendRecipe: boolean) {
    this.legendRecipe = legendRecipe;
  }
  @Mutation
  public setCharacterOnlyItem(characterOnlyItem: boolean) {
    this.characterOnlyItem = characterOnlyItem;
  }
}
