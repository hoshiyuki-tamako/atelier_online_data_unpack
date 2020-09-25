<template lang="pug">
div.container
  div.content
    el-table(:data="dataManager.zone.List")
      el-table-column(prop="id" label="ID" width="100%" sortable)
      el-table-column(prop="name" :label="$t('名前')" sortable)
      el-table-column(prop="effectlist.length" :label="$t('効果')" sortable)
        template(slot-scope="scope")
          p(v-for="id of scope.row.effectlist") {{ dataManager.zoneEffectById[id].name }}, {{ dataManager.zoneEffectById[id].value }}
      el-table-column(:label="`${$t('アイテム')} / ${$t('敵')}`")
        template(slot-scope="scope")
          template(v-for="item of getItemsByZone(scope.row)")
            router-link.example(:to="{ name: 'ItemsItem', query: { df: item.DF } }")
              img(:src="item.icon" :alt="item.NAME")
          br
          template(v-for="enemy of getEnemiesByZone(scope.row)")
            router-link.example(:to="{ name: 'EnemiesEnemy', query: { df: enemy.DF } }")
              img(:src="enemy.icon" :alt="enemy.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { List as ZoneList } from '@/master/zone';
import { EBattleEffectKind } from '@/logic/Enums';
import Enumerable from 'linq';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }

  public getItemsByZone(zone: ZoneList) {
    return Enumerable.from(dataManager.itemsOrderByCategory)
      .where((item) => (
        item.SPC
          .map((p) => p.SKILL)
          .flat()
          .map((p) => dataManager.skillById[p.DF])
          .filter((p) => p)
          .some((p) => p.effect === EBattleEffectKind.eZONE_CHANGE && p.effectValue === zone.id)
      ));
  }

  public getEnemiesByZone(zone: ZoneList) {
    return Enumerable.from(dataManager.enemiesOrderByCategory)
      .where((enemy) => (
        enemy.sParam.SKILL
          .map((p) => dataManager.skillById[p.DF])
          .filter((p) => p)
          .some((p) => p.effect === EBattleEffectKind.eZONE_CHANGE && p.effectValue === zone.id)
      ));
  }
}
</script>

<style lang="sass" scoped>
.example
  img
    width: 60px
</style>
