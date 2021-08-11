<template lang="pug">
div.item-enhance-quality
  div.left
    div.experience-items
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
      CharacterSelector(v-model="characterDf" :characters="dataManager.charactersCanBattle" :showTitle="false" :clearable="false")
      img.icon-large(:src="character.icon" :alt="character.NAME")
    div.blaze-art
      div.orginal-item__edit
        span {{ $t('LV') }}
        el-input-number(v-model="level" size="mini" :min="1" :max="character.maxBlazeArtLevel" :step="1" step-strictly)
        span {{ $t('あと') }}
        el-input-number(v-model="untilExp" size="mini" :min="0" :max="maxExp" :step="1" step-strictly)
      br
      p(v-for="{ level, totalExp, untilNextLevel, overExp } of [expInfo]") {{ $t('LV') }} {{ level }} / {{ $t('経験値') }} {{ totalExp }} / {{ $t('あと') }} {{ untilNextLevel }} / {{ $t('無駄になった経験値') }} {{ overExp }}
      br
      p(v-for="(lv, i) of blazeArt.LV") {{ $t('LV') }} {{ i + 1 }} {{ $t('経験値') }} {{ blazeArt.levelExperience(i + 1) }}
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
import CharacterSelector from '@/components/inputs/CharacterSelector.vue';

abstract class VueWithMapFields extends VueBase {
  public level!: number;

  public untilExp!: number;

  public characterDf!: number | null;
}

@Component({
  components: {
    CharacterSelector,
  },
  computed: {
    ...mapFields('blazeArtLeveling', ['level', 'untilExp', 'characterDf']),
  },
})
export default class extends VueWithMapFields {
  public get maxExp() {
    return this.blazeArt.LV[this.level - 1].EXP_PT;
  }

  public get currentExp() {
    return [...Array(this.level)].reduce((sum, _, i) => sum + this.blazeArt.levelExperience(1 + i), this.untilExp ? this.blazeArt.levelExperience(this.level + 1) - this.untilExp : this.untilExp);
  }

  //
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
    return this.dataManager.characterById[this.characterDf];
  }

  public get blazeArt() {
    return this.dataManager.blazeArtById[this.character.BA[0].DF];
  }

  //
  public get totalItemExp() {
    return this.items.map((p) => p.SPC)
      .flat()
      .map((p) => p.SKILL)
      .flat()
      .reduce((sum, skill) => sum + skill.VAL, 0);
  }

  public get expInfo() {
    let exp = this.currentExp + this.totalItemExp;
    for (const [i, { EXP_PT }] of this.blazeArt.LV.entries()) {
      exp -= EXP_PT;
      if (exp < 0) {
        return {
          level: i + 1,
          totalExp: this.totalItemExp,
          untilNextLevel: Math.abs(exp),
          overExp: 0,
        };
      }
    }

    return {
      level: this.blazeArt.LV.length,
      totalExp: this.totalItemExp || this.blazeArt.LV.reduce((sum, p) => sum + p.EXP_PT, 0),
      untilNextLevel: 0,
      overExp: this.blazeArt.LV.reduce((sum, p) => sum + p.EXP_PT, 0) - (this.currentExp + this.totalItemExp),
    };
  }

  //
  public beforeMount() {
    if (!this.characterDf) {
      this.characterDf = 5014;
    }
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

.total-item
  display: flex
  align-items: center
</style>
