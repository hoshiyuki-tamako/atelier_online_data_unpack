<template lang="pug">
el-container.containter-main(v-loading="pageLoading")
  go-top(v-if="showGoTop" :size="40" :bottom="20" :right="20" bg-color="#e0c397" :has-outline="false" :max-width="0")
  el-aside(v-if="$store.state.home.showSideBar" width="")
    el-menu.menu(:active-text-color="menu.activeTextColor" :background-color="menu.backgroundColor" default-active="1" :collapse="true")
      el-menu-item.menu__item(@click="to({ name: 'Home' })" index="1")
        img.menu__home-icon(src="img/icon_chara/Texture2D/icon_chara_face_3015.png" :alt="$t('ホームページ')")
        span(slot="title") {{ $t('ホームページ') }}
      el-menu-item.menu__item(@click="to({ name: 'ToolsCharacterBuilder' })" index="2")
        img.menu__home-icon(src="img/other/Texture2D/item_texture_0024.png" :alt="$t('キャラクタービルダー')")
        span(slot="title") {{ $t('キャラクタービルダー') }}
      el-menu-item.menu__item(@click="to({ name: 'ToolsComposeItem' })" index="3")
        img.menu__home-icon(src="img/icon/icon_bowl.png" :alt="$t('調合アイテム')")
        span(slot="title") {{ $t('調合アイテム') }}
      el-menu-item.menu__item(@click="to({ name: 'Items' })" index="4")
        img.menu__home-icon(src="img/icon_item_s/Texture2D/icon_item_s_10010001.png" :alt="$t('アイテム')")
        span(slot="title") {{ $t('アイテム') }}
      el-menu-item.menu__item(@click="to({ name: 'Skills' })" index="5")
        img.menu__home-icon(src="img/icon/icon_skill_00003.png" :alt="$t('スキル')")
        span(slot="title") {{ $t('スキル') }}
      el-menu-item.menu__item(@click="to({ name: 'Characters' })" index="6")
        img.menu__home-icon(src="img/icon_chara/Texture2D/icon_chara_face_0002.png" :alt="$t('キャラクター')")
        span(slot="title") {{ $t('キャラクター') }}
      el-menu-item.menu__item(@click="to({ name: 'Enemies' })" index="7")
        img.menu__home-icon(src="img/icon_chara/Texture2D/icon_chara_all_9999_00.png" :alt="$t('敵')")
        span(slot="title") {{ $t('敵') }}
      el-menu-item.menu__item(@click="to({ name: 'Areas' })" index="7")
        img.menu__home-icon(src="img/icon/tree.png" :alt="$t('区域')")
        span(slot="title") {{ $t('区域') }}
  el-main.reset
    router-view(v-if="!pageLoading" :key="$route.fullPath")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import sleep from 'sleep-promise';
import ms from 'ms';
import MobileDetect from 'mobile-detect';
import { RawLocation } from 'vue-router';

@Component({
  components: {
  },
})
export default class extends VueBase {
  // go top
  public md = new MobileDetect(window.navigator.userAgent);

  public get showGoTop() {
    return this.md.mobile() || this.md.tablet();
  }

  // menu
  public routeToColor = {
    ToolsCharacterBuilder: '#e0c397',
    ToolsComposeItem: '#e0c397',
  };

  public get menu() {
    const backgroundColor = this.routeToColor[this.$route.name] || '#ffffff';
    return {
      backgroundColor,
      activeTextColor: backgroundColor,
    };
  }

  public to(location: RawLocation) {
    try {
      this.$router.push(location);
    } catch (e) {
      console.error(e);
    }
  }

  // page
  public pageLoading = true;

  public async beforeCreate() {
    let retry = 10;
    while (retry-- > 0) {
      try {
        this.$i18n.locale = new URLSearchParams(window.location.search).get('locale') || 'ja-JP';
        document.title = this.$t(document.title).toString();
        await dataManager.setLocale(this.$i18n.locale);
        this.pageLoading = false;
        retry = 0;
      } catch (e) {
        this.$message.error(e.toString());
        console.error(e);
        await sleep(ms('3s'));
      }
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

*, .reset
  padding: 0
  margin: 0

.container
  margin: 12px

.fbx-container
  width: 100%
  height: 100%
  outline: none
</style>

<style lang="sass" scoped>
.containter-main
  min-height: 100vh
.menu
  height: 100%
.menu__item
  display: flex
  align-items: center
  justify-content: center
.menu__item:hover
  background-color: white !important
.menu__home-icon
  width: 100%
  transform: scale(2)
</style>
