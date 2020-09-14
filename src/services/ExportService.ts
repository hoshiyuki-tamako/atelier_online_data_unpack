import fs from 'fs-extra';
import path from 'path';
import { SpawnerDataManager } from '../master/SpawnerData';

export class ExportService {
  public locale = '';

  // spawner
  public spawnerDataManager: SpawnerDataManager;

  // paths
  public rootFolderRelativePath = '';

  public htmlRoot = path.join(__dirname, '..', '..', 'docs');
  public viewFolder = path.join(__dirname, '..', '..', 'views');
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

  public exportJsonContent = {} as { [filename: string]: unknown };

  public constructor() {
    this.spawnerDataManager = new SpawnerDataManager(this);
  }

  // get set
  public setLocale(locale: string) {
    this.locale = locale;
    if (this.locale === 'zh-TW') {
      this.rootFolderRelativePath = '../';

      this.outFolder = path.join(this.htmlRoot, 'tw');
      this.exportFolder = path.join(this.htmlRoot, 'export', 'tw');
      this.spawnDataFolder = path.join(this.exportFolder, 'SpawnList', 'TextAsset');
    }

    return this;
  }

  public getExportFilePath(filename: string) {
    return path.join(this.exportFolder, filename);
  }

  public getExportViewPath(viewFile: string) {
    return path.join(this.viewFolder, viewFile);
  }

  public getExportViewOutFilePath(outFile: string) {
    return path.join(this.outFolder, outFile);
  }

  // action
  public async preLoadFiles() {
    await Promise.all([
      Object.values(this.exportDataFilenameMap).map(this.data.bind(this)),
      this.spawnerDataManager.loadFromCache(),
    ]);
    return this;
  }

  public async data(filename: string) {
    return this.exportJsonContent[filename] = this.exportJsonContent[filename] || await fs.readJSON(this.getExportFilePath(filename));
  }

}