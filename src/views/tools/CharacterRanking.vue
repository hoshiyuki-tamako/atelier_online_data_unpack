<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('性別') }}
      el-select(v-model="gender" clearable filterable)
        el-option(v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponType" clearable filterable)
        el-option(v-for="item in weaponTypeOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('食事') }}LV
      el-input-number(v-model="foodLevel" size="mini" :min="1" :max="level" :step="1" step-strictly)
    div.filter
      span LV
      el-input-number(v-model="level" size="mini" :min="1" :step="1" step-strictly)
  div.filters
    div.filter
      el-checkbox(v-model="showColumnTotalState") {{ $t('総戦闘力') }}
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
        span {{ scope.row.NAME }}
        router-link(:to="{ name: 'CharactersCharacter', query: { df: scope.row.DF } }" target="_blank")
          img.icon-small(:src="scope.row.icon" :alt="scope.row.NAME")
    el-table-column(v-if="showColumnTotalState" prop="totalState" :label="$t('総戦闘力')" width="100%" sortable)
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
import VueBase from '@/utils/VueBase';
import { sum } from 'lodash';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public gender!: number | null;

  public weaponType!: number | null;

  public foodLevel!: number;

  public level!: number;

  public showColumnTotalState!: boolean;

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
    ...mapFields('characterRankingFilter', ['gender', 'weaponType', 'foodLevel', 'level', 'showColumnTotalState', 'showColumnHP', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK']),
  },
})
export default class extends VueWithMapFields {
  public get genderOptions() {
    return [
      {
        label: '♂',
        value: 1,
      },
      {
        label: '♀',
        value: 2,
      },
    ];
  }

  public get weaponTypeOptions() {
    return Object.entries(this.dataManager.lookup.ESubCategory)
      .map(([value, label]) => ({
        label: this.$t(label),
        value: +value,
      }));
  }

  public get filteredData() {
    return this.dataManager.charactersCanBattle
      .filter((p) => (
        (!this.gender || p.GEN === this.gender)
        && ([null, '', -1].includes(this.weaponType) || p.WEAPON.some((o) => o.GEN === this.weaponType))
      ))
      .map((p) => ({
        icon: p.icon,
        DF: p.DF,
        NAME: p.NAME,
        totalState: sum(p.getStates(this.level, this.foodLevel).map((i) => i.total)),
        HP: p.getState('HP', this.level, this.foodLevel).total,
        SATK: p.getState('SATK', this.level, this.foodLevel).total,
        SDEF: p.getState('SDEF', this.level, this.foodLevel).total,
        MATK: p.getState('MATK', this.level, this.foodLevel).total,
        MDEF: p.getState('MDEF', this.level, this.foodLevel).total,
        SPD: p.getState('SPD', this.level, this.foodLevel).total,
        QTH: p.getState('QTH', this.level, this.foodLevel).total,
        DDG: p.getState('DDG', this.level, this.foodLevel).total,
        totalElement: sum(p.getElements(this.level).map((i) => i.total)),
        FIRE: p.getElement('FIRE', this.level).total,
        WATER: p.getElement('WATER', this.level).total,
        EARTH: p.getElement('EARTH', this.level).total,
        WIND: p.getElement('WIND', this.level).total,
        LIGHT: p.getElement('LIGHT', this.level).total,
        DARK: p.getElement('DARK', this.level).total,
      }));
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
