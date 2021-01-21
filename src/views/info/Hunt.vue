<template lang="pug">
div.hunt-container(v-loading="loading")
  div.filters
    div.filter
      span {{ $t('所要時間') }}
      el-select(v-model="timeCost" clearable filterable)
        el-option(v-for="item of timeCosts" :key="item.value" :label="item.label" :value="item.value")
    CharacterSelector(v-model="character" :characters="characters")
    ItemSelector(v-model="item" :items="items")
    SkillSelector(v-model="skill" :skills="skills" :title="$t('強化効果')")
  el-card.hunt-card(v-for="row of filteredRows" :key="row.HUNTID")
    div
      h2.hunt-title
        span {{ row.NAME }} ({{ humanizeDuration(row.TM) }})
      el-tooltip(:content="dataManager.wealthById[row.DEPWTH.DF].NAME" placement="left")
        span.wealth-container
          span {{ $t('消費') }}
          img(:src="dataManager.wealthById[row.DEPWTH.DF].icon" :alt="dataManager.wealthById[row.DEPWTH.DF].NAME")
          span {{ row.DEPWTH.CNT }}
    div
      el-divider {{ $t('報酬') }}
      p {{ $t('経験値') }} {{ row.RWD.EXP }}
      div(v-for="wth of row.RWD.WTH")
        el-tooltip(:content="dataManager.wealthById[wth.DF].NAME" placement="left")
          span.wealth-container
            img(:src="dataManager.wealthById[wth.DF].icon" :alt="dataManager.wealthById[wth.DF].NAME")
            span {{ wth.CNT }}
      br
      div.rewards
        el-card(v-for="(rwd, i) of row.RWD.TRS.concat(row.RWD.ITM)" :key="i")
          template(v-for="item of [dataManager.itemById[rwd.DF]].filter((p) => p)")
            el-tooltip(:content="item.NAME" placement="left")
              router-link.quest-reward-item-container(:to="{ name: 'ItemsItem', query: { df: item.DF, quality: rwd.QTY } }")
                p.reward-title
                  span {{ $t('品質') }}{{ rwd.QTY }}
                  span(v-if="rwd.TRT") {{ dataManager.skillById[rwd.TRT].name.replace(/\s+/gm, '') }}
                img(:src="item.icon" :alt="item.NAME")
    div
      el-divider {{ $t('ボーナス') }}
      div(v-for="join of row.JCND")
        p
          span ({{ join.RATEBNS }} {{ $t('ボーナス') }}) {{ ' ' }}
          template(v-if="join.ESS")
            el-tooltip(:content="$t('必要')" placement="left")
              span *
          span(v-if="join.TYPE === eConditionType.TotalLv") {{ $t('合計LV') }}{{ join.VALS[0] }}
          span(v-else-if="join.TYPE === eConditionType.CharaCnt") {{ $t('{0}人以上のキャラを編成', join.VALS) }}
          span(v-else-if="join.TYPE === eConditionType.TargetChara") {{ $t('LV{0}以上の{1}の編成', [join.VALS[1], dataManager.characterById[join.VALS[0]].NAME]) }}
          span(v-else-if="join.TYPE === eConditionType.MinLv") {{ $t('LV{0}以上のキャラを{1}人以上編成', join.VALS) }}
          template(v-if="join.TYPE === eConditionType.TargetChara" v-for="character of [dataManager.characterById[join.VALS[0]]].filter((p) => p)")
            router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
              img.icon-small(:src="character.icon" :alt="character.NAME")
    div
      el-divider {{ $t('即帰還') }}
      p(v-for="wth of row.INSWTH")
        el-tooltip(:content="dataManager.wealthById[wth.DF].NAME" placement="left")
          span.wealth-container
            img(:src="dataManager.wealthById[wth.DF].icon" :alt="dataManager.wealthById[wth.DF].NAME")
            span
              span 1{{ $t('個') }}/{{ humanizeDuration(wth.CNT) }}
              span(v-if="row.TM > wth.CNT") {{ ' ' }}({{ (row.TM / wth.CNT).toFixed() }}{{ $t('個') }}/{{ humanizeDuration(row.TM) }})
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Enumerable from 'linq';
import humanizeDuration from 'humanize-duration';
import VueBase from '@/components/VueBase';
import { HuntInfo } from '@/models/HuntInfo';
import { api } from '@/utils/ApiManager';
import { eConditionType } from '@/logic/Enums';
import CharacterSelector from '@/components/inputs/CharacterSelector.vue';
import ItemSelector from '@/components/inputs/ItemSelector.vue';
import SkillSelector from '@/components/inputs/SkillSelector.vue';

