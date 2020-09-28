import { Module } from 'vuex-module-decorators';

import VuexModuleBase from '../base/VuexModuleBase';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public eKind = 0;

  public name = '';

  public sort = 1;
}
