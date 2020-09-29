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
    div.filters
      div.filter
        label
          el-switch(v-model="showSideBar" active-color="#13ce66" :active-text="$t('サイドバー')")
      div.filter
        el-switch(v-model="showBackTopButton" :active-text="$t('トップに移動ボタン')")
      div.filter
        el-switch(:value="showHiddenContent" @change="onShowHiddenContent" active-color="#f56c6c" :active-text="$t('ネタバレ')")
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
    h3 {{ $t('他の人の攻略サイト') }}
    br
    div(v-for="page of otherStrategyPages")
      h4 {{ page.title }}
      p(v-for="link of page.links")
        el-link(:href="link.href" target="_blank" rel="noopener") {{ link.href }}
      el-divider
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { dataManager } from '@/utils/DataManager';
import Enumerable from 'linq';
import VueBase from '@/utils/VueBase';
import { mapFields } from 'vuex-map-fields';
import { CharacterType } from '@/store/characters/charactersFilter';
import { SkillKind } from './skills/Skills.vue';

abstract class VueWithMapFields extends VueBase {
  public showSideBar!: boolean;

  public showBackTopButton!: boolean;

  public showHiddenContent!: boolean;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('home', ['showSideBar', 'showBackTopButton', 'showHiddenContent']),
  },
})
export default class extends VueWithMapFields {
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
        title: this.$t('他の資料'),
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
        label: this.$t('ランキング'),
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
    const items = Enumerable.from(dataManager.item.m_vList)
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
      }) as unknown)
      .toArray();

    if (this.showHiddenContent) {
      items.push({
        label: this.$t('未使用アイテム'),
        imgSrc: 'img/icon_item_s/Texture2D/icon_item_s_20020010.png',
        to: {
          name: 'ItemsUnusedItems',
        },
      });
    }

    return items;
  }

  public get pageSkills() {
    return [
      {
        label: this.$t('スキル'),
        imgSrc: 'img/icon/icon_skill_00003.png',
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
        imgSrc: 'img/icon_item_s/Texture2D/icon_item_s_10950010.png',
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
        imgSrc: 'img/icon_item_s/Texture2D/icon_item_s_56010003.png',
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
    const characters = [
      {
        label: this.$t('ランキング'),
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

    if (this.showHiddenContent) {
      characters.push({
        label: this.$t('他のキャラクター'),
        imgSrc: 'img/icon_chara/Texture2D/icon_chara_all_5018_00.png',
        to: {
          name: 'CharactersOtherCharacters',
        },
      });
    }

    return characters;
  }

  public get pageEnemies() {
    return [
      {
        label: this.$t('ランキング'),
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
        imgSrc: 'img/icon/tree.png',
        to: {
          name: 'Areas',
        },
      },
      {
        label: this.$t('クェスト'),
        imgSrc: 'img/other/Texture2D/item_texture_0018.png',
        to: {
          name: 'InfoQuest',
        },
      },
      {
        label: this.$t('ダイアログ'),
        imgSrc: 'img/icon_chara/Texture2D/icon_chara_all_1010_00.png',
        to: {
          name: 'InfoDialog',
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
        label: this.$t('ゾーン'),
        imgSrc: 'img/icon_item_s/Texture2D/icon_item_s_10500014.png',
        to: {
          name: 'InfoZone',
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
        imgSrc: 'img/enemy_tex/Texture2D/enemy_tex_023_03.png',
        to: {
          name: 'OthersAdventBattle',
        },
      },
      {
        label: '',
        imgSrc: 'img/tips/Texture2D/Tips_Chara_01.png',
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

  public get otherStrategyPages() {
    return [
      {
        title: 'ブレセイル観光局',
        links: [
          {
            href: 'https://bresail-kanko.info/index.html',
          },
          {
            href: 'https://twitter.com/bresail_kanko',
          },
          {
            href: 'https://twitter.com/re_dream5',
          },
        ],
      },
      {
        title: 'アトリエオンライン攻略日記〜シャオンのアトリエ〜',
        links: [
          {
            href: 'https://ameblo.jp/shana12151014/',
          },
          {
            href: 'https://twitter.com/_shaon',
          },
        ],
      },
      {
        title: 'かぴ',
        links: [
          {
            href: 'https://twitter.com/kapi_atorie',
          },
        ],
      },
      {
        title: 'アトリエオンライン攻略Wikiまとめ【ブレセイルの錬金術士】',
        links: [
          {
            href: 'https://atelieronline.gamerch.com/',
          },
        ],
      },
      {
        title: '煉金工坊OL 資料庫',
        links: [
          {
            href: 'https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1',
          },
          {
            href: 'https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing',
          },
        ],
      },
    ];
  }

  public onChangeLocale(locale: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('locale', locale);
    window.location.href = url.toString();
  }

  public async onShowHiddenContent(value: boolean) {
    if (value) {
      await this.$confirm(`${this.$t('ネタバレのコンテンツ表示しでよろしいでしか')}?`, '', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      });
    }
    this.showHiddenContent = value;
    window.location.reload();
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
