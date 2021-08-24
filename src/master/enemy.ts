import { EBattleEffectKind } from '@/logic/Enums';
import { Formula } from '@/logic/Formula';
import { List as AreaInfoList } from '@/master/areaInfo';
import { List as SkillList } from '@/master/skill';
import { dataManager } from '@/utils/DataManager';
import { Type } from 'class-transformer';
import dotProp from 'dot-prop';

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
    m_Enabled: number;
    m_Script: MGameObject;
    m_Name: string;

    @Type((_) => MVList)
    m_vList: MVList[];
    KindList: KindList[];
    ModelList: ModelList[];
}

export interface KindList {
    iKind: number;
    strName: string;
}

export interface ModelList {
    sName: string;
    iCategory: number;
    fHitHigh: number;
    fHitRadius: number;
    fEffectSize: number;
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export class SPEC {
  @Type((_) => Formula)
  EXP: Formula;
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

export class SParam {
    MDL: string;
    NAME: string;
    DESC: string;
    ELM: Elm;
    SKILL: Skill[];
    @Type((_) => SPEC)
    SPEC: SPEC;
}

export class MVList {
  public static defaultLevel = 120;

    DF: number;
    bBoss: number;
    eAttackTargetKind: number;
    sNormalAttackFile: SNormalAttackFile;
    sBossStartFile: string;
    sBossEndFile: SBossEndFile;
    eKind: number;
    iCategory: number;
    musicID: number;
    strName: string;
    strAnotherName: string;
    eSize: number;
    bAura: number;
    fViewRadius: number;
    fViewCos: number;
    fMoveRadius: number;
    fMoveSpeed: number;
    fHitRadius: number;
    bOnlyOnline: number;
    fCullingSide: number;
    strDesc: string;
    @Type((_) => SParam)
    sParam: SParam;

  #appearAreas: AreaInfoList[];

  #elementChangeSkill: SkillList;
  #skills: SkillList[];
  #skillWithComboSkills: SkillList[];
  #elementCache = new Map<string, IElementResult>();
  #stateCache = new Map<string, IStateResult>();

  public get model() {
    const folder = `Enemy${this.sParam.MDL}`;
    if (!this.sParam.MDL) {
      return '';
    }

    const localeDotPathFolder = `${dataManager.serverId}.models.enemies.${folder}`;
    if (dotProp.get(dataManager.files, localeDotPathFolder)) {
      return `${localeDotPathFolder.replace(/\./g, '/')}/${folder}.fbx`;
    } else if (dataManager.files[dataManager.baseServerId]?.models.enemies[folder]) {
      return `${dataManager.baseServerId}/models/enemies/${folder}/${folder}.fbx`;
    } else {
      return '';
    }
  }

  public get icon() {
    if (!this.sParam.MDL) {
      return 'data:,';
    }

    const filename = `enemy_tex_${this.sParam.MDL}.png`;

    const localeDotPathFolder = `${dataManager.serverId}.img.enemy_tex.${filename}`;
    if (dotProp.get(dataManager.files, localeDotPathFolder)) {
      return localeDotPathFolder.replace(/\./g, '/');
    } else if (dataManager.files.img.enemy_tex.Texture2D[filename]) {
      return `img/enemy_tex/Texture2D/${filename}`;
    } else {
      return 'data:,';
    }
  }

  public get viewAngleDegree() {
    return Math.round(Math.acos(this.fViewCos) * (180 / Math.PI));
  }

  public get appearAreas() {
    if (!this.#appearAreas) {
      const spawnerDataAreaIds = [...dataManager.spawnerDataManager.spawnLists.entries()].map(([csvFileName, spawnerDatas]) => ({
        csvFileName,
        spawners: spawnerDatas.filter((i) => i.spawnerKind === 3 && i.DF === this.DF),
      }))
        .filter((p) => p.spawners.length)
        .map((p) => +p.csvFileName.split('_')[1]);

      const areaIds = dataManager.areaDetail.List
        .filter((i) => i.iEnemyIDList.includes(this.DF))
        .map((p) => p.iAreaID);

      this.#appearAreas = [...new Set(spawnerDataAreaIds.concat(areaIds))]
        .sort((a, b) => a - b)
        .map((id) => dataManager.areaInfoById[id])
        .filter((p) => p);
    }
    return this.#appearAreas;
  }

  // skill
  public get skills() {
    return this.#skills ??= this.sParam.SKILL.map((p) => dataManager.skillById[p.DF]).filter((p) => p);
  }

  public get skillsWithComboSkills() {
    return this.#skillWithComboSkills ??= this.sParam.SKILL.map((p) => dataManager.skillById[p.DF])
      .filter((p) => p)
      .map((skill) => skill.withComboSkills)
      .flat();
  }

  public get attackSkills() {
    return this.skills.filter((p) => p.type === 1);
  }

  public get elementChangeSkill() {
    return this.#elementChangeSkill ??= this.skills.find((skill) => skill.type === 2 && skill.effect === EBattleEffectKind.eELEMENT_CHANGE);
  }

  // state
  public getState(state: string, level: number) {
    const key = JSON.stringify({ state, level });
    if (!this.#stateCache.has(key)) {
      let value = this.sParam.SPEC[state].getValue(level);
      // due to the game use SATK for magic attack, we need to work around for getState
      if (!value && state === 'MATK') {
        value = this.sParam.SPEC.SATK.getValue(level);
      }

      const result = {
        state,
        label: dataManager.lookup.state[state],
        value,
        total: 0,
      };
      result.total = result.value;
      this.#stateCache.set(key, result);
    }
    return this.#stateCache.get(key);
  }

  public getStates(level: number) {
    return Object.keys(this.sParam.SPEC).map((state) => this.getState(state, level));
  }

  // element
  public getElement(element: string) {
    const key = JSON.stringify({ element });
    if (!this.#elementCache.has(element)) {
      const result = {
        element,
        label: dataManager.lookup.element[element],
        value: this.sParam.ELM[element],
        total: 0,
      };
      result.total = result.value;
      this.#elementCache.set(key, result);
    }
    return this.#elementCache.get(key);
  }

  public getElements() {
    return Object.keys(this.sParam.ELM).map((element) => this.getElement(element));
  }
}

export enum SBossEndFile {
    BossBattleEnd039 = 'BossBattleEnd_039',
    BossBattleEnd040 = 'BossBattleEnd_040',
    Empty = '',
}

export enum SNormalAttackFile {
    Empty = '',
    NormalAttackEnemy01 = 'NormalAttack_Enemy_01',
    NormalAttackEnemy02_01 = 'NormalAttack_Enemy_02_01',
    NormalAttackEnemy02_10 = 'NormalAttack_Enemy_02_10',
    NormalAttackEnemy06 = 'NormalAttack_Enemy_06',
    NormalAttackEnemy10_10 = 'NormalAttack_Enemy_10_10',
    NormalAttackEnemy12 = 'NormalAttack_Enemy_12',
    NormalAttackEnemy16 = 'NormalAttack_Enemy_16',
    NormalAttackEnemy17 = 'NormalAttack_Enemy_17',
    NormalAttackEnemy20 = 'NormalAttack_Enemy_20',
    NormalAttackEnemy21 = 'NormalAttack_Enemy_21',
    NormalAttackEnemy23 = 'NormalAttack_Enemy_23',
    NormalAttackEnemy29 = 'NormalAttack_Enemy_29',
    NormalAttackEnemy30 = 'NormalAttack_Enemy_30',
    NormalAttackEnemy37 = 'NormalAttack_Enemy_37',
    NormalAttackEnemy38 = 'NormalAttack_Enemy_38',
    NormalAttackEnemy41 = 'NormalAttack_Enemy_41',
    NormalAttackEnemy42_01 = 'NormalAttack_Enemy_42_01',
    NormalAttackEnemy42_02 = 'NormalAttack_Enemy_42_02',
    NormalAttackEnemy44 = 'NormalAttack_Enemy_44',
}

export interface Elm {
    FIRE: number;
    WATER: number;
    WIND: number;
    EARTH: number;
    LIGHT: number;
    DARK: number;
}

export interface Skill {
    DF: number;
}
