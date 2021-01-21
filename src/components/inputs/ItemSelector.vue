<template lang="pug">
div.filter
  span {{ $t('アイテム') }}
  el-select(v-model="item" @change="change" clearable filterable)
    el-option(v-for="item of items" :key="item.DF" :label="item.NAME" :value="item.DF")
      img.option-image(:src="item.icon" :alt="item.NAME")
      span.option-text {{ item.NAME }}
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { MVList } from '@/master/item';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Array, default: () => [] })
  public items!: MVList[];

  @Prop()
  public value!: number | null;

  public get item() {
    return this.value;
  }

  public set item(value: number | null) {
    //
  }

  @Emit('change')
  @Emit('input')
  public change(value: number | null) {
    return value;
  }
}
</script>
