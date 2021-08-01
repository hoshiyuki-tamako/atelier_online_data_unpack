import { eConditionType } from '@/logic/Enums';
import { HuntInfo } from '@/models/HuntInfo';
import { plainArrayToClass } from 'class-transformer-for-array';
import Enumerable from 'linq';
import msgpack from 'msgpack-lite';

import { DataManager } from './DataManager';

export class ApiManager {
  public constructor(private dataManager: DataManager) {
  }

  private async call(url: string) {
    return fetch(`${this.dataManager.serverId}/${url}`);
  }

  // raw data
  public huntInfos: HuntInfo[];

  // processed data
  public get huntInfoTimeCosts() {
    return this.dataManager.cache('ApiManager.huntInfoTimeCosts', () => Enumerable.from(this.huntInfos)
    .groupBy((p) => p.TM)
    .select((p) => p.key())
    .orderBy((p) => p)
    .toArray());
  }
  public get huntInfoCharacters() {
    return this.dataManager.cache('ApiManager.huntInfoCharacters', () => Enumerable.from(this.huntInfos)
    .selectMany((p) => p.JCND.filter((i) => i.TYPE === eConditionType.TargetChara).map((i) => i.VALS[0]))
    .groupBy((p) => p)
    .select((p) => this.dataManager.characterById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.DF)
    .toArray());
  }
  public get huntInfoItems() {
    return this.dataManager.cache('ApiManager.huntInfoItems', () => Enumerable.from(this.huntInfos)
    .selectMany((p) => p.RWD.TRS.concat(p.RWD.ITM))
    .groupBy((p) => p.DF)
    .select((p) => this.dataManager.itemById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.DF)
    .toArray());
  }
  public get huntInfoSkills() {
    return this.dataManager.cache('ApiManager.huntInfoSkills', () => Enumerable.from(this.huntInfos)
    .selectMany((p) => p.RWD.TRS.concat(p.RWD.ITM))
    .groupBy((p) => p.TRT)
    .select((p) => this.dataManager.skillById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.id)
    .toArray());
  }

  public get huntInfosByItemId() {
    return this.dataManager.cache('ApiManager.huntInfosByItemId', () => Enumerable.from(this.huntInfos)
    .selectMany((huntInfo) => huntInfo.RWD.TRS.concat(huntInfo.RWD.ITM).map((o) => ({
      huntInfo,
      item: this.dataManager.itemById[o.DF],
    })))
    .where((p) => !!p.item)
    .groupBy((p) => p.item.DF)
    .toObject((p) => p.key(), (p) => p.select(({ huntInfo }) => huntInfo).toArray()) as { [DF: number]: HuntInfo[] });
  }
  public get huntInfosByCharacterId() {
    return this.dataManager.cache('ApiManager.huntInfosByCharacterId', () => Enumerable.from(this.huntInfos)
    .selectMany((huntInfo) => huntInfo.JCND.filter((i) => i.TYPE === eConditionType.TargetChara).map((o) => ({
      huntInfo,
      character: this.dataManager.characterById[o.VALS[0]],
    })))
    .where((p) => !!p.character)
    .groupBy((p) => p.character.DF)
    .toObject((p) => p.key(), (p) => p.select(({ huntInfo }) => huntInfo).toArray()) as { [DF: number]: HuntInfo[] });
  }
  public get huntInfosBySkillId() {
    return this.dataManager.cache('ApiManager.huntInfosBySkillId', () => Enumerable.from(this.huntInfos)
    .selectMany((huntInfo) => huntInfo.RWD.TRS.concat(huntInfo.RWD.ITM).map((o) => ({
      huntInfo,
      skill: this.dataManager.skillById[o.TRT],
    })))
    .where((p) => !!p.skill)
    .groupBy((p) => p.skill.id)
    .toObject((p) => p.key(), (p) => p.select(({ huntInfo }) => huntInfo).toArray()) as { [DF: number]: HuntInfo[] });
  }

  public async load() {
    [this.huntInfos] = await Promise.all([
      this.comHuntSummary(),
    ]);
  }

  // api
  public async comHuntSummary() {
    const data = await this.call('aoserver/nat/api/com/hunt/Summary').then((p) => p.arrayBuffer());
    return plainArrayToClass(HuntInfo, msgpack.decode(new Uint8Array(data))[16][0], { isArray: true });
  }
}
