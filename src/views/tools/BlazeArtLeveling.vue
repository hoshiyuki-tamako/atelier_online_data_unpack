<template lang="pug">
div.item-enhance-quality
  div.left
    div.experience-items
      div.experience-item(@click="onClickRemoveAllItems")
        img.icon-small(src="img/icon_item_s/Texture2D/icon_item_s_10790001.png" :alt="$t('削除する')")
      div.experience-item(v-for="item of blazeArtExpItems" @click="onClickAddItem(item)")
        el-tooltip(:content="`${item.SPC[0].SKILL[0].VAL} ${$t('経験値')}`" placement="top")
          img.icon-small(:src="item.icon" :alt="item.NAME")
    br
    br
    div.items
      div.item(v-for="(item, i) of items" @click="onClickRemoveItem(i)")
        el-tooltip(:content="`${item.SPC[0].SKILL[0].VAL} ${$t('経験値')}`" placement="top")
          img.icon-middle(:src="item.icon" :alt="item.NAME")
  div.right
    div.character
      img.icon-large(:src="character.icon" :alt="character.NAME")
    div.blaze-art
      p(v-for="{ level, totalExp, untilNextLevel } of [expInfo]") LV {{ level }} / {{ $t('経験値') }} {{ totalExp }} / {{ $t('あと') }} {{ untilNextLevel }}
      br
      p(v-for="(lv, i) of blazeArt.LV") LV {{ i + 1 }} {{ $t('経験値') }} {{ blazeArt.levelExperience(i + 1) }}
      br
      p.total-item(v-for="{ item, count } of totalItems")
        img.icon-small(:src="item.icon" :alt="item.NAME")
        span x {{ count }} {{ $t('個') }} {{ item.SPC[0].SKILL[0].VAL }} {{ $t('経験値') }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { mapFields } from 'vuex-map-fields';
import { ECategory } from '@/logic/Enums';
import { MVList as ItemMVList } from '@/master/item';
import Enumerable from 'linq';

abstract class VueWithMapFields extends VueBase {
  public characterDf!: number | null;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('blazeArtLeveling', ['characterDf']),
  },
})
export default class extends VueWithMapFields {
  public get blazeArtExpItems() {
    return this.dataManager.itemsByCategory[ECategory.eGROW_BLAZE_ARTS];
  }

  public get experienceItemDfs() {
    return this.$store.state.blazeArtLeveling.experienceItemDfs as number[];
  }

  public set experienceItemDfs(experienceItemDfs: number[]) {
    this.$store.commit('blazeArtLeveling/updateExperienceItemDfs', experienceItemDfs);
  }

  public get items() {
    return this.experienceItemDfs.map((p) => this.dataManager.itemById[p]);
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

  public get character() {
    return this.dataManager.characterById[this.characterDf] || this.dataManager.characterById[5014];
  }

  public get blazeArt() {
    return this.dataManager.blazeArtById[this.character.BA[0].DF];
  }

  //
  public get totalExp() {
    return this.items.map((p) => p.SPC)
      .flat()
      .map((p) => p.SKILL)
      .flat()
      .reduce((sum, skill) => sum + skill.VAL, 0);
  }

  public get expInfo() {
    let exp = this.totalExp;
    for (const [i, { EXP_PT }] of this.blazeArt.LV.entries()) {
      exp -= EXP_PT;
      if (exp < 0) {
        return {
          level: i + 1,
          totalExp: this.totalExp,
          untilNextLevel: Math.abs(exp),
        };
      }
    }

    return {
      level: this.blazeArt.LV.length,
      totalExp: this.blazeArt.LV.reduce((sum, p) => sum + p.EXP_PT, 0),
      untilNextLevel: 0,
    };
  }

  //
  public onClickAddItem(item: ItemMVList) {
    this.experienceItemDfs.push(item.DF);
  }

  public onClickRemoveItem(i: number) {
    this.experienceItemDfs.splice(i, 1);
  }

  public onClickRemoveAllItems() {
    this.experienceItemDfs = [];
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

.total-item
  display: flex
  align-items: center
</style>
