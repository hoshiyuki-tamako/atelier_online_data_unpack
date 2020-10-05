import { EWeaponKind } from './Enums';

export const lookup = {
  // value lookups
  elementMapSkillEffectTarget: {
    FIRE: [21, 27],
    WATER: [22, 27],
    EARTH: [23, 27],
    WIND: [24, 27],
    LIGHT: [25, 27],
    DARK: [26, 27],
  },

  stateMapSkillEffectTarget: {
    HP: 1,
    SATK: 2,
    MATK: 3,
    SDEF: 4,
    MDEF: 5,
    SPD: 6,
    DDG: 8,
    QTH: 9,
  },

  twoHandledWeaponKind: [
    EWeaponKind.eLANCE,
    EWeaponKind.eBOW,
  ],

  // name lookups
  itemCategory: {
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
    56: 'ブレイズアーツ経験値'
  },
  weaponKind: {
    1: '剣',
    3: '槍',
    4: '弓',
    5: '杖',
    7: '大剣',
    9: 'メイス',
    12: '盾'
  },

  targetTeam: {
    0: '友',
    1: '敵',
  },

  state: {
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
  },

  element: {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  },

  skillType: {
    1: '主動スキル',
    2: '効果',
  },

  // enum lookup
  ESubCategory: {
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
  },
  EDegreeMissonType: {
    0: '課題',
    1: '討伐',
    2: '調合',
    4: '探索',
    5: '他',
    6: 'ランキング',
  },
  EJobKind: {
    0: '無職',
    1: '錬金術師',
    2: '魔法使い',
    3: 'ヘビー戰士',
    4: '戰士',
    5: '射手',
    6: '回復',
    7: '銃使い',
  },
  EBattleElementKind: {
    0: '無属性',
    1: '火属性',
    2: '水属性',
    3: '風属性',
    4: '土属性',
    5: '光属性',
    6: '闇属性',
  },
  eFieldItemRange: {
    1: '一人',
    2: '全人',
    3: '自分',
  },
  eFieldItemUse: {
    1: 'HP回復',
    2: '回復',
  },
  EAttackTargetKind: {
    0: '一人',
    1: '全人',
  },
  eEnemySize: {
    0: '小さい',
    1: '中',
    2: '大きい',
  },
  EQuestCategory: {
    0: '-',
    1: 'メーン',
    2: 'サイド',
    3: '依頼',
    4: '公認試験',
    5: 'キャラ',
    6: 'イベント Special',
    7: 'イベント Normal',
    8: 'イベント Extra',
  },
  EQuestType: {
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
    5018: '対話納品'
  },
  EBattleAttribute:
  {
    0: '無',
    1: 'スラッシュ',
    2: '打撃',
    3: '魔法',
  },
};
