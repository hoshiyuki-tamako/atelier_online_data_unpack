<template lang="pug">
div.container
  JsonViewDialog(ref="jsonViewDialog")

  el-dialog(title="" :visible.sync="fbxDialogVisible" width="90%")
    model-fbx.item-fbx-container(v-loading="fbxLoading" @on-load="fbxLoading = false" :src="item.model" :position="fbxPosition" :rotation="fbxRotation" backgroundColor="rgb(169,169,169)")

  div.item-container(v-if="item")
    div.item-container-left
      h3.item-name {{ item.NAME }}
      div.item-has-3d(v-if="item.model" @click="openFbxViwer")
        img.icon-full(:src="item.icon" :alt="item.NAME")
      div(v-else)
        img.icon-full(:src="item.icon" :alt="item.NAME")
      p {{ item.DESC }}
      div.item-local-link
        p(v-if="item.RSP.length")
          router-link(:to="{ name: 'ToolsComposeItem', query: { df: item.DF, quality: itemModifier.quality } }") {{ $t('調合') }}
        p(v-if="item.model")
          el-link(@click="openFbxViwer" :underline="false") 3D
      br
      p DF: {{ item.DF }}
      p {{ $t('種類') }}: {{ $t(dataManager.lookup.itemCategory[item.CATEG]) }}
      template(v-if="item.EQU_BRD")
        p {{ $t('性別') }}: {{ item.genderTextIcon }}
      template(v-if="item.WPN_KIND")
        p {{ $t('武器種類') }}: {{ $t(dataManager.lookup.weaponKind[item.WPN_KIND]) }}
        p {{ $t('攻撃属性') }}: {{ $t(dataManager.lookup.EBattleElementKind[item.elementChangeSkill ? item.elementChangeSkill.effectValue : 0]) }}
        p(v-if="item.WPN_KIND !== EWeaponKind.eSHIELD") {{ $t('攻撃タイプ') }}: {{ $t(dataManager.lookup.attackType[+ItemMVList.magicDamageWeaponKinds.includes(item.WPN_KIND)]) }}
        template(v-if="item.JOB.length")
          p {{ $t('職業') }}: {{ item.JOB.map(p => $t(dataManager.lookup.EJobKind[p])).join(',') }}
        p(v-if="item.getAttackSkill()") {{ $t('SP回復率') }} {{ item.getAttackSkill().spAdd }} {{ $t('倍') }}

      template(v-if="item.RSP.length")
        p {{ $t('レシピ種類') }}: {{ item.RCP_TYPE === 1 ? $t('レジェンドレシピ') : $t('一般レシピ') }}
        p {{ $t('おすすめ錬金 LV') }} {{ item.ALT ? item.ALT.LV : '-' }}
      p(v-if="item.ALT.EXP") {{ $t('調合') }}{{ $t('経験値') }}: {{ item.ALT.EXP }}
      p
        el-tooltip(:content="dataManager.wealthById[2].NAME" placement="right")
          span.wealth-container
            span {{ $t('売却') }}
            img(src="img/icon_item01/Texture2D/icon_item01_00002.png" :alt="dataManager.wealthById[2].NAME")
            span {{ item.RST.MN }}
      br
      el-link(@click="$refs.jsonViewDialog.open(item)" :underline="false") {{ $t('Rawデータ') }}

    div.item-container-right
      div(v-if="item.hasSkill || item.EQU_BRD")
        div
          el-form(label-position="left" label-width="110px")
            el-form-item(:label="$t('品質')")
              el-input-number(v-model="itemModifier.quality" size="mini" :min="1" :max="item.EQU_BRD ? Infinity : 100" :step="1" step-strictly)
            el-form-item(v-if="item.EQU_BRD" label="LV")
              el-input-number(v-model="itemModifier.level" size="mini" :min="1" :step="1" step-strictly)
        div
          div.item-modify
            div(v-if="item.EQU_BRD")
              div.item-levels
                table
                  tr(v-for="state of item.getStates(itemModifier.quality, itemModifier.level)")
                    th
                      v-popover(placement="right-end" trigger="hover")
                        span {{ $t(state.label) }}
                        template(v-if="state.value || state.skills.length" slot="popover")
                          div.popover-base
                            table
                              tr(v-if="state.value")
                                th {{ $t('ベース') }}
                                td {{ state.value }}
                              tr(v-if="state.skills.length")
                                th {{ $t('スキル') }}
                                td
                                  p(v-for="skill of state.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
                    td
                      v-popover(placement="right-end" trigger="hover")
                        span {{ state.total }}
                        template(v-if="state.value || state.skills.length" slot="popover")
                          div.popover-base
                            table
                              tr(v-if="state.value")
                                th {{ $t('ベース') }}
                                td {{ state.value }}
                              tr(v-if="state.skills.length")
                                th {{ $t('スキル') }}
                                td
                                  p(v-for="skill of state.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
                  tr(v-for="element of item.getElements(itemModifier.quality)")
                    th
                      v-popover(placement="right-end" trigger="hover")
                        span {{ $t(element.label) }}
                        template(v-if="element.value || element.skills.length" slot="popover")
                          div.popover-base
                            table
                              tr(v-if="element.value")
                                th {{ $t('ベース') }}
                                td {{ element.value }}
                              tr(v-if="element.skills.length")
                                th {{ $t('スキル') }}
                                td
                                  p(v-for="skill of element.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
                    td
                      v-popover(placement="right-end" trigger="hover")
                        span {{ element.total }}
                        template(v-if="element.value || element.skills.length" slot="popover")
                          div.popover-base
                            table
                              tr(v-if="element.value")
                                th {{ $t('ベース') }}
                                td {{ element.value }}
                              tr(v-if="element.skills.length")
                                th {{ $t('スキル') }}
                                td
                                  p(v-for="skill of element.skills") {{ skill.name }} {{ skill.effectValue > 0 ? '+' : ''}}{{ skill.effectValue }}
            div
              div(v-for="skill of item.getSkills(itemModifier.quality)")
                v-popover(placement="right-end" trigger="hover")
                  p {{ skill.name }}
                  template(slot="popover")
                    div.popover-base
                      p.popover-base__detail(v-if="skill.detail") {{ skill.detail }}
                      br
                      p {{ $t('数値') }}: {{ skill.effectValue }}, {{ skill.effectValue2 }}
                      p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ $t('確率', [(state.rate * 100).toFixed()]) }} {{ abnormalState.name }} {{ abnormalState.turn }} {{ $t('ターン') }}
                      p(v-for="[state, abnormalState] of skill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ $t('確率', [(state.rate * 100).toFixed()]) }} {{ abnormalState.name }} {{ abnormalState.turn }} {{ $t('ターン') }}

      div(v-if="item.GROUP_DF && dataManager.charactersByGroupDf[item.GROUP_DF]")
        el-divider {{ $t('キャラクター專用') }}
        p(v-for="character of dataManager.charactersByGroupDf[item.GROUP_DF]")
          router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
            el-tooltip(:content="character.NAME" placement="top")
              img.icon-middle(:src="character.icon" :alt="character.NAME")
      div(v-if="item.LRCP_CHARA.length")
        el-divider {{ $t('レジェンドレシピ') }}
        div(v-for="character of item.LRCP_CHARA.map((p) => dataManager.characterById[p.DF]).filter((p) => p)")
          p
            router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
              el-tooltip(:content="character.NAME" placement="top")
                img.icon-middle(:src="character.icon" :alt="character.NAME")
      div(v-if="dataManager.questsByGetItem[item.DF]")
        el-divider {{ $t('クエスト調合/採取') }}
        div(v-for="quest of dataManager.questsByGetItem[item.DF]")
          p
            router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }") {{ quest.NAME }}
      div(v-if="dataManager.questsByDeliverItem[item.DF]")
        el-divider {{ $t('クエスト納品') }}
        div(v-for="quest of dataManager.questsByDeliverItem[item.DF]")
          p
            router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }") {{ quest.NAME }}
      div(v-if="dataManager.questsByRewardItem[item.DF]")
        el-divider {{ $t('クエスト報酬') }}
        div(v-for="quest of dataManager.questsByRewardItem[item.DF]")
          p
            router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }") {{ quest.NAME }}
      div(v-if="dataManager.api.huntInfosByItemId[item.DF]")
        el-divider {{ $t('トレジャー') }}
        div(v-for="(huntInfo, i) of dataManager.api.huntInfosByItemId[item.DF]")
          p
            router-link(:to="{ name: 'InfoHunt', query: { huntId: huntInfo.HUNTID } }") {{ huntInfo.NAME }}
          p(v-for="(rwd, i) of huntInfo.RWD.TRS.concat(huntInfo.RWD.ITM).filter((o) => o.DF === item.DF)")
            span {{ $t('品質') }}{{ rwd.QTY }}
            span(v-if="rwd.TRT")  {{ dataManager.skillById[rwd.TRT].name.replace(/\s+/gm, '') }}
          br(v-if="dataManager.api.huntInfosByItemId[item.DF].length !== (i + 1)")

      div(v-for="fieldItem of [dataManager.fieldItemById[item.DF]].filter((p) => p)")
        el-divider {{ $t('フィールド用') }}
        table
          tr
            th {{ $t('目標') }}
            td {{ $t(dataManager.lookup.eFieldItemRange[fieldItem.eRange]) }}
          tr
            th {{ $t('効果') }}
            td {{ $t(dataManager.lookup.eFieldItemUse[fieldItem.eUse]) }}
          tr(v-for="abnormalStates of [fieldItem.eStateList.map((p) => dataManager.abnormalStateById[p]).filter((p) => p)].filter((p) => p.length)")
            th {{ $t('状態') }}
            td
              div(v-for="(abnormalState, i) of abnormalStates")
                p {{ abnormalState.name }}
                p {{ abnormalState.turn }} {{ $t('ターン') }}
                p(v-if="fieldItem.eStateList.length !== (i + 1)") {{ '>' }}
      div(v-if="item.RSP.length")
        el-divider {{ $t('調合條件') }}
        div(v-if="item.ALT.CST")
          p
            el-tooltip(:content="dataManager.wealthById[2].NAME" placement="right")
              span.wealth-container
                img(src="img/icon_item01/Texture2D/icon_item01_00002.png" :alt="dataManager.wealthById[2].NAME")
                span {{ item.ALT.CST }}
        div.item-compose-items
          div.item-compose-item(v-for="[rsp, item] of item.RSP.map((rsp) => [rsp, dataManager.itemById[rsp.DF]])")
            el-tooltip(:content="item.NAME" placement="top")
              router-link(:to="{ name: 'ItemsItem', query: { df: rsp.DF } }")
                img.icon-small(:src="item.icon" :alt="item.NAME")
                span x{{ rsp.NC }}
      div(v-if="dataManager.itemsByRecipe[item.DF]")
        el-divider {{ $t('材料') }}
        div.item-making-container
          div(v-for="otherItem of dataManager.itemsByRecipe[item.DF]")
            router-link(:to="{ name: 'ItemsItem', query: { df: otherItem.DF } }")
              el-tooltip(:content="otherItem.NAME" placement="top")
                img.icon-small(:src="otherItem.icon" :alt="otherItem.DF")
      template(v-if="item.SPC.length" v-for="[spc, skills] of item.SPC.map((spc) => [spc, spc.SKILL.map((p) => dataManager.skillById[p.DF]).filter((p) => p)]).filter((p) => p[1].length)")
        SkillTextInfo(:skills="skills")
          template(slot="title") {{ $t('スキル') }} ({{ $t('品質') }} {{ spc.THR }})
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { clamp } from 'lodash';
import { ModelFbx } from 'vue-3d-model';
import VueBase from '@/components/VueBase';
import { MVList as ItemMVList } from '@/master/item';
import { ItemModifier } from '@/logic/modifiers/ItemModifier';
import { EWeaponKind, ECategory } from '@/logic/Enums';
import SkillTextInfo from '@/components/SkillTextInfo.vue';
import JsonViewDialog from '@/components/JsonViewDialog.vue';

