import { Module } from 'vuex-module-decorators';

import VuexModuleBase from '../base/VuexModuleBase';

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

  public sort = 1;

  public name = '';
}
