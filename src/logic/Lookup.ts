import {
  eAreaMulti as _eAreaMulti,
  EBattleEffectTarget as _EBattleEffectTarget,
  EBattleElementKind as _EBattleElementKind,
  EBattleEffectTrigger as _EBattleEffectTrigger,
  EBattleEffectKind as _EBattleEffectKind,
  ECategory,
  EWeaponKind,
  ESubCategory as _ESubCategory,
  EDegreeMissonType as _EDegreeMissonType,
  EJobKind as _EJobKind,
  eFieldItemRange as _eFieldItemRange,
  eFieldItemUse as _eFieldItemUse,
  eAttackTargetKind as _eAttackTargetKind,
  eEnemySize as _eEnemySize,
  EQuestCategory as _EQuestCategory,
  EQuestType as _EQuestType,
  EBattleAttribute as _EBattleAttribute,
} from './Enums';

export const elementMapSkillEffectTarget = {
  FIRE: [21, 27],
  WATER: [22, 27],
  EARTH: [23, 27],
  WIND: [24, 27],
  LIGHT: [25, 27],
  DARK: [26, 27],
};

export const stateMapSkillEffectTarget = {
  HP: 1,
  SATK: 2,
  MATK: 3,
  SDEF: 4,
  MDEF: 5,
  SPD: 6,
  DDG: 8,
  QTH: 9,
};

export const twoHandledWeaponKind = [
  EWeaponKind.eLANCE,
  EWeaponKind.eBOW,
];

// name lookups
export const itemCategory = {
  [ECategory.eMATERIAL]: '材料',
  [ECategory.eRECOVERY]: '回復',
  [ECategory.eBOMB]: '攻撃',
  [ECategory.eSUPPORT]: '能力上昇',
  [ECategory.eTOOL]: '探索',
  [ECategory.eFOOD]: '料理',

  [ECategory.eUNIQUE]: '特殊',

  [ECategory.eWEAPON]: '武器',
  [ECategory.eSHIELD]: '盾',
  [ECategory.eHELM]: '頭装備',
  [ECategory.eARMOR]: '体装備',
  [ECategory.eACCESSORY]: 'アクセサリー',
  [ECategory.eGROW_CHARA]: '経験値',
  [ECategory.eGROW_WEAPON]: '武器強化',
  [ECategory.eGROW_ARMOR]: '防具強化',
  [ECategory.eGROW_ACCESSORY]: 'アクセ強化',
  [ECategory.eGROW_STONE]: '限界突破',
  [ECategory.eGROW_OTHER]: '万能強化',
  [ECategory.eGROW_BLAZE_ARTS]: 'ブレイズアーツ経験値',
};

export const weaponKind = {
  [EWeaponKind.eSWORD]: '剣',
  [EWeaponKind.eLANCE]: '槍',
  [EWeaponKind.eBOW]: '弓',
  [EWeaponKind.eROD]: '杖',
  [EWeaponKind.eBLADE]: '大剣',
  [EWeaponKind.eMACE]: 'メイス',
  [EWeaponKind.eSHIELD]: '盾',
};

export const targetTeam = {
  0: '友',
  1: '敵',
};

export const state = {
  EXP: 'EXP',
  HP: 'HP',
  SATK: '物理攻撃',
  SDEF: '物理防禦',
  MATK: '魔法攻撃',
  MDEF: '魔法防禦',
  SPD: '速度',
  SDA: '命中率(近く)',
  LDA: '命中率(距離)',
  QTH: 'クリティカル',
  DDG: '回避',
  SADD: 'SP回復量',
};

export const element = {
  FIRE: '火',
  WATER: '水',
  WIND: '風',
  EARTH: '土',
  LIGHT: '光',
  DARK: '闇',
};

export const skillType = {
  1: '主動スキル',
  2: '効果',
};

export const attackType = {
  0: '物理',
  1: '魔法',
};

