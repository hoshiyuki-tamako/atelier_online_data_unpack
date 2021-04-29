<template lang="pug">
div.container
  AdventureRawDialog#quest-dialog(ref="advDialog")
  div.filters
    div.filter
      span {{ $t('カテゴリー') }}
      el-select(v-model="filter.category" @change="resetPage" clearable filterable)
        el-option(v-for="item of categoryFilter" :key="item.value" :label="item.label" :value="item.value")
    CharacterSelector(v-model="filter.character" :characters="dataManager.questCharacters" @change="resetPage")
    WealthSelector(v-model="filter.costWealth" :wealths="dataManager.questCostWealths" :title="$t('消費') + $t('財貨')" @change="resetPage")
    WealthSelector(v-model="filter.rewardWealth" :wealths="dataManager.questRewardWealths" :title="$t('報酬') + $t('財貨')" @change="resetPage")
    DegreeSelector(v-model="filter.requireDegree" :degrees="dataManager.questRequireDegrees" :title="$t('必要称号')" @change="resetPage")
  div.filters
    div.filter
      span {{ $t('名前') }}/DF/ADV
      el-input(v-model="filter.name" @change="resetPage" clearable)
    div.filter
      el-switch(v-model="filter.extraQuest" @change="resetPage" :active-text="$t('EXクエスト')")
    div.filter
      el-switch(v-model="defaultExpandAll" :active-text="$t('すべて展開')")
  div.filters
    div.filter
      el-checkbox-group(v-model="filter.has" @change="resetPage" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.filters
    div.filter
      el-checkbox(v-model="showColumnDF") DF
      el-checkbox(v-model="showColumnNAME") {{ $t('名前') }}
      el-checkbox(v-model="showColumnCATEG") {{ $t('カテゴリー') }}
      el-checkbox(v-model="showColumnCOST") {{ $t('消費') }}
      el-checkbox(v-model="showColumnENM") {{ $t('討伐') }}
      el-checkbox(v-model="showColumnGET") {{ $t('調合/採取') }}
      el-checkbox(v-model="showColumnDLV") {{ `${$t('納品')}${$t('報告')}` }}
      el-checkbox(v-model="showColumnARA") {{ `${$t('場所に行く')}` }}
      el-checkbox(v-model="showColumnDialog") {{ $t('ダイアログ') }}
      el-checkbox(v-model="showColumnCharacter") {{ $t('キャラクター') }}

  div.content
    el-table.quest-table(ref="table" :data="filteredPaginationQuests" :default-expand-all.sync="defaultExpandAll" :row-key="getRowKey" @sort-change="onSortChange")
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
                p {{ $t('種類') }}: {{ $t(dataManager.lookup.EQuestCategory[quest.CATEG]) }}
                p(v-if="quest.TYPE") {{ $t('タイプ') }}: {{ $t(dataManager.lookup.EQuestType[quest.TYPE]) }}
                p {{ $t('解放チャプター') }}: {{ quest.CHAPTER ? quest.CHAPTER : '-' }}
                p {{ $t('キークエスト') }}: {{ tickCross(quest.KEY_QUEST) }}
                p {{ $t('重要') }}: {{ tickCross(quest.IMPORTANT) }}
                p {{ $t('挑戦') }}: {{ tickCross(quest.CHALLENGE) }}
                p(v-if="quest.AREA")
                  span {{ $t('区域') }}: &nbsp;
                  router-link(:to="{ name: 'Areas', query: { df: quest.AREA } }" target="_blank")
                    template(v-for="area of [dataManager.areaInfoById[quest.AREA]].filter((p) => p)")
                      template(v-for="fieldName of [dataManager.fieldNameById[area.iAreaNameId]].filter((p) => p)") {{ fieldName.strAreaName }}
              div.item-container-right
                div(v-if="quest.CONDITION")
                  h4 {{ $t('達成條件') }}
                  p {{ quest.CONDITION }}
                div(v-if="quest.COST.WTH.CNT")
                  el-divider {{ $t('消費') }}
                  el-tooltip(:content="dataManager.wealthById[quest.COST.WTH.DF].NAME" placement="left")
                    span.wealth-container
                      img(:src="dataManager.wealthById[quest.COST.WTH.DF].icon" :alt="dataManager.wealthById[quest.COST.WTH.DF].NAME")
                      span {{ quest.COST.WTH.CNT }}

                div(v-if="quest.ENM.length")
                  el-divider {{ $t('討伐') }}
                  div
                    div.quest-kill-container(v-for="[enm, enemy] of quest.ENM.map((enm) => [enm, dataManager.enemyById[enm.DF]]).filter((p) => p[1])")
                      el-tooltip(:content="enemy.strName" placement="left")
                        router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }" target="_blank")
                          img(:src="enemy.icon" :alt="enemy.strName")
                          span x {{ enm.BDR }}

                div(v-if="quest.GET.length")
                  el-divider {{ $t('調合/採取') }}
                  div
                    div(v-for="[get, item] of quest.GET.map((get) => [get, dataManager.itemById[get.DF]]).filter((p) => p[1])")
                      el-tooltip(:content="item.NAME" placement="left")
                        router-link.quest-reward-item-container(:to="{ name: item.RSP.length ? 'ToolsComposeItem' : 'ItemsItem', query: { df: item.DF, quality: get.QTY } }" target="_blank")
                          p {{ $t('品質') }}{{ get.QTY }}
                          img(:src="item.icon" :alt="item.NAME")
                          p x {{ get.BDR }}

                div(v-if="quest.DLV.length")
                  el-divider {{ $t('納品') }}/{{ $t('報告') }}
                  div
                    div(v-for="[dlv, item] of quest.DLV.map((dlv) => [dlv, dataManager.itemById[dlv.DF]]).filter((p) => p[1])")
                      el-tooltip(:content="item.NAME" placement="left")
                        router-link.quest-reward-item-container(:to="{ name: item.RSP.length ? 'ToolsComposeItem' : 'ItemsItem', query: { df: item.DF, quality: dlv.QTY } }" target="_blank")
                          p {{ $t('品質') }}{{ dlv.QTY }}
                          img(:src="item.icon" :alt="item.NAME")
                          p x {{ dlv.BDR }}

                div(v-if="quest.REG.length")
                  el-divider {{ $t('場所に行く') }}
                  div
                    div(v-for="[reg, areaInfo] of quest.REG.map((reg) => [reg, dataManager.areaInfoById[reg.DF]]).filter((p) => p[1])")
                      router-link(:to="{ name: 'Areas', query: { df: reg.DF } }" target="_blank")
                        span(v-if="dataManager.fieldNameById[areaInfo.iAreaNameId]") {{ dataManager.fieldNameById[areaInfo.iAreaNameId].strAreaName }}
                        span(v-else) {{ areaInfo.iAreaNameId }}
                div(v-if="quest.ARA.length")
                  el-divider {{ $t('場所に行く') }}
                  div
                    div(v-for="[ara, areaInfo] of quest.ARA.map((ara) => [ara, dataManager.areaInfoById[ara.AREA]]).filter((p) => p[1])")
                      router-link(:to="{ name: 'Areas', query: { df: ara.AREA } }" target="_blank")
                        span(v-if="dataManager.fieldNameById[areaInfo.iAreaNameId]") {{ dataManager.fieldNameById[areaInfo.iAreaNameId].strAreaName }}
                        span(v-else) {{ areaInfo.iAreaNameId }}

                div(v-if="quest.RWD_ITEM.length || quest.RWD_WTH.length")
                  el-divider {{ $t('報酬') }}
                  div(v-for="[rwd, item] of quest.RWD_ITEM.map((rwd) => [rwd, dataManager.itemById[rwd.DF]]).filter((p) => p[1])")
                    el-tooltip(:content="item.NAME" placement="left")
                      router-link.quest-reward-item-container(:to="{ name: 'ItemsItem', query: { df: item.DF, quality: rwd.QTY } }" target="_blank")
                        p.reward-title
                          span {{ $t('品質') }}{{ rwd.QTY }}
                          span(v-if="rwd.TRT") {{ dataManager.skillById[rwd.TRT].name.replace(/\s+/gm, '') }}
                        img(:src="item.icon" :alt="item.NAME")
                        p x {{ rwd.CNT }}
                  div(v-for="[rwd, wealth] of quest.RWD_WTH.map((rwd) => [rwd, dataManager.wealthById[rwd.DF]])")
                    el-tooltip(:content="wealth.NAME" placement="left")
                      span.wealth-container
                        img(:src="wealth.icon" :alt="wealth.NAME")
                        span {{ rwd.CNT }}
                  div(v-if="quest.RNK_PT")
                    el-tooltip(:content="dataManager.wealthById[9999].NAME" placement="left")
                      span.wealth-container
                        img(src="img/icon_item01/Texture2D/icon_item01_00009.png" :alt="dataManager.wealthById[9999].NAME")
                        span {{ quest.RNK_PT }}

                div(v-if="quest.UNLOCK.length")
                  el-divider {{ $t('必要称号') }}
                  div(v-for="[unlock, degree] of quest.UNLOCK.map((unlock) => [unlock, dataManager.degreeByIdStep[unlock.DF][unlock.STP]])")
                    el-tooltip(:content="degree.DESC" placement="left")
                      span.degree-container
                        img(v-if="degree.TYP" :src="degree.icon" :alt="degree.NAME")
                        span {{ degree.NAME }}

                div(v-if="quest.PARTY_IN")
                  el-divider {{ $t('必要キャラクター') }}
                  div
                    el-tooltip(:content="dataManager.characterById[quest.PARTY_IN].NAME" placement="left")
                      router-link(:to="{ name: 'CharactersCharacter', query: { df: quest.PARTY_IN } }" target="_blank")
                        img.icon-middle(:src="dataManager.characterById[quest.PARTY_IN].icon" :alt="dataManager.characterById[quest.PARTY_IN].NAME")
      el-table-column(v-if="showColumnDF" prop="DF" label="DF" width="100%" sortable="custom")
      el-table-column(v-if="showColumnNAME" prop="NAME" :label="$t('名前')" sortable="custom")
      el-table-column(v-if="showColumnCATEG" prop="CATEG" :label="$t('カテゴリー')" sortable="custom")
        template(slot-scope="scope") {{ $t(dataManager.lookup.EQuestCategory[scope.row.CATEG]) }}
      el-table-column(v-if="showColumnCOST" prop="COST.WTH.CNT" :label="$t('消費')" width="100%" sortable="custom")
        template(slot-scope="scope") {{ tickCross(scope.row.COST.WTH.CNT) }}
      el-table-column(v-if="showColumnENM" prop="ENM.length" :label="$t('討伐')" width="100%" sortable="custom")
        template(slot-scope="scope") {{ tickCross(scope.row.ENM.length) }}
      el-table-column(v-if="showColumnGET" prop="GET.length" :label="$t('調合/採取')" width="120%" sortable="custom")
        template(slot-scope="scope") {{ tickCross(scope.row.GET.length) }}
      el-table-column(v-if="showColumnDLV" prop="DLV.length" :label="`${$t('納品')}${$t('報告')}`" width="100%" sortable="custom")
        template(slot-scope="scope") {{ tickCross(scope.row.DLV.length) }}
      el-table-column(v-if="showColumnARA" prop="ARA.length" :label="`${$t('場所に行く')}`" width="120%" sortable="custom")
        template(slot-scope="scope") {{ tickCross(scope.row.ARA.length || scope.row.REG.length) }}
      el-table-column(v-if="showColumnCharacter" prop="CHARA" :label="$t('キャラクター')"  width="130%" sortable="custom")
        template(slot-scope="scope")
          router-link(:to="{ name: 'CharactersCharacter', query: { df: scope.row.CHARA } }" target="_blank")
            img.character-preview(v-if="scope.row.CHARA" :src="dataManager.characterById[scope.row.CHARA].icon" :alt="dataManager.characterById[scope.row.CHARA].NAME")
      el-table-column(v-if="showColumnDialog" prop="NPC_FD.length" :label="$t('ダイアログ')" width="120%" sortable="custom")
        template(slot-scope="scope")
          el-button(v-if="scope.row.NPC_FD.some((p) => p.ADV)" @click="$refs.advDialog.openDialog(scope.row)" type="primary" size="small") {{ $t('ダイアログ') }}
    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredQuests.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { MVList as QuestMVList } from '@/master/quest';
