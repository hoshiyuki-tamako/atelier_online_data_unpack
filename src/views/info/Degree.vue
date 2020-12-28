<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('詳細') }}
      el-input(v-model="description" clearable)
    div.filter
      el-checkbox(v-model="isKeySideQuest" :label="$t('サイドクエスト')" border)

  div.content
    el-table(:data="filteredDegrees")
      el-table-column(prop="DF" label="DF" width="100%" sortable)
      el-table-column(prop="STP" :label="$t('ステップ')" :filters="stepFilters" :filter-method="stepFilderHandler" sortable)
      el-table-column(prop="TYP" :label="$t('種類')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
        template(slot-scope="scope") {{ $t(dataManager.lookup.EDegreeMissonType[scope.row.TYP]) }}
      el-table-column(prop="RTY" :label="$t('レア度')" :filters="rarityFilters" :filter-method="rarityFilderHandler" sortable)
        template(slot-scope="scope") {{ '⭐'.repeat(scope.row.RTY) }}
      el-table-column(prop="NAME" :label="$t('名前')" sortable)
      el-table-column(prop="DESC" :label="$t('詳細')" sortable)
      el-table-column(:label="$t('画像')")
        template(slot-scope="scope")
          img.icon-degree(v-if="scope.row.TYP" :src="scope.row.icon" :alt="scope.row.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { List as DegreeList } from '@/master/degree';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public name = '';

  public description = '';

  public isKeySideQuest = false;

  // type
  public get typeFilters() {
    return Object.entries(this.dataManager.lookup.EDegreeMissonType).map(([value, text]) => ({
      text: this.$t(text),
      value: +value,
    }));
  }

  public typeFilderHandler(value: number, row: DegreeList) {
    return row.TYP === value;
  }

  // steps
  public get stepFilters() {
    return this.dataManager.degreeSteps.map((value) => ({
      text: value,
      value,
    }));
  }

  public stepFilderHandler(value: number, row: DegreeList) {
    return row.STP === value;
  }

  // rarity
  public get rarityFilters() {
    return this.dataManager.degreeRarities.map((value) => ({
      text: value,
      value,
    }));
  }

  public rarityFilderHandler(value: number, row: DegreeList) {
    return row.RTY === value;
  }

  //
  public get filteredDegrees() {
    return this.dataManager.degree.List.filter((p) => (
      (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && (!this.description || p.DESC.toLocaleLowerCase().includes(this.description.toLocaleLowerCase()))
      && (!this.isKeySideQuest || p.KEY_SIDE_QUEST)
    ));
  }
}
</script>
