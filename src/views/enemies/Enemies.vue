<template lang="pug">
div.container
  div.filters
    div.filter
      el-select(v-model="eKind" :placeholder="$t('種類')" clearable filterable)
        el-option(v-for="item of enemyCategoryFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name")
    div.filter
      span {{ $t('ソート') }}
      el-select(v-model="sort" clearable filterable)
        el-option(v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value")
  div.enemies
    el-card.enemy(v-for="enemy of filteredEnemies" :key="enemy.DF")
      h3
        router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
          p {{ enemy.strName }}
          img(:src="enemy.icon" :alt="enemy.strName")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public name!: string;

  public sort!: number;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('enemiesFilter', ['name', 'sort']),
  },
})
export default class extends VueWithMapFields {
  get eKind() {
    return this.$store.state.enemiesFilter.eKind || null;
  }

  set eKind(value) {
    this.$store.commit('enemiesFilter/updateEKind', value);
  }

  public get enemyCategoryFilter() {
    return dataManager.enemy.KindList
      .filter((p) => p.iKind)
      .map((p) => ({
        label: p.strName,
        value: p.iKind,
      }));
  }

  public get sortOptions() {
    return [
      {
        label: this.$t('古い'),
        value: 0,
      },
      {
        label: this.$t('新しい'),
        value: 1,
      },
    ];
  }

  public get enemies() {
    return this.eKind ? (dataManager.enemiesByEKind[this.eKind] || []) : dataManager.enemiesOrderByCategory;
  }

  public get filteredEnemies() {
    const enemies = this.enemies.filter((p) => (
      (!this.name || p.strName.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
    ));
    if (this.sort === 1) {
      return enemies.reverse();
    }
    return enemies;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.enemies
  display: flex
  flex-wrap: wrap
.enemy
  margin: 12px
  text-align: center
  cursor: pointer
  img
    width: 120px
</style>
