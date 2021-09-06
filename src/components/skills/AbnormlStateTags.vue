<template lang="pug">
div(v-if="states && states.length")
  p(v-if="showTitle")
    b {{ $t(own ? '追加状態(自)' : '追加状態') }}
  p(v-if="dataManager.abnormalStateById[state.id]" v-for="[state, abnormalState] of abnormlStates")
    el-tag(size="small" effect="plain")
      router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('確率%', [(state.rate * 100).toFixed()]) }}
    el-tag(size="small")
      router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.name }}
    template(v-if="abnormalState.effectlist.length" v-for="id of [abnormalState.effectlist.length > 1 ? abnormalState.effectlist[abnormalState.effectlist.length - 1] : abnormalState.effectlist[0]]")
      el-tag(v-if="dataManager.abnormalStateEffectById[id]" size="small" effect="plain")
        router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ $t('数値') }} {{ dataManager.abnormalStateEffectById[id].value }}
    el-tag(size="small" effect="plain")
      router-link(:to="{ name: 'SkillsAbnormalEffect', query: { id: abnormalState.id } }" target="_blank") {{ abnormalState.turn }} {{ $t('ターン') }}
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import VueBase from '@/components/VueBase';
import { State } from '@/master/skill';

@Component({
  components: {
  },
})
export default class extends VueBase {
  @Prop({ type: Array, default: () => [] })
  public states!: State[];

  @Prop({ type: Boolean, default: false })
  public own!: boolean;

  @Prop({ type: Boolean, default: true })
  public showTitle!: boolean;

  private get abnormlStates() {
    return this.states.map((state) => [state, this.dataManager.abnormalStateById[state.id]])
      .filter(([, abnormalState]) => abnormalState);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
