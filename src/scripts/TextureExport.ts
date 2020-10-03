import fs from 'fs-extra';
import { escapeRegExp } from 'lodash';
import path from 'path';

export default class TextureExport {
  public async process(sourceFolder: string, rootFolder: string) {
    const textureFolder = path.join(sourceFolder, 'Texture2D');
    if (!await fs.pathExists(textureFolder)) {
      return;
    }
    const files = await fs.readdir(textureFolder);
    const names = ['icon_chara', 'icon_degree', 'icon_item_s', 'icon_item01', 'icon_skill', 'enemy_tex', 'map_town', 'item_pickup'];
    await Promise.all(names.map((name) => this.processTexture2D(name, files, textureFolder, rootFolder)));
  }

  private async processTexture2D(name: string, files: string[], textureFolder: string, rootFolder: string) {
    const outFolder = path.join(rootFolder, 'img', name, 'Texture2D');
    const regex = new RegExp(`^${escapeRegExp(name)}.*`);
    const imagePaths = files.filter((p) => !p.includes('#') && regex.exec(p));

    await Promise.all(imagePaths.map(async (p) => {
      const imagePath = path.join(textureFolder, p);
      const outPath = path.join(outFolder, p);
      if (await fs.pathExists(outPath)) {
        return;
      }
      await fs.copy(imagePath, outPath);
    }));
  }
}
