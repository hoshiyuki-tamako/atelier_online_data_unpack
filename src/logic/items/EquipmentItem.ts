import { EquipmentModifier } from '@/logic/modifiers/EquipmentModifier';
import { MVList as ItemMVList } from '@/master/item';
import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';

export class EquipmentItem {
  public itemId: number;

  @Type(_ => EquipmentModifier)
  public modifier = new EquipmentModifier();

  public get item() {
    return dataManager.itemById[this.itemId];
  }

  public set item(value) {
    this.itemId = value.DF;
  }

  public constructor(item: number | ItemMVList) {
    if (item instanceof ItemMVList) {
      this.item = item;
    } else {
      this.itemId = item;
    }
  }
}
