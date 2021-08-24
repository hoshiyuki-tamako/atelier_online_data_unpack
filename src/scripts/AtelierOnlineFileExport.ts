import dirTree, { DirectoryTree } from 'directory-tree';
import fs from 'fs-extra';
import path from 'path';

import { ISaveable } from './interfaces/ISaveable';

export type PathTree = { [s: string]: PathTree | string | null };

export default class AtelierOnlineFileExport implements ISaveable {

  public files: PathTree;

  public constructor() {
    this.load();
  }

  public save(rootFolder: string, fileName = 'files.json') {
    return fs.writeJson(path.join(rootFolder, 'generated', fileName), this.files);
  }

  //
  private load() {
    this.files = this.directoryTreeToLookup(dirTree(path.join(__dirname, '..', '..', 'public')).children);
  }

  private directoryTreeToLookup(tree: DirectoryTree[]) {
    const target = {} as PathTree;
    for (const child of tree) {
      if (child.children) {
        target[child.name] = this.directoryTreeToLookup(child.children);
      } else {
        target[child.name] = child.name;
      }
    }
    return target;
  }
}
