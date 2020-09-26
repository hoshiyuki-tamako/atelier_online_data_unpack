<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="filter.name" clearable)
    div.filter
      el-switch(v-model="filter.hasItem" :active-text="$t('アイテム')")
    div.filter
      el-switch(v-model="filter.hasEnemy" :active-text="$t('敵')")
    div.filter
      el-switch(v-model="filter.hasCharacter" :active-text="$t('人物')")

  div.content
    el-table(ref="table" :data="filteredPaginationSkills" default-expand-all)
      el-table-column(type="expand")
        template(slot-scope="props")
          div
            div(v-if="dataManager.itemsBySkill[props.row.id]")
              h3 {{ $t('アイテム') }}
              router-link(v-for="item in dataManager.itemsBySkill[props.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }")
                img.icon-small(:src="item.icon" :alt="item.NAME")
            div(v-if="dataManager.enemiesBySkill[props.row.id]")
              h3 {{ $t('敵') }}
              router-link(v-for="enemy in dataManager.enemiesBySkill[props.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
                img.icon-small(:src="enemy.icon" :alt="enemy.NAME")
            div(v-if="dataManager.charactersBySkill[props.row.id]")
              h3 {{ $t('人物') }}
              router-link(v-for="character in dataManager.charactersBySkill[props.row.id]" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
                img.icon-small(:src="character.icon" :alt="character.NAME")
      el-table-column(prop="id" label="ID" width="100%")
      el-table-column(prop="name" :label="$t('名前')")
      el-table-column(prop="detail" :label="$t('詳細')")
      el-table-column(prop="effectValue" :label="$t('数値')")
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredSkills.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as SkillList } from '@/master/skill';
import LRU from 'lru-cache';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public filter = {
    name: '',

    hasItem: false,
    hasEnemy: false,
    hasCharacter: false,
  };

  public filterCache = new LRU<string, SkillList[]>(100);

  // page
  public page = 1;

  public take = 100;

  public get filteredSkills() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      this.filterCache.set(key, dataManager.skillEffects.filter((p) => (
        (!this.filter.name || p.id === +this.filter.name || p.name.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))
        && (!this.filter.hasItem || dataManager.itemsBySkill[p.id])
        && (!this.filter.hasEnemy || dataManager.enemiesBySkill[p.id])
        && (!this.filter.hasCharacter || dataManager.charactersBySkill[p.id])
      )));
    }
    return this.filterCache.get(key);
  }

  public get filteredPaginationSkills() {
    return this.filteredSkills.slice((this.page - 1) * this.take, this.page * this.take);
  }

  public scrollTableTop() {
    (this.$refs.table as Vue).$el.scrollIntoView();
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
