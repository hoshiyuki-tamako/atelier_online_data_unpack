<template lang="pug">
div.title__container
  h2 {{ $t('アトリエオンライン資料庫') }}
  p
    span.version-link__container
      span
        span Game Version 3.15.2 (2021-03-24) &nbsp;
        span(v-if="$i18n.locale !== 'ja-JP'")
          el-link(type="success" :underline="false" :href="changeLocaleHref('ja-JP')") (日本語)
        span(v-else) (日本語)
    br
    span.version-link__container
      span Game Version 3.5.0 (2021-04-30) &nbsp;
        span(v-if="$i18n.locale !== 'zh-TW'")
          el-link(type="success" :underline="false" :href="changeLocaleHref('zh-TW')") (繁體中文)
        span(v-else) (繁體中文)
      template
        span &nbsp;
          span(v-if="$i18n.locale !== 'zh-CN'")
            el-link(type="success" :underline="false" :href="changeLocaleHref('zh-CN')") (简体)
          span(v-else) (简体)
    br
    span.version-link__container
      span Game Version 1.0.0 (2021-04-08) &nbsp;
        span(v-if="$i18n.locale !== 'en'")
          el-link(type="success" :underline="false" :href="changeLocaleHref('en')") (English)
        span(v-else) (English)
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
.title__container
  margin: 12px
.light-mode .title__container h2
  color: rgb(153, 122, 79)

.version-link__container
  > span
    padding-right: 4px
</style>
