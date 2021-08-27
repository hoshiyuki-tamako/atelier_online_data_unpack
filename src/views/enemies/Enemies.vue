<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('種類') }}
      el-select(v-model="eKind" placeholder="" clearable filterable)
        el-option(v-for="item of enemyCategoryFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('攻撃目標') }}
      el-select(v-model="attackTargetKind" placeholder="" clearable filterable)
        el-option(v-for="item in attackTargetKindOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('大きさ') }}
      el-select(v-model="enemySize" placeholder="" clearable filterable)
        el-option(v-for="item in enemySizeOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('出現エリア') }}
      el-select(v-model="appearArea" placeholder="" clearable filterable)
        el-option(v-for="item in appearAreaOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('ソート') }}
      el-select(v-model="sort" placeholder="" clearable filterable)
        el-option(v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.enemies
    el-card.enemy(v-for="enemy of filteredEnemies" :key="enemy.DF")
      h3
        router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
          p {{ enemy.strName }}
          img(:src="enemy.icon" :alt="enemy.strName" loading="lazy")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';

abstract class VueWithMapFields extends VueBase {
  public eKind!: number | null;

  public attackTargetKind!: number | null;

  public enemySize!: number | null;

  public appearArea!: number | null;

  public name!: string;

  public sort!: number;

  public has!: number[];
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('enemiesFilter', ['eKind', 'attackTargetKind', 'enemySize', 'appearArea', 'name', 'sort', 'has']),
  },
})
export default class extends VueWithMapFields {
  public get enemyCategoryFilter() {
    return this.dataManager.enemy.KindList
      .filter((p) => p.iKind)
      .map((p) => ({
        label: p.strName,
        value: p.iKind,
      }));
  }

  public get attackTargetKindOptions() {
    return Object.entries(this.dataManager.lookup.EAttackTargetKind)
      .map(([value, label]) => ({
        label: this.$t(label),
        value: +value,
      }));
  }

  public get enemySizeOptions() {
    return Object.entries(this.dataManager.lookup.eEnemySize)
      .map(([value, label]) => ({
        label: this.$t(label),
        value: +value,
      }));
  }

  public get appearAreaOptions() {
    return this.dataManager.areaInfo.List.map((p) => ({
      label: this.dataManager.fieldNameById[p.iAreaNameId]?.strAreaName || p.iAreaId,
      value: p.iAreaId,
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

  public get hasFilter() {
    return [
      {
        label: this.$t('ボス'),
        value: 1,
      },
      {
        label: this.$t('オンラインオーンリー'),
        value: 2,
      },
      {
        label: this.$t('クエスト'),
        value: 3,
      },
      {
        label: this.$t('普通'),
        value: 4,
      },
    ];
  }

  public get enemies() {
    return !this.eKind ? this.dataManager.enemiesOrderByCategory : (this.dataManager.enemiesByEKind[this.eKind] || []);
  }

  public get filteredEnemies() {
    const enemies = this.enemies.filter((p) => (
      ([null, '', -1].includes(this.attackTargetKind) || p.eAttackTargetKind === this.attackTargetKind)
      && ([null, '', -1].includes(this.enemySize) || p.eSize === this.enemySize)
      && (!this.appearArea || p.appearAreas.some((i) => i.iAreaId === this.appearArea))
      && (!this.name || p.DF === +this.name || p.strName.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && (!this.has.includes(1) || p.bBoss)
      && (!this.has.includes(2) || p.bOnlyOnline)
      && (!this.has.includes(3) || this.dataManager.questsByEnemy[p.DF])
      && (!this.has.includes(4) || !this.dataManager.questsByEnemy[p.DF])
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
    width: 128px
    height: 128px
</style>
