import fs from 'fs-extra';
import path from 'path';
import { serverIds } from './config';
import { ISaveable } from './interfaces/ISaveable';

export default class DataLoadOptimization implements ISaveable {
  public async save(rootFolder: string) {
    await Promise.all(serverIds.map(async (serverId) => {
      const [master, SpawnList, generated, aoserver]  = await Promise.all([
        this.getMasterFiles(rootFolder, serverId),
        this.getSpawnList(rootFolder, serverId),
        this.getGenerated(rootFolder, serverId),
        this.getAoServerApis(rootFolder, serverId),
      ]);

      await fs.writeJson(path.join(rootFolder, serverId, 'data.json'), {
        export: {
          master,
          SpawnList,
        },
        generated,
        aoserver,
      });
    }));
  }

  private async getMasterFiles(rootFolder: string, serverId: string) {
    const requiredMasterFiles = [
      'item',
      'chara',
      'skill',
      'abnormalState',
      'abnormalStateEffect',
      'zone',
      'zoneEffect',
      'enemy',
      'wealth',
      'degree',
      'blazeArt',
      'quest',
      'fieldName',
      'areaDetail',
      'areaInfo',
      'townInfo',
      'gateInfo',
      'dungeonInfo',
      'fieldItem',
      'extraQuest',
      'adventBattle',
      'soundList',
      'tips',
      'treasure',
      'chat',

      // name alias
      'abnormalstate',
      'abnormalstateeffect',
      'zoneeffect',
      'extraquest',
      'adventbattle',
      'blaze_arts',
    ].map((p) => `${p}.json`);
    const masterFolder = path.join(rootFolder, serverId, 'export', 'master');
    const masterFiles = await fs.readdir(masterFolder);

    const entires = await Promise.all(masterFiles.filter((file) => requiredMasterFiles.includes(file)).map(async (file) => [file.split('.')[0], await fs.readJson(path.join(masterFolder, file))]));
    return Object.fromEntries(entires);
  }

  private async getSpawnList(rootFolder: string, serverId: string) {
    const spawnListFolder = path.join(rootFolder, serverId, 'export', 'SpawnList');
    const spawnListFiles = await fs.readdir(spawnListFolder);

    const entires = await Promise.all(spawnListFiles.map(async (file) => [file, await fs.readFile(path.join(spawnListFolder, file), 'utf8')]));
    return Object.fromEntries(entires);
  }

  private async getGenerated(rootFolder: string, serverId: string) {
    const generatedFolder = path.join(rootFolder, serverId, 'generated');
    const generatedFiles = await fs.readdir(generatedFolder);

    const entires = await Promise.all(generatedFiles.map(async (file) => [file.split('.')[0], await fs.readJson(path.join(generatedFolder, file))]));
    return Object.fromEntries(entires);
  }

  private async getAoServerApis(rootFolder: string, serverId: string) {
    const huntSummary = path.join(rootFolder, serverId, 'aoserver', 'nat', 'api', 'com', 'hunt', 'Summary');

    return {
      huntSummary: await fs.readFile(huntSummary, 'base64'),
    };
  }
}
