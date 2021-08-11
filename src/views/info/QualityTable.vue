<template lang="pug">
div.container
  div.quality-tables
    div.quality-table-container(v-for="qualityByStart of qualityByStarts")
      el-table(:data="qualityByStart.qualities")
        el-table-column(:label="qualityByStart.stars" header-align="center")
          el-table-column(prop="qualityLevel" :label="$t('品質')" header-align="center" align="center")
          el-table-column(prop="qualityExperience" :label="$t('経験値')" header-align="center" align="center")
          el-table-column(prop="untilNext" :label="$t('あと')" header-align="center" align="center")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Enumerable from 'linq';
import VueBase from '@/components/VueBase';
import { Quality } from '@/logic/Quality';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get qualityByStarts() {
    const qualityStartQualities = Object.keys(Quality.qualityStars)
      .map((p) => +p)
      .sort((a, b) => b - a);
    const ranges = qualityStartQualities
      .map((quality, index, array) => ((index + 1) in array ? [array[index + 1], quality] : null))
      .filter((p) => p);
    ranges.unshift([100, 101]);

    const qualities = ranges
      .reverse()
      .map(([start, end]) => Enumerable.range(start, end - start)
        .select((qualityLevel) => ({
          qualityLevel,
          qualityExperience: Quality.formula.getValue(qualityLevel),
          untilNext: qualityStartQualities[0] === qualityLevel
            ? 0
            : Quality.formula.getValue(qualityLevel + 1) - Quality.formula.getValue(qualityLevel),
        }))
        .toArray());

    return Object.entries(Quality.qualityStars)
      .sort((a, b) => +a[0] - +b[0])
      .map(([, stars], index) => ({
        stars,
        qualities: qualities[index],
      }));
  }
}
</script>

<style lang="sass" scoped>
.quality-tables
  display: flex
  flex-direction: row
  flex-wrap: wrap

.quality-table-container
  width: 360px
</style>
