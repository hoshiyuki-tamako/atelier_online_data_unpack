import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, Mutation, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public experienceItemDfs: number[] = [];

  public characterDf: number | null = null;

  @Mutation
  public updateExperienceItemDfs(experienceItemDfs: number[]) {
    this.experienceItemDfs = experienceItemDfs;
  }

  @MutationAction({ mutate: ['experienceItemDfs', 'characterDf'] })
  public async reset() {
    return {
      experienceItemDfs: [],
      characterDf: 0,
    };
  }
}
