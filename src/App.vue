<template lang="pug">
el-container.containter-main(v-loading="pageLoading")
  go-top(v-if="showGoTop" :size="40" :bottom="20" :right="20" bg-color="#e0c397" :has-outline="false" :max-width="0")
  el-aside(v-if="$store.state.home.showSideBar" width="")
    el-menu.menu(:active-text-color="menu.activeTextColor" :background-color="menu.backgroundColor" default-active="1" :collapse="true")
      el-menu-item.menu__item(@click="$router.push({ name: 'Home' })" index="1")
        img.menu__home-icon(src="img/icon_chara/Texture2D/icon_chara_face_3015.png" :alt="$t('ホームページ')")
  el-main.reset(style="margin: 0; padding: 0")
    router-view(v-if="!pageLoading" :key="$route.fullPath")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import sleep from 'sleep-promise';
import ms from 'ms';
import MobileDetect from 'mobile-detect';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public md = new MobileDetect(window.navigator.userAgent);

  public get showGoTop() {
    return this.md.mobile() || this.md.tablet();
  }

  public get menu() {
    const routeToColor = {
      ToolsCharacterBuilder: '#e0c397',
      ToolsComposeItem: '#e0c397',
    };
    const backgroundColor = routeToColor[this.$route.name] || '#ffffff';
    return {
      backgroundColor,
      get activeTextColor() {
        return this.backgroundColor;
      },
    };
  }

  public pageLoading = true;

  public async beforeCreate() {
    let completed = false;
    while (!completed) {
      try {
        this.$i18n.locale = new URLSearchParams(window.location.search).get('locale') || 'ja-JP';
        document.title = this.$t(document.title).toString();
        await dataManager.setLocale(this.$i18n.locale);
        this.pageLoading = false;
        completed = true;
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
  width: 200%
</style>
