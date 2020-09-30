import { EBattleAttribute, EBattleEffectKind, EBattleEffectTrigger, EElement } from '@/logic/Enums';
import { MVList as EnemyMVList } from '@/master/enemy';
import { List as SkillList } from '@/master/skill';
import { dataManager } from '@/utils/DataManager';
import { clamp } from 'lodash';

type multiplier = { element: string, value: number };

export class EnemyReceiveDamage {
  public otherEffectSkills = [] as SkillList[]

  public zeroPlusMultiplierSkills = [] as SkillList[];

  public onePlusMultiplierSkills = [] as SkillList[];

  public multipliers = [] as multiplier[];

  public defense = 0;

  public total = 0;

  public hp = 0;
};

export class Enemy {
  public enemyId : number | null = null;

  public level = EnemyMVList.defaultLevel;

  public abnormalEffectIds = [] as number[];

  public get enemy() {
    return dataManager.enemyById[this.enemyId];
  }

  public set enemy(enemy: EnemyMVList | null) {
    this.enemyId = enemy?.DF;
  }

  public receiveDamage(damage: number, playerLevel = 0, element = 0, attribute: EBattleAttribute = EBattleAttribute.eNONE, skills: SkillList[] = []) {
    const result = new EnemyReceiveDamage();

    const oneDamageSkills = this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED && skill.effect === EBattleEffectKind.eONE_DAMAGE);
    if (oneDamageSkills.length) {
      result.otherEffectSkills = oneDamageSkills;
      result.total = 1;
      result.hp = clamp(this.enemy.getState('HP', this.level).total - result.total, 0, Infinity);
      return result;
    }
    /* unhandled effect
eATTACK,
eATTACK_HPMAX,
eATTACK_HPHALF,
eATTACK_HPDYING,
eATTACK_STRONG,
eATTACK_ABNORMALSTATE,
eATTACK_PUNI,
eATTACK_ELEMENT,
eATTACK_GOBLIN,
eATTACK_GHOST,
eATTACK_CRITICAL,
eATTACK_SKILL,
eATTACK_NONSKILL,
eDAMAGED_HPHALF,
eDAMAGED_HPDYING,
eDAMAGED_FIRE,
eDAMAGED_WATER,
eDAMAGED_EARTH,
eDAMAGED_WIND,
eDAMAGED_LIGHT,
eDAMAGED_DARK,
eDAMAGED_STRONG,
eRECOVER,
    */
   const multipliers = [] as multiplier[];
   const zeroMultiplierSkills = [] as SkillList[];
   const onePlusMultiplierSkills = [] as SkillList[];

    zeroMultiplierSkills.push(...attribute === EBattleAttribute.eMAGIC_DAMAGED
        ? this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED_MAGIC && skill.effect === EBattleEffectKind.eDAMAGE_RATE)
        : this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED_PHYSICS && skill.effect === EBattleEffectKind.eDAMAGE_RATE));
    zeroMultiplierSkills.push(...this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED && skill.effect === EBattleEffectKind.eDAMAGE_RATE));

    if (this.enemy.eKind === 31) {
      onePlusMultiplierSkills.push(...skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eATTACK_PUNI && skill.effect === EBattleEffectKind.eDAMAGE_RATE));
    }

    if (playerLevel && this.level > playerLevel) {
      onePlusMultiplierSkills.push(...skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eATTACK_STRONG && skill.effect === EBattleEffectKind.eDAMAGE_RATE));
    }

    switch (element) {
      case EElement.eFIRE:
        multipliers.push({
          element: 'FIRE',
          value: 1 - this.enemy.sParam.ELM.FIRE / 100,
        });
        break;
      case EElement.eWATER:
        multipliers.push({
          element: 'FIRE',
          value: 1 - this.enemy.sParam.ELM.WATER / 100,
        });
        break;
      case EElement.eWIND:
        multipliers.push({
          element: 'WIND',
          value: 1 - this.enemy.sParam.ELM.WIND / 100,
        });
        break;
      case EElement.eEARTH:
        multipliers.push({
          element: 'EARTH',
          value: 1 - this.enemy.sParam.ELM.EARTH / 100,
        });
        break;
      case EElement.eLIGHT:
        multipliers.push({
          element: 'LIGHT',
          value: 1 - this.enemy.sParam.ELM.LIGHT / 100,
        });
        break;
      case EElement.eDARK:
        multipliers.push({
          element: 'DARK',
          value: 1 - this.enemy.sParam.ELM.DARK / 100,
        });
        break;
      // 4 element?
    }

    const defenseState = attribute === EBattleAttribute.eMAGIC_DAMAGED ? 'MDEF' : 'SDEF';
    const defense = this.enemy.getState(defenseState, this.level).total;

    const calculateMultipliers = [...multipliers.map((p) => p.value)].concat(
      ...zeroMultiplierSkills.map((p) => p.effectValue),
      ...onePlusMultiplierSkills.map((p) => 1 + p.effectValue),
    );

    const total = Math.round(calculateMultipliers.reduce((sum, v) => sum * v, damage - defense));
    result.total = total > 0 ? total : 1;
    result.zeroPlusMultiplierSkills = zeroMultiplierSkills;
    result.onePlusMultiplierSkills = onePlusMultiplierSkills;
    result.multipliers = multipliers;
    result.defense = defense;
    result.hp = clamp(this.enemy.getState('HP', this.level).total - result.total, 0, Infinity);
    return result;
  }
}
