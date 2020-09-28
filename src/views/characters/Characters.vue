<template lang="pug">
div.container
  div.filters
    div.filter
      el-select(v-model="characterType" clearable filterable)
        el-option(v-for="item of characterTypeFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name")
    div.filter
      span {{ $t('ソート') }}
      el-select(v-model="sort" clearable filterable)
        el-option(v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value")
  div.characters
    el-card.character(v-for="character of filteredCharacters" :key="character.DF")
      router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
        h3 {{ character.NAME }}
        img(:src="character.icon" :alt="character.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { CharacterType } from '@/store/characters/charactersFilter';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public characterType!: number;

  public sort!: number;

  public name!: string;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('charactersFilter', ['characterType', 'sort', 'name']),
  },
})
export default class extends VueWithMapFields {
  public get characterTypeFilter() {
    return [
      {
        label: this.$t('戦闘キャラクター'),
        value: CharacterType.battle,
      },
      {
        label: this.$t('NPC'),
        value: CharacterType.npc,
      },
    ];
  }

  public get sortOptions() {
    return [
      {
        label: this.$t('古い'),
        value: 0,
      },
      {
        label: this.$t('新しい'),
        value: 1,
      },
    ];
  }

  public beforeMount() {
    if (typeof this.$route.query.characterType !== 'undefined') {
      this.characterType = +this.$route.query.characterType;
      this.$router.replace({ query: { ...this.$route.query, characterType: undefined } });
    }
  }

  public get filteredCharacters() {
    const characters = this.characters.filter((p) => (
      (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
    ));
    if (this.sort === 1) {
      return characters.reverse();
    }
    return characters;
  }

  public get characters() {
    switch (this.characterType) {
      case CharacterType.battle:
        return dataManager.charactersCanBattle;
      case CharacterType.npc:
        return dataManager.characterNpcs;
      case CharacterType.none:
      default:
        return dataManager.chara.m_vList;
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.characters
  display: flex
  flex-wrap: wrap
.character
  margin: 12px
  text-align: center
  cursor: pointer
  img
    width: 200px
</style>