// enum lookup
export const ESubCategory = {
  [_ESubCategory.eALL]: '全種類',
  [_ESubCategory.eSWORD]: '剣',
  [_ESubCategory.eHAMMER]: '両手槌',
  [_ESubCategory.eLANCE]: '槍',
  [_ESubCategory.eBOW]: '弓',
  [_ESubCategory.eROD]: '杖',
  [_ESubCategory.eDUAL]: '双剣',
  [_ESubCategory.eBLADE]: '大剣',
  [_ESubCategory.eBOOK]: '魔導書',
  [_ESubCategory.eMACE]: 'メイス',
  [_ESubCategory.eKNUCKLE]: 'ナックル',
  [_ESubCategory.eGUN]: '銃',
  [_ESubCategory.eSHIELD]: '盾',
};

export const EDegreeMissonType = {
  [_EDegreeMissonType.eNONE]: '課題',
  [_EDegreeMissonType.eSUBJUGATION]: '討伐',
  [_EDegreeMissonType.eALTER]: '調合',
  [_EDegreeMissonType.eEXPLORE]: '探索',
  [_EDegreeMissonType.eOTHER]: '他',
  [_EDegreeMissonType.eRANKING]: 'ランキング',
};

export const EJobKind = {
  [_EJobKind.eNONE]: '無職',
  [_EJobKind.eALCHEMIST]: '錬金術師',
  [_EJobKind.eWITCH]: '魔法使い',
  [_EJobKind.eHEAVY_FIGHTER]: 'ヘビー戰士',
  [_EJobKind.eFIGHTER]: '戰士',
  [_EJobKind.eARCHER]: '射手',
  [_EJobKind.eMONK]: '回復',
  [_EJobKind.eGUNNER]: '銃使い',
};

export const EBattleElementKind = {
  [_EBattleElementKind.eNONE]: '無属性',
  [_EBattleElementKind.eFIRE]: '火属性',
  [_EBattleElementKind.eWATER]: '水属性',
  [_EBattleElementKind.eWIND]: '風属性',
  [_EBattleElementKind.eEARTH]: '土属性',
  [_EBattleElementKind.eLIGHT]: '光属性',
  [_EBattleElementKind.eDARK]: '闇属性',
};

export const EBattleElementKindShort = {
  [_EBattleElementKind.eNONE]: '無',
  [_EBattleElementKind.eFIRE]: '火',
  [_EBattleElementKind.eWATER]: '水',
  [_EBattleElementKind.eWIND]: '風',
  [_EBattleElementKind.eEARTH]: '土',
  [_EBattleElementKind.eLIGHT]: '光',
  [_EBattleElementKind.eDARK]: '闇',
};

export const eFieldItemRange = {
  [_eFieldItemRange.None]: '',
  [_eFieldItemRange.One]: '一人',
  [_eFieldItemRange.All]: '全人',
  [_eFieldItemRange.EnumMax]: '自分',
};

export const eFieldItemUse = {
  [_eFieldItemUse.HPHeal]: 'HP回復',
  [_eFieldItemUse.Recovery]: '回復',
};

export const EAttackTargetKind = {
  [_eAttackTargetKind.One]: '一人',
  [_eAttackTargetKind.All]: '全人',
};

export const eEnemySize = {
  [_eEnemySize.Small]: '小さい',
  [_eEnemySize.Medium]: '中',
  [_eEnemySize.Large]: '大きい',
};

export const EQuestCategory = {
  [_EQuestCategory.None]: '-',
  [_EQuestCategory.Main]: 'メーン',
  [_EQuestCategory.Side]: 'サイド',
  [_EQuestCategory.Sub_Normal]: '依頼',
  [_EQuestCategory.Sub_Extra]: '公認試験',
  [_EQuestCategory.Chara]: 'キャラ',
  [_EQuestCategory.Event_Special]: 'イベント Special',
  [_EQuestCategory.Event_Normal]: 'イベント Normal',
  [_EQuestCategory.Event_Extra]: 'イベント Extra',
};