import LRU from 'lru-cache';
import { mapFields } from 'vuex-map-fields';
import AdventureRawDialog from '@/components/AdventureRawDialog.vue';
import CharacterSelector from '@/components/inputs/CharacterSelector.vue';
import WealthSelector from '@/components/inputs/WealthSelector.vue';
import DegreeSelector from '@/components/inputs/DegreeSelector.vue';

abstract class VueWithMapFields extends VueBase {
  public showColumnDF!: boolean;

  public showColumnNAME!: boolean;

  public showColumnCATEG!: boolean;

  public showColumnCOST!: boolean;

  public showColumnENM!: boolean;

  public showColumnGET!: boolean;

  public showColumnDLV!: boolean;

  public showColumnARA!: boolean;

  public showColumnDialog!: boolean;

  public showColumnCharacter!: boolean;
}

@Component({
  components: {
    AdventureRawDialog,
    CharacterSelector,
    WealthSelector,
    DegreeSelector,
  },
  computed: {
    ...mapFields('questsFilter', ['showColumnDF', 'showColumnNAME', 'showColumnCATEG', 'showColumnCOST', 'showColumnENM', 'showColumnGET', 'showColumnDLV', 'showColumnARA', 'showColumnDialog', 'showColumnCharacter']),
  },
})
export default class extends VueWithMapFields {
  public filter = {
    category: null,
    character: null,
    costWealth: null,
    rewardWealth: null,
    requireDegree: null,
    has: [],
    name: '',
    extraQuest: false,

    sort: '',
    order: null,
  };

