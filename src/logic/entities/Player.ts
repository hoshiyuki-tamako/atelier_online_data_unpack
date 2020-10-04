import { Enemy } from '@/logic/entities/Enemy';
import { EAbnormalStateTarget, EBattleAttribute, EBattleEffectTrigger, EElement } from '@/logic/Enums';
import { Formula } from '@/logic/Formula';
import { Equipment } from '@/logic/items/Equipment';
import { EquipmentItem } from '@/logic/items/EquipmentItem';
import { CharacterModifier } from '@/logic/modifiers/CharacterModifier';
import { EquipmentModifier } from '@/logic/modifiers/EquipmentModifier';
import { MVList as AbnormalStateEffectMVList } from '@/master/abnormalStateEffect';
import { MVList as CharacterMVList } from '@/master/chara';
import { MVList as ItemMvList } from '@/master/item';
import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';

type multiplier = { translatedLabel?: string, label?: string, value: number };

export class EquipmentsModifier {
  @Type(_ => EquipmentModifier)
  public weapon = new EquipmentModifier();

  @Type(_ => EquipmentModifier)
  public shield = new EquipmentModifier();

  @Type(_ => EquipmentModifier)
  public helmet = new EquipmentModifier();

  @Type(_ => EquipmentModifier)
  public armor = new EquipmentModifier();

  @Type(_ => EquipmentModifier)
  public accessory1 = new EquipmentModifier();

  @Type(_ => EquipmentModifier)
  public accessory2 = new EquipmentModifier();

  @Type(_ => EquipmentModifier)
  public accessory3 = new EquipmentModifier();
}

export class Player {
  public characterId : number | null = null;

  @Type(_ => CharacterModifier)
  public characterModifier = new CharacterModifier();

  @Type(_ => Equipment)
  public equipment = new Equipment();

  @Type(_ => EquipmentsModifier)
  public equipmentModifiers = new EquipmentsModifier();

  @Type(_ => EquipmentItem)
  public supports = [] as EquipmentItem[];

  public constructor() {
    this.characterModifier.level = CharacterMVList.maxLevel;
    this.characterModifier.foodLevel = CharacterMVList.maxLevel;
    this.characterModifier.blazeArtLevel = 5;

    for (const modifier of Object.values(this.equipmentModifiers)) {
      modifier.quality = ItemMvList.equipmentMaxQuality;
      modifier.level = ItemMvList.equipmentMaxLevel;
    }
  }

  public get character() {
    return dataManager.characterById[this.characterId];
  }

  public set character(value: CharacterMVList | null) {
    this.characterId = value?.DF;
  }

  public get equipments() {
    return Object.entries(this.equipment).filter(([, p]) => p) as [string, EquipmentItem][];
  }

  public get strength() {
    return this.equipments
      .map(([slot, p]) => Formula.supportStates.map((state) => p.item.getBaseState(state, this.equipmentModifiers[slot].level)))
      .flat()
      .concat(this.supports.map((p) => Formula.supportStates.map((state) => p.item.getBaseState(state, p.modifier.level))).flat())
      .reduce((sum, v) => sum + v, 0);
  }

  public abnormalStateIds = [] as number[];

  public get abnormalStates() {
    const states = this.abnormalStateIds.map((p) => dataManager.abnormalStateById[p]).filter((p) => p);
    const removeStates = states.map((p) => p.weakStatelist).flat();
    return states.filter((p) => !removeStates.includes(p.id));
  }

  public get abnormalStateEffects() {
    return this.abnormalStates.map((p) => p.effectlist).flat().map((p) => dataManager.abnormalStateEffectById[p]);
  }

  // state
  public totalCharacterState(state: string) {
    return this.character?.getState(state, this.characterModifier.level, this.characterModifier.foodLevel).total || 0;
  }

  public totalEquipmentState(state: string) {
    return this.equipments.reduce((sum, [slot, equipmentItem]) => sum + equipmentItem.item.getState(state, this.equipmentModifiers[slot].quality, this.equipmentModifiers[slot].level, this.equipmentModifiers[slot].skill).total, 0);
  }

  public totalSupportState(state: string) {
    return this.supports.filter((p) => state in p.item.EQU).reduce((sum, p) => sum + p.item.EQU[state].getSupportValue(p.modifier.level), 0);
  }

  public totalState(state: string) {
    return this.totalCharacterState(state) + this.totalEquipmentState(state) + this.totalSupportState(state);
  }

  // element
  public totalCharacterElement(element: string) {
    return this.character?.getElement(element, this.characterModifier.level).total || 0;
  }

  public totalEquipmentElement(element: string) {
    return this.equipments.reduce((sum, [slot, equipmentItem]) => sum + equipmentItem.item.getElement(element, this.equipmentModifiers[slot].quality).total, 0);
  }

  public totalSupportElement(element: string) {
    return this.supports.reduce((sum, p) => sum + p.item.getSupportElement(element).value, 0);
  }

  public totalElement(element: string) {
    return this.totalCharacterElement(element) + this.totalEquipmentElement(element) + this.totalSupportElement(element);
  }

  // skills
  public get skills() {
    return this.equipments
      .map(([slot, equipment]) => equipment.item.getSkills(this.equipmentModifiers[slot].quality))
      .flat()
      .concat(this.character?.getSkills(this.characterModifier.level) || []);
  }

