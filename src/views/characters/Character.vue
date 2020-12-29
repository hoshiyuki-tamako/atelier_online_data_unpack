<template lang="pug">
div.container
  div.item-container(v-if="character")
    div.item-container-left
      h3.item-name {{ character.NAME }}
        img.icon-full(v-for="src of images" :src="src" :alt="character.NAME")
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

    div.item-container-right
      div(v-if="character.EXC")
        div
          el-form(label-position="left" label-width="110px")
            el-form-item(label="LV")
              el-input-number(v-model="characterModifier.level" size="mini" :min="1" :step="1" step-strictly)
            el-form-item(:label="`${$t('食事')} LV`")
              el-input-number(v-model="characterModifier.foodLevel" size="mini" :min="0" :max="Math.min(character.FDM.length, characterModifier.level)" :step="1" step-strictly)
        div.character-levels
          table
            tr(v-for="state of character.getStates(characterModifier.level, characterModifier.foodLevel)")
              th
                v-popover(placement="right-end" trigger="hover")
                  span {{ $t(state.label) }}
                  template(v-if="state.value || state.foodValue || state.skills.length" slot="popover")
                    div.popover-base
                      table
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
                v-popover(placement="right-end" trigger="hover")
                  span {{ state.total }}
                  template(v-if="state.value || state.foodValue || state.skills.length" slot="popover")
                    div.popover-base
                      table
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
                v-popover(placement="right-end" trigger="hover")
                  span {{ $t(element.label) }}
                  template(v-if="element.skills.length" slot="popover")
                    div.popover-base
                      table
                        tr(v-if="element.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of element.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
              td
                v-popover(placement="right-end" trigger="hover")
                  span {{ element.value }}
                  template(v-if="element.skills.length" slot="popover")
                    div.popover-base
                      table
                        tr(v-if="element.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of element.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
          div
            div(v-for="skill in character.getSkills(characterModifier.level)")
              v-popover(placement="right-end" trigger="hover")
                p {{ skill.name }}
                template(slot="popover")
                  div.popover-base
                    p.popover-base__detail(v-if="skill.detail") {{ skill.detail }}
                    br
                    p {{ $t('数値') }}: {{ skill.effectValue }}, {{ skill.effectValue2 }}
                    p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}j
                    p(v-for="[state, abnormalState] of skill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}

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

      div(v-if="character.SKILL.length")
        el-divider {{ $t('スキル') }}
        div(v-for="{ level, skillDfs } of character.skillsByLevel")
          SkillTextInfo(:skills="skillDfs.map((p) => dataManager.skillById[p]).filter((p) => p)")
            template(slot="title") LV {{ level }}

      div(v-if="character.BA.length")
        el-divider {{ $t('ブレイズアーツ') }} (BA)
        div(v-for="ba of character.BA")
          div(v-for="[lv, blazeArt] of dataManager.blazeArtById[ba.DF].LV.entries()")
            template(v-for="[skill, baLevel] of [[dataManager.skillById[blazeArt.SKILL_DF], lv + 1]]")
              SkillTextInfo(:skills="[skill]")
                template(slot="title") {{ ba.LV }} / BA LV {{ baLevel }} / EXP {{ dataManager.blazeArtById[ba.DF].levelExperience(baLevel) }}

      div(v-if="character.FDM.length")
        el-divider {{ $t('食事') }}
        div.character-food__items
          div.character-food__item(v-for="fdm of character.FDM")
            el-divider LV{{ fdm.NO }}
            template(v-for="[fd, item] of fdm.FD.map((p) => [p, dataManager.itemById[p.DF]])")
              el-tooltip(:content="item.NAME" placement="left")
                router-link.character-food__consume(:to="item.RSP.length ? { name: 'ToolsComposeItem', query: { df: item.DF, quality: fd.QTY } } : { name: 'ItemsItem', query: { df: item.DF } }")
                  span.character-food__quality-text {{ $t('品質') }} {{ fd.QTY }}
                  img.icon-small(:src="item.icon" :alt="item.NAME")
            table
              tr(v-for="state of Object.keys(character.SPEC)")
                td {{ $t(dataManager.lookup.state[state] )}}
                td {{ fdm[state] }}

      div(v-if="character.QST.length")
        el-divider {{ $t('クェスト') }}
        div.character-quest(v-for="[qst, quest] of character.QST.map((p) => [p, dataManager.questById[p.QUEST_DF]]).filter(([, quest]) => quest)")
          el-divider LV {{ qst.LV }}
          router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }") {{ quest.NAME }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { MVList as CharacterMVList } from '@/master/chara';
import { CharacterModifier } from '@/logic/modifiers/CharacterModifier';
import SkillTextInfo from '@/components/SkillTextInfo.vue';

@Component({
  components: {
    SkillTextInfo,
  },
})
export default class extends VueBase {
  public character: CharacterMVList | null = null;

  public characterModifier = new CharacterModifier();

  public beforeMount() {
    this.characterModifier.level = +this.$route.query.level || CharacterMVList.maxLevel;
    this.characterModifier.foodLevel = +this.$route.query.foodLevel || CharacterMVList.maxLevel;

    this.character = this.dataManager.characterById[this.$route.query.df as string];
    if (!this.character) {
      this.$router.push({ name: 'Characters' });
    }
  }

  public get images() {
    return Object.values(this.dataManager.files.img.icon_chara.Texture2D)
      .filter((p: string) => p.startsWith(`icon_chara_all_${this.character.DF.toString().padStart(4, '0')}`))
      .map((p) => `img/icon_chara/Texture2D/${p}`);
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

th
  white-space: nowrap
th, td
  text-align: left
  padding: 4px

.character-levels
  display: flex
  flex-wrap: wrap
  > div:last-child
    margin-left: 10%

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
