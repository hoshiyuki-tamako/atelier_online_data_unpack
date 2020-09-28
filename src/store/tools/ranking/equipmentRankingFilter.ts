import { MVList as ItemMVList } from '@/master/item';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public category: number | null = null;

  public weaponKind: number | null = null;

  public support = false;

  public quality = ItemMVList.equipmentMaxQuality;

  public level = ItemMVList.equipmentMaxLevel;

  public showColumnTotalState = true;

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
}
