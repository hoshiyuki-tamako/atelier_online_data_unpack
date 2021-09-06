import {
  eAreaMulti as _eAreaMulti,
  EBattleEffectTarget as _EBattleEffectTarget,
  EBattleElementKind as _EBattleElementKind,
  EBattleEffectTrigger as _EBattleEffectTrigger,
  EBattleEffectKind as _EBattleEffectKind,
  EWeaponKind,
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
  11: '材料',
  12: '回復',
  13: '攻撃',
  14: '能力上昇',
  15: '探索',
  16: '料理',

  17: '特殊',

  20: '武器',
  21: '盾',
  31: '頭装備',
  32: '体装備',
  40: 'アクセサリー',
  50: '経験値',
  51: '武器強化',
  52: '防具強化',
  53: 'アクセ強化',
  54: '限界突破',
  55: '万能強化',
  56: 'ブレイズアーツ経験値',
};

export const weaponKind = {
  1: '剣',
  3: '槍',
  4: '弓',
  5: '杖',
  7: '大剣',
  9: 'メイス',
  12: '盾',
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
  0: '全種類',
  2001: '剣',
  2002: '両手槌',
  2003: '槍',
  2004: '弓',
  2005: '杖',
  2006: '双剣',
  2007: '大剣',
  2008: '魔導書',
  2009: 'メイス',
  2010: 'ナックル',
  2011: '銃',
  2012: '盾',
};

export const EDegreeMissonType = {
  0: '課題',
  1: '討伐',
  2: '調合',
  4: '探索',
  5: '他',
  6: 'ランキング',
};

export const EJobKind = {
  0: '無職',
  1: '錬金術師',
  2: '魔法使い',
  3: 'ヘビー戰士',
  4: '戰士',
  5: '射手',
  6: '回復',
  7: '銃使い',
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
  0: '無',
  1: '火',
  2: '水',
  3: '風',
  4: '土',
  5: '光',
  6: '闇',
};

export const eFieldItemRange = {
  1: '一人',
  2: '全人',
  3: '自分',
};

export const eFieldItemUse = {
  1: 'HP回復',
  2: '回復',
};

export const EAttackTargetKind = {
  0: '一人',
  1: '全人',
};

export const eEnemySize = {
  0: '小さい',
  1: '中',
  2: '大きい',
};

export const EQuestCategory = {
  0: '-',
  1: 'メーン',
  2: 'サイド',
  3: '依頼',
  4: '公認試験',
  5: 'キャラ',
  6: 'イベント Special',
  7: 'イベント Normal',
  8: 'イベント Extra',
};

export const EQuestType = {
  5001: '討伐',
  5002: '戦闘',
  5003: 'クエスト',
  5004: '調合',
  5005: '連携',
  5006: 'スキル',
  5007: '納品',
  5008: '調合',
  5009: 'アイテム',
  5010: '採集',
  5011: '区域',
  5012: '場所',
  5013: '町',
  5014: 'ダンジョン',
  5015: 'タッチ',
  5016: '対話アイテム',
  5017: '対話',
  5018: '対話納品',
};

export const EBattleAttribute = {
  0: '無種類',
  1: 'スラッシュ',
  2: '打撃',
  3: '魔法',
};

export const EBattleAttributeShort = {
  0: '物理',
  1: '物理',
  2: '物理',
  3: '魔法',
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
