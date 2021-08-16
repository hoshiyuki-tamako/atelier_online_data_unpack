import { Formula } from '@/logic/Formula';
import { clamp } from 'lodash';

const f = new Formula();
f.G = 3;
f.M = 20000;
f.R = 60;
f.B = 1;

export class EquipmentExperience {
  public static formula = f;

  public static get experiences() {
    return [...Array(60).keys()]
      .map(i => i + 1)
      .map((k) => this.formula.getValue(k))
  }

  public compose(maxLevel: number, experiences: number, level = 1, untilExp = 0) {
    const maxLevelExperience = EquipmentExperience.formula.getValue(maxLevel);
    const untilNextExp = untilExp ? EquipmentExperience.formula.getValue(level + 1) - EquipmentExperience.formula.getValue(level) - untilExp : 0;
    const currentExperience = EquipmentExperience.formula.getValue(level) + untilNextExp;

    // normal
    const totalExperience = currentExperience + experiences;
    const isMaxLevel = totalExperience >= maxLevelExperience;
    const targetLevel = (() => {
      if (isMaxLevel) {
        return maxLevel;
      }

      if (!experiences) {
        return level;
      }

      return EquipmentExperience.experiences.findIndex((p) => p > totalExperience);
    })();
    const untilNext = targetLevel === maxLevel
      ? 0
      : EquipmentExperience.formula.getValue(targetLevel + 1) - EquipmentExperience.formula.getValue(targetLevel) - (totalExperience - EquipmentExperience.formula.getValue(targetLevel));

    // big success
    const totalExperienceBigSuccess = currentExperience + experiences * 1.5;
    const isMaxLevelBigSuccess = totalExperienceBigSuccess >= maxLevelExperience;
    const targetLevelBigSuccess = (() => {
      if (isMaxLevelBigSuccess) {
        return maxLevel;
      }

      if (!experiences) {
        return level;
      }

      return EquipmentExperience.experiences.findIndex((p) => p > totalExperienceBigSuccess);
    })();
    const untilNextBigSuccess = targetLevelBigSuccess === maxLevel
      ? 0
      : EquipmentExperience.formula.getValue(targetLevelBigSuccess + 1) - EquipmentExperience.formula.getValue(targetLevelBigSuccess) - (totalExperienceBigSuccess - EquipmentExperience.formula.getValue(targetLevelBigSuccess));

    return {
      targetLevel,
      untilNext,
      totalExperience: clamp(totalExperience, 0, maxLevelExperience),
      overExp: totalExperience <= maxLevelExperience ? 0 : totalExperience - maxLevelExperience,

      targetLevelBigSuccess,
      untilNextBigSuccess,
      totalExperienceBigSuccess: clamp(totalExperienceBigSuccess, 0, maxLevelExperience),
      overExpBigSuccess: totalExperienceBigSuccess <= maxLevelExperience ? 0 : totalExperienceBigSuccess - maxLevelExperience,
    };
  }
}
