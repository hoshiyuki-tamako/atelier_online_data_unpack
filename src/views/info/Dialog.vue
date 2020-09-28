<template lang="pug">
div.container
  el-dialog(v-loading="questDialogLoading" title="" :lock-scroll="false" :destroy-on-close="true" top="0" :visible.sync="questDialogVisible" width="80%" :fullscreen="!!(md.mobile() || md.tablet())")
    el-table(:data="questDialogs" :show-header="false")
      el-table-column(width="210px")
        template(slot-scope="scope")
          img.dialog-character-image(v-if="scope.row.characterDf" :src="`img/icon_chara/Texture2D/icon_chara_all_${scope.row.characterDf.toString().padStart(4, '0')}_00.png`" :alt="dataManager.characterById[scope.row.characterDf] ? dataManager.characterById[scope.row.characterDf].NAME : scope.row.characterDf")
      el-table-column
        template(slot-scope="scope")
          h4 {{ scope.row.name }}
          p {{ scope.row.dialog }}
    div(slot="footer")
      el-button(@click="questDialogVisible = false" type="primary") {{ $t('閉じる') }}

  div.content
    div.advs
      div.adv(v-for="adv of unusedAdvs")
        el-link(@click="onOpenDialog(adv)" type="primary" :underline="false") {{ adv }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import { dataManager } from '@/utils/DataManager';
import { IDialog } from '@/utils/AdvManager';
import MobileDetect from 'mobile-detect';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public md = new MobileDetect(window.navigator.userAgent);

  public unusedAdvs = [] as string[];

  public questDialogVisible = false;

  public questDialogLoading = false;

  public selectedAdv = '';

  public questDialogs: IDialog[] = [];

  public async beforeMount() {
    const advs = Object.values(dataManager.files.export.adv).map((p: string) => p.split('.')[0]) as string[];
    const existingAdvs = dataManager.quest.m_vList.map((p) => p.NPC_FD.map((i) => i.ADV)).flat().filter((p) => p);
    this.unusedAdvs = advs.filter((p) => !existingAdvs.includes(p));
  }

  // dialog
  public async onOpenDialog(adv: string) {
    try {
      this.selectedAdv = adv;
      this.questDialogs = [];
      this.questDialogVisible = true;
      this.questDialogLoading = true;
      const dialogs = await dataManager.advManager.getDialog(adv);
      this.questDialogs = dialogs.flat().map((p) => Object.assign(p, { dialog: p.dialog.replace('[px]', `[${this.$t('プレーヤー')}${this.$t('名前')}]`) }));
    } catch (e) {
      this.questDialogVisible = false;
      this.$message.error(e.toString());
      console.error(e);
    } finally {
      this.questDialogLoading = false;
    }
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
