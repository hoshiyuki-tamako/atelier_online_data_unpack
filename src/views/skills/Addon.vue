<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('レア度') }}
      el-select(v-model="rarity" placeholder="" clearable filterable)
        el-option(v-for="item in rarityFilters" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      el-switch(v-model="equipmentUseful" :active-text="$t('装備有効')")
    div.filter
      el-checkbox(v-model="hunt" :label="$t('トレジャー')" border)
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('詳細') }}
      el-input(v-model="detail" clearable)
  div.content
    el-table(:data="filteredAddon")
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
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { List as SkillList } from '@/master/skill';

abstract class VueWithMapFields extends VueBase {
  public rarity!: number | null;

  public equipmentUseful!: boolean;

  public hunt!: boolean;

  public name!: string;

  public detail!: string;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('addonFilter', ['rarity', 'equipmentUseful', 'hunt', 'name', 'detail']),
  },
})
export default class extends VueWithMapFields {
  public get rarityFilters() {
    return this.dataManager.skillAddonsRarities.filter((value) => value).map((value) => ({
      label: '⭐'.repeat(value),
      value,
    }));
  }

  public get skills() {
    if (this.equipmentUseful) {
      return this.dataManager.skillAddonsEquipmentUseful;
    }

    return this.dataManager.skillAddons;
  }

  public get filteredAddon() {
    return this.skills.filter((p) => (
      (!this.hunt || this.dataManager.api.huntInfosBySkillId[p.id])
      && ([null, '', -1].includes(this.rarity) || p.rarity === this.rarity)
      && (!this.name || p.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()) || +this.name === p.id)
      && (!this.detail || p.detail.toLocaleLowerCase().includes(this.detail.toLocaleLowerCase()))
    ));
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
