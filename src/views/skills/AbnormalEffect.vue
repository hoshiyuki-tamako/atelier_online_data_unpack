<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="name" clearable)
  div.content
    el-table(:data="filteredAbnormaalEffect")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="telop" :label="$t('テクスト')" sortable)
      el-table-column(prop="turn" :label="$t('ターン')" width="100%" sortable)
      el-table-column(prop="effectlist.length" :label="$t('追加状態')" sortable)
        template(slot-scope="scope")
          div(v-for="(id, i) of scope.row.effectlist")
            p {{ dataManager.abnormalStateEffectById[id].name }}, {{ dataManager.abnormalStateEffectById[id].value }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { MVList as AbnormalStateMVList } from '@/master/abnormalState';

abstract class VueWithMapFields extends VueBase {
  public name!: string;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('abnormalEffectFilter', ['name']),
  },
})
export default class extends VueWithMapFields {
  public get typeFilters() {
    return this.dataManager.abnormalStateTypes.map((text) => ({
      text,
      value: text,
    }));
  }

  public get filteredAbnormaalEffect() {
    return this.dataManager.abnormalState.m_vList.filter((p) => (
      (!this.name || p.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()) || +this.name === p.id)
    ));
  }

  public typeFilderHandler(value: string, row: AbnormalStateMVList) {
    return row.name.startsWith(value);
  }
}
</script>
