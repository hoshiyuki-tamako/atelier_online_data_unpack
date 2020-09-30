import { MVList as ItemMVList } from '@/master/item';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public eKind: number | null = null;

  public level = ItemMVList.equipmentMaxLevel;

  public showColumnTotalState = true;

  public showColumnEXP = true;

  public showColumnHP = true;

  public showColumnSATK = true;

  public showColumnSDEF = true;

  public showColumnMATK = true;

  public showColumnMDEF = true;

  public showColumnSPD = true;

  public showColumnQTH = true;

  public showColumnDDG = true;

  public showColumnTotalElement = true;

  public showColumnFIRE = true;

  public showColumnWATER = true;

  public showColumnEARTH = true;

  public showColumnWIND = true;

  public showColumnLIGHT = true;

  public showColumnDARK = true;

  @MutationAction({ mutate: ['eKind', 'level', 'showColumnTotalState', 'showColumnEXP', 'showColumnHP', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK'] })
  public async reset() {
    return {
      eKind: null,
      level: ItemMVList.equipmentMaxLevel,
      showColumnTotalState: true,
      showColumnEXP: true,
      showColumnHP: true,
      showColumnSATK: true,
      showColumnSDEF: true,
      showColumnMATK: true,
      showColumnMDEF: true,
      showColumnSPD: true,
      showColumnQTH: true,
      showColumnDDG: true,
      showColumnTotalElement: true,
      showColumnFIRE: true,
      showColumnWATER: true,
      showColumnEARTH: true,
      showColumnWIND: true,
      showColumnLIGHT: true,
      showColumnDARK: true,
    };
  }
}
