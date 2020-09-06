import fs from 'fs-extra';
import path from 'path';
import { Options } from 'html-minifier';

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

  public static importantItemLookUp = {
 //   1: 'アカデミーポイント',
    2: 'エーテル',
 //   4: 'コール',
    9000: '降臨メダル',
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
  public static blazeArtPath = path.join(__dirname, '..', 'export', 'blaze_art.json');
  public static charaPath = path.join(__dirname, '..', 'export', 'chara.json');
  public static degreePath = path.join(__dirname, '..', 'export', 'degree.json');
  public static enemyPath = path.join(__dirname, '..', 'export', 'enemy.json');
  public static itemPath = path.join(__dirname, '..', 'export', 'item.json');
  public static questPath = path.join(__dirname, '..', 'export', 'quest.json');
  public static skillPath = path.join(__dirname, '..', 'export', 'skill.json');
  public static abnomalstateeffectPath = path.join(__dirname, '..', 'export', 'abnomalstateeffect.json');
  public static zonePath = path.join(__dirname, '..', 'export', 'zone.json');
  public static zoneeffectPath = path.join(__dirname, '..', 'export', 'zoneeffect.json');
  public static fieldnamePath = path.join(__dirname, '..', 'export', 'fieldname.json');
  public static areaDetailPath = path.join(__dirname, '..', 'export', 'areaDetail.json');
  public static areaInfoPath = path.join(__dirname, '..', 'export', 'areaInfo.json');

  public static fileCache = {} as { [s: string]: unknown };

  public static async preLoadFiles() {
    return Promise.all([
      this.blazeArtPath,
      this.charaPath,
      this.degreePath,
      this.enemyPath,
      this.itemPath,
      this.questPath,
      this.skillPath,
      this.abnomalstateeffectPath,
      this.zonePath,
      this.zoneeffectPath,
      this.fieldnamePath,
      this.areaDetailPath,
    ].map(this.loadFileFromCache.bind(this)));
  }

  public static async loadFileFromCache(path: string) {
    if (this.fileCache[path]) {
      return this.fileCache[path];
    }

    return this.fileCache[path] = await fs.readJSON(path);
  }

}