<template lang="pug">
div.container
  div.title__container
    h2 {{ $t('アトリエオンライン資料庫') }}
    p
      span.version-link__container
        span Game Version 3.12.1 (日本語)
        el-link(v-if="$i18n.locale !== 'ja-JP'" type="success" :underline="false" @click="onChangeLocale('ja-JP')") link
      br
      span.version-link__container
        span Game Version 3.5.0 (中文)
        el-link(v-if="$i18n.locale !== 'zh-TW'" type="success" :underline="false" @click="onChangeLocale('zh-TW')") link
    p
      span Twitter
      el-link(href="https://twitter.com/hoshiyuki_git" target="_blank" type="primary") @hoshiyuki_git
    br
    p
      el-switch(v-model="showSideBar" active-color="#13ce66" :active-text="$t('サイドバー')")
  el-divider
  div
    div.categories__container(v-for="allPage of allPages")
      div.categories__title-container
        h2 {{ allPage.title }}
      div.categories
        div.category__container(v-for="page in allPage.pages")
          h3
            a.category__link(v-if="page.href" :href="page.href" target="_blank")
              span {{ page.label }}
              img.category__image(:src="page.imgSrc" :alt="page.label")
            router-link.category__link(v-else :to="page.to")
              span {{ page.label }}
              img.category__image(:src="page.imgSrc" :alt="page.label")

  el-divider
  div.strategy-guides
    h3 {{ $t('他人の攻略サイト') }}
    br
    div
      p ブレセイル観光局
      p
        el-link(href="https://bresail-kanko.info/index.html" target="_blank") https://bresail-kanko.info/index.html
      p
        el-link(href="https://twitter.com/bresail_kanko" target="_blank") https://twitter.com/bresail_kanko
      p
        el-link(href="https://twitter.com/re_dream5" target="_blank") https://twitter.com/re_dream5
    el-divider
    div
      p アトリエオンライン攻略日記〜シャオンのアトリエ〜
      p
        el-link(href="https://ameblo.jp/shana12151014/" target="_blank") https://ameblo.jp/shana12151014/
      p
        el-link(href="https://twitter.com/_shaon" target="_blank") https://twitter.com/_shaon
    el-divider
    div
      p かぴ
      p
        el-link(href="https://twitter.com/kapi_atorie" target="_blank") https://twitter.com/kapi_atorie
    el-divider
    div
      p アトリエオンライン攻略Wikiまとめ【ブレセイルの錬金術士】
      p
        el-link(href="https://atelieronline.gamerch.com/" target="_blank") https://atelieronline.gamerch.com/
    el-divider
    div
      p 煉金工坊OL 資料庫
      p
        el-link(href="https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1" target="_blank") {{ 'https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1' }}
      p
        el-link(href="https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing" target="_blank" ) https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { dataManager } from '@/utils/DataManager';
import Enumerable from 'linq';
import VueBase from '@/utils/VueBase';
import { CharacterType } from '@/store/characters/charactersFilter';
import { SkillKind } from './skills/Skills.vue';

@Component({
  components: {
  },
})
export default class extends VueBase {
  get showSideBar() {
    return this.$store.state.home.showSideBar;
  }

  set showSideBar(value) {
    this.$store.commit('home/setShowSideBar', value);
  }

  public get allPages() {
    return [
      {
        title: this.$t('ツール'),
        pages: this.pageTools,
      },
      {
        title: this.$t('裝備'),
        pages: this.pageWeapons,
      },
      {
        title: this.$t('アイテム'),
        pages: this.pageItems,
      },
      {
        title: this.$t('スキル'),
        pages: this.pageSkills,
      },
      {
        title: this.$t('キャラクター'),
        pages: this.pageCharacters,
      },
      {
        title: this.$t('敵'),
        pages: this.pageEnemies,
      },
      {
        title: this.$t('情報'),
        pages: this.pageInfo,
      },
      {
        title: this.$t('他'),
        pages: this.otherPageInfo,
      },
    ];
  }

  public get pageTools() {
    return [
      {
        label: this.$t('キャラクタービルダー'),
        imgSrc: 'img/other/Texture2D/item_texture_0024.png',
        href: `characterBuilder.html?locale=${this.$i18n.locale}`,
        to: {
          name: 'ToolsCharacterBuilder',
        },
      },
      {
        label: this.$t('調合アイテム'),
        imgSrc: 'img/icon/icon_bowl.png',
        to: {
          name: 'ToolsComposeItem',
        },
      },
    ];
  }

  public get pageWeapons() {
    return [
      {
        label: this.$t('値ランキング'),
        imgSrc: 'img/other/Texture2D/item_texture_0025.png',
        to: {
          name: 'ToolsEquipmentRanking',
        },
      },
    ].concat(Enumerable.from(dataManager.itemsEquipments)
      .groupBy((p) => p.CATEG)
      .orderBy((p) => p.key())
      .select((p) => ({
        label: this.$t(dataManager.lookup.itemCategory[p.key()]),
        imgSrc: p.first().icon,
        to: {
          name: 'Items',
          query: {
            category: p.key(),
          },
        },
      }))
      .toArray());
  }

  public get pageItems() {
    return Enumerable.from(dataManager.item.m_vList)
      .where((p) => !p.EQU_BRD)
      .groupBy((p) => p.CATEG)
      .orderBy((p) => p.key())
      .select((p) => ({
        label: this.$t(dataManager.lookup.itemCategory[p.key()]),
        imgSrc: p.first().icon,
        to: {
          name: 'Items',
          query: {
            category: p.key(),
          },
        },
      }))
      .toArray();
  }

