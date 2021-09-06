import fs from 'fs-extra';
import path from 'path';

import * as lookup from '../logic/Lookup';
import { ISaveable } from './interfaces/ISaveable';
import * as enums from '../logic/Enums';

export default class StaticGenerate implements ISaveable {
  public async save(rootFolder: string) {
    await Promise.all([
      fs.writeJson(path.join(rootFolder, 'generated', 'lookup.json'), lookup),
      fs.writeJson(path.join(rootFolder, 'generated', 'enum.json'), enums),
    ]);
  }
}
