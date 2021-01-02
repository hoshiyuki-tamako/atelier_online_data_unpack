import fs from 'fs-extra';
import msgpack from 'msgpack-lite';
import path from 'path';

export default class ApiExport {
  public async process(sourceFolder: string, rootFolder: string) {
    await Promise.all([
      this.processHunt(sourceFolder, rootFolder),
    ]);
  }

  private async processHunt(sourceFolder: string, rootFolder: string) {
    const rawFolder = path.join(sourceFolder, 'aoserver', 'nat', 'api', 'com', 'hunt');
    const outFolder = path.join(rootFolder, 'aoserver', 'nat', 'api', 'com', 'hunt');

    if (!await fs.pathExists(rawFolder)) {
      console.log(`skipping API process: required ${rawFolder}`);
      return;
    }

    const requiredFiles = ['Summary'];
    const exists = await Promise.all(requiredFiles.map((p) => fs.pathExists(path.join(rawFolder, p))));
    if (!exists.every((p) => p)) {
      console.log(`skipping API process: missing one of required API response ${requiredFiles}`);
      return;
    }

    const [rawSummary] = await Promise.all([
      fs.readFile(path.join(rawFolder, 'Summary')),
    ]);
    const summary = msgpack.decode(rawSummary);
    summary[2] = null;
    summary[5] = null;

    await Promise.all([
      fs.writeFile(path.join(outFolder, 'Summary'), msgpack.encode(summary)),
    ]);
  }
}
