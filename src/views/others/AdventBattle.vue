<template lang="pug">
div.container
  div.filters
    div.filter
      el-select(v-model="id" placeholder="ID" clearable filterable)
        el-option(v-for="item of idsFilter" :key="item" :label="item" :value="item")
    div.filter
      el-button(@click="onClickResetScores" type="danger" icon="el-icon-refresh-left" circle)
  div.content
    div(v-for="adventBattle of filteredRankList")
      el-divider {{ adventBattle.ID }}
      div.advent-battles
        div.item-container(v-for="(enemyList, enemyListIndex) of adventBattle.EnemyList")
          div.item-container-left(v-for="enemy of [dataManager.enemyById[enemyList.DF]]")
            h3.item-name {{ enemy.strName }}
            router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
              img.icon-full(:src="enemy.icon" :alt="enemy.strName")

          div.item-container-right
            table
              tr
                th {{ $t("課題") }}
                th {{ $t("ポイント") }}
                th {{ $t('ダメージ') }}
                th {{ $t('回数') }}
              tr(v-for="(score, i) of enemyList.ScoreList")
                td {{ score.name }}
                td {{ score.score }}
                td
                  el-input-number(v-if="!score.isDiapNum" v-model="scores[adventBattle.ID][enemyListIndex][i].damage" size="small" :min="1" :step="1" step-strictly)
                td
                  el-input-number(v-model="scores[adventBattle.ID][enemyListIndex][i].times" size="small" :min="0" :max="scoreMax(score.eKind)" :step="1" step-strictly)
              tr
                td
                td
                td
                td {{ score(adventBattle.ID, enemyListIndex) }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import Enumerable from 'linq';
import { clamp } from 'lodash';
import { EBattleScoreKind } from '@/logic/Enums';
import { mapFields } from 'vuex-map-fields';
import { ScoreValue, rankScores } from '@/store/others/adventBattleFilter';
import deepmerge from 'deepmerge';

abstract class VueWithMapFields extends VueBase {
  public id!: number | null;
  public scores!: { [id: string]: { [enemyIndex: string]: ScoreValue[] } };
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('adventBattleFilter', ['id', 'scores']),
  },
})
export default class extends VueWithMapFields {
  public get defaultScores() {
    return Enumerable.from(this.dataManager.adventBattle.RankingList)
      .toObject(
        (p) => p.ID,
        (p) => Enumerable.from(p.EnemyList)
          .select((enemyList, i) => ({ enemyList, i }))
          .toObject(
            ({ i }) => i,
            ({ enemyList }) => Array.from({ length: enemyList.ScoreList.length }, () => new ScoreValue()),
          ),
      ) as rankScores;
  }

  public get idsFilter() {
    return Object.keys(this.dataManager.adventBattleById).map(Number);
  }

  public get filteredRankList() {
    return this.dataManager.adventBattle.RankingList.filter((p) => [null, '', -1].includes(this.id) || p.ID === this.id);
  }

  public scoreMax(kind: number) {
    switch (kind) {
      case EBattleScoreKind.eBOSS_WIN:
      case EBattleScoreKind.eUSE_CHAR:
      case EBattleScoreKind.eSKILL_FINISH:
      case EBattleScoreKind.eITEM_FINISH:
      case EBattleScoreKind.eALL_CHAR_SURVIVAL:
      case EBattleScoreKind.eANNIHILATION:
      case EBattleScoreKind.eUNDER_MOVE:
        return 1;
      case EBattleScoreKind.eSLIP_FROZEN:
      case EBattleScoreKind.eSLIP_BURN:
      case EBattleScoreKind.eSLIP_POISON:
      case EBattleScoreKind.eOVER_MOVE:
      case EBattleScoreKind.eCHAR_DEAD:
      case EBattleScoreKind.eSKILL_CHAIN:
      case EBattleScoreKind.eUSE_ITEM:
      case EBattleScoreKind.eTOTAL_DAMAGE:
      case EBattleScoreKind.eBIG_DAMAGE:
      case EBattleScoreKind.eWEAK_ATACK:
      case EBattleScoreKind.eCRITICAL_ATACK:
      default:
        return Number.MAX_VALUE;
    }
  }

  public score(id: number, enemyIndex: number) {
    const currentScoreValues = this.scores[id][enemyIndex];
    const scoreList = this.dataManager.adventBattleById[id].EnemyList[enemyIndex].ScoreList;
    const scoreAdd = scoreList.reduce((sum, { score, isDiapNum }, i) => (isDiapNum && score >= 1 ? sum + (score * currentScoreValues[i].times) : sum), 0);
    const scoreDamageAdd = scoreList.reduce((sum, { score, isDiapNum }, i) => (!isDiapNum && score > 0 ? sum + (score * currentScoreValues[i].damage * currentScoreValues[i].times) : sum), scoreAdd);
    const scoreMultiply = scoreList.reduce((sum, { score, isDiapNum }, i) => (isDiapNum && currentScoreValues[i].times && (score === 0 || !Number.isInteger(score)) ? sum * (score / currentScoreValues[i].times) : sum), scoreDamageAdd);
    const scoreSubtract = scoreList.reduce((sum, { score, isDiapNum }, i) => (isDiapNum && score < 0 ? sum + (score * currentScoreValues[i].times) : sum), scoreMultiply);
    return Math.trunc(clamp(scoreSubtract, 0, Number.MAX_VALUE));
  }

  public onClickResetScores() {
    for (const [id, enemyIndexs] of Object.entries(this.scores)) {
      for (const [enemyIndex, scoreValues] of Object.entries(enemyIndexs)) {
        this.scores[id][enemyIndex] = Array.from({ length: scoreValues.length }, () => new ScoreValue());
      }
    }
  }

  public beforeMount() {
    this.scores = deepmerge(this.defaultScores, this.scores, {
      arrayMerge(target, source) {
        const destination = target.slice();
        for (const [i, s] of source.entries()) {
          destination[i] = s;
        }
        return destination;
      },
    });
  }
}
</script>

<style lang="sass" scoped>
th
  white-space: nowrap
td
  text-align: center
th, td
  padding: 4px

.advent-battles
  display: flex
  flex-direction: row
  flex-wrap: wrap
</style>
