<template lang="pug">
div.filter
  span {{ title || $t('スキル') }}
  el-select(v-model="skill" @change="change" placeholder="" clearable filterable)
    el-option(v-for="item of skills" :key="item.id" :label="item.name" :value="item.id")
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { List } from '@/master/skill';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Array, default: () => [] })
  public skills!: List[];

  @Prop()
  public value!: number | null;

  @Prop({ type: String })
  public title!: string;

  public get skill() {
    return this.value;
  }

  public set skill(value: number | null) {
    //
  }

  @Emit('change')
  @Emit('input')
  public change(value: number | null) {
    return value;
  }
}
</script>
