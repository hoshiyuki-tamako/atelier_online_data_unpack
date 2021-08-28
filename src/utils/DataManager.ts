import areaDungeonModel from '@/../public/generated/areaDungeonModel.json';
import areaModel from '@/../public/generated/areaModel.json';
import files from '@/../public/generated/files.json';
import { EAbnormalStateTarget, EBattleEffectKind, EBattleEffectTrigger, EDegreeMissonType } from '@/logic/Enums';
import { lookup } from '@/logic/Lookup';
import { AbnormalState, MVList as AbnormalStateMVList } from '@/master/abnormalState';
import { AbnormalStateEffect, MVList as AbnormalStateEffectMVList } from '@/master/abnormalStateEffect';
import { AdventBattle, RankingList } from '@/master/adventBattle';
import { AreaDetail, List as AreaDetailList } from '@/master/areaDetail';
import { AreaInfo, List as AreaInfoList } from '@/master/areaInfo';
import { BlazeArt, MVList as BlazeArtMvList } from '@/master/blazeArt';
import { Chara, MVList as CharacterMVList } from '@/master/chara';
import { Chat } from '@/master/chat';
import { Degree, List as DegreeList } from '@/master/degree';
import { DungeonInfo, List as DungeonList } from '@/master/dungeonInfo';
import { Enemy, KindList, MVList as EnemyMVList } from '@/master/enemy';
import { ExtraQuest, List as ExtraQuestList } from '@/master/extraQuest';
import { FieldItem, List as FieldItemList } from '@/master/fieldItem';
import { FieldName, List as FieldNameList } from '@/master/fieldName';
import { GateInfo, List as GateInfoList } from '@/master/gateInfo';
import { Item, MVList as ItemMVList } from '@/master/item';
import { MVList as QuestMVList, Quest } from '@/master/quest';
import { List as SkillList, Skill } from '@/master/skill';
import { Bgm, SoundList } from '@/master/soundList';
import { Tips } from '@/master/tips';
import { List as TownInfoList, TownInfo } from '@/master/townInfo';
import { Treasure } from '@/master/treasure';
import { MVList as WealthMvList, Wealth } from '@/master/wealth';
import { List as ZoneList, Zone } from '@/master/zone';
import { List as ZoneEffectList, ZoneEffect } from '@/master/zoneEffect';
import { CharacterVoiceMap } from '@/scripts/AudioExport';
import { IAreaModel, IBattleArea } from '@/scripts/ModelExport';
import { AdvManager, AdvMap } from '@/utils/AdvManager';
import { SpawnerDataManager } from '@/utils/SpawnerDataManager';
import { plainToClass } from 'class-transformer';
import Enumerable from 'linq';

import { ApiManager } from './ApiManager';

const localesLabel = {
  'ja-JP': '日本語',
  'zh-TW': '繁體中文',
  'zh-CN': '简体',
  'en': 'English',
};

class AtelierServerInfo {
  public id = '';
  public name = '';
  public locales = [] as string[];
  public timeZone = '';

  public version = '';
  public updateDate = '';

  public get languages() {
    return this.locales.map((locale) => ({
      name: localesLabel[locale] || locale,
      locale,
    }));
  }
}

export class DataManager {
  public static servers = [
    plainToClass(AtelierServerInfo, {
      id: 'jp',
      name: '日本',
      locales: ['ja-JP'],
      timeZone: 'Asia/Tokyo',

      version: '3.15.2',
      updateDate: '2021-05-26',
    }),
    plainToClass(AtelierServerInfo, {
      id: 'tw',
      name: '台灣',
      locales: ['zh-TW', 'zh-CN'],
      timeZone: 'Asia/Taipei',

      version: '3.5.0',
      updateDate: '2021-07-29',
    }),
    plainToClass(AtelierServerInfo, {
      id: 'en',
      name: 'Global',
      locales: ['en'],
      timeZone: 'America/Los_Angeles',

      version: '1.0.0',
      updateDate: '2021-08-25',
    }),
  ];

  public static get serversById () {
    return Enumerable.from(this.servers).toObject((p) => p.id, (p) => p) as { [id: string]: AtelierServerInfo };
  }

  public static get supportedLocales() {
    return this.servers.map((server) => server.locales).flat();
  }

  public static get serverIds() {
    return this.servers.map((server) => server.id);
  }

  public static get defaultLocale() {
    return this.servers[0].locales[0];
  }

  public static get defaultServerId() {
    return this.servers[0].id;
  }

  public get baseServerId() {
    return DataManager.servers[0].id;
  }

  // settings
  public showHiddenContent = false;

  #locale = DataManager.defaultLocale;
  public get locale() {
    return this.#locale;
  }
  public set locale(value: string | null) {
    this.#locale = DataManager.supportedLocales.find((p) => p.toLocaleLowerCase() === value?.toLocaleLowerCase()) || DataManager.defaultLocale;
  }
  public get lang() {
    const { locale } = this;
    switch (locale) {
      case 'zh-TW':
      case 'zh-HK':
        return 'zh-Hant';
      case 'zh-CN':
        return 'zh-Hans';
      default:
        return locale.substr(0, 2);
    }
  }

  public get server() {
    return DataManager.serversById[this.serverId];
  }

  public get serverId() {
    switch (this.locale) {
      case 'zh-TW':
      case 'zh-HK':
      case 'zh-CN':
        return 'tw';
      case 'en':
        return 'en';
      case 'ja-JP':
      default:
        return 'jp';
    }
  }

  public get exportFolderUrl() {
    return `${this.serverId}/export/`;
  }

  public getExportMasterJsonUrl(file: string) {
    return `${this.exportFolderUrl}master/${file}`;
  }

