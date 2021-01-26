import fs from 'fs-extra';
import path from 'path';

import { serverIds } from './config';

export default class DataProcessor {
  public async process(sourceFolder: string, rootFolder: string) {
    await Promise.all([
      ...serverIds.map((id) => this.processMaster(id, sourceFolder, rootFolder)),
      ...serverIds.map((id) => this.processAdv(id, sourceFolder, rootFolder)),
      ...serverIds.map((id) => this.processSpawnList(id, sourceFolder, rootFolder)),
    ]);
  }

  private async processMaster(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'master', 'MonoBehaviour');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export') : path.join(rootFolder, 'tw', 'export');

    if (!await fs.pathExists(rawFolder)) {
      console.log(`skipping master data process: required ${rawFolder}`);
      return;
    }

    const files = await fs.readdir(rawFolder);
    await Promise.all(files.map(async (file) => {
      const rawFile = path.join(rawFolder, file);
      const outFile = path.join(outFolder, file);
      await fs.writeJson(outFile, await fs.readJson(rawFile));
    }));
  }

  private async processAdv(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'adv', 'MonoBehaviour');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export', 'adv') : path.join(rootFolder, 'tw', 'export', 'adv');

    if (!await fs.pathExists(rawFolder)) {
      console.log(`skipping adv data process: required ${rawFolder}`);
      return;
    }

    const files = await fs.readdir(rawFolder);
    await Promise.all(files.map(async (file) => {
      const rawFile = path.join(rawFolder, file);
      const outFile = path.join(outFolder, file);
      await fs.writeJson(outFile, await fs.readJson(rawFile));
    }));
  }

  private async processSpawnList(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'master', 'TextAsset');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export', 'SpawnList', 'TextAsset') : path.join(rootFolder, 'tw', 'export', 'SpawnList', 'TextAsset');

    if (!await fs.pathExists(rawFolder)) {
      console.log(`skipping spawnList data process: required ${rawFolder}`);
      return;
    }

    const files = await fs.readdir(rawFolder);
    await Promise.all(files.map(async (file) => {
      const rawFile = path.join(rawFolder, file);
      const outFile = path.join(outFolder, file);
      await fs.copy(rawFile, outFile);
    }));
  }
}
