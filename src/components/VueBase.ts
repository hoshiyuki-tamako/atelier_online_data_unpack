import { dataManager } from '@/utils/DataManager';
import Vue from 'vue';

export default abstract class VueBase extends Vue {
  public get dataManager() {
    return dataManager;
  }

  public get isProduction() {
    return process.env.NODE_ENV === 'production';
  }

  public s(number: number) {
    return number > 0 ? '+' : '';
  }

  public tickCross(condition: boolean) {
    return condition ? '✓' : 'x';
  }

  public get elCardPopoverStyle() {
    return {
      padding: '12px',
      border: 'MediumSeaGreen solid 1px',
    };
  }

  public get elCardPopoverStyleSmall() {
    return {
      padding: '6px',
      border: 'MediumSeaGreen solid 1px',
    };
  }

  // notification
  public successNotification() {
    this.$notify({
      title: this.$t('成功').toString(),
      message: '',
      type: 'success',
    });
  }
}