  public async loadJson(url: string) {
    return fetch(url).then((p) => p.json());
  }

  public async loadExportMasterJson(file: string) {
    return this.loadJson(this.getExportMasterJsonUrl(`${file}.json`));
  }

  //
  public cache<T>(name: string, getValue: () => T): T {
    const cachedResult = this.valueCache.get(name);
    if (cachedResult) {
      return cachedResult as T;
    }

    const value = getValue();
    this.valueCache.set(name, value);
    return value;
  }

  public valueCache = new Map<string, unknown>();

  public get dataDependency() {
    return {
      item: ['skill', 'zone'],
      chara: ['skill', 'blazeArt'],
      skill: ['blazeArt', 'abnormalState'],
      abnormalState: ['skill', 'item', 'chara', 'enemy'],
      abnormalStateEffect: [],
      zone: [],
      zoneEffect: [],
      enemy: ['zone', 'skill'],
      wealth: [],
      degree: [],
      blazeArt: [],
      quest: ['wealth', 'chara', 'degree'],
      fieldName: [],
      areaDetail: [],
      areaInfo: [],
      townInfo: [],
      gateInfo: [],
      dungeonInfo: [],
      fieldItem: [],
      extraQuest: [],
      adventBattle: [],
      soundList: [],
      tips: [],
      treasure: [],
      chat: [],
    };
  }

  public get dataFileMap() {
    return {
      abnormalState: 'abnormalstate',
      abnormalStateEffect: 'abnormalstateeffect',
      zoneEffect: 'zoneeffect',
      extraQuest: 'extraquest',
      adventBattle: 'adventbattle',
      blazeArt: 'blaze_arts',
    };
  }

  public get dataClassMap() {
    return {
      item: Item,
      chara: Chara,
      skill: Skill,
      enemy: Enemy,
      wealth: Wealth,
      degree: Degree,
      blazeArt: BlazeArt,
      areaDetail: AreaDetail,
      townInfo: TownInfo,
      soundList: SoundList,
      extraQuest: ExtraQuest,
    };
  }

  public dataLoadMap = {} as { [name: string]: boolean };

  // parsed raw data
  public blazeArt: BlazeArt;
  #chara: Chara;
  public get chara() {
    return this.#chara;
  }
  public set chara(chara: Chara) {
    this.#chara = chara;
    if (!this.showHiddenContent) {
      this.#chara.m_vList = this.#chara.m_vList.filter((p) => !CharacterMVList.hides.includes(p.DF));
    }
  }
  public degree: Degree;
  public enemy: Enemy;
  public item: Item;
  public quest: Quest;
  public skill: Skill;
  public zone: Zone;
  public zoneEffect: ZoneEffect;
  public fieldName: FieldName;
  public areaDetail: AreaDetail;
  public areaInfo: AreaInfo;
  public townInfo: TownInfo;
  public dungeonInfo: DungeonInfo;
  public abnormalState: AbnormalState;
  public abnormalStateEffect: AbnormalStateEffect;
  public wealth: Wealth;
  public tips: Tips;
  public treasure: Treasure;
  public gateInfo: GateInfo;
  public adventBattle: AdventBattle;
  public fieldItem: FieldItem;
  public chat: Chat;
  public extraQuest: ExtraQuest;
  public soundList: SoundList;

