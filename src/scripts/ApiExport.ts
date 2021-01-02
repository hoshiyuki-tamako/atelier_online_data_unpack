import fs from 'fs-extra';
import msgpack from 'msgpack-lite';
import path from 'path';

export default class ApiExport {
  public async process(sourceFolder: string, rootFolder: string) {
    await Promise.all([
      this.processHunt(sourceFolder, rootFolder),
    ]);
  }

  public async processHunt(sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, 'aoserver', 'nat', 'api', 'com', 'hunt');
    const outFolder = path.join(rootFolder, 'aoserver', 'nat', 'api', 'com', 'hunt');

    const [rawSummary] = await Promise.all([
      fs.readFile(path.join(rawFolder, 'Summary')),
    ]);
    const summary = msgpack.decode(rawSummary);
    summary[2] = null;
    summary[5] = null;
    const newSummary = msgpack.encode(summary);

    await Promise.all([
      fs.writeFile(path.join(outFolder, 'Summary'), newSummary),
    ]);
  }
}
