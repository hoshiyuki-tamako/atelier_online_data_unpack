<template lang="pug">
div.container
  div.area-nav
    h2 {{ $t('区域') }}
    div.area-navs
      div.area-nav(v-for="areaDetail of dataManager.areaDetail.List")
        template(v-for="areaInfo of [dataManager.areaInfoById[areaDetail.iAreaID]]")
          template(v-for="fieldName of [dataManager.fieldNameById[areaInfo.iAreaNameId]]")
           el-link(v-scroll-to="{ el: `#DF-${areaDetail.iAreaID}`, duration: -1 }" type="primary" :underline="false") {{ fieldName.strAreaName }} {{ fieldName.strAreaNameSub.trim() ? `/ ${fieldName.strAreaNameSub}` : '' }}
  el-divider
  div
    div.item-container.area-container(v-for="areaDetail of dataManager.areaDetail.List" :id="`DF-${areaDetail.iAreaID}`")
      template(v-for="areaInfo of [dataManager.areaInfoById[areaDetail.iAreaID]]")
        template(v-for="fieldName of [dataManager.fieldNameById[areaInfo.iAreaNameId]]")
          div.item-container-left.areas-item-container-left
            img.icon-full(:src="areaDetail.icon" :alt="areaDetail.iAreaID")
            h3(v-if="fieldName") {{ fieldName.strAreaName }} {{ fieldName.strAreaNameSub.trim() ? `/ ${fieldName.strAreaNameSub}` : '' }}
            p iAreaID: {{ areaDetail.iAreaID }}
            p iLevel: {{ areaDetail.iLevel }}
            p(v-if="areaInfo.iHardMode") {{ $t('ハードモード') }}: {{ tickCross(true) }}
            template(v-if="dataManager.areaModelsById[areaDetail.iAreaID]")
              br
              div(v-for="{ root, iLevel } of dataManager.areaModelsById[areaDetail.iAreaID]")
                router-link(:to="{ name: 'AreasArea', query: { iAreaID: areaDetail.iAreaID, root } }" v-slot="{ href, navigate }" custom)
                  el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ $t('地図') }} {{ iLevel }}

            template(v-if="dataManager.areaDungeonsById[areaDetail.iAreaID]")
              br
              div(v-for="{ root, iLevel } of dataManager.areaDungeonsById[areaDetail.iAreaID]")
                router-link(:to="{ name: 'AreasArea', query: { iAreaID: areaDetail.iAreaID, root } }" v-slot="{ href, navigate }" custom)
                  el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ $t('ダンジョン') }} {{ iLevel }}
            template(v-if="dataManager.areaDungeonBattleAreas[areaDetail.iAreaID]")
              br
              div(v-for="{ folder, iLevel } of dataManager.areaBattleAreas[areaDetail.iAreaID]")
                router-link(:to="{ name: 'AreasArea', query: { iAreaID: areaDetail.iAreaID, battleArea: folder } }" v-slot="{ href, navigate }" custom)
                  el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ $t('バトルエリア') }} {{ iLevel }}
            template(v-if="dataManager.areaDungeonBattleAreas[areaDetail.iAreaID]")
              br
              div(v-for="{ folder, iLevel } of dataManager.areaDungeonBattleAreas[areaDetail.iAreaID]")
                router-link(:to="{ name: 'AreasArea', query: { iAreaID: areaDetail.iAreaID, battleArea: folder } }" v-slot="{ href, navigate }" custom)
                  el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ $t('バトルエリア') }}{{ $t('ダンジョン') }} {{ iLevel }}

          div.item-container-right
            div(v-if="areaDetail.iItemIDList.length")
              el-divider {{ $t('アイテム') }}
              div.example-container
                div(v-for="item of areaDetail.iItemIDList.map((p) => dataManager.itemById[p])")
                  router-link(:to="{ name: 'ItemsItem', query: { df: item.DF }}")
                    el-tooltip(:content="item.NAME" placement="top")
                      img.icon-small(:src="item.icon" :alt="item.NAME")
            div(v-if="areaDetail.iEnemyIDList.length")
              el-divider {{ $t('敵') }}
              div.example-container
                div(v-for="enemy of areaDetail.iEnemyIDList.map((p) => dataManager.enemyById[p])")
                  router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF }}")
                    el-tooltip(:content="enemy.strName" placement="top")
                      img.icon-small(:src="enemy.icon" :alt="enemy.strName")
            div(v-if="areaDetail.otherEnemies.length")
              el-divider {{ $t('他の敵') }}
              div(v-for="{ level, enemies } of areaDetail.otherEnemies")
                el-divider {{ $t('地図') }} {{ level }}
                div.example-container
                  div(v-for="enemy of enemies")
                    router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF }}")
                      el-tooltip(:content="enemy.strName" placement="top")
                        img.icon-small(:src="enemy.icon" :alt="enemy.NAME")
            div(v-if="dataManager.dungeonInfosByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('ダンジョン') }}
              div
                div(v-for="(dungeonInfo, i) of dataManager.dungeonInfosByAreaId[areaDetail.iAreaID]")
                  template(v-for="dungeonFieldName of [dataManager.fieldNameById[dungeonInfo.iAreaNameId]]")
                    p(v-if="dungeonFieldName") {{ dungeonFieldName.strAreaName }} {{ dungeonFieldName.strAreaNameSub.trim() ? `/ ${dungeonFieldName.strAreaNameSub}` : '' }}
                    p {{ $t('最大階層') }}: {{ dungeonInfo.iMaxFloor }}
                    p(v-for="returnFieldName of [dataManager.fieldNameById[dataManager.areaInfoById[dungeonInfo.iReturnArea].iAreaNameId]].filter((p) => p)") {{ $t('脱出区域') }}: {{ returnFieldName.strAreaName }}
                  p(v-if="dataManager.dungeonInfosByAreaId[areaDetail.iAreaID].length !== (i + 1)") &#x3E;

            div(v-if="areaDetail.dungeonEnemies.length")
              el-divider {{ $t('ダンジョン') }}{{ $t('敵') }}
              div(v-for="{ level, enemies } of areaDetail.dungeonEnemies")
                el-divider {{ $t('ダンジョン') }} {{ level }}
                div.example-container
                  div(v-for="enemy of enemies")
                    router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF }}")
                      el-tooltip(:content="enemy.strName" placement="top")
                        img.icon-small(:src="enemy.icon" :alt="enemy.NAME")

            div(v-if="dataManager.gateInfoByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('ゲート') }}
              div.area-gates
                div(v-for="gateInfo of dataManager.gateInfoByAreaId[areaDetail.iAreaID]")
                  p
                    span {{ gateInfo.strName }}
                    span(v-if="gateInfo.bDungeon") ({{ $t('ダンジョンある') }})
            div(v-if="areaDetail.kanbans")
              el-divider {{ $t('看板') }}
              div(v-for="(spawnerData, i) of areaDetail.kanbans")
                pre {{ spawnerData.text }}
                template(v-if="areaDetail.kanbans.length !== (i + 1)")
                  br
                  br
            div(v-if="dataManager.townInfosByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('町') }}
              div
                div(v-for="townInfo of dataManager.townInfosByAreaId[areaDetail.iAreaID]")
                  template(v-for="fieldName of [dataManager.fieldNameById[townInfo.iAreaNameId]].filter((p) => p)")
                    p {{ fieldName.strAreaName }} {{ fieldName.strAreaNameSub.trim() ? `/ ${fieldName.strAreaNameSub}` : '' }}
                    div.area-towns__images
                      p(v-for="townIcon of townInfo.townIcons")
                        img.area-towns__image(:src="townIcon" :alt="fieldName.strAreaName")

            div(v-if="dataManager.fieldTitlesByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('画像') }}
              div(v-for="fieldTitle of dataManager.fieldTitlesByAreaId[areaDetail.iAreaID]")
                img.area-field-title__img(:src="`img/field_title/Texture2D/${fieldTitle}`" :alt="fieldTitle")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public async mounted() {
    if (this.$route.query.df) {
      await Promise.all(
        Array.from(document.images)
          .filter((img) => !img.complete)
          .map((img) => new Promise((resolve) => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
          })),
      );
      this.$scrollTo(`#DF-${this.$route.query.df}`, -1);
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.areas-item-container-left
  min-width: 240px
  max-width: 240px

.area-container:not(:last-child)
  margin-bottom: 200px
.area-navs
  display: flex
  flex-wrap: wrap
.area-nav
  margin: 12px

.area__image
  width: 80%

.example-container
  display: flex
  flex-wrap: wrap
  img
    width: 60px

.area-towns__images
  display: flex
  flex-wrap: wrap
.area-towns__image
  width: 240px

.area-field-title__img
  max-width: 100vw
</style>
