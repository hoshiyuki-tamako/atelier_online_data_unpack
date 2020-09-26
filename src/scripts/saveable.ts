export interface ISaveable {
  save(rootFolder: string): Promise<void>;
}
