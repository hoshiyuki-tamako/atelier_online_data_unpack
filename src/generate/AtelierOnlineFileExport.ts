import dirTree, { DirectoryTree } from 'directory-tree';
import fs from 'fs-extra';
import path from 'path';

import { ISaveable } from './saveable';

export type PathTree = { [s: string]: string | PathTree };

export class AtelierOnlineFileExport implements ISaveable {
  public export: PathTree = {};
  public img: PathTree = {};
  public models: PathTree = {};

  public constructor() {
    this.load();
  }

  public save(folder: string, fileName = 'files.json') {
    return fs.writeJson(path.join(folder, fileName), this);
  }

  //
  private load() {
    ['export', 'img', 'models'].map((p) => {
      this[p] = this.directoryTreeToLookup(dirTree(path.join(__dirname, '..', '..', 'public', p)).children);
    });
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
