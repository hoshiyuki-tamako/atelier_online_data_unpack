<template lang="pug">
div.container
  div.filters
    div.filter
      el-checkbox-group(v-model="filter.has" @change="resetPage" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.content
    el-table(:data="filterdZones")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="effectlist.length" :label="$t('効果')" sortable)
        template(slot-scope="scope")
          p(v-for="id of scope.row.effectlist") {{ dataManager.zoneEffectById[id].name }}, {{ dataManager.zoneEffectById[id].value }}
      el-table-column(:label="`${$t('アイテム')} / ${$t('敵')}`")
        template(slot-scope="scope")
          div
            div(v-if="dataManager.itemsByZone[scope.row.id]")
              h3 {{ $t('アイテム') }}
              router-link.example(v-for="item of dataManager.itemsByZone[scope.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }")
                img(:src="item.icon" :alt="item.NAME")
            div(v-if="dataManager.enemiesByZone[scope.row.id]")
              h3 {{ $t('敵') }}
              router-link.example(v-for="enemy of dataManager.enemiesByZone[scope.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
                img(:src="enemy.icon" :alt="enemy.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as ZoneList } from '@/master/zone';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get hasFilter() {
    return [
      {
        label: this.$t('アイテム'),
        value: 1,
      },
      {
        label: `${this.$t('敵')}`,
        value: 2,
      },
    ];
  }

  public filter = {
    has: [],
  };

  public get filterdZones() {
    return dataManager.zone.List.filter((p) => (
      (!this.filter.has.includes(1) || dataManager.itemsByZone[p.id])
      && (!this.filter.has.includes(2) || dataManager.enemiesByZone[p.id])
    ));
  }

  public get typeFilters() {
    return dataManager.zoneNames.map((value) => ({
      text: value,
      value,
    }));
  }

  public typeFilderHandler(value: string, row: ZoneList) {
    return row.name.includes(value);
  }
}
</script>

<style lang="sass" scoped>
.example
  img
    width: 60px
</style>
