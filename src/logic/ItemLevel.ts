export class ItemLevel {
  public static levelExperiences = [0];

  public static byExp(totalExp: number) {
    const index = totalExp >= this.levelExperiences[this.levelExperiences.length - 1]
      ? this.levelExperiences.length - 1
      : this.levelExperiences.findIndex((p) => p > totalExp) - 1;
    const level = index + 1;
    return {
      level,
      exp: level === this.levelExperiences.length ? 0 : totalExp - this.levelExperiences[index],
    };
  }
}
