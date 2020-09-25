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
      el-input(v-model="name")
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
    el-card.item(v-for="item of filteredItems" :key="item.DF")
      router-link(:to="{ name: 'ItemsItem', query: { df: item.DF } }")
        h3 {{ item.NAME }}
        img.item__image(:src="item.icon" :alt="item.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get category() {
    return this.$store.state.itemsFilter.category;
  }

  public set category(value) {
    this.$store.commit('itemsFilter/setCategory', value);
  }

  public get weaponKind() {
    return this.$store.state.itemsFilter.weaponKind;
  }

  public set weaponKind(value) {
    this.$store.commit('itemsFilter/setWeaponKind', value);
  }

  public get name() {
    return this.$store.state.itemsFilter.name;
  }

  public set name(value) {
    this.$store.commit('itemsFilter/setName', value);
  }

  public get sort() {
    return this.$store.state.itemsFilter.sort;
  }

  public set sort(value) {
    this.$store.commit('itemsFilter/setSort', value);
  }

  public get legendRecipe() {
    return this.$store.state.itemsFilter.legendRecipe;
  }

  public set legendRecipe(value) {
    this.$store.commit('itemsFilter/setLegendRecipe', value);
  }

  public get characterOnlyItem() {
    return this.$store.state.itemsFilter.characterOnlyItem;
  }

  public set characterOnlyItem(value) {
    this.$store.commit('itemsFilter/setCharacterOnlyItem', value);
  }

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

  public get filteredItems() {
    let items = this.category ? dataManager.itemsByCategory[this.category] : dataManager.itemsOrderByCategory;

    if (!this.enableWeaponKindFilter) {
      this.weaponKind = null;
    }

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
      const query = { ...this.$route.query };
      delete query.category;
      this.$router.replace({ query });
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
