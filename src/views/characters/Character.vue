<template lang="pug">
div.container
  JsonViewDialog(ref="jsonViewDialog")

  div.item-container(v-if="character")
    div.item-container-left
      h3.item-name {{ character.NAME }}
      img.icon-full(v-for="src of character.images" :src="src" :alt="character.NAME")
      img.icon-full(v-for="src of character.otherImages" :src="src" :alt="character.NAME")
      p {{ character.DESC }}
      br
      p DF: {{ character.DF }}
      template(v-if="character.EXC")
        p {{ $t('職業') }}: {{ $t(dataManager.lookup.EJobKind[character.BTST]) }}
        p {{ $t('性別') }}: {{ character.genderTextIcon }}
      p(v-if="character.WEAPON.length") {{ $t('武器種類') }}: {{ weapons }}
      div.wealth-container(v-for="grow of character.GROW")
        img(src="img/icon_item01/Texture2D/icon_item01_00006.png" :alt="$t('限界キャンディ')")
        span {{ grow.STONE }}
        span {{ '⭐'.repeat(grow.STAR) }}
      br
      el-link(@click="$refs.jsonViewDialog.open(character)" :underline="false") {{ $t('Rawデータ') }}

    div.item-container-right
      el-tabs(v-model="activeTab" type="card")
        el-tab-pane(:label="$t('メーン')" name="main" v-if="character.EXC")
          div(v-if="character.EXC")
            div
              el-form(label-position="left" label-width="110px")
                el-form-item(:label="$t('レベル')")
                  el-input-number(v-model="characterModifier.level" size="mini" :min="1" :step="1" step-strictly)
                el-form-item(:label="$t('食事レベル')")
                  el-input-number(v-model="characterModifier.foodLevel" size="mini" :min="0" :max="Math.min(character.FDM.length, characterModifier.level)" :step="1" step-strictly)
            div.character-levels
              table.default-table
                tr(v-for="state of character.getStates(characterModifier.level, characterModifier.foodLevel)")
                  th
                    el-popover(:disabled="!(state.value || state.foodValue || state.skills.length)" placement="right-end" trigger="hover")
                      template(slot="reference")
                        span.poppover__a {{ $t(state.label) }}
                      table.default-table
                        tr(v-if="state.value")
                          th {{ $t('ベース') }}
                          td {{ state.value }}
                        tr(v-if="state.foodValue")
                          th {{ $t('食事') }}
                          td {{ state.foodValue }}
                        tr(v-if="state.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of state.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
                  td
                    el-popover(:disabled="!(state.value || state.foodValue || state.skills.length)" placement="right-end" trigger="hover")
                      template(slot="reference")
                        span.poppover__a {{ state.total }}
                      table.default-table
                        tr(v-if="state.value")
                          th {{ $t('ベース') }}
                          td {{ state.value }}
                        tr(v-if="state.foodValue")
                          th {{ $t('食事') }}
                          td {{ state.foodValue }}
                        tr(v-if="state.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of state.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
                tr(v-for="element of character.getElements(characterModifier.level)")
                  th
                    el-popover(:disabled="!element.skills.length" placement="right-end" trigger="hover")
                      template(slot="reference")
                        span.poppover__a {{ $t(element.label) }}
                      table.default-table
                        tr(v-if="element.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of element.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
                  td
                    el-popover(:disabled="!element.skills.length" placement="right-end" trigger="hover")
                      template(slot="reference")
                        span.poppover__a {{ element.value }}
                      table.default-table
                        tr(v-if="element.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of element.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
              div
                div(v-for="skill in character.getSkillWithComboSkills(characterModifier.level)")
                  el-popover(placement="right-end" trigger="hover")
                    template(slot="reference")
                      p
                        el-link.poppover__a(icon="el-icon-more" :underline="false") {{ skill.name }}
                    p.popover__detail(v-if="skill.detail") {{ skill.detail }}
                    p(v-if="skill.effectValue || skill.effectValue2")
                      b {{ $t('数値') }}
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

          div(v-if="character.GROUP_DF && onlyItems.length")
            el-divider {{ $t('専用アイテム') }}
            template(v-for="item of onlyItems")
              router-link(:to="{ name: 'ItemsItem', query: { df: item.DF } }")
                el-tooltip(:content="item.NAME" placement="top")
                  img.icon-small(:src="item.icon" :alt="item.NAME")
          div(v-if="dataManager.itemsByCharacterLegendRecipe[character.DF]")
            el-divider {{ $t('レジェンドレシピ') }}
            template(v-for="item of dataManager.itemsByCharacterLegendRecipe[character.DF]")
              router-link(:to="{ name: 'ItemsItem', query: { df: item.DF } }")
                el-tooltip(:content="item.NAME" placement="top")
                  img.icon-small(:src="item.icon" :alt="item.NAME")
          div(v-if="dataManager.api.huntInfosByCharacterId[character.DF]")
            el-divider {{ $t('トレジャー') }}
            div(v-for="(huntInfo, i) of dataManager.api.huntInfosByCharacterId[character.DF]")
              p
                router-link(:to="{ name: 'InfoHunt', query: { huntId: huntInfo.HUNTID } }") {{ huntInfo.NAME }}
              p(v-for="join of huntInfo.JCND.filter((join) => join.TYPE === eConditionType.TargetChara && join.VALS[0] === character.DF)") {{ $t('LV{0}以上の{1}の編成', [join.VALS[1], character.NAME]) }}

        el-tab-pane(:label="$t('スキル')" name="skill" v-if="character.SKILL.length")
          div
            div(v-for="{ level, skills } of character.skillsByLevel")
              SkillTextInfo(:skills="skills")
                template(slot="title") LV {{ level }}

        el-tab-pane(:label="$t('ブレイズアーツ')" name="blazArt" v-if="character.BA.length")
          div
            div(v-for="ba of character.BA")
              div(v-for="[lv, blazeArt] of dataManager.blazeArtById[ba.DF].LV.entries()")
                template(v-for="[skill, baLevel] of [[dataManager.skillById[blazeArt.SKILL_DF], lv + 1]]")
                  SkillTextInfo(:skills="[skill]")
                    template(slot="title") LV {{ ba.LV }} / BA LV {{ baLevel }} / EXP {{ dataManager.blazeArtById[ba.DF].levelExperience(baLevel) }}

        el-tab-pane(:label="$t('食事')" name="meal" v-if="character.FDM.length")
          div
            small {{ $t('※ゲーム内ではLV1食事お0/60表示されます LV2食事は1/60です') }}
            br
            div.filters
              div.filter
                span {{ $t('レベルから(包括的)') }}
                el-input-number(v-model="startLevel" size="mini" :min="1" :step="1" step-strictly)
              div.filter
                span {{ $t('レベルに(包括的)') }}
                el-input-number(v-model="endLevel" size="mini" :min="1" :step="1" step-strictly)
            div.food-levels
              div.food-level-container(v-for="{ item, qualities } of character.totalFoods(startLevel, endLevel)")
                el-tooltip(v-for="({ quality, count }, i) of qualities" :key="i" :content="item.NAME" placement="left")
                  router-link.food-level-item(:to="{ name: item.RSP.length ? 'ToolsComposeItem' : 'ItemsItem', query: { df: item.DF, quality } }" target="_blank")
                    p {{ $t('品質') }}{{ quality }}
                    img.icon-small(:src="item.icon" :alt="item.NAME")
                    p x {{ count }}
            br
            div.character-food__items
              div.character-food__item(v-for="fdm of character.FDM")
                el-divider LV{{ fdm.NO }}
                template(v-for="[fd, item] of fdm.FD.map((p) => [p, dataManager.itemById[p.DF]])")
                  el-tooltip(:content="item.NAME" placement="left")
                    router-link.character-food__consume(:to="item.RSP.length ? { name: 'ToolsComposeItem', query: { df: item.DF, quality: fd.QTY } } : { name: 'ItemsItem', query: { df: item.DF } }" target="_blank")
                      span.character-food__quality-text {{ $t('品質') }} {{ fd.QTY }}
                      img.icon-small(:src="item.icon" :alt="item.NAME")
                table
                  tr(v-for="state of Object.keys(character.SPEC).filter((state) => fdm[state])")
                    td {{ $t(dataManager.lookup.state[state] )}}
                    td {{ fdm[state] }}

        el-tab-pane(:label="$t('キャラクタークエスト')" name="characterQuest" v-if="character.quests.length")
          div
            div.character-quest(v-for="[qst, quest] of character.quests")
              el-divider LV {{ qst.LV }}
              router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }" target="_blank") {{ quest.NAME }}

        el-tab-pane(:label="$t('ダイアログ')" name="dialog" v-if="dataManager.advQuestsByCharacterId[character.DF] && dataManager.advQuestsByCharacterId[character.DF].length")
          div
            div.character-quest(v-for="quest of dataManager.advQuestsByCharacterId[character.DF].filter((p) => !character.QST.some((o) => p.DF === o.QUEST_DF))")
              router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }" target="_blank") {{ quest.NAME }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { MVList as CharacterMVList } from '@/master/chara';
import { CharacterModifier } from '@/logic/modifiers/CharacterModifier';
import SkillTextInfo from '@/components/SkillTextInfo.vue';
import { EBattleEffectKind, eConditionType } from '@/logic/Enums';
import JsonViewDialog from '@/components/JsonViewDialog.vue';
import AbnormlStateTags from '@/components/skills/AbnormlStateTags.vue';

@Component({
  components: {
    SkillTextInfo,
    JsonViewDialog,
    AbnormlStateTags,
  },
})
export default class extends VueBase {
  public get EBattleEffectKind() {
    return EBattleEffectKind;
  }

  public get eConditionType() {
    return eConditionType;
  }

  public get CharacterMVList() {
    return CharacterMVList;
  }

  public activeTab = '';

  public character: CharacterMVList | null = null;

  public characterModifier = new CharacterModifier();

  public startLevel = 1;

  public endLevel = CharacterMVList.maxLevel;

  public beforeMount() {
    this.characterModifier.level = +this.$route.query.level || CharacterMVList.maxLevel;
    this.characterModifier.foodLevel = +this.$route.query.foodLevel || CharacterMVList.maxLevel;

    this.character = this.dataManager.characterById[this.$route.query.df as string];
    if (!this.character) {
      this.$router.push({ name: 'Characters' });
    }

    if (this.character.EXC) {
      this.activeTab = 'main';
    } else if (this.dataManager.advQuestsByCharacterId[this.character.DF] && this.dataManager.advQuestsByCharacterId[this.character.DF].length) {
      this.activeTab = 'dialog';
    }
  }

  public get weapons() {
    return this.character.WEAPON.map((p) => this.$t(this.dataManager.lookup.ESubCategory[p.GEN])).join(', ');
  }

  public get onlyItems() {
    return this.dataManager.itemsByGroupDf[this.character.GROUP_DF] || [];
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.character-levels
  display: flex
  flex-wrap: wrap
  > div:last-child
    margin-left: 10%

.food-levels
  display: flex
  flex-wrap: wrap

.food-level-container
  padding: 14px

.food-level-item
  display: flex
  align-items: center

.character-food__items
  display: flex
  flex-wrap: wrap
.character-food__item
  margin: 0 24px
.character-food__consume
  display: flex
  align-items: center
  flex-basis: auto
.character-food__quality-text
  whitespace: nowrap
</style>
