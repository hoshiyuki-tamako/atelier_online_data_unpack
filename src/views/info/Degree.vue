<template lang="pug">
div.container
  div.content
    el-table(:data="dataManager.degree.List")
      el-table-column(prop="DF" label="DF" width="100%" sortable)
      el-table-column(prop="STP" :label="$t('ステップ')" sortable)
      el-table-column(prop="TYP" :label="$t('種類')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
        template(slot-scope="scope") {{ $t(dataManager.lookup.EDegreeMissonType[scope.row.TYP]) }}
      el-table-column(prop="RTY" :label="$t('レア度')" sortable)
        template(slot-scope="scope") {{ new Array(scope.row.RTY).fill('⭐').join('') }}
      el-table-column(prop="NAME" :label="$t('名前')" sortable)
      el-table-column(prop="DESC" :label="$t('詳細')" sortable)
      el-table-column(:label="$t('画像')")
        template(slot-scope="scope")
          img.content-table__image(v-if="scope.row.TYP" :src="scope.row.icon" :alt="scope.row.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as DegreeList } from '@/master/degree';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public get typeFilters() {
    return Object.entries(dataManager.lookup.EDegreeMissonType).map(([value, text]) => ({
      text,
      value: +value,
    }));
  }

  public typeFilderHandler(value: number, row: DegreeList) {
    return row.TYP === value;
  }
}
</script>

<style lang="sass" scoped>
.content-table__image
  width: 80px
</style>
