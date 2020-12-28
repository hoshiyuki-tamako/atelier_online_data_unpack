<template lang="pug">
div.container
  div.content
    el-table(:data="dataManager.wealthOrderBySort")
      el-table-column(prop="DF" label="DF" width="100%" sortable)
      el-table-column(prop="NAME" :label="$t('名前')" sortable)
      el-table-column(prop="DESC" :label="$t('詳細')" sortable)
      el-table-column(:label="$t('画像')")
        template(slot-scope="scope")
          img(v-if="scope.row.CHARA" :src="dataManager.characterById[scope.row.CHARA].icon" :alt="dataManager.characterById[scope.row.CHARA].NAME")
          img(:src="scope.row.icon" :alt="scope.row.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
}
</script>

<style lang="sass" scoped>
.content
  table
    img
      width: 80px
</style>
