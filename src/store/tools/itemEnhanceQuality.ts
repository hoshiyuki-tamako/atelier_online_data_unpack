import { Quality } from '@/logic/Quality';
import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, Mutation, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public qualities: Quality[] = [];

  public quality = 1;

  public originalQuality = 1;

  public untilNextQuality = 0;

  @Mutation
  public updateQualities(qualities: Quality[]) {
    this.qualities = qualities;
  }

  @MutationAction({ mutate: ['qualities', 'quality', 'originalQuality', 'untilNextQuality'] })
  public async reset() {
    return {
      qualities: [],
      quality: 0,
      originalQuality: 0,
      untilNextQuality: 0,
    };
  }
}
