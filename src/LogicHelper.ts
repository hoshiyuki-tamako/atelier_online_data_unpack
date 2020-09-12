export interface GMRB {
  G: number;
  M: number;
  R: number;
  B: number;
}

export class LogicHelper {
  public static calculateState(gmrb: GMRB, lv = 1) {
    const baseValue = ((gmrb.M - gmrb.B)/gmrb.R);
    return Math.floor(baseValue * lv + gmrb.B) || 0;
  }
  public static calculateSupportState(value: number) {
    return Math.ceil(value * .05);
  }
}