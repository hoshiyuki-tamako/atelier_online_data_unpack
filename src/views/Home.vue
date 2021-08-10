<template lang="pug">
div.container
  InfoHeader
  el-divider
  div
    div.categories__container(v-for="allPage of allPages")
      div.categories__title-container
        h2 {{ allPage.title }}
      div.categories
        div.category__container(v-for="page in allPage.pages")
          router-link.category__link(:to="page.to")
            span(v-if="darkMode") {{ page.label }}
            h3(v-else) {{ page.label }}
            img.category__image(:class="page.img.class" :src="page.img.src" :alt="page.label || page.imgAlt")

  el-divider
  div.strategy-guides
    h3 {{ $t('他のサイト') }}
    br
    div(v-for="(page, i) of otherStrategyPages")
      h4 {{ page.title }}
      p(v-for="link of page.links")
        el-link(:href="link.href" target="_blank" rel="noopener") {{ link.href }}
      el-divider(v-if="otherStrategyPages.length !== (i + 1)")

  el-divider
  div.other-links
    template(v-for="(_otherLinks, i) of otherLinks")
      div(v-for="otherLink of _otherLinks")
        el-link(:href="otherLink.href" target="_blank" rel="noopener") {{ otherLink.title }}
      el-divider(v-if="otherLinks.length !== (i + 1)")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Enumerable from 'linq';
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import InfoHeader from '@/components/home/InfoHeader.vue';
import { CharacterType } from '@/store/characters/charactersFilter';
import { SkillKind } from './skills/Skills.vue';

abstract class VueWithMapFields extends VueBase {
  public showHiddenContent!: boolean;

  public darkMode!: boolean;
}

