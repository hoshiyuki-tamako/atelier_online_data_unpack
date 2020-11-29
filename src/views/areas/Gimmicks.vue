<template lang="pug">
div.container
  div.gimmicks
    div.gimmick(v-for="{ label, folder } of gimmicks")
      router-link(:to="{ name: 'AreasArea', query: { raw: `models/gimmicks/${folder}/${label}.fbx` } }" v-slot="{ href, navigate }")
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
  public get gimmicks() {
    return Object.keys(this.dataManager.files.models.gimmicks)
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

.gimmicks
  display: flex
  flex-wrap: wrap
  .gimmick
    padding: 12px
</style>
