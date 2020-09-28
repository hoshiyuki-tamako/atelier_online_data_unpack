<template lang="pug">
div.container
  div.content
    table.treasure-text-table
      tr(v-for="treasure of dataManager.treasure.m_vList")
        td.treasure-character-cell
          router-link(v-for="character of [dataManager.characterById[treasure.iCharaID]].filter((p) => p)" :key="character.DF" :to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
            img(:src="character.icon" :alt="character.NAME")
        td
          p(v-for="content of treasure.vContent") {{ content }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
}
</script>

<style lang="sass" scoped>
th
  white-space: nowrap
td
  text-align: center
th, td
  padding: 4px
  border-bottom: 1px solid black

.treasure-character-cell img
  width: 120px
</style>