@Component({
  components: {
    'model-fbx': ModelFbx,
    SkillTextInfo,
    JsonViewDialog,
  },
})
export default class extends VueBase {
  public get ItemMVList() {
    return ItemMVList;
  }

  public get EWeaponKind() {
    return EWeaponKind;
  }

  // model
  public fbxDialogVisible = false;

  public fbxLoading: boolean | null = null;

  public get fbxRotation() {
    if (ItemMVList.weaponKindCategory.includes(this.item?.CATEG)) {
      return { x: 0, y: 0, z: Math.PI };
    }
    if (this.item.CATEG === ECategory.eARMOR) {
      return { x: -Math.PI / 2, y: 0, z: 0 };
    }
    if ([ECategory.eHELM, ECategory.eACCESSORY].includes(this.item.CATEG)) {
      return { x: 0, y: 0, z: Math.PI };
    }
    return { x: 0, y: 0, z: 0 };
  }

  public get fbxPosition() {
    if (ItemMVList.weaponKindCategory.includes(this.item?.CATEG)) {
      return { x: 0, y: 0, z: 0 };
    }
    if (this.item.CATEG === ECategory.eARMOR) {
      return { x: 0, y: -.5, z: 0 };
    }
    if ([ECategory.eHELM, ECategory.eACCESSORY].includes(this.item.CATEG)) {
      return { x: 0, y: 1.2, z: -1.2 };
    }
    return { x: 0, y: 0, z: 0 };
  }

