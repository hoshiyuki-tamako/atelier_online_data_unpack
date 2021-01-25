<template lang="pug">
el-container.containter-main(v-loading="pageLoading")
  el-dialog(title="" :visible.sync="settingDialogVisible" width="80%" :fullscreen="!!(md.mobile() || md.tablet())" @close="onCloseSettingDialog")
    div.filters
      div.filter
        el-button(@click="onResetSetting" type="danger" icon="el-icon-refresh-left" size="small" :aria-label="$t('セッティングリセット')" round)
      div.filter
        el-switch(v-model="showSideBar" active-color="#13ce66" :active-text="$t('サイドバー')")
      div.filter
        el-switch(v-model="showBackTopButton" :active-text="$t('トップに移動ボタン')")
      div.filter
        el-switch(:value="darkMode" @change="onDarkMode" active-color="#13ce66" :active-text="$t('ダークモード')")
      div.filter
        el-switch(:value="showHiddenContent" @change="onShowHiddenContent" active-color="#f56c6c" :active-text="$t('ネタバレ')")
    el-divider {{ $t('サイドバー') }}
    div.filters
      div.filter
        el-button(@click="onClickResetSidbar" type="warning" icon="el-icon-refresh-left" size="small" :aria-label="$t('リセット')" round)
      div.filter
        el-button(@click="onClickAllSidebar" type="primary" icon="el-icon-d-arrow-left" size="small" :aria-label="$t('すべてのサイドアイテム')" round)
    div.sidebar-setting-container
      draggable.sidebar-setting-items(v-model="menuItems" group="sidebar" filter=".sidebar-item-fixed" :multiDrag="draggableOptions.multiDrag" :animation="draggableOptions.animation" :ghostClass="draggableOptions.ghostClass" :selectedClass="draggableOptions.selectedClass")
        el-card(v-for="menuItem of menuItems" :class="{ 'sidebar-item-fixed': menuItem.id === 1 }" :key="menuItem.id")
          div.sidebar-setting-item
            img.icon-small(:src="menuItem.img.src" :alt="menuItem.title")
            span.sidebar-setting-item__text {{ menuItem.title }}
      draggable.sidebar-setting-items(v-model="menuItemOptions" group="sidebar" :multiDrag="draggableOptions.multiDrag" :animation="draggableOptions.animation" :ghostClass="draggableOptions.ghostClass" :selectedClass="draggableOptions.selectedClass")
        el-card(v-for="menuItem of menuItemOptions" :key="menuItem.id")
          div.sidebar-setting-item
            img.icon-small(:src="menuItem.img.src" :alt="menuItem.title")
            span.sidebar-setting-item__text {{ menuItem.title }}
    div(slot="footer")
      el-button(@click="settingDialogVisible = false" type="primary") {{ $t('閉じる') }}

  el-backtop.back-top(v-if="$store.state.home.showBackTopButton")
  el-aside(v-if="$store.state.home.showSideBar" width="")
    el-menu.menu(:active-text-color="menu.activeTextColor" :background-color="menu.backgroundColor" default-active="1" :collapse="true")
      el-menu-item.menu__item(v-for="(menuItem, i) of menuItems" :key="menuItem.to.name" :index="i.toString()")
        span(slot="title") {{ menuItem.title }}
        router-link.menu__link(:to="menuItem.to")
          img.menu__icon(:src="menuItem.img.src" :alt="menuItem.title")
  el-main.reset(v-loading="loading")
    router-view(v-if="!pageLoading" :key="$route.fullPath")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import sleep from 'sleep-promise';
import ms from 'ms';
import { mapFields } from 'vuex-map-fields';
import { sify } from 'chinese-conv';
import MobileDetect from 'mobile-detect';
import draggable from 'vuedraggable';
import VueBase from '@/components/VueBase';
import { TranslateMutationObserver } from 'translate-mutation-observer';
import { defaultMenuItemIds } from './store/home';

abstract class VueWithMapFields extends VueBase {
  public settingDialogVisible!: boolean;

  public showSideBar!: boolean;

  public showBackTopButton!: boolean;

  public showHiddenContent!: boolean;

  public darkMode!: boolean | null;

