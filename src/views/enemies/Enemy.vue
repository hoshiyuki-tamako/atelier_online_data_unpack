<template lang="pug">
div.container
  JsonViewDialog(ref="jsonViewDialog")

  el-dialog(title="" :visible.sync="fbxDialogVisible" width="90%")
    model-fbx.item-fbx-container(v-loading="fbxLoading" @on-load="fbxLoading = false" :src="enemy.model" :position="fbxPosition" :rotation="fbxRotation" backgroundColor="rgb(169,169,169)")

  div.item-container
    div.item-container-left
      h3.item-name {{ enemy.strName }}
      div.item-has-3d(v-if="enemy.model" @click="openFbxViwer")
        img.icon-full(:src="enemy.icon" :alt="enemy.strName")
      div(v-else)
        img.icon-full(:src="enemy.icon" :alt="enemy.strName")
      p {{ enemy.strDesc }}
      p(v-if="enemy.model")
          el-link(@click="openFbxViwer" :underline="false") 3D
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
      br
      el-link(@click="$refs.jsonViewDialog.open(enemy)" :underline="false") {{ $t('Rawデータ') }}

    div.item-container-right
      el-tabs(v-model="activeTab" type="card")
        el-tab-pane(:label="$t('メーン')" name="main")
          div
            el-form(label-position="left" label-width="110px")
              el-form-item(:label="$t('レベル')")
                el-input-number(v-model="enemyModifier.level" size="mini" :min="1" :step="1" step-strictly)
            table
              tr(v-for="state of enemy.getStates(enemyModifier.level)")
                th {{ $t(state.label) }}
                td {{ state.value }}
              tr(v-for="element of enemy.getElements(enemyModifier.level).filter((p) => p.value)")
                th {{ $t(element.label) }}
                td {{ element.value }}

          div(v-if="enemy.appearAreas.length")
            el-divider {{ $t('出現エリア') }}
            p(v-for="area of enemy.appearAreas")
              router-link(:to="{ name: 'Areas', query: { df: area.iAreaId } }") {{ dataManager.fieldNameById[area.iAreaNameId].strAreaName }}

          div(v-if="dataManager.questsByEnemy[enemy.DF]")
            el-divider {{ $t('クエスト') }}
            p(v-for="quest of dataManager.questsByEnemy[enemy.DF]")
              router-link(:to="{ name: 'InfoQuest', query: { df: quest.DF } }") {{ quest.NAME }}
        el-tab-pane(:label="$t('スキル')" name="skill" v-if="enemy.sParam.SKILL.length")
          SkillTextInfo(:skills="enemy.skills" :showTitle="false")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { ModelFbx } from 'vue-3d-model';
import VueBase from '@/components/VueBase';
import { MVList as EnemyMVList } from '@/master/enemy';
import { EnemyModifier } from '@/logic/modifiers/EnemyModifier';
import SkillTextInfo from '@/components/SkillTextInfo.vue';
import JsonViewDialog from '@/components/JsonViewDialog.vue';

@Component({
  components: {
    'model-fbx': ModelFbx,
    SkillTextInfo,
    JsonViewDialog,
  },
})
export default class extends VueBase {
  public activeTab = 'main';

  // model
  public fbxDialogVisible = false;

  public fbxLoading: boolean | null = null;

  public get fbxRotation() {
    if (this.enemy.sParam.MDL.startsWith('044')) {
      return { x: 0, y: 0, z: 0 };
    }

    return { x: 0, y: Math.PI, z: Math.PI };
  }

  public get fbxPosition() {
    return { x: 0, y: 0, z: 0 };
  }

  public openFbxViwer() {
    if (this.fbxLoading === null) {
      this.fbxLoading = true;
    }
    this.fbxDialogVisible = true;
  }

  // enemy
  public enemy: EnemyMVList | null = null;

  public enemyModifier = new EnemyModifier();

  public beforeMount() {
    this.enemyModifier.level = +this.$route.query.level || EnemyMVList.defaultLevel;

    this.enemy = this.dataManager.enemyById[this.$route.query.df as string];
    if (!this.enemy) {
      this.$router.push({ name: 'Enemies' });
    }
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
</style>