  public page = 1;

  public take = 100;

  public defaultExpandAll = false;

  public filterCache = new LRU<string, QuestMVList[]>(100);

  public currentRows = [] as QuestMVList[];

  public get categoryFilter() {
    return Object.keys(this.dataManager.questsByCategory)
      .filter((p) => p)
      .map((value) => ({
        label: this.$t(this.dataManager.lookup.EQuestCategory[value]),
        value,
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
        label: this.$t('調合/採取'),
        value: 3,
      },
      {
        label: `${this.$t('納品')}/${this.$t('報告')}`,
        value: 4,
      },
      {
        label: this.$t('場所に行く'),
        value: 5,
      },
      {
        label: this.$t('ダイアログ'),
        value: 6,
      },
      {
        label: this.$t('キークエスト'),
        value: 7,
      },
      {
        label: this.$t('挑戦'),
        value: 8,
      },
      {
        label: this.$t('必要称号'),
        value: 9,
      },
      {
        label: this.$t('必要キャラクター'),
        value: 10,
      },
      {
        label: this.$t('CG'),
        value: 11,
      },
      {
        label: this.$t('音声あり'),
        value: 12,
      },
    ];
  }

  public get filteredQuests() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      const quests = this.filter.category ? this.dataManager.questsByCategory[this.filter.category] : [...this.dataManager.quest.m_vList].reverse();
      const filteredQuests = quests.filter((p) => (
        (!this.filter.character || p.CHARA === this.filter.character)
        && (!this.filter.costWealth || p.COST.WTH.DF === this.filter.costWealth)
        && (!this.filter.rewardWealth || p.RWD_WTH.some((i) => i.DF === this.filter.rewardWealth))
        && (!this.filter.requireDegree || p.UNLOCK.some((i) => i.DF === this.filter.requireDegree))
        && (!this.filter.name || p.DF === +this.filter.name || p.NAME.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()) || p.NPC_FD.some((i) => i.ADV === this.filter.name))
        && (!this.filter.extraQuest || this.dataManager.extraQuestsByQuest[p.DF])
        && (!this.filter.has.includes(1) || p.COST.WTH.CNT)
        && (!this.filter.has.includes(2) || p.ENM.length)
        && (!this.filter.has.includes(3) || p.GET.length)
        && (!this.filter.has.includes(4) || p.DLV.length)
        && (!this.filter.has.includes(5) || p.ARA.length || p.REG.length)
        && (!this.filter.has.includes(6) || p.NPC_FD.some((i) => i.ADV))
        && (!this.filter.has.includes(7) || p.KEY_QUEST)
        && (!this.filter.has.includes(8) || p.CHALLENGE)
        && (!this.filter.has.includes(9) || p.UNLOCK.length)
        && (!this.filter.has.includes(10) || p.PARTY_IN)
        && (!this.filter.has.includes(11) || p.NPC_FD.some((i) => this.dataManager.advHasCg[i.ADV]))
        && (!this.filter.has.includes(12) || p.NPC_FD.some((i) => this.dataManager.advHasAudio[i.ADV]))
      ));

