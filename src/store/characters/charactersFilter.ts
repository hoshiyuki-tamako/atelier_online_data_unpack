import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

export enum CharacterType {
  none,
  battle,
  npc,
}

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public characterType = CharacterType.battle;

  public sort = 1;

  @Mutation
  public setCharacterType(characterType: number) {
    this.characterType = characterType;
  }

  @Mutation
  public setSort(sort: number) {
    this.sort = sort;
  }
}
