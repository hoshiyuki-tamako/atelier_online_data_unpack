import fs from 'fs-extra';
import * as glob from 'glob-promise';

export default class AtelierOnlineExportProcessor {
  public async process(folder: string) {
    const jsonPaths = await glob.promise(`${folder}/**/*.json`);
    await Promise.all(jsonPaths.map(async (p) => fs.writeJSON(p, await fs.readJson(p))));
  }
}