@Component({
  components: {
    CharacterSelector,
    ItemSelector,
    SkillSelector,
  },
})
export default class extends VueBase {
  public get eConditionType() {
    return eConditionType;
  }

  public humanizeDuration(second: number) {
    const languageMap = {
      'ja-JP': 'ja',
      'zh-TW': 'zh_TW',
      'zh-HK': 'zh_TW',
      'zh-CN': 'zh_CN',
    };
    return humanizeDuration(second * 1000, {
      spacer: '',
      language: languageMap[this.dataManager.locale],
    });
  }

  public loading = true;

  // data
  public rows = [] as HuntInfo[];

  // filter
  public timeCost: number | null = null;

  public character: number | null = null;

  public item: number | null = null;

  public skill: number | null = null;

  public get timeCosts() {
    return Enumerable.from(this.rows)
      .groupBy((p) => this.humanizeDuration(p.TM))
      .select((p) => ({
        label: p.key(),
        value: p.firstOrDefault().TM,
      }))
      .orderBy((p) => p.value);
  }

  public get characters() {
    return Enumerable.from(this.rows)
      .selectMany((p) => p.JCND.filter((i) => i.TYPE === eConditionType.TargetChara).map((i) => i.VALS[0]))
      .groupBy((p) => p)
      .select((p) => this.dataManager.characterById[p.key()])
      .where((p) => !!p)
      .orderBy((p) => p.DF)
      .toArray();
  }

  public get items() {
    return Enumerable.from(this.rows)
      .selectMany((p) => p.RWD.TRS.concat(p.RWD.ITM))
      .groupBy((p) => p.DF)
      .select((p) => this.dataManager.itemById[p.key()])
      .where((p) => !!p)
      .orderBy((p) => p.DF)
      .toArray();
  }

  public get skills() {
    return Enumerable.from(this.rows)
      .selectMany((p) => p.RWD.TRS.concat(p.RWD.ITM))
      .groupBy((p) => p.TRT)
      .select((p) => this.dataManager.skillById[p.key()])
      .where((p) => !!p)
      .orderBy((p) => p.id)
      .toArray();
  }

  public get filteredRows() {
    return this.rows.filter((p) => (
      (!this.timeCost || this.timeCost === p.TM)
      && (!this.character || p.JCND.some((i) => i.TYPE === eConditionType.TargetChara && i.VALS[0] === this.character))
      && (!this.item || p.RWD.TRS.some((i) => i.DF === this.item) || p.RWD.ITM.some((i) => i.DF === this.item))
      && (!this.skill || p.RWD.TRS.some((i) => i.TRT === this.skill) || p.RWD.ITM.some((i) => i.TRT === this.skill))
    )).sort((a, b) => a.DTY - b.DTY);
  }

  public async created() {
    this.rows = await api.comHuntSummary();
    this.loading = false;
  }
}
</script>

<style lang="sass" scoped>
.hunt-container
  min-height: 100vh

a
  text-decoration: none

.hunt-card
  margin: 18px

.hunt-title
  text-align: center

.rewards
  display: flex
  flex-wrap: wrap

.reward-title
  display: flex
  flex-direction: column

.quest-reward-item-container
  display: flex
  align-items: center

.quest-reward-item-container img
  width: 60px
</style>
