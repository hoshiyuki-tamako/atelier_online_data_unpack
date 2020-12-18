<template lang="pug">
div.container
  AdventureRawDialog(ref="advDialog")
  div.content
    div(v-for="[category, advs] of Object.entries(dataManager.unusedAdvs)")
      el-divider {{ category }}
      div.advs
        div.adv(v-for="adv of advs")
          el-link(@click="$refs.advDialog.openDialogWithAdv([adv])" type="primary" :underline="false") {{ adv }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import AdventureRawDialog from '@/components/AdventureRawDialog.vue';

@Component({
  components: {
    AdventureRawDialog,
  },
})
export default class extends VueBase {
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.advs
  display: flex
  flex-wrap: wrap
  .adv
    padding: 12px
</style>
