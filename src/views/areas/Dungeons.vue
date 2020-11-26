<template lang="pug">
div.container
  div.dungeons(v-for="{ level, folders } of dungeons")
    el-divider {{ level || '' }}
    div.dungeon(v-for="folder of folders")
      router-link(:to="{ name: 'AreasArea', query: { dungeon: folder } }" v-slot="{ href, navigate }")
        el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ folderLabel(folder) }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dungeons() {
    return Object.entries(this.dataManager.dungeonModelsByLevel)
      .map(([level, folders]) => ({
        level,
        folders,
      }));
  }

  public folderLabel(folder: string) {
    return folder.replace(/\s*\(\d+\)/, '');
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.dungeons
  display: flex
  flex-wrap: wrap
  .dungeon
    padding: 12px
</style>
