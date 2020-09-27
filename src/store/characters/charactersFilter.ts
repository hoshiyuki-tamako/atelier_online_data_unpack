import { Module, Mutation } from 'vuex-module-decorators';
import { VuexModuleBase } from '../base/VuexModuleBase';

export enum CharacterType {
  none,
  battle,
  npc,
}

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public characterType = CharacterType.battle;

  public sort = 1;

  @Mutation
  public updateCharacterType(characterType: number) {
    this.characterType = characterType;
  }

  @Mutation
  public updateSort(sort: number) {
    this.sort = sort;
  }
}
