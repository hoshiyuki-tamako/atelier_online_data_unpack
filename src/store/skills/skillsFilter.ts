import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module, MutationAction } from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class extends VuexModuleBase {
  public showColumnId = true;

  public showColumnName = true;

  public showColumnAttackSkillAttribute = true;

  public showColumnAttackSkillElement = true;

  public showColumnTargetTeam = true;

  public showColumnStateOwn = true;

  public showColumnState = true;

  @MutationAction({ mutate: ['showColumnId', 'showColumnName', 'showColumnAttackSkillAttribute', 'showColumnAttackSkillElement', 'showColumnTargetTeam', 'showColumnStateOwn', 'showColumnState'] })
  public async reset() {
    return {
      showColumnId: true,
      showColumnName: true,
      showColumnAttackSkillAttribute: true,
      showColumnAttackSkillElement: true,
      showColumnTargetTeam: true,
      showColumnStateOwn: true,
      showColumnState: true,
    };
  }
}
