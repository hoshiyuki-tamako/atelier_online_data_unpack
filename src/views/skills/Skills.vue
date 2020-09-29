<template lang="pug">
div.container
  div.filters
    div.filter
      el-select(v-model="filter.skillKind" @change="resetPage" clearable filterable)
        el-option(v-for="item of skillKindFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('攻撃タイプ') }}
      el-select(v-model="filter.attribute" @change="resetPage" clearable filterable)
        el-option(v-for="item of attributeFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('属性') }}
      el-select(v-model="filter.element" @change="resetPage" clearable filterable)
        el-option(v-for="item of elementFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('目標') }}
      el-select(v-model="filter.targetTeam" @change="resetPage" clearable filterable)
        el-option(v-for="item of targetTeamFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('範囲') }}
      el-select(v-model="filter.targetScope" @change="resetPage" clearable filterable)
        el-option(v-for="item of targetScopeFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="filter.name" @change="resetPage" clearable)
    div.filter
      el-checkbox-group(v-model="filter.has" @change="resetPage" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.filters
    div.filter
      el-checkbox(v-model="showColumnId") ID
      el-checkbox(v-model="showColumnName") {{ $t('名前') }}
      el-checkbox(v-model="showColumnDetail") {{ $t('詳細') }}
      el-checkbox(v-model="showColumnEffectValue") {{ $t('数値') }}
      el-checkbox(v-model="showColumnSpAdd") {{ $t('SP回復率') }}
      el-checkbox(v-model="showColumnAttackSkillAttribute") {{ $t('攻撃タイプ') }}
      el-checkbox(v-model="showColumnAttackSkillElement") {{ $t('属性') }}
      el-checkbox(v-model="showColumnTargetTeam") {{ $t('對象') }}
      el-checkbox(v-model="showColumnStateOwn") {{ $t('追加状態 (自)') }}
      el-checkbox(v-model="showColumnState") {{ $t('追加状態') }}
      el-checkbox(v-model="showColumnIcon") {{ $t('画像') }}
      el-checkbox(v-model="showColumnHas") {{ `${$t('アイテム')}/${$t('人物')}/${$t('敵')}` }}

  div.content
    el-table(ref="table" :data="filteredPaginationSkills" @sort-change="onSortChange")
      el-table-column(v-if="showColumnId" prop="id" label="ID" width="100%" sortable="custom")
      el-table-column(v-if="showColumnName" prop="name" :label="$t('名前')")
      el-table-column(v-if="showColumnDetail" prop="detail" :label="$t('詳細')")
      el-table-column(v-if="showColumnEffectValue" prop="effectValue" :label="$t('数値')" sortable="custom")
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
      el-table-column(v-if="showColumnSpAdd" prop="spAdd" :label="$t('SP回復率')" sortable="custom")
        template(slot-scope="scope") {{ scope.row.spAdd }}{{ $t('倍') }}
      el-table-column(v-if="showColumnAttackSkillAttribute" prop="attackSkill.attribute" :label="$t('攻撃タイプ')" sortable="custom")
        template(slot-scope="scope") {{ $t(dataManager.lookup.EBattleAttribute[scope.row.attackSkill.attribute]) }}
      el-table-column(v-if="showColumnAttackSkillElement" prop="attackSkill.element" :label="$t('属性')" sortable="custom")
        template(slot-scope="scope") {{ $t(dataManager.lookup.EBattleElementKind[scope.row.attackSkill.element]) }}
      el-table-column(v-if="showColumnTargetTeam" prop="targetTeam" :label="$t('對象')" sortable="custom")
        template(slot-scope="scope") {{ $t(dataManager.lookup.targetTeam[scope.row.targetTeam]) }}{{ $t(dataManager.lookup.eFieldItemRange[scope.row.targetScope]) }}
      el-table-column(v-if="showColumnStateOwn" prop="stateOwn.length" :label="$t('追加状態 (自)')" sortable="custom")
        template(slot-scope="scope")
          p(v-for="[state, abnormalState] of scope.row.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }}
      el-table-column(v-if="showColumnState" prop="state.length" :label="$t('追加状態')" sortable="custom")
        template(slot-scope="scope")
          p(v-for="[state, abnormalState] of scope.row.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }}
      el-table-column(v-if="showColumnIcon" prop="iconPath" :label="$t('画像')" width="100%")
        template(slot-scope="scope")
          img.icon-small(v-if="scope.row.iconPath" :src="scope.row.icon" :alt="scope.row.name")
      el-table-column(v-if="showColumnHas" :label="`${$t('アイテム')}/${$t('人物')}/${$t('敵')}`")
        template(slot-scope="scope")
          div
            div(v-if="dataManager.itemsBySkill[scope.row.id]")
              h3 {{ $t('アイテム') }}
              router-link(v-for="item in dataManager.itemsBySkill[scope.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }")
                img.icon-small(:src="item.icon" :alt="item.NAME")
            div(v-if="dataManager.enemiesBySkill[scope.row.id]")
              h3 {{ $t('敵') }}
              router-link(v-for="enemy in dataManager.enemiesBySkill[scope.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
                img.icon-small(:src="enemy.icon" :alt="enemy.NAME")
            div(v-if="dataManager.charactersBySkill[scope.row.id]")
              h3 {{ $t('人物') }}
              router-link(v-for="character in dataManager.charactersBySkill[scope.row.id]" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
                img.icon-small(:src="character.icon" :alt="character.NAME")
    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredSkills.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as SkillList } from '@/master/skill';
import LRU from 'lru-cache';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public showColumnId!: boolean;

  public showColumnName!: boolean;

  public showColumnDetail!: boolean;

  public showColumnEffectValue!: boolean;

  public showColumnSpAdd!: boolean;

  public showColumnAttackSkillAttribute!: boolean;

  public showColumnAttackSkillElement!: boolean;

  public showColumnTargetTeam!: boolean;

  public showColumnStateOwn!: boolean;

  public showColumnState!: boolean;

  public showColumnIcon!: boolean;

  public showColumnHas!: boolean;
}

// eslint-disable-next-line no-shadow
export enum SkillKind {
  none,
  normal,
  blazeArt,
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('skillsFilter', ['showColumnId', 'showColumnName', 'showColumnDetail', 'showColumnEffectValue', 'showColumnSpAdd', 'showColumnAttackSkillAttribute', 'showColumnAttackSkillElement', 'showColumnTargetTeam', 'showColumnStateOwn', 'showColumnState', 'showColumnIcon', 'showColumnHas']),
  },
})
export default class extends VueWithMapFields {
  public get skillKindFilter() {
    return [
      {
        label: this.$t('スキル'),
        value: SkillKind.normal,
      },
      {
        label: this.$t('ブレイズアーツ'),
        value: SkillKind.blazeArt,
      },
    ];
  }

  public get attributeFilter() {
    return Object.entries(dataManager.lookup.EBattleAttribute).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get elementFilter() {
    return Object.entries(dataManager.lookup.EBattleElementKind).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get targetTeamFilter() {
    return Object.entries(dataManager.lookup.targetTeam).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get targetScopeFilter() {
    return Object.entries(dataManager.lookup.eFieldItemRange).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get hasFilter() {
    return [
      {
        label: this.$t('追加状態 (自)'),
        value: 1,
      },
      {
        label: this.$t('追加状態'),
        value: 2,
      },
      {
        label: this.$t('アイテム'),
        value: 3,
      },
      {
        label: `${this.$t('敵')}`,
        value: 4,
      },
      {
        label: `${this.$t('人物')}`,
        value: 5,
      },
    ];
  }

  public filter = {
    skillKind: SkillKind.normal,
    attribute: null,
    element: '',
    targetTeam: '',
    targetScope: '',
    name: '',
    has: [],

    sort: '',
    order: null,
  };

  public filterCache = new LRU<string, SkillList[]>(100);

  public page = 1;

  public take = 100;

  public get skills() {
    switch (this.filter.skillKind) {
      case SkillKind.blazeArt:
        return dataManager.skillBlazeArts;
      case SkillKind.normal:
      case SkillKind.none:
      default:
        return dataManager.skills;
    }
  }

  public get filteredSkills() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      const skills = this.skills.filter((p) => (
        (this.filter.attribute === null || p.attackSkill.attribute === this.filter.attribute)
        && (this.filter.element === '' || p.attackSkill.element === +this.filter.element)
        && (this.filter.targetTeam === '' || p.targetTeam === +this.filter.targetTeam)
        && (this.filter.targetScope === '' || p.targetScope === +this.filter.targetScope)
        && (!this.filter.name || p.id === +this.filter.name || p.name.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))
        && (!this.filter.has.includes(1) || p.stateOwn.length)
        && (!this.filter.has.includes(2) || p.state.length)
        && (!this.filter.has.includes(3) || dataManager.itemsBySkill[p.id])
        && (!this.filter.has.includes(4) || dataManager.enemiesBySkill[p.id])
        && (!this.filter.has.includes(5) || dataManager.charactersBySkill[p.id])
      ));
      const findObject = (skill: SkillList) => this.filter.sort.split('.').reduce((o, i) => o[i], skill);
      if (this.filter.sort) {
        if (this.filter.order === 'ascending') {
          skills.sort((a, b) => findObject(a) - findObject(b));
        } else {
          skills.sort((a, b) => findObject(b) - findObject(a));
        }
      }
      this.filterCache.set(key, skills);
    }

    return this.filterCache.get(key);
  }

  public get filteredPaginationSkills() {
    return this.filteredSkills.slice((this.page - 1) * this.take, this.page * this.take);
  }

  public onSortChange({ prop, order }: { prop: string, order: string }) {
    this.filter.sort = prop;
    this.filter.order = order;
  }

  public scrollTableTop() {
    (this.$refs.table as Vue).$el.scrollIntoView();
  }

  public resetPage() {
    this.page = 1;
  }

  public beforeMount() {
    if (typeof this.$route.query.skillKind !== 'undefined') {
      this.$set(this.filter, 'skillKind', +this.$route.query.skillKind);
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
