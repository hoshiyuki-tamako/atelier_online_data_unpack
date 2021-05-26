import eachLimit from 'async/eachLimit';
import deepmerge from 'deepmerge';
import ffmpegStatic from 'ffmpeg-static';
import ffprobeStatic from 'ffprobe-static';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs-extra';
import Enumerable from 'linq';
import { cpus } from 'os';
import pEvent from 'p-event';
import path from 'path';

import { EOrderType } from '../logic/Enums';
import { Adv } from '../master/adv';
import { ExportBase } from './ExportBase';

ffmpeg.setFfmpegPath(ffmpegStatic);
ffmpeg.setFfprobePath(ffprobeStatic.path);

export type CharacterVoice = {
  voice: string;
  characterName: string;
};
export type CharacterVoiceMap = { [characterDf: string]: CharacterVoice[] };

type AudioConvertItem = {
  newFile: string,
  outFile: string,
}

export default class AudioExport extends ExportBase {
  private audioConvertorQueue = [] as AudioConvertItem[];

  public async process(sourceFolder: string, rootFolder: string) {
    await Promise.all([
      this.processMusics(sourceFolder, rootFolder),
      this.processVoices(sourceFolder, rootFolder),
    ]);

    await this.processAudioConvertQueue();
  }

  private async processAudioConvertQueue() {
    await eachLimit(this.audioConvertorQueue, cpus().length * 2, async ({ newFile, outFile: out }) => {
      await pEvent(ffmpeg(newFile).audioBitrate(96).audioCodec('aac').save(out), 'end');
    },);
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
    await Promise.all(musics.filter((p) => !p.includes('#')).map(async (p) => {
      const newFile = path.join(musicFolder, p);
      const outFile = path.join(outFolder, p).replace('.wav', '.m4a');
      if (await fs.pathExists(outFile)) {
        return;
      }

      this.audioConvertorQueue.push({
        newFile,
        outFile,
      });
    }));
  }

  private async processVoices(sourceFolder: string, rootFolder: string) {
    const voiceFolder = path.join(sourceFolder, 'voice', 'AudioClip');
    if (!fs.pathExists(voiceFolder)) {
      console.log(`skipping voice process: required ${voiceFolder} and ${voiceFolder}`);
      await this.writeCharacterVoices(rootFolder);
      return;
    }

    const voices = await fs.readdir(voiceFolder);
    if (!voices.length) {
      console.log(`empty voice folder: ${voiceFolder}`);
      await this.writeCharacterVoices(rootFolder);
      return;
    }
    const filteredVoices = voices.filter((p) => !p.includes('#'));

    const outFolder = path.join(rootFolder, 'audios', 'voices');
    await Promise.all([
      this.generateCharacterVoices(filteredVoices, rootFolder),
      Promise.all(filteredVoices.map(async (p) => {
        const newFile = path.join(voiceFolder, p);
        const outFile = path.join(outFolder, p).replace('.wav', '.m4a');
        if (await fs.pathExists(outFile)) {
          return;
        }

        this.audioConvertorQueue.push({
          newFile,
          outFile,
        });
      })),
    ]);
  }

  private async generateCharacterVoices(voices: string[], rootFolder: string) {
    const advFolder = path.join(rootFolder, 'export', 'adv');
    const advFiles = await fs.readdir(advFolder);
    const characterMaps = await Promise.all(advFiles.map(async (advFile) => {
      const adv = await fs.readJson(path.join(advFolder, advFile)) as Adv;
      return Enumerable.from(adv.vOrderList)
        .select((p) => ({
          order: p.eOrder,
          characterDf: p.vsParam[0],
          characterName: p.vsParam[1],
          voice: p.vsParam[6],
        }))
        .where((p) => p.order === EOrderType.eCHARA_TALK && p.voice && voices.includes(`${p.voice}.wav`))
        .groupBy((p) => p.characterDf)
        .toObject(
          (p) => p.key(),
          (p) => p.select((p) => ({
            voice: p.voice,
            characterName: p.characterName,
          })).toArray(),
        ) as CharacterVoiceMap;
    }));
    const characterVoices = deepmerge.all(characterMaps) as CharacterVoiceMap;
    for (const characterDf of Object.keys(characterVoices)) {
      characterVoices[characterDf].sort((a, b) => new Intl.Collator(undefined, { numeric: true }).compare(a.voice, b.voice));
    }
    await this.writeCharacterVoices(rootFolder, characterVoices);
  }

  private async writeCharacterVoices(rootFolder: string, characterVoices: CharacterVoiceMap = {}) {
    const characterVoiceMapOut = path.join(rootFolder, 'generated', 'characterVoices.json');
    await fs.writeJSON(characterVoiceMapOut, characterVoices);
  }
}
