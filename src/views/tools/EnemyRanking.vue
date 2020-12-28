<template lang="pug">
div.container
  div.filters
    div.filter
      el-select(v-model="eKind" :placeholder="$t('種類')" clearable filterable)
        el-option(v-for="item of enemyCategoryFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('大きさ') }}
      el-select(v-model="enemySize" clearable filterable)
        el-option(v-for="item in enemySizeOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('出現エリア') }}
      el-select(v-model="appearArea" clearable filterable)
        el-option(v-for="item in appearAreaOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span LV
      el-input-number(v-model="level" size="mini" :min="1" :step="1" step-strictly)
  div.filters
    div.filter
      el-checkbox(v-model="showColumnTotalState") {{ $t('総戦闘力') }}
      el-checkbox(v-model="showColumnEXP") {{ $t('EXP') }}
      el-checkbox(v-model="showColumnHP") {{ $t('HP') }}
      el-checkbox(v-model="showColumnSATK") {{ $t('物理攻撃') }}
      el-checkbox(v-model="showColumnSDEF") {{ $t('物理防禦') }}
      el-checkbox(v-model="showColumnMATK") {{ $t('魔法攻撃') }}
      el-checkbox(v-model="showColumnMDEF") {{ $t('魔法防禦') }}
      el-checkbox(v-model="showColumnSPD") {{ $t('速度') }}
      el-checkbox(v-model="showColumnQTH") {{ $t('クリティカル') }}
      el-checkbox(v-model="showColumnDDG") {{ $t('回避') }}
      el-checkbox(v-model="showColumnTotalElement") {{ $t('全属性') }}
      el-checkbox(v-model="showColumnFIRE") {{ $t('火') }}
      el-checkbox(v-model="showColumnWATER") {{ $t('水') }}
      el-checkbox(v-model="showColumnEARTH") {{ $t('土') }}
      el-checkbox(v-model="showColumnWIND") {{ $t('風') }}
      el-checkbox(v-model="showColumnLIGHT") {{ $t('光') }}
      el-checkbox(v-model="showColumnDARK") {{ $t('闇') }}

  el-table(:data="filteredData")
    el-table-column(prop="NAME" :label="$t('名前')")
      template(slot-scope="scope")
        span {{ scope.row.strName }}
        router-link(:to="{ name: 'EnemiesEnemy', query: { df: scope.row.DF } }" target="_blank")
          img.icon-small(:src="scope.row.icon" :alt="scope.row.strName")
    el-table-column(v-if="showColumnTotalState" prop="totalState" :label="$t('総戦闘力')" width="100%" sortable)
    el-table-column(v-if="showColumnEXP" prop="EXP" :label="$t('EXP')" width="100%" sortable)
    el-table-column(v-if="showColumnHP" prop="HP" :label="$t('HP')" width="100%" sortable)
    el-table-column(v-if="showColumnSATK" prop="SATK" :label="$t('物理攻撃')" width="100%" sortable)
    el-table-column(v-if="showColumnSDEF" prop="SDEF" :label="$t('物理防禦')" width="100%" sortable)
    el-table-column(v-if="showColumnMATK" prop="MATK" :label="$t('魔法攻撃')" width="100%" sortable)
    el-table-column(v-if="showColumnMDEF" prop="MDEF" :label="$t('魔法防禦')" width="100%" sortable)
    el-table-column(v-if="showColumnSPD" prop="SPD" :label="$t('速度')" width="100%" sortable)
    el-table-column(v-if="showColumnQTH" prop="QTH" :label="$t('クリティカル')" sortable)
    el-table-column(v-if="showColumnDDG" prop="DDG" :label="$t('回避')" width="100%" sortable)
    el-table-column(v-if="showColumnTotalElement" prop="totalElement" :label="$t('全属性')" width="100%" sortable)
    el-table-column(v-if="showColumnFIRE" prop="FIRE" :label="$t('火')" width="100%" sortable)
    el-table-column(v-if="showColumnWATER" prop="WATER" :label="$t('水')" width="100%" sortable)
    el-table-column(v-if="showColumnEARTH" prop="EARTH" :label="$t('土')" width="100%" sortable)
    el-table-column(v-if="showColumnWIND" prop="WIND" :label="$t('風')" width="100%" sortable)
    el-table-column(v-if="showColumnLIGHT" prop="LIGHT" :label="$t('光')" width="100%" sortable)
    el-table-column(v-if="showColumnDARK" prop="DARK" :label="$t('闇')" width="100%" sortable)
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { sum } from 'lodash';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public eKind!: number | null;

  public enemySize!: number | null;

  public appearArea!: number | null;

  public level!: number;

  public showColumnTotalState!: boolean;

  public showColumnEXP!: boolean;

  public showColumnHP!: boolean;

  public showColumnSATK!: boolean;

  public showColumnSDEF!: boolean;

  public showColumnMATK!: boolean;

  public showColumnMDEF!: boolean;

  public showColumnSPD!: boolean;

  public showColumnQTH!: boolean;

  public showColumnDDG!: boolean;

  public showColumnTotalElement!: boolean;

  public showColumnFIRE!: boolean;

  public showColumnWATER!: boolean;

  public showColumnEARTH!: boolean;

  public showColumnWIND!: boolean;

  public showColumnLIGHT!: boolean;

  public showColumnDARK!: boolean;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('enemyRankingFilter', ['eKind', 'enemySize', 'appearArea', 'level', 'showColumnTotalState', 'showColumnEXP', 'showColumnHP', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK']),
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

  public get enemies() {
    return this.eKind ? (this.dataManager.enemiesByEKind[this.eKind] || []) : this.dataManager.enemiesHasValidSpec;
  }

  public get filteredData() {
    return this.enemies
      .filter((p) => (
        ([null, '', -1].includes(this.enemySize) || p.eSize === this.enemySize)
        && (!this.appearArea || p.appearAreas.some((i) => i.iAreaId === this.appearArea))
      )).map((p) => ({
        DF: p.DF,
        strName: p.strName,
        icon: p.icon,
        totalState: sum(p.getStates(this.level).map((i) => i.total)),
        EXP: p.getState('EXP', this.level).total,
        HP: p.getState('HP', this.level).total,
        SATK: p.getState('SATK', this.level).total,
        SDEF: p.getState('SDEF', this.level).total,
        MATK: p.getState('MATK', this.level).total,
        MDEF: p.getState('MDEF', this.level).total,
        SPD: p.getState('SPD', this.level).total,
        QTH: p.getState('QTH', this.level).total,
        DDG: p.getState('DDG', this.level).total,
        totalElement: sum(p.getElements().map((i) => i.total)),
        FIRE: p.getElement('FIRE').total,
        WATER: p.getElement('WATER').total,
        EARTH: p.getElement('EARTH').total,
        WIND: p.getElement('WIND').total,
        LIGHT: p.getElement('LIGHT').total,
        DARK: p.getElement('DARK').total,
      }));
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
