import fs from 'fs-extra';
import streamEqual from 'stream-equal';

export abstract class ExportBase {
  protected async isFileUpToDate(newFilePath: string, oldFilePath: string) {
    return await fs.pathExists(oldFilePath) && await streamEqual(fs.createReadStream(newFilePath), fs.createReadStream(oldFilePath));
  }
}
