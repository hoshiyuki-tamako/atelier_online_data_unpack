import { AtelierOnlineExportProcessor } from '../generate/AtelierOnlineExportProcessor';
import path from 'path';

import { AtelierOnlineFileExport } from '../generate/AtelierOnlineFileExport';
import { Lookup } from '../generate/Lookup';

const outFolder = path.join(__dirname, '..', '..', 'public', 'generated');

Promise.all([
  new AtelierOnlineFileExport().save(outFolder),
  new Lookup().save(outFolder),
  new AtelierOnlineExportProcessor().process(path.join(__dirname, '..', '..', 'public', 'export')),
]);
