<template lang="pug">
div.container
  div.filters
    div.filter
      el-switch(v-model="equipmentUseful" :active-text="$t('裝備有効')")

  div.content
    el-table(:data="filteredSills")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="detail" :label="$t('詳細')" sortable)
      el-table-column(prop="effectValue" :label="$t('数値')" sortable)
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
      el-table-column(prop="rarity" :label="$t('レア度')" sortable)
        template(slot-scope="scope") {{ new Array(scope.row.rarity).fill('⭐').join('') }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as SkillList } from '@/master/skill';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public equipmentUseful = false;

  public get filteredSills() {
    if (this.equipmentUseful) {
      return dataManager.skillAddonsEquipmentUseful;
    }

    return dataManager.skillAddons;
  }

  public get typeFilters() {
    return dataManager.skillAddonNames.map((value) => ({
      text: value,
      value,
    }));
  }

  public typeFilderHandler(value: string, row: SkillList) {
    return row.name.includes(value);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
