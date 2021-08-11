<template lang="pug">
div.item-enhance-quality
  div.left
    div.experience-items
      div.experience-item(v-for="item of equipmentExpItems" @click="onClickAddItem(item)")
        el-tooltip(:content="`${item.SPC[0].SKILL[0].VAL} ${$t('経験値')}`" placement="top")
          img.icon-small(:src="item.icon" :alt="item.NAME")
    br
    br
    div.items
      div.item(v-for="(item, i) of items" @click="onClickRemoveItem(i)")
        el-tooltip(:content="`${item.SPC[0].SKILL[0].VAL} ${$t('経験値')}`" placement="top")
          img.icon-middle(:src="item.icon" :alt="item.NAME")
  div.right
    div
      img.icon-large(src="img/icon_item_s/Texture2D/icon_item_s_20010002.png" :alt="$t('アイテム')")
    div
      div.orginal-item__edit
        span {{ $t('レベル') }}
        el-input-number(v-model="level" size="mini" :min="1" :max="60" :step="1" step-strictly)
        span {{ $t('あと') }}
        el-input-number(v-model="untilExp" size="mini" :min="0" :max="maxExp" :step="1" step-strictly)
      br
    div.result
      table(v-for="r of [result]")
        tr
          th {{ $t('目標レベル') }}
          td {{ r.targetLevel }}
        tr
          th {{ $t('あと') }}
          td {{ r.untilNext }}
        tr
          th {{ $t('経験値') }}
          td {{ r.totalExperience }}
        tr
          th {{ $t('無駄になった経験値') }}
          td {{ r.overExp }}
      br
      p.total-item(v-for="{ item, count } of totalItems")
        img.icon-small(:src="item.icon" :alt="item.NAME")
        span x {{ count }} {{ $t('個') }} {{ item.SPC[0].SKILL[0].VAL }} {{ $t('経験値') }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { mapFields } from 'vuex-map-fields';
import Enumerable from 'linq';
import VueBase from '@/components/VueBase';
import { ECategory } from '@/logic/Enums';
import { MVList as ItemMVList } from '@/master/item';
import { EquipmentExperience } from '@/logic/EquipmentExperience';

abstract class VueWithMapFields extends VueBase {
  public level!: number;

  public untilExp!: number;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('equipmentLeveling', ['level', 'untilExp']),
  },
})
export default class extends VueWithMapFields {
  public get EquipmentExperience() {
    return EquipmentExperience;
  }

  //
  public get equipmentExpItems() {
    return this.dataManager.itemsByCategory[ECategory.eGROW_OTHER];
  }

  public get experienceItemDfs() {
    return this.$store.state.equipmentLeveling.experienceItemDfs as number[];
  }

  public set experienceItemDfs(experienceItemDfs: number[]) {
    this.$store.commit('equipmentLeveling/updateExperienceItemDfs', experienceItemDfs);
  }

  public get items() {
    return this.experienceItemDfs.map((p) => this.dataManager.itemById[p]);
  }

  public get maxExp() {
    return EquipmentExperience.formula.getValue(this.level + 1) - EquipmentExperience.formula.getValue(this.level);
  }

  public get itemExperiences() {
    return this.items.map((item) => item.SPC[0].SKILL[0].VAL).reduce((sum, a) => sum + a, 0);
  }

  public get result() {
    return new EquipmentExperience().compose(60, this.itemExperiences, this.level, this.untilExp);
  }

  public get totalItems() {
    return Enumerable.from(this.items)
      .groupBy((p) => p.DF)
      .select((p) => ({
        item: p.firstOrDefault(),
        count: p.count(),
      }))
      .orderBy((p) => p.item.DF)
      .toArray();
  }

  //
  public onClickAddItem(item: ItemMVList) {
    this.experienceItemDfs.push(item.DF);
  }

  public onClickRemoveItem(i: number) {
    this.experienceItemDfs.splice(i, 1);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.dark-mode
  .left
    background: inherit

.item-enhance-quality
  display: flex

.left, .right
  width: 100%
  padding: 36px
.left
  background: rgb(224, 195, 151)
  min-height: 100vh

.experience-items
  display: flex
  .experience-item
    padding: 12px
    cursor: pointer
    display: flex
    flex-direction: column
    align-items: center

.items
  display: flex
  flex-wrap: wrap
  .item
    padding: 12px
    cursor: pointer
.orginal-item__edit
  > span:nth-child(3)
    margin-left: 12px

.result th
  text-align: left
  white-space: nowrap
  padding: 4px

.result td
  padding: 4px

.total-item
  display: flex
  align-items: center
</style>
