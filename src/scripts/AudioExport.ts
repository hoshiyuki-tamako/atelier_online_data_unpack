import deepmerge from 'deepmerge';
import fs from 'fs-extra';
import Enumerable from 'linq';
import path from 'path';

import { EOrderType } from '../logic/Enums';
import { Adv } from '../master/adv';
import { ExportBase } from './ExportBase';

export type CharacterVoiceMap = { [characterDf: string]: string[] };

export default class AudioExport extends ExportBase {
  public async process(sourceFolder: string, rootFolder: string) {
    await Promise.all([
      this.processMusics(sourceFolder, rootFolder),
      this.processVoices(sourceFolder, rootFolder),
    ]);
  }

  private async processMusics(sourceFolder: string, rootFolder: string) {
    const musicFolder = path.join(sourceFolder, 'music', 'AudioClip');
    if (!fs.pathExists(musicFolder)) {
      console.log(`skipping music process: required ${musicFolder}`);
      return;
    }

    const musics = await fs.readdir(musicFolder);
    if (!musics.length) {
      console.log(`empty music folder: ${musicFolder}`);
      return;
    }

    const outFolder = path.join(rootFolder, 'audios', 'musics');
    await Promise.all(musics.map(async (p) => {
      const newFile = path.join(musicFolder, p);
      const out = path.join(outFolder, p);
      if (await this.isFileUpToDate(newFile, out)) {
        return;
      }
      await fs.copy(newFile, out);
    }));
  }

  private async processVoices(sourceFolder: string, rootFolder: string) {
    const voiceFolder = path.join(sourceFolder, 'voice', 'AudioClip');
    if (!fs.pathExists(voiceFolder)) {
      console.log(`skipping voice process: required ${voiceFolder} and ${voiceFolder}`);
      await this.generateEmptyCharacterVoices(rootFolder);
      return;
    }

    const voices = await fs.readdir(voiceFolder);
    if (!voices.length) {
      console.log(`empty voice folder: ${voiceFolder}`);
      await this.generateEmptyCharacterVoices(rootFolder);
      return;
    }

    const outFolder = path.join(rootFolder, 'audios', 'voices');
    await Promise.all([
      this.generateCharacterVoices(voices, rootFolder),
      Promise.all(voices.map(async (p) => {
        const newFile = path.join(voiceFolder, p);
        const out = path.join(outFolder, p);
        if (await this.isFileUpToDate(newFile, out)) {
          return;
        }
        await fs.copy(newFile, out);
      })),
    ]);
  }

  private async generateCharacterVoices(voices: string[], rootFolder: string) {
    const characterVoiceMapOut = path.join(rootFolder, 'generated', 'characterVoices.json');
    const advFolder = path.join(rootFolder, 'export', 'adv');
    const advFiles = await fs.readdir(advFolder);
    const characterMaps = await Promise.all(advFiles.map(async (advFile) => {
      const adv = await fs.readJson(path.join(advFolder, advFile)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .select((p) => ({
          order: p.eOrder,
          characterDf: p.vsParam[0],
          voice: p.vsParam[6],
        }))
        .where((p) => p.order === EOrderType.eCHARA_TALK && !!p.voice && voices.includes(`${p.voice}.wav`))
        .groupBy((p) => p.characterDf)
        .toObject(
          (p) => p.key(),
          (p) => p.select((p) => p.voice).toArray(),
        ) as CharacterVoiceMap;
    }));
    const characterVoices = deepmerge.all(characterMaps);
    for (const characterDf of Object.keys(characterVoices)) {
      characterVoices[characterDf].sort(new Intl.Collator(undefined, { numeric: true }).compare);
    }
    await fs.writeJSON(characterVoiceMapOut, characterVoices);
  }

  private async generateEmptyCharacterVoices(rootFolder: string) {
    const characterVoiceMapOut = path.join(rootFolder, 'generated', 'characterVoices.json');
    await fs.writeJSON(characterVoiceMapOut, {});
  }
}