  public openFbxViwer() {
    if (this.fbxLoading === null) {
      this.fbxLoading = true;
    }
    this.fbxDialogVisible = true;
  }

  // item
  public item: ItemMVList | null = null;

  public itemModifier = new ItemModifier();

  public beforeMount() {
    this.item = this.dataManager.itemById[this.$route.query.df as string];
    if (!this.item) {
      this.$router.push({ name: 'Items' });
    }

    const maxQuality = this.item.EQU_BRD ? Infinity : ItemMVList.itemMaxQuality;
    this.itemModifier.quality = this.$route.query.quality ? clamp(+this.$route.query.quality, 1, maxQuality) : ItemMVList.equipmentMaxQuality;
    this.itemModifier.level = this.$route.query.level ? clamp(+this.$route.query.level, 1, Infinity) : ItemMVList.equipmentMaxLevel;
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

.item-local-link
  display: flex
  > p:first-child
    margin-right: auto

.item-modify
  display: flex
  flex-wrap: wrap
  > div:last-child
    margin-left: 10%

.item-making-container
  display: flex
  flex-wrap: wrap

.item-compose-items
  display: flex
  flex-wrap: wrap
.item-compose-item
  a
    display: flex
    align-items: center

.item-levels
  display: flex
  flex-wrap: wrap
</style>
