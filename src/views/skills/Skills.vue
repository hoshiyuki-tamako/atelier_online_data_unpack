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
      span {{ $t('エフェクトトリガー') }}
      el-select(v-model="filter.trigger" @change="resetPage" clearable filterable)
        el-option(v-for="item of triggerFilter" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="filter.name" @change="resetPage" clearable)
    div.filter
      span {{ $t('詳細') }}
      el-input(v-model="filter.detail" @change="resetPage" clearable)
  div.filters
    div.filter
      el-checkbox-group(v-model="filter.has" @change="resetPage" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.filters
    div.filter
      el-checkbox(v-model="showColumnId") ID
      el-checkbox(v-model="showColumnName") {{ $t('名前') }}
      el-checkbox(v-model="showColumnAttackSkillAttribute") {{ $t('攻撃タイプ') }}
      el-checkbox(v-model="showColumnAttackSkillElement") {{ $t('属性') }}
      el-checkbox(v-model="showColumnTargetTeam") {{ $t('對象') }}
      el-checkbox(v-model="showColumnStateOwn") {{ $t('追加状態 (自)') }}
      el-checkbox(v-model="showColumnState") {{ $t('追加状態') }}

  div.content
    el-table(ref="table" :data="filteredPaginationSkills" default-expand-all @sort-change="onSortChange")
      el-table-column(type="expand")
        template(slot-scope="props")
          div.item-container
            div.item-container-left
              p(v-if="props.row.iconPath")
                img.icon-small(:src="props.row.icon" :alt="props.row.name")
              h3 {{ props.row.name }}
              p(v-if="props.row.detail") {{ props.row.detail }}
              br
              p ID: {{ props.row.id }}
              p {{ $t('数値') }}1: {{ props.row.effectValue }}
              p {{ $t('数値') }}2: {{ props.row.effectValue2 }}
              p(v-if="props.row.spAdd") {{ $t('SP回復率') }}: {{ props.row.spAdd }}{{ $t('倍') }}
              p(v-if="props.row.trigger") {{ $t('エフェクトトリガー') }}: {{ EBattleEffectTrigger[props.row.trigger] || props.row.trigger }}
              //- p effectTarget {{ props.row.effectTarget }}
              p(v-if="props.row.coolTime") {{ $t('クールダウンタイム') }}: {{ props.row.coolTime }}{{ $t('ターン') }}
              br
              div(v-if="props.row.combSkillList.length")
                h4 {{ $t('含まれるスキル') }}
                p(v-for="(skill, i) of props.row.combSkillList")
                  router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
            div.item-container-right
              div(v-if="dataManager.itemsBySkill[props.row.id]")
                h3 {{ $t('アイテム') }}
                router-link(v-for="item in dataManager.itemsBySkill[props.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }" target="_blank")
                  img.icon-small(:src="item.icon" :alt="item.NAME")
              div(v-if="dataManager.enemiesBySkill[props.row.id]")
                h3 {{ $t('敵') }}
                router-link(v-for="enemy in dataManager.enemiesBySkill[props.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }" target="_blank")
                  img.icon-small(:src="enemy.icon" :alt="enemy.NAME")
              div(v-if="dataManager.charactersBySkill[props.row.id]")
                h3 {{ $t('人物') }}
                router-link(v-for="character in dataManager.charactersBySkill[props.row.id]" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }" target="_blank")
                  img.icon-small(:src="character.icon" :alt="character.NAME")
      el-table-column(v-if="showColumnId" prop="id" label="ID" width="100%" sortable="custom")
      el-table-column(v-if="showColumnName" prop="name" :label="$t('名前')")
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
import { EBattleEffectTrigger } from '@/logic/Enums';

abstract class VueWithMapFields extends VueBase {
  public showColumnId!: boolean;

  public showColumnName!: boolean;

  public showColumnAttackSkillAttribute!: boolean;

  public showColumnAttackSkillElement!: boolean;

  public showColumnTargetTeam!: boolean;

  public showColumnStateOwn!: boolean;

  public showColumnState!: boolean;
}

// eslint-disable-next-line no-shadow
export enum SkillKind {
  none,
  normal,
  blazeArt,
  effect,
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('skillsFilter', ['showColumnId', 'showColumnName', 'showColumnAttackSkillAttribute', 'showColumnAttackSkillElement', 'showColumnTargetTeam', 'showColumnStateOwn', 'showColumnState']),
  },
})
export default class extends VueWithMapFields {
  public get EBattleEffectTrigger() {
    return EBattleEffectTrigger;
  }

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
      {
        label: this.$t('効果'),
        value: SkillKind.effect,
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

  public get triggerFilter() {
    return Object.values(EBattleEffectTrigger)
      .filter((p) => typeof p === 'string')
      .map((label) => ({
        label,
        value: EBattleEffectTrigger[label],
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
    skillKind: null,
    attribute: '',
    element: '',
    targetTeam: '',
    targetScope: '',
    trigger: null,
    name: '',
    detail: '',
    has: [],

    sort: '',
    order: null,
  };

  public filterCache = new LRU<string, SkillList[]>(100);

  public page = 1;

  public take = 100;

  public get skills() {
    switch (this.filter.skillKind) {
      case SkillKind.normal:
        return dataManager.skills;
      case SkillKind.blazeArt:
        return dataManager.skillBlazeArts;
      case SkillKind.effect:
        return this.dataManager.skillEffects;
      case SkillKind.none:
      default:
        return this.dataManager.skill.m_vList.filter((p) => !p.category);
    }
  }

  public get filteredSkills() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      let skills = this.skills.filter((p) => (
        (this.filter.attribute === '' || p.attackSkill.attribute === +this.filter.attribute)
        && (this.filter.element === '' || p.attackSkill.element === +this.filter.element)
        && (this.filter.targetTeam === '' || p.targetTeam === +this.filter.targetTeam)
        && (this.filter.targetScope === '' || p.targetScope === +this.filter.targetScope)
        && ([null, '', -1].includes(this.filter.trigger) || p.trigger === this.filter.trigger)
        && (!this.filter.name || p.id === +this.filter.name || p.name.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))
        && (!this.filter.detail || p.detail.toLocaleLowerCase().includes(this.filter.detail.toLocaleLowerCase()))
        && (!this.filter.has.includes(1) || p.stateOwn.length)
        && (!this.filter.has.includes(2) || p.state.length)
        && (!this.filter.has.includes(3) || dataManager.itemsBySkill[p.id])
        && (!this.filter.has.includes(4) || dataManager.enemiesBySkill[p.id])
        && (!this.filter.has.includes(5) || dataManager.charactersBySkill[p.id])
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

  public beforeMount() {
    if (this.$route.query.skillKind) {
      this.$set(this.filter, 'skillKind', +this.$route.query.skillKind);
    }

    if (this.$route.query.id) {
      this.$set(this.filter, 'name', this.$route.query.id.toString() || '');
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
