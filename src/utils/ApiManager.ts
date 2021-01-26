import { eConditionType } from '@/logic/Enums';
import { MVList as CharacterMVList } from '@/master/chara';
import { MVList as ItemMVList } from '@/master/item';
import { List as SkillList } from '@/master/skill';
import { HuntInfo } from '@/models/HuntInfo';
import { plainArrayToClass } from 'class-transformer-for-array';
import Enumerable from 'linq';
import msgpack from 'msgpack-lite';

import { DataManager } from './DataManager';

export class ApiManager {
  public constructor(private dataManager: DataManager) {
  }

  private async call(url: string) {
    return fetch(`${this.dataManager.locale === 'ja-JP' ? 'jp/' : 'tw/'}${url}`);
  }

  // raw data
  public huntInfos: HuntInfo[];

  // processed data
  public huntInfoTimeCosts: number[];
  public huntInfoCharacters: CharacterMVList[];
  public huntInfoItems: ItemMVList[];
  public huntInfoSkills: SkillList[];

  public huntInfosByItemId: { [DF: number]: HuntInfo[] };
  public huntInfosByCharacterId: { [DF: number]: HuntInfo[] };
  public huntInfosBySkillId: { [id: number]: HuntInfo[] };

  public async load() {
    [this.huntInfos] = await Promise.all([
      this.loadComHuntSummary(),
    ]);
  }

  public afterLoad() {
    this.processComHuntSummary();
  }

  // api
  public async loadComHuntSummary() {
    const data = await this.call('aoserver/nat/api/com/hunt/Summary').then((p) => p.arrayBuffer());
    return plainArrayToClass(HuntInfo, msgpack.decode(new Uint8Array(data))[16][0], { isArray: true });
  }

  //
  private processComHuntSummary() {
    this.huntInfoTimeCosts = Enumerable.from(this.huntInfos)
      .groupBy((p) => p.TM)
      .select((p) => p.key())
      .toArray();
    this.huntInfoCharacters = Enumerable.from(this.huntInfos)
      .selectMany((p) => p.JCND.filter((i) => i.TYPE === eConditionType.TargetChara).map((i) => i.VALS[0]))
      .groupBy((p) => p)
      .select((p) => this.dataManager.characterById[p.key()])
      .where((p) => !!p)
      .orderBy((p) => p.DF)
      .toArray();
    this.huntInfoItems = Enumerable.from(this.huntInfos)
      .selectMany((p) => p.RWD.TRS.concat(p.RWD.ITM))
      .groupBy((p) => p.DF)
      .select((p) => this.dataManager.itemById[p.key()])
      .where((p) => !!p)
      .orderBy((p) => p.DF)
      .toArray();
    this.huntInfoSkills = Enumerable.from(this.huntInfos)
      .selectMany((p) => p.RWD.TRS.concat(p.RWD.ITM))
      .groupBy((p) => p.TRT)
      .select((p) => this.dataManager.skillById[p.key()])
      .where((p) => !!p)
      .orderBy((p) => p.id)
      .toArray();

    this.huntInfosByItemId = Enumerable.from(this.huntInfos)
      .selectMany((huntInfo) => huntInfo.RWD.TRS.concat(huntInfo.RWD.ITM).map((o) => ({
        huntInfo,
        item: this.dataManager.itemById[o.DF],
      })))
      .where((p) => !!p.item)
      .groupBy((p) => p.item.DF)
      .toObject((p) => p.key(), (p) => p.select(({ huntInfo }) => huntInfo).toArray()) as { [DF: number]: HuntInfo[] };
    this.huntInfosByCharacterId = Enumerable.from(this.huntInfos)
      .selectMany((huntInfo) => huntInfo.JCND.filter((i) => i.TYPE === eConditionType.TargetChara).map((o) => ({
        huntInfo,
        character: this.dataManager.characterById[o.VALS[0]],
      })))
      .where((p) => !!p.character)
      .groupBy((p) => p.character.DF)
      .toObject((p) => p.key(), (p) => p.select(({ huntInfo }) => huntInfo).toArray()) as { [DF: number]: HuntInfo[] };
    this.huntInfosBySkillId = Enumerable.from(this.huntInfos)
      .selectMany((huntInfo) => huntInfo.RWD.TRS.concat(huntInfo.RWD.ITM).map((o) => ({
        huntInfo,
        skill: this.dataManager.skillById[o.TRT],
      })))
      .where((p) => !!p.skill)
      .groupBy((p) => p.skill.id)
      .toObject((p) => p.key(), (p) => p.select(({ huntInfo }) => huntInfo).toArray()) as { [DF: number]: HuntInfo[] };
  }
}
