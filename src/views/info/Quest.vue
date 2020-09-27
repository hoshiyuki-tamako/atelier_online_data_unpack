<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('カテゴリー') }}
      el-select(v-model="filter.category" clearable filterable)
        el-option(v-for="item of categoryFilter" :key="item.value" :label="item.label" :value="item.value")

    div.filter
      span {{ $t('キャラクター') }}
      el-select(v-model="filter.character" clearable filterable)
        el-option(v-for="item of characterFilter" :key="item.value" :label="item.label" :value="item.value")

    div.filter
      el-checkbox-group(v-model="filter.has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}

    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="filter.name" clearable)

    div.filter
      el-switch(v-model="filter.extraQuest" :active-text="$t('EXクェスト')")

    div.filter
      el-button(@click="onClickExpandAll") {{ $t('すべて展開') }}

  div.content
    el-table(ref="table" :data="filteredPaginationQuests" :row-key="getRowKey" @sort-change="onSortChange")
      el-table-column(type="expand")
        template(slot-scope="props")
          template(v-for="quest of [props.row]")
            div.item-container
              div.item-container-left
                div(v-if="quest.CHARA")
                  router-link(:to="{ name: 'CharactersCharacter', query: { df: quest.CHARA } }")
                  img.icon-full(:src="dataManager.characterById[quest.CHARA].icon" :alt="dataManager.characterById[quest.CHARA].NAME")
                h3 {{ quest.NAME }}
                p {{ quest.DESC }}
                br
                p DF: {{ quest.DF }}
                p {{ $t('クェスト号') }}: {{ quest.QUEST_NO }}
                p {{ $t('クェストステップ') }}: {{ quest.QUEST_SUB_NO }}
                p {{ $t('種類') }}: {{ $t(dataManager.lookup.EQuestCategory[quest.CATEG]) }}
                p {{ $t('解放チャプター') }}: {{ quest.CHAPTER ? quest.CHAPTER : '-' }}
                p {{ $t('キークェスト') }}: {{ Util.tickCross(quest.KEYQUEST) }}
                p {{ $t('重要') }}: {{ Util.tickCross(quest.IMPORTANT) }}
                p {{ $t('挑戦') }}: {{ Util.tickCross(quest.CHALLENGE) }}
                p(v-if="quest.AREA") {{ $t('区域') }}:
                  template(v-for="area of [dataManager.areaInfoById[quest.AREA]].filter((p) => p)")
                    template(v-for="fieldName of [dataManager.fieldNameById[area.iAreaNameId]].filter((p) => p)") {{ fieldName.strAreaName }}
              div.item-container-right
                div(v-if="quest.CONDITION")
                  h4 {{ $t('達成條件') }}
                  p {{ quest.CONDITION }}
                div(v-if="quest.COST.WTH.CNT")
                  el-divider {{ $t('消費') }}
                  span.wealth-container
                    img(:src="dataManager.wealthById[quest.COST.WTH.DF].icon" :alt="dataManager.wealthById[quest.COST.WTH.DF].NAME")
                    span {{ quest.COST.WTH.CNT }}

                div(v-if="quest.ENM.length")
                  el-divider {{ $t('討伐') }}
                  div
                    div.quest-kill-container(v-for="[enm, enemy] of quest.ENM.map((enm) => [enm, dataManager.enemyById[enm.DF]]).filter((p) => p[1])")
                      router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }" target="_blank")
                        img(:src="enemy.icon" :alt="enemy.strName")
                        span x {{ enm.BDR }}

                div(v-if="quest.GET.length")
                  el-divider {{ $t('調合入手') }}
                  div
                    div(v-for="[get, item] of quest.GET.map((get) => [get, dataManager.itemById[get.DF]]).filter((p) => p[1])")
                      router-link.quest-reward-item-container(:to="{ name: item.RSP.length ? 'ToolsComposeItem' : 'ItemsItem', query: { df: item.DF, quality: get.QTY } }" target="_blank")
                        p {{ $t('品質') }}{{ get.QTY }}
                        img(:src="item.icon" :alt="item.NAME")
                        p x {{ get.BDR }}

                div(v-if="quest.DLV.length")
                  el-divider {{ $t('納品') }}/{{ $t('報告') }}
                  div
                    div(v-for="[dlv, item] of quest.DLV.map((dlv) => [dlv, dataManager.itemById[dlv.DF]]).filter((p) => p[1])")
                      router-link.quest-reward-item-container(:to="{ name: item.RSP.length ? 'ToolsComposeItem' : 'ItemsItem', query: { df: item.DF, quality: dlv.QTY } }" target="_blank")
                        p {{ $t('品質') }}{{ dlv.QTY }}
                        img(:src="item.icon" :alt="item.NAME")
                        p x {{ dlv.BDR }}

                div(v-if="quest.RWD_ITEM.length || quest.RWD_WTH.length")
                  el-divider {{ $t('報酬') }}
                  div(v-for="[rwd, item] of quest.RWD_ITEM.map((rwd) => [rwd, dataManager.itemById[rwd.DF]]).filter((p) => p[1])")
                    router-link.quest-reward-item-container(:to="{ name: 'ItemsItem', query: { df: item.DF, quality: rwd.QTY } }" target="_blank")
                      p {{ $t('品質') }}{{ rwd.QTY }}
                      img(:src="item.icon" :alt="item.NAME")
                      p x {{ rwd.CNT }}
                  div(v-for="[rwd, wealth] of quest.RWD_WTH.map((rwd) => [rwd, dataManager.wealthById[rwd.DF]])")
                      span.wealth-container
                        img(:src="wealth.icon" :alt="wealth.NAME")
                        span {{ rwd.CNT }}
                  div(v-if="quest.RNK_PT")
                    span.wealth-container
                      img(src="img/icon_item01/Texture2D/icon_item01_00009.png" :alt="$t('アカデミーポイント')")
                      span {{ quest.RNK_PT }}

                div(v-if="quest.UNLOCK.length")
                  el-divider {{ $t('必要称号') }}
                    div(v-for="[unlock, degree] of quest.UNLOCK.map((unlock) => [unlock, dataManager.degreeById[unlock.DF]]).filter(([unlock, degree]) => degree.STP === unlock.STP)")
                      p {{ degree.NAME }}

                div(v-if="quest.PARTY_IN")
                  el-divider {{ $t('必要キャラクター') }}
                  div
                    router-link(:to="{ name: 'CharactersCharacter', query: { df: quest.PARTY_IN } }")
                      img.icon-middle(:src="dataManager.characterById[quest.PARTY_IN].icon" :alt="dataManager.characterById[quest.PARTY_IN].NAME")
      el-table-column(prop="DF" label="DF" width="100%" sortable="custom")
      el-table-column(prop="NAME" :label="$t('名前')" sortable="custom")
      el-table-column(prop="CATEG" :label="$t('カテゴリー')" sortable="custom")
        template(slot-scope="scope") {{ $t(dataManager.lookup.EQuestCategory[scope.row.CATEG]) }}
      el-table-column(prop="COST.WTH.CNT" :label="$t('消費')" width="100%" sortable="custom")
        template(slot-scope="scope") {{ Util.tickCross(scope.row.COST.WTH.CNT) }}
      el-table-column(prop="ENM.length" :label="$t('討伐')" width="100%" sortable="custom")
        template(slot-scope="scope") {{ Util.tickCross(scope.row.ENM.length) }}
      el-table-column(prop="GET.length" :label="$t('調合入手')" width="100%" sortable="custom")
        template(slot-scope="scope") {{ Util.tickCross(scope.row.GET.length) }}
      el-table-column(prop="DLV.length" :label="`${$t('納品')}/${$t('報告')}`" sortable="custom")
        template(slot-scope="scope") {{ Util.tickCross(scope.row.DLV.length) }}
      el-table-column(prop="CHARA" :label="$t('キャラクター')" sortable="custom")
        template(slot-scope="scope")
          img.character-preview(v-if="scope.row.CHARA" :src="dataManager.characterById[scope.row.CHARA].icon" :alt="dataManager.characterById[scope.row.CHARA].NAME")
    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredQuests.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { Util } from '@/utils/Util';
