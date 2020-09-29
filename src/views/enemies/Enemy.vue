<template lang="pug">
div.container
  el-dialog(title="" :visible.sync="fbxDialogVisible" width="90%")
    model-fbx.item-fbx-container(:src="enemy.model" :position="fbxPosition" :rotation="fbxRotation" backgroundColor="rgb(169,169,169)")

  div.item-container
    div.item-container-left
      h3.item-name {{ enemy.strName }}
      div.item-has-3d(v-if="enemy.model" @click="fbxDialogVisible = true")
        img.icon-full(:src="enemy.icon" :alt="enemy.strName")
      div(v-else)
        img.icon-full(:src="enemy.icon" :alt="enemy.strName")
      p {{ enemy.strDesc }}
      p(v-if="enemy.model")
          el-link(@click="fbxDialogVisible = true" :underline="false") 3D
      br
      p DF: {{ enemy.DF }}
      p {{ $t('短い名前') }}: {{ enemy.AnotherName }}
      p {{ $t('種族') }}: {{ dataManager.enemyKindListById[enemy.eKind].strName }}
      p {{ $t('攻撃目標') }}: {{ $t(dataManager.lookup.EAttackTargetKind[enemy.eAttackTargetKind]) }}
      p {{ $t('ボス') }}: {{ enemy.bBoss ? "✓" : "x" }}
      p {{ $t('オンラインオーンリー') }}: {{ enemy.bOnlyOnline ? "✓" : "x" }}
      p {{ $t('大きさ') }}: {{ $t(dataManager.lookup.eEnemySize[enemy.eSize]) }}
      p {{ $t('視角') }}: {{ enemy.viewAngleDegree }}°
      p {{ $t('移動速度') }}: {{ enemy.fMoveSpeed }}
      p {{ $t('打撃範囲') }}: {{ enemy.fHitRadius }}

    div.item-container-right
      div
        el-form(label-position="left" label-width="110px")
          el-form-item(label="LV")
            el-input-number(v-model="enemyModifier.level" size="mini" :min="1" :step="1" step-strictly)
        table
          tr(v-for="state of enemy.getStates(enemyModifier.level)")
            th {{ $t(state.label) }}
            td {{ state.value }}
          tr(v-for="element of enemy.getElements(enemyModifier.level).filter((p) => p.value)")
            th {{ $t(element.label) }}
            td {{ element.value }}

      div(v-if="appareAreas.length")
        el-divider {{ $t('出現エリア') }}
        p(v-for="area of appareAreas")
          router-link(:to="{ name: 'Areas', query: { df: area.iAreaId } }") {{ dataManager.fieldNameById[area.iAreaNameId].strAreaName }}

      div(v-if="enemy.sParam.SKILL.length")
        el-divider {{ $t('スキル') }}/{{ $t('効果') }}
        div(v-for="(skill, i) of enemy.sParam.SKILL.map((p) => dataManager.skillById[p.DF]).filter((p) => p)")
          table.skill-table
            tr
              th {{ $t('名前') }}
              td {{ skill.name }}
            tr
              th {{ $t('詳細') }}
              td {{ skill.detail }}
            tr
              th {{ $t('数値') }}
              td {{ skill.effectValue }}, {{ skill.effectValue2 }}
            template(v-if="skill.type === 1")
              tr
                th {{ $t('攻撃タイプ') }}
                td {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
              tr
                th {{ $t('属性') }}
                td {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }}
              tr
                th {{ $t('對象') }}
                td {{ $t(dataManager.lookup.targetTeam[skill.attackSkill.targetTeam]) }}{{ $t(dataManager.lookup.eFieldItemRange[skill.attackSkill.targetScope]) }}
              tr(v-if="skill.attackSkill.stateOwn.length")
                th {{ $t('追加状態 (自)') }}
                td
                  p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}
              tr(v-if="skill.attackSkill.state.length")
                th {{ $t('追加状態') }}
                td
                  p(v-for="[state, abnormalState] of skill.attackSkill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}
          p(v-if="enemy.sParam.SKILL.length !== (i + 1)") {{ '>' }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { MVList as EnemyMVList } from '@/master/enemy';
import { EnemyModifier } from '@/logic/modifiers/EnemyModifier';
import { ModelFbx } from 'vue-3d-model';

@Component({
  components: {
    'model-fbx': ModelFbx,
  },
})
export default class extends VueBase {
  // model
  public fbxDialogVisible = false;

  public get fbxRotation() {
    return { x: 0, y: 0, z: 0 };
  }

  public get fbxPosition() {
    return { x: 0, y: 0, z: 0 };
  }

  // enemy
  public enemy: EnemyMVList | null = null;

  public enemyModifier = new EnemyModifier();

  public beforeMount() {
    this.enemyModifier.level = +this.$route.query.level || EnemyMVList.defaultLevel;

    this.enemy = dataManager.enemyById[this.$route.query.df as string];
    if (!this.enemy) {
      this.$router.push({ name: 'Enemies' });
    }
  }

  public get appareAreas() {
    const spawnerDataAreaIds = [...dataManager.spawnerDataManager.spawnLists.entries()].map(([csvFileName, spawnerDatas]) => ({
      csvFileName,
      spawners: spawnerDatas.filter((i) => i.spawnerKind === 3 && i.DF === this.enemy.DF),
    }))
      .filter((p) => p.spawners.length)
      .map((p) => +p.csvFileName.split('_')[1]);

    const areaIds = dataManager.areaDetail.List
      .filter((i) => i.iEnemyIDList.includes(this.enemy.DF))
      .map((p) => p.iAreaID);

    return [...new Set(spawnerDataAreaIds.concat(areaIds))]
      .sort((a, b) => a - b)
      .map((id) => dataManager.areaInfoById[id])
      .filter((p) => p);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

th
  white-space: nowrap
th, td
  text-align: left
  padding: 4px

.skill-table
  th
    width: 110px
</style>