export const EQuestType = {
  [_EQuestType.Subjugation]: '討伐',
  [_EQuestType.Battle]: '戦闘',
  [_EQuestType.Quest]: 'クエスト',
  [_EQuestType.Alter]: '調合',
  [_EQuestType.SkillChain]: '連携',
  [_EQuestType.ActiveSkill]: 'スキル',
  [_EQuestType.Delivery]: '納品',
  [_EQuestType.Alchemy]: '調合',
  [_EQuestType.Item]: 'アイテム',
  [_EQuestType.Pickup]: '採集',
  [_EQuestType.Area]: '区域',
  [_EQuestType.Place]: '場所',
  [_EQuestType.Town]: '町',
  [_EQuestType.Dungeon]: 'ダンジョン',
  [_EQuestType.Touch]: 'タッチ',
  [_EQuestType.TalkItem]: '対話アイテム',
  [_EQuestType.Talk]: '対話',
  [_EQuestType.TalkDelivery]: '対話納品',
};

export const EBattleAttribute = {
  [_EBattleAttribute.eNONE]: '無種類',
  [_EBattleAttribute.eSLASH_DAMAGED]: 'スラッシュ',
  [_EBattleAttribute.eBLOW_DAMAGED]: '爆発',
  [_EBattleAttribute.eMAGIC_DAMAGED]: '魔法',
};

export const EBattleAttributeShort = {
  [_EBattleAttribute.eNONE]: '物理',
  [_EBattleAttribute.eSLASH_DAMAGED]: '物理',
  [_EBattleAttribute.eBLOW_DAMAGED]: '物理',
  [_EBattleAttribute.eMAGIC_DAMAGED]: '魔法',
};

export const eAreaMulti = {
  [_eAreaMulti.Free]: '',
  [_eAreaMulti.Single]: '',
  [_eAreaMulti.Multi]: '',
  [_eAreaMulti.EnumMax]: '',
};

export const EBattleEffectKind = {
  [_EBattleEffectKind.eDAMAGE_RATE]: '攻撃',
};

export const EBattleEffectTarget = {
  [_EBattleEffectTarget.eNONE]: '',
  [_EBattleEffectTarget.eHP]: state.HP,
  [_EBattleEffectTarget.eSATK]: state.SATK,
  [_EBattleEffectTarget.eMATK]: state.MATK,
  [_EBattleEffectTarget.eSDEF]: state.SDEF,
  [_EBattleEffectTarget.eMDEF]: state.MDEF,
  [_EBattleEffectTarget.eSPD]: state.SPD,
  [_EBattleEffectTarget.eHIT]: '',
  [_EBattleEffectTarget.eAVOID]: state.DDG,
  [_EBattleEffectTarget.eCRITICAL]: state.QTH,
  [_EBattleEffectTarget.eSKILL]: 'スキル',
  [_EBattleEffectTarget.eSATK_SDEF]: `${state.SATK} ${state.SDEF}`,
  [_EBattleEffectTarget.eSATK_SPD]: `${state.SATK} ${state.SPD}`,
  [_EBattleEffectTarget.eSDEF_SPD]: `${state.SDEF} ${state.SPD}`,
  [_EBattleEffectTarget.eMATK_MDEF]: `${state.MATK} ${state.MDEF}`,
  [_EBattleEffectTarget.eMATK_SPD]: `${state.MATK} ${state.SPD}`,
  [_EBattleEffectTarget.eMDEF_SPD]: `${state.MDEF} ${state.SPD}`,
  [_EBattleEffectTarget.eSALL]: '',
  [_EBattleEffectTarget.eMALL]: '',
  [_EBattleEffectTarget.eALL]: '',
  [_EBattleEffectTarget.eEL_NONE]: EBattleElementKind[_EBattleElementKind.eNONE],
  [_EBattleEffectTarget.eEL_FIRE]: EBattleElementKind[_EBattleElementKind.eFIRE],
  [_EBattleEffectTarget.eEL_WATER]: EBattleElementKind[_EBattleElementKind.eWATER],
  [_EBattleEffectTarget.eEL_EARTH]: EBattleElementKind[_EBattleElementKind.eEARTH],
  [_EBattleEffectTarget.eEL_WIND]: EBattleElementKind[_EBattleElementKind.eWIND],
  [_EBattleEffectTarget.eEL_LIGHT]: EBattleElementKind[_EBattleElementKind.eLIGHT],
  [_EBattleEffectTarget.eEL_DARK]: EBattleElementKind[_EBattleElementKind.eDARK],
  [_EBattleEffectTarget.eEL_ALL]: '全属性',
};
