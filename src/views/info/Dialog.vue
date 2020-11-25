<template lang="pug">
div.container
  el-dialog(v-loading="questDialogLoading" title="" :lock-scroll="false" :destroy-on-close="true" top="0" :visible.sync="questDialogVisible" width="80%" :fullscreen="!!(md.mobile() || md.tablet())")
    el-table(:data="questDialogs" :show-header="false")
      el-table-column(width="210px")
        template(slot-scope="scope")
          img.dialog-character-image(v-if="scope.row.characterDf" :src="`img/icon_chara/Texture2D/icon_chara_all_${scope.row.characterDf.toString().padStart(4, '0')}_00.png`" :alt="dataManager.characterById[scope.row.characterDf] ? dataManager.characterById[scope.row.characterDf].NAME : scope.row.characterDf")
      el-table-column
        template(slot-scope="scope")
          div(v-if="scope.row.order === EOrderType.eCHARA_TALK")
            h4 {{ replaceWithPlayerName(scope.row.name) }}
            p {{ replaceWithPlayerName(scope.row.dialog) }}
          div(v-else-if="scope.row.order === EOrderType.eSELECTION")
            h4 {{ $t('選択') }}
            p(v-for="option of scope.row.options") {{ replaceWithPlayerName(option) }}
          div(v-else-if="scope.row.order === EOrderType.eBG")
            h4 {{ $t('背景') }}
            p {{ replaceWithPlayerName(scope.row.text1 || '') }}
            p {{ replaceWithPlayerName(scope.row.text2 || '') }}
    div(slot="footer")
      el-button(@click="questDialogVisible = false" type="primary") {{ $t('閉じる') }}

  div.content
    div(v-for="[category, advs] of Object.entries(dataManager.unusedAdvs)")
      el-divider {{ category }}
      div.advs
        div.adv(v-for="adv of advs")
          el-link(@click="onOpenDialog(adv)" type="primary" :underline="false") {{ adv }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { IAdventure } from '@/utils/AdvManager';
import MobileDetect from 'mobile-detect';
import { EOrderType } from '@/logic/Enums';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get EOrderType() {
    return EOrderType;
  }

  public md = new MobileDetect(window.navigator.userAgent);

  public questDialogVisible = false;

  public questDialogLoading = false;

  public selectedAdv = '';

  public questDialogs: IAdventure[] = [];

  // dialog
  public async onOpenDialog(adv: string) {
    try {
      this.selectedAdv = adv;
      this.questDialogs = [];
      this.questDialogVisible = true;
      this.questDialogLoading = true;
      this.questDialogs = await dataManager.advManager.getDialog(adv);
    } catch (e) {
      this.questDialogVisible = false;
      this.$message.error(e.toString());
      console.error(e);
    } finally {
      this.questDialogLoading = false;
    }
  }

  public replaceWithPlayerName(text: string) {
    return text.replace('[px]', `[${this.$t('プレーヤー')}${this.$t('名前')}]`);
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.advs
  display: flex
  flex-wrap: wrap
  .adv
    padding: 12px

.dialog-character-image
  width: 180px
</style>
