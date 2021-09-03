<template lang="pug">
div.container
  el-dialog(title="" :visible.sync="fbxDialogVisible" width="90%")
    model-fbx.item-fbx-container(v-loading="fbxLoading" @on-load="fbxLoading = false" :src="fbxModel" :rotation="{ x:0, y: 0, z: Math.PI }" backgroundColor="rgb(169,169,169)")

  h3 {{ $t('模型') }}
  div.models-container
    div.model-container(v-for="model of models")
      el-link(@click="openFbxDialog(`${dataManager.baseServerId}/models/items/${model}/${model}.fbx`)" type="primary" :underline="false") {{ model }}
  el-divider
  div.unused-items-container
    div.unused-item-container(v-for="icon of icons")
      p {{ icon.id }}
      img(:src="icon.src" alt="")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { ModelFbx } from 'vue-3d-model';
import VueBase from '@/components/VueBase';

@Component({
  components: {
    'model-fbx': ModelFbx,
  },
})
export default class extends VueBase {
  public fbxModel = '';

  public fbxDialogVisible = false;

  public fbxLoading: boolean | null = null;

  public get unusedWeaponCategory() {
    return ['dual', 'hammer', 'knuckle'];
  }

  public get models() {
    const itemModels = Object.keys(this.dataManager.files[this.dataManager.baseServerId]?.models.items ?? {});
    return this.unusedWeaponCategory
      .map((prefix) => itemModels.filter((p: string) => p.includes(prefix)))
      .flat()
      .sort();
  }

  public get itemIcons() {
    return this.dataManager.item.m_vList.map(({ DF }) => `icon_item_s_${DF}.png`);
  }

  public get icons() {
    const icons = this.itemIcons;
    return Object.values(this.dataManager.files.img.icon_item_s.Texture2D)
      .filter((icon: string) => !icons.includes(icon))
      .map((icon: string) => ({
        id: +icon.split('_')[3].split('.')[0],
        src: `img/icon_item_s/Texture2D/${icon}`,
      }))
      .sort((a, b) => b.id - a.id);
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

.models-container
  display: flex
  flex-wrap: wrap
  .model-container
    padding: 12px

.unused-items-container
  display: flex
  flex-wrap: wrap
  .unused-item-container
    text-align: center
    padding: 12px
    img
      width: 120px
</style>
