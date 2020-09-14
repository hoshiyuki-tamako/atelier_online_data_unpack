export class LookupChinese {
  public static itemCategory = {
    0: 'none',
    11: '材料',
    12: '攻撃＆探索',
    13: '攻撃',
    14: '能力增強',
    15: '探索',
    16: '料理',

    // 17: 'Unique'

    20: '武器',
    21: '盾',
    31: '頭裝備',
    32: '身體裝備',
    40: '飾物',
    50: '經驗値',
    51: '武器強化',
    52: '防具強化',
    53: '飾物強化',
    54: '限界突破',
    55: '萬能強化',
    56: 'BlazeArt經驗值',
  };

  public static fieldItemUse = {
    0: 'none',
    1: 'HP回復',
    2: '回復',
  };

  public static fieldItemRange = {
    0: '-',
    1: '1人',
    2: '全人',
    3: '自',
  };

  public static weaponKind = {
    1: '剣',
    3: '槍',
    4: '弓',
    5: '杖',
    7: '大剣',
    9: '錘',
    12: '盾',
  };

  public static weaponGen = {
    0: '全種類',
    2001: '剣',
    2003: '槍',
    2004: '弓',
    2005: '杖',
    2006: '大剣',
    2007: '大剣',
    2009: '錘',
    2012: '盾',
  };

  // element look up
  public static element = {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  };

  // state look up
  public static state = {
    EXP: 'EXP',
    HP: 'HP',
    SATK: '物理攻撃',
    SDEF: '物理防禦',
    MATK: '魔法攻撃',
    MDEF: '魔法防禦',
    SPD: '速度',
    SDA: 'SP上限?',
    LDA: 'LDA',
    QTH: 'SP回復量?',
    DDG: '回避',
    SADD: 'SADD',
  };

  // quest look up
  public static questCategory = {
    0: 'none',
    1: '主線',
    2: '次要',
    3: '依頼',
    4: '公認試験',
    5: '角色',
    6: '活動 Special',
    7: '活動 Normal',
    8: '活動 Extra',
  };

  // skill look up
  public static skillEffect = {
    101: '属性値増加',
    135: 'Monster Zone Effect',
    139: 'Zone Effect',
  };

  public static skillEffectTarget = {
    0: 'none',
    1: 'HP',
    2: '物攻強化',
    3: '魔攻強化',
    4: '物防強化',
    5: '魔防強化',
    6: '速度',
    7: '命中率',

    8: '回避',
    9: '暴擊',
    10: 'SKILL',

    21: '火属性値増加',
    22: '水属性値増加',
    23: '土属性値増加',
    24: '風属性値増加',
    25: '光属性値増加',
    26: '闇属性値増加',
    27: '火、土、風、水、光、闇の属性'
  };

  public static elementMapSkillEffectTarget = {
    FIRE: [21, 27],
    WATER: [22, 27],
    EARTH: [23, 27],
    WIND: [24, 27],
    LIGHT: [25, 27],
    DARK: [26, 27],
  };

  public static stateMapSkillEffectTarget = {
    HP: 1,
    SATK: 2,
    MATK: 3,
    SDEF: 4,
    MDEF: 5,
    SPD: 6,
  };

  // enemy look up
  public static enemySize = {
    0: 'Small',
    1: 'Medium',
    2: 'Large',
  };

  public static enemyEAttackTargetKind = {
    0: 'Single',
    1: 'All',
  };

  public static eJobKindLookup = {
    0: '-',
    1: '錬金術師',
    2: '魔法使',
    3: '重戰士',
    4: '戰士',
    5: '射手',
    6: '回復',
    7: '槍手',
  };
}

export class Lookup {
  public static itemCategory = {
    0: 'none',
    11: '材料',
    12: '攻撃＆探索',
    13: '攻撃',
    14: '能力上昇',
    15: '探索',
    16: '料理',

    // 17: 'Unique'

    20: '武器',
    21: '盾',
    31: '頭裝備',
    32: '体裝備',
    40: 'アクセサリー',
    50: '経験値',
    51: '武器強化',
    52: '防具強化',
    53: 'アクセ強化',
    54: '限界突破',
    55: '万能強化',
    56: 'ブレイズアーツ経験値',
  };

  public static fieldItemUse = {
    0: 'none',
    1: 'HP回復',
    2: '回復',
  };

  public static fieldItemRange = {
    0: '-',
    1: '1人',
    2: '全人',
    3: '自',
  };

  public static weaponKind = {
    1: '剣',
    3: '槍',
    4: '弓',
    5: '杖',
    7: '大剣',
    9: 'メイス',
    12: '盾',
  };

  public static weaponGen = {
    0: '全種類',
    2001: '剣',
    2003: '槍',
    2004: '弓',
    2005: '杖',
    2006: '大剣',
    2007: '大剣',
    2009: 'メイス',
    2012: '盾',
  };

  // element look up
  public static element = {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  };

  // state look up
  public static state = {
    EXP: 'EXP',
    HP: 'HP',
    SATK: '物理攻撃',
    SDEF: '物理防禦',
    MATK: '魔法攻撃',
    MDEF: '魔法防禦',
    SPD: '速度',
    SDA: 'SP上限?',
    LDA: 'LDA',
    QTH: 'SP回復量?',
    DDG: '回避',
    SADD: 'SADD',
  };

  // quest look up
  public static questCategory = {
    0: 'none',
    1: 'メーン',
    2: 'サイド',
    3: '依頼',
    4: '公認試験',
    5: 'キャラ',
    6: 'イベント Special',
    7: 'イベント Normal',
    8: 'イベント Extra',
  };

  // skill look up
  public static skillEffect = {
    101: '属性値増加',
    135: 'Monster Zone Effect',
    139: 'Zone Effect',
  };

  public static skillEffectTarget = {
    0: 'none',
    1: 'HP',
    2: '物攻強化',
    3: '魔攻強化',
    4: '物防強化',
    5: '魔防強化',
    6: '素早さ',
    7: '命中率',

    8: '回避',
    9: 'クリティカル',
    10: 'SKILL',


    21: '火属性値増加',
    22: '水属性値増加',
    23: '土属性値増加',
    24: '風属性値増加',
    25: '光属性値増加',
    26: '闇属性値増加',
    27: '火、土、風、水、光、闇の属性'
  };

  public static elementMapSkillEffectTarget = {
    FIRE: [21, 27],
    WATER: [22, 27],
    EARTH: [23, 27],
    WIND: [24, 27],
    LIGHT: [25, 27],
    DARK: [26, 27],
  };

  public static stateMapSkillEffectTarget = {
    HP: 1,
    SATK: 2,
    MATK: 3,
    SDEF: 4,
    MDEF: 5,
    SPD: 6,
  };

  // enemy look up
  public static enemySize = {
    0: 'Small',
    1: 'Medium',
    2: 'Large',
  };

  public static enemyEAttackTargetKind = {
    0: 'Single',
    1: 'All',
  };

  public static eJobKindLookup = {
    0: '-',
    1: '錬金術師',
    2: '魔法使い',
    3: 'ヘビー戰士',
    4: '戰士',
    5: '射手',
    6: '回復',
    7: '銃使い',
  };
}