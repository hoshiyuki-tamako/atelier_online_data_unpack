import { EBattleAttribute, EBattleEffectKind, EBattleEffectTrigger, EElement } from '@/logic/Enums';
import { MVList as EnemyMVList } from '@/master/enemy';
import { List as SkillList } from '@/master/skill';
import { dataManager } from '@/utils/DataManager';
import { clamp } from 'lodash';

export interface IEnemyReceiveDamage {
  otherEffectSkills: SkillList[];
  multipliersSkills: SkillList[];
  multipliers: number[];
  defense: number;
  total: number;
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

  public receiveDamage(damage: number, element = 0, attribute: EBattleAttribute = EBattleAttribute.eNONE, skills: SkillList[] = []) {
    const result = {
      otherEffectSkills: [],
      multipliersSkills: [],
      multipliers: [],
      defense: 0,
      total: 0,
    } as IEnemyReceiveDamage;

    const oneDamageSkills = this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED && skill.effect === EBattleEffectKind.eONE_DAMAGE);
    if (oneDamageSkills.length) {
      result.otherEffectSkills = oneDamageSkills;
      result.total = 1;
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
    let multipliersSkills = attribute === EBattleAttribute.eMAGIC_DAMAGED
        ? this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED_MAGIC && skill.effect === EBattleEffectKind.eDAMAGE_RATE)
        : this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED_PHYSICS && skill.effect === EBattleEffectKind.eDAMAGE_RATE);
    multipliersSkills = multipliersSkills.concat(this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED && skill.effect === EBattleEffectKind.eDAMAGE_RATE));

    const multipliers = [] as number[];
    switch (element) {
      case EElement.eFIRE:
        multipliers.push(1 - this.enemy.sParam.ELM.FIRE / 100);
        break;
      case EElement.eWATER:
        multipliers.push(1 - this.enemy.sParam.ELM.WATER / 100);
        break;
      case EElement.eWIND:
        multipliers.push(1 - this.enemy.sParam.ELM.WIND / 100);
        break;
      case EElement.eEARTH:
        multipliers.push(1 - this.enemy.sParam.ELM.EARTH / 100);
        break;
      case EElement.eLIGHT:
        multipliers.push(1 - this.enemy.sParam.ELM.LIGHT / 100);
        break;
      case EElement.eDARK:
        multipliers.push(1 - this.enemy.sParam.ELM.DARK / 100);
        break;
      // 4 element?
    }

    const defenseState = attribute === EBattleAttribute.eMAGIC_DAMAGED ? 'MDEF' : 'SDEF';
    const defense = this.enemy.getState(defenseState, this.level).total;

    const total = Math.round(multipliersSkills.map((p) => p.effectValue).concat(multipliers).reduce((sum, v) => sum * v, damage - defense));
    result.total = total > 0 ? total : 1;
    result.multipliersSkills = multipliersSkills;
    result.defense = defense;
    result.multipliers = multipliers;
    return result;
  }
}
