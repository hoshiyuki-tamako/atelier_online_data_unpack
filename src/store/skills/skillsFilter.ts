import VuexModuleBase from '@/store/base/VuexModuleBase';
import { Module } from 'vuex-module-decorators';

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
}
