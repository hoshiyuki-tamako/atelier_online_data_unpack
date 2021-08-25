<template lang="pug">
div(v-if="skill.attackSkill.attribute === 3")
  table.default-table(v-for="matk of [player.totalState('MATK')]")
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('正常') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr(v-if="base")
              th {{ $t('スキル強化') }}
              td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([matk, skill.attackSkill.effectValue], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr(v-if="base")
              th {{ $t('スキル強化') }}
              td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('魔法攻撃UP中') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2025] ? dataManager.abnormalStateById[2025].name : '' }}
              td 1.3
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([matk, skill.attackSkill.effectValue, 1.3], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2025] ? dataManager.abnormalStateById[2025].name : '' }}
              td 1.3
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('上+魔法防御DOWN大') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2025] ? dataManager.abnormalStateById[2025].name : '' }}
              td 1.3
            tr
              th {{ dataManager.abnormalStateById[3047] ? dataManager.abnormalStateById[3047].name : '' }}
              td 1.4
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([matk, skill.attackSkill.effectValue, 1.3, 1.4], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2025] ? dataManager.abnormalStateById[2025].name : '' }}
              td 1.3
            tr
              th {{ dataManager.abnormalStateById[3047] ? dataManager.abnormalStateById[3047].name : '' }}
              td 1.4
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('上+属性(-100)') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2025] ? dataManager.abnormalStateById[2025].name : '' }}
              td 1.3
            tr
              th {{ dataManager.abnormalStateById[3047] ? dataManager.abnormalStateById[3047].name : '' }}
              td 1.4
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([matk, skill.attackSkill.effectValue, 1.3, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2025] ? dataManager.abnormalStateById[2025].name : '' }}
              td 1.3
            tr
              th {{ dataManager.abnormalStateById[3047] ? dataManager.abnormalStateById[3047].name : '' }}
              td 1.4
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('全超+-') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2030] ? dataManager.abnormalStateById[2030].name : '' }}
              td 1.55
            tr
              th {{ dataManager.abnormalStateById[3050] ? dataManager.abnormalStateById[3050].name : '' }}
              td 1.55
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([matk, skill.attackSkill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ matk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2030] ? dataManager.abnormalStateById[2030].name : '' }}
              td 1.55
            tr
              th {{ dataManager.abnormalStateById[3050] ? dataManager.abnormalStateById[3050].name : '' }}
              td 1.55
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
div(v-else-if="skill.attackSkill.attribute")
  table.default-table(v-for="satk of [player.totalState('SATK')]")
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('正常') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([satk, skill.attackSkill.effectValue], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('物攻増UP中+') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2016] ? dataManager.abnormalStateById[2016].name : '' }}
              td 1.35
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([satk, skill.attackSkill.effectValue, 1.35], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2016] ? dataManager.abnormalStateById[2016].name : '' }}
              td 1.35
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('上+物理防御DOWN大') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2016] ? dataManager.abnormalStateById[2016].name : '' }}
              td 1.35
            tr
              th {{ dataManager.abnormalStateById[3037] ? dataManager.abnormalStateById[3037].name : '' }}
              td 1.4
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([satk, skill.attackSkill.effectValue, 1.35, 1.4], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2016] ? dataManager.abnormalStateById[2016].name : '' }}
              td 1.35
            tr
              th {{ dataManager.abnormalStateById[3037] ? dataManager.abnormalStateById[3037].name : '' }}
              td 1.4
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}

    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('上+属性(-100)') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2016] ? dataManager.abnormalStateById[2016].name : '' }}
              td 1.35
            tr
              th {{ dataManager.abnormalStateById[3037] ? dataManager.abnormalStateById[3037].name : '' }}
              td 1.4
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([satk, skill.attackSkill.effectValue, 1.35, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2016] ? dataManager.abnormalStateById[2016].name : '' }}
              td 1.35
            tr
              th {{ dataManager.abnormalStateById[3037] ? dataManager.abnormalStateById[3037].name : '' }}
              td 1.4
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}

    tr
      th
        el-popover(placement="left-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ $t('全超+-') }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2020] ? dataManager.abnormalStateById[2020].name : '' }}
              td 1.55
            tr
              th {{ dataManager.abnormalStateById[3040] ? dataManager.abnormalStateById[3040].name : '' }}
              td 1.55
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
      td
        el-popover(placement="right-end" trigger="hover")
          template(slot="reference")
            span.poppover__a {{ player.attackTest([satk, skill.attackSkill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
          table.default-table
            tr
              th {{ $t('ベース') }}
              td 0.25 x {{ satk }}
            tr
              th {{ $t('スキル') }}
              td {{ skill.attackSkill.effectValue }}
            tr
              th {{ dataManager.abnormalStateById[2020] ? dataManager.abnormalStateById[2020].name : '' }}
              td 1.55
            tr
              th {{ dataManager.abnormalStateById[3040] ? dataManager.abnormalStateById[3040].name : '' }}
              td 1.55
            tr
              th {{ $t('属性') }}
              td {{ skill.attackSkill.element ? 2 : 1 }}
            tr(v-if="base")
                th {{ $t('スキル強化') }}
                td {{ skillChain > 0 ? (1 + chain) : (1 + base) }}
            tr(v-if="skillChain")
              th {{ $t('連携') }}
              td {{ +(1 + skillChain * .2).toFixed(15) }}
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { List as SkillList } from '@/master/skill';
import { Player } from '@/logic/entities/Player';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Object })
  public player!: Player;

  @Prop({ type: Object })
  public skill!: SkillList;

  @Prop({ type: Number, default: 0 })
  public skillChain!: number;

  @Prop({ type: Number, default: 0 })
  public base!: number;

  @Prop({ type: Number, default: 0 })
  public chain!: number;
}
</script>
