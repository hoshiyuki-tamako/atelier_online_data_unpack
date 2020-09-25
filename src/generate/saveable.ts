export interface ISaveable {
  save(folder: string, fileName: string): Promise<void>;
}
