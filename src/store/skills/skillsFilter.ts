import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showColumnId = true;

  public showColumnName = true;

  public showColumnTrigger = true;

  public showColumnEffect = true;

  public showColumnEffectTarget = true;

  @MutationAction({ mutate: ['showColumnId', 'showColumnName', 'showColumnTrigger', 'showColumnEffect', 'showColumnEffectTarget'] })
  public async reset() {
    return {
      showColumnId: true,
      showColumnName: true,
      showColumnTrigger: true,
      showColumnEffect: true,
      showColumnEffectTarget: true,
    };
  }
}
