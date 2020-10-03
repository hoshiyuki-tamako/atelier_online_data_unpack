<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="filter.name" @change="resetPage" clearable)
    div.filter
      el-checkbox-group(v-model="filter.has" @change="resetPage" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}

  div.content
    el-table(ref="table" :data="filteredPaginationSkills" default-expand-all @sort-change="onSortChange")
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
      el-table-column(prop="id" label="ID" width="100%" sortable="custom")
      el-table-column(prop="name" :label="$t('名前')")
      el-table-column(prop="detail" :label="$t('詳細')")
      el-table-column(prop="effectValue" :label="$t('数値')" sortable="custom")
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
  public get hasFilter() {
    return [
      {
        label: this.$t('アイテム'),
        value: 1,
      },
      {
        label: `${this.$t('敵')}`,
        value: 2,
      },
      {
        label: `${this.$t('人物')}`,
        value: 3,
      },
    ];
  }

  public filter = {
    name: '',

    has: [],

    sort: '',
    order: null,
  };

  public filterCache = new LRU<string, SkillList[]>(100);

  // page
  public page = 1;

  public take = 100;

  public get filteredSkills() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      let skills = dataManager.skillEffects.filter((p) => (
        (!this.filter.name || p.id === +this.filter.name || p.name.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))
        && (!this.filter.has.includes(1) || dataManager.itemsBySkill[p.id])
        && (!this.filter.has.includes(2) || dataManager.enemiesBySkill[p.id])
        && (!this.filter.has.includes(3) || dataManager.charactersBySkill[p.id])
      ));
      const findObject = (skill: SkillList) => this.filter.sort.split('.').reduce((o, i) => o[i], skill);
      if (this.filter.order) {
        if (this.filter.order === 'ascending') {
          skills.sort((a, b) => findObject(a) - findObject(b));
        } else {
          skills.sort((a, b) => findObject(b) - findObject(a));
        }
      } else {
        skills = skills.reverse();
      }
      this.filterCache.set(key, skills);
    }
    return this.filterCache.get(key);
  }

  public get filteredPaginationSkills() {
    return this.filteredSkills.slice((this.page - 1) * this.take, this.page * this.take);
  }

  public onSortChange({ prop, order }: { prop: string, order: string }) {
    this.$set(this.filter, 'sort', prop);
    this.$set(this.filter, 'order', order);
    this.resetPage();
  }

  public scrollTableTop() {
    (this.$refs.table as Vue).$el.scrollIntoView();
  }

  public resetPage() {
    this.page = 1;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
