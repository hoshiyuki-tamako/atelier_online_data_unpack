<template lang="pug">
div.title__container
  h2 {{ $t('アトリエオンライン資料庫') }}
  div
    p(v-for="server of DataManager.servers")
      span.version-link__container
        el-popover(v-if="server.endOfServicesDate" placement="right-end" trigger="hover")
          span(slot="reference")
            span(style="text-decoration: line-through") Game Version {{ server.version }} &nbsp;
          div
            span {{ new Intl.DateTimeFormat(dataManager.locale, { dateStyle: 'long' }).format(server.endOfServicesDate) }} {{ $t('サービス終了') }}
        span(v-else) Game Version {{ server.version }} ({{ server.updateDate }})&nbsp;

        template(v-for="(language, i) in server.languages")
          span(v-if="$i18n.locale !== language.locale")
            el-link(type="success" :underline="false" :href="changeLocaleHref(server.id, language.locale)") ({{ language.name }})
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
import { mapFields } from 'vuex-map-fields';
import VueBase from '@/components/VueBase';
import { DataManager } from '@/utils/DataManager';

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
  public get DataManager() {
    return DataManager;
  }

  public changeLocaleHref(serverId: string, locale: string) {
    const url = new URL(window.location.href);
    // url.searchParams.set('serverId', serverId);
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
