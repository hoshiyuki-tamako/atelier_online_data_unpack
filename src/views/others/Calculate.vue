<template lang="pug">
div.container
  div.calculation-state
    h3 ステータスの公式
    div
      p floor(((M - B)/R) * level + B)
      br
      p R = 目標レベル值
      p M = R レベルのステータス最大值
      p B = ステータス初始值
      p level = アイテムのレベル

    br
    h4 Example
    div
      p 闇夜の盾
      p LV 1 {{ $t('物理攻撃') }} SATK 6
      p LV 60 {{ $t('物理攻撃') }} SATK 40
      p R = 60, M = 40, B = 6, 欲しいレベル = 80
      p ((40 - 6)/60) * 80 + 6 = 51.3333333333
      p floor(51.3333333333) = 51
      p LV 80 {{ $t('物理攻撃') }} SATK = 51

    br
    h3 {{ $t('サブ装備') }}
    div
      p x = 上值 * 0.05
      p x {{ '>' }}= 0 ? ceil(x) : floor(x)

    br
    h4 計算
    el-form(label-position="right" label-width="80px")
      el-form-item(label="R")
        el-input-number(v-model="state.r" label="R" placeholder="R" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="M")
        el-input-number(v-model="state.m" placeholder="M" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="B")
        el-input-number(v-model="state.b" placeholder="B" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="Level")
        el-input-number(v-model="state.level" placeholder="Level" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="=")
        el-input.calculate__result(:value="stateResult" size="mini")
      el-form-item(:label="$t('サブ装備')")
        el-input.calculate__result(:value="stateSupportResult" size="mini")

  el-divider
  div.calculation-strength
    h3 {{ $t('強さ') }}
    div
      p {{ $t('強さ') }} = sum({{ $t('物理攻撃') }}{{ $t('ベース') }} + {{ $t('物理防禦') }}{{ $t('ベース') }} + {{ $t('魔法攻撃') }}{{ $t('ベース') }} + {{ $t('魔法防禦') }}{{ $t('ベース') }})

  el-divider
  div.calculation-quality
    h3 {{ $t('調合') }}{{ $t('品質') }}
    div
      p {{ $t('調合') }}{{ $t('品質') }} = clamp(floor(sum({{ $t('品質') }}) / count) + sum({{ $t('品質特性') }}), 1, 100)

  el-divider
  div
    h3 {{ $t('材料強化') }}
    div
      p sum({{ $t('品質') }}{{ $t('経験値') }})
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { Formula } from '@/logic/Formula';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public state = {
    r: 60,
    m: 40,
    b: 6,
    level: 80,
  };

  public get stateFormula() {
    const formula = new Formula();
    formula.R = this.state.r;
    formula.M = this.state.m;
    formula.B = this.state.b;
    return formula;
  }

  public get stateResult() {
    return this.stateFormula.getValue(this.state.level);
  }

  public get stateSupportResult() {
    return this.stateFormula.getSupportValue(this.state.level);
  }
}
</script>

<style lang="sass" scoped>
.calculate__result
  width: auto
</style>
