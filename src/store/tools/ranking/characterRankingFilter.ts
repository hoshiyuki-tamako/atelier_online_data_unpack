import { MVList as CharacterMVList } from '@/master/chara';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public foodLevel = CharacterMVList.maxLevel;

  public level = CharacterMVList.maxLevel;

  public showColumnTotalState = true;

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
}
