import deepmerge from 'deepmerge';
import fs from 'fs-extra';
import Enumerable from 'linq';
import path from 'path';

import { EOrderType } from '../logic/Enums';
import { Adv } from '../master/adv';
import { AdvCharacterMap } from '../utils/AdvManager';
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
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export') : path.join(rootFolder, 'export', 'tw');

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
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export', 'adv') : path.join(rootFolder, 'export', 'tw', 'adv');

    if (await fs.pathExists(rawFolder)) {
      const files = await fs.readdir(rawFolder);
      await Promise.all(files.map(async (file) => {
        const rawFile = path.join(rawFolder, file);
        const outFile = path.join(outFolder, file);
        await fs.writeJson(outFile, await fs.readJson(rawFile));
      }));
    } else {
      console.log(`skipping adv data process: required ${rawFolder}`);
    }

    await this.generateCharacterNameMapFromAdv(serverId, outFolder, await fs.readdir(outFolder), rootFolder);
  }

  private async generateCharacterNameMapFromAdv(serverId: string, advFolder: string, files: string[], rootFolder: string) {
    const advCharacterByIds = await Promise.all(files.map(async (file) => {
      const adv = await fs.readJson(path.join(advFolder, file)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .where((p) => p.eOrder === EOrderType.eCHARA_TALK)
        .select((p) => p.vsParam)
        .where((p) => !!p[0])
        .groupBy((p) => p[0])
        .toObject(
          (p) => p.key(),
          (p) => p.groupBy((o) => o[1])
            .select((o) => o.key())
            .where((p) => !!p)
            .toArray(),
        ) as AdvCharacterMap;
    }));

    const advCharacterById = deepmerge.all(advCharacterByIds) as AdvCharacterMap;
    for (const k of Object.keys(advCharacterById)) {
      advCharacterById[k] = [...new Set(advCharacterById[k])];
    }

    await fs.writeJson(path.join(rootFolder, serverId, 'generated', 'advCharacterById.json'), advCharacterById);
  }

  private async processSpawnList(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'spawnList', 'TextAsset');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export', 'SpawnList', 'TextAsset') : path.join(rootFolder, 'export', 'tw', 'SpawnList', 'TextAsset');

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