  // loaded data
  public get itemById() {
    return this.cache('itemById', () => Enumerable.from(this.itemsOrderByCategory)
    .toObject((p) => p.DF) as { [df: string]: ItemMVList });
  }
  public get itemsByCategory() {
    return this.cache('itemsByCategory', () => Enumerable.from(this.itemsOrderByCategory)
    .groupBy((p) => p.CATEG)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [c: string]: ItemMVList[] });
  }
  public get itemsWeaponKindCategories() {
    return this.cache('itemsWeaponKindCategories', () => Enumerable.from(this.itemsOrderByCategory)
    .where((p) => !!p.WPN_KIND)
    .groupBy((p) => p.CATEG)
    .select((p) => p.key())
    .toArray());
  }
  public get itemsByWeaponKind() {
    return this.cache('itemsByWeaponKind', () => Enumerable.from(this.itemsOrderByCategory)
    .groupBy((p) => p.WPN_KIND)
    .toObject((p) => p.key(), (p) => p.orderBy((i) => i.CATEG).toArray()) as { [weaponKind: string]: ItemMVList[] });
  }
  public get itemsByGroupDf() {
    return this.cache('itemsByGroupDf', () => Enumerable.from(this.itemsOrderByCategory)
    .groupBy((p) => p.GROUP_DF)
    .toObject((p) => p.key(), (p) => p.orderBy((i) => i.CATEG).toArray()) as { [groupDf: string]: ItemMVList[] });
  }
  public get itemsBySkill() {
    return this.cache('itemsBySkill', () => Enumerable.from(this.itemsOrderByCategory)
    .selectMany((item) =>
      item.SPC.map((spc) => spc.SKILL.map((skill) => this.skillById[skill.DF]).filter((p) => p))
        .flat()
        .map((skill) => [skill].concat(skill.combSkillList).map((p) => p.id))
        .flat()
        .map((id) => ({
          item,
          id,
        }))
    )
    .groupBy((p) => p.id)
    .toObject(
      (p) => p.key(),
      (p) => p.select((o) => o.item).distinct((o) => o.DF).orderBy((o) => o.CATEG).thenBy((o) => o.WPN_KIND).thenBy((o) => o.DF).toArray(),
    ) as { [id: string]: ItemMVList[] });
  }
  public get itemsOrderByCategory() {
    return this.cache('itemsOrderByCategory', () => Enumerable.from(this.item.m_vList).orderBy((p) => p.CATEG).toArray());
  }
  public get itemsEquipments() {
    return this.cache('itemsEquipments', () => this.itemsOrderByCategory.filter((p) => p.EQU_BRD));
  }
  public get itemsHasRecipe() {
    return this.cache('itemsHasRecipe', () => this.itemsOrderByCategory.filter((p) => p.RSP.length));
  }
  public get itemsByRecipe() {
    return this.cache('itemsByRecipe', () => Enumerable.from(this.itemsOrderByCategory)
    .selectMany((item) => item.RSP.map((rsp) => ({
      item,
      rsp,
    })))
    .groupBy((p) => p.rsp.DF)
    .toObject((p) => p.key(), (p) => p.select(({ item }) => item).toArray()) as { [id: string]: ItemMVList[] });
  }
 public get itemsByEquipment() {
    return this.cache('itemsByEquipment', () => Enumerable.from(this.itemsOrderByCategory)
    .groupBy((p) => p.EQU_BRD)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [EQU_BRD: string]: ItemMVList[] });
  }
  public get itemsByCharacterLegendRecipe() {
    return this.cache('itemsByCharacterLegendRecipe', () => Enumerable.from(this.itemsOrderByCategory)
    .selectMany((item) => item.LRCP_CHARA.map((lrcp) => ({
      item,
      lrcp,
    })))
    .groupBy((p) => p.lrcp.DF)
    .toObject((p) => p.key(), (p) => p.select(({ item }) => item).toArray()) as { [df: string]: ItemMVList[] });
  }
  public get itemsByZone() {
    return this.cache('itemsByZone', () => Enumerable.from(this.zone.List)
    .select((zone) => ({
      zone,
      items: this.itemsOrderByCategory.filter((item) => item.SPC
        .map((p) => p.SKILL)
        .flat()
        .map((p) => this.skillById[p.DF])
        .some((p) => p && p.effect === EBattleEffectKind.eZONE_CHANGE && p.effectValue === zone.id)),
    }))
    .where((p) => !!p.items.length)
    .toObject((p) => p.zone.id, (p) => p.items) as { [id: string]: ItemMVList[] });
  }
  public get itemsCategoriesHasRecipe() {
    return this.cache('itemsCategoriesHasRecipe', () => Enumerable.from(this.itemsHasRecipe)
    .groupBy((p) => p.CATEG)
    .select((p) => p.key())
    .toArray());
  }

  public get skillById() {
    return this.cache('skillById', () => Enumerable.from(this.skill.m_vList).toObject((p) => p.id) as { [id: string]: SkillList });
  }
  public get skills() {
    return this.cache('skills', () => this.skill.m_vList.filter((p) => p.type === 1));
  }
  public get skillEffects() {
    return this.cache('skillEffects', () => this.skill.m_vList.filter((p) => p.type === 2 && !p.category));
  }
  public get skillAddonNames() {
    return this.cache('skillAddonNames', () => Enumerable.from(this.skillAddons)
    .groupBy((p) => this.server.id === 'en' ? p.name.split('Lv.')[0] : p.name.split('　')[0])
    .select((p) => p.key())
    .where((p) => !!p)
    .toArray());
  }
  public get skillAddons() {
    return this.cache('skillAddons', () => this.skill.m_vList.filter((p) => !!p.category));
  }
  public get skillAddonsEquipmentUseful() {
    return this.cache('skillAddonsEquipmentUseful', () => this.skillAddons.filter((p) => (
      p.type === 2
      && [EBattleEffectTrigger.eANYTIME, EBattleEffectTrigger.eATTACK_SKILL].includes(p.trigger)
      && (p.name.includes('強化') || p.name.includes('Boost'))
      && !p.name.includes('【')
      && !p.name.includes('】')
    )));
  }

  public get skillAddonsRarities() {
    return this.cache('skillAddonsRarities', () => Enumerable.from(this.skillAddons)
      .groupBy((p) => p.rarity)
      .select((p) => p.key())
      .orderBy((p) => p)
      .toArray());
  }

  public get skillsByAbnormalState() {
    return this.cache('skillsByAbnormalState', () => Enumerable.from(this.skill.m_vList)
      .selectMany((skill) => skill.state.map((state) => ({
        skill,
        stateId: state.id,
      })).concat(skill.stateOwn.map((state) => ({
        skill,
        stateId: state.id,
      }))))
      .groupBy((p) => p.stateId)
      .where((p) => p.key() in this.abnormalStateById)
      .toObject(
        (p) => p.key(),
        (p) => p.select((o) => o.skill)
          .distinct((o) => o.id)
          .orderBy((o) => o.id)
          .toArray(),
      ) as { [id: string]: SkillList[] });
  }

  public get skillBlazeArts() {
    return this.cache('skillBlazeArts', () => {
      const characterBlazeArtSkillDfs = new Set(
        this.chara.m_vList
          .map((character) => character.BA.map((ba) => this.blazeArtById[ba.DF].LV.map((lv) => lv.SKILL_DF)))
          .flat(Infinity),
      );
      return this.skills.filter((p) => characterBlazeArtSkillDfs.has(p.id));
    });
  }

  public get blazeArtById() {
    return this.cache('blazeArtById', () => Enumerable.from(this.blazeArt.m_vList)
    .toObject((p) => p.DF) as { [df: string]: BlazeArtMvList });
  }

  public get enemyById() {
    return this.cache('enemyById', () => Enumerable.from(this.enemiesHasValidSpec)
    .toObject((p) => p.DF) as { [df: string]: EnemyMVList });
  }
  public get enemiesBySkill() {
    return this.cache('enemiesBySkill', () => Enumerable.from(this.enemiesHasValidSpec)
      .selectMany((enemy) =>
        enemy.sParam.SKILL.map((skill) => this.skillById[skill.DF]).filter((p) => p)
          .flat()
          .map((skill) => [skill].concat(skill.combSkillList).map((p) => p.id))
          .flat()
          .map((id) => ({
            enemy,
            id,
          }))
      )
      .concat(
        this.skill.m_vList.map(({ id, enemyList }) =>
          enemyList
            .map((df) => this.enemyById[df])
            .filter((p) => p)
            .flat()
            .map((enemy) => ({
              enemy,
              id,
            })),
        ).flat()
      )
      .groupBy((p) => p.id)
      .toObject(
        (p) => p.key(),
        (p) => p.select(({ enemy }) => enemy).distinct((o) => o.DF).orderBy((o) => o.eKind).thenBy((o) => o.DF).toArray(),
      ) as { [id: string]: EnemyMVList[] }
    );
  }
  public get enemiesByEKind() {
    return this.cache('enemiesByEKind', () => Enumerable.from(this.enemiesHasValidSpec)
    .groupBy((p) => p.eKind)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [id: string]: EnemyMVList[] });
  }
  public get enemiesOrderByCategory() {
    return this.cache('enemiesOrderByCategory', () => Enumerable.from(this.enemiesHasValidSpec)
    .orderBy((p) => p.eKind)
    .thenBy((p) => p.iCategory)
    .toArray());
  }
  public get enemiesHasValidSpec() {
    return this.cache('enemiesHasValidSpec', () => this.enemy.m_vList.filter((p) => p.sParam.SPEC.HP.R));
  }
  public get enemyKindListById() {
    return this.cache('enemyKindListById', () => Enumerable.from(this.enemy.KindList).toObject((p) => p.iKind, (p) => p) as { [id: string]: KindList });
  }
  public get enemiesByZone() {
    return this.cache('enemiesByZone', () => Enumerable.from(this.zone.List)
    .select((zone) => ({
      zone,
      enemies: this.enemiesOrderByCategory.filter((enemy) => enemy.sParam.SKILL
        .map((p) => this.skillById[p.DF])
        .some((p) => p && p.effect === EBattleEffectKind.eZONE_CHANGE && p.effectValue === zone.id)),
    }))
    .where((p) => !!p.enemies.length)
    .toObject((p) => p.zone.id, (p) => p.enemies) as { [id: string]: EnemyMVList[] });
  }

  public get abnormalStateById() {
    return this.cache('abnormalStateById', () => Enumerable.from(this.abnormalState.m_vList)
    .toObject((p) => p.id) as { [id: string]: AbnormalStateMVList });
  }
  public get abnormalStateTypes() {
    return this.cache('abnormalStateTypes', () => Enumerable.from(this.abnormalState.m_vList)
      .groupBy((p) => p.name.split('(')[0])
      .select((p) => p.key())
      .toArray());
  }
  public get abnormalStateItems() {
    return this.cache('abnormalStateItems', () => Enumerable.from(this.abnormalState.m_vList)
      .toObject(
        (p) => p.id,
        (p) => Enumerable.from(this.skillsByAbnormalState[p.id] || [])
          .selectMany((p) => [p].concat(p.combSkillList.map((o) => this.skillById[o.id]).filter((o) => o)))
          .selectMany((p) => this.itemsBySkill[p.id] || [])
          .distinct((p) => p.DF)
          .orderBy((o) => o.CATEG)
          .thenBy((o) => o.WPN_KIND)
          .thenBy((o) => o.DF)
          .toArray()
      ) as { [id: string]: ItemMVList[] });
  }
  public get abnormalStateCharacters() {
    return this.cache('abnormalStateCharacters', () => Enumerable.from(this.abnormalState.m_vList)
      .toObject(
        (p) => p.id,
        (p) => Enumerable.from(this.skillsByAbnormalState[p.id] || [])
          .selectMany((p) => [p].concat(p.combSkillList.map((o) => this.skillById[o.id]).filter((o) => o)))
          .selectMany((p) => this.charactersBySkill[p.id] || [])
          .distinct((p) => p.DF)
          .toArray()
      ) as { [id: string]: CharacterMVList[] });
  }
  public get abnormalStateEnemies() {
    return this.cache('abnormalStateEnemies', () => Enumerable.from(this.abnormalState.m_vList)
      .toObject(
        (p) => p.id,
        (p) => Enumerable.from(this.skillsByAbnormalState[p.id] || [])
          .selectMany((p) => [p].concat(p.combSkillList.map((o) => this.skillById[o.id]).filter((o) => o)))
          .selectMany((p) => this.enemiesBySkill[p.id] || [])
          .distinct((p) => p.DF)
          .orderBy((o) => o.eKind)
          .thenBy((o) => o.DF)
          .toArray()
      ) as { [id: string]: EnemyMVList[] });
  }

  public get abnormalStateEffectById() {
    return this.cache('abnormalStateEffectById', () => Enumerable.from(this.abnormalStateEffect.m_vList).toObject((p) => p.id) as { [id: string]: AbnormalStateEffectMVList });
  }
  public get abnormalStateEffectsByTarget() {
    return this.cache('abnormalStateEffectsByTarget', () => Enumerable.from(this.abnormalStateEffect.m_vList)
    .groupBy((p) => p.trarget)
    .toObject((p) => p.key(), (p) => p.orderBy((p) => p.id).toArray()) as { [target: string]: AbnormalStateEffectMVList[] });
  }
  public get abnormalStateEffectsElements() {
    return this.cache('abnormalStateEffectsElements', () => [EAbnormalStateTarget.eFIRE, EAbnormalStateTarget.eWATER, EAbnormalStateTarget.eEARTH, EAbnormalStateTarget.eWIND, EAbnormalStateTarget.eLIGHT, EAbnormalStateTarget.eDARK].map((p) => this.abnormalStateEffectsByTarget[p] || []).flat());
  }
  public get abnormalStateEffectsAttackStates() {
    return this.cache('abnormalStateEffectsAttackStates', () => [EAbnormalStateTarget.eSATK, EAbnormalStateTarget.eMATK].map((p) => this.abnormalStateEffectsByTarget[p] || []).flat());
  }
  public get abnormalStateEffectsStates() {
    return this.cache('abnormalStateEffectsStates', () => [EAbnormalStateTarget.eHP, EAbnormalStateTarget.eSDEF, EAbnormalStateTarget.eMDEF, EAbnormalStateTarget.eSPD, EAbnormalStateTarget.eDDG, EAbnormalStateTarget.eQTH].map((p) => this.abnormalStateEffectsByTarget[p] || []).flat().concat(this.abnormalStateEffectsAttackStates));
  }

  public get characterById() {
    return this.cache('characterById', () => Enumerable.from(this.chara.m_vList)
    .toObject((p) => p.DF) as { [df: string]: CharacterMVList });
  }
  public get charactersBySkill() {
    return this.cache('charactersBySkill', () => Enumerable.from(this.chara.m_vList)
    .selectMany((character) => character.SKILL.map((skill) => skill.DF)
      .concat(
        character.BA.map((p) => this.blazeArtById[p.DF]?.LV.map((lv) => lv.SKILL_DF))
          .filter((p) => p)
          .flat()
      ).map((id) => this.skillById[id])
      .filter((p) => p)
      .map((skill) => [skill].concat(skill.combSkillList).map((o) => o.id))
      .flat()
      .map((id) => ({
        character,
        id,
      }))
    )
    .groupBy((p) => p.id)
    .toObject(
      (p) => p.key(),
      (p) => p.select((o) => o.character).distinct((o) => o.DF).orderBy((o) => o.DF).toArray(),
    ) as { [id: string]: CharacterMVList[] });
  }
  public get charactersCanBattle() {
    return this.cache('charactersCanBattle', () => this.chara.m_vList.filter((p) => p.EXC));
  }
  public get charactersHasBlazeArts() {
    return this.cache('charactersHasBlazeArts', () => this.charactersCanBattle.filter((p) => p.hasBlazeArts));
  }
  public get charactersByGroupDf() {
    return this.cache('charactersByGroupDf', () => Enumerable.from(this.chara.m_vList)
    .groupBy((p) => p.GROUP_DF)
    .toObject((p) => p.key(), (p) => p) as { [GROUP_DF: string]: CharacterMVList[] });
  }
  public get characterNpcs() {
    return this.cache('characterNpcs', () => this.chara.m_vList.filter((p) => !p.EXC));
  }
  public get characterMealItemDfs() {
    return this.cache('characterMealItems', () => Enumerable.from(this.charactersCanBattle)
      .selectMany((character) => character.FDM.map((p) => p.FD.map((o) => o.DF)).flat())
      .where((p) => !!p)
      .distinct()
      .toArray());
  }

  public get zoneNames() {
    return this.cache('zoneNames', () => Enumerable.from(this.zone.List)
    .groupBy((p) => p.name.split(' ')[0])
    .select((p) => p.key())
    .toArray());
  }
  public get zoneById() {
    return this.cache('zoneById', () => Enumerable.from(this.zone.List)
    .toObject((p) => p.id) as { [id: string]: ZoneList });
  }

  public get zoneEffectById() {
    return this.cache('zoneEffectById', () => Enumerable.from(this.zoneEffect.List)
    .toObject((p) => p.id) as { [id: string]: ZoneEffectList });
  }

  public get wealthOrderBySort() {
    return this.cache('wealthOrderBySort', () => Enumerable.from(this.wealth.m_vList)
    .orderBy((p) => p.SORT)
    .toArray());
  }
  public get wealthById() {
    return this.cache('wealthById', () => Enumerable.from(this.wealth.m_vList).toObject((p) => p.DF) as { [df: string]: WealthMvList });
  }

  public get questById() {
    return this.cache('questById', () => Enumerable.from(this.quest.m_vList)
    .toObject((p) => p.DF) as { [df: string]: QuestMVList });
  }
  public get questsByCategory() {
    return this.cache('questsByCategory', () => Enumerable.from(this.quest.m_vList)
    .groupBy((p) => p.CATEG)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [CATEG: string]: QuestMVList[] });
  }
  public get questsByGetItem() {
    return this.cache('questsByGetItem', () => Enumerable.from(this.quest.m_vList)
    .selectMany((quest) => quest.GET.map((get) => ({
      quest,
      get,
    })))
    .groupBy((p) => p.get.DF)
    .toObject((p) => p.key(), (p) => p.select(({ quest }) => quest).toArray()) as { [df: string]: QuestMVList[] });
  }
  public get questsByDeliverItem() {
    return this.cache('questsByDeliverItem', () => Enumerable.from(this.quest.m_vList)
    .selectMany((quest) => quest.DLV.map((dlv) => ({
      quest,
      dlv,
    })))
    .groupBy((p) => p.dlv.DF)
    .toObject((p) => p.key(), (p) => p.select(({ quest }) => quest).toArray()) as { [df: string]: QuestMVList[] });
  }
  public get questsByRewardItem() {
    return this.cache('questsByRewardItem', () => Enumerable.from(this.quest.m_vList)
    .selectMany((quest) => quest.RWD_ITEM.map((rwd) => ({
      quest,
      rwd,
    })))
    .groupBy((p) => p.rwd.DF)
    .toObject((p) => p.key(), (p) => p.select(({ quest }) => quest).distinct().toArray()) as { [df: string]: QuestMVList[] });
  }
  public get questsByEnemy() {
    return this.cache('questsByEnemy', () => Enumerable.from(this.quest.m_vList)
    .selectMany((quest) => quest.ENM.map((enm) => ({
      quest,
      enm,
    })))
    .groupBy((p) => p.enm.DF)
    .toObject((p) => p.key(), (p) => p.select(({ quest }) => quest).toArray()) as { [df: string]: QuestMVList[] });
  }
  public get questCostWealths() {
    return this.cache('questCostWealths', () => Enumerable.from(this.quest.m_vList)
    .groupBy((p) => p.COST.WTH.DF)
    .select((p) => this.wealthById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.DF)
    .toArray());
  }
  public get questRewardWealths() {
    return this.cache('questRewardWealths', () => Enumerable.from(this.quest.m_vList)
    .selectMany((p) => p.RWD_WTH)
    .groupBy((p) => p.DF)
    .select((p) => this.wealthById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.DF)
    .toArray());
  }
  public get questCharacters() {
    return this.cache('questCharacters', () => Enumerable.from(this.quest.m_vList)
    .groupBy((p) => p.CHARA)
    .select((p) => this.characterById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.DF)
    .toArray());
  }
  public get questRequireDegrees() {
    return this.cache('questRequireDegrees', () => Enumerable.from(this.quest.m_vList)
    .selectMany((p) => p.UNLOCK)
    .groupBy((p) => p.DF)
    .select((p) => this.degreeById[p.key()])
    .where((p) => !!p)
    .orderBy((p) => p.DF)
    .toArray());
  }
  public get questsByDegree() {
    return this.cache('questsByDegree', () => Enumerable.from(this.quest.m_vList)
      .selectMany((quest) => quest.UNLOCK.map((unlock) => ({
        quest,
        unlock,
      })))
      .groupBy((p) => p.unlock.DF)
      .toObject(
        (p) => p.key(),
        (p) => p.groupBy((p) => p.unlock.STP)
          .toObject(
            (o) => o.key(),
            (o) => o.select(({ quest }) => quest)
              .distinct((quest) => quest.DF)
              .orderBy((quest) => quest.DF)
              .toArray(),
        ),
      ) as { [df: string ]: { [stp: string]: QuestMVList[]} });
  }
  public get questsByAdv() {
    return this.cache('questsByAdv', () => Enumerable.from(this.quest.m_vList)
    .selectMany((quest) => quest.NPC_FD.map((npcfd) => ({
      quest,
      npcfd,
    })))
    .where((p) => !!p.npcfd.ADV)
    .groupBy((p) => p.npcfd.ADV)
    .toObject((p) => p.key(), (p) => p.select(({ quest }) => quest).toArray()) as { [df: string]: QuestMVList[] });
  }

  public get fieldNameById() {
    return this.cache('fieldNameById', () => Enumerable.from(this.fieldName.List).toObject((p) => p.iAreaNameId) as { [s: string]: FieldNameList });
  }

  public get areaInfoById() {
    return this.cache('areaInfoById', () => Enumerable.from(this.areaInfo.List).toObject((p) => p.iAreaId) as { [s: string]: AreaInfoList });
  }

  public get areaDetailById() {
    return this.cache('areaDetailById', () => Enumerable.from(this.areaDetail.List).toObject((p) => p.iAreaID) as { [s: string]: AreaDetailList });
  }

  public get townInfosByAreaId() {
    return this.cache('townInfosByAreaId', () => Enumerable.from(this.townInfo.List)
    .groupBy((p) => p.iAreaId)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [s: string]: TownInfoList[] });
  }

  public get gateInfoByAreaId() {
    return this.cache('gateInfoByAreaId', () => Enumerable.from(this.gateInfo.List)
    .groupBy((p) => p.iArea)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [s: string]: GateInfoList[] });
  }

  public get dungeonInfosByAreaId() {
    return this.cache('dungeonInfosByAreaId', () => Enumerable.from(this.dungeonInfo.List)
    .groupBy((p) => p.iAreaId)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [s: string]: DungeonList[] });
  }
  public get dungeonInfoById() {
    return this.cache('dungeonInfoById', () => Enumerable.from(this.dungeonInfo.List).toObject((p) => p.iDungeonId) as { [s: string]: DungeonList });
  }

  public get degrees() {
    return this.cache('degrees', () => this.degree.List.filter((p) => p.TYP !== EDegreeMissonType.eNONE));
  }
  public get degreeDailyMissions() {
    return this.cache('degreeDailyMissions', () => this.degree.List.filter((p) => p.TYP === EDegreeMissonType.eNONE));
  }
  public get degreeById() {
    return this.cache('degreeById', () => Enumerable.from(this.degree.List)
    .where((p) => p.TYP !== EDegreeMissonType.eNONE)
    .toObject((p) => p.DF) as { [df: string]: DegreeList });
  }
  public get degreeByIdStep() {
    return this.cache('degreeByIdStep', () => Enumerable.from(this.degree.List)
    .groupBy((p) => p.DF)
    .toObject(
      (p) => p.key(),
      (p) => p.groupBy((o) => o.STP).toObject((o) => o.key(), (o) => o.firstOrDefault()),
    ) as { [df: string]: { [step: string]: DegreeList } });
  }
  public get degreeSteps() {
    return this.cache('degreeSteps', () => Enumerable.from(this.degree.List)
    .groupBy((p) => p.STP)
    .select((p) => p.key())
    .orderBy((p) => p)
    .toArray());
  }
  public get degreeRarities() {
    return this.cache('degreeRarities', () => Enumerable.from(this.degree.List)
    .groupBy((p) => p.RTY)
    .select((p) => p.key())
    .orderBy((p) => p)
    .toArray());
  }
  public get fieldItemById() {
    return this.cache('fieldItemById', () => Enumerable.from(this.fieldItem.List).toObject((p) => p.iItemId, (p) => p) as { [s: string]: FieldItemList });
  }
  public get extraQuestsByQuest() {
    return this.cache('extraQuestsByQuest', () => Enumerable.from(this.extraQuest.List)
    .groupBy((p) => p.iQuestDf)
    .toObject((p) => p.key(), (p) => p.first()) as { [df: string]: ExtraQuestList });
  }
  public get extraQuestAdvs() {
    return this.cache('extraQuestAdvs', () => Enumerable.from(this.extraQuest.List)
      .selectMany((p) => [p.sGoodADV, p.sNormalADV, p.sTrueADV])
      .where((p) => !!p)
      .distinct()
      .toArray());
  }

  public get adventBattleById() {
    return this.cache('adventBattleById', () => Enumerable.from(this.adventBattle.RankingList).toObject((p) => p.ID) as { [id: string]: RankingList });
  }
  public get soundListBgmById() {
    return this.cache('soundListBgmById', () => Enumerable.from(this.soundList.BGM)
    .groupBy((p) => p.iID)
    .toObject((p) => p.key(), (p) => p.firstOrDefault()) as { [id: string]: Bgm });
  }

  // other managers
  public spawnerDataManager = new SpawnerDataManager(this);
  public advManager = new AdvManager(this);
  public api = new ApiManager(this);

  // custom data
  public lookup = lookup;
  public files = files;
  public areaModel: IAreaModel[] = areaModel;
  public areaDungeonModel: IAreaModel[] = areaDungeonModel;
  public characterVoices: CharacterVoiceMap;
  public charactersByAdv: { [adv: string]: number[] };

  public advCharacterById: AdvMap;
  public advCgById: AdvMap;
  public advWindowItemById: AdvMap;
  public advBgById: AdvMap;
  public advAudioById: AdvMap;
  public get advHasCg() {
    return this.cache('advHasCg', () => Enumerable.from(Object.entries(this.advCgById))
    .selectMany(([id, advs]) => advs.map((adv) => ({ id, adv })))
    .groupBy(({ adv }) => adv)
    .toObject((p) => p.key(), (p) => p.any()) as { [adv: string]: boolean });
  }
  public get advHasAudio() {
    return this.cache('advHasAudio', () => Enumerable.from(Object.entries(this.advAudioById))
    .selectMany(([id, advs]) => advs.map((adv) => ({ id, adv })))
    .groupBy(({ adv }) => adv)
    .toObject((p) => p.key(), (p) => p.any()) as { [adv: string]: boolean });
  }

  // processed custom data
  public get battleAreas() {
    return this.cache('battleAreas', () => Object.keys(this.files.jp.models.battleAreas));
  }
  public get areaModelsById() {
    return this.cache('areaModelsById', () => Enumerable.from(this.areaModel)
    .groupBy((p) => p.iAreaID)
    .toObject((p) => p.key(), (p) => p.orderBy((i) => i.iLevel).toArray()) as { [iAreaId: string]: IAreaModel[] });
  }
  public get areaDungeonsById() {
    return this.cache('areaDungeonsById', () => Enumerable.from(this.areaDungeonModel)
    .groupBy((p) => p.iAreaID)
    .toObject((p) => p.key(), (p) => p.orderBy((i) => i.iLevel).toArray()) as { [iAreaId: string]: IAreaModel[] });
  }
  public get areaBattleAreas() {
    return this.cache('areaBattleAreas', () => Enumerable.from(this.battleAreas)
    .where((folder) => !!folder.match(/^BattleArea_\d+/))
    .select((folder) => {
      const match = folder.replace('BattleArea_', '').match(/^(\d{3})(\d+)/);
      return {
        folder,
        iAreaId: +match[1],
        iLevel: +match[2],
      };
    })
    .groupBy((battleAreas) => battleAreas.iAreaId)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [iAreaId: string]: IBattleArea[] });
  }
  public get areaDungeonBattleAreas() {
    return this.cache('areaDungeonBattleAreas', () => Enumerable.from(this.battleAreas)
    .where((folder) => folder.startsWith('BattleArea_Dun'))
    .select((folder) => {
      const match = folder.replace('BattleArea_Dun', '').match(/^(\d{3})(\d+)/);
      return {
        folder,
        iAreaId: +match[1],
        iLevel: +match[2],
      };
    })
    .groupBy((battleAreas) => battleAreas.iAreaId)
    .toObject((p) => p.key(), (p) => p.toArray()) as { [iAreaId: string]: IBattleArea[] });
  }
  public get fieldTitlesByAreaId() {
    return this.cache('fieldTitlesByAreaId', () => Enumerable.from(Object.values(this.files.img.field_title.Texture2D))
    .select((fileName) => ({
      id: +fileName.split('_')[0],
      fileName,
    }))
    .groupBy((p) => p.id)
    .toObject((p) => p.key(), (p) => p.select((i) => i.fileName).toArray()) as { [iAreaId: string]: string[] });
  }
  public get dungeonModelsByLevel() {
    return this.cache('dungeonModelsByLevel', () => Enumerable.from(Object.keys(this.files.jp.models.dungeons))
    .groupBy((p) => +p.split('_')[1])
    .toObject((p) => p.key() || '', (p) => p.toArray()) as { [level: string]: string[] });
  }

  public get advs() {
    return this.cache('advs', () => Object.values(this.advFilesTree).map((p) => p.split('.')[0]).filter((p) => p));
  }

  public get unusedAdvs() {
    return this.cache('unusedAdvs', () => {
      const existingAdvs = this.quest.m_vList.map((p) => p.NPC_FD.map((i) => i.ADV))
        .flat()
        .filter((p) => p)
        .concat(this.extraQuestAdvs);

      const notExistingAdvs = this.advs.filter((p) => !existingAdvs.includes(p));
      return Enumerable.from(notExistingAdvs)
        .groupBy((p) => p.split('_')[0] || p)
        .toObject((p) => p.key(), (p) => p.orderBy((p) => p).toArray()) as { [s: string]: string[] };
    });
  }

  public get townIcons() {
    return this.cache('townIcons', () => Object.values(this.files.img.map_town.Texture2D)
    .filter((p) => !p.endsWith('_02.png')));
  }

  public get advCharacterByName() {
    return this.cache('advCharacterByName', () => Enumerable.from(Object.entries(this.advCharacterById))
    .selectMany(([id, names]) => names.map((name) => ({ id, name })))
    .groupBy(({ name }) => name)
    .toObject((p) => p.key(), (p) => p.select(({ id }) => id).toArray()) as AdvMap);
  }

  public get advQuestsByCharacterId() {
    return this.cache('advQuestsByCharacterId', () => Enumerable.from(Object.entries(this.charactersByAdv))
      .selectMany(([adv, dfs]) => dfs.map((df) => ({ adv, df })))
      .selectMany((p) => this.questsByAdv[p.adv]?.map((quest) => ({
        character: this.characterById[p.df],
        quest,
      })) || [])
      .where((p) => !!p.character)
      .groupBy((p) => p.character.DF)
      .toObject((p) => p.key(), (p) => p.select((o) => o.quest).distinct((o) => o.DF).orderBy((o) => o.DF).toArray()) as { [df: string]: QuestMVList[] }
    );
  }
  public get advQuestsCharacters() {
    return this.cache('advQuestsCharacters', () => Enumerable.from(Object.entries(this.charactersByAdv))
      .where(([adv,]) => !!this.questsByAdv[adv])
      .selectMany(([, dfs]) => dfs)
      .distinct()
      .select((df) => this.characterById[df])
      .where((p) => !!p)
      .orderBy((p) => p.EXC)
      .thenBy((p) => p.DF)
      .toArray()
    );
  }

  public get advFilesTree() {
    return this.files[this.serverId]?.export.adv || this.files.jp.export.adv;
  }

  //
  public async load(showHiddenContent = false) {
    this.valueCache.clear();
    this.advManager.clearCache();
    this.spawnerDataManager.clearCache();

    this.showHiddenContent = showHiddenContent;
    await this.loadFromOptimizedData();

    // await Promise.all([
    //   ...Object.keys(this.dataDependency).map((name) => this.loadMasterData(name)),
    //   this.loadGenerated(),
    //   this.spawnerDataManager.load(),
    //   this.api.load(),
    // ]);
  }

  public async loadMasterData(name: string) {
    if (this.dataLoadMap[name]) {
      return;
    }
    this.dataLoadMap[name] = true;

    try {
      const [value] = await Promise.all([
        this.loadExportMasterJson(this.dataFileMap[name] || name),
        ...this.dataDependency[name]?.map((n: string) => this.loadMasterData(n)) || [],
      ]);
      const classType = this.dataClassMap[name];
      this[name] = classType ? plainToClass(classType, value) : value;
    } catch (e) {
      this.dataLoadMap[name] = false;
      throw e;
    }
  }

  //
  public async loadGenerated() {
    [
      this.advCharacterById,
      this.advCgById,
      this.advWindowItemById,
      this.advBgById,
      this.advAudioById,
      this.characterVoices,
      this.charactersByAdv,
    ] = await Promise.all([
      this.loadJson(`${this.serverId}/generated/advCharacterById.json`),
      this.loadJson(`${this.serverId}/generated/advCgById.json`),
      this.loadJson(`${this.serverId}/generated/advWindowItemById.json`),
      this.loadJson(`${this.serverId}/generated/advBgById.json`),
      this.loadJson(`${this.serverId}/generated/advAudioById.json`),
      this.loadJson(`${this.serverId}/generated/characterVoices.json`),
      this.loadJson(`${this.serverId}/generated/charactersByAdv.json`),

      this.loadMasterData('chara'), // required for charactersByAdv
      this.loadMasterData('quest'), // required for charactersByAdv
    ]);
  }

  //
  public async loadFromOptimizedData() {
    const data = await this.loadJson(`${this.serverId}/data.json`);

    for (const [k, v] of Object.entries(data.export.master)) {
      const variableName = Object.entries(this.dataFileMap).find(([, file]) => file === k)?.[0] || k;
      this[variableName] = this.dataClassMap[variableName]
        ? plainToClass(this.dataClassMap[variableName], v)
        : v;
    }

    for (const [k, v] of Object.entries(data.generated)) {
      this[k] = v;
    }

    this.api.loadFromOptimizedData(data.aoserver);
    await this.spawnerDataManager.loadFromOptimizedData(data.export.SpawnList);
  }

  // helper
  public folderLabel(folder: string) {
    return folder.replace(/\s*\(\d+\)/, '');
  }
}

export const dataManager = new DataManager();
