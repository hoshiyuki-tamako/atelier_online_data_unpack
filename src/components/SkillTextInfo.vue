<template lang="pug">
div(v-if="skills && skills.length")
  el-divider(v-if="showTitle")
    slot(name="title") {{ $t('スキル') }}
  div(v-for="(skill, i) of skills")
    table.skill-table
      tr
        th {{ $t('名前') }}
        td
          router-link(:to="{ name: 'Skills', query: { id: skill.id } }") {{ skill.name }}
      tr
        th {{ $t('詳細') }}
        td {{ skill.detail }}
      tr
        th {{ $t('数値') }}
        td {{ skill.effectValue }}, {{ skill.effectValue2 }}

      template(v-if="skill.type === 1")
        tr
          th {{ $t('攻撃タイプ') }}
          td {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
        tr
          th {{ $t('属性') }}
          td {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }}
        tr
          th {{ $t('對象') }}
          td {{ $t(dataManager.lookup.targetTeam[skill.attackSkill.targetTeam]) }}{{ $t(dataManager.lookup.eFieldItemRange[skill.attackSkill.targetScope]) }}

      tr(v-if="skill.attackSkill.stateOwn.length")
        th {{ $t('追加状態 (自)') }}
        td
          p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}
      tr(v-if="skill.attackSkill.state.length")
        th {{ $t('追加状態') }}
        td
          p(v-for="[state, abnormalState] of skill.attackSkill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}
      tr(v-if="skill.effect === EBattleEffectKind.eZONE_CHANGE" v-for="zone of [dataManager.zoneById[skill.effectValue]].filter((p) => p)")
        th
          router-link(:to="{ name: 'InfoZone', query: { id: zone.id } }") {{ zone.name }}
        td
          p(v-for="zoneEffectId of zone.effectlist") {{ dataManager.zoneEffectById[zoneEffectId].name }} ({{ dataManager.zoneEffectById[zoneEffectId].value }})
      tr(v-if="skill.effect === EBattleEffectKind.eSTART_SKILL && dataManager.skillById[skill.effectValue]")
        th {{ $t('スキル') }}
        td
          p(v-for="skill of [dataManager.skillById[skill.effectValue]]")
            router-link(:to="{ name: 'Skills', query: { id: skill.id } }") {{ skill.name }}
      tr(v-if="skill.combSkillList.length")
        th {{ $t('含まれるスキル') }}
        td
          p(v-for="skill of skill.combSkillList")
            router-link(:to="{ name: 'Skills', query: { id: skill.id } }") {{ skill.name }}
    p(v-if="skills.length !== (i + 1)") {{ '>' }}
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { List } from '@/master/skill';
import { EBattleEffectKind } from '@/logic/Enums';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get EBattleEffectKind() {
    return EBattleEffectKind;
  }

  @Prop({ type: Array, default: () => [] })
  public skills!: List[];

  @Prop({ type: Boolean, default: true })
  public showTitle!: boolean;
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

th
  white-space: nowrap
th, td
  text-align: left
  padding: 4px
</style>
