<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('カテゴリー') }}
      el-select(v-model="category" searchable clearable)
        el-option(v-for="item of itemCategoryOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponKind" searchable clearable :disabled="!enableWeaponKindFilter")
        el-option(v-for="item of weaponKindOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filters
      el-checkbox(@change="onSupportChange" v-model="support") {{ $t('サブ裝備') }}
  div.filters
    div.filter
      span {{ $t('品質') }}
      el-input-number(v-model="quality" size="mini" :min="1" :step="1" step-strictly)
    div.filter
      span LV
      el-input-number(v-model="level" size="mini" :min="1" :step="1" step-strictly)
  div.filters
    div.filter
      el-checkbox(v-model="showColumnTotalState") {{ $t('総戦闘力') }}
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
        router-link(:to="{ name: 'ItemsItem', query: { df: scope.row.DF } }" target="_blank")
          img.icon-small(:src="scope.row.icon" :alt="scope.row.NAME")
        span {{ scope.row.NAME }}
        img.icon-small(v-if="scope.row.GROUP_DF && dataManager.charactersByGroupDf[scope.row.GROUP_DF]" v-for="character of dataManager.charactersByGroupDf[scope.row.GROUP_DF]" :src="character.icon" :alt="character.NAME")
    el-table-column(v-if="showColumnTotalState" prop="totalState" :label="$t('総戦闘力')" width="100%" sortable)
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
import { dataManager } from '@/utils/DataManager';
import Enumerable from 'linq';
import { sum } from 'lodash';
import { Formula } from '@/logic/Formula';
import { MVList as ItemMVList } from '@/master/item';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public category: number | null;

  public weaponKind: number | null;

  public support!: boolean;

  public quality!: number;

  public level!: number;

  public showColumnTotalState!: boolean;

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
    ...mapFields('equipmentRankingFilter', ['category', 'weaponKind', 'support', 'quality', 'level', 'showColumnTotalState', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK']),
  },
})
export default class extends VueWithMapFields {
  public get enableWeaponKindFilter() {
    return !this.category || dataManager.itemsWeaponKindCategories.includes(this.category);
  }

  public get itemCategoryOptions() {
    return Enumerable.from(dataManager.item.m_vList)
      .where((p) => !!p.EQU_BRD)
      .groupBy((p) => p.CATEG)
      .orderBy((p) => p.key())
      .select((p) => ({
        label: this.$t(dataManager.lookup.itemCategory[p.key()]),
        value: p.key(),
      }));
  }

  public get weaponKindOptions() {
    return Object.keys(dataManager.itemsByWeaponKind).map((value) => ({
      label: this.$t(dataManager.lookup.weaponKind[value]),
      value: +value,
    })).filter((p) => p.value);
  }

  public get filteredData() {
    return this.support ? this.supportEquipments : this.equpiments;
  }

  private get items() {
    if (!this.enableWeaponKindFilter) {
      this.weaponKind = null;
    }

    if (this.weaponKind) {
      return dataManager.itemsByWeaponKind[this.weaponKind];
    }

    if (this.category) {
      return dataManager.itemsByCategory[this.category];
    }

    return dataManager.itemsEquipments;
  }

  private get supportEquipments() {
    return this.items.map((p) => ({
      DF: p.DF,
      NAME: p.NAME,
      GROUP_DF: p.GROUP_DF,
      icon: p.icon,

      totalState: sum(ItemMVList.states.filter((state) => state in p.EQU).map((state) => p.EQU[state].getSupportValue(this.level))),
      SATK: p.EQU.SATK.getSupportValue(this.level),
      SDEF: p.EQU.SDEF.getSupportValue(this.level),
      MATK: p.EQU.MATK.getSupportValue(this.level),
      MDEF: p.EQU.MDEF.getSupportValue(this.level),
      SPD: p.EQU.SPD.getSupportValue(this.level),
      QTH: 0,
      DDG: 0,
      totalElement: sum(Object.values(p.ELM).map((value) => Formula.getSupportElement(value))),
      FIRE: Formula.getSupportElement(p.ELM.FIRE),
      WATER: Formula.getSupportElement(p.ELM.WATER),
      EARTH: Formula.getSupportElement(p.ELM.EARTH),
      WIND: Formula.getSupportElement(p.ELM.WIND),
      LIGHT: Formula.getSupportElement(p.ELM.LIGHT),
      DARK: Formula.getSupportElement(p.ELM.DARK),
    }));
  }

  private get equpiments() {
    return this.items.map((p) => ({
      DF: p.DF,
      NAME: p.NAME,
      GROUP_DF: p.GROUP_DF,
      icon: p.icon,

      totalState: sum(p.getStates(this.quality, this.level).map((i) => i.total)),
      SATK: p.getState('SATK', this.quality, this.level).total,
      SDEF: p.getState('SDEF', this.quality, this.level).total,
      MATK: p.getState('MATK', this.quality, this.level).total,
      MDEF: p.getState('MDEF', this.quality, this.level).total,
      SPD: p.getState('SPD', this.quality, this.level).total,
      QTH: p.getState('QTH', this.quality, this.level).total,
      DDG: p.getState('DDG', this.quality, this.level).total,
      totalElement: sum(p.getElements(this.quality).map((i) => i.total)),
      FIRE: p.getElement('FIRE', this.quality).total,
      WATER: p.getElement('WATER', this.quality).total,
      EARTH: p.getElement('EARTH', this.quality).total,
      WIND: p.getElement('WIND', this.quality).total,
      LIGHT: p.getElement('LIGHT', this.quality).total,
      DARK: p.getElement('DARK', this.quality).total,
    }));
  }

  public beforeMount() {
    if (!this.category) {
      this.category = dataManager.itemsEquipments[0].CATEG;
    }
  }

  public onSupportChange() {
    this.level += 1;
    this.level -= 1;
  }
}
</script>