  public menuItemIds!: number[];
}

@Component({
  components: {
    draggable,
  },
  computed: {
    ...mapFields('home', ['settingDialogVisible', 'showSideBar', 'showBackTopButton', 'showHiddenContent', 'darkMode', 'menuItemIds']),
  },
  metaInfo() {
    return {
      meta: [
        {
          name: 'description',
          content: this.$t('アトリエオンライン 資料庫 攻略'),
        },
      ],
    };
  },
})
export default class extends VueWithMapFields {
  public md = new MobileDetect(window.navigator.userAgent);

  // menu
  public routeToColor = {
    ToolsCharacterBuilder: '#e0c397',
    ToolsComposeItem: '#e0c397',
    ToolsItemEnhanceQuality: '#e0c397',
    ToolsBlazeArtLeveling: '#e0c397',
    AreasArea: '#2F4F4F',
  };

  public get menu() {
    const backgroundColor = this.darkMode ? '' : this.routeToColor[this.$route.name] || '';
    return {
      backgroundColor,
      activeTextColor: backgroundColor,
    };
  }

  public draggableOptions = {
    multiDrag: true,
    animation: 150,
    ghostClass: 'sidebar-on-drag',
    selectedClass: 'sidebar-on-drag',
  };

  public get allMenuItems() {
    return [
      {
        id: 1,
        title: this.$t('ホームページ'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_face_3015.png',
        },
        to: {
          name: 'Home',
        },
      },
      {
        id: 2,
        title: this.$t('キャラクタービルダー'),
        img: {
          src: 'img/other/Texture2D/item_texture_0024.png',
        },
        to: {
          name: 'ToolsCharacterBuilder',
        },
      },
      {
        id: 3,
        title: this.$t('調合アイテム'),
        img: {
          src: 'img/icon/icon_bowl.png',
        },
        to: {
          name: 'ToolsComposeItem',
        },
      },
      {
        id: 4,
        title: this.$t('材料強化'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10020003.png',
        },
        to: {
          name: 'ToolsItemEnhanceQuality',
        },
      },
      {
        id: 5,
        title: this.$t('ブレイズアーツレベリング'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_56010002.png',
        },
        to: {
          name: 'ToolsBlazeArtLeveling',
        },
      },
      {
        id: 6,
        title: this.$t('装備ランキング'),
        img: {
          src: 'img/other/Texture2D/item_texture_0025.png',
        },
        to: {
          name: 'ToolsEquipmentRanking',
        },
      },
      {
        id: 7,
        title: this.$t('アイテム'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10010001.png',
        },
        to: {
          name: 'Items',
        },
      },
      {
        id: 8,
        title: this.$t('未使用アイテム'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_20020010.png',
        },
        to: {
          name: 'ItemsUnusedItems',
        },
      },
      {
        id: 9,
        title: this.$t('他の投げ物'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10350010.png',
        },
        to: {
          name: 'ItemsThrowables',
        },
      },
      {
        id: 10,
        title: this.$t('スキル'),
        img: {
          src: 'img/icon/icon_skill_00003.png',
        },
        to: {
          name: 'Skills',
        },
      },
      {
        id: 11,
        title: this.$t('強化効果'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10950010.png',
        },
        to: {
          name: 'SkillsAddon',
        },
      },
      {
        id: 12,
        title: this.$t('異常状態'),
        img: {
          src: 'img/fx/Texture2D/FX_smoke.png',
        },
        to: {
          name: 'SkillsAbnormalEffect',
        },
      },
      {
        id: 13,
        title: this.$t('キャラクターランキング'),
        img: {
          src: 'img/other/Texture2D/item_texture_0025.png',
        },
        to: {
          name: 'ToolsCharacterRanking',
        },
      },
      {
        id: 14,
        title: this.$t('キャラクター'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_face_0002.png',
        },
        to: {
          name: 'Characters',
        },
      },
      {
        id: 15,
        title: this.$t('敵'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_9999_00.png',
        },
        to: {
          name: 'Enemies',
        },
      },
      {
        id: 16,
        title: this.$t('区域'),
        img: {
          src: 'img/icon/tree.png',
        },
        to: {
          name: 'Areas',
        },
      },
      {
        id: 17,
        title: this.$t('クエスト'),
        img: {
          src: 'img/other/Texture2D/item_texture_0018.png',
        },
        to: {
          name: 'InfoQuest',
        },
      },
      {
        id: 18,
        title: this.$t('ダイアログ'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_1010_00.png',
        },
        to: {
          name: 'InfoDialog',
        },
      },
      {
        id: 19,
        title: this.$t('大事なもの(財貨)'),
        img: {
          src: 'img/icon_item01/Texture2D/icon_item01_00001.png',
        },
        to: {
          name: 'InfoWealth',
        },
      },
      {
        id: 20,
        title: this.$t('称号'),
        img: {
          src: 'img/icon_degree/Texture2D/icon_degree_0605.png',
        },
        to: {
          name: 'InfoDegree',
        },
      },
      {
        id: 21,
        title: this.$t('課題'),
        img: {
          src: 'img/icon/icon_mission.png',
        },
        to: {
          name: 'InfoDailyMission',
        },
      },
      {
        id: 22,
        title: this.$t('トレジャー'),
        img: {
          src: 'img/icon/icon_hunt.png',
        },
        to: {
          name: 'InfoHunt',
        },
      },
      {
        id: 23,
        title: this.$t('ゾーン'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10500014.png',
        },
        to: {
          name: 'InfoZone',
        },
      },
      {
        id: 24,
        title: this.$t('計算/公式'),
        img: {
          src: 'img/other/Texture2D/item_texture_0010.png',
        },
        to: {
          name: 'OthersCalculate',
        },
      },
      {
        id: 25,
        title: this.$t('音楽 / ボイス'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10950041.png',
        },
        to: {
          name: 'OthersAudios',
        },
      },
      {
        id: 26,
        title: this.$t('降臨バタル(昔)'),
        img: {
          src: 'img/enemy_tex/Texture2D/enemy_tex_023_03.png',
        },
        to: {
          name: 'OthersAdventBattle',
        },
      },
      {
        id: 27,
        title: 'Tips',
        img: {
          src: 'img/tips/Texture2D/Tips_Chara_01.png',
        },
        to: {
          name: 'OthersTips',
        },
      },
      {
        id: 28,
        title: this.$t('宝文字'),
        img: {
          src: 'img/other/Texture2D/item_texture_0020.png',
        },
        to: {
          name: 'OthersTreasureText',
        },
      },
      {
        id: 29,
        title: this.$t('チャット資料'),
        img: {
          src: 'img/other/stamp.png',
        },
        to: {
          name: 'OthersChat',
        },
      },
    ];
  }

