import fs from 'fs-extra';
import path from 'path';

import { lookup } from '../logic/Lookup';
import { ISaveable } from './interfaces/saveable';

export default class Lookup implements ISaveable {
  public constructor() {
    for (const [k, v] of Object.entries(lookup)) {
      this[k] = v;
    }
  }

  public save(rootFolder: string, fileName = 'lookup.json') {
    return fs.writeJson(path.join(rootFolder, 'generated', fileName), lookup);
  }
}
