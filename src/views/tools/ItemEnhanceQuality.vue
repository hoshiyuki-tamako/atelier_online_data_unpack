<template lang="pug">
div.item-enhance-quality
  div.left
    div.filters
      div.filter
        span {{ $t('品質') }}
        el-input-number(v-model="quality" :min="1" :max="Quality.experiences.length" :step="1" step-strictly)
        el-button(@click="add" type="primary") +
        el-button(@click="setAll" type="primary" size="small") {{ $t('まとめで設定') }}
    div.items
      div.item(v-for="(itemModifier, i) of itemModifiers")
        div
          el-input-number(v-model="itemModifier.quality" size="mini" :min="1" :max="Quality.experiences.length" :step="1" step-strictly)
        div.item__icon(@click="remove(i)")
          img.icon-small(:src="item.icon" :alt="$t('アイテム')")
  div.right
    div.orginal-item
      img(:src="item.icon" :alt="$t('アイテム')")
      div.orginal-item__edit
        span {{ $t('品質') }}
        el-input-number(v-model="originalQuality" size="mini" :min="1" :max="Quality.experiences.length" :step="1" step-strictly)
        span {{ $t('次まで') }}
        el-input-number(v-model="nextQualityExperience" size="mini" :min="0" :max="maxNextLevel" :step="1" step-strictly)
    div.after-item
      div x{{ itemModifiers.length }}{{ $t('個') }} / {{ $t('品質') }} {{ resultQuality }} / {{ $t('次まで') }} {{ resultNextLevel }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { mapFields } from 'vuex-map-fields';
import { ItemModifier } from '@/logic/modifiers/ItemModifier';
import { Quality } from '@/logic/Quality';

abstract class VueWithMapFields extends VueBase {
  public quality!: number;

  public originalQuality!: number;

  public nextQualityExperience!: number;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('itemEnhanceQuality', ['quality', 'originalQuality', 'nextQualityExperience']),
  },
})
export default class extends VueWithMapFields {
  public get Quality() {
    return Quality;
  }

  public get item() {
    return this.dataManager.item.m_vList[0];
  }

  public get maxNextLevel() {
    return (Quality.experiences[this.originalQuality] - Quality.experiences[this.originalQuality - 1]) || 0;
  }

  public get currentExperience() {
    const experience = Quality.experiences[this.originalQuality - 1] || 0;
    if (!this.nextQualityExperience || !Quality.experiences[this.originalQuality]) {
      return experience;
    }
    return experience + Quality.experiences[this.originalQuality] - Quality.experiences[this.originalQuality - 1] - this.nextQualityExperience;
  }

  public get result() {
    return Quality.byExp(this.itemModifiers.map((p) => Quality.experiences[p.quality - 1] || 0).reduce((sum, v) => sum + v, this.currentExperience));
  }

  public get resultQuality() {
    return this.result.quality;
  }

  public get resultNextLevel() {
    const { result } = this;
    if (!Quality.experiences[result.quality]) {
      return 0;
    }
    return Quality.experiences[result.quality] - Quality.experiences[result.quality - 1] - result.exp;
  }

  public get itemModifiers() {
    return this.$store.state.itemEnhanceQuality.itemModifiers;
  }

  public set itemModifiers(value) {
    this.$store.commit('itemEnhanceQuality/updateItemModifiers', value);
  }

  public add() {
    const modifier = new ItemModifier();
    modifier.quality = this.quality;
    this.itemModifiers.push(modifier);
    return this.$forceUpdate();
  }

  public setAll() {
    for (const modifier of this.itemModifiers) {
      modifier.quality = this.quality;
    }
  }

  public remove(i: number) {
    this.itemModifiers.splice(i, 1);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.item-enhance-quality
  display: flex

.left, .right
  width: 50%
  padding: 36px
.left
  background: rgb(224, 195, 151)
  min-height: 100vh

.items
  display: flex
  flex-wrap: wrap
  .item
    display: flex
    flex-direction: column
    align-items: center
    margin: 12px
.item__icon
  cursor: pointer
.orginal-item__edit
  > span:nth-child(3)
    margin-left: 12px
</style>
