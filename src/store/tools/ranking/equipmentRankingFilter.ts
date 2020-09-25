import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public category: number | null = null;

  public weaponKind: number | null = null;

  public support = false;

  public quality = 120;

  public level = 80;

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

  @Mutation
  public setCategory(category: number | null) {
    this.category = category;
  }

  @Mutation
  public setWeaponKind(weaponKind: number | null) {
    this.weaponKind = weaponKind;
  }

  @Mutation
  public setSupport(support: boolean) {
    this.support = support;
  }

  @Mutation
  public setQuality(quality: number) {
    this.quality = quality;
  }

  @Mutation
  public setLevel(level: number) {
    this.level = level;
  }

  @Mutation
  public setShowColumnTotalState(showColumnTotalState: boolean) {
    this.showColumnTotalState = showColumnTotalState;
  }

  @Mutation
  public setShowColumnSATK(showColumnSATK: boolean) {
    this.showColumnSATK = showColumnSATK;
  }

  @Mutation
  public setShowColumnSDEF(showColumnSDEF: boolean) {
    this.showColumnSDEF = showColumnSDEF;
  }

  @Mutation
  public setShowColumnMATK(showColumnMATK: boolean) {
    this.showColumnMATK = showColumnMATK;
  }

  @Mutation
  public setShowColumnMDEF(showColumnMDEF: boolean) {
    this.showColumnMDEF = showColumnMDEF;
  }

  @Mutation
  public setShowColumnSPD(showColumnSPD: boolean) {
    this.showColumnSPD = showColumnSPD;
  }

  @Mutation
  public setShowColumnQTH(showColumnQTH: boolean) {
    this.showColumnQTH = showColumnQTH;
  }

  @Mutation
  public setShowColumnDDG(showColumnDDG: boolean) {
    this.showColumnDDG = showColumnDDG;
  }

  @Mutation
  public setShowColumnTotalElement(showColumnTotalElement: boolean) {
    this.showColumnTotalElement = showColumnTotalElement;
  }

  @Mutation
  public setShowColumnFIRE(showColumnFIRE: boolean) {
    this.showColumnFIRE = showColumnFIRE;
  }

  @Mutation
  public setShowColumnWATER(showColumnWATER: boolean) {
    this.showColumnWATER = showColumnWATER;
  }

  @Mutation
  public setShowColumnEARTH(showColumnEARTH: boolean) {
    this.showColumnEARTH = showColumnEARTH;
  }

  @Mutation
  public setShowColumnWIND(showColumnWIND: boolean) {
    this.showColumnWIND = showColumnWIND;
  }

  @Mutation
  public setShowColumnLIGHT(showColumnLIGHT: boolean) {
    this.showColumnLIGHT = showColumnLIGHT;
  }

  @Mutation
  public setShowColumnDARK(showColumnDARK: boolean) {
    this.showColumnDARK = showColumnDARK;
  }
}
