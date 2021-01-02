import fs from 'fs-extra';
import path from 'path';
import ApiExport from './ApiExport';

import AtelierOnlineExportProcessor from './AtelierOnlineExportProcessor';
import AtelierOnlineFileExport from './AtelierOnlineFileExport';
import AudioExport from './AudioExport';
import ModelExport from './ModelExport';
import StaticGenerate from './StaticGenerate';
import TextureExport from './TextureExport';

class Main {
  public static async main() {
    const sourceFolder = path.join(__dirname, '..', '..', 'source');
    const rootFolder = path.join(__dirname, '..', '..', 'public');
    const promises = [
      new StaticGenerate().save(rootFolder),
      new AtelierOnlineExportProcessor().process(path.join(__dirname, '..', '..', 'public', 'export')),
    ];

    if (await fs.pathExists(sourceFolder)) {
      promises.push(
        new TextureExport().process(sourceFolder, rootFolder),
        new ModelExport().process(sourceFolder, rootFolder),
        new AudioExport().process(sourceFolder, rootFolder),
        new ApiExport().process(sourceFolder, rootFolder),
      );
    } else {
      console.log(`source folder not found, skipping process source assets: ${sourceFolder}`);
    }

    await Promise.all(promises);
    await new AtelierOnlineFileExport().save(rootFolder);
  }
}

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

Main.main().catch((e) => console.error(e));
