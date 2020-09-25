import fs from 'fs-extra';
import * as glob from 'glob-promise';

export class AtelierOnlineExportProcessor {
  public async process(folder: string) {
    const jsonPaths = await glob.promise(`${folder}/**/*.json`);
    return Promise.all(jsonPaths.map(async (p) => fs.writeJSON(p, await fs.readJson(p))));
  }
}
