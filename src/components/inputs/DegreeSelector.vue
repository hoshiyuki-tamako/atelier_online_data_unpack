<template lang="pug">
div.filter
  span {{ title || $t('称号') }}
  el-select(v-model="degree" @change="change" placeholder="" clearable filterable)
    el-option(v-for="item of degrees" :key="item.DF" :label="item.NAME" :value="item.DF")
      img.option-image(v-if="item.hasIcon" :src="item.icon" alt="")
      span.option-text {{ item.NAME }}
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { List } from '@/master/degree';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Array, default: () => [] })
  public degrees!: List[];

  @Prop()
  public value!: number | null;

  @Prop({ type: String })
  public title!: string;

  public get degree() {
    return this.value;
  }

  public set degree(value: number | null) {
    //
  }

  @Emit('change')
  @Emit('input')
  public change(degree: number | null) {
    return degree;
  }
}
</script>
