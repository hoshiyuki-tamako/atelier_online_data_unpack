<template lang="pug">
div.container
  JsonViewDialog(ref="jsonViewDialog")

  div.filters
    div.filter
      el-select(v-model="filter.skillKind" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of skillKindFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('攻撃タイプ') }}
      el-select(v-model="filter.attribute" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of attributeFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('属性') }}
      el-select(v-model="filter.element" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of elementFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('目標') }}
      el-select(v-model="filter.targetTeam" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of targetTeamFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('範囲') }}
      el-select(v-model="filter.targetScope" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of targetScopeFilter" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('トリガー') }}
      el-select(v-model="filter.trigger" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of triggerFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('エフェクト') }}
      el-select(v-model="filter.effect" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of effectFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('エフェクトターゲット') }}
      el-select(v-model="filter.effectTarget" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of effectTargetFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('異常状態') }}
      el-select(v-model="filter.abnormalState" @change="resetPage" placeholder="" clearable filterable)
        el-option(v-for="item of dataManager.abnormalState.m_vList" :key="item.value" :label="item.name" :value="item.id")
  div.filters
    div.filter
      span {{ $t('名前') }}
      el-input(v-model="filter.name" @change="resetPage" clearable)
    div.filter
      span ID
      el-input(v-model="filter.id" @change="resetPage" clearable)
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
      el-checkbox(v-model="showColumnTrigger") {{ $t('トリガー') }}
      el-checkbox(v-model="showColumnEffect") {{ $t('エフェクト') }}
      el-checkbox(v-model="showColumnEffectTarget") {{ $t('エフェクトターゲット') }}

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
              p(v-if="props.row.category") {{ $t('レア度') }}: {{ '⭐'.repeat(props.row.rarity) }}
              p {{ $t('数値') }}1: {{ props.row.effectValue }}
              p(v-if="props.row.effectValue2") {{ $t('数値') }}2: {{ props.row.effectValue2 }}
              p(v-if="props.row.attribute") {{ $t('攻撃タイプ') }}: {{ $t(dataManager.lookup.EBattleAttribute[props.row.attackSkill.attribute]) }}
              p(v-if="props.row.attribute") {{ $t('属性') }}: {{ $t(dataManager.lookup.EBattleElementKind[props.row.attackSkill.element]) }}
              p(v-if="props.row.attribute") {{ $t('對象') }}:
                span(v-if="dataManager.locale === 'en'")  {{ $t(dataManager.lookup.eFieldItemRange[props.row.targetScope]) }} {{ $t(dataManager.lookup.targetTeam[props.row.targetTeam]) }}
                span(v-else)  {{ $t(dataManager.lookup.targetTeam[props.row.targetTeam]) }} {{ $t(dataManager.lookup.eFieldItemRange[props.row.targetScope]) }}
              p(v-if="props.row.spAdd") {{ $t('SP回復率') }}: {{ props.row.spAdd }} {{ $t('倍') }}
              p(v-if="props.row.trigger") {{ $t('トリガー') }}: {{ EBattleEffectTrigger[props.row.trigger] || props.row.trigger }}
              p(v-if="props.row.effect") {{ $t('エフェクト') }}: {{ EBattleEffectKind[props.row.effect] || props.row.effect }}
              p(v-if="props.row.effectTarget") {{ $t('エフェクトターゲット') }}: {{ EBattleEffectTarget[props.row.effectTarget] || props.row.effectTarget }}
              p(v-if="props.row.coolTime") {{ $t('クールダウンタイム') }}: {{ props.row.coolTime }}{{ $t('ターン') }}

              div(v-if="props.row.effect === EBattleEffectKind.eZONE_CHANGE" v-for="zone of [dataManager.zoneById[props.row.effectValue]].filter((p) => p)")
                br
                h4
                  router-link(:to="{ name: 'InfoZone', query: { id: zone.id } }" target="_blank") {{ zone.name }}
                p(v-for="zoneEffectId of zone.effectlist") {{ dataManager.zoneEffectById[zoneEffectId].name }} ({{ dataManager.zoneEffectById[zoneEffectId].value }})
              div(v-if="props.row.effect === EBattleEffectKind.eSTART_SKILL && dataManager.skillById[props.row.effectValue]")
                br
                h4 {{ $t('スキル') }}
                p(v-for="skill of [dataManager.skillById[props.row.effectValue]]")
                  router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
              br
              el-link(@click="$refs.jsonViewDialog.open(props.row)" :underline="false") {{ $t('Rawデータ') }}

            div.item-container-right
              div(v-if="props.row.stateOwn.length")
                h4 {{ $t('追加状態 (自)') }}
                template(v-for="[state, abnormalState] of props.row.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])")
                  el-tooltip(:content="abnormalState.effectlist.map((id) => dataManager.abnormalStateEffectById[id]).filter((p) => p).map((p) => `${p.name} ${p.value}`).join(' / ')" placement="top")
                    p
                      el-tag(size="small" effect="plain")
                        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('確率', [(state.rate * 100).toFixed()]) }}
                      el-tag(size="small")
                        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.name }}
                      template(v-if="abnormalState.effectlist.length" v-for="id of [abnormalState.effectlist.length > 1 ? abnormalState.effectlist[abnormalState.effectlist.length - 1] : abnormalState.effectlist[0]]")
                        el-tag(v-if="dataManager.abnormalStateEffectById[id]" size="small" effect="plain")
                          router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('数値') }} {{ dataManager.abnormalStateEffectById[id].value }}
                      el-tag(size="small" effect="plain")
                        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.turn }} {{ $t('ターン') }}
                br
              div(v-if="props.row.state.length")
                h4 {{ $t('追加状態') }}
                template(v-for="[state, abnormalState] of props.row.state.map((p) => [p, dataManager.abnormalStateById[p.id]])")
                  el-tooltip(:content="abnormalState.effectlist.map((id) => dataManager.abnormalStateEffectById[id]).filter((p) => p).map((p) => `${p.name} ${p.value}`).join(' / ')" placement="top")
                    p
                      el-tag(size="small" effect="plain")
                        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('確率', [(state.rate * 100).toFixed()]) }}
                      el-tag(size="small")
                        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.name }}
                      template(v-if="abnormalState.effectlist.length" v-for="id of [abnormalState.effectlist.length > 1 ? abnormalState.effectlist[abnormalState.effectlist.length - 1] : abnormalState.effectlist[0]]")
                        el-tag(v-if="dataManager.abnormalStateEffectById[id]" size="small" effect="plain")
                          router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('数値') }} {{ dataManager.abnormalStateEffectById[id].value }}
                      el-tag(size="small" effect="plain")
                        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.turn }} {{ $t('ターン') }}
                br
              div(v-if="props.row.combSkillList.length || props.row.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE")
                h4 {{ $t('含まれるスキル') }}
                template(v-for="skill of props.row.combSkillList")
                  p
                    router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
                  p(v-if="skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="skill of [dataManager.skillById[skill.id]].filter((p) => p)")
                    router-link(:to="{ name: 'Skills', query: { id: skill.effectValue } }" target="_blank") {{ skill.name }} / {{ skill.effectValue2 }}{{ $t('ターン') }}
                p(v-if="props.row.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="skill of [dataManager.skillById[props.row.id]].filter((p) => p)")
                  router-link(:to="{ name: 'Skills', query: { id: skill.effectValue } }" target="_blank") {{ skill.name }} / {{ skill.effectValue2 }}{{ $t('ターン') }}
                br
              div(v-if="dataManager.itemsBySkill[props.row.id]")
                h3 {{ $t('アイテム') }}
                router-link(v-for="item in dataManager.itemsBySkill[props.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }" target="_blank")
                  el-tooltip(:content="item.NAME" placement="top")
                    img.icon-small(:src="item.icon" :alt="item.NAME")
              div(v-if="dataManager.charactersBySkill[props.row.id]")
                h3 {{ $t('人物') }}
                router-link(v-for="character in dataManager.charactersBySkill[props.row.id]" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }" target="_blank")
                  el-tooltip(:content="character.NAME" placement="top")
                    img.icon-small(:src="character.icon" :alt="character.NAME")
              div(v-if="dataManager.enemiesBySkill[props.row.id]")
                h3 {{ $t('敵') }}
                router-link(v-for="enemy in dataManager.enemiesBySkill[props.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }" target="_blank")
                  el-tooltip(:content="enemy.strName" placement="top")
                    img.icon-small(:src="enemy.icon" :alt="enemy.strName")

      el-table-column(v-if="showColumnId" prop="id" label="ID" width="100%" sortable="custom")
      el-table-column(v-if="showColumnName" prop="name" :label="$t('名前')")
      el-table-column(v-if="showColumnTrigger" prop="trigger" :label="$t('トリガー')" sortable="custom")
        template(slot-scope="scope") {{ EBattleEffectTrigger[scope.row.trigger] || scope.row.trigger }}
      el-table-column(v-if="showColumnEffect" prop="effect" :label="$t('エフェクト')" sortable="custom")
        template(slot-scope="scope") {{ EBattleEffectKind[scope.row.effect] || scope.row.effect }}
      el-table-column(v-if="showColumnEffectTarget" prop="effectTarget" :label="$t('エフェクトターゲット')" sortable="custom")
        template(slot-scope="scope") {{ EBattleEffectTarget[scope.row.effectTarget] || scope.row.effectTarget }}

    el-pagination(@current-change="scrollTableTop" :page-size="take" :current-page.sync="page" :total="filteredSkills.length" layout="prev, pager, next" background="")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LRU from 'lru-cache';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { List as SkillList } from '@/master/skill';
import { EBattleEffectKind, EBattleEffectTarget, EBattleEffectTrigger } from '@/logic/Enums';
import JsonViewDialog from '@/components/JsonViewDialog.vue';

abstract class VueWithMapFields extends VueBase {
  public showColumnId!: boolean;

  public showColumnName!: boolean;

  public showColumnTrigger!: boolean;

  public showColumnEffect!: boolean;

  public showColumnEffectTarget!: boolean;
}

// eslint-disable-next-line no-shadow
export enum SkillKind {
  none,
  normal,
  blazeArt,
  effect,
  addon,
}

@Component({
  components: {
    JsonViewDialog,
  },
  computed: {
    ...mapFields('skillsFilter', ['showColumnId', 'showColumnName', 'showColumnTrigger', 'showColumnEffect', 'showColumnEffectTarget']),
  },
})
export default class extends VueWithMapFields {
  public get EBattleEffectTrigger() {
    return EBattleEffectTrigger;
  }

  public get EBattleEffectKind() {
    return EBattleEffectKind;
  }

  public get EBattleEffectTarget() {
    return EBattleEffectTarget;
  }

  public get skillKindFilter() {
    return [
      {
        label: this.$t('アクティブスキル'),
        value: SkillKind.normal,
      },
      {
        label: this.$t('ブレイズアーツ'),
        value: SkillKind.blazeArt,
      },
      {
        label: this.$t('パッシブスキル'),
        value: SkillKind.effect,
      },
      {
        label: this.$t('強化効果'),
        value: SkillKind.addon,
      },
    ];
  }

  public get attributeFilter() {
    return Object.entries(this.dataManager.lookup.EBattleAttribute).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get elementFilter() {
    return Object.entries(this.dataManager.lookup.EBattleElementKind).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get targetTeamFilter() {
    return Object.entries(this.dataManager.lookup.targetTeam).map(([value, label]) => ({
      label: this.$t(label),
      value: +value,
    }));
  }

  public get targetScopeFilter() {
    return Object.entries(this.dataManager.lookup.eFieldItemRange).map(([value, label]) => ({
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

  public get effectFilter() {
    return Object.values(EBattleEffectKind)
      .filter((p) => typeof p === 'string')
      .map((label) => ({
        label,
        value: EBattleEffectKind[label],
      }));
  }

  public get effectTargetFilter() {
    return Object.values(EBattleEffectTarget)
      .filter((p) => typeof p === 'string')
      .map((label) => ({
        label,
        value: EBattleEffectTarget[label],
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
        label: this.$t('人物'),
        value: 5,
      },
      {
        label: this.$t('敵'),
        value: 4,
      },
    ];
  }

  public filter = {
    id: '',
    skillKind: null,
    attribute: '',
    element: '',
    targetTeam: '',
    targetScope: '',
    trigger: null,
    effect: null,
    effectTarget: null,
    name: '',
    detail: '',
    abnormalState: null,
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
        return this.dataManager.skills;
      case SkillKind.blazeArt:
        return this.dataManager.skillBlazeArts;
      case SkillKind.effect:
        return this.dataManager.skillEffects;
      case SkillKind.addon:
        return this.dataManager.skillAddons;
      case SkillKind.none:
      default:
        return this.dataManager.skill.m_vList;
    }
  }

  public get filteredSkills() {
    const key = JSON.stringify(this.filter);
    if (!this.filterCache.has(key)) {
      let skills = this.skills.filter((p) => (
        (!this.filter.id || p.id === +this.filter.id)
        && (this.filter.attribute === '' || p.attackSkill.attribute === +this.filter.attribute)
        && (this.filter.element === '' || p.attackSkill.element === +this.filter.element)
        && (this.filter.targetTeam === '' || p.targetTeam === +this.filter.targetTeam)
        && (this.filter.targetScope === '' || p.targetScope === +this.filter.targetScope)
        && ([null, '', -1].includes(this.filter.trigger) || p.trigger === this.filter.trigger)
        && ([null, '', -1].includes(this.filter.effect) || p.effect === this.filter.effect)
        && ([null, '', -1].includes(this.filter.effectTarget) || p.effectTarget === this.filter.effectTarget)
        && (!this.filter.name || p.name.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))
        && (!this.filter.detail || p.detail.toLocaleLowerCase().includes(this.filter.detail.toLocaleLowerCase()))
        && (!this.filter.abnormalState || p.stateOwn.some(({ id }) => id === this.filter.abnormalState) || p.state.some(({ id }) => id === this.filter.abnormalState))
        && (!this.filter.has.includes(1) || p.stateOwn.length)
        && (!this.filter.has.includes(2) || p.state.length)
        && (!this.filter.has.includes(3) || this.dataManager.itemsBySkill[p.id])
        && (!this.filter.has.includes(4) || this.dataManager.enemiesBySkill[p.id])
        && (!this.filter.has.includes(5) || this.dataManager.charactersBySkill[p.id])
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
      this.$set(this.filter, 'id', this.$route.query.id.toString() || '');
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
