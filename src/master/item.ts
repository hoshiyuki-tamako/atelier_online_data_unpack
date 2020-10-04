import { EBattleEffectKind, ECategory, ESubCategory, EWeaponKind } from '@/logic/Enums';
import { Formula } from '@/logic/Formula';
import { List as SkillList } from '@/master/skill';
import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';
import Enumerable from 'linq';

// custom types
export interface IElementResult {
  element: string;
  label: string;
  skills: SkillList[],
  addonSkill: SkillList | null,
  value: number;
  skillValue: number;
  addonValue: number;
  total: number;
}

export interface IStateResult {
  state: string;
  label: string;
  skills: SkillList[],
  addonSkill: SkillList | null,
  value: number;
  skillValue: number;
  addonValue: number;
  total: number;
}

// generated types
export class Item {
  m_GameObject: MGameObject;
  m_Enabled: number;
  m_Script: MGameObject;
  m_Name: string;

  @Type(_ => MVList)
  public m_vList: MVList[] = [];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
export class MVList {
  public static states = ['HP', 'SATK', 'SDEF', 'MATK', 'MDEF', 'SPD', 'QTH', 'DDG', 'SADD'];

  public static weaponKindCategory = [ECategory.eWEAPON, ECategory.eSHIELD];

  public static equipmentMaxLevel = 80;

  public static equipmentMaxQuality = 120;

  public static itemMaxQuality = 100;

  DF: number;
  CATEG: number;
  GEN: number;
  PRIO: number;
  KANA: string;
  ICON: number;
  NAME: string;
  DESC: string;
  MDL: number;
  SPC: Spc[];
  RST: Rst;
  RAR: number;
  EQU_BRD: number;
  RSP: Rsp[];
  ALT: Alt;
  @Type(_ => EQU)
  EQU: EQU;
  EQU_GND: EquGnd[];
  ELM: Elm;
  JOB: number[];
  WPN_KIND: number;
  GROUP_DF: number;
  CEIL_RWD_ITEM: CeilRWDItem[];
  RCP_TYPE: number;
  LRCP_CHARA: LrcpChara[];

  #elementChangeSkill: SkillList;
  #skillsCache = new Map<string, SkillList[]>();
  #skillWithComboSkillCache = new Map<string, SkillList[]>();
  #elementCache = new Map<string, IElementResult>();
  #stateCache = new Map<string, IStateResult>();

  public get icon() {
    return `img/icon_item_s/Texture2D/icon_item_s_${this.DF}.png`;
  }

  public get modelFolderName() {
    if (MVList.weaponKindCategory.includes(this.CATEG)) {
      return EWeaponKind[this.WPN_KIND]?.substring(1).toLocaleLowerCase() || '';
    }
    if (this.CATEG === ECategory.eHELM) {
      return 'helm';
    }
    // body
    if (this.CATEG === ECategory.eARMOR) {
      return 'body';
    }
    // accessory
    if (this.CATEG === ECategory.eACCESSORY) {
      if (this.GEN === ESubCategory.eFACE) {
        return 'acc_face';
      }
      if (this.GEN === ESubCategory.eBACK) {
        return 'acc_back';
      }
      return '';
    }
    return '';
  }

  public get model() {
    if (!this.MDL) {
      return '';
    }

    const name = this.modelFolderName;
    if (!name) {
      return name;
    }

    const id = this.MDL.toString().padStart(4, '0');
    return `models/items/${name}${id}/${name}${id}.fbx`;
  }

  public get genderTextIcon() {
    if (!this.EQU_GND.length || this.EQU_GND.some(p => !p.GEN)) {
      return ' ♂ ♀';
    } else if (this.EQU_GND.some((p) => p.ENB && p.GEN === 1)) {
      return '♂';
    } else if (this.EQU_GND.some((p) => p.ENB && p.GEN === 2)) {
      return '♀';
    } else {
      return '';
    }
  }

  public canGenderUseEquipment(gender: number) {
    return this.EQU_GND.some((p) => !p.GEN) || this.EQU_GND.some((p) => p.ENB && p.GEN === gender)
  }

  // skills
  public get elementChangeSkill() {
    return this.#elementChangeSkill ||= this.SPC.map((p) => p.SKILL)
      .flat()
      .map((p) => dataManager.skillById[p.DF])
      .find((skill) => skill.type === 2 && skill.effect === EBattleEffectKind.eELEMENT_CHANGE);
  }

  public get hasSkill() {
    return this.SPC.some((p) => p.SKILL.length);
  }

  public getSkills(quality = MVList.equipmentMaxQuality) {
    const key = JSON.stringify({ quality });
    if (!this.#skillsCache.has(key)) {
      this.#skillsCache.set(key, Enumerable.from(this.SPC)
        .orderByDescending((p) => p.THR)
        .where((p) => p.THR <= quality)
        .firstOrDefault()
        ?.SKILL.map((p) => dataManager.skillById[p.DF])
        .filter((p) => p) || []);
    }
    return this.#skillsCache.get(key);
  }

  public getSkillWithComboSkills(quality = MVList.equipmentMaxQuality) {
    const key = JSON.stringify({ quality });
    if (!this.#skillWithComboSkillCache.has(key)) {
      this.#skillWithComboSkillCache.set(key, this.getSkills(quality).map((p) => p.withComboSkills).flat());
    }
    return this.#skillWithComboSkillCache.get(key);
  }

  public getAttackSkill(quality = MVList.equipmentMaxQuality) {
    return this.getSkills(quality).find((p) => p.type === 1);
  }

