<template lang="pug">
div.container
  div.content
    el-divider {{ $t('読み込み中Tips') }}
    div(v-for="tip of dataManager.tips.LOADING_LIST")
      h3 {{ tip.sTitle }}
      p(v-html="richTextService.richTextToHtml(tip.sContent)")
      br
    el-divider {{ $t('戦闘Tips') }}
    div(v-for="tip of dataManager.tips.BATTLE_LIST")
      h3 {{ tip.sTitle }}
      p(v-html="richTextService.richTextToHtml(tip.sContent)")
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
  private richTextService = new RichTextService();
}
</script>
