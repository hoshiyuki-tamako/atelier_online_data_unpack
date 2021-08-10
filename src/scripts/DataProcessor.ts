import deepmerge from 'deepmerge';
import fs from 'fs-extra';
import Enumerable from 'linq';
import path from 'path';

import { EOrderType } from '../logic/Enums';
import { Adv } from '../master/adv';
import { AdvMap } from '../utils/AdvManager';
import { serverIds } from './config';

export default class DataProcessor {
  public async process(sourceFolder: string, rootFolder: string) {
    await Promise.all([
      ...serverIds.map((id) => this.processMaster(id, sourceFolder, rootFolder)),
      ...serverIds.map((id) => this.processAdv(id, sourceFolder, rootFolder)),
      ...serverIds.map((id) => this.processSpawnList(id, sourceFolder, rootFolder)),

      ...serverIds.map((id) => this.processMasterOld(id, sourceFolder, rootFolder)),
      ...serverIds.map((id) => this.processAdvOld(id, sourceFolder, rootFolder)),
      ...serverIds.map((id) => this.processSpawnListOld(id, sourceFolder, rootFolder)),
    ]);
  }

  private async processMaster(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'master', 'MonoBehaviour');
    const outFolder = path.join(rootFolder, serverId, 'export', 'master');

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

  private async processMasterOld(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'master', 'MonoBehaviour');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export') : path.join(rootFolder, 'export', serverId);

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

  //
  private async processAdvOld(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'adv', 'MonoBehaviour');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export', 'adv') : path.join(rootFolder, 'export', serverId, 'adv');

    if (await fs.pathExists(rawFolder)) {
      const rawFiles = await fs.readdir(rawFolder);
      await Promise.all(rawFiles.map(async (file) => {
        const rawFile = path.join(rawFolder, file);
        const outFile = path.join(outFolder, file);
        await fs.writeJson(outFile, await fs.readJson(rawFile));
      }));
    } else {
      console.log(`skipping adv data process: required ${rawFolder}`);
    }
  }

  private async processAdv(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'adv', 'MonoBehaviour');
    const outFolder = path.join(rootFolder, serverId, 'export', 'adv');

    if (await fs.pathExists(rawFolder)) {
      const rawFiles = await fs.readdir(rawFolder);
      await Promise.all(rawFiles.map(async (file) => {
        const rawFile = path.join(rawFolder, file);
        const outFile = path.join(outFolder, file);
        await fs.writeJson(outFile, await fs.readJson(rawFile));
      }));
    } else {
      console.log(`skipping adv data process: required ${rawFolder}`);
    }

    const files = await fs.readdir(outFolder);
    await Promise.all([
      this.generateCharacterNameMapFromAdv(serverId, outFolder, files, rootFolder),
      this.generateCgAdvMap(serverId, outFolder, files, rootFolder),
      this.generateBgAdvMap(serverId, outFolder, files, rootFolder),
      this.generateWindowItemAdvMap(serverId, outFolder, files, rootFolder),
      this.generateAudioAdvMap(serverId, outFolder, files, rootFolder),
    ]);
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
        ) as AdvMap;
    }));

    const advCharacterById = deepmerge.all(advCharacterByIds) as AdvMap;
    for (const k of Object.keys(advCharacterById)) {
      advCharacterById[k] = [...new Set(advCharacterById[k])];
    }

    await fs.writeJson(path.join(rootFolder, serverId, 'generated', 'advCharacterById.json'), advCharacterById);
  }

  private async generateCgAdvMap(serverId: string, advFolder: string, files: string[], rootFolder: string) {
    const cgs = await Promise.all(files.map(async (file) => {
      const adv = await fs.readJson(path.join(advFolder, file)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .where((p) => p.eOrder === EOrderType.ePICTURE)
        .select((p) => +p.vsParam[0])
        .where((p) => p > 0)
        .groupBy((p) => p)
        .toObject((p) => p.key(), (p) => [file.split('.')[0]]) as AdvMap;
    }));

    const filteredCgs = cgs.filter((p) => Object.keys(p).length);
    const cgsById = deepmerge.all(filteredCgs) as AdvMap;
    for (const k of Object.keys(cgsById)) {
      cgsById[k] = [...new Set(cgsById[k])];
    }

    await fs.writeJson(path.join(rootFolder, serverId, 'generated', 'advCgById.json'), cgsById);
  }

  private async generateBgAdvMap(serverId: string, advFolder: string, files: string[], rootFolder: string) {
    const cgs = await Promise.all(files.map(async (file) => {
      const adv = await fs.readJson(path.join(advFolder, file)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .where((p) => p.eOrder === EOrderType.eBG)
        .select((p) => +p.vsParam[0])
        .where((p) => p > 0)
        .groupBy((p) => p)
        .toObject((p) => p.key(), (p) => [file.split('.')[0]]) as AdvMap;
    }));

    const filteredCgs = cgs.filter((p) => Object.keys(p).length);
    const cgsById = deepmerge.all(filteredCgs) as AdvMap;
    for (const k of Object.keys(cgsById)) {
      cgsById[k] = [...new Set(cgsById[k])];
    }

    await fs.writeJson(path.join(rootFolder, serverId, 'generated', 'advBgById.json'), cgsById);
  }


  private async generateWindowItemAdvMap(serverId: string, advFolder: string, files: string[], rootFolder: string) {
    const cgs = await Promise.all(files.map(async (file) => {
      const adv = await fs.readJson(path.join(advFolder, file)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .where((p) => p.eOrder === EOrderType.eWINDOW_ITEM)
        .select((p) => +p.vsParam[1])
        .where((p) => p > 0)
        .groupBy((p) => p)
        .toObject((p) => p.key(), (p) => [file.split('.')[0]]) as AdvMap;
    }));

    const cgsById = deepmerge.all(cgs) as AdvMap;
    for (const k of Object.keys(cgsById)) {
      cgsById[k] = [...new Set(cgsById[k])];
    }

    await fs.writeJson(path.join(rootFolder, serverId, 'generated', 'advWindowItemById.json'), cgsById);
  }

  private async generateAudioAdvMap(serverId: string, advFolder: string, files: string[], rootFolder: string) {
    const audios = await Promise.all(files.map(async (file) => {
      const adv = await fs.readJson(path.join(advFolder, file)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .where((p) => p.eOrder === EOrderType.eCHARA_TALK)
        .select((p) => p.vsParam[6])
        .where((p) => !!p)
        .groupBy((p) => p)
        .toObject((p) => p.key(), (p) => [file.split('.')[0]]) as AdvMap;
    }));

    const audiosById = deepmerge.all(audios) as AdvMap;
    for (const k of Object.keys(audiosById)) {
      audiosById[k] = [...new Set(audiosById[k])];
    }

    await fs.writeJson(path.join(rootFolder, serverId, 'generated', 'advAudioById.json'), audiosById);
  }

  //
  private async processSpawnList(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'spawnList', 'TextAsset');
    const outFolder = path.join(rootFolder, serverId, 'export', 'SpawnList');

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

  private async processSpawnListOld(serverId: string, sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, serverId, 'spawnList', 'TextAsset');
    const outFolder = serverId === 'jp' ? path.join(rootFolder, 'export', 'SpawnList', 'TextAsset') : path.join(rootFolder, 'export', serverId, 'SpawnList', 'TextAsset');

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
