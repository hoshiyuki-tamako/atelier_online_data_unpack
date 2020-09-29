<template lang="pug">
div.container
  div.content
    div(v-for="adventBattle of dataManager.adventBattle.RankingList")
      el-divider ID {{ adventBattle.ID }}
      div.item-container(v-for="enemyList of adventBattle.EnemyList")
        div.item-container-left(v-for="enemy of [dataManager.enemyById[enemyList.DF]]")
          h3
            router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
              span.item-name {{ enemy.NAME }}
              img.icon-full(:src="enemy.icon" :alt="enemy.strName")

        div.item-container-right
          table
            tr
              th {{ $t("課題") }}
              th {{ $t("ポイント") }}
            tr(v-for="score of enemyList.ScoreList")
              td {{ score.name }}
              td {{ score.score }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
}
</script>

<style lang="sass" scoped>
th
  white-space: nowrap
td
  text-align: center
th, td
  padding: 4px
</style>
