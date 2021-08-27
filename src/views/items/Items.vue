<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('カテゴリー') }}
      el-select(v-model="category" placeholder="" clearable filterable)
        el-option(v-for="item of categoryOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponKind" placeholder="" clearable filterable :disabled="!enableWeaponKindFilter")
        el-option(v-for="item of weaponKindOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('攻撃属性') }}
      el-select(v-model="battleElement" placeholder="" clearable filterable)
        el-option(v-for="[value, label] of Object.entries(dataManager.lookup.EBattleElementKind)" :key="value" :label="$t(label)" :value="+value")
    div.filter
      span {{ $t('スキル属性') }}
      el-select(v-model="skillElement" placeholder="" clearable filterable)
        el-option(v-for="[value, label] of Object.entries(dataManager.lookup.EBattleElementKind)" :key="value" :label="$t(label)" :value="+value")
    div.filter
      span {{ $t('性別') }}
      el-select(v-model="gender" placeholder="" clearable filterable)
        el-option(v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('ソート') }}
      el-select(v-model="sort" placeholder="" clearable filterable)
        el-option(v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('レジェンドレシピ') }}
      el-switch(v-model="legendRecipe")
    div.filter
      span {{ $t('専用装備') }}
      el-switch(v-model="characterOnlyItem")
  div.filters
    div.filter
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.items(v-if="!waitForReset")
    router-link(v-for="item of filteredItems" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }")
      el-card.item
        h3 {{ item.NAME }}
        img.item__image(:src="item.icon" :alt="item.NAME" loading="lazy")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { eRaceKind } from '@/logic/Enums';

abstract class VueWithMapFields extends VueBase {
  public category!: number | null;

  public weaponKind!: number | null;

  public battleElement!: number | null;

  public skillElement!: number | null;

  public gender!: eRaceKind | null;

  public name!: string;

  public sort!: number;

  public legendRecipe!: boolean;

  public characterOnlyItem!: boolean;

  public has!: number[];
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('itemsFilter', ['category', 'weaponKind', 'battleElement', 'skillElement', 'gender', 'name', 'sort', 'legendRecipe', 'characterOnlyItem', 'has']),
  },
})
export default class extends VueWithMapFields {
  public get categoryOptions() {
    return Object.keys(this.dataManager.itemsByCategory).map((value) => ({
      label: this.$t(this.dataManager.lookup.itemCategory[value]),
      value: +value,
    }));
  }

  public get weaponKindOptions() {
    return Object.keys(this.dataManager.itemsByWeaponKind).map((value) => ({
      label: this.$t(this.dataManager.lookup.weaponKind[value]),
      value: +value,
    })).filter((p) => p.value);
  }

  public get genderOptions() {
    return [
      {
        label: '♂',
        value: eRaceKind.Human_Male,
      },
      {
        label: '♀',
        value: eRaceKind.Human_Female,
      },
    ];
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

  public get enableWeaponKindFilter() {
    return !this.category || this.dataManager.itemsWeaponKindCategories.includes(this.category);
  }

  public get hasFilter() {
    return [
      {
        label: this.$t('材料'),
        value: 1,
      },
      {
        label: this.$t('調合'),
        value: 2,
      },
      {
        label: this.$t('フィールド用'),
        value: 3,
      },
      {
        label: this.$t('クエスト調合/採取'),
        value: 4,
      },
      {
        label: this.$t('クエスト納品'),
        value: 5,
      },
      {
        label: this.$t('クエスト報酬'),
        value: 6,
      },
      {
        label: this.$t('トレジャー'),
        value: 7,
      },
      {
        label: this.$t('食事'),
        value: 8,
      },
    ];
  }

  public get items() {
    if (this.category) {
      return this.dataManager.itemsByCategory[this.category];
    }
    if (this.sort !== null) {
      return this.dataManager.item.m_vList;
    }
    return this.dataManager.itemsOrderByCategory;
  }

  public get filteredItems() {
    if (!this.enableWeaponKindFilter) {
      this.weaponKind = null;
    }

    const items = this.items.filter((p) => (
      (!this.weaponKind || p.WPN_KIND === this.weaponKind)
      && ([null, '', -1].includes(this.battleElement) || (p.elementChangeSkill?.effectValue ?? 0) === this.battleElement)
      && ([null, '', -1].includes(this.skillElement) || p.getAttackSkill()?.element === this.skillElement)
      && (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && (!this.legendRecipe || p.LRCP_CHARA.length)
      && (!this.characterOnlyItem || p.GROUP_DF)
      && (!this.has.includes(1) || this.dataManager.itemsByRecipe[p.DF])
      && (!this.has.includes(2) || p.RSP.length)
      && (!this.has.includes(3) || this.dataManager.fieldItemById[p.DF])
      && (!this.has.includes(4) || this.dataManager.questsByGetItem[p.DF])
      && (!this.has.includes(5) || this.dataManager.questsByDeliverItem[p.DF])
      && (!this.has.includes(6) || this.dataManager.questsByRewardItem[p.DF])
      && (!this.has.includes(7) || this.dataManager.api.huntInfosByItemId[p.DF])
      && (!this.has.includes(8) || this.dataManager.characterMealItemDfs.includes(p.DF))
      && (!this.gender || p.canGenderUseEquipment(this.gender))
    ));

    if (this.sort === 1) {
      return items.reverse();
    }

    return items;
  }

  public waitForReset = true;

  public async beforeMount() {
    if (this.$route.query.category) {
      await this.$store.dispatch('itemsFilter/reset');
      this.category = +this.$route.query.category;
      this.$router.replace({ query: { ...this.$route.query, category: undefined } });
    }

    this.waitForReset = false;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.items
  display: flex
  flex-wrap: wrap
.item
  margin: 8px
  text-align: center
  cursor: pointer
.item__image
  width: 128px
  height: 128px
.item__title
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
</style>
