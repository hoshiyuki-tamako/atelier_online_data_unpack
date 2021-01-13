<template lang="pug">
div.container
  el-tabs(v-model="activeTab" @tab-click="onTabClick")
    el-tab-pane(:label="$t('音楽')" name="music")
      aplayer(v-if="musicList.length" :music="musicAplayerOption.music" :list="musicAplayerOption.list" :theme="musicAplayerOption.theme")
    el-tab-pane(:label="$t('キャラクター')" name="character")
      div.filter
        div.filter
          el-select(v-model="character" :placeholder="$t('キャラクター')" filterable)
            el-option(v-for="item of characterFilter" :key="item.value" :label="item.character.NAME" :value="item.value")
              template(v-if="item.character")
                img.character-icon(v-if="item.character.hasFaceIcon" :src="item.character.faceIcon" :alt="item.character.NAME")
                img.character-icon(v-else-if="item.character.hasIcon" :src="item.character.icon" :alt="item.character.NAME")
              span.character-name {{ item.character.NAME }}
      aplayer(v-if="characterList.length" :key="character" :music="characterAplayerOption.music" :list="characterAplayerOption.list" :theme="characterAplayerOption.theme")
    el-tab-pane(:label="$t('他')" name="other")
      aplayer(v-if="otherList.length" :music="otherAplayerOption.music" :list="otherAplayerOption.list" :theme="otherAplayerOption.theme")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import Aplayer from 'vue-aplayer';
import { MVList as CharacterMVList } from '@/master/chara';
import Enumerable from 'linq';
import { CharacterVoice, CharacterVoiceMap } from '@/scripts/AudioExport';

Aplayer.disableVersionBadge = true;

@Component({
  components: {
    Aplayer,
  },
})
export default class extends VueBase {
  public activeTab = 'music';

  public character: number | null | string = null;

  public get characterFilter() {
    return Object.entries(this.dataManager.characterVoices as CharacterVoiceMap)
      .map(([df, voices]) => ({
        character: this.getCharacter(+df, this.getMostName(voices)),
        value: df,
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
      ?.map(({ voice, characterName }) => ({
        title: voice,
        src: `audios/voices/${voice}.wav`,
        artist: characterName || ' ',
        pic: this.getCharacter(+this.character, characterName).icon,
      })) ?? [];
  }

  // other
  public get otherAplayerOption() {
    return {
      ...this.defaultAplayerOption,
      music: this.otherList[0],
      list: this.otherList,
    };
  }

  public get otherList() {
    const characterVoices = Object.values(this.dataManager.characterVoices).flat().map(({ voice }) => `${voice}.wav`);
    return Object.values(this.dataManager.files.audios.voices)
      .filter((p) => p !== '.keep' && !characterVoices.includes(p))
      .map((p) => ({
        title: p.split('.')[0],
        src: `audios/voices/${p}`,
        artist: ' ',
        pic: 'img/icon_chara/Texture2D/icon_chara_face_0002.png',
      }));
  }

  //
  public created() {
    this.character ??= this.characterFilter[0]?.value;
  }

  public onTabClick() {
    for (const audio of [...document.getElementsByTagName('audio')]) {
      audio.pause();
    }
  }

  private getMostName(voices: CharacterVoice[]) {
    return Enumerable.from(voices)
      .groupBy((p) => p.characterName)
      .orderByDescending((p) => p.count())
      .select((p) => p.key())
      .firstOrDefault() || this.$t('他').toString();
  }

  private getCharacter(df: number, name: string) {
    if (this.dataManager.characterById[df]) {
      return this.dataManager.characterById[df];
    }

    const character = new CharacterMVList();
    character.DF = df;
    character.NAME = name;
    return character;
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

.character-icon
  float: left
  width: 32px
.character-name
  float: right
</style>
