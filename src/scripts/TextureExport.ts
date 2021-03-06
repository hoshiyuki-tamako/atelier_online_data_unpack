import fs from 'fs-extra';
import { escapeRegExp } from 'lodash';
import path from 'path';

import { ExportBase } from './ExportBase';

export default class TextureExport extends ExportBase {
  public async process(sourceFolder: string, rootFolder: string) {
    const textureFolder = path.join(sourceFolder, 'Texture2D');
    if (!await fs.pathExists(textureFolder)) {
      console.log(`skipping texture process: missing ${textureFolder}`);
      return;
    }

    const files = await fs.readdir(textureFolder);
    if (!files.length) {
      console.log(`empty texture folder: ${textureFolder}`);
      return;
    }

    await Promise.all([
      this.processGenericTexture2D(files, textureFolder, rootFolder),
      this.processFieldTitle(files, textureFolder, rootFolder),
      this.processAdvTextures(files, textureFolder, rootFolder),
    ]);
  }

  private async processGenericTexture2D(files: string[], textureFolder: string, rootFolder: string) {
    const names = ['icon_chara', 'icon_degree', 'icon_item_s', 'icon_item01', 'icon_skill', 'enemy_tex', 'map_town', 'item_pickup', 'icon_area'];
    await Promise.all(names.map((name) => this.processTexture2D(name, files, textureFolder, rootFolder)));
  }

  private async processTexture2D(name: string, files: string[], textureFolder: string, rootFolder: string) {
    const outFolder = path.join(rootFolder, 'img', name, 'Texture2D');
    const regex = new RegExp(`^${escapeRegExp(name)}.*`, 'i');
    const imagePaths = files.filter((p) => !p.includes('#') && regex.exec(p));

    await Promise.all(imagePaths.map(async (p) => {
      const imagePath = path.join(textureFolder, p);
      const outPath = path.join(outFolder, p);
      if (await this.isPathUpToDate(imagePath, outPath)) {
        return;
      }
      await fs.copy(imagePath, outPath);
    }));
  }

  private async processFieldTitle(files: string[], textureFolder: string, rootFolder: string) {
    const outFolder = path.join(rootFolder, 'img', 'field_title', 'Texture2D');
    const regex = new RegExp(escapeRegExp('Field_Title.'), 'i');
    const imagePaths = files.filter((p) => !p.includes('#') && regex.exec(p));
    await Promise.all(imagePaths.map(async (p) => {
      const imagePath = path.join(textureFolder, p);
      const outPath = path.join(outFolder, p);
      if (await this.isPathUpToDate(imagePath, outPath)) {
        return;
      }
      await fs.copy(imagePath, outPath);
    }));
  }

  private async processAdvTextures(files: string[], textureFolder: string, rootFolder: string) {
    const filteredFiles = files.filter((p) => !p.includes('#'));
    const bgs = filteredFiles.filter((p) => p.match(/^ADV_BG_Texture/i));
    const advs = filteredFiles.filter((p) => p.match(/^ADV_Still_Texture/i));
    const advItems = filteredFiles.filter((p) => p.match(/^adv_item_texture/i));

    const bgOutFolder = path.join(rootFolder, 'img', 'bg_texture');
    const advOutFolder = path.join(rootFolder, 'img', 'still_texture');
    const advItemOutFolder = path.join(rootFolder, 'img', 'item_texture');

    const replaceAdvRegex = /^(ADV\_)/i;
    await Promise.all(bgs.map(async (p) => {
      const imagePath = path.join(textureFolder, p);
      const outPath = path.join(bgOutFolder, p.replace(replaceAdvRegex, ''));
      if (await this.isPathUpToDate(imagePath, outPath)) {
        return;
      }
      await fs.copy(imagePath, outPath);
    })
      .concat(advs.map(async (p) => {
        const imagePath = path.join(textureFolder, p);
        const outPath = path.join(advOutFolder, p.replace(replaceAdvRegex, ''));
        if (await this.isPathUpToDate(imagePath, outPath)) {
          return;
        }
        await fs.copy(imagePath, outPath);
      }))
      .concat(advItems.map(async (p) => {
        const imagePath = path.join(textureFolder, p);
        const outPath = path.join(advItemOutFolder, p.replace(replaceAdvRegex, ''));
        if (await this.isPathUpToDate(imagePath, outPath)) {
          return;
        }
        await fs.copy(imagePath, outPath);
      })));
  }
}
