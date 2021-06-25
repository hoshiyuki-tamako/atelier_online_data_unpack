<template lang="pug">
div.filter
  span(v-if="showTitle") {{ $t('キャラクター') }}
  el-select(v-model="character" @change="change" :clearable="clearable" placeholder="" filterable)
    el-option(v-for="(item, i) of characters" :key="i" :label="item.NAME" :value="item.DF")
      img.option-image(v-if="item.hasFaceIcon" :src="item.faceIcon" :alt="item.NAME")
      img.option-image(v-else-if="item.hasIcon" :src="item.icon" :alt="item.NAME")
      span.option-text {{ item.NAME }}
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { MVList } from '@/master/chara';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Array, default: () => [] })
  public characters!: MVList[];

  @Prop()
  public value!: number | null;

  @Prop({ type: Boolean, default: true })
  public showTitle!: boolean;

  @Prop({ type: Boolean, default: true })
  public clearable!: boolean;

  public get character() {
    return this.value;
  }

  public set character(value: number | null) {
    //
  }

  @Emit('change')
  @Emit('input')
  public change(character: number | null) {
    return character;
  }
}
</script>
