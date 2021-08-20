<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="name" clearable)
  div.filters
    div.filter
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.content
    el-table(:data="filteredAbnormalState")
      el-table-column(type="expand")
        template(slot-scope="props")
          h3 {{ $t('スキル') }}
          div.skills-container
            div.skill-container(v-for="skill of dataManager.skillsByAbnormalState[props.row.id]")
              router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
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

  public has!: number[];
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('abnormalEffectFilter', ['name', 'has']),
  },
})
export default class extends VueWithMapFields {
  public get hasFilter() {
    return [
      {
        label: this.$t('スキル'),
        value: 1,
      },
    ];
  }

  public get typeFilters() {
    return this.dataManager.abnormalStateTypes.map((text) => ({
      text,
      value: text,
    }));
  }

  public get filteredAbnormalState() {
    return this.dataManager.abnormalState.m_vList.filter((p) => (
      (!this.name || p.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()) || +this.name === p.id) &&
      (!this.has.includes(1) || this.dataManager.skillsByAbnormalState[p.id]?.length)
    ));
  }

  public typeFilderHandler(value: string, row: AbnormalStateMVList) {
    return row.name.startsWith(value);
  }
}
</script>

<style lang="sass" scoped>
.skills-container
  display: flex
  flex-wrap: wrap
.skill-container
  padding: 12px
</style>
