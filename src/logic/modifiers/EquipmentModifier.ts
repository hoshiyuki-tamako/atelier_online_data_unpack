import { dataManager } from '@/utils/DataManager';
import { List as SkillList } from '@/master/skill';
import { ItemModifier } from './ItemModifier';

export class EquipmentModifier extends ItemModifier {
  public skillId: number | null = null;

  public get skill() {
    return dataManager.skillById[this.skillId];
  }

  public set skill(value: SkillList | null) {
    this.skillId = value?.id;
  }
}
