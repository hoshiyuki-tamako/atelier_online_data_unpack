import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

export class ScoreValue {
  public damage = 0;
  public times = 0;
}

export type rankScores = { [id: string]: { [enemyIndex: string]: ScoreValue[] } };

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public scores = {} as rankScores;

  @MutationAction({ mutate: ['scores'] })
  public async reset() {
    return {
      scores: {},
    };
  }
}
