import { EBattleEffectKind } from '@/logic/Enums';
import { Formula } from '@/logic/Formula';
import { Type } from 'class-transformer';
import { List as SkillList } from '@/master/skill';

import Enumerable from 'linq';

import { dataManager } from './../utils/DataManager';
// custom types
export interface IElementResult {
  element: string;
  label: string;
  skills: SkillList[],
  value: number;
  total: number;
}

export interface IStateResult {
  state: string;
  label: string;
  skills: SkillList[],
  value: number;
  foodValue: number;
  skillValue: number;
  total: number;
}


// generated types
export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface MScript {
  m_FileID: number;
  m_PathID: number;
}

export interface SKILL {
  DF: number;
  LV: number;
}

export class SPEC {
  @Type(_ => Formula)
  HP: Formula;
  @Type(_ => Formula)
  SATK: Formula;
  @Type(_ => Formula)
  SDEF: Formula;
  @Type(_ => Formula)
  MATK: Formula;
  @Type(_ => Formula)
  MDEF: Formula;
  @Type(_ => Formula)
  SPD: Formula;
  @Type(_ => Formula)
  SDA: Formula;
  @Type(_ => Formula)
  LDA: Formula;
  @Type(_ => Formula)
  QTH: Formula;
  @Type(_ => Formula)
  DDG: Formula;
  @Type(_ => Formula)
  SADD: Formula;
}

export interface FD {
  DF: number;
  QTY: number;
}

export interface FDM {
  NO: number;
  GRD: number;
  FD: FD[];
  HP: number;
  SATK: number;
  SDEF: number;
  MATK: number;
  MDEF: number;
  SPD: number;
  SDA: number;
  LDA: number;
  QTH: number;
  DDG: number;
  SADD: number;
}

export interface QST {
  NO: number;
  QUEST_DF: number;
  FLAG_DF: number;
  LV: number;
}

export interface WEAPON {
  GEN: number;
}

export interface GROW {
  STAR: number;
  STONE: number;
}

export interface AvHelmOffset {
  id: number;
  offsetY: number;
}

export interface MDL {
  fScale: number;
  eAnimKind: number;
  avHelmOffset: AvHelmOffset[];
  bMacho: number;
  hairId: number;
  eyeId: number;
  headId: number;
  voice: number;
  weaponId: number;
  bodyId: number;
  shieldId: number;
  helmId: number;
  accId1: number;
  accId2: number;
  accId3: number;
}

export interface BA {
  LV: number;
  DF: number;
}

export class MVList {
  public static hideDfs = [3005];
  public static maxLevel = 80;

  DF: number;
  CATEG: number;
  NAME: string;
  DESC: string;
  GEN: number;
  ICON: string;
  BTST: number;
  EXC: number;
  SKILL: SKILL[];
  @Type(_ => SPEC)
  SPEC: SPEC;
  FDM: FDM[];
  QST: QST[];
  WEAPON: WEAPON[];
  GROW: GROW[];
  MDL: MDL;
  BA: BA[];
  GROUP_DF: number;

  #skillCache = new Map<string, SkillList[]>();
  #skillWithComboSkillCache = new Map<string, SkillList[]>();
  #elementCache = new Map<string, IElementResult>();
  #stateCache = new Map<string, IStateResult>();

  public get icon() {
    return `img/icon_chara/Texture2D/icon_chara_all_${this.DF.toString().padStart(4, '0')}_00.png`;
  }

  public get genderTextIcon() {
    switch (this.GEN) {
      case 1:
        return '♂';
      case 2:
        return '♀';
      default:
        return '♂ ♀';
    }
  }

  public get skillsByLevel() {
    return Enumerable.from(this.SKILL)
      .groupBy((p) => p.LV)
      .orderBy((p) => p.key())
      .select((p) => ({
        level: p.key(),
        skillDfs: p.select((i) => i.DF).toArray(),
      }));
  }

  // skills
  public getRawSkills(level = MVList.maxLevel) {
    return this.SKILL
      .filter((p) => p.LV <= level)
      .map((p) => dataManager.skillById[p.DF])
      .filter((p) => p);
  }

  public getSkills(level = MVList.maxLevel) {
    const key = JSON.stringify({ level });
    if (!this.#skillCache.has(key)) {
      this.#skillCache.set(key, dataManager.removeOverrideSkills(this.getRawSkills(level)));
    }
    return this.#skillCache.get(key);
  }

  public getSkillWithComboSkills(level = MVList.maxLevel) {
    const key = JSON.stringify({ level });
    if (!this.#skillWithComboSkillCache.has(key)) {
      this.#skillWithComboSkillCache.set(key, dataManager.removeOverrideSkills(
        this.getSkills(level)
        .map((p) => [p].concat(p.combSkillList))
        .flat()
      ));
    }
    return this.#skillWithComboSkillCache.get(key);
  }

  public getBlazeArt(level = MVList.maxLevel, blazeArtLevel = 5) {
    const blazeArts = this.BA.filter((p) => p.LV <= level);
    if (!blazeArts.length) {
      return null;
    }
    const blazeArtLv = dataManager.blazeArtById[blazeArts[0].DF].LV;
    const blazeArt = blazeArtLv[blazeArtLevel - 1];
    return dataManager.skillById[blazeArt?.SKILL_DF];
  }

  //
  public getElement(element: string, level = MVList.maxLevel) {
    const key = JSON.stringify({ element, level });
    if (!this.#elementCache.has(key)) {
      const skills = this.getSkillWithComboSkills(level)
      .filter((p) => dataManager.lookup.elementMapSkillEffectTarget[element].includes(p.effectTarget) && p.effect === EBattleEffectKind.eSTATUS_FIX);
      this.#elementCache.set(key, {
        element,
        label: dataManager.lookup.element[element],
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
        skills,
        get total() {
          return this.value;
        },
      });
    }
    return this.#elementCache.get(key);
  }

  public getElements(level = MVList.maxLevel) {
    return Object.keys(dataManager.lookup.element).map((element) => this.getElement(element, level));
  }

  //
  public getFoodSpec(level = MVList.maxLevel) {
    return this.FDM[level - 1];
  }

  public getFoodState(state: string, foodLevel = MVList.maxLevel) {
    return this.getFoodSpec(foodLevel)?.[state] ?? 0;
  }

  public getBaseState(state: string, level = MVList.maxLevel) {
    return this.SPEC[state].getValue(level);
  }

  public getState(state: string, level = MVList.maxLevel, foodLevel = MVList.maxLevel) {
    const key = JSON.stringify({ state, level, foodLevel });
    if (!this.#stateCache.has(key)) {
      const baseSkills = this.getSkillWithComboSkills(level);
      const skills = ['QTH', 'DDG'].includes(state) ?
        baseSkills.filter((p) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state])
        : baseSkills.filter((p) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state] && p.effect === EBattleEffectKind.eSTATUS_FIX);
      this.#stateCache.set(key, {
        state,
        label: dataManager.lookup.state[state],
        value: this.getBaseState(state, level),
        foodValue: this.getFoodState(state, foodLevel),
        skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
        get total() {
          return this.value + this.foodValue + this.skillValue;
        },
        skills,
      });
    }
    return this.#stateCache.get(key);
  }

  public getStates(level = MVList.maxLevel, foodLevel = MVList.maxLevel) {
    return Object.keys(this.SPEC).map((state) => this.getState(state, level, foodLevel));
  }
}

export class Chara {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MScript;
  m_Name: string;

  @Type(_ => MVList)
  m_vList: MVList[];
}
