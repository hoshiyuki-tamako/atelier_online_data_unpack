import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showColumnDF = true;

  public showColumnNAME = true;

  public showColumnCATEG = true;

  public showColumnCOST = true;

  public showColumnENM = true;

  public showColumnGET = true;

  public showColumnDLV = true;

  public showColumnARA = true;

  public showColumnDialog = true;

  public showColumnCharacter = true;

  @MutationAction({ mutate: ['showColumnDF', 'showColumnNAME', 'showColumnCATEG', 'showColumnCOST', 'showColumnENM', 'showColumnGET', 'showColumnDLV', 'showColumnARA', 'showColumnDialog', 'showColumnCharacter'] })
  public async reset() {
    return {
      showColumnDF: true,
      showColumnNAME: true,
      showColumnCATEG: true,
      showColumnCOST: true,
      showColumnENM: true,
      showColumnGET: true,
      showColumnDLV: true,
      showColumnARA: true,
      showColumnDialog: true,
      showColumnCharacter: true,
    };
  }
}
