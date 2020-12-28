<template lang="pug">
div.container
  div.content
    el-divider {{ $t('読み込み中Tips') }}
    div(v-for="tip of dataManager.tips.LOADING_LIST")
      p {{ tip.sTitle }}
      p {{ tip.sContent }}
      br
    el-divider {{ $t('戦闘Tips') }}
    div(v-for="tip of dataManager.tips.BATTLE_LIST")
      p {{ tip.sTitle }}
      p {{ tip.sContent }}
      br
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';

@Component({
  components: {
  },
})
export default class extends VueBase {
}
</script>
