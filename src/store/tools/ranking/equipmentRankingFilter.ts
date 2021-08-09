import { MVList as ItemMVList } from '@/master/item';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public category: number | null = null;

  public weaponKind: number | null = null;

  public battleElement: number | null = null;

  public skillElement: number | null = null;

  public support = false;

  public quality = ItemMVList.equipmentMaxQuality;

  public level = ItemMVList.equipmentMaxLevel;

  public showColumnTotalState = true;

  public showColumnSATKSkill = true;

  public showColumnSATK = true;

  public showColumnSDEF = true;

  public showColumnMATKSkill = true;

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

  @MutationAction({ mutate: ['category', 'weaponKind', 'battleElement', 'skillElement', 'support', 'quality', 'level', 'showColumnTotalState', 'showColumnSATKSkill', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATKSkill', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK'] })
  public async reset() {
    return {
      category: null,
      weaponKind: null,
      battleElement: null,
      skillElement: null,
      support: null,
      quality: ItemMVList.equipmentMaxQuality,
      level: ItemMVList.equipmentMaxLevel,
      showColumnTotalState: true,
      showColumnSATKSkill: true,
      showColumnSATK: true,
      showColumnSDEF: true,
      showColumnMATKSkill: true,
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
