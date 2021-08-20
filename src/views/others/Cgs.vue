<template lang="pug">
div.container
  el-tabs(v-model="activeTab" type="card")
    el-tab-pane(:label="$t('CG')" name="cgs")
      div.cgs
        el-card(v-for="(cg, i) of cgs" :key="cg.id")
          router-link(:to="{ name: 'InfoQuest', query: { name: cg.adv } }" target="_blank")
            h3.cg-header {{ cg.questNames }}
          a(:href="cg.src" target="_blank")
            img.cg-img(:src="cg.src" :alt="`${$t('CG')} ${cg.id}`")
    el-tab-pane(:label="$t('背景')" name="backgrounds")
      div.cgs
        div(v-for="(cg, i) of bgs")
          img.bg-img(:src="cg.src" :alt="`${$t('背景')} ${cg.id}`")
    el-tab-pane(:label="$t('アイテム')" name="items")
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
  public activeTab = 'cgs';

  public get cgs() {
    return Object.keys(this.dataManager.files.img.still_texture).map((img) => {
      const id = +img.match(/\d+/)[0];
      const advs: string[] = this.dataManager.advCgById[id] || [];
      return {
        id,
        src: `img/still_texture/${img}`,
        adv: advs[0],
        questNames: advs.map((adv) => this.dataManager.questsByAdv[adv])
          .filter((p) => p)
          .flat()
          .map((p) => p.NAME)
          .join(' / '),
      };
    });
  }

  public get windowItems() {
    return Object.entries(this.dataManager.advWindowItemById).map(([id]) => ({
      id,
      src: `img/item_texture/item_texture_${id.toString().padStart(4, '0')}.png`,
    }));
  }

  public get bgs() {
    return Object.keys(this.dataManager.files.img.bg_texture).map((img) => {
      const id = +img.match(/\d+/)[0];
      const advs: string[] = this.dataManager.advBgById[id] || [];
      return {
        id,
        src: `img/bg_texture/${img}`,
        adv: advs[0],
        questNames: advs.map((adv) => this.dataManager.questsByAdv[adv])
          .filter((p) => p)
          .flat()
          .map((p) => p.NAME)
          .join(' / '),
      };
    });
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
  height: 28px
  margin: 12px auto
  text-align: center
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
  max-width: 320px

.cg-img
  width: 100%
  max-width: 400px
.bg-img
  width: 100%
  height: 56.25%
.item-img
  width: 100%
  max-width: 120px
</style>
