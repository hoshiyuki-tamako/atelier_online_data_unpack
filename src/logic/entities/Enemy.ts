import { EBattleAttribute, EBattleEffectKind, EBattleEffectTrigger } from '@/logic/Enums';
import { MVList as EnemyMVList } from '@/master/enemy';
import { List as SkillList } from '@/master/skill';
import { dataManager } from '@/utils/DataManager';
import { clamp } from 'lodash';

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
    const oneDamageSkills = this.enemy.skills.filter((skill) => skill.trigger === EBattleEffectTrigger.eDAMAGED && skill.effect === EBattleEffectKind.eONE_DAMAGE);
    if (oneDamageSkills.length) {
      return {
        multipliersSkills: [oneDamageSkills],
        total: 1,
      };
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

    console.log(multipliersSkills);

    const defenseState = attribute === EBattleAttribute.eMAGIC_DAMAGED ? 'MDEF' : 'SDEF';
    const defense = this.enemy.getState(defenseState, this.level).total;
    return {
      multipliersSkills,
      total: multipliersSkills.reduce((sum, skill) => sum * skill.effectValue, clamp(damage - defense, 1, Infinity)),
    };
  }
}
