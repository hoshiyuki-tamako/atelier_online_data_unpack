import { Module, Mutation } from 'vuex-module-decorators';

import VuexModuleBase from './base/VuexModuleBase';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showSideBar = true;

  public showBackTopButton = true;

  public showHiddenContent = false;
}