  public menuItemOptions = null;

  public get menuItems() {
    return [1].concat(this.menuItemIds).map((id) => this.allMenuItems.find((p) => p.id === id));
  }

  public set menuItems(items: { id: number }[]) {
    this.menuItemIds = [...new Set(items.map(({ id }) => id))].filter((id) => !(id === 1 || id === 25));
  }

  public onClickAllSidebar() {
    this.menuItems = this.allMenuItems;
    this.resetMenuItemOptions();
  }

  public async onClickResetSidbar() {
    await this.$confirm(`${this.$t('サイドバーセッティングリセットよろしいでしか')}?`, '', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    });
    this.menuItemIds = defaultMenuItemIds;
    this.resetMenuItemOptions();
  }

  private resetMenuItemOptions() {
    this.menuItemOptions = this.allMenuItems.filter(({ id }) => !(id === 1 || id === 25 || this.menuItemIds.includes(id)));
  }

  // settings
  public settingChangeRequireReload = false;

  public async onResetSetting() {
    await this.$confirm(`${this.$t('セッティングリセットよろしいでしか')}?`, '', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    });
    await Promise.all([
      this.$store.dispatch('home/reset'),
      this.$store.dispatch('characterRankingFilter/reset'),
      this.$store.dispatch('enemyRankingFilter/reset'),
      this.$store.dispatch('equipmentRankingFilter/reset'),
      this.$store.dispatch('skillsFilter/reset'),
      this.$store.dispatch('itemsFilter/reset'),
      this.$store.dispatch('enemiesFilter/reset'),
      this.$store.dispatch('charactersFilter/reset'),
      this.$store.dispatch('composeItemFilter/reset'),
      this.$store.dispatch('itemEnhanceQuality/reset'),
      this.$store.dispatch('questsFilter/reset'),
      this.$store.dispatch('adventBattleFilter/reset'),
      this.$store.dispatch('blazeArtLeveling/reset'),
    ]);
    window.location.reload();
  }

  public async onShowHiddenContent(value: boolean) {
    this.settingChangeRequireReload = true;
    this.showHiddenContent = value;
  }

  public onDarkMode(value: boolean) {
    this.settingChangeRequireReload = true;
    this.darkMode = value;
  }

  public onCloseSettingDialog() {
    if (this.settingChangeRequireReload) {
      this.settingChangeRequireReload = false;
      window.location.reload();
    }
  }

  // page
  public loading = false;

  public pageLoading = true;

  public async beforeCreate() {
    this.dataManager.locale = new URLSearchParams(window.location.search).get('locale');
    this.$i18n.locale = this.dataManager.locale;
    document.title = this.$t(document.title).toString();

    if (this.$i18n.locale === 'zh-CN') {
      const titles = document.getElementsByTagName('title');
      const translateMutationObserver = TranslateMutationObserver.n(sify, { targets: [document.body, ...titles] });
      translateMutationObserver.translate(titles as never);
    }

    let retry = 10;
    while (retry-- > 0) {
      try {
        await this.dataManager.load(this.$store.state.home.showHiddenContent);
        this.pageLoading = false;
        retry = 0;
      } catch (e) {
        console.error(e);
        this.$message.error(e.toString());
        await sleep(ms('3s'));
      }
    }
  }

  public created() {
    this.loadDarkMode();
    this.settingDialogVisible = false;
    this.resetMenuItemOptions();
  }

  public beforeMount() {
    this.$router.beforeEach((from, to, next) => {
      this.loading = true;
      next();
    });
    this.$router.afterEach(() => {
      this.loading = false;
    });
  }

  private loadDarkMode() {
    this.darkMode ??= window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', 'css/element-theme-dark/index.css');
      document.head.appendChild(link);
    } else {
      document.body.classList.add('light-mode');
    }
  }
}
</script>

