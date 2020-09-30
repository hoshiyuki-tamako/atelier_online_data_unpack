import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showColumnId = true;

  public showColumnName = true;

  public showColumnDetail = true;

  public showColumnEffectValue = true;

  public showColumnSpAdd = true;

  public showColumnAttackSkillAttribute = true;

  public showColumnAttackSkillElement = true;

  public showColumnTargetTeam = true;

  public showColumnStateOwn = true;

  public showColumnState = true;

  public showColumnIcon = true;

  public showColumnHas = true;

  @MutationAction({ mutate: ['showColumnId', 'showColumnName', 'showColumnDetail', 'showColumnEffectValue', 'showColumnSpAdd', 'showColumnAttackSkillAttribute', 'showColumnAttackSkillElement', 'showColumnTargetTeam', 'showColumnStateOwn', 'showColumnState', 'showColumnIcon', 'showColumnHas'] })
  public async reset() {
    return {
      showColumnId: true,
      showColumnName: true,
      showColumnDetail: true,
      showColumnEffectValue: true,
      showColumnSpAdd: true,
      showColumnAttackSkillAttribute: true,
      showColumnAttackSkillElement: true,
      showColumnTargetTeam: true,
      showColumnStateOwn: true,
      showColumnState: true,
      showColumnIcon: true,
      showColumnHas: true
    };
  }
}
