import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

// es-lint-disable no-shadow
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

  public name = '';

  public sort = 1;

  @MutationAction({ mutate: ['characterType', 'name', 'sort'] })
  public async reset() {
    return {
      characterType: CharacterType.battle,
      name: '',
      sort: 1,
    };
  }
}
