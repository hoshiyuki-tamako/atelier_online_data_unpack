<template lang="pug">
div
  el-dialog(title="" :visible.sync="itemPickerDialogVisible" fullscreen)
    div.item-picker-container
      div.filters
        div.filter
          el-select.compose-input--size(v-model="itemPickerCategory" :placeholder="$t('種類')" filterable clearable)
            el-option(v-for="item in itemCategories" :key="item.value" :label="item.label" :value="item.value")
        div.filder
          el-input(v-model="itemPickerKeyword" :placeholder="`${$t('名前')}/DF`" clearable)
      div.item-picker-items
        div(v-for="item in filteredItems" @click="onPickItem(item)")
          p {{ item.NAME }}
          img.icon-small(:src="item.icon" :alt="item.NAME")

  el-dialog(title="" :visible.sync="exportComposeItemUrlVisible")
    el-input(type="textarea" :value="href" autosize)

  //- div.filters
  //-   div.filter
  //-     span {{ $t('品質') }}
  //-     el-input-number(v-model="allQuality" size="small" :min="1" :max="100" :step="1" step-strictly)
  //-     el-button(@click="onClickSetAllQuality" type="primary" size="small") {{ $t('まとめで設定') }}

  div.compose-container
    div.compose-material-container
      div.compose-material-top
        div.compose-material(v-for="(material, i) of materials")
          v-popover(placement="right-end" trigger="hover")
            div
              el-input-number.compose-input--size(v-model="materialOptions[i].quality" :min="1" :max="100" :placeholder="$t('品質')" size="small")
            div
              el-select.compose-input--size(v-model="materialOptions[i].addonQuality" :placeholder="$t('品質特性')" size="small" filterable)
                el-option(v-for="v in new Array(16).keys()" :key="v" :label="`${$t('品質特性')} ${v}`" :value="v")
            div
              img(:src="material.icon" :alt="material.NAME")
            template(slot="popover")
              div.popover-base.item-popover
                router-link(:to="{ name: 'ItemsItem', query: { df: material.DF, quality: materialOptions[i].quality } }" target="_blank") {{ material.NAME }}
                p {{ material.DESC }}
                router-link(v-if="material.RSP.length" :to="{ name: 'ToolsComposeItem', query: { df: material.DF, quality: materialOptions[i].quality } }" target="_blank") {{ $t('調合') }}

      div.compose-item(@click="itemPickerDialogVisible = true")
        div.compose-requirement
          p(v-for="pickedItem in [compose]")
            el-tooltip(:content="dataManager.wealthById[2].NAME" placement="right")
              span.wealth-container(v-if="pickedItem.ALT && pickedItem.ALT.CST")
                img(src="img/icon_item01/Texture2D/icon_item01_00002.png" :alt="dataManager.wealthById[2].NAME")
                span {{ pickedItem.ALT.CST }}

        v-popover(placement="right-end" trigger="hover")
          div.compose-item-image
            img(:src="compose.icon" :alt="compose.NAME")
          template(slot="popover")
            div.popover-base.item-popover
              router-link(:to="{ name: 'ItemsItem', query: { df: compose.DF, quality: composeQuality } }" target="_blank") {{ compose.NAME }}
              p {{ compose.DESC }}

    div.compose-result
      h3 {{ $t('品質') }} {{ composeQuality }}
      h4 {{ compose.NAME }}
      div.compose-result-image-container
        img.compose-result-image(@click="itemPickerDialogVisible = true" :src="compose.icon" :alt="compose.NAME")
      div.compose-result-export
        el-button(@click="exportComposeItemUrlVisible = true" type="primary" circle) URL
      div.compose-result-skill(v-for="(skill, i) in compose.getSkills(composeQuality)")
        table
          tr
            th {{ $t('名前') }}
            td
              router-link(:to="{ name: 'Skills', query: { id: skill.id } }" target="_blank") {{ skill.name }}
          tr
            th {{ $t('詳細') }}
            td {{ skill.detail }}
          tr
            th {{ $t('数値') }}
            td {{ skill.effectValue }}, {{ skill.effectValue2 }}
          template(v-if="skill.type === 1")
            tr
              th {{ $t('攻撃タイプ') }}
              td {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
            tr
              th {{ $t('属性') }}
              td {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }}
            tr
              th {{ $t('對象') }}
              td {{ $t(dataManager.lookup.targetTeam[skill.attackSkill.targetTeam]) }}{{ $t(dataManager.lookup.eFieldItemRange[skill.attackSkill.targetScope]) }}
            tr(v-if="skill.attackSkill.stateOwn.length")
              th {{ $t('追加状態 (自)') }}
              td
                p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}
            tr(v-if="skill.attackSkill.state.length")
              th {{ $t('追加状態') }}
              td
                p(v-for="[state, abnormalState] of skill.attackSkill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}
        p(v-if="compose.getSkills(composeQuality).length !== (i + 1)") {{ '>' }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { clamp } from 'lodash';
import { MVList as ItemMVList } from '@/master/item';
import { MaterialOptions } from '@/store/tools/composeItemFilter';
import { mapFields } from 'vuex-map-fields';

abstract class VueWithMapFields extends VueBase {
  public itemDf!: number;

  public allQuality!: number;

  public itemPickerCategory!: number | null;

  public itemPickerKeyword!: string;
}

@Component({
  components: {
  },
  computed: {
    ...mapFields('composeItemFilter', ['itemDf', 'allQuality']),
    ...mapFields('composeItemFilter', {
      itemPickerCategory: 'itemPicker.category',
      itemPickerKeyword: 'itemPicker.keyword',
    }),
  },
})
export default class extends VueWithMapFields {
  public get href() {
    return window.location.href.replace(window.location.hash, '') + this.$router.resolve({ name: 'ToolsComposeItem', query: { df: this.compose.DF.toString(), materialOptions: this.materialOptionsExport } }).href;
  }

  public get materialOptions() {
    return this.$store.state.composeItemFilter.materialOptions;
  }

  public set materialOptions(value) {
    this.$store.commit('composeItemFilter/updateMaterialOptions', value);
  }

  public get materialOptionsExport() {
    return btoa(JSON.stringify(this.materialOptions));
  }

  public materials = [] as ItemMVList[];

  // dialog
  public itemPickerDialogVisible = false;

  // export
  public exportComposeItemUrlVisible = false;

  public get compose() {
    const compose = this.dataManager.itemById[this.itemDf];
    if (!compose) {
      this.itemDf = this.dataManager.itemsHasRecipe[0].DF;
      return this.dataManager.itemById[this.itemDf];
    }
    return compose;
  }

  public set compose(value: ItemMVList) {
    this.itemDf = value?.DF || this.dataManager.itemsHasRecipe[0].DF;
  }

  public get itemCategories() {
    return this.dataManager.itemsCategoriesHasRecipe.map((value) => ({
      label: this.$t(this.dataManager.lookup.itemCategory[value]),
      value: +value,
    }));
  }

  public get filteredItems() {
    return this.dataManager.itemsHasRecipe.filter((p) => (
      (!this.itemPickerKeyword || p.DF === +this.itemPickerKeyword || p.NAME.toLocaleLowerCase().includes(this.itemPickerKeyword.toLocaleLowerCase()))
      && (!this.itemPickerCategory || p.CATEG === this.itemPickerCategory)
    ));
  }

  public get composeQuality() {
    if (!this.materialOptions.length) {
      return 0;
    }

    const sumQuality = this.materialOptions.reduce((sum, p) => sum + p.quality, 0);
    const sumAddonQuality = this.materialOptions.reduce((sum, p) => sum + p.addonQuality, 0);
    return clamp(Math.floor((sumQuality / this.materialOptions.length) + sumAddonQuality), 1, 100);
  }

  public beforeMount() {
    try {
      if (this.$route.query.df) {
        const item = this.dataManager.itemById[this.$route.query.df as string];
        if (item) {
          if (this.dataManager.itemsHasRecipe.some((p) => p.DF === item.DF)) {
            this.onPickItem(item, +this.$route.query.quality);
            if (this.$route.query.materialOptions) {
              const materialOptions = JSON.parse(atob(this.$route.query.materialOptions as string));
              for (const [i, materialOption] of this.materialOptions.entries()) {
                const thatOption = materialOptions[i] || materialOption;
                materialOption.quality = thatOption.quality || materialOption.quality;
                materialOption.addonQuality = thatOption.addonQuality || materialOption.addonQuality;
              }
            }
            return;
          }
        }
      }
    } catch (e) {
      this.$message.error(e.toString());
      console.error(e);
    }

    try {
      if (this.compose) {
        const options = this.materialOptions;
        this.onPickItem(this.compose);
        if (this.materialOptions.length === options.length) {
          this.materialOptions = options;
        }
        return;
      }
    } catch (e) {
      this.$message.error(e.toString());
      console.error(e);
    }

    this.onPickItem(this.dataManager.itemsHasRecipe[0]);
  }

  // dialog
  public onPickItem(item: ItemMVList, _quality = 10, _addonQuality = 0) {
    const quality = clamp(_quality || 10, 1, 100);
    const addonQuality = clamp(_addonQuality || 0, 0, 15);

    this.compose = item;
    const items = this.compose.RSP.map((rsp) => new Array(rsp.NC).fill(this.dataManager.itemById[rsp.DF])).flat();
    this.materialOptions = Array.from({ length: items.length }, () => Object.assign(new MaterialOptions(), { quality, addonQuality }));
    this.materials = items;
    this.itemPickerDialogVisible = false;
  }

  //
  public onClickSetAllQuality() {
    for (const materialOption of this.materialOptions) {
      materialOption.quality = this.allQuality;
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

/* item picker dialog
.item-picker-items
  display: flex
  flex-wrap: wrap
  text-align: center
  padding-top: 36px

  > div
    width: 140px
    cursor: pointer

    > p
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden

.compose-container
  display: flex

.dark-mode
  .compose-material-container
    background: inherit

.compose-material-container
  display: flex
  flex-direction: column
  background: rgb(224, 195, 151)
  padding: 36px
  min-height: 100vh

.compose-material-top
  display: flex
  flex-wrap: wrap
  flex-direction: row
  text-align: center
  max-width: 940px

  img
    width: 120px
    text-align: center

.compose-material
  margin: 24px
.compose-input--size
  width: 140px
/* target
.compose-item
  display: flex
  flex-direction: column
  align-items: center

.compose-requirement
  width: 120px
  display: flex
  flex-direction: column
  align-items: center
  text-align: center

.compose-item-image img
  cursor: pointer
  width: 200px
  height: 200px
  padding-top: 12px
  text-align: center
  justify-content: center
  align-items: center

.item-popover
  width: 200px

/* compose result
.compose-result
  padding: 36px

  h3, h4
    text-align: center

.compose-result-image-container
  text-align: center

.compose-result-image
  width: 240px
  cursor: pointer

.compose-result-export
  text-align: center

.compose-result-skill tr th
  white-space: nowrap
  text-align: left
  padding: 4px
</style>
