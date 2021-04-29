<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('属性') + $t('ダメージ') }}+
      el-select(v-model="addElement" clearable filterable)
        el-option(v-for="[value, label] of Object.entries(dataManager.lookup.EBattleElementKind)" :key="value" :label="$t(label)" :value="+value")
    div.filter
      span {{ $t('属性') + $t('ダメージ') }}-
      el-select(v-model="negativeElement" clearable filterable)
        el-option(v-for="[value, label] of Object.entries(dataManager.lookup.EBattleElementKind)" :key="value" :label="$t(label)" :value="+value")
  div.filters
    div.filter
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.content
    el-table(:data="filterdZones")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="effectlist.length" :label="$t('効果')" sortable)
        template(slot-scope="scope")
          p(v-for="id of scope.row.effectlist") {{ dataManager.zoneEffectById[id].name }} ({{ dataManager.zoneEffectById[id].value }})
      el-table-column(:label="`${$t('アイテム')} / ${$t('敵')}`")
        template(slot-scope="scope")
          div
            div(v-if="dataManager.itemsByZone[scope.row.id]")
              h3 {{ $t('アイテム') }}
              router-link.example(v-for="item of dataManager.itemsByZone[scope.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }")
                el-tooltip(:content="item.NAME" placement="top")
                  img(:src="item.icon" :alt="item.NAME")
            div(v-if="dataManager.enemiesByZone[scope.row.id]")
              h3 {{ $t('敵') }}
              router-link.example(v-for="enemy of dataManager.enemiesByZone[scope.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
                el-tooltip(:content="enemy.strName" placement="top")
                  img(:src="enemy.icon" :alt="enemy.strName")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { List as ZoneList } from '@/master/zone';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public has = [] as number[];

  public name = '';

  public addElement: number | null = null;

  public negativeElement: number | null = null;

  public get hasFilter() {
    return [
      {
        label: this.$t('アイテム'),
        value: 1,
      },
      {
        label: this.$t('敵'),
        value: 2,
      },
    ];
  }

  public get filterdZones() {
    return this.dataManager.zone.List.filter((p) => (
      (!this.name || p.id === +this.name || p.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && ([null, '', -1].includes(this.addElement) || p.effectlist.some((i) => this.dataManager.zoneEffectById[i]?.element === this.addElement && this.dataManager.zoneEffectById[i].value > 0))
      && ([null, '', -1].includes(this.negativeElement) || p.effectlist.some((i) => this.dataManager.zoneEffectById[i]?.element === this.negativeElement && this.dataManager.zoneEffectById[i].value < 0))
      && (!this.has.includes(1) || this.dataManager.itemsByZone[p.id])
      && (!this.has.includes(2) || this.dataManager.enemiesByZone[p.id])
    ));
  }

  public get typeFilters() {
    return this.dataManager.zoneNames.map((value) => ({
      text: value,
      value,
    }));
  }

  public typeFilderHandler(value: string, row: ZoneList) {
    return row.name.includes(value);
  }

  public created() {
    if (this.$route.query.id) {
      this.name = this.$route.query.id.toString();
    }
  }
}
</script>

<style lang="sass" scoped>
.example
  img
    width: 60px
</style>
