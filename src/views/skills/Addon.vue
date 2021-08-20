<template lang="pug">
div.container
  JsonViewDialog(ref="jsonViewDialog")

  div.filters
    div.filter
      span {{ $t('レア度') }}
      el-select(v-model="rarity" placeholder="" clearable filterable)
        el-option(v-for="item in rarityFilters" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      el-switch(v-model="equipmentUseful" :active-text="$t('装備有効')")
    div.filter
      el-checkbox(v-model="hunt" :label="$t('トレジャー')" border)
  div.filters
    div.filter
      span {{ $t('名前') }}/ID
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('詳細') }}
      el-input(v-model="detail" clearable)
  div.content
    el-table(:data="filteredAddon")
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
                p {{ $t('攻撃タイプ') }}: {{ $t(dataManager.lookup.EBattleAttribute[props.row.attackSkill.attribute]) }}
                p {{ $t('属性') }}: {{ $t(dataManager.lookup.EBattleElementKind[props.row.attackSkill.element]) }}
                p {{ $t('對象') }}: {{ $t(dataManager.lookup.targetTeam[props.row.targetTeam]) }} {{ $t(dataManager.lookup.eFieldItemRange[props.row.targetScope]) }}
                p(v-if="props.row.spAdd") {{ $t('SP回復率') }}: {{ props.row.spAdd }} {{ $t('倍') }}
                p(v-if="props.row.trigger") {{ $t('トリガー') }}: {{ EBattleEffectTrigger[props.row.trigger] || props.row.trigger }}
                p(v-if="props.row.effect") {{ $t('エフェクト') }} {{ EBattleEffectKind[props.row.effect] || props.row.effect }}
                p(v-if="props.row.effectTarget") {{ $t('エフェクトターゲット') }} {{ EBattleEffectTarget[props.row.effectTarget] || props.row.effectTarget }}
                p(v-if="props.row.coolTime") {{ $t('クールダウンタイム') }}: {{ props.row.coolTime }}{{ $t('ターン') }}
                div(v-if="props.row.combSkillList.length || props.row.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE")
                  br
                  h4 {{ $t('含まれるスキル') }}
                  template(v-for="skill of props.row.combSkillList")
                    p
                      router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
                    p(v-if="skill.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="skill of [dataManager.skillById[skill.id]].filter((p) => p)")
                      router-link(:to="{ name: 'Skills', query: { id: skill.effectValue } }" target="_blank") {{ skill.name }} / {{ skill.effectValue2 }}{{ $t('ターン') }}
                  p(v-if="props.row.effect === EBattleEffectKind.eSTATE_GRANT_PASSIVE" v-for="skill of [dataManager.skillById[props.row.id]].filter((p) => p)")
                    router-link(:to="{ name: 'Skills', query: { id: skill.effectValue } }" target="_blank") {{ skill.name }} / {{ skill.effectValue2 }}{{ $t('ターン') }}
                div(v-if="props.row.stateOwn.length")
                  br
                  h4 {{ $t('追加状態 (自)') }}
                  template(v-for="[state, abnormalState] of props.row.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])")
                    el-tooltip(:content="abnormalState.effectlist.map((id) => dataManager.abnormalStateEffectById[id]).filter((p) => p).map((p) => `${p.name} ${p.value}`).join(' / ')" placement="top")
                      p {{ $t('確率', [(state.rate * 100).toFixed()]) }} {{ abnormalState.name }}
                div(v-if="props.row.state.length")
                  br
                  h4 {{ $t('追加状態') }}
                  template(v-for="[state, abnormalState] of props.row.state.map((p) => [p, dataManager.abnormalStateById[p.id]])")
                    el-tooltip(:content="abnormalState.effectlist.map((id) => dataManager.abnormalStateEffectById[id]).filter((p) => p).map((p) => `${p.name} ${p.value}`).join(' / ')" placement="top")
                      p {{ $t('確率', [(state.rate * 100).toFixed()]) }} {{ abnormalState.name }}

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
                div(v-if="dataManager.itemsBySkill[props.row.id]")
                  h3 {{ $t('アイテム') }}
                  router-link(v-for="item in dataManager.itemsBySkill[props.row.id]" :key="item.DF" :to="{ name: 'ItemsItem', query: { df: item.DF } }" target="_blank")
                    el-tooltip(:content="item.NAME" placement="top")
                      img.icon-small(:src="item.icon" :alt="item.NAME")
                div(v-if="dataManager.enemiesBySkill[props.row.id]")
                  h3 {{ $t('敵') }}
                  router-link(v-for="enemy in dataManager.enemiesBySkill[props.row.id]" :key="enemy.DF" :to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }" target="_blank")
                    el-tooltip(:content="enemy.strName" placement="top")
                      img.icon-small(:src="enemy.icon" :alt="enemy.strName")
                div(v-if="dataManager.charactersBySkill[props.row.id]")
                  h3 {{ $t('人物') }}
                  router-link(v-for="character in dataManager.charactersBySkill[props.row.id]" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }" target="_blank")
                    el-tooltip(:content="character.NAME" placement="top")
                      img.icon-small(:src="character.icon" :alt="character.NAME")

      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" :filters="typeFilters" :filter-method="typeFilderHandler" sortable)
      el-table-column(prop="detail" :label="$t('詳細')" sortable)
      el-table-column(prop="effectValue" :label="$t('数値')" sortable)
        template(slot-scope="scope") {{ scope.row.effectValue }}, {{ scope.row.effectValue2 }}
      el-table-column(prop="rarity" :label="$t('レア度')" sortable)
        template(slot-scope="scope") {{ '⭐'.repeat(scope.row.rarity) }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { List as SkillList } from '@/master/skill';
import { EBattleEffectKind, EBattleEffectTarget, EBattleEffectTrigger } from '@/logic/Enums';
import JsonViewDialog from '@/components/JsonViewDialog.vue';

abstract class VueWithMapFields extends VueBase {
  public rarity!: number | null;

  public equipmentUseful!: boolean;

  public hunt!: boolean;

  public name!: string;

  public detail!: string;
}

@Component({
  components: {
    JsonViewDialog,
  },
  computed: {
    ...mapFields('addonFilter', ['rarity', 'equipmentUseful', 'hunt', 'name', 'detail']),
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

  public get rarityFilters() {
    return this.dataManager.skillAddonsRarities.filter((value) => value).map((value) => ({
      label: '⭐'.repeat(value),
      value,
    }));
  }

  public get skills() {
    if (this.equipmentUseful) {
      return this.dataManager.skillAddonsEquipmentUseful;
    }

    return this.dataManager.skillAddons;
  }

  public get filteredAddon() {
    return this.skills.filter((p) => (
      (!this.hunt || this.dataManager.api.huntInfosBySkillId[p.id])
      && ([null, '', -1].includes(this.rarity) || p.rarity === this.rarity)
      && (!this.name || p.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()) || +this.name === p.id)
      && (!this.detail || p.detail.toLocaleLowerCase().includes(this.detail.toLocaleLowerCase()))
    ));
  }

  public get typeFilters() {
    return this.dataManager.skillAddonNames.map((value) => ({
      text: value,
      value,
    }));
  }

  public typeFilderHandler(value: string, row: SkillList) {
    return row.name.startsWith(value);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
