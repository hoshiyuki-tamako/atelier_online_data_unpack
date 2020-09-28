import { dataManager } from '@/utils/DataManager';
import Vue from 'vue';

export default abstract class VueBase extends Vue {
  public get dataManager() {
    return dataManager;
  }

  public s(number: number) {
    return number > 0 ? '+' : '';
  }
}
