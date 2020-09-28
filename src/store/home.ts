import { Module, Mutation } from 'vuex-module-decorators';

import VuexModuleBase from './base/VuexModuleBase';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showSideBar = true;

  public showHiddenContent = false;

  @Mutation
  public updateShowSideBar(showSideBar: boolean) {
    this.showSideBar = showSideBar;
  }

  @Mutation
  public updateShowHiddenContent(showHiddenContent: boolean) {
    this.showHiddenContent = showHiddenContent;
  }
}
