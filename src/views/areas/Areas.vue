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
          div.item-container-left
            h3(v-if="fieldName") {{ fieldName.strAreaName }} {{ fieldName.strAreaNameSub.trim() ? `/ ${fieldName.strAreaNameSub}` : '' }}
            p iAreaID: {{ areaDetail.iAreaID }}
            p iLevel: {{areaDetail.iLevel }}
            br
            template(v-if="dataManager.areaModel[areaDetail.iAreaID]")
              div(v-for="[subArea, root] of Object.entries(dataManager.areaModel[areaDetail.iAreaID])")
                el-link(:href="`3d/mapArea.html?root=${root}&iAreaId=${areaDetail.iAreaID}`" target="_blank" :underline="false") 3D{{ $t('地図') }} {{ subArea }}

          div.item-container-right
            div(v-if="areaDetail.iItemIDList.length")
              el-divider {{ $t('アイテム') }}
              div.example-container
                div(v-for="item of areaDetail.iItemIDList.map((p) => dataManager.itemById[p])")
                  router-link(:to="{ name: 'ItemsItem', query: { df: item.DF }}")
                    img.icon-small(:src="item.icon" :alt="item.NAME")
            div(v-if="areaDetail.iEnemyIDList.length")
              el-divider {{ $t('敵') }}
              div.example-container
                div(v-for="enemy of areaDetail.iEnemyIDList.map((p) => dataManager.enemyById[p])")
                  router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF }}")
                    img.icon-small(:src="enemy.icon" :alt="enemy.NAME")
            div(v-if="getOtherEnemies(areaDetail.iAreaID).length")
              el-divider {{ $t('他の敵') }}
              div.example-container
                div(v-for="enemy of getOtherEnemies(areaDetail.iAreaID)")
                  router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF }}")
                    img.icon-small(:src="enemy.icon" :alt="enemy.NAME")
            div(v-if="dataManager.dungeonInfosByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('ダンジョン') }}
              div
                div(v-for="(dungeonInfo, i) of dataManager.dungeonInfosByAreaId[areaDetail.iAreaID]")
                  template(v-for="dungeonFieldName of [dataManager.fieldNameById[dungeonInfo.iAreaNameId]]")
                    p(v-if="dungeonFieldName") {{ fieldName.strAreaName }} {{ fieldName.strAreaNameSub.trim() ? `/ ${fieldName.strAreaNameSub}` : '' }}
                    p {{ $t('最大階層') }}: {{ dungeonInfo.iMaxFloor }}
                    p(v-for="returnFieldName of [dataManager.fieldNameById[dataManager.areaInfoById[dungeonInfo.iReturnArea].iAreaNameId]].filter((p) => p)") {{ $t('脱出区域') }}: {{ returnFieldName.strAreaName }}
                  p(v-if="dataManager.dungeonInfosByAreaId[areaDetail.iAreaID].length !== (i + 1)") &#x3E;

            div(v-if="getDungeonEnemies(areaDetail.iAreaID).length")
              el-divider {{ $t('ダンジョン') }}{{ $t('敵') }}
              div.example-container
                div(v-for="enemy of getDungeonEnemies(areaDetail.iAreaID)")
                  router-link(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF }}")
                    img.icon-small(:src="enemy.icon" :alt="enemy.NAME")

            div(v-if="dataManager.townInfosByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('町') }}
              div
                div(v-for="townInfo of dataManager.townInfosByAreaId[areaDetail.iAreaID]")
                  template(v-for="fieldName of [dataManager.fieldNameById[townInfo.iAreaNameId]].filter((p) => p)")
                    p {{ fieldName.strAreaName }} {{ fieldName.strAreaNameSub.trim() ? `/ ${fieldName.strAreaNameSub}` : '' }}
                    div.area-towns__images
                      p(v-for="townIcon of getTownIcons(townInfo.iTownId)")
                        img.area-towns__image(:src="townIcon" :alt="fieldName.strAreaName")

            div(v-if="dataManager.gateInfoByAreaId[areaDetail.iAreaID]")
              el-divider {{ $t('ゲート') }}
              div.area-gates
                div(v-for="gateInfo of dataManager.gateInfoByAreaId[areaDetail.iAreaID]")
                  p {{ gateInfo.strName }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public townIcons = Object.values(dataManager.files.img.map_town.Texture2D).filter((p: string) => !p.endsWith('_02.png')) as string[];

  public getOtherEnemies(id: number) {
    return [...dataManager.spawnerDataManager.spawnLists.keys()]
      .filter((p) => !p.includes('Dun') && p.includes(`SpawnList_${id.toString().padStart(2, '0')}_`))
      .map((p) => dataManager.spawnerDataManager.spawnLists.get(p))
      .flat()
      .filter((p) => p.spawnerKind === 3)
      .map((p) => dataManager.enemyById[p.DF])
      .filter((p) => p)
      .sort((a, b) => a.eKind - b.eKind);
  }

  public getDungeonEnemies(id: number) {
    return [...dataManager.spawnerDataManager.spawnLists.keys()]
      .filter((p) => p.includes('Dun') && p.includes(`SpawnList_${id}`))
      .map((p) => dataManager.spawnerDataManager.spawnLists.get(p))
      .flat()
      .filter((p) => p.spawnerKind === 3)
      .map((p) => dataManager.enemyById[p.DF])
      .filter((p) => p)
      .sort((a, b) => a.eKind - b.eKind);
  }

  public getTownIcons(iTownId: number) {
    return this.townIcons
      .filter((p) => p.startsWith(`Map_Town_${iTownId.toString().padStart(2, '0')}`))
      .map((p) => `img/map_town/Texture2D/${p}`);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

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
</style>