  public get skillMultipliers() {
    const equipmentBaseSkills = this.equipments.map(([slot]) => ({
      slot,
      skill: this.equipmentModifiers[slot].skill,
    })).filter((p) => p.skill && p.skill.trigger === EBattleEffectTrigger.eATTACK_SKILL);
    const characterBaseSkills = this.character?.getSkillWithComboSkills(this.characterModifier.level).filter((p) => p.trigger === EBattleEffectTrigger.eATTACK_SKILL) || [];
    const equipmentChainSkills = this.equipments.map(([slot]) => ({
      slot,
      skill: this.equipmentModifiers[slot].skill,
    })).filter((p) => p.skill && p.skill.trigger === EBattleEffectTrigger.eCHAIN);
    const characterChainSkills = this.character?.getSkillWithComboSkills(this.characterModifier.level).filter((p) => p.trigger === EBattleEffectTrigger.eCHAIN) || [];
    const base = equipmentBaseSkills.map((p) => p.skill).concat(characterBaseSkills).reduce((sum, p) => sum + p.effectValue, 0);
    return {
      equipmentBaseSkills,
      equipmentChainSkills,
      characterBaseSkills,

      characterChainSkills,
      base,
      chain: base + equipmentChainSkills.map((p) => p.skill).concat(characterChainSkills).reduce((sum, p) => sum + p.effectValue, 0),
    };
  }

  public attack(multiplier: number[] = [], skillChain = 0) {
    const { chain, base } = this.skillMultipliers;
    multiplier.push(skillChain > 0 ? (1 + chain) : (1 + base), 1 + skillChain * .2);
    return Math.round(multiplier.reduce((sum, v) => sum * v, 1));
  }

  public receiveDamage(damage: number, attribute = EBattleAttribute.eNONE, element = EElement.eNONE, abnormalStateEffects: AbnormalStateEffectMVList[] = []) {
    const totalHp = this.totalState('HP');
    const defense = this.totalState(attribute === EBattleAttribute.eMAGIC_DAMAGED ? 'MDEF' : 'SDEF');

    let multipliers = [] as multiplier[];
    const _element = EElement[element].substr(1);
    if (_element !== 'NONE') {
      const value = this.totalElement(_element);
      if (value) {
        multipliers.push({
          label: dataManager.lookup.element[_element],
          value: 1 - value / 100,
        });
      }
    }

    // self abnormal state
    for (const abnormalStateEffect of this.abnormalStateEffects) {
      const target = EAbnormalStateTarget[abnormalStateEffect.trarget].substr(1);
      if (
          ((attribute === EBattleAttribute.eMAGIC_DAMAGED && abnormalStateEffect.trarget === EAbnormalStateTarget.eMDEF) ||
          abnormalStateEffect.trarget === EAbnormalStateTarget.eSDEF) &&
          dataManager.abnormalStateEffectsStates.includes(abnormalStateEffect)
      ) {
        const upDownMultiplier = +abnormalStateEffect.name.toLocaleLowerCase().includes('down');
        multipliers.push({
          translatedLabel: abnormalStateEffect.name,
          value: upDownMultiplier + abnormalStateEffect.value,
        });
      } else if (_element === target && dataManager.abnormalStateEffectsElements.includes(abnormalStateEffect)) {
        const base = +abnormalStateEffect.name.toLocaleLowerCase().includes('down');
        multipliers.push({
          translatedLabel: abnormalStateEffect.name,
          value: base + abnormalStateEffect.value / 100,
        });
      }
    }

    // other abnormal states
    for (const abnormalStateEffect of abnormalStateEffects) {
      const target = EAbnormalStateTarget[abnormalStateEffect.trarget].substr(1);
      if (
          ((attribute === EBattleAttribute.eMAGIC_DAMAGED && abnormalStateEffect.trarget === EAbnormalStateTarget.eMATK) ||
          abnormalStateEffect.trarget === EAbnormalStateTarget.eSATK) &&
          dataManager.abnormalStateEffectsStates.includes(abnormalStateEffect)
      ) {
        const upDownMultiplier = abnormalStateEffect.name.toLocaleLowerCase().includes('down') ? 0 : 1;
        multipliers.push({
          translatedLabel: abnormalStateEffect.name,
          value: upDownMultiplier + abnormalStateEffect.value,
        });
      }
    }

    let total = multipliers.reduce((sum, multiplier) => sum * multiplier.value, damage - defense);
    if (total <= 0) {
      total = 1;
    }

    let hp = totalHp - total;
    if (hp < 0) {
      hp = 0;
    }

    return {
      totalHp,
      damage,
      defense,
      total: total > 0 ? total : 1,
      hp,
      multipliers,
    };
  }

  // other helpers
  public get attribute() {
    return this.equipment.weapon?.item.getAttackSkill()?.attribute || 2;
  }

  public get attributeState() {
    return this.attribute === 3 ? 'MATK' : 'SATK';
  }

  public get element() {
    return this.equipment.weapon?.item.elementChangeSkill?.effectValue || 0;
  }
}

export class PlayerExport {
  public version = 2;

  public locale: string;

  @Type(_ => Player)
  public player: Player;

  @Type(_ => Enemy)
  public enemy: Enemy | null;

  public skillChain = 0;

  public constructor(locale: string, player: Player, enemy: Enemy | null = null) {
    this.locale = locale;
    this.player = player;
    this.enemy = enemy;
  }
}
