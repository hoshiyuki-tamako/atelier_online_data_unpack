<template lang="pug">
div.container
  div.filter
    el-select(v-model="filter.skillKind" clearable filterable)
      el-option(v-for="item of skillKindFilter" :key="item.value" :label="item.label" :value="item.value")
  div.content
    el-table(:data="filteredSkills")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" sortable)
      el-table-column(prop="detail" :label="$t('詳細')" sortable)
      el-table-column(prop="effectValue" :label="$t('数値')" sortable)
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
      el-table-column(prop="attackSkill.element" :label="$t('属性')" sortable)
        template(slot-scope="scope") {{ $t(dataManager.lookup.EBattleElementKind[scope.row.attackSkill.element]) }}
      el-table-column(prop="targetTeam" :label="$t('對象')" sortable)
        template(slot-scope="scope") {{ $t(dataManager.lookup.targetTeam[scope.row.targetTeam]) }}{{ $t(dataManager.lookup.eFieldItemRange[scope.row.targetScope]) }}
      el-table-column(prop="stateOwn.length" :label="$t('追加状態 (自)')" sortable)
        template(slot-scope="scope")
          p(v-for="[state, abnormalState] of scope.row.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }}
      el-table-column(prop="state.length" :label="$t('追加状態')" sortable)
        template(slot-scope="scope")
          p(v-for="[state, abnormalState] of scope.row.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }}
      el-table-column(prop="iconPath" :label="$t('画像')" width="100%" sortable)
        template(slot-scope="scope")
          img.icon-small(v-if="scope.row.iconPath" :src="scope.row.icon" :alt="scope.row.name")
      el-table-column(:label="`${$t('アイテム')}/${$t('人物')}/${$t('敵')}`")
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
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';

export enum SkillKind {
  none,
  normal,
  blazeArt,
}

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
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
    ];
  }

  public filter = {
    skillKind: SkillKind.normal,
  };

  public get filteredSkills() {
    switch (this.filter.skillKind) {
      case SkillKind.blazeArt:
        return dataManager.skillBlazeArts;
      case SkillKind.normal:
      case SkillKind.none:
      default:
        return dataManager.skills;
    }
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