      if (this.filter.order) {
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
    if (this.defaultExpandAll) {
      this.$nextTick(this.expandAll.bind(this));
    }
    return this.currentRows;
  }

  public beforeMount() {
    if (this.$route.query.df) {
      this.filter.name = this.$route.query.df.toString();
    }
    if (this.$route.query.name) {
      this.filter.name = this.$route.query.name.toString();
    }
  }

  public mounted() {
    if (this.$route.query.df) {
      this.expandAll();
    }
  }

  public expandAll() {
    type ElementUiTable = {
      toggleRowExpansion: (row: QuestMVList, t: boolean) => void
    } & Vue;
    this.currentRows.forEach((row) => (this.$refs.table as ElementUiTable).toggleRowExpansion(row, true));
  }

  public getRowKey(row: QuestMVList) {
    return row.DF;
  }

  public onSortChange({ prop, order }: { prop: string, order: string }) {
    this.$set(this.filter, 'sort', prop);
    this.$set(this.filter, 'order', order);
    this.resetPage();
  }

  public scrollTableTop() {
    (this.$refs.table as Vue).$el.scrollIntoView();
  }

  public resetPage() {
    this.page = 1;
  }
}
</script>

<style lang="sass">
.quest-table
  table
    width: 100% !important
</style>

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
  .reward-title
    display: flex
    flex-direction: column

.quest-reward-item-container img
  width: 60px
</style>
