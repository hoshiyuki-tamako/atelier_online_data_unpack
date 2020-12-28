<template lang="pug">
div.container
  div.other-characters
    div.other-character(v-for="otherCharacter of otherCharacters")
      p {{ otherCharacter.df }}
      img(:src="`img/icon_chara/Texture2D/${otherCharacter.icon}`" :alt="otherCharacter.df")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get existingCharacterIconDfs() {
    return this.dataManager.chara.m_vList.map((p) => p.DF.toString().padStart(4, '0'));
  }

  public get otherCharacters() {
    const characterIconDfs = this.existingCharacterIconDfs;
    return Object.values(this.dataManager.files.img.icon_chara.Texture2D)
      .filter((icon) => icon.startsWith('icon_chara_all_') && !characterIconDfs.some((iconDf) => new RegExp(`^icon_chara_all_${iconDf}`).exec(icon)))
      .map((icon) => ({
        icon,
        df: icon.match(/(\d+)/)[1] || '-',
      }));
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.other-characters
  display: flex
  flex-wrap: wrap
  .other-character
    margin: 12px
    text-align: center
    img
      width: 200px
</style>