<style lang="sass">
@import "./design/styles/filter.sass"
@import "./design/styles/icon.sass"
@import "./design/styles/item.sass"
@import "./design/styles/popover.sass"
@import "./design/styles/wealth.sass"
@import "./design/styles/degree.sass"
@import "./design/styles/vue-select.sass"
@import "./design/styles/element-ui.sass"
@import "./design/styles/option.sass"

*, .reset
  padding: 0
  margin: 0

.el-main
  padding: 0 !important

.container
  margin: 12px

.item-fbx-container
  width: 100%
  height: 100%
  outline: none

.item-has-3d
  cursor: pointer

.skill-table
  th
    width: 110px

.dark-mode a
  color: #409EFF

@media (prefers-color-scheme: dark)
  body
    background: #222933
  body.light-mode
    background: initial
  .menu
    background: #222933
  .light-mode .menu
    background: initial
</style>

<style lang="sass" scoped>
.sidebar-on-drag
  background-color: #F5F7FA

.dark-mode .sidebar-on-drag
  background-color: rgba(255, 255, 255, 0.1)

.sidebar-setting-container
  display: flex
  flex-wrap: nowrap
.sidebar-setting-items
  margin: 4px
  padding: 4px
.sidebar-setting-item
  display: flex
  align-items: center
.sidebar-setting-item__text
  margin-left: 4px

.containter-main
  min-height: 100vh

.back-top
  background: #e0c397
  color: white
  width: 40px
  height: 40px

.dark-mode .back-top
  background: #313846
  color: #222933

.menu
  height: 100%
.menu__item
  display: flex
  align-items: center
  justify-content: center
.menu__item:hover
  background-color: white !important
.menu__link
  display: flex
  justify-content: center
  align-items: center
  height: 100%
.menu__icon
  width: 100%
  transform: scale(2)

.dark-mode .menu__item:hover
  background-color: rgba(255, 255, 255, .1) !important
</style>
