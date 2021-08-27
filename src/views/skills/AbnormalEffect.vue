<template lang="pug">
div.container
  JsonViewDialog(ref="jsonViewDialog")

  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="name" clearable)
  div.filters
    div.filter
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}
  div.content
    el-table(ref="table" :data="filteredAbnormalState")
      el-table-column(type="expand")
        template(slot-scope="props")
          template(v-if="dataManager.skillsByAbnormalState[props.row.id] && dataManager.skillsByAbnormalState[props.row.id].length")
            template(v-if="dataManager.skillsByAbnormalState[props.row.id]")
              template(v-if="dataManager.abnormalStateItems[props.row.id] && dataManager.abnormalStateItems[props.row.id].length")
                h3 {{ $t('アイテム') }}
                div
                  router-link(v-for="item in dataManager.abnormalStateItems[props.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }" target="_blank")
                    el-tooltip(:content="item.NAME" placement="top")
                      img.icon-small(:src="item.icon" :alt="item.NAME" loading="lazy")
                br
              template(v-if="dataManager.abnormalStateCharacters[props.row.id] && dataManager.abnormalStateCharacters[props.row.id].length")
                div
                  h3 {{ $t('人物') }}
                  router-link(v-for="character in dataManager.abnormalStateCharacters[props.row.id]" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }" target="_blank")
                    el-tooltip(:content="character.NAME" placement="top")
                      img.icon-small(:src="character.icon" :alt="character.NAME" loading="lazy")
                br
              template(v-if="dataManager.abnormalStateEnemies[props.row.id] && dataManager.abnormalStateEnemies[props.row.id].length")
                div
                  h3 {{ $t('敵') }}
                  router-link(v-for="enemy in dataManager.abnormalStateEnemies[props.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }" target="_blank")
                    el-tooltip(:content="enemy.strName" placement="top")
                      img.icon-small(:src="enemy.icon" :alt="enemy.strName" loading="lazy")
                br
            h3 {{ $t('スキル') }}
            div.skills-container
              div.skill-container(v-for="skill of dataManager.skillsByAbnormalState[props.row.id]")
                router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
            br
          el-link(@click="$refs.jsonViewDialog.open(props.row)" :underline="false") {{ $t('Rawデータ') }}
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="telop" :label="$t('テクスト')" sortable)
      el-table-column(prop="turn" :label="$t('ターン')" width="100%" sortable)
      el-table-column(prop="effectlist.length" :label="$t('追加状態')" sortable)
        template(slot-scope="scope")
          div(v-for="(id, i) of scope.row.effectlist")
            p {{ dataManager.abnormalStateEffectById[id].name }}, {{ dataManager.abnormalStateEffectById[id].value }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import VueBase from '@/components/VueBase';
import { MVList as AbnormalStateMVList } from '@/master/abnormalState';
import JsonViewDialog from '@/components/JsonViewDialog.vue';

@Component({
  components: {
    JsonViewDialog,
  },
})
export default class extends VueBase {
  public name = '';

  public has = [] as number[];

  public get hasFilter() {
    return [
      {
        label: this.$t('スキル'),
        value: 1,
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

  public get typeFilters() {
    return this.dataManager.abnormalStateTypes.map((text) => ({
      text,
      value: text,
    }));
  }

  public get filteredAbnormalState() {
    return this.dataManager.abnormalState.m_vList.filter((p) => (
      (!this.name || p.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()) || +this.name === p.id)
      && (!this.has.includes(1) || this.dataManager.skillsByAbnormalState[p.id]?.length)
      && (!this.has.includes(3) || this.dataManager.abnormalStateItems[p.id]?.length)
      && (!this.has.includes(4) || this.dataManager.abnormalStateEnemies[p.id]?.length)
      && (!this.has.includes(5) || this.dataManager.abnormalStateCharacters[p.id]?.length)
    ));
  }

  public typeFilderHandler(value: string, row: AbnormalStateMVList) {
    return row.name.startsWith(value);
  }

  public beforeMount() {
    if (this.$route.query.id) {
      this.name = this.$route.query.id.toString();
    }
  }

  public mounted() {
    if (this.$route.query.id) {
        type ElementUiTable = {
          toggleRowExpansion: (row: AbnormalStateMVList, t: boolean) => void
        } & Vue;
        const row = this.filteredAbnormalState[0];
        if (row) {
          (this.$refs.table as ElementUiTable).toggleRowExpansion(row, true);
        }
    }
  }
}
</script>

<style lang="sass" scoped>
.skills-container
  display: flex
  flex-wrap: wrap
.skill-container
  padding: 12px
</style>
