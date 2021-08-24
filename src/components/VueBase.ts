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

  // notification
  public successNotification() {
    this.$notify({
      title: this.$t('成功').toString(),
      message: '',
      type: 'success',
    });
  }
}
