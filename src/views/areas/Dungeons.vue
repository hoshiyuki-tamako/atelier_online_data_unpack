<template lang="pug">
div.container
  div.dungeons(v-for="{ level, folders } of dungeons")
    el-divider {{ level || '' }}
    div.dungeon(v-for="folder of folders")
      router-link(:to="{ name: 'AreasArea', query: { dungeon: folder } }" v-slot="{ href, navigate }")
        el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ dataManager.folderLabel(folder) }}

  el-divider
  div.dungeons
    div.dungeon(v-for="{ label, folder } of fieldDungeons")
      router-link(:to="{ name: 'AreasArea', query: { fieldDungeon: folder } }" v-slot="{ href, navigate }")
        el-link(:href="href" @click="navigate" type="primary" :underline="false") {{ label }}
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

  public get fieldDungeons() {
    return Object.keys(this.dataManager.files.models.fieldDungeons)
      .map((folder) => ({
        label: this.dataManager.folderLabel(folder),
        folder,
      }));
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
