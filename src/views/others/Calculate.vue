<template lang="pug">
div.container
  div.calculation-state
    h3 ステータスの公式
    div
      p floor(((M - B)/R) * level + B)
      p R = 目標レベル值
      p M = R レベルのステータス最大值
      p B = ステータス初始值
      p level = アイテムのレベル

    br
    h4 Example
    div
      p 闇夜の盾
      p LV 1 物理攻撃 SATK 6
      p LV 60 物理攻撃 SATK 40
      p R = 60, M = 40, B = 6, 欲しいレベル = 80
      p ((40 - 6)/60) * 80 + 6 = 51.3333333333
      p floor(51.3333333333) = 51
      p LV 80 物理攻撃 SATK = 51

    br
    h3 サブ裝備
    div
      p x = 上值 * 0.05
      p x &gt;= 0 ? ceil(x) : floor(x)

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
        el-input(:value="stateResult" size="mini" style="width: auto")
      el-form-item(label="サブ裝備")
        el-input(:value="stateSupportResult" size="mini" style="width: auto")

  el-divider
  div.calculation-strength
    h3 強さ
    div
      p sum(物攻base + 物防base + 魔攻base + 魔防base)

  el-divider
  div.calculation-quality
    h3 調合品質
    div
      p clamp(floor(sum(品質) / count) + sum(品質特性), 1, max)
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
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

  public get dataManager() {
    return dataManager;
  }
}
</script>
