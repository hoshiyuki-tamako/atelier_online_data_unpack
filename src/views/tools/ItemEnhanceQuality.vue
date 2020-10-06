<template lang="pug">
div.item-enhance-quality
  div.left
    div.filters
      div.filter
        span {{ $t('品質') }}
        el-input-number(v-model="quality" size="small" :min="1" :max="Quality.experiences.length" :step="1" step-strictly)
        el-button(@click="add" size="small" type="primary") +
        el-button(@click="setAll" type="primary" size="small") {{ $t('まとめで設定') }}
        el-button(@click="removeAll" type="danger" icon="el-icon-delete" circle)
    div.items
      div.item(v-for="(quality, i) of qualities")
        div
          el-input-number(v-model="quality.quality" size="mini" :min="1" :max="Quality.experiences.length" :step="1" step-strictly)
        el-tooltip(effect="light" :content="`${$t('品質')}${$t('経験値')} ${quality}`" placement="right")
          div.item__icon(@click="remove(i)")
            img.icon-small(src="img/icon_item_s/Texture2D/icon_item_s_10020003.png" :alt="$t('アイテム')")
  div.right
    div.orginal-item
      img(src="img/icon_item_s/Texture2D/icon_item_s_10020003.png" :alt="$t('アイテム')")
      div.orginal-item__edit
        span {{ $t('品質') }}
        el-input-number(v-model="originalQuality" size="mini" :min="1" :max="Quality.experiences.length" :step="1" step-strictly)
        span {{ $t('次まで') }}
        el-input-number(v-model="untilNextQuality" size="mini" :min="0" :max="maxNextLevel" :step="1" step-strictly)
      div.after-item
        div x{{ qualities.length }}{{ $t('個') }} / {{ $t('品質') }} {{ result.quality }} / {{ $t('次まで') }} {{ result.untilNext }} / {{ $t('品質') }}{{ $t('経験値') }} {{ result }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { mapFields } from 'vuex-map-fields';
import { Quality } from '@/logic/Quality';
import { plainToClass } from 'class-transformer';

abstract class VueWithMapFields extends VueBase {
  public quality!: number;

  public originalQuality!: number;

  public untilNextQuality!: number;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('itemEnhanceQuality', ['quality', 'originalQuality', 'untilNextQuality']),
  },
})
export default class extends VueWithMapFields {
  public get Quality() {
    return Quality;
  }

  //
  public get qualities() {
    return this.$store.state.itemEnhanceQuality.qualities as Quality[];
  }

  public set qualities(qualities: Quality[]) {
    this.$store.commit('itemEnhanceQuality/updateQualities', qualities);
  }

  //
  public get maxNextLevel() {
    return (Quality.experiences[this.originalQuality] - Quality.experiences[this.originalQuality - 1]) || 0;
  }

  public get result() {
    return new Quality().setQuality(this.originalQuality || 1, this.untilNextQuality).addExperiences(this.qualities);
  }

  //
  public add() {
    this.qualities.push(new Quality().setQuality(this.quality));
    return this.$forceUpdate();
  }

  public setAll() {
    for (const quality of this.qualities) {
      quality.quality = this.quality;
    }
  }

  public remove(i: number) {
    this.qualities.splice(i, 1);
  }

  public async removeAll() {
    await this.$confirm(`${this.$t('すべてをクリアしてもよろしいですか')}?`, '', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    });
    this.qualities = [];
  }

  public beforeMount() {
    if (this.qualities.length && !(this.qualities[0] instanceof Quality)) {
      this.qualities = plainToClass(Quality, this.qualities);
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.item-enhance-quality
  display: flex

.left, .right
  width: 100%
  max-width: 480px
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
.after-item
  margin-top: 12px
</style>
