<template lang="pug">
div(v-if="skills && skills.length")
  el-divider(v-if="showTitle")
    slot(name="title") {{ $t('スキル') }}
  div.skill-card
    table
      template(v-for="(skill, i) of skills")
        tr
          th {{ $t('名前') }}
          td
            b
              router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
        tr
          th {{ $t('詳細') }}
          td {{ skill.detail }}
        tr
          th {{ $t('数値') }}
          td
            span  {{ skill.effectValue }}
            span(v-if="skill.effectValue2") , {{ skill.effectValue2 }}
        tr(v-if="skill.attribute")
          th {{ $t('攻撃タイプ') }}
          td {{ $t(dataManager.lookup.EBattleAttributeShort[skill.attackSkill.attribute]) }}
        tr(v-if="skill.attribute")
          th {{ $t('属性') }}
          td {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }}
        tr(v-if="skill.attribute")
          th {{ $t('對象') }}
          td
            span(v-if="dataManager.locale === 'en'")  {{ $t(dataManager.lookup.eFieldItemRange[skill.attackSkill.targetScope]) }} {{ $t(dataManager.lookup.targetTeam[skill.attackSkill.targetTeam]) }}
            span(v-else)  {{ $t(dataManager.lookup.targetTeam[skill.attackSkill.targetTeam]) }} {{ $t(dataManager.lookup.eFieldItemRange[skill.attackSkill.targetScope]) }}
        tr(v-if="skill.stateOwn.length")
          th {{ $t('追加状態 (自)') }}
          td
            p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])")
              el-tag(size="small" effect="plain")
                router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('確率', [(state.rate * 100).toFixed()]) }}
              el-tag(size="small")
                router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.name }}
              template(v-if="abnormalState.effectlist.length" v-for="id of [abnormalState.effectlist.length > 1 ? abnormalState.effectlist[abnormalState.effectlist.length - 1] : abnormalState.effectlist[0]]")
                el-tag(v-if="dataManager.abnormalStateEffectById[id]" size="small" effect="plain")
                  router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('数値') }} {{ dataManager.abnormalStateEffectById[id].value }}
              el-tag(size="small" effect="plain")
                router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.turn }} {{ $t('ターン') }}
        tr(v-if="skill.state.length")
          th {{ $t('追加状態') }}
          td
            p(v-for="[state, abnormalState] of skill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])")
              el-tag(size="small" effect="plain")
                router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('確率', [(state.rate * 100).toFixed()]) }}
              el-tag(size="small")
                router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.name }}
              template(v-if="abnormalState.effectlist.length" v-for="id of [abnormalState.effectlist.length > 1 ? abnormalState.effectlist[abnormalState.effectlist.length - 1] : abnormalState.effectlist[0]]")
                el-tag(v-if="dataManager.abnormalStateEffectById[id]" size="small" effect="plain")
                  router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('数値') }} {{ dataManager.abnormalStateEffectById[id].value }}
              el-tag(size="small" effect="plain")
                router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.turn }} {{ $t('ターン') }}
        tr(v-if="skill.effect === EBattleEffectKind.eZONE_CHANGE" v-for="zone of [dataManager.zoneById[skill.effectValue]].filter((p) => p)")
          th
            router-link(:to="{ name: 'InfoZone', query: { id: zone.id } }" target="_blank") {{ $t('ゾーン') }}
          td
            p(v-for="zoneEffectId of zone.effectlist") {{ dataManager.zoneEffectById[zoneEffectId].name }} ({{ dataManager.zoneEffectById[zoneEffectId].value }})
        tr(v-if="skill.effect === EBattleEffectKind.eSTART_SKILL && dataManager.skillById[skill.effectValue]")
          th {{ $t('スキル') }}
          td
            p(v-for="skill of [dataManager.skillById[skill.effectValue]]")
              router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
        tr(v-if="(skill.combSkillList && skill.combSkillList.length) || skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE")
          th {{ $t('含まれるスキル') }}
          td
            template(v-if="skill.combSkillList && skill.combSkillList.length" v-for="_skill of skill.combSkillList")
              p
                router-link(:to="{ name: 'Skills', query: { id: _skill.id } }" target="_blank") {{ _skill.name }}
              p(v-if="_skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="__skill of [dataManager.skillById[_skill.id]].filter((p) => p)")
                router-link(:to="{ name: 'Skills', query: { id: __skill.effectValue } }" target="_blank") {{ __skill.name }} / {{ __skill.effectValue2 }}{{ $t('ターン') }}
            p(v-if="skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="_skill of [dataManager.skillById[skill.id]].filter((p) => p)")
              router-link(:to="{ name: 'Skills', query: { id: _skill.effectValue } }" target="_blank") {{ _skill.name }} / {{ _skill.effectValue2 }}{{ $t('ターン') }}
        tr(v-if="skills.length !== (i + 1)")
          th
            br
          td
            br
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
