<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('性別') }}
      el-select(v-model="gender" placeholder="" clearable filterable)
        el-option(v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponType" placeholder="" clearable filterable)
        el-option(v-for="item in weaponTypeOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('レベル') }}
      el-input-number(v-model="level" size="mini" :min="1" :step="1" step-strictly)
    div.filter
      span {{ $t('食事レベル') }}
      el-input-number(v-model="foodLevel" size="mini" :min="1" :max="level" :step="1" step-strictly)
    div.filter
      span {{ $t('ブレイズアーツレベル') }}
      el-input-number(v-model="blazeArtLevel" size="mini" :min="0" :max="5" :step="1" step-strictly)
  div.filters
    div.filter
      el-checkbox(v-model="showColumnTotalState") {{ $t('総戦闘力') }}
      el-checkbox(v-model="showColumnBlazeArt") {{ $t('ブレイズアーツ') }}
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
        router-link(:to="{ name: 'CharactersCharacter', query: { df: scope.row.DF, level, foodLevel } }" target="_blank")
          img.icon-small(:src="scope.row.icon" alt="")
    el-table-column(v-if="showColumnTotalState" prop="totalState" :label="$t('総戦闘力')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable)

    el-table-column(v-if="showColumnBlazeArt" prop="blazeArt" :width="tableOptions.column.attackSkillWidth" :align="tableOptions.column.align" sortable)
      template(slot="header")
        span {{ $t('ブレイズアーツ') }}
      template(slot-scope="scope")
        span {{ scope.row.blazeArt }}
        template(v-if="scope.row.blazeArt && scope.row.blazeArtSkill && scope.row.blazeArtSkill.attackSkill")
          span  (
          span {{ scope.row.blazeArtSkill.attackSkill.effectValue * 100 }}%
          span  {{ $t(dataManager.lookup.EBattleElementKindShort[scope.row.blazeArtSkill.attackSkill.element]) }}
          span  {{ $t(dataManager.lookup.EBattleAttributeShort[scope.row.blazeArtSkill.attackSkill.attribute]) }}
          span )

    el-table-column(v-if="showColumnHP" prop="HP" :label="$t('HP')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnSATK" prop="SATK" :label="$t('物理攻撃')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnSDEF" prop="SDEF" :label="$t('物理防禦')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnMATK" prop="MATK" :label="$t('魔法攻撃')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnMDEF" prop="MDEF" :label="$t('魔法防禦')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnSPD" prop="SPD" :label="$t('速度')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnQTH" prop="QTH" :label="$t('クリティカル')" :width="tableOptions.column.criticalHitWidth" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnDDG" prop="DDG" :label="$t('回避')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnTotalElement" prop="totalElement" :label="$t('全属性')" :width="tableOptions.column.allElementWidth" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnFIRE" prop="FIRE" :label="$t('火')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnWATER" prop="WATER" :label="$t('水')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnEARTH" prop="EARTH" :label="$t('土')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnWIND" prop="WIND" :label="$t('風')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnLIGHT" prop="LIGHT" :label="$t('光')" width="100%" :align="tableOptions.column.align" sortable)
    el-table-column(v-if="showColumnDARK" prop="DARK" :label="$t('闇')" :width="tableOptions.column.darknessWidth" :align="tableOptions.column.align" sortable)
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { sum } from 'lodash';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { EBattleAttribute } from '@/logic/Enums';

abstract class VueWithMapFields extends VueBase {
  public gender!: number | null;

  public weaponType!: number | null;

  public foodLevel!: number;

  public level!: number;

  public blazeArtLevel!: number;

  public showColumnTotalState!: boolean;

  public showColumnBlazeArt!: boolean;

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
    ...mapFields('characterRankingFilter', ['gender', 'weaponType', 'foodLevel', 'level', 'blazeArtLevel', 'showColumnTotalState', 'showColumnBlazeArt', 'showColumnHP', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK']),
  },
})
export default class extends VueWithMapFields {
  public get tableOptions() {
    const d = {
      column: {
        longTextWidth: '100%',
        attackSkillWidth: '170%',
        criticalHitWidth: '130%',
        allElementWidth: '120%',
        darknessWidth: '100%',
        align: 'left',
      },
    };

    switch (this.dataManager.locale) {
      case 'zh-TW':
      case 'zh-HK':
      case 'zh-CN':
        return {
          ...d,
          column: {
            ...d.column,
            criticalHitWidth: '100%',
          },
        };
      case 'en':
        return {
          ...d,
          column: {
            ...d.column,
            longTextWidth: '180',
            attackSkillWidth: '220%',
            criticalHitWidth: '120%',
            allElementWidth: '120%',
            darknessWidth: '110%',
            align: 'center',
          },
        };
      default:
        return d;
    }
  }

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
      .map((p) => {
        const SATK = p.getState('SATK', this.level, this.foodLevel).total;
        const MATK = p.getState('MATK', this.level, this.foodLevel).total;
        const blazeArtSkill = p.getBlazeArt(this.level, this.blazeArtLevel);
        const blazeArt = (() => {
          if (!blazeArtSkill?.attackSkill) {
            return 0;
          }

          return blazeArtSkill.attackSkill.attribute === EBattleAttribute.eMAGIC_DAMAGED
            ? Math.round(MATK * blazeArtSkill.attackSkill.effectValue)
            : Math.round(SATK * blazeArtSkill.attackSkill.effectValue);
        })();

        return {
          icon: p.icon,
          DF: p.DF,
          NAME: p.NAME,

          totalState: sum(p.getStates(this.level, this.foodLevel).map((i) => i.total)),
          blazeArt,
          HP: p.getState('HP', this.level, this.foodLevel).total,
          SATK,
          SDEF: p.getState('SDEF', this.level, this.foodLevel).total,
          MATK,
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

          blazeArtSkill,
        };
      });
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
