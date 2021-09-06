<template lang="pug">
div.container
  div.calculation-state
    h3 {{ $t('ステータスの公式') }}
    div
      p G = {{ $t('ゲイン') }}
      p M = {{ $t('マックス') }}
      p R = {{ $t('レベル') }}
      p B = {{ $t('ベース') }}
      p trunc(B + pow(level/R, G) * (M - B))
    br
    h3 {{ $t('サブ装備') }}
    div
      p x = {{ $t('上值') }} * 0.05
      p x {{ '>' }}= 0 ? ceil(x) : floor(x)
    br
    h4 {{ $t('計算') }}
    el-form(label-position="right" label-width="80px")
      el-form-item(label="G")
        el-input-number(v-model="state.g" label="G" placeholder="G" size="mini" :min="0")
      el-form-item(label="M")
        el-input-number(v-model="state.m" placeholder="M" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="R")
        el-input-number(v-model="state.r" label="R" placeholder="R" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="B")
        el-input-number(v-model="state.b" placeholder="B" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="Level")
        el-input-number(v-model="state.level" placeholder="Level" size="mini" :min="0" :step="1" step-strictly)
      el-form-item(label="=")
        el-input.calculate__result(:value="stateResult" size="mini")
      el-form-item(:label="$t('サブ装備')")
        el-input.calculate__result(:value="stateSupportResult" size="mini")

  el-divider
  div
    h3
      span {{ $t('材料 / 装備品質強化') }}
      span &nbsp;
        el-link(@click="onClickTestItemQualityEnhance") {{ $t('試し') }}
    div
      p G = 6.5
      p M = 2500000
      p R = 100
      p B = 10
      p {{ $t('品質経験値') }} = trunc(B + pow(level/R, G) * (M - B))
      p {{ $t('品質') }} = sum({{ $t('品質経験値') }})

  el-divider
  div
    h3
      span {{ $t('装備経験値強化') }}
      span &nbsp;
        el-link(@click="onClickTestItemExperience") {{ $t('試し') }}
    div
      p G = 3
      p M = 20000
      p R = 60
      p B = 1
      p {{ $t('装備経験値') }} = trunc(B + pow(level/R, G) * (M - B))
      p {{ $t('レベル') }} = sum({{ $t('装備経験値') }})

  el-divider
  div.calculation-strength
    div
      p {{ $t('強さ') }} = sum({{ $t('物理攻撃ベース') }} + {{ $t('物理防禦ベース') }} + {{ $t('魔法攻撃ベース') }} + {{ $t('魔法防禦ベース') }})

  el-divider
  div
    p {{ $t('ダメージ') }} = (({{ $t('攻撃') }} * 0.25) - ({{ $t('防禦') }} * 0.125)) * random(0.95,  1.05)
    p {{ $t('スキル') }} {{ $t('ダメージ') }} = {{ $t('上值') }} * {{ $t('スキル') }} / {{ $t('エフェクト') }}

  el-divider
  div.calculation-quality
    div
      p {{ $t('調合品質') }} = clamp(floor(sum({{ $t('品質') }}) / count) + sum({{ $t('品質特性') }}), 1, 100)
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { Formula } from '@/logic/Formula';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public state = {
    g: 1,
    r: 60,
    m: 40,
    b: 6,
    level: 80,
  };

  public get stateFormula() {
    const formula = new Formula();
    formula.G = this.state.g;
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

  //
  public onClickTestItemQualityEnhance() {
    this.$set(this.state, 'g', 6.5);
    this.$set(this.state, 'm', 2500000);
    this.$set(this.state, 'r', 100);
    this.$set(this.state, 'b', 10);
  }

  public onClickTestItemExperience() {
    this.$set(this.state, 'g', 3);
    this.$set(this.state, 'm', 20000);
    this.$set(this.state, 'r', 60);
    this.$set(this.state, 'b', 1);
  }
}
</script>

<style lang="sass" scoped>
.calculate__result
  width: auto
</style>
