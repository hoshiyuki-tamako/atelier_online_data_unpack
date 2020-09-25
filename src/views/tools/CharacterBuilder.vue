<template lang="pug">
div
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get dataManager() {
    return dataManager;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
