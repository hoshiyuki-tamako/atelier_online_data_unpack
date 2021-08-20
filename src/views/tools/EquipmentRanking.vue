<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('カテゴリー') }}
      el-select(v-model="category" placeholder="" searchable clearable @change="updateSort")
        el-option(v-for="item of itemCategoryOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponKind" placeholder="" searchable clearable :disabled="!isCurrentCategoryWeaponKindFilter")
        el-option(v-for="item of weaponKindOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('攻撃属性') }}
      el-select(v-model="battleElement" placeholder="" clearable filterable)
        el-option(v-for="[value, label] of Object.entries(dataManager.lookup.EBattleElementKind)" :key="value" :label="$t(label)" :value="+value")
    div.filter
      span {{ $t('スキル属性') }}
      el-select(v-model="skillElement" placeholder="" clearable filterable)
        el-option(v-for="[value, label] of Object.entries(dataManager.lookup.EBattleElementKind)" :key="value" :label="$t(label)" :value="+value")
    div.filters
      el-checkbox(@change="updateSort" v-model="support") {{ $t('サブ装備') }}
  div.filters
    div.filter
      span {{ $t('品質') }}
      el-input-number(v-model="quality" size="mini" :min="1" :step="1" step-strictly)
    div.filter
      span {{ $t('レベル') }}
      el-input-number(v-model="level" size="mini" :min="1" :step="1" step-strictly)
  div.filters
    div.filter
      el-checkbox(v-model="showColumnTotalState") {{ $t('総戦闘力') }}
      el-checkbox(v-model="showColumnSATKSkill") {{ $t('物理スキル') }}
      el-checkbox(v-model="showColumnSATK") {{ $t('物理攻撃') }}
      el-checkbox(v-model="showColumnSDEF") {{ $t('物理防禦') }}
      el-checkbox(v-model="showColumnMATKSkill") {{ $t('魔法スキル') }}
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

  el-table(ref="table" :data="filteredData" @sort-change="onSortChange")
    el-table-column(prop="NAME" :label="$t('名前')")
      template(slot-scope="scope")
        span {{ scope.row.NAME }}
        router-link(:to="{ name: 'ItemsItem', query: { df: scope.row.DF, quality, level } }" target="_blank")
          img.icon-small(:src="scope.row.icon" :alt="scope.row.NAME")
        template(v-if="scope.row.GROUP_DF && dataManager.charactersByGroupDf[scope.row.GROUP_DF]" v-for="character of dataManager.charactersByGroupDf[scope.row.GROUP_DF]")
          router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }" target="_blank")
            img.icon-small(:src="character.icon" :alt="character.NAME")
    el-table-column(v-if="showColumnTotalState" prop="totalState" :label="$t('総戦闘力')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable="custom")

    el-table-column(v-if="showColumnSATK && showAttackSkillColumn" prop="SATKSkill" :width="tableOptions.column.attackSkillWidth" :align="tableOptions.column.align" sortable="custom")
      template(slot="header")
        el-tooltip(v-if="dataManager.locale === 'en'" :content="$t('物理スキル')" placement="top")
          span P.ATK Skill
        span(v-else) {{ $t('物理スキル') }}
      template(slot-scope="scope")
        span {{ scope.row.SATKSkill }}
        template(v-if="scope.row.SATKSkill && scope.row.attackSkill")
          span  (
          span {{ scope.row.attackSkill.effectValue * 100 }}%
          span  {{ $t(dataManager.lookup.EBattleElementKindShort[scope.row.attackSkill.element]) }}
          span )

    el-table-column(v-if="showColumnSATK" prop="SATK" :label="$t('物理攻撃')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable="custom")
      template(slot-scope="scope")
        span {{ scope.row.SATK }}
        template(v-if="scope.row.SATK && canShowAttackElementText(scope.row.item.CATEG)" v-for="elementChangeSkill of [scope.row.item.elementChangeSkill]")
          span(v-if="elementChangeSkill")  ({{ $t(dataManager.lookup.EBattleElementKindShort[elementChangeSkill.effectValue]) }})
          span(v-else)  ({{ $t(dataManager.lookup.EBattleElementKindShort[0]) }})
    el-table-column(v-if="showColumnSDEF" prop="SDEF" :label="$t('物理防禦')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable="custom")

    el-table-column(v-if="showColumnMATKSkill && showAttackSkillColumn" prop="MATKSkill" :width="tableOptions.column.attackSkillWidth" :align="tableOptions.column.align" sortable="custom")
      template(slot="header")
        el-tooltip(v-if="dataManager.locale === 'en'" :content="$t('魔法スキル')" placement="top")
          span M.ATK Skill
        span(v-else) {{ $t('魔法スキル') }}
      template(slot-scope="scope")
        span {{ scope.row.MATKSkill }}
        template(v-if="scope.row.MATKSkill && scope.row.attackSkill")
          span  (
          span {{ scope.row.attackSkill.effectValue * 100 }}%
          span  {{ $t(dataManager.lookup.EBattleElementKindShort[scope.row.attackSkill.element]) }}
          span )

    el-table-column(v-if="showColumnMATK" prop="MATK" :label="$t('魔法攻撃')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable="custom")
      template(slot-scope="scope")
        span {{ scope.row.MATK }}
        template(v-if="scope.row.MATK && canShowAttackElementText(scope.row.item.CATEG)" v-for="elementChangeSkill of [scope.row.item.elementChangeSkill]")
          span(v-if="elementChangeSkill")  ({{ $t(dataManager.lookup.EBattleElementKindShort[elementChangeSkill.effectValue]) }})
          span(v-else)  ({{ $t(dataManager.lookup.EBattleElementKindShort[0]) }})

    el-table-column(v-if="showColumnMDEF" prop="MDEF" :label="$t('魔法防禦')" :width="tableOptions.column.longTextWidth" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnSPD" prop="SPD" :label="$t('速度')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnQTH && !support" prop="QTH" :label="$t('クリティカル')" :width="tableOptions.column.criticalHitWidth" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnDDG && !support" prop="DDG" :label="$t('回避')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnTotalElement" prop="totalElement" :label="$t('全属性')" :width="tableOptions.column.allElementWidth" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnFIRE" prop="FIRE" :label="$t('火')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnWATER" prop="WATER" :label="$t('水')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnEARTH" prop="EARTH" :label="$t('土')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnWIND" prop="WIND" :label="$t('風')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnLIGHT" prop="LIGHT" :label="$t('光')" width="100%" :align="tableOptions.column.align" sortable="custom")
    el-table-column(v-if="showColumnDARK" prop="DARK" :label="$t('闇')" :width="tableOptions.column.darknessWidth" :align="tableOptions.column.align" sortable="custom")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Enumerable from 'linq';
import { sum } from 'lodash';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { Formula } from '@/logic/Formula';
import { MVList as ItemMVList } from '@/master/item';
import { EBattleAttribute, ECategory } from '@/logic/Enums';

abstract class VueWithMapFields extends VueBase {
  public category!: number | null;

  public weaponKind!: number | null;

  public battleElement!: number | null;

  public skillElement!: number | null;

  public support!: boolean;

  public quality!: number;

  public level!: number;

  public showColumnTotalState!: boolean;

  public showColumnSATKSkill!: boolean;

  public showColumnSATK!: boolean;

  public showColumnSDEF!: boolean;

  public showColumnMATKSkill!: boolean;

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
    ...mapFields('equipmentRankingFilter', ['category', 'weaponKind', 'battleElement', 'skillElement', 'support', 'quality', 'level', 'showColumnTotalState', 'showColumnSATKSkill', 'showColumnSATK', 'showColumnSDEF', 'showColumnMATKSkill', 'showColumnMATK', 'showColumnMDEF', 'showColumnSPD', 'showColumnQTH', 'showColumnDDG', 'showColumnTotalElement', 'showColumnFIRE', 'showColumnWATER', 'showColumnEARTH', 'showColumnWIND', 'showColumnLIGHT', 'showColumnDARK']),
  },
})
export default class extends VueWithMapFields {
  public get tableOptions() {
    const d = {
      column: {
        longTextWidth: '100%',
        attackSkillWidth: '140%',
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
            attackSkillWidth: '130%',
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

  public sort = '';

  public order = null;

  public get showAttackSkillColumn() {
    return this.isCurrentCategoryWeaponKindFilter && !this.support;
  }

  public canShowAttackElementText(category: ECategory) {
    return !this.support && category === ECategory.eWEAPON;
  }

  public get isCurrentCategoryWeaponKindFilter() {
    return !this.category || this.dataManager.itemsWeaponKindCategories.includes(this.category);
  }

  public get itemCategoryOptions() {
    return Enumerable.from(this.dataManager.item.m_vList)
      .where((p) => !!p.EQU_BRD)
      .groupBy((p) => p.CATEG)
      .orderBy((p) => p.key())
      .select((p) => ({
        label: this.$t(this.dataManager.lookup.itemCategory[p.key()]),
        value: p.key(),
      }));
  }

  public get weaponKindOptions() {
    return Object.keys(this.dataManager.itemsByWeaponKind).map((value) => ({
      label: this.$t(this.dataManager.lookup.weaponKind[value]),
      value: +value,
    })).filter((p) => p.value);
  }

  public get filteredData() {
    const filteredData = this.support ? this.supportEquipments : this.equpiments;
    if (this.sort) {
      if (this.order === 'ascending') {
        return Enumerable.from(filteredData)
          .orderBy((p) => p[this.sort])
          .thenBy((p) => p.totalState)
          .thenBy((p) => p.totalElement)
          .toArray();
      }
      return Enumerable.from(filteredData)
        .orderByDescending((p) => p[this.sort])
        .thenByDescending((p) => p.totalState)
        .thenByDescending((p) => p.totalElement)
        .toArray();
    }
    return filteredData;
  }

  private get items() {
    if (!this.isCurrentCategoryWeaponKindFilter) {
      this.weaponKind = null;
    }

    if (this.weaponKind) {
      return this.dataManager.itemsByWeaponKind[this.weaponKind];
    }

    if (this.category) {
      return this.dataManager.itemsByCategory[this.category];
    }

    return this.dataManager.itemsEquipments;
  }

  private get filteredItems() {
    return this.items.filter((p) => (
      ([null, '', -1].includes(this.battleElement) || (p.elementChangeSkill?.effectValue ?? 0) === this.battleElement)
      && ([null, '', -1].includes(this.skillElement) || p.getAttackSkill()?.element === this.skillElement)
    ));
  }

  private get supportEquipments() {
    return this.filteredItems.map((p) => ({
      DF: p.DF,
      NAME: p.NAME,
      GROUP_DF: p.GROUP_DF,
      icon: p.icon,

      totalState: sum(ItemMVList.states.filter((state) => state in p.EQU).map((state) => p.EQU[state].getSupportValue(this.level))),
      SATK: p.EQU.SATK.getSupportValue(this.level),
      SATKSkill: 0,
      SDEF: p.EQU.SDEF.getSupportValue(this.level),
      MATK: p.EQU.MATK.getSupportValue(this.level),
      MATKSkill: 0,
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

      attackSkill: null,

      item: p,
    }));
  }

  private get equpiments() {
    return this.filteredItems.map((p) => {
      const SATK = p.getState('SATK', this.quality, this.level).total;
      const MATK = p.getState('MATK', this.quality, this.level).total;
      const attackSkill = p.getAttackSkill(this.quality);
      return {
        DF: p.DF,
        NAME: p.NAME,
        GROUP_DF: p.GROUP_DF,
        icon: p.icon,

        totalState: sum(p.getStates(this.quality, this.level).map((i) => i.total)),
        SATK,
        SATKSkill: attackSkill && [EBattleAttribute.eSLASH_DAMAGED, EBattleAttribute.eBLOW_DAMAGED].includes(attackSkill.attackSkill.attribute) ? Math.round(SATK * attackSkill.effectValue) : 0,
        SDEF: p.getState('SDEF', this.quality, this.level).total,
        MATK,
        MATKSkill: attackSkill && attackSkill.attackSkill.attribute === EBattleAttribute.eMAGIC_DAMAGED ? Math.round(MATK * attackSkill.effectValue) : 0,
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

        attackSkill,

        item: p,
      };
    });
  }

  public beforeMount() {
    if (!this.category) {
      this.category = this.dataManager.itemsEquipments[0].CATEG;
    }
  }

  public onSortChange({ prop, order }: { prop: string, order: string }) {
    this.sort = prop;
    this.order = order;
  }

  public updateSort() {
    const { sort } = this;
    if (this.sort) {
      (this.$refs.table as { clearSort: () => void } & HTMLTableElement).clearSort();
    }

    if (!this.showAttackSkillColumn) {
      switch (sort) {
        case 'SATKSkill':
          this.sort = 'SATK';
          break;
        case 'MATKSkill':
          this.sort = 'MATK';
          break;
        default:
          this.sort = sort;
      }
    } else {
      this.sort = sort;
    }
  }
}
</script>
