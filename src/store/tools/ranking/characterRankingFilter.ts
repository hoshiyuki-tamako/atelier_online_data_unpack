import { MVList as CharacterMVList } from '@/master/chara';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public gender: number | null = null;

  public weaponType: number | null = null;

  public foodLevel = CharacterMVList.maxLevel;

  public level = CharacterMVList.maxLevel;

  public blazeArtLevel = 5;

  public showColumnTotalState = true;

  public showColumnBlazeArt = true;

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

  @MutationAction({ mutate: ['gender', 'weaponType', 'foodLevel', 'level', 'blazeArtLevel', 'showColumnTotalState', 'showColumnBlazeArt', 'showColumnHP', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK'] })
  public async reset() {
    return {
      gender: null,
      weaponType: null,
      foodLevel: CharacterMVList.maxLevel,
      level: CharacterMVList.maxLevel,
      blazeArtLevel: 5,
      showColumnTotalState: true,
      showColumnBlazeArt: true,
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
