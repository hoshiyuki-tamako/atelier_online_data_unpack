import { EBattleEffectKind, eRaceKind } from '@/logic/Enums';
import { Formula } from '@/logic/Formula';
import { List as SkillList } from '@/master/skill';
import { Type } from 'class-transformer';
import Enumerable from 'linq';

import { dataManager } from '../utils/DataManager';

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
  @Type((_) => Formula)
  HP: Formula;
  @Type((_) => Formula)
  SATK: Formula;
  @Type((_) => Formula)
  SDEF: Formula;
  @Type((_) => Formula)
  MATK: Formula;
  @Type((_) => Formula)
  MDEF: Formula;
  @Type((_) => Formula)
  SPD: Formula;
  @Type((_) => Formula)
  SDA: Formula;
  @Type((_) => Formula)
  LDA: Formula;
  @Type((_) => Formula)
  QTH: Formula;
  @Type((_) => Formula)
  DDG: Formula;
  @Type((_) => Formula)
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
  public static hides = [3005];
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
  @Type((_) => SPEC)
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

  public get iconFile() {
    return `icon_chara_all_${this.DF.toString().padStart(4, '0')}_00.png`;
  }

  public get hasIcon() {
    return !!dataManager.files.img.icon_chara.Texture2D[this.iconFile];
  }

  public get icon() {
    if (!this.hasIcon) {
      return this.images[0] || this.otherImages[0] || 'data:,';
    }
    return `img/icon_chara/Texture2D/${this.iconFile}`;
  }

  public get faceIconFile() {
    return `icon_chara_face_${this.DF.toString().padStart(4, '0')}.png`;
  }

  public get hasFaceIcon() {
    return !!dataManager.files.img.icon_chara.Texture2D[this.faceIconFile];
  }

  public get faceIcon() {
    if (!this.hasFaceIcon) {
      return 'data:,';
    }
    return `img/icon_chara/Texture2D/${this.faceIconFile}`;
  }

  public get images() {
    return Object.values(dataManager.files.img.icon_chara.Texture2D)
      .filter((p) => p.startsWith(`icon_chara_all_${this.DF.toString().padStart(4, '0')}`))
      .map((p) => `img/icon_chara/Texture2D/${p}`);
  }

  public get otherImages() {
    const { images } = this;
    return dataManager.advCharacterByName[this.NAME]?.map((df) => Object.values(dataManager.files.img.icon_chara.Texture2D)
      .filter((p) => p.startsWith(`icon_chara_all_${df.toString().padStart(4, '0')}`))
      .map((p) => `img/icon_chara/Texture2D/${p}`)
      .filter((p) => !images.includes(p))).flat() ?? [];
  }

  public get genderTextIcon() {
    switch (this.GEN) {
      case eRaceKind.Human_Male:
        return '♂';
      case eRaceKind.Human_Female:
        return '♀';
      default:
        return '♂ ♀';
    }
  }

  public get hasBlazeArts() {
    return !!this.BA?.length;
  }

  public get quests() {
    return this.QST.map((p) => [p, dataManager.questById[p.QUEST_DF]])
      .filter(([, quest]) => quest);
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
      this.#skillCache.set(key, SkillList.removeOverrideSkills(this.getRawSkills(level)));
    }
    return this.#skillCache.get(key);
  }

  public getSkillWithComboSkills(level = MVList.maxLevel) {
    const key = JSON.stringify({ level });
    if (!this.#skillWithComboSkillCache.has(key)) {
      this.#skillWithComboSkillCache.set(key, SkillList.removeOverrideSkills(this.getSkills(level).map((p) => p.withComboSkills).flat()));
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

  public get maxBlazeArtLevel() {
    return dataManager.blazeArtById[this.BA[0]?.DF]?.LV.length || 0;
  }

  public totalFoods(startLevel = 1, endLevel = MVList.maxLevel) {
    return Enumerable.from(this.FDM)
      .where((p) => p.NO >= startLevel && p.NO <= endLevel)
      .selectMany((p) => p.FD)
      .groupBy((p) => p.DF)
      .select((p) => ({
        item: dataManager.itemById[p.key()],
        qualities: p.groupBy((o) => o.QTY).select((o) => ({
          quality: o.key(),
          count: o.count(),
        })).orderBy((o) => o.quality).toArray(),
      }))
      .where((p) => !!p.item)
      .orderBy((p) => p.item.DF)
      .toArray();
  }

  //
  public getElement(element: string, level = MVList.maxLevel) {
    const key = JSON.stringify({ element, level });
    if (!this.#elementCache.has(key)) {
      const skills = this.getSkillWithComboSkills(level)
        .filter((p) => dataManager.lookup.elementMapSkillEffectTarget[element].includes(p.effectTarget) && p.effect === EBattleEffectKind.eSTATUS_FIX);
      const result = {
        element,
        label: dataManager.lookup.element[element],
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
        skills,
        total: 0,
      };
      result.total = result.value;
      this.#elementCache.set(key, result);
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
      const skills = ['QTH', 'DDG'].includes(state)
        ? baseSkills.filter((p) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state])
        : baseSkills.filter((p) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state] && p.effect === EBattleEffectKind.eSTATUS_FIX);
      const result = {
        state,
        label: dataManager.lookup.state[state],
        value: this.getBaseState(state, level),
        foodValue: this.getFoodState(state, foodLevel),
        skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
        total: 0,
        skills,
      };
      result.total = result.value + result.foodValue + result.skillValue;
      this.#stateCache.set(key, result);
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

  @Type((_) => MVList)
  m_vList: MVList[];
}
