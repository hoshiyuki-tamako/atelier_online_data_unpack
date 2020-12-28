<template lang="pug">
div.container
  el-tabs(v-model="activeTab")
    el-tab-pane(:label="$t('音楽')" name="music")
      aplayer(v-if="musicList.length" :music="musicAplayerOption.music" :list="musicAplayerOption.list" :theme="musicAplayerOption.theme")
    el-tab-pane(:label="$t('キャラクター')" name="character")
      div.filter
        div.filter
          el-select(v-model="character" :placeholder="$t('キャラクター')" filterable)
            el-option(v-for="item of characterFilter" :key="item.value" :label="item.label" :value="item.value")
      aplayer(v-if="characterList.length" :music="characterAplayerOption.music" :list="characterAplayerOption.list" :theme="characterAplayerOption.theme")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import Aplayer from 'vue-aplayer';

Aplayer.disableVersionBadge = true;

@Component({
  components: {
    Aplayer,
  },
})
export default class extends VueBase {
  public activeTab = 'music';

  public character: number | null = null;

  public get characterFilter() {
    return this.dataManager.chara.m_vList
      .filter((p) => this.dataManager.characterVoices[p.DF])
      .map((p) => ({
        label: p.NAME,
        value: p.DF,
      }));
  }

  public get defaultAplayerOption() {
    return {
      theme: null,
    };
  }

  // music
  public get musicAplayerOption() {
    return {
      ...this.defaultAplayerOption,
      music: this.musicList[0],
      list: this.musicList,
    };
  }

  public get musicList() {
    return Object.values(this.dataManager.files.audios.musics)
      .filter((p) => p !== '.keep')
      .sort(new Intl.Collator(undefined, { numeric: true }).compare)
      .map((p) => ({
        title: p.split('.')[0],
        src: `audios/musics/${p}`,
        artist: ' ',
        pic: 'img/icon_chara/Texture2D/icon_chara_all_9999_00.png',
      }));
  }

  // character
  public get characterAplayerOption() {
    return {
      ...this.defaultAplayerOption,
      music: this.characterList[0],
      list: this.characterList,
    };
  }

  public get characterList() {
    return this.dataManager.characterVoices[this.character]
      ?.map((title) => ({
        title,
        src: `audios/voices/${title}.wav`,
        artist: ' ',
        pic: this.dataManager.characterById[this.character].icon,
      })) ?? [];
  }

  //
  public created() {
    this.character ??= this.characterFilter[0]?.value;
  }
}
</script>

<style lang="sass">
.dark-mode .aplayer
  background: #222933
  color: #ccc
.dark-mode .aplayer-list ol li.aplayer-list-light, .dark-mode .aplayer-list ol li:hover
  background: #313846
  color: #00adff
</style>
