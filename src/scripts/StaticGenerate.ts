import fs from 'fs-extra';
import path from 'path';

import { lookup } from '../logic/Lookup';
import { ISaveable } from './interfaces/saveable';
import * as enums from '../logic/Enums';

export default class StaticGenerate implements ISaveable {
  public async save(rootFolder: string) {
    await Promise.all([
      fs.writeJson(path.join(rootFolder, 'generated', 'lookup.json'), lookup),
      fs.writeJson(path.join(rootFolder, 'generated', 'enum.json'), enums),
    ]);
  }
}
