<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('詳細') }}
      el-input(v-model="description" clearable)
  div.filters
    div.filter
      span {{ $t('種類') }}
      el-select(v-model="type" clearable filterable)
        el-option(v-for="item in typeFilters" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('ステップ') }}
      el-select(v-model="step" clearable filterable)
        el-option(v-for="item in stepFilters" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('レア度') }}
      el-select(v-model="rarity" clearable filterable)
        el-option(v-for="item in rarityFilters" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      el-checkbox(v-model="isKeySideQuest" :label="$t('サイドクエスト')" border)
      el-checkbox(v-model="hasQuest" :label="$t('クエストに必要')" border)
  div.content
    el-table(ref="table" :data="filteredPaginationDegrees" @sort-change="onSortChange")
      el-table-column(prop="DF" label="DF" width="100%" sortable="custom")
      el-table-column(prop="STP" :label="$t('ステップ')" sortable="custom")
      el-table-column(prop="TYP" :label="$t('種類')" sortable="custom")
        template(slot-scope="scope") {{ $t(dataManager.lookup.EDegreeMissonType[scope.row.TYP]) }}
      el-table-column(prop="RTY" :label="$t('レア度')" sortable="custom")
        template(slot-scope="scope") {{ '⭐'.repeat(scope.row.RTY) }}
      el-table-column(prop="NAME" :label="$t('名前')" sortable="custom")
      el-table-column(prop="DESC" :label="$t('詳細')")
      el-table-column(:label="$t('画像')")
        template(slot-scope="scope")
          img.icon-degree(v-if="scope.row.TYP" :src="scope.row.icon" :alt="scope.row.NAME")
    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredDegrees.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { List as DegreeList } from '@/master/degree';
import Vue from 'vue';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public name = '';

  public description = '';

  public step: number | null = null;

  public type: number | null = null;

  public rarity: number | null = null;

  public isKeySideQuest = false;

  public hasQuest = false;

  public sort = '';

  public order = '';

  public page = 1;

  public take = 100;

  public get typeFilters() {
    return Object.entries(this.dataManager.lookup.EDegreeMissonType)
      .filter(([p]) => +p)
      .map(([value, label]) => ({
        label: this.$t(label),
        value: +value,
      }));
  }

  public get stepFilters() {
    return this.dataManager.degreeSteps.map((value) => ({
      label: value,
      value,
    }));
  }

  public get rarityFilters() {
    return this.dataManager.degreeRarities.map((value) => ({
      label: value,
      value,
    }));
  }

  //
  public get filteredDegrees() {
    const degrees = this.dataManager.degrees.filter((p) => (
      (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && (!this.description || p.DESC.toLocaleLowerCase().includes(this.description.toLocaleLowerCase()))
      && ([null, '', -1].includes(this.step) || p.STP === this.step)
      && ([null, '', -1].includes(this.type) || p.TYP === this.type)
      && ([null, '', -1].includes(this.rarity) || p.RTY === this.rarity)
      && (!this.isKeySideQuest || p.KEY_SIDE_QUEST)
      && (!this.hasQuest || this.dataManager.questRequireDegrees.some((i) => i.DF === p.DF))
    ));

    if (this.sort) {
      const sortNumber = (a: DegreeList, b: DegreeList) => a[this.sort] - b[this.sort];
      const sortString = (a: DegreeList, b: DegreeList) => a[this.sort].localeCompare(b[this.sort]);
      const stringFields = ['NAME'];
      if (this.order === 'ascending') {
        return stringFields.includes(this.sort)
          ? degrees.sort(sortString)
          : degrees.sort(sortNumber);
      }
      return stringFields.includes(this.sort)
        ? degrees.sort(sortString).reverse()
        : degrees.sort(sortNumber).reverse();
    }

    return degrees.reverse();
  }

  public get filteredPaginationDegrees() {
    return this.filteredDegrees.slice((this.page - 1) * this.take, this.page * this.take);
  }

  public scrollTableTop() {
    (this.$refs.table as Vue).$el.scrollIntoView();
  }

  public onSortChange({ prop, order }: { prop: string, order: string }) {
    this.sort = prop;
    this.order = order;
  }
}
</script>
