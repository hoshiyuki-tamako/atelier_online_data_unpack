<template lang="pug">
div.container
  el-tabs(v-model="activeTab" @tab-click="onTabClick")
    el-tab-pane(:label="$t('音楽')" name="music")
      aplayer(v-if="musicList.length" :music="musicAplayerOption.music" :list="musicAplayerOption.list" :theme="musicAplayerOption.theme")
    el-tab-pane(:label="$t('キャラクター')" name="character")
      div.filters
        CharacterSelector(v-model="character" :characters="characters" :showTitle="false" :clearable="false")
      aplayer(v-if="characterList.length" :key="character" :music="characterAplayerOption.music" :list="characterAplayerOption.list" :theme="characterAplayerOption.theme")
    el-tab-pane(:label="$t('他')" name="other")
      aplayer(v-if="otherList.length" :music="otherAplayerOption.music" :list="otherAplayerOption.list" :theme="otherAplayerOption.theme")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Aplayer from 'vue-aplayer';
import Enumerable from 'linq';
import { MVList as CharacterMVList } from '@/master/chara';
import VueBase from '@/components/VueBase';
import { CharacterVoice, CharacterVoiceMap } from '@/scripts/AudioExport';
import CharacterSelector from '@/components/inputs/CharacterSelector.vue';

Aplayer.disableVersionBadge = true;

@Component({
  components: {
    Aplayer,
    CharacterSelector,
  },
})
export default class extends VueBase {
  public activeTab = 'music';

  public character: number | null | string = null;

  public get characters() {
    return Object.entries(this.dataManager.characterVoices as CharacterVoiceMap)
      .filter(([df]) => df && +df)
      .map(([df, voices]) => this.getCharacter(+df, this.getMostName(voices)));
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
        src: `audios/voices/${voice}.m4a`,
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
    const characterVoices = Object.values(this.dataManager.characterVoices).flat().map(({ voice }) => `${voice}.m4a`);
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
    this.character ??= this.characters[0]?.DF;
  }

  public onTabClick() {
    for (const audio of document.getElementsByTagName('audio')) {
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
</style>
