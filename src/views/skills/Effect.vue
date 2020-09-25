<template lang="pug">
div.container
  div.filter
    el-form(:model="filter")
      el-form-item(:label="$t('すべてを一度に表示')")
        el-switch(@change="onShowAllChange" v-model="filter.showAll")

  div.content
    el-table(ref="table" v-loading="tableLoading" :data="filteredPaginationSkills" header-align="center" style="width: 100%" default-expand-all)
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
        template(slot="header" slot-scope="scope")
          el-input(v-model="filter.id" size="mini" placeholder="id")
      el-table-column(prop="name" :label="$t('名前')")
        template(slot="header" slot-scope="scope")
          el-input(v-model="filter.name" size="mini" placeholder="名前")
      el-table-column(prop="detail" :label="$t('詳細')")
      el-table-column(prop="id" :label="$t('数値')")
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredSkills.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as SkillList } from '@/master/skill';
import ms from 'ms';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public tableLoading = false;

  public filter = {
    showAll: false,
    id: null,
    name: '',
  };

  public filterCache = new Map<string, SkillList[]>();

  public maximumCacheSize = 1000;

  // page
  public page = 1;

  public take = 100;

  public get filteredSkills() {
    const filterName = this.filter.name.toLocaleLowerCase();
    const filterCacheKey = `${+this.filter.id}|${filterName}`;

    if (!this.filterCache.has(filterCacheKey)) {
      if (Object.keys(this.filterCache).length > this.maximumCacheSize) {
        this.filterCache.clear();
      }
      this.filterCache.set(filterCacheKey, dataManager.skillEffects.filter((p) => (
        (!this.filter.id || p.id === +this.filter.id)
        && (!filterName || p.name.toLocaleLowerCase().includes(filterName))
      )));
    }

    return this.filterCache.get(filterCacheKey);
  }

  public get filteredPaginationSkills() {
    return this.filteredSkills.slice((this.page - 1) * this.take, this.page * this.take);
  }

  //
  public onShowAllChange() {
    this.tableLoading = true;
    setTimeout(() => {
      this.take = dataManager.skillEffects.length;
      this.tableLoading = false;
    }, ms('1s'));
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
