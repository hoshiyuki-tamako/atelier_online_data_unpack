import fs from 'fs-extra';
import { Options } from 'html-minifier';
import path from 'path';

export class Option {

  // data name map
  public static itemCategoryLookUp = {
    11: '材料',
    12: '攻撃＆探索',
    13: '攻撃',
    14: '能力上昇',
    15: '探索',
    16: '料理',
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

  public static elementIdLookUp = {
    0: '無',
    1: '火',
    2: '水',
    3: '風',
    4: '土',
  };

  public static elementLookUp = {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  };

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
  
  public static questCategoryLookUp = {
    1: 'メーン',
    2: 'サイド',
    3: '依頼',
    4: '公認試験',
    5: 'キャラ',
    6: 'イベント',
    7: 'イベント',
    8: 'イベント',
  };

  // settings
  public static minifyOption = {
    minifyCSS: true,
    minifyURLs: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
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
    blazeArt: path.join(__dirname, '..', 'export', 'blaze_art.json'),
    chara: path.join(__dirname, '..', 'export', 'chara.json'),
    degree: path.join(__dirname, '..', 'export', 'degree.json'),
    enemy: path.join(__dirname, '..', 'export', 'enemy.json'),
    item: path.join(__dirname, '..', 'export', 'item.json'),
    quest: path.join(__dirname, '..', 'export', 'quest.json'),
    skill: path.join(__dirname, '..', 'export', 'skill.json'),
    zone: path.join(__dirname, '..', 'export', 'zone.json'),
    zoneeffect: path.join(__dirname, '..', 'export', 'zoneeffect.json'),
    fieldname: path.join(__dirname, '..', 'export', 'fieldname.json'),
    areaDetail: path.join(__dirname, '..', 'export', 'areaDetail.json'),
    areaInfo: path.join(__dirname, '..', 'export', 'areaInfo.json'),
    townInfo: path.join(__dirname, '..', 'export', 'townInfo.json'),
    dungeonInfo: path.join(__dirname, '..', 'export', 'dungeonInfo.json'),
    abnormalstate: path.join(__dirname, '..', 'export', 'abnormalstate.json'),
    abnormalstateeffect: path.join(__dirname, '..', 'export', 'abnormalstateeffect.json'),
    wealth: path.join(__dirname, '..', 'export', 'wealth.json'),
  };

  public static fileCache = {} as { [s: string]: unknown };

  public static async preLoadFiles() {
    return Promise.all(Object.values(this.exportDataPaths).map(this.loadFileFromCache.bind(this)));
  }

  public static async loadFileFromCache(path: string) {
    return this.fileCache[path] = this.fileCache[path] || await fs.readJSON(path);
  }

}