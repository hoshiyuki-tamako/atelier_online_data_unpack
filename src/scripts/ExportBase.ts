import fs from 'fs-extra';
import path from 'path';
import streamEqual from 'stream-equal';

export abstract class ExportBase {
  protected async isPathUpToDate(newFilePath: string, oldFilePath: string) {
    if (!await fs.pathExists(oldFilePath)) {
      return false;
    }

    // if old file exists, check is the file up to date
    const [newFileStat, oldFileStat] = await Promise.all([
      fs.stat(newFilePath),
      fs.stat(oldFilePath),
    ]);

    if (!(newFileStat.isDirectory() && oldFileStat.isDirectory() || newFileStat.isFile() && oldFileStat.isFile())) {
      console.error(`is file/directory mismatch: ${newFilePath} ${oldFilePath}`);
      return true;
    }

    return oldFileStat.isFile() ? this.isFileUpToDate(newFilePath, oldFilePath) : this.isDirectoryUpToDate(newFilePath, oldFilePath);
  }

  private async isFileUpToDate(newFilePath: string, oldFilePath: string) {
    return await fs.pathExists(oldFilePath) && await streamEqual(fs.createReadStream(newFilePath), fs.createReadStream(oldFilePath));
  }

  private async isDirectoryUpToDate(newFilePath: string, oldFilePath: string) {
    for await (const file of await fs.opendir(oldFilePath)) {
      const newFile = path.join(newFilePath, file.name);
      const oldFile = path.join(newFilePath, file.name);
      if (file.isFile() && !await this.isFileUpToDate(newFile, oldFile)) {
        return false;
      } else if (file.isDirectory() && !await this.isDirectoryUpToDate(newFile, oldFile)) {
        return false;
      }
    }
    return true;
  }
}
