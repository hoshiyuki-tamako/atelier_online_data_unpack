<template lang="pug">
div.container
  div.content
    el-table(:data="dataManager.skillAddons")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" sortable)
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

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
