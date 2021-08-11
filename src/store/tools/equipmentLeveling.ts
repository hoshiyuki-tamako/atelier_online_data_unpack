import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, Mutation, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public level = 1;

  public untilExp = 0;

  public experienceItemDfs: number[] = [];

  @Mutation
  public updateExperienceItemDfs(experienceItemDfs: number[]) {
    this.experienceItemDfs = experienceItemDfs;
  }

  @MutationAction({ mutate: ['level', 'untilExp', 'experienceItemDfs'] })
  public async reset() {
    return {
      level: 1,
      untilExp: 0,
      experienceItemDfs: [],
      characterDf: 0,
    };
  }
}
