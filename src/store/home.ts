import { Module, MutationAction } from 'vuex-module-decorators';

import VuexModuleBase from './base/VuexModuleBase';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showSideBar = true;

  public showBackTopButton = true;

  public showHiddenContent = false;

  public darkMode: boolean | null = null;

  @MutationAction({ mutate: ['showSideBar', 'showBackTopButton', 'showHiddenContent', 'darkMode'] })
  public async reset() {
    return {
      showSideBar: true,
      showBackTopButton: true,
      showHiddenContent: false,
      darkMode: null,
    };
  }
}
