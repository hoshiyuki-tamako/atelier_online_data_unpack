import fs from 'fs-extra';
import path from 'path';

import { lookup } from '../logic/Lookup';
import { ISaveable } from './saveable';

export class Lookup implements ISaveable {
  public constructor() {
    for (const [k, v] of Object.entries(lookup)) {
      this[k] = v;
    }
  }

  public save(folder: string, fileName = 'lookup.json') {
    return fs.writeJson(path.join(folder, fileName), lookup);
  }
}
