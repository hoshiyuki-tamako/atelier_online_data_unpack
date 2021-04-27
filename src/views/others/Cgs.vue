<template lang="pug">
div.container
  div.content
    div.cgs
      el-card(v-for="(cg, i) of cgs" :key="cg.id")
        router-link(:to="{ name: 'InfoQuest', query: { name: cg.adv } }" target="_blank")
          h3.cg-header {{ cg.questNames }}
        a(:href="cg.src" target="_blank")
          img.cg-img(:src="cg.src" :alt="`${$t('CG')} ${cg.id}`")
    el-divider
    h2 {{ $t('背景') }}
    div.cgs
      div(v-for="(cg, i) of bgs")
        img.bg-img(:src="cg.src" :alt="`${$t('背景')} ${cg.id}`")
    el-divider
    div.cgs
      el-card(v-for="(cg, i) of windowItems" :key="cg.id")
        a(:href="cg.src" target="_blank")
          img.item-img(:src="cg.src" :alt="`${$t('アイテム')} ${cg.id}`")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get cgs() {
    return Object.entries(this.dataManager.advCgById).map(([id, advs]) => ({
      id,
      src: `img/still_texture/Still_Texture_${id.toString().padStart(4, '0')}.png`,
      adv: advs[0],
      questNames: advs.map((adv) => this.dataManager.questsByAdv[adv])
        .filter((p) => p)
        .flat()
        .map((p) => p.NAME)
        .join(' / '),
    }));
  }

  public get windowItems() {
    return Object.entries(this.dataManager.advWindowItemById).map(([id]) => ({
      id,
      src: `img/item_texture/item_texture_${id.toString().padStart(4, '0')}.png`,
    }));
  }

  public get bgs() {
    return Object.entries(this.dataManager.advBgById).map(([id]) => ({
      id,
      src: `img/bg_texture/BG_Texture_${id.toString().padStart(4, '0')}.png`,
    }));
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.cgs
  display: flex
  flex-wrap: wrap
  > div
    margin: 12px

.cg-header
  margin: 12px
  text-align: center
  text-overflow: ellipsis
  overflow: hidden
  width: 320px
  white-space: nowrap
  margin-left: auto
  margin-right: auto

.cg-img
  width: 400px
.bg-img
  width: 100%
  height: 56.25%
.item-img
  width: 120px
</style>
