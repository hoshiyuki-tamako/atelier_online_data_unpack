import { dataManager } from '@/utils/DataManager';
import { ItemModifier } from './ItemModifier';
import { List as SkillList } from '@/master/skill';

export class EquipmentModifier extends ItemModifier {
  public skillId: number | null = null;

  public get skill() {
    return dataManager.skillById[this.skillId];
  }

  public set skill(value: SkillList | null) {
    this.skillId = value?.id;
  }
}
