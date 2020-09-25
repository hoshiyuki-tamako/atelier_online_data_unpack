import { EBattleEffectKind } from '@/logic/Enums';
import { Formula } from '@/logic/Formula';
import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';
import { List as SkillList } from '@/master/skill';
import Enumerable from 'linq';

// custom types
export interface IElementResult {
  element: string;
  label: string;
  skills: SkillList[],
  value: number;
  skillValue: number;
  extraValue: number;
  total: number;
}

export interface IStateResult {
  state: string;
  label: string;
  skills: SkillList[],
  value: number;
  skillValue: number;
  extraValue: number;
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
  public static states = ['HP', 'SATK', 'SDEF', 'MATK', 'MDEF', 'SPD', 'QTH', 'DDG'];

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

  #elementCache = new Map<string, IElementResult>();
  #stateCache = new Map<string, IStateResult>();

  public get icon() {
    return `img/icon_s/Texture2D/icon_item_s_${this.DF}.png`;
  }

  public get elementChangeSkill() {
    return this.SPC.map((p) => p.SKILL)
    .flat()
    .map((p) => dataManager.skillById[p.DF])
    .find((skill) => skill.type === 2 && skill.effect === EBattleEffectKind.eELEMENT_CHANGE);
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

  public get hasSkill() {
    return this.SPC.some((p) => p.SKILL.length);
  }

  public getSkills(quality: number) {
    return Enumerable.from(this.SPC)
      .orderByDescending((p) => p.THR)
      .where((p) => p.THR <= quality)
      .firstOrDefault()
      ?.SKILL.map((p) => dataManager.skillById[p.DF])
      .filter((p) => p) || [];
  }

  public getElement(element: string, quality: number) {
    const key = JSON.stringify({ element, quality });
    if (!this.#elementCache.has(key)) {
      const baseSkills = this.getSkills(quality);
      const skills = baseSkills.filter((p) => dataManager.lookup.elementMapSkillEffectTarget[element].includes(p.effectTarget));
      this.#elementCache.set(key, {
        element,
        label: dataManager.lookup.element[element],
        skills,
        value: this.ELM[element],
        skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
        extraValue: 0,
        get total() {
          return this.value + this.skillValue + this.extraValue;
        },
      });
    }

    return this.#elementCache.get(key);
  }

  public getElements(quality: number) {
    return Object.keys(this.ELM).map((element) => this.getElement(element, quality));
  }

  public getState(state: string, quality: number, level: number) {
    const key = JSON.stringify({ state, quality, level });
    if (!this.#stateCache.has(key)) {
      const baseSkills = this.getSkills(quality);
      const skills = ['QTH', 'DDG'].includes(state) ?
        baseSkills.filter((p) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state])
        : baseSkills.filter((p) => p.effectTarget === dataManager.lookup.stateMapSkillEffectTarget[state] && p.effect === EBattleEffectKind.eSTATUS_FIX);
      this.#stateCache.set(key, {
        state,
        label: dataManager.lookup.state[state],
        skills,
        value: state in this.EQU ? this.EQU[state].getValue(level) : 0,
        extraValue: 0,
        skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
        get total() {
          return this.value + this.skillValue;
        },
      });
    }

    return this.#stateCache.get(key);
  }

  public getStates(quality: number, level: number) {
    return MVList.states.map((state) => this.getState(state, quality, level));
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