@Component({
  components: {
    InfoHeader,
  },
  computed: {
    ...mapFields('home', ['showHiddenContent', 'darkMode']),
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
        title: this.$t('装備'),
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
        title: this.$t('地図'),
        pages: this.pageArea,
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
        img: {
          src: 'img/other/Texture2D/item_texture_0024.png',
        },
        to: {
          name: 'ToolsCharacterBuilder',
        },
      },
      {
        label: this.$t('調合アイテム'),
        img: {
          src: 'img/icon/icon_bowl.png',
          class: {
            'compose-item__image': true,
          },
        },
        to: {
          name: 'ToolsComposeItem',
        },
      },
      {
        label: this.$t('材料強化'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10020003.png',
        },
        to: {
          name: 'ToolsItemEnhanceQuality',
        },
      },
      {
        label: this.$t('ブレイズアーツレベリング'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_56010002.png',
        },
        to: {
          name: 'ToolsBlazeArtLeveling',
        },
      },
    ];
  }

  public get pageWeapons() {
    return [
      {
        label: this.$t('装備ランキング'),
        img: {
          src: 'img/other/Texture2D/item_texture_0025.png',
        },
        to: {
          name: 'ToolsEquipmentRanking',
        },
      },
    ].concat(Enumerable.from(this.dataManager.itemsEquipments)
      .groupBy((p) => p.CATEG)
      .orderBy((p) => p.key())
      .select((p) => ({
        label: this.$t(this.dataManager.lookup.itemCategory[p.key()]),
        img: {
          src: p.first().icon,
        },
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
    const items = Enumerable.from(this.dataManager.item.m_vList)
      .where((p) => !p.EQU_BRD)
      .groupBy((p) => p.CATEG)
      .orderBy((p) => p.key())
      .select((p) => ({
        label: this.$t(this.dataManager.lookup.itemCategory[p.key()]),
        img: {
          src: p.first().icon,
        },
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
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_20020010.png',
        },
        to: {
          name: 'ItemsUnusedItems',
        },
      }, {
        label: this.$t('他の投げ物'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10350010.png',
        },
        to: {
          name: 'ItemsThrowables',
        },
      });
    }

    return items;
  }

  public get pageSkills() {
    return [
      {
        label: this.$t('アクティブスキル'),
        img: {
          src: 'img/icon/icon_skill_00003.png',
        },
        to: {
          name: 'Skills',
          query: {
            skillKind: SkillKind.normal,
          },
        },
      },
      {
        label: this.$t('パッシブスキル'),
        img: {
          src: 'img/fx/Texture2D/FX_Skill2005_02.png',
        },
        to: {
          name: 'Skills',
          query: {
            skillKind: SkillKind.effect,
          },
        },
      },
      {
        label: this.$t('強化効果'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10950010.png',
        },
        to: {
          name: 'SkillsAddon',
        },
      },
      {
        label: this.$t('異常状態'),
        img: {
          src: 'img/fx/Texture2D/FX_smoke.png',
        },
        to: {
          name: 'SkillsAbnormalEffect',
        },
      },
      {
        label: this.$t('ブレイズアーツ'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_56010003.png',
        },
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
        label: this.$t('キャラクターランキング'),
        img: {
          src: 'img/other/Texture2D/item_texture_0025.png',
        },
        to: {
          name: 'ToolsCharacterRanking',
        },
      },
      {
        label: this.$t('戦闘キャラクター'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_0001.png',
        },
        to: {
          name: 'Characters',
          query: {
            characterType: CharacterType.battle,
          },
        },
      },
      {
        label: this.$t('NPC'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_3007_00.png',
        },
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
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_20001.png',
        },
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
        label: this.$t('敵ランキング'),
        img: {
          src: 'img/other/Texture2D/item_texture_0025.png',
        },
        to: {
          name: 'ToolsEnemyRanking',
        },
      },
      {
        label: this.$t('敵'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_9999_00.png',
        },
        to: {
          name: 'Enemies',
        },
      },
    ];
  }

  public get pageArea() {
    return [
      {
        label: this.$t('区域'),
        img: {
          src: 'img/icon/tree.png',
        },
        to: {
          name: 'Areas',
        },
      },
      {
        label: this.$t('ダンジョン'),
        img: {
          src: 'img/item_pickup/Texture2D/Item_PickUp002_Stone.png',
        },
        to: {
          name: 'AreasDungeons',
        },
      },
      {
        label: this.$t('他の物'),
        img: {
          src: 'img/item_pickup/Texture2D/Item_PickUp001_Stone.png',
        },
        to: {
          name: 'AreasGimmicks',
        },
      },
    ];
  }

  public get pageInfo() {
    return [
      {
        label: this.$t('クエスト'),
        img: {
          src: 'img/other/Texture2D/item_texture_0018.png',
        },
        to: {
          name: 'InfoQuest',
        },
      },
      {
        label: this.$t('ダイアログ'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_1010_00.png',
        },
        to: {
          name: 'InfoDialog',
        },
      },
      {
        label: this.$t('大事なもの(財貨)'),
        img: {
          src: 'img/icon_item01/Texture2D/icon_item01_00001.png',
        },
        to: {
          name: 'InfoWealth',
        },
      },
      {
        label: this.$t('称号'),
        img: {
          src: 'img/icon_degree/Texture2D/icon_degree_0605.png',
        },
        to: {
          name: 'InfoDegree',
        },
      },
      {
        label: this.$t('課題'),
        img: {
          src: 'img/icon/icon_mission.png',
          class: 'icon-daily-mission',
        },
        to: {
          name: 'InfoDailyMission',
        },
      },
      {
        label: this.$t('トレジャー'),
        img: {
          src: 'img/icon/icon_hunt.png',
        },
        to: {
          name: 'InfoHunt',
        },
      },
      {
        label: this.$t('ゾーン'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10500014.png',
        },
        to: {
          name: 'InfoZone',
        },
      },
    ];
  }

  public get otherPageInfo() {
    return [
      this.showHiddenContent ? {
        label: this.$t('CG'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10350020.png',
        },
        to: {
          name: 'OthersCgs',
        },
      } : null,
      this.showHiddenContent ? {
        label: this.$t('音楽 / ボイス'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10950041.png',
        },
        to: {
          name: 'OthersAudios',
        },
      } : null,
      {
        label: this.$t('計算/公式'),
        img: {
          src: 'img/other/Texture2D/item_texture_0010.png',
        },
        to: {
          name: 'OthersCalculate',
        },
      },
      {
        label: this.$t('降臨バタル(昔)'),
        img: {
          src: 'img/enemy_tex/Texture2D/enemy_tex_023_03.png',
        },
        to: {
          name: 'OthersAdventBattle',
        },
      },
      {
        label: '',
        img: {
          src: 'img/tips/Texture2D/Tips_Chara_01.png',
        },
        imgAlt: 'tips',
        to: {
          name: 'OthersTips',
        },
      },
      {
        label: this.$t('宝文字'),
        img: {
          src: 'img/other/Texture2D/item_texture_0020.png',
        },
        to: {
          name: 'OthersTreasureText',
        },
      },
      {
        label: this.$t('チャット資料'),
        img: {
          src: 'img/other/stamp.png',
        },
        to: {
          name: 'OthersChat',
        },
      },
    ].filter((p) => p);
  }

  public get otherStrategyPages() {
    return [
      {
        title: 'ブレセイル観光局',
        links: [
          {
            href: 'https://bresail-kanko.info',
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
        title: 'アトリエオンライン攻略',
        links: [
          {
            href: 'https://appmedia.jp/atelier-online',
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

  public get otherLinks() {
    return [
      this.otherLinksJp,
      this.otherLinksTw,
      this.otherLinksEn,
    ];
  }

  public get otherLinksJp() {
    return [
      {
        title: 'アトリエ オンライン ～ブレセイルの錬金術士～',
        href: 'https://play.google.com/store/apps/details?id=jp.nhnpa.SJAO',
      },
      {
        title: 'アトリエオンライン',
        href: 'https://atelier-online.jp/',
      },
      {
        title: '【公式】アトリエオンライン',
        href: 'https://twitter.com/ao_forest',
      },
      {
        title: '『アトリエ オンライン』 4コマ漫画まとめ',
        href: 'https://twitter.com/i/events/1037277820232163328',
      },
    ];
  }

  public get otherLinksTw() {
    return [
      {
        title: '鍊金工房 Online ～布雷賽爾的鍊金術士～',
        href: 'https://play.google.com/store/apps/details?id=com.boltrend.ateliertc',
      },
      {
        title: '鍊金工房 Online',
        href: 'https://atelier-online.boltrend.com/zh-tw/preorder',
      },
      {
        title: '鍊金工房 Online Facebook',
        href: 'https://www.facebook.com/AtelieronlineTW',
      },
      {
        title: '鍊金工房 Online 巴哈姆特',
        href: 'https://forum.gamer.com.tw/B.php?bsn=33099',
      },
    ];
  }

  public get otherLinksEn() {
    return [
      {
        title: 'Atelier Online: Alchemist of Bressisle',
        href: 'https://play.google.com/store/apps/details?id=com.boltrend.atelieren',
      },
      {
        title: 'Atelier Online Reddit',
        href: 'https://www.reddit.com/r/AtelierOnlineOfficial',
      },
      {
        title: 'Atelier Online Discord',
        href: 'https://discord.gg/8smHyfwmPM',
      },
    ];
  }

  public changeLocaleHref(locale: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('locale', locale);
    return url.toString();
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
.categories__container
  display: flex
  flex-direction: column
  align-items: center

.categories__title-container
  border-radius: 12px
  margin-top: 12px
  text-align: center

.categories
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center

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
.compose-item__image
  margin-top: 18px

.icon-daily-mission
  width: 80px

.light-mode .strategy-guides, .light-mode .other-links
  margin: 12px
  h3
    color: rgb(153, 122, 79)

.strategy-guides
  overflow-wrap: anywhere
</style>
