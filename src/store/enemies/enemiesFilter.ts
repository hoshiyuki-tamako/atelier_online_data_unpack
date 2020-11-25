import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public eKind: number | null = null;

  public attackTargetKind: number | null = null;

  public enemySize: number | null = null;

  public appearArea: number | null = null;

  public name = '';

  public sort = 1;

  public has = [] as number[];

  @MutationAction({ mutate: ['eKind', 'attackTargetKind', 'enemySize', 'appearArea', 'name', 'sort', 'has'] })
  public async reset() {
    return {
      eKind: null,
      attackTargetKind: null,
      enemySize: null,
      appearArea: null,
      name: '',
      sort: 1,
      has: [],
    };
  }
}
