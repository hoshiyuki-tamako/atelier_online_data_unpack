import fs from 'fs-extra';
import { Options } from 'html-minifier';
import path from 'path';

export class Option {

  // data name map
  // item look up
  public static itemCategoryLookUp = {
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

  public static fieldItemUseLookUp = {
    0: 'none',
    1: 'HP回復',
    2: '回復',
  };

  public static FieldItemRangeLookUp = {
    0: 'none',
    1: '1人',
    2: '全人',
  };

  public static weaponKindLookUp = {
    1: '剣',
    3: '槍',
    4: '弓',
    5: '杖',
    7: '大剣',
    9: 'メイス',
    12: '盾',
  };

  public static weaponGenLookUp = {
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
  public static elementLookUp = {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  };

  // state look up
  public static stateLookUp = {
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
  public static questCategoryLookUp = {
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
  public static skillEffectLookUp = {
    135: 'Monster Zone Effect',
    139: 'Zone Effect',
  };


  public static skillEffectTargetLookUp = {
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

  // enemy look up
  public static enemySizeLookUp = {
    0: 'Small',
    1: 'Medium',
    2: 'Large',
  };

  public static enemyEAttackTargetKindLookUp = {
    0: 'Single',
    1: 'All',
  };

  // settings
  public static minifyOption = {
    minifyCSS: true,
    minifyURLs: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseInlineTagWhitespace: true,
    collapseBooleanAttributes: true,
  } as Options;

  // paths
  public static viewFolder = path.join(__dirname, '..', 'views');
  public static outFolder = path.join(__dirname, '..', 'docs');

  // files
  public static exportDataPaths = {
    blazeArt: path.join(__dirname, '..', 'docs', 'export', 'blaze_art.json'),
    chara: path.join(__dirname, '..', 'docs', 'export', 'chara.json'),
    degree: path.join(__dirname, '..', 'docs', 'export', 'degree.json'),
    enemy: path.join(__dirname, '..', 'docs', 'export', 'enemy.json'),
    item: path.join(__dirname, '..', 'docs', 'export', 'item.json'),
    quest: path.join(__dirname, '..', 'docs', 'export', 'quest.json'),
    skill: path.join(__dirname, '..', 'docs', 'export', 'skill.json'),
    zone: path.join(__dirname, '..', 'docs', 'export', 'zone.json'),
    zoneeffect: path.join(__dirname, '..', 'docs', 'export', 'zoneeffect.json'),
    fieldname: path.join(__dirname, '..', 'docs', 'export', 'fieldname.json'),
    areaDetail: path.join(__dirname, '..', 'docs', 'export', 'areaDetail.json'),
    areaInfo: path.join(__dirname, '..', 'docs', 'export', 'areaInfo.json'),
    townInfo: path.join(__dirname, '..', 'docs', 'export', 'townInfo.json'),
    dungeonInfo: path.join(__dirname, '..', 'docs', 'export', 'dungeonInfo.json'),
    abnormalstate: path.join(__dirname, '..', 'docs', 'export', 'abnormalstate.json'),
    abnormalstateeffect: path.join(__dirname, '..', 'docs', 'export', 'abnormalstateeffect.json'),
    wealth: path.join(__dirname, '..', 'docs', 'export', 'wealth.json'),
    tips: path.join(__dirname, '..', 'docs', 'export', 'tips.json'),
    treasure: path.join(__dirname, '..', 'docs', 'export', 'treasure.json'),
    gateinfo: path.join(__dirname, '..', 'docs', 'export', 'gateinfo.json'),
    adventbattle: path.join(__dirname, '..', 'docs', 'export', 'adventbattle.json'),
    fieldItem: path.join(__dirname, '..', 'docs', 'export', 'fieldItem.json'),
    chat: path.join(__dirname, '..', 'docs', 'export', 'chat.json'),
  };

  public static fileCache = {} as { [s: string]: unknown };

  public static async preLoadFiles() {
    return Promise.all(Object.values(this.exportDataPaths).map(this.loadFileFromCache.bind(this)));
  }

  public static async loadFileFromCache(path: string) {
    return this.fileCache[path] = this.fileCache[path] || await fs.readJSON(path);
  }

}