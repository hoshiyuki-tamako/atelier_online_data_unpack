import { dataManager } from '@/utils/DataManager';
import { plainToClass } from 'class-transformer';

import { EquipmentsModifier, Player, PlayerExport } from '../entities/Player';
import { EquipmentItem } from '../items/EquipmentItem';
import { CharacterModifier } from '../modifiers/CharacterModifier';
import { PlayerExportV1 } from './PlayerExportV1';

interface IVersioning {
  version: number;
}

export class PlayerExportVersionConvertor {

  public locale: string;

  public constructor(locale: string) {
    this.locale = locale;
  }

  public convert(obj: IVersioning & unknown) {
    let hasConversion = false;
    if (!obj.version || obj.version === 1) {
      obj = this.convertToV2(obj as PlayerExportV1);
      hasConversion = true;
    }
    if (hasConversion) {
      return JSON.parse(JSON.stringify(obj));
    }

    return obj;
  }

  public convertToV2(obj: PlayerExportV1) {
    const player = new Player();

    player.characterId = obj.characterId;
    player.characterModifier = plainToClass(CharacterModifier, obj.characterModifier);
    for (const [_key, id] of Object.entries(obj.equipment).filter(([, id]) => id && dataManager.itemById[id])) {
      const key = _key.replace('cloth', 'armor').replace('Id', '');
      player.equipment[key] = new EquipmentItem(dataManager.itemById[id]);
    }
    player.supports = obj.supportIds.map((p) => new EquipmentItem(p));
    player.equipmentModifiers = plainToClass(EquipmentsModifier, { ... obj.equipmentModifier, armor: obj.equipmentModifier.cloth, cloth: undefined });
    player.supports = obj.supportIds.map((p) => new EquipmentItem(p));
    for (const [i, supports] of player.supports.entries()) {
      supports.modifier.quality = obj.supportModifier[i]?.quality || supports.modifier.quality;
      supports.modifier.level = obj.supportModifier[i]?.level || supports.modifier.level;
    }
    const playerExport = new PlayerExport(obj.locale || this.locale, player);
    playerExport.skillChain = obj.skillCombo;
    return playerExport;
  }

}
