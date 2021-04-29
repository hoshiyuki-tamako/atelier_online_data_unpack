<template lang="pug">
div.container
  div.content
    img(:src="`${dataManager.serverId}/img/icon/icon_stamp.png`" alt="stamp")
    table
      tr(v-for="chat of dataManager.chat.List")
        td {{ eChatTab[chat.eTab] }}
        td(v-if="chat.eTab === eChatTab.Stamp") {{ chat.iStampId }}
        td(v-else) {{ chat.strMessage }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { eChatTab } from '@/logic/Enums';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get eChatTab() {
    return eChatTab;
  }
}
</script>

<style lang="sass" scoped>
th
  white-space: nowrap
td
  text-align: center
th, td
  padding: 4px
  border-bottom: 1px solid black
</style>
