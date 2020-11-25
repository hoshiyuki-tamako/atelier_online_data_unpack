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

  public gender: number | null = null;

  public weaponType: number | null = null;

  public name = '';

  public sort = 1;

  public has = [] as number[];

  @MutationAction({ mutate: ['characterType', 'gender', 'weaponType', 'name', 'sort', 'has'] })
  public async reset() {
    return {
      characterType: CharacterType.battle,
      gender: null,
      weaponType: null,
      name: '',
      sort: 1,
      has: [],
    };
  }
}
