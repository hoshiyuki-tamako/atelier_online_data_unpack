<template lang="pug">
div.container
  div.filters
    div.filter
      span {{ $t('種類') }}
      el-select(v-model="characterType" placeholder="" clearable filterable)
        el-option(v-for="item of characterTypeFilter" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('性別') }}
      el-select(v-model="gender" placeholder="" clearable filterable)
        el-option(v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value")
    div.filter
      span {{ $t('武器種類') }}
      el-select(v-model="weaponType" placeholder="" clearable filterable)
        el-option(v-for="item in weaponTypeOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      span {{ $t('名前') }}/DF
      el-input(v-model="name" clearable)
    div.filter
      span {{ $t('ソート') }}
      el-select(v-model="sort" placeholder="" clearable filterable)
        el-option(v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value")
  div.filters
    div.filter
      el-checkbox-group(v-model="has" size="small")
        el-checkbox-button(v-for="item of hasFilter" :key="item.value" :label="item.value") {{ item.label }}

  div.characters
    el-card.character(v-for="character of filteredCharacters" :key="character.DF")
      router-link(:to="{ name: 'CharactersCharacter', query: { df: character.DF } }")
        h3 {{ character.NAME }}
        img(:src="character.icon" :alt="character.NAME")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { CharacterType } from '@/store/characters/charactersFilter';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public characterType!: number;

  public gender!: number | null;

  public weaponType!: number | null;

  public sort!: number;

  public name!: string;

  public has!: number[];
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('charactersFilter', ['characterType', 'gender', 'weaponType', 'sort', 'name', 'has']),
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

  public get genderOptions() {
    return [
      {
        label: '♂',
        value: 1,
      },
      {
        label: '♀',
        value: 2,
      },
    ];
  }

  public get weaponTypeOptions() {
    return Object.entries(this.dataManager.lookup.ESubCategory)
      .map(([value, label]) => ({
        label: this.$t(label),
        value: +value,
      }));
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

  public get hasFilter() {
    return [
      {
        label: this.$t('レジェンドレシピ'),
        value: 1,
      },
      {
        label: this.$t('専用アイテム'),
        value: 2,
      },
      {
        label: this.$t('ブレイズアーツ'),
        value: 3,
      },
      {
        label: this.$t('クエスト'),
        value: 4,
      },
      {
        label: this.$t('トレジャー'),
        value: 5,
      },
    ];
  }

  public get filteredCharacters() {
    const characters = this.characters.filter((p) => (
      (!this.gender || p.GEN === this.gender)
      && ([null, '', -1].includes(this.weaponType) || p.WEAPON.some((o) => o.GEN === this.weaponType))
      && (!this.name || p.DF === +this.name || p.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))
      && (!this.has.includes(1) || this.dataManager.itemsByCharacterLegendRecipe[p.DF])
      && (!this.has.includes(2) || this.dataManager.itemsByGroupDf[p.GROUP_DF]?.length)
      && (!this.has.includes(3) || p.BA.length)
      && (!this.has.includes(4) || p.QST.length)
      && (!this.has.includes(5) || this.dataManager.api.huntInfosByCharacterId[p.DF])
    ));
    if (this.sort === 1) {
      return characters.reverse();
    }
    return characters;
  }

  public get characters() {
    switch (this.characterType) {
      case CharacterType.battle:
        return this.dataManager.charactersCanBattle;
      case CharacterType.npc:
        return this.dataManager.characterNpcs;
      case CharacterType.none:
      default:
        return this.dataManager.chara.m_vList;
    }
  }

  public async beforeMount() {
    if (typeof this.$route.query.characterType !== 'undefined') {
      await this.$store.dispatch('charactersFilter/reset');
      this.characterType = +this.$route.query.characterType;
      this.$router.replace({ query: { ...this.$route.query, characterType: undefined } });
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
