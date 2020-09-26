import { dataManager } from './../utils/DataManager';
import { Type } from 'class-transformer';
import { Formula } from '@/logic/Formula';
import { List as SkillList } from '@/master/skill';

// custom types
export interface IElementResult {
  element: string;
  label: string;
  skills?: SkillList[],
  value: number;
  skillValue?: number;
  total: number;
}

export interface IStateResult {
  state: string;
  label: string;
  skills?: SkillList[],
  value: number;
  skillValue?: number;
  total: number;
}

// generated types
export class Enemy {
    m_GameObject: MGameObject;
    m_Enabled:    number;
    m_Script:     MGameObject;
    m_Name:       string;

    @Type(_ => MVList)
    m_vList:      MVList[];
    KindList:     KindList[];
    ModelList:    ModelList[];
}

export interface KindList {
    iKind:   number;
    strName: string;
}

export interface ModelList {
    sName:       string;
    iCategory:   number;
    fHitHigh:    number;
    fHitRadius:  number;
    fEffectSize: number;
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export class SPEC {
  @Type(_ => Formula)
  EXP: Formula;
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

export class SParam {
    MDL:   string;
    NAME:  string;
    DESC:  string;
    ELM:   Elm;
    SKILL: Skill[];
    @Type(_ => SPEC)
    SPEC: SPEC;
}

export class MVList {
  public static defaultLevel = 120;

    DF:                number;
    bBoss:             number;
    eAttackTargetKind: number;
    sNormalAttackFile: SNormalAttackFile;
    sBossStartFile:    string;
    sBossEndFile:      SBossEndFile;
    eKind:             number;
    iCategory:         number;
    musicID:           number;
    strName:           string;
    strAnotherName:    string;
    eSize:             number;
    bAura:             number;
    fViewRadius:       number;
    fViewCos:          number;
    fMoveRadius:       number;
    fMoveSpeed:        number;
    fHitRadius:        number;
    bOnlyOnline:       number;
    fCullingSide:      number;
    strDesc:           string;
    @Type(_ => SParam)
    sParam:            SParam;

  #elementCache = new Map<string, IElementResult>();
  #stateCache = new Map<string, IStateResult>();

  public get icon() {
    return `img/enemy_tex/Texture2D/enemy_tex_${this.sParam.MDL}.png`;
  }

  public get viewAngleDegree() {
    return Math.round(Math.acos(this.fViewCos) * (180/Math.PI));
  }

  //
  public getState(state: string, level: number) {
    const key = JSON.stringify({ state, level });
    if (!this.#stateCache.has(key)) {
      this.#stateCache.set(key, {
        state,
        label: dataManager.lookup.state[state],
        value: this.sParam.SPEC[state].getValue(level),
        get total() {
          return this.value;
        },
      });
    }
    return this.#stateCache.get(key);
  }

  public getStates(level: number) {
    return Object.keys(this.sParam.SPEC).map((state) => this.getState(state, level));
  }

  public getElement(element: string) {
    const key = JSON.stringify({ element });
    if (!this.#elementCache.has(element)) {
      this.#elementCache.set(key, {
        element,
        label: dataManager.lookup.element[element],
        value: this.sParam.ELM[element],
        get total() {
          return this.value;
        },
      });
    }
    return this.#elementCache.get(key);
  }

  public getElements() {
    return Object.keys(this.sParam.ELM).map((element) => this.getElement(element));
  }
}

export enum SBossEndFile {
    BossBattleEnd039 = "BossBattleEnd_039",
    BossBattleEnd040 = "BossBattleEnd_040",
    Empty = "",
}

export enum SNormalAttackFile {
    Empty = "",
    NormalAttackEnemy01 = "NormalAttack_Enemy_01",
    NormalAttackEnemy02_01 = "NormalAttack_Enemy_02_01",
    NormalAttackEnemy02_10 = "NormalAttack_Enemy_02_10",
    NormalAttackEnemy06 = "NormalAttack_Enemy_06",
    NormalAttackEnemy10_10 = "NormalAttack_Enemy_10_10",
    NormalAttackEnemy12 = "NormalAttack_Enemy_12",
    NormalAttackEnemy16 = "NormalAttack_Enemy_16",
    NormalAttackEnemy17 = "NormalAttack_Enemy_17",
    NormalAttackEnemy20 = "NormalAttack_Enemy_20",
    NormalAttackEnemy21 = "NormalAttack_Enemy_21",
    NormalAttackEnemy23 = "NormalAttack_Enemy_23",
    NormalAttackEnemy29 = "NormalAttack_Enemy_29",
    NormalAttackEnemy30 = "NormalAttack_Enemy_30",
    NormalAttackEnemy37 = "NormalAttack_Enemy_37",
    NormalAttackEnemy38 = "NormalAttack_Enemy_38",
    NormalAttackEnemy41 = "NormalAttack_Enemy_41",
    NormalAttackEnemy42_01 = "NormalAttack_Enemy_42_01",
    NormalAttackEnemy42_02 = "NormalAttack_Enemy_42_02",
    NormalAttackEnemy44 = "NormalAttack_Enemy_44",
}


export interface Elm {
    FIRE:  number;
    WATER: number;
    WIND:  number;
    EARTH: number;
    LIGHT: number;
    DARK:  number;
}

export interface Skill {
    DF: number;
}
