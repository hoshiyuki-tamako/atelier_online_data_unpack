import { Type } from 'class-transformer';

export class Skill {
    m_GameObject: MGameObject;
    m_Enabled: number;
    m_Script: MGameObject;
    m_Name: string;
    @Type((_) => List)
    m_vList: List[];
    LargeCategoryName: LargeCategoryName[];
    CategoryList: CategoryList[];
}

export interface CategoryList {
    iInventoryKind: number;
    iLargeCategory: number;
    iID: number;
    sName: string;
}

export interface LargeCategoryName {
    iID: number;
    sName: string;
}

export interface MGameObject {
    m_FileID: number;
    m_PathID: number;
}

export class List {
  public static removeOverrideSkills(skills: List[]) {
    const overrideIds = skills.map((p) => p.overrideID).filter((p) => p);
    return skills.filter((p) => !overrideIds.includes(p.id));
  }

    id: number;
    name: string;
    detail: string;
    attribute: number;
    type: number;
    trigger: number;
    effect: number;
    effectValue: number;
    effectValue2: number;
    effectTarget: number;
    state: State[];
    stateOwn: State[];
    targetTeam: number;
    targetScope: number;
    element: number;
    shield: number;
    spAdd: number;
    coolTime: number;
    iconPath: IconPath;
    overrideID: number;
    markID: number;
    skillLV: number;
    rarity: number;
    category: number;
    specialVoiceID: number;
    enemyList: number[];
    enemyListJ: any[];
    combSkillListJ: any[];

    @Type((_) => List)
    combSkillList?: List[];

    public get icon() {
      return `img/icon_skill/Texture2D/${this.iconPath}.png`;
    }

    #attackSkill: List;

    public get attackSkill(): List {
      return this.#attackSkill ||= this.combSkillList.find((i) => i.effect === 1) || this;
    }

    public get withComboSkills() {
      return [this as List].concat(this.combSkillList);
    }
}

export enum IconPath {
    Empty = '',
    IconSkill01111 = 'icon_skill_01111',
    IconSkill01211 = 'icon_skill_01211',
    IconSkill01221 = 'icon_skill_01221',
    IconSkill01311 = 'icon_skill_01311',
    IconSkill01321 = 'icon_skill_01321',
    IconSkill01411 = 'icon_skill_01411',
    IconSkill01421 = 'icon_skill_01421',
    IconSkill01511 = 'icon_skill_01511',
    IconSkill01521 = 'icon_skill_01521',
    IconSkill01711 = 'icon_skill_01711',
    IconSkill01721 = 'icon_skill_01721',
    IconSkill02111 = 'icon_skill_02111',
    IconSkill02121 = 'icon_skill_02121',
    IconSkill02211 = 'icon_skill_02211',
    IconSkill02221 = 'icon_skill_02221',
    IconSkill02311 = 'icon_skill_02311',
    IconSkill02411 = 'icon_skill_02411',
    IconSkill02421 = 'icon_skill_02421',
    IconSkill02511 = 'icon_skill_02511',
    IconSkill02521 = 'icon_skill_02521',
    IconSkill02621 = 'icon_skill_02621',
    IconSkill03111 = 'icon_skill_03111',
    IconSkill03211 = 'icon_skill_03211',
    IconSkill03221 = 'icon_skill_03221',
    IconSkill03311 = 'icon_skill_03311',
    IconSkill03321 = 'icon_skill_03321',
    IconSkill03411 = 'icon_skill_03411',
    IconSkill03421 = 'icon_skill_03421',
    IconSkill03511 = 'icon_skill_03511',
    IconSkill03521 = 'icon_skill_03521',
    IconSkill04111 = 'icon_skill_04111',
    IconSkill04121 = 'icon_skill_04121',
    IconSkill04211 = 'icon_skill_04211',
    IconSkill04221 = 'icon_skill_04221',
    IconSkill04311 = 'icon_skill_04311',
    IconSkill04321 = 'icon_skill_04321',
    IconSkill04411 = 'icon_skill_04411',
    IconSkill04421 = 'icon_skill_04421',
    IconSkill04511 = 'icon_skill_04511',
    IconSkill04521 = 'icon_skill_04521',
    IconSkill04611 = 'icon_skill_04611',
    IconSkill04621 = 'icon_skill_04621',
    IconSkill05111 = 'icon_skill_05111',
    IconSkill05121 = 'icon_skill_05121',
    IconSkill06111 = 'icon_skill_06111',
    IconSkill06121 = 'icon_skill_06121',
    IconSkill06122 = 'icon_skill_06122',
    IconSkill07111 = 'icon_skill_07111',
    IconSkill07121 = 'icon_skill_07121',
    IconSkill07122 = 'icon_skill_07122',
    IconSkill07221 = 'icon_skill_07221',
    IconSkill07321 = 'icon_skill_07321',
    IconSkill07421 = 'icon_skill_07421',
    IconSkill07521 = 'icon_skill_07521',
    IconSkill08111 = 'icon_skill_08111',
    IconSkill08121 = 'icon_skill_08121',
    IconSkill09121 = 'icon_skill_09121',
    IconSkill10121 = 'icon_skill_10121',
    IconSkill11121 = 'icon_skill_11121',
}

export interface State {
    id: number;
    rate: number;
}
