<template lang="pug">
div.container
  div.content
    el-tabs(v-model="activeTab" type="card")
      el-tab-pane(:label="$t('読み込み中Tips')" name="loadingTips")
        div(v-for="tip of dataManager.tips.LOADING_LIST")
          h3 {{ tip.sTitle }}
          p(v-html="richTextService.richTextToHtml(tip.sContent, { ignoreNewLine: true })")
          br
      el-tab-pane(:label="$t('戦闘Tips')" name="battleTips")
        div(v-for="tip of dataManager.tips.BATTLE_LIST")
          h3 {{ tip.sTitle }}
          p(v-html="richTextService.richTextToHtml(tip.sContent, { ignoreNewLine: true })")
          br
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { RichTextService } from '@/services/RichTextService';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public activeTab = 'loadingTips';

  private richTextService = new RichTextService();
}
</script>
