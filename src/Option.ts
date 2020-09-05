import fs from 'fs-extra';
import path from 'path';

export class Option {

  // data name map
  public static itemCategoryLoopUp = {
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
  }

  // paths
  public static viewFolder = path.join(__dirname, '..', 'views');
  public static outFolder = path.join(__dirname, '..', 'public');

  // files
  public static blazeArtPath = path.join(__dirname, '..', 'export', 'blaze_art.json');
  public static charaPath = path.join(__dirname, '..', 'export', 'chara.json');
  public static degreePath = path.join(__dirname, '..', 'export', 'degree.json');
  public static enemyPath = path.join(__dirname, '..', 'export', 'enemy.json');
  public static itemPath = path.join(__dirname, '..', 'export', 'item.json');
  public static questPath = path.join(__dirname, '..', 'export', 'quest.json');
  public static skillPath = path.join(__dirname, '..', 'export', 'skill.json');
  public static abnomalstateeffectPath = path.join(__dirname, '..', 'export', 'abnomalstateeffect.json');

  public static fileCache = {} as { [s: string]: unknown };

  public static async loadFileFromCache(path: string) {
    if (this.fileCache[path]) {
      return this.fileCache[path];
    }

    return this.fileCache[path] = await fs.readJSON(path);
  }

}