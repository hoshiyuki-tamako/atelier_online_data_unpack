import { Formula } from '@/logic/Formula';
import { sum, clamp } from 'lodash';

export class InvalidQualityError extends Error {
}

const f = new Formula();
f.G = 6.5;
f.M = 2500000;
f.R = 100;
f.B = 10;

export class Quality {
  public static formula = f;

  public static qualityStars = {
    10: "⭐".repeat(1),
    30: "⭐".repeat(2),
    60: "⭐".repeat(3),
    80: "⭐".repeat(4),
    90: "⭐".repeat(5),
    100: "🌟".repeat(5),
    // 110: "🌟".repeat(5) + "⭐".repeat(1),
    // 120: "🌟".repeat(5) + "⭐".repeat(2),
  };

  // experiences[quality - 1] = exp
  public static get experiences() {
    return [...Array(100).keys()]
    .map(i => i + 1)
    .map((k) => this.formula.getValue(k))
    .concat([2625599, 2751565, 2877657, 3003832, 3130048, 3256265, 3382440, 3508352, 3634499, 3760299, 3885891, 4011232, 4136282, 4260998, 4385339, 4509262, 4632727, 4755692, 4878114, 4999953]);
  }

  public experience = 0;

  public get isMaxLevel() {
    return this.experience >= Quality.experiences[Quality.experiences.length - 1];
  }

  public get quality() {
    if (this.isMaxLevel) {
      return Quality.experiences.length;
    }

    return Quality.experiences.findIndex((p) => p > this.experience);
  }

  public set quality(quality: number) {
    this.setQuality(quality);
  }

  public get leftover() {
    return this.experience - Quality.experiences[this.quality - 1];
  }

  public get untilNext() {
    if (this.isMaxLevel) {
      return 0;
    }
    const { quality } = this;
    return Quality.experiences[quality] - Quality.experiences[quality - 1] - this.leftover;
  }

  public constructor(experience = Quality.experiences[0]) {
    this.setExperience(experience);
  }

  public setExperience(experience = Quality.experiences[0]) {
    this.experience = experience;
    return this;
  }

  public setQuality(quality = 1, untilNext = 0) {
    if (quality <= 0 || !Quality.experiences[quality - 1]) {
      throw new InvalidQualityError();
    }

    this.experience = Quality.experiences[quality - 1];

    if (untilNext && !this.isMaxLevel) {
      this.experience += Quality.experiences[this.quality] - Quality.experiences[this.quality - 1] - untilNext;
    }

    return this;
  }

  public addExperience(experience: number) {
    this.experience += experience;
    return this;
  }

  public addExperiences(experiences: number[] | Quality[]) {
    this.experience += sum(experiences);
    return this;
  }

  public valueOf() {
    return clamp(this.experience, Quality.experiences[0], Quality.experiences[Quality.experiences.length - 1]);
  }

  public toString() {
    return this.valueOf().toString();
  }
}
