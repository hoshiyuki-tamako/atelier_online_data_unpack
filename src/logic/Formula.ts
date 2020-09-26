export class Formula {

  public static supportStates = ['SATK', 'SDEF', 'MATK', 'MDEF'];

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
    return Math.floor(((this.M - this.B)/this.R) * level + this.B);
  }

  public getSupportValue(level = 1) {
    return Formula.getSupportElement(this.getValue(level));
  }
}
