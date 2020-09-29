<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('カテゴリー') }}
      el-select(v-model="category" clearable filterable)
        el-option(v-for="item in categoryOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponKind" clearable filterable :disabled="!enableWeaponKindFilter")
        el-option(v-for="item in weaponKindOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('ソート') }}
      el-select(v-model="sort" clearable filterable)
        el-option(v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('レジェンドレシピ') }}
      el-switch(v-model="legendRecipe")
    div.filter
      span {{ $t('キャラクター專用') }}
      el-switch(v-model="characterOnlyItem")
  div.items
    router-link(v-for="item of filteredItems" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }")
      el-card.item
        h3 {{ item.NAME }}
        img.item__image(:src="item.icon" :alt="item.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public category!: number | null;

  public weaponKind!: number | null;

  public name!: string;

  public sort!: number;

  public legendRecipe!: boolean;

  public characterOnlyItem!: boolean;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('itemsFilter', ['category', 'weaponKind', 'name', 'sort', 'legendRecipe', 'characterOnlyItem']),
  },
})
export default class extends VueWithMapFields {
  public get categoryOptions() {
    return Object.keys(dataManager.itemsByCategory).map((value) => ({
      label: this.$t(dataManager.lookup.itemCategory[value]),
      value: +value,
    }));
  }

  public get weaponKindOptions() {
    return Object.keys(dataManager.itemsByWeaponKind).map((value) => ({
      label: this.$t(dataManager.lookup.weaponKind[value]),
      value: +value,
    })).filter((p) => p.value);
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
    return !this.category || dataManager.itemsWeaponKindCategories.includes(this.category);
  }

  public get items() {
    if (this.category) {
      return dataManager.itemsByCategory[this.category];
    }
    if (this.sort !== null) {
      return dataManager.item.m_vList;
    }
    return dataManager.itemsOrderByCategory;
  }

  public get filteredItems() {
    if (!this.enableWeaponKindFilter) {
      this.weaponKind = null;
    }

    let { items } = this;
    if (this.weaponKind) {
      items = items.filter((p) => p.WPN_KIND === this.weaponKind);
    }

    items = items.filter((p) => (
      (!this.weaponKind || p.WPN_KIND === this.weaponKind)
      && (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && (!this.legendRecipe || p.LRCP_CHARA.length)
      && (!this.characterOnlyItem || p.GROUP_DF)
    ));

    if (this.sort === 1) {
      return [...items].reverse();
    }

    return items;
  }

  public beforeMount() {
    if (this.$route.query.category) {
      this.resetFilter();
      this.category = +this.$route.query.category;
      this.$router.replace({ query: { ...this.$route.query, category: undefined } });
    }
  }

  public resetFilter() {
    this.category = null;
    this.name = '';
    this.weaponKind = null;
    this.sort = 1;
    this.legendRecipe = false;
    this.characterOnlyItem = false;
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
  width: 100px
.item__title
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
</style>
