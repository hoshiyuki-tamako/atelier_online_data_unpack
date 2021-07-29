<template lang="pug">
div.container
  el-dialog(title="" :visible.sync="fbxDialogVisible" width="90%")
    model-fbx.item-fbx-container(v-loading="fbxLoading" @on-load="fbxLoading = false" :src="fbxModel" :rotation="{ x:0, y: 0, z: Math.PI }" backgroundColor="rgb(169,169,169)")

  div.throwables
    div.throwable(v-for="{ label, folder } of throwables")
      el-link(@click="openFbxDialog(`${dataManager.baseServerId}/models/throwables/${folder}/${label}.fbx`)" type="primary" :underline="false") {{ label }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { ModelFbx } from 'vue-3d-model';

@Component({
  components: {
    'model-fbx': ModelFbx,
  },
})
export default class extends VueBase {
  public fbxModel = '';

  public fbxDialogVisible = false;

  public fbxLoading: boolean | null = null;

  public get throwables() {
    const throwableNames = this.dataManager.item.m_vList.map((p) => p.modelThrowableName);
    return Object.keys(this.dataManager.files[this.dataManager.baseServerId]?.models.throwables ?? {})
      .filter((folder) => !throwableNames.includes(this.dataManager.folderLabel(folder)))
      .map((folder) => ({
        label: this.dataManager.folderLabel(folder),
        folder,
      }));
  }

  public openFbxDialog(fbxModel: string) {
    this.fbxModel = fbxModel;
    if (this.fbxLoading === null) {
      this.fbxLoading = true;
    }
    this.fbxDialogVisible = true;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.throwables
  display: flex
  flex-wrap: wrap
  .throwable
    padding: 12px
</style>
