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
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.content
    el-table(:data="filteredWealth")
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
  public name = '';

  public description = '';

  public has = [] as number[];

  public get hasFilter() {
    return [
      {
        label: this.$t('クエスト消費'),
        value: 1,
      },
      {
        label: this.$t('クエスト報酬'),
        value: 2,
      },
    ];
  }

  public get filteredWealth() {
    return this.dataManager.wealthOrderBySort.filter((p) => (
      (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.trim().toLocaleLowerCase()))
      && (!this.description || p.DESC.toLocaleLowerCase().includes(this.description.trim().toLocaleLowerCase()))
      && (!this.has.includes(1) || this.dataManager.questCostWealths.some((i) => i.DF === p.DF))
      && (!this.has.includes(2) || this.dataManager.questRewardWealths.some((i) => i.DF === p.DF))
    ));
  }
}
</script>

<style lang="sass" scoped>
.content
  table
    img
      width: 80px
</style>
