import { EAbnormalStateTarget, EBattleAttribute, EBattleEffectKind, EBattleEffectTrigger, EElement } from '@/logic/Enums';
import { MVList as AbnormalStateEffectMVList } from '@/master/abnormalStateEffect';
import { MVList as EnemyMVList } from '@/master/enemy';
import { List as SkillList } from '@/master/skill';
import { dataManager } from '@/utils/DataManager';
import { clamp } from 'lodash';

type multiplier = { translatedLabel?: string, label?: string, value: number };

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

  public get enemy() {
    return dataManager.enemyById[this.enemyId];
  }

  public set enemy(enemy: EnemyMVList | null) {
    this.enemyId = enemy?.DF;
  }

  public level = EnemyMVList.defaultLevel;

  public abnormalStateIds = [] as number[];

  public get abnormalStates() {
    const states = this.abnormalStateIds.map((p) => dataManager.abnormalStateById[p]).filter((p) => p);
    const removeStates = states.map((p) => p.weakStatelist).flat();
    return states.filter((p) => !removeStates.includes(p.id));
  }

  public get abnormalStateEffects() {
    return this.abnormalStates.map((p) => p.effectlist).flat().map((p) => dataManager.abnormalStateEffectById[p]);
  }

  public attack(skill: SkillList | null = null) {
    const multipliers = [{
      label: 'ベース',
      value: this.enemy.getState(skill?.attackSkill.attribute === EBattleAttribute.eMAGIC_DAMAGED ? 'MATK' : 'SATK', this.level).total,
    }] as multiplier[];

    if (skill?.attackSkill.attribute) {
      multipliers.push({
        label: '攻撃スキル',
        value: 1 + skill.attackSkill.effectValue,
      });
    }

    const total = Math.round(multipliers.reduce((sum, m) => sum * m.value, 1));
    return {
      multipliers,
      total,
    };
  }

  public receiveDamage(multipliers: multiplier[] = [], playerLevel = 0, element = EElement.eNONE, attribute = EBattleAttribute.eNONE, skills: SkillList[] = [], abnormalStateEffects: AbnormalStateEffectMVList[] = []) {
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

    const _element = EElement[element].substr(1);
    if (_element !== 'NONE') {
      const value = this.enemy.sParam.ELM[_element];
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

    const defenseState = attribute === EBattleAttribute.eMAGIC_DAMAGED ? 'MDEF' : 'SDEF';
    const defense = this.enemy.getState(defenseState, this.level).total;

    const calculateMultipliers = [...multipliers.map((p) => p.value)].concat(
      ...zeroMultiplierSkills.map((p) => p.effectValue),
      ...onePlusMultiplierSkills.map((p) => 1 + p.effectValue),
    );

    const total = Math.round(calculateMultipliers.reduce((sum, v) => sum * v, 1) - defense);
    result.total = total > 0 ? total : 1;
    result.zeroPlusMultiplierSkills = zeroMultiplierSkills;
    result.onePlusMultiplierSkills = onePlusMultiplierSkills;
    result.multipliers = multipliers;
    result.defense = defense;
    result.hp = clamp(this.enemy.getState('HP', this.level).total - result.total, 0, Infinity);
    return result;
  }
}
