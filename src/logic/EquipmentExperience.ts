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
    return [...Array(80).keys()]
      .map(i => i + 1)
      .map((k) => this.formula.getValue(k))
  }

  public compose(maxLevel: number, experiences: number, level = 1, untilExp = 0) {
    const maxLevelExperience = EquipmentExperience.formula.getValue(maxLevel);
    const untilNext = untilExp ? EquipmentExperience.formula.getValue(level + 1) - EquipmentExperience.formula.getValue(level) - untilExp : 0;
    const currentExperience = EquipmentExperience.formula.getValue(level) + untilNext;

    const totalExperience = experiences + currentExperience;
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

    return {
      targetLevel,
      untilNext: targetLevel === maxLevel ? 0 : EquipmentExperience.formula.getValue(targetLevel + 1) - EquipmentExperience.formula.getValue(targetLevel) - (totalExperience - EquipmentExperience.formula.getValue(targetLevel)),
      totalExperience: clamp(totalExperience, 0, maxLevelExperience),
      overExp: totalExperience <= maxLevelExperience ? 0 : totalExperience - maxLevelExperience,
    };
  }
}
