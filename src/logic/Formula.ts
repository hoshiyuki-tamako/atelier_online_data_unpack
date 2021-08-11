export class Formula {
  public static strengthState = ['SATK', 'SDEF', 'MATK', 'MDEF'];

  public static supportStates = Formula.strengthState.concat(['SPD']);

  public static getSupportElement(value: number) {
    if (!value) {
      return 0;
    }

    const result = value * .05;
    return result >= 0 ? Math.ceil(result) : Math.floor(result);
  }

  public G = 0;
  public R = 0;
  public M = 0;
  public B = 0;

  public getValue(level = 1) {
    return Math.trunc(this.B + Math.pow(level/this.R, this.G) * (this.M - this.B));
  }

  public findLevel(total: number) {
    return Math.round(this.R * Math.pow((this.B - total)/(this.B - this.M), 1/this.G));
  }

  public getSupportValue(level = 1) {
    return Formula.getSupportElement(this.getValue(level));
  }
}
