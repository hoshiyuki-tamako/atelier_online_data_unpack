<template lang="pug">
el-dialog#quest-dialog(v-loading="loading" title="" :lock-scroll="false" :destroy-on-close="true" top="0" :visible.sync="visible" width="80%" :fullscreen="!!(md.mobile() || md.tablet())")
  el-divider(v-if="quest")
    h3 {{ quest.NAME }}
  el-table(:data="questDialogs" :show-header="false")
    el-table-column(width="210px")
      template(slot-scope="scope")
        img.dialog-character-image(v-if="scope.row.characterDf" :src="`img/icon_chara/Texture2D/icon_chara_all_${scope.row.characterDf.toString().padStart(4, '0')}_${scope.row.facialExpression.toString().padStart(2, '0')}.png`" :alt="dataManager.characterById[scope.row.characterDf] ? dataManager.characterById[scope.row.characterDf].NAME : scope.row.characterDf")
    el-table-column
      template(slot-scope="scope")
        div(v-if="scope.row.order === EOrderType.eCHARA_TALK")
          h4(v-html="richTextService.richTextToHtml(scope.row.name)")
          p(v-html="richTextService.richTextToHtml(scope.row.dialog)")
          audio(v-if="scope.row.voice && dataManager.files.audios.voices[`${scope.row.voice}.wav`]" controls)
            source(:src="`audios/voices/${scope.row.voice}.wav`" type="audio/mpeg")
        div(v-else-if="scope.row.order === EOrderType.eSELECTION")
          h4 {{ $t('選択') }}
          p(v-for="option of scope.row.options" v-html="richTextService.richTextToHtml(option)")
        div(v-else-if="scope.row.order === EOrderType.eBG")
          h4 {{ $t('背景') }}
          p(v-html="richTextService.richTextToHtml(scope.row.text1 || '')")
          p(v-html="richTextService.richTextToHtml(scope.row.text2 || '')")
          img.dialog-image(:src="`img/bg_texture/BG_Texture_${scope.row.id.toString().padStart(4, '0')}.png`" :alt="scope.row.id")
        div(v-else-if="scope.row.order === EOrderType.eMUSIC")
          h4 {{ $t('音楽') }}
          p {{ eMusicID[scope.row.id] || '-' }}
          template(v-if="scope.row.id > 0" v-for="bgm of [dataManager.soundListBgmById[scope.row.id]].filter(p => p)")
            audio(v-if="dataManager.files.audios.musics[bgm.fileName]" controls)
              source(:src="bgm.file" type="audio/mpeg")
        div(v-else-if="scope.row.order === EOrderType.ePICTURE")
          img.dialog-image(:src="`img/still_texture/Still_Texture_${scope.row.id.toString().padStart(4, '0')}.png`" :alt="scope.row.id")
        div(v-else-if="scope.row.order === EOrderType.eWINDOW_ITEM")
          img.dialog-image(:src="`img/item_texture/item_texture_${scope.row.id.toString().padStart(4, '0')}.png`" :alt="scope.row.id")
  div(slot="footer")
    el-button(@click="visible = false" type="primary") {{ $t('閉じる') }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import { MVList as QuestMVList } from '@/master/quest';
import { IAdventure } from '@/utils/AdvManager';
import MobileDetect from 'mobile-detect';
import { EOrderType, eMusicID } from '@/logic/Enums';
import { RichTextService } from '@/services/RichTextService';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public get EOrderType() {
    return EOrderType;
  }

  public get eMusicID() {
    return eMusicID;
  }

  public md = new MobileDetect(window.navigator.userAgent);

  // dialog
  public visible = false;

  public loading = false;

  public quest: QuestMVList | null = null;

  public adv = '';

  public questDialogs: IAdventure[] = [];

  // services
  private richTextService = new RichTextService();

  public async openDialog(quest: QuestMVList) {
    try {
      this.quest = quest;
      this.questDialogs = [];
      this.visible = true;
      this.loading = true;
      this.questDialogs = await this.dataManager.advManager.getDialog(quest.NPC_FD.map((p) => p.ADV).filter((p) => p));
    } catch (e) {
      this.visible = false;
      this.$message.error(e.toString());
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  public async openDialogWithAdv(advs: string[]) {
    try {
      this.quest = null;
      this.questDialogs = [];
      this.visible = true;
      this.loading = true;
      this.questDialogs = await this.dataManager.advManager.getDialog(advs);
    } catch (e) {
      this.visible = false;
      this.$message.error(e.toString());
      console.error(e);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="sass" scoped>
.dialog-character-image
  width: 180px
.dialog-image
  max-width: 100%
</style>
