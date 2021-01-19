<template lang="pug">
div.filter
  span {{ title || $t('大事なもの(財貨)') }}
  el-select(v-model="wealth" @change="change" clearable filterable)
    el-option(v-for="item of wealths" :key="item.DF" :label="item.NAME" :value="item.DF")
      img.option-image(:src="item.icon" :alt="item.NAME")
      span.option-text {{ item.NAME }}
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { MVList } from '@/master/wealth';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Array, default: () => [] })
  public wealths!: MVList[];

  @Prop()
  public value!: number | null;

  @Prop({ type: String, default: '' })
  public title!: string;

  public get wealth() {
    return this.value;
  }

  public set wealth(value: number | null) {
    //
  }

  @Emit('change')
  @Emit('input')
  public change(wealth: number | null) {
    return wealth;
  }
}
</script>
