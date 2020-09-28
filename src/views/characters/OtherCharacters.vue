<template lang="pug">
div.container
  div.other-characters
    div(v-for="icon of icons")
      img(:src="`img/icon_chara/Texture2D/${icon}`" :alt="icon")
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
  public get existingCharacterIconDfs() {
    return dataManager.chara.m_vList.map((p) => p.DF.toString().padStart(4, '0'));
  }

  public get icons() {
    const characterIconDfs = this.existingCharacterIconDfs;
    return Object.values(dataManager.files.img.icon_chara.Texture2D)
      .filter((icon: string) => icon.startsWith('icon_chara_all_') && !characterIconDfs.some((iconDf) => new RegExp(`^icon_chara_all_${iconDf}`).exec(icon)));
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.other-characters
  display: flex
  flex-wrap: wrap
.other-characters
  img
    width: 200px
</style>