import { MVList as QuestMVList } from '@/master/quest';
import LRU from 'lru-cache';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public get Util() {
    return Util;
  }

  public filter = {
    category: null,
    character: null,
    has: [],
    name: '',
    extraQuest: false,

    sort: '',
    order: null,
  };

  public page = 1;

  public take = 100;

  public filterCache = new LRU<string, QuestMVList[]>(100);

  public currentRows = [] as QuestMVList[];

  public get categoryFilter() {
    return Object.keys(dataManager.questsByCategory)
      .filter((p) => p)
      .map((value) => ({
        label: this.$t(dataManager.lookup.EQuestCategory[value]),
        value,
      }));
  }

  public get characterFilter() {
    return dataManager.charactersCanBattle.map((p) => ({
      label: p.NAME,
      value: p.DF,
    }));
  }

  public get hasFilter() {
    return [
      {
        label: this.$t('消費'),
        value: 1,
      },
      {
        label: this.$t('討伐'),
        value: 2,
      },
      {
        label: this.$t('調合入手'),
        value: 3,
      },
      {
        label: `${this.$t('納品')}/${this.$t('報告')}`,
        value: 4,
      },
    ];
  }

  public get filteredQuests() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      const quests = this.filter.category ? dataManager.questsByCategory[this.filter.category] : [...dataManager.quest.m_vList].reverse();
      const filteredQuests = quests.filter((p) => (
        (!this.filter.character || p.CHARA === this.filter.character)
        && (!this.filter.name || p.DF === +this.filter.name || p.NAME.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))
        && (!this.filter.extraQuest || dataManager.extraQuestsByQuest[p.DF])
        && (!this.filter.has.includes(1) || p.COST.WTH.CNT)
        && (!this.filter.has.includes(2) || p.ENM.length)
        && (!this.filter.has.includes(3) || p.GET.length)
        && (!this.filter.has.includes(4) || p.DLV.length)
      ));

      if (this.filter.sort) {
        const findObject = (quest: QuestMVList) => this.filter.sort.split('.').reduce((o, i) => o[i], quest);
        if (this.filter.sort === 'NAME') {
          if (this.filter.order === 'ascending') {
            filteredQuests.sort((a, b) => findObject(a).localeCompare(findObject(b)));
          } else {
            filteredQuests.sort((a, b) => findObject(b).localeCompare(findObject(a)));
          }
        } else if (this.filter.order === 'ascending') {
          filteredQuests.sort((a, b) => findObject(a) - findObject(b));
        } else {
          filteredQuests.sort((a, b) => findObject(b) - findObject(a));
        }
      }
      this.filterCache.set(key, filteredQuests);
    }
    return this.filterCache.get(key);
  }

  public get filteredPaginationQuests() {
    this.currentRows = this.filteredQuests.slice((this.page - 1) * this.take, this.page * this.take);
    return this.currentRows;
  }

  public beforeMount() {
    if (this.$route.query.df) {
      this.filter.name = this.$route.query.df.toString();
    }
  }

  public mounted() {
    if (this.$route.query.df) {
      this.onClickExpandAll();
    }
  }

  public onClickExpandAll() {
    this.currentRows.forEach((row) => (this.$refs.table as any).toggleRowExpansion(row, true));
  }

  public getRowKey(row: QuestMVList) {
    return row.DF;
  }

  public onSortChange({ prop, order }: { prop: string, order: string }) {
    this.filter.sort = prop;
    this.filter.order = order;
  }

  public scrollTableTop() {
    (this.$refs.table as Vue).$el.scrollIntoView();
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.character-preview
  width: 100px

.quest-kill-container > a
  display: flex
  align-items: center

.quest-kill-container img
  width: 120px

.quest-reward-item-container
  display: flex
  align-items: center

.quest-reward-item-container img
  width: 60px
</style>
