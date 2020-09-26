export interface PlayerExportV1 {
  version:           number;
  locale:            string;
  characterId:       number;
  equipment:         Equipment;
  supportIds:        number[];
  characterModifier: CharacterModifier;
  equipmentModifier: EquipmentModifier;
  supportModifier:   SupportModifier[];
  skillCombo:        number;
}

export interface CharacterModifier {
  level:         number;
  foodLevel:     number;
  blazeArtLevel: number;
}

export interface Equipment {
  weaponId:     number;
  shieldId:     number;
  helmetId:     number;
  clothId:      number;
  accessory1Id: number;
  accessory2Id: number;
  accessory3Id: number;
}

export interface EquipmentModifier {
  weapon:     Accessory1;
  shield:     Accessory1;
  helmet:     Accessory1;
  cloth:      Accessory1;
  accessory1: Accessory1;
  accessory2: Accessory1;
  accessory3: Accessory1;
}

export interface Accessory1 {
  quality: number;
  level:   number;
  skillId: number;
}

export interface SupportModifier {
  quality: number;
  level:   number;
}
