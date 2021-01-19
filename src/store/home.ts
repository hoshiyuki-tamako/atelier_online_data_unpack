import { Module, MutationAction } from 'vuex-module-decorators';

import VuexModuleBase from './base/VuexModuleBase';

export const defaultMenuItemIds = [2, 3, 4, 7, 10, 14, 15, 16, 17, 21];

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public settingDialogVisible = false;

  public showSideBar = true;

  public showBackTopButton = true;

  public showHiddenContent = false;

  public darkMode: boolean | null = null;

  public menuItemIds = defaultMenuItemIds;

  @MutationAction({ mutate: ['settingDialogVisible', 'showSideBar', 'showBackTopButton', 'showHiddenContent', 'darkMode', 'menuItemIds'] })
  public async reset() {
    return {
      settingDialogVisible: false,
      showSideBar: true,
      showBackTopButton: true,
      showHiddenContent: false,
      darkMode: null,
      menuItemIds: defaultMenuItemIds,
    };
  }
}
