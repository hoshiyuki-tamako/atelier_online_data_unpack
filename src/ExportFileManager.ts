import fs from 'fs-extra';
import path from 'path';

export class ExportFileManager {

  public region = '';

  // paths
  public htmlRoot = path.join(__dirname, '..', 'docs');
  public rootFolderRelativePath = '';
  public viewFolder = path.join(__dirname, '..', 'views');
  public outFolder = path.join(this.htmlRoot);
  public exportFolder = path.join(this.htmlRoot, 'export');
  public spawnDataFolder = path.join(this.exportFolder, 'SpawnList', 'TextAsset');

  // files
  public exportDataFilenameMap = {
    blazeArt: 'blaze_art.json',
    chara: 'chara.json',
    degree: 'degree.json',
    enemy: 'enemy.json',
    item: 'item.json',
    quest: 'quest.json',
    skill: 'skill.json',
    zone: 'zone.json',
    zoneeffect: 'zoneeffect.json',
    fieldname: 'fieldname.json',
    areaDetail: 'areaDetail.json',
    areaInfo: 'areaInfo.json',
    townInfo: 'townInfo.json',
    dungeonInfo: 'dungeonInfo.json',
    abnormalstate: 'abnormalstate.json',
    abnormalstateeffect: 'abnormalstateeffect.json',
    wealth: 'wealth.json',
    tips: 'tips.json',
    treasure: 'treasure.json',
    gateinfo: 'gateinfo.json',
    adventbattle: 'adventbattle.json',
    fieldItem: 'fieldItem.json',
    chat: 'chat.json',
  };

  public fileCache = {} as { [s: string]: unknown };

  public setRegion(region: string) {
    this.region = region;
    if (this.region === 'tw') {
      this.rootFolderRelativePath = '../';
      this.htmlRoot = path.join(__dirname, '..', 'docs');
      this.outFolder = path.join(this.htmlRoot, 'tw');
      this.viewFolder = path.join(__dirname, '..', 'views', 'tw');
      this.exportFolder = path.join(this.htmlRoot, 'export', 'tw');
      this.spawnDataFolder = path.join(this.exportFolder, 'SpawnList', 'TextAsset');
    }

    return this;
  }

  public getExportFilePath(filename: string) {
    return path.join(this.exportFolder, filename);
  }

  public async preLoadFiles() {
    return Promise.all(
      Object.values(
        Object.entries(this.exportDataFilenameMap)
        .map(([_, filename]) => this.getExportFilePath(filename))
        .map(filepath => this.loadFileFromCache(filepath))
      )
    );
  }

  public async loadFileFromCache(path: string) {
    return this.fileCache[path] = this.fileCache[path] || await fs.readJSON(path);
  }

}