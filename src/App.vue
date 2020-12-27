<template lang="pug">
el-container.containter-main(v-loading="pageLoading")
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
import VueBase from '@/utils/VueBase';
import sleep from 'sleep-promise';
import ms from 'ms';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public darkMode!: boolean | null;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('home', ['darkMode']),
  },
  metaInfo() {
    return {
      meta: [
        {
          name: 'description',
          content: 'アトリエオンライン 資料庫 攻略 鍊金工房Online',
        },
      ],
    };
  },
})
export default class extends VueWithMapFields {
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

  public get menuItems() {
    return [
      {
        title: this.$t('ホームページ'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_face_3015.png',
        },
        to: {
          name: 'Home',
        },
      },
      {
        title: this.$t('キャラクタービルダー'),
        img: {
          src: 'img/other/Texture2D/item_texture_0024.png',
        },
        to: {
          name: 'ToolsCharacterBuilder',
        },
      },
      {
        title: this.$t('調合アイテム'),
        img: {
          src: 'img/icon/icon_bowl.png',
        },
        to: {
          name: 'ToolsComposeItem',
        },
      },
      {
        title: this.$t('材料強化'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10020003.png',
        },
        to: {
          name: 'ToolsItemEnhanceQuality',
        },
      },
      {
        title: this.$t('アイテム'),
        img: {
          src: 'img/icon_item_s/Texture2D/icon_item_s_10010001.png',
        },
        to: {
          name: 'Items',
        },
      },
      {
        title: this.$t('スキル'),
        img: {
          src: 'img/icon/icon_skill_00003.png',
        },
        to: {
          name: 'Skills',
        },
      },
      {
        title: this.$t('キャラクター'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_face_0002.png',
        },
        to: {
          name: 'Characters',
        },
      },
      {
        title: this.$t('敵'),
        img: {
          src: 'img/icon_chara/Texture2D/icon_chara_all_9999_00.png',
        },
        to: {
          name: 'Enemies',
        },
      },
      {
        title: this.$t('区域'),
        img: {
          src: 'img/icon/tree.png',
        },
        to: {
          name: 'Areas',
        },
      },
      {
        title: this.$t('クェスト'),
        img: {
          src: 'img/other/Texture2D/item_texture_0018.png',
        },
        to: {
          name: 'InfoQuest',
        },
      },
    ];
  }

  // page
  public loading = false;

  public pageLoading = true;

  public async beforeCreate() {
    let retry = 10;
    while (retry-- > 0) {
      try {
        this.$i18n.locale = new URLSearchParams(window.location.search).get('locale') || 'ja-JP';
        document.title = this.$t(document.title).toString();
        await this.dataManager.load(this.$i18n.locale, this.$store.state.home.showHiddenContent);
        this.pageLoading = false;
        retry = 0;
      } catch (e) {
        this.$message.error(e.toString());
        console.error(e);
        await sleep(ms('3s'));
      }
    }
  }

  public created() {
    this.loadDarkMode();
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

  public loadDarkMode() {
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
</style>

<style lang="sass" scoped>
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
