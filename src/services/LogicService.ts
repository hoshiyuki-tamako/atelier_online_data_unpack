export interface GMRB {
  G: number;
  M: number;
  R: number;
  B: number;
}

export class LogicService {
  public state(gmrb: GMRB, lv = 1) {
    const baseValue = ((gmrb.M - gmrb.B)/gmrb.R);
    return Math.floor(baseValue * lv + gmrb.B) || 0;
  }
  public supportState(value: number) {
    const result = value * .05;
    return result >= 0 ? Math.ceil(result) : Math.floor(result);
  }
}
