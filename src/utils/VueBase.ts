import Vue from 'vue'
import { Location } from 'vue-router';
export default abstract class VueBase extends Vue {
  public scrollTo(query: string) {
    document.querySelector(query)?.scrollIntoView();
  }
}
