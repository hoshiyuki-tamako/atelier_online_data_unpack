import Vue from 'vue';

export default abstract class VueBase extends Vue {
  public s(number: number) {
    return number > 0 ? '+' : '';
  }
}
