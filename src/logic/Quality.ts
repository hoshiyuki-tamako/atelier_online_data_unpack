import { sum, clamp } from 'lodash';

export class InvalidQualityError extends Error {
}

export class Quality {
  // experiences[quality - 1] = exp
  public static experiences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17, 21, 26, 34, 46, 61, 81, 108, 142, 187, 244, 315, 403, 513, 647, 810, 1008, 1245, 1528, 1864, 2261, 2728, 3275, 3911, 4650, 5503, 6486, 7613, 8903, 10372, 12043, 13935, 16074, 18484, 21193, 24232, 27631, 31425, 35651, 40349, 45560, 51331, 57707, 64742, 72490, 81008, 90358, 100606, 111820, 124075, 137448, 152021, 167880, 185117, 203829, 224118, 246089, 269856, 295538, 323258, 353147, 385343, 419988, 457232, 497235, 540159, 586179, 635473, 688231, 744649, 804931, 869293, 937956, 1011154, 1089129, 1172133, 1260427, 1354286, 1453992, 1559840, 1672137, 1791200, 1917359, 2050957, 2192349, 2341902, 2500000, 2625599, 2751565, 2877657, 3003832, 3130048, 3256265, 3382440, 3508352, 3634499, 3760299, 3885891, 4011232, 4136282, 4260998, 4385339, 4509262, 4632727, 4755692, 4878114, 4999953];

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
