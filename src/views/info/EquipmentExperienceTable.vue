<template lang="pug">
div.container
  div.equipment-experiences-container
    el-table(:data="experiences")
      el-table-column(prop="level" :label="$t('レベル')" header-align="center" align="center")
      el-table-column(prop="exp" :label="$t('経験値')" header-align="center" align="center")
      el-table-column(prop="untilNext" :label="$t('あと')" header-align="center" align="center")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Enumerable from 'linq';
import VueBase from '@/components/VueBase';
import { EquipmentExperience } from '@/logic/EquipmentExperience';
// import { MVList as ItemMVList } from '@/master/item';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get experiences() {
    const maxLevel = 60;
    return Enumerable.range(1, maxLevel)
      .select((level) => ({
        level,
        exp: EquipmentExperience.formula.getValue(level),
        untilNext: maxLevel === level
          ? 0
          : EquipmentExperience.formula.getValue(level + 1) - EquipmentExperience.formula.getValue(level),
      }))
      .toArray();
  }
}
</script>

<style lang="sass" scoped>
.equipment-experiences-container
  width: 360px
</style>