  public get pageSkills() {
    return [
      {
        label: this.$t('スキル'),
        imgSrc: 'img/icon_skill/Texture2D/icon_skill_00003.png',
        to: {
          name: 'Skills',
          query: {
            skillKind: SkillKind.normal,
          },
        },
      },
      {
        label: this.$t('効果'),
        imgSrc: 'img/fx/Texture2D/FX_Skill2005_02.png',
        to: {
          name: 'SkillsEffect',
        },
      },
      {
        label: this.$t('強化効果'),
        imgSrc: 'img/icon_s/Texture2D/icon_item_s_10950010.png',
        to: {
          name: 'SkillsAddon',
        },
      },
      {
        label: this.$t('異常状態'),
        imgSrc: 'img/fx/Texture2D/FX_smoke.png',
        to: {
          name: 'SkillsAbnormalEffect',
        },
      },
      {
        label: this.$t('ブレイズアーツ'),
        imgSrc: 'img/icon_s/Texture2D/icon_item_s_56010003.png',
        to: {
          name: 'Skills',
          query: {
            skillKind: SkillKind.blazeArt,
          },
        },
      },
    ];
  }

  public get pageCharacters() {
    return [
      {
        label: this.$t('値ランキング'),
        imgSrc: 'img/other/Texture2D/item_texture_0025.png',
        to: {
          name: 'ToolsCharacterRanking',
        },
      },
      {
        label: this.$t('戦闘キャラクター'),
        imgSrc: 'img/icon_chara/Texture2D/icon_chara_all_0001.png',
        to: {
          name: 'Characters',
          query: {
            characterType: CharacterType.battle,
          },
        },
      },
      {
        label: this.$t('NPC'),
        imgSrc: 'img/icon_chara/Texture2D/icon_chara_all_20001.png',
        to: {
          name: 'Characters',
          query: {
            characterType: CharacterType.npc,
          },
        },
      },
    ];
  }

  public get pageEnemies() {
    return [
      {
        label: this.$t('値ランキング'),
        imgSrc: 'img/other/Texture2D/item_texture_0025.png',
        to: {
          name: 'ToolsEnemyRanking',
        },
      },
      {
        label: this.$t('敵'),
        imgSrc: 'img/icon_chara/Texture2D/icon_chara_all_9999_00.png',
        to: {
          name: 'Enemies',
        },
      },
    ];
  }

  public get pageInfo() {
    return [
      {
        label: this.$t('区域'),
        imgSrc: 'img/map/Texture2D/MapArea_04_001_ALL.png',
        to: {
          name: 'Areas',
        },
      },
      {
        label: this.$t('ゾーン'),
        imgSrc: 'img/icon_s/Texture2D/icon_item_s_10500014.png',
        to: {
          name: 'InfoZone',
        },
      },
      {
        label: this.$t('大事なもの'),
        imgSrc: 'img/icon_item01/Texture2D/icon_item01_00001.png',
        to: {
          name: 'InfoWealth',
        },
      },
      {
        label: this.$t('称号'),
        imgSrc: 'img/icon_degree/Texture2D/icon_degree_0605.png',
        to: {
          name: 'InfoDegree',
        },
      },
      {
        label: this.$t('クェスト'),
        imgSrc: 'img/other/Texture2D/item_texture_0018.png',
        to: {
          name: 'InfoQuest',
        },
      },
    ];
  }

  public get otherPageInfo() {
    return [
      {
        label: this.$t('計算/公式'),
        imgSrc: 'img/other/Texture2D/item_texture_0010.png',
        to: {
          name: 'OthersCalculate',
        },
      },
      {
        label: this.$t('降臨バタル(昔)'),
        imgSrc: 'img/enemy/Texture2D/enemy_tex_023_03.png',
        to: {
          name: 'OthersAdventBattle',
        },
      },
      {
        label: '',
        imgSrc: 'img/Tips/Texture2D/Tips_Chara_01.png',
        to: {
          name: 'OthersTips',
        },
      },
      {
        label: this.$t('宝文字'),
        imgSrc: 'img/other/Texture2D/item_texture_0020.png',
        to: {
          name: 'OthersTreasureText',
        },
      },
      {
        label: this.$t('チャット'),
        imgSrc: 'img/other/stamp.png',
        to: {
          name: 'OthersChat',
        },
      },
    ];
  }

  public onChangeLocale(locale: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set('locale', locale);
    window.location.href = url.toString();
  }
}
</script>

<style lang="sass" scoped>
.title__container
  margin: 12px
  h2
    color: rgb(153, 122, 79)

.version-link__container
  > span
    padding-right: 4px

.categories__container
  display: flex
  flex-direction: column
  align-items: center
  // margin: 32px

.categories__title-container
  border-radius: 12px
  margin-top: 12px
  text-align: center

.categories
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  // margin: 8px

.category__container
  margin: 12px
  text-align: center
  height: 160px
  border-radius: 40px

.category__link
  padding: 16px
  display: flex
  align-items: center
  flex-direction: column
  text-decoration: none
.category__image
  width: 100px

.strategy-guides
  margin: 12px
  h3
    color: rgb(153, 122, 79)
</style>
