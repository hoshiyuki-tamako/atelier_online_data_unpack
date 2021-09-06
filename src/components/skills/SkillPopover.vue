<template lang="pug">
div(v-if="skill")
  el-popover(placement="right-end" trigger="hover")
    template(slot="reference")
      p
        el-link.poppover__a(icon="el-icon-more" :underline="false") {{ skill.name }}
    div
      div.popover-message__top-container
        div
          p.popover__detail(v-if="skill.detail") {{ skill.detail }}
        div.popover-message__skill-link
          router-link.skill-popup-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank")
            i.el-icon-right
      div
        p(v-if="skill.effectValue || skill.effectValue2")
          b
            span(v-if="skill.trigger") {{ $t(dataManager.lookup.EBattleEffectTrigger[skill.trigger]) }}{{ dataManager.locale === 'en' ? ' ' : '' }}
            span {{ $t(dataManager.lookup.EBattleEffectTarget[skill.effectTarget] || dataManager.lookup.EBattleEffectKind[skill.effect] || '数値') }}
          template(v-if="skill.isEffectValueElementChange")
            span  {{ $t(skill.effectValueText) }}
          template(v-else-if="skill.isEffectValueRate")
            span  {{ skill.effectValueText }}
          template(v-else)
            span  {{ skill.effectValue }}
            span(v-if="skill.effectValue2") , {{ skill.effectValue2 }}
        template(v-if="skill.combSkillList && skill.combSkillList.length")
          br
          p
            b {{ $t('含まれるスキル') }}
          template(v-for="_skill of skill.combSkillList")
            p {{ _skill.name }}
            p(v-if="_skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="__skill of [dataManager.skillById[_skill.id]].filter((p) => p)") {{ __skill.name }} / {{ __skill.effectValue2 }}{{ $t('ターン') }}
          p(v-if="skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="_skill of [dataManager.skillById[skill.id]].filter((p) => p)") {{ _skill.name }} / {{ _skill.effectValue2 }}{{ $t('ターン') }}

        br(v-if="skill.stateOwn.length || skill.state.length")
        AbnormlStateTags(:states="skill.stateOwn" :own="true")
        AbnormlStateTags(:states="skill.state")
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { List } from '@/master/skill';
import { EBattleEffectKind } from '@/logic/Enums';
import AbnormlStateTags from '@/components/skills/AbnormlStateTags.vue';

@Component({
  components: {
    AbnormlStateTags,
  },
})
export default class extends VueBase {
  public get EBattleEffectKind() {
    return EBattleEffectKind;
  }

  @Prop({ type: Object, default: () => ({}) })
  public skill!: List;
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

.popover-message__top-container
  display: flex

.popover-message__skill-link
  margin-left: auto

.skill-popup-link
  float: right
  padding-left: 12px
</style>
