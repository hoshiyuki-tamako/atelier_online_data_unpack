<template lang="pug">
div.container(v-loading="loading")
  div(v-for="row of rows")
    h2 {{ row.NAME }}
    p {{ humanizeDuration(row.TM) }}
    div
      el-divider {{ $t('消費') }}
      el-tooltip(:content="dataManager.wealthById[row.DEPWTH.DF].NAME" placement="left")
        span.wealth-container
          img(:src="dataManager.wealthById[row.DEPWTH.DF].icon" :alt="dataManager.wealthById[row.DEPWTH.DF].NAME")
          span {{ row.DEPWTH.CNT }}
    div
      el-divider {{ $t('報酬') }}
      p EXP {{ row.RWD.EXP }}
      div(v-for="wth of row.RWD.WTH")
        el-tooltip(:content="dataManager.wealthById[wth.DF].NAME" placement="left")
          span.wealth-container
            img(:src="dataManager.wealthById[wth.DF].icon" :alt="dataManager.wealthById[wth.DF].NAME")
            span {{ wth.CNT }}
      div.rewards
        div.reward(v-for="rwd of row.RWD.TRS.concat(row.RWD.ITM)")
          template(v-for="item of [dataManager.itemById[rwd.DF]].filter((p) => p)")
            el-tooltip(:content="item.NAME" placement="left")
              router-link.quest-reward-item-container(:to="{ name: 'ItemsItem', query: { df: item.DF, quality: rwd.QTY } }" target="_blank")
                p.reward-title
                  span {{ $t('品質') }}{{ rwd.QTY }}
                  span(v-if="rwd.TRT") {{ dataManager.skillById[rwd.TRT].name.replace(/\s+/gm, '') }}
                img(:src="item.icon" :alt="item.NAME")
    div
      el-divider {{ $t('ボーナス') }}
      div(v-for="join of row.JCND")
        p
          span(v-if="join.ESS") *
          span(v-if="join.TYPE === eConditionType.TotalLv") total LV {{ join.VALS[0] }}
          span(v-else-if="join.TYPE === eConditionType.CharaCnt") {{ join.VALS[0] }}人以上のキャラを編成
          span(v-else-if="join.TYPE === eConditionType.TargetChara") LV{{ join.VALS[1] }}以上の{{ dataManager.characterById[join.VALS[0]].NAME }}の編成
          span(v-else-if="join.TYPE === eConditionType.MinLv") LV{{ join.VALS[0] }}以上のキャラを{{ join.VALS[1] }}人以上編成
          template(v-if="join.TYPE === eConditionType.TargetChara" v-for="character of [dataManager.characterById[join.VALS[0]]].filter((p) => p)")
            router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
              img.icon-small(:src="character.icon" :alt="character.NAME")
          span {{ join.RATEBNS }} {{ $t('ボーナス') }}
    div
      el-divider {{ $t('即帰還') }}
      p(v-for="wth of row.INSWTH")
        el-tooltip(:content="dataManager.wealthById[wth.DF].NAME" placement="left")
          span.wealth-container
            img(:src="dataManager.wealthById[wth.DF].icon" :alt="dataManager.wealthById[wth.DF].NAME")
            span 1 {{ $t('個') }} / {{ humanizeDuration(wth.CNT) }} ( {{ row.TM / wth.CNT }} {{ $t('個') }} / {{ humanizeDuration(row.TM) }} )
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { HuntInfo } from '@/models/HuntInfo';
import { api } from '@/utils/ApiManager';
import humanizeDuration from 'humanize-duration';
import { eConditionType } from '@/logic/Enums';

@Component({
  components: {
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
    };
    return humanizeDuration(second * 1000, {
      language: languageMap[this.dataManager.locale],
    });
  }

  public loading = true;

  public rows = [] as HuntInfo[];

  public async created() {
    this.rows = await api.comHuntSummary();
    this.loading = false;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.rewards
  display: flex
  flex-wrap: wrap
  .reward
    margin: 12px

.reward-title
  display: flex
  flex-direction: column

.quest-reward-item-container
  display: flex
  align-items: center

.quest-reward-item-container img
  width: 60px
</style>
