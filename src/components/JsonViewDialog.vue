<template lang="pug">
el-dialog(title="" :lock-scroll="false" top="0" :visible.sync="visible" :fullscreen="true")
  vue-json-pretty(:data="data" selectableType="single")
  div(slot="footer")
    el-button(@click="visible = false" type="primary") {{ $t('閉じる') }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueJsonPretty from 'vue-json-pretty';
import VueBase from '@/components/VueBase';

@Component({
  components: {
    VueJsonPretty,
  },
})
export default class extends VueBase {
  public data: unknown = null;

  public visible = false;

  public open(data: unknown) {
    this.visible = true;
    this.data = data;
  }
}
</script>

<style lang="sass" scoped>
.dialog-character-image
  width: 180px
.dialog-image
  max-width: 100%
</style>
