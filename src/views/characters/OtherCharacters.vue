<template lang="pug">
div.container
  div.other-characters
    el-card.other-character(v-for="otherCharacter of otherCharacters")
      el-popover(v-if="dataManager.advCharacterById[otherCharacter.df]" placement="top-start" trigger="hover")
        div(slot="reference")
          h3 {{ otherCharacter.df }}
          img(:src="`img/icon_chara/Texture2D/${otherCharacter.icon}`" :alt="otherCharacter.df")
        p(v-for="name of dataManager.advCharacterById[otherCharacter.df]") {{ name }}
      template(v-else)
        h3 {{ otherCharacter.df }}
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
  public get otherCharacters() {
    const characterImages = this.dataManager.chara.m_vList.map((p) => p.images.concat(p.otherImages)).flat();
    return Object.values(this.dataManager.files.img.icon_chara.Texture2D)
      .filter((icon) => icon.startsWith('icon_chara_all_') && !characterImages.includes(`img/icon_chara/Texture2D/${icon}`))
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
