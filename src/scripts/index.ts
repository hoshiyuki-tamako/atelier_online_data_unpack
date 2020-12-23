import fs from 'fs-extra';
import path from 'path';

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
    const hasSourceFolder = await fs.pathExists(sourceFolder);
    if (!hasSourceFolder) {
      console.log(`source folder not found, skipping process source assets: ${sourceFolder}`);
    }

    await Promise.all([
      hasSourceFolder ? new TextureExport().process(sourceFolder, rootFolder) : null,
      hasSourceFolder ? new ModelExport().process(sourceFolder, rootFolder) : null,
      hasSourceFolder ? new AudioExport().process(sourceFolder, rootFolder) : null,
      new StaticGenerate().save(rootFolder),
      new AtelierOnlineExportProcessor().process(path.join(__dirname, '..', '..', 'public', 'export')),
    ]);
    await new AtelierOnlineFileExport().save(rootFolder);
  }
}

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

Main.main().catch((e) => console.error(e));
