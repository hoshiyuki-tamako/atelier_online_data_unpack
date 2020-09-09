import fs from 'fs-extra';
import { Options } from 'html-minifier';
import path from 'path';

export class Option {

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