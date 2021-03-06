import { Type } from 'class-transformer';

import { EquipmentItem } from './EquipmentItem';

export class Equipment {
  @Type((_) => EquipmentItem)
  public weapon: EquipmentItem | null = null;

  @Type((_) => EquipmentItem)
  public shield: EquipmentItem | null = null;

  @Type((_) => EquipmentItem)
  public helmet: EquipmentItem | null = null;

  @Type((_) => EquipmentItem)
  public armor: EquipmentItem | null = null;

  @Type((_) => EquipmentItem)
  public accessory1: EquipmentItem | null = null;

  @Type((_) => EquipmentItem)
  public accessory2: EquipmentItem | null = null;

  @Type((_) => EquipmentItem)
  public accessory3: EquipmentItem | null = null;
}
