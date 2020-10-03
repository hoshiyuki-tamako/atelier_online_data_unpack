import path from 'path';

import AtelierOnlineExportProcessor from './AtelierOnlineExportProcessor';
import AtelierOnlineFileExport from './AtelierOnlineFileExport';
import StaticGenerate from './StaticGenerate';
import ModelExport from './ModelExport';
import TextureExport from './TextureExport';

class Main {
  public static async main() {
    const sourceFolder = path.join(__dirname, '..', '..', 'source');
    const rootFolder = path.join(__dirname, '..', '..', 'public');

    await Promise.all([
      new TextureExport().process(sourceFolder, rootFolder),
      new ModelExport().process(sourceFolder, rootFolder),
      new StaticGenerate().save(rootFolder),
      new AtelierOnlineExportProcessor().process(path.join(__dirname, '..', '..', 'public', 'export')),
    ]);
    await new AtelierOnlineFileExport().save(rootFolder);
  }
}

Main.main().catch((e) => console.error(e));