  // elements
  public getElement(element: string, quality = MVList.equipmentMaxQuality, addonSkill: SkillList | null = null) {
    const key = JSON.stringify({ element, quality, addonSkill: addonSkill?.id });
    if (!this.#elementCache.has(key)) {
      const skillFilter = (p: SkillList) => dataManager.lookup.elementMapSkillEffectTarget[element].includes(p.effectTarget);
      const skills = this.getSkillWithComboSkills(quality).filter(skillFilter);
      const result = {
        element,
        label: dataManager.lookup.element[element],
        skills,
        addonSkill,
        value: this.ELM[element],
        skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
        addonValue: addonSkill ? addonSkill.withComboSkills.filter(skillFilter).reduce((sum, p) => sum + p.effectValue, 0) : 0,
        total: 0,
      };
      result.total = result.value + result.skillValue + result.addonValue;
      this.#elementCache.set(key, result);
    }

    return this.#elementCache.get(key);
  }

  public getElements(quality = MVList.equipmentMaxQuality, addonSkill: SkillList | null = null) {
    return Object.keys(this.ELM).map((element) => this.getElement(element, quality, addonSkill));
  }

  // state
  public getBaseState(state: string, level = MVList.equipmentMaxLevel) {
    return this.EQU[state]?.getValue(level) || 0;
  }

  public getState(state: string, quality = MVList.equipmentMaxQuality, level = MVList.equipmentMaxLevel, addonSkill: SkillList | null = null) {
    const key = JSON.stringify({ state, quality, level, addonSkill: addonSkill?.id });
    if (!this.#stateCache.has(key)) {
      const skillFilter = ['QTH', 'DDG'].includes(state) ?
        (p: SkillList) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state]
        : (p: SkillList) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state] && p.effect === EBattleEffectKind.eSTATUS_FIX;
      const skills = this.getSkillWithComboSkills(quality).filter(skillFilter);
      const result = {
        state,
        label: dataManager.lookup.state[state],
        skills,
        addonSkill,
        value: state in this.EQU ? this.EQU[state].getValue(level) : 0,
        skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
        addonValue: addonSkill ? addonSkill.withComboSkills.filter(skillFilter).reduce((sum, p) => sum + p.effectValue, 0) : 0,
        total: 0,
      };
      result.total = result.value + result.skillValue + result.addonValue;
      this.#stateCache.set(key, result);
    }

    return this.#stateCache.get(key);
  }

  public getStates(quality = MVList.equipmentMaxQuality, level = MVList.equipmentMaxLevel, addonSkill: SkillList | null = null) {
    return MVList.states.map((state) => this.getState(state, quality, level, addonSkill));
  }

  // support state
  public getSupportState(state: string, level = MVList.equipmentMaxLevel) {
    return {
      state,
      label: dataManager.lookup.state[state],
      value: state in this.EQU && Formula.supportStates.includes(state) ? this.EQU[state].getSupportValue(level) : 0,
    };
  }

  public getSupportStates(level = MVList.equipmentMaxLevel) {
    return Formula.supportStates.map((state) => this.getSupportState(state, level));
  }

  public getSupportElement(element: string) {
    return{
      element,
      label: dataManager.lookup.element[element],
      value: Formula.getSupportElement(this.ELM[element]),
    };
  }

  public getSupportElements() {
    return Object.keys(this.ELM).map(this.getSupportElement.bind(this));
  }
}

export interface Alt {
  CST: number;
  LV: number;
  EXP: number;
}

export interface CeilRWDItem {
  DF: number;
  CNT: number;
  QTY: number;
}

export interface Elm {
  FIRE: number;
  WATER: number;
  WIND: number;
  EARTH: number;
  LIGHT: number;
  DARK: number;
}

export class EQU {
  @Type(_  => Formula)
  EB: Formula;
  @Type(_  => Formula)
  SATK: Formula;
  @Type(_  => Formula)
  SDEF: Formula;
  @Type(_  => Formula)
  MATK: Formula;
  @Type(_  => Formula)
  MDEF: Formula;
  @Type(_  => Formula)
  SPD: Formula;
  @Type(_  => Formula)
  SDA: Formula;
  @Type(_  => Formula)
  LDA: Formula;
  @Type(_  => Formula)
  QTH: Formula;
  @Type(_  => Formula)
  DDG: Formula;
  @Type(_  => Formula)
  SADD: Formula;
  @Type(_  => Formula)
  RST_SLP: Formula;
  @Type(_  => Formula)
  @Type(_  => Formula)
  RST_PSN: Formula;
  @Type(_  => Formula)
  RST_BRN: Formula;
  @Type(_  => Formula)
  RST_FRZ: Formula;
  @Type(_  => Formula)
  RST_PRZ: Formula;
  @Type(_  => Formula)
  RST_DRK: Formula;
  @Type(_  => Formula)
  RST_SLN: Formula;
  @Type(_  => Formula)
  RST_CUS: Formula;
  @Type(_  => Formula)
  RST_SLW: Formula;
  @Type(_  => Formula)
  RST_STN: Formula;
}

export interface EquGnd {
  GEN: number;
  ENB: number;
}

export interface LrcpChara {
  DF: number;
}

export interface Rsp {
  NO: number;
  DF: number;
  NC: number;
}

export interface Rst {
  MN: number;
  ITEM: any[];
}

export interface Spc {
  THR: number;
  SKILL: Skill[];
}

export interface Skill {
  DF: number;
  VAL: number;
}
