<template lang="pug">
div.title__container
  h2 {{ $t('アトリエオンライン資料庫') }}
  div
    p(v-for="server in servers")
      span.version-link__container
        span Game Version {{ server.gameVersion }} ({{ server.updateDate }})&nbsp;
        template(v-for="(language, i) in server.languages")
          span(v-if="$i18n.locale !== language.locale")
            el-link(type="success" :underline="false" :href="changeLocaleHref(server.serverId, language.locale)") ({{ language.name }})
          span(v-else) ({{ language.name }})
          span(v-if="server.languages.length !== (i - 1) ")
  div
    p
      span Twitter &nbsp;
      el-link(href="https://twitter.com/hoshiyuki_git" target="_blank" rel="noopener" type="primary") @hoshiyuki_git
  br
  div.filters
    div.filter
      el-button(@click="settingDialogVisible = true") {{ $t('設定') }}
    div.filter
      el-switch(:value="showHiddenContent" @change="onShowHiddenContent" active-color="#f56c6c" :active-text="$t('ネタバレ')")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public settingDialogVisible!: boolean;

  public showHiddenContent!: boolean;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('home', ['settingDialogVisible', 'showHiddenContent']),
  },
})
export default class extends VueWithMapFields {
  public get servers() {
    return [
      {
        serverId: 'jp',
        gameVersion: '3.15.2',
        updateDate: '2021-05-26',
        languages: [
          {
            name: '日本語',
            locale: 'ja-JP',
          },
        ],
      },
      {
        serverId: 'tw',
        gameVersion: '3.5.0',
        updateDate: '2021-07-29',
        languages: [
          {
            name: '繁體中文',
            locale: 'zh-TW',
          },
          {
            name: '简体',
            locale: 'zh-CN',
          },
        ],
      },
      {
        serverId: 'en',
        gameVersion: '1.0.0',
        updateDate: '2021-08-05',
        languages: [
          {
            name: 'English',
            locale: 'en',
          },
        ],
      },
    ];
  }

  public changeLocaleHref(serverId: string, locale: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('serverId', serverId);
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
.title__container
  margin: 12px
.light-mode .title__container h2
  color: rgb(153, 122, 79)

.version-link__container
  > span
    padding-right: 4px
</style>
