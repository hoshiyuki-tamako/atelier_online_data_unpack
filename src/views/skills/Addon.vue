<template lang="pug">
div.container
  div.filters
    div.filter
      el-switch(v-model="equipmentUseful" :active-text="$t('装備有効')")

  div.content
    el-table(:data="filteredSills")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="detail" :label="$t('詳細')" sortable)
      el-table-column(prop="effectValue" :label="$t('数値')" sortable)
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
      el-table-column(prop="rarity" :label="$t('レア度')" sortable)
        template(slot-scope="scope") {{ '⭐'.repeat(scope.row.rarity) }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { List as SkillList } from '@/master/skill';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public equipmentUseful = false;

  public get filteredSills() {
    if (this.equipmentUseful) {
      return this.dataManager.skillAddonsEquipmentUseful;
    }

    return this.dataManager.skillAddons;
  }

  public get typeFilters() {
    return this.dataManager.skillAddonNames.map((value) => ({
      text: value,
      value,
    }));
  }

  public typeFilderHandler(value: string, row: SkillList) {
    return row.name.startsWith(value);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
