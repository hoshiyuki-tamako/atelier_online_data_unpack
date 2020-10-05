import files from '@/../public/generated/files.json';
import { EAbnormalStateTarget, EBattleEffectKind, EBattleEffectTrigger } from '@/logic/Enums';
import { lookup } from '@/logic/Lookup';
import { AbnormalState, MVList as AbnormalStateMVList } from '@/master/abnormalState';
import { AbnormalStateEffect, MVList as AbnormalStateEffectMVList } from '@/master/abnormalStateEffect';
import { AdventBattle } from '@/master/adventBattle';
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
import { Tips } from '@/master/tips';
import { List as TownInfoList, TownInfo } from '@/master/townInfo';
import { Treasure } from '@/master/treasure';
import { MVList as WealthMvList, Wealth } from '@/master/wealth';
import { Zone } from '@/master/zone';
import { List as ZoneEffectList, ZoneEffect } from '@/master/zoneEffect';
import { IAreaModel } from '@/scripts/ModelExport';
import { AdvManager } from '@/utils/AdvManager';
import { SpawnerDataManager } from '@/utils/SpawnerDataManager';
import { plainToClass } from 'class-transformer';
import Enumerable from 'linq';

export class DataManager {
  // settings
  public showHiddenContent = false;
  public locale = 'ja-JP';
  public exportFolder = './export/';
  public generatedFolder = './generated/';
  public get exportFolderUrl() {
    const locale = this.locale === 'zh-TW' ? 'tw/' : '';
    return `${this.exportFolder}${locale}`;
  }
  public getExportJsonUrl(file: string) {
    return `${this.exportFolderUrl}${file}`;
  }
  public getGeneratedJsonUrl(file: string) {
    return `${this.generatedFolder}${file}`;
  }
  public async loadJson(file: string) {
    return fetch(this.getExportJsonUrl(`${file}.json`)).then((p) => p.json());
  }
  public async loadGeneratedJson(file: string) {
    return fetch(this.getGeneratedJsonUrl(`${file}.json`)).then((p) => p.json());
  }

  // parsed raw data
  public blazeArt: BlazeArt;
  public chara: Chara;
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

  // loaded data
  public itemById: { [df: string]: ItemMVList };
  public itemsByCategory: { [c: string]: ItemMVList[] };
  public itemsWeaponKindCategories: number[];
  public itemsByWeaponKind: { [weaponKind: string]: ItemMVList[] };
  public itemsByGroupDf: { [groupDf: string]: ItemMVList[] };
  public itemsBySkill: { [id: string]: ItemMVList[] }
  public itemsOrderByCategory: ItemMVList[];
  public itemsEquipments: ItemMVList[];
  public itemsHasRecipe: ItemMVList[];
  public itemsByRecipe: { [df: string]: ItemMVList[] };
  public itemsByEquipment: { [EQU_BRD: string]: ItemMVList[] };
  public itemsByCharacterLegendRecipe: { [df: string]: ItemMVList[] };
  public itemsByZone: { [id: string]: ItemMVList[] };
  public itemsCategoriesHasRecipe: number[];

  public skillById: { [id: string]: SkillList };
  public skills: SkillList[];
  public skillEffects: SkillList[];
  public skillAddonNames: string[];
  public skillAddons: SkillList[];
  public skillAddonsEquipmentUseful: SkillList[];
  public skillBlazeArts: SkillList[];

  public blazeArtById: { [df: string]: BlazeArtMvList };

  public enemyById: { [df: string]: EnemyMVList };
  public enemiesBySkill: { [id: string]: EnemyMVList[] };
  public enemiesByEKind: { [id: string]: EnemyMVList[] };
  public enemiesOrderByCategory: EnemyMVList[];
  public enemiesHasValidSpec: EnemyMVList[];
  public enemyKindListById: { [id: string]: KindList };
  public enemiesByZone: { [id: string]: EnemyMVList[] };

  public abnormalStateById: { [id: string]: AbnormalStateMVList };

  public abnormalStateTypes: string[];

  public abnormalStateEffectById: { [id: string]: AbnormalStateEffectMVList };
  public abnormalStateEffectsByTarget: { [target: string]: AbnormalStateEffectMVList[] };
  public abnormalStateEffectsElements: AbnormalStateEffectMVList[];
  public abnormalStateEffectsAttackStates: AbnormalStateEffectMVList[];
  public abnormalStateEffectsStates: AbnormalStateEffectMVList[];

  public characterById: { [df: string]: CharacterMVList };
  public charactersBySkill: { [df: string]: CharacterMVList[] };
  public charactersCanBattle: CharacterMVList[];
  public charactersByGroupDf: { [GROUP_DF: string]: CharacterMVList[] };
  public characterNpcs: CharacterMVList[];

  public zoneNames: string[];
  public zoneEffectById: { [id: string]: ZoneEffectList };

  public wealthOrderBySort: WealthMvList[];

  public questById: { [id: string]: QuestMVList };
  public questsByCategory: { [CATEG: string]: QuestMVList[] };
  public questsByRewardItem: { [df: string]: QuestMVList[] };

  public fieldNameById: { [id: string]: FieldNameList };

  public areaInfoById: { [id: string]: AreaInfoList };

  public areaDetailById: { [id: string]: AreaDetailList };

  public townInfosByAreaId: { [id: string]: TownInfoList[] };

  public gateInfoByAreaId: { [id: string]: GateInfoList[] };

  public dungeonInfosByAreaId: { [id: string]: DungeonList[] };

  public wealthById: { [df: string]: WealthMvList };

  public degreeById: { [df: string]: DegreeList };

  public fieldItemById: { [id: string]: FieldItemList };

  public extraQuestsByQuest: { [df: string]: ExtraQuestList[] };

  // other managers
  public spawnerDataManager = new SpawnerDataManager();
  public advManager = new AdvManager();

  // custom data
  public lookup = lookup;
  public files = files;
  public areaModel: IAreaModel[];

  public areaModelsById: { [iAreaId: string]: IAreaModel[] };

  public unusedAdvs: { [s: string]: string[] };

  //
  public async load(locale: string, showHiddenContent = false) {
    this.showHiddenContent = showHiddenContent;
    this.locale = locale;
    this.advManager.setLocale(this.locale);
    await this.loadData();
  }

  public async loadData() {
    await Promise.all([
      this.loadItem(),
      this.loadCharacter(),
      this.loadBlazeArt(),
      this.loadSkill(),
      this.loadZone(),
      this.loadAbnormalState(),
      this.loadAbnormalStateEffect(),
      this.loadZoneEffect(),
      this.loadEnemy(),
      this.loadWealth(),
      this.loadDegree(),
      this.loadQuest(),
      this.loadFieldName(),
      this.loadAreaDetail(),
      this.loadAreaInfo(),
      this.loadTownInfo(),
      this.loadGateInfo(),
      this.loadDungeonInfo(),
      this.loadFieldItem(),
      this.loadExtraQuest(),

      this.loadGeneric('tips'),
      this.loadGeneric('treasure'),
      this.loadGeneric('chat'),
      this.loadGeneric('adventbattle', 'adventBattle'),

      this.loadAreaModel(),

      this.spawnerDataManager.load(this.locale, this.files),
    ]);
    this.afterLoadCharacter();
    this.afterLoadSKill();
    this.afterLoadItem();
    this.afterLoadEnemy();
    this.processAdvs();
  }

  public async loadGeneric(name: string, key: string = '', value?: unknown) {
    this[key || name] = value ? value : await this.loadJson(name);
  }

  public async loadGeneratedGeneric(name: string, key: string = '', value?: unknown) {
    this[key || name] = value ? value : await this.loadGeneratedJson(name);
  }

  public async loadItem(item?: unknown) {
    this.item = plainToClass(Item, item || await this.loadJson('item'));
    // order
    this.itemsOrderByCategory = Enumerable.from(this.item.m_vList).orderBy((p) => p.CATEG).toArray();
    // data
    this.itemsHasRecipe = this.itemsOrderByCategory.filter((p) => p.RSP.length);
    this.itemsEquipments = this.itemsOrderByCategory.filter((p) => p.EQU_BRD);
    this.itemsWeaponKindCategories = Enumerable.from(this.itemsOrderByCategory)
      .where((p) => !!p.WPN_KIND)
      .groupBy((p) => p.CATEG)
      .select((p) => p.key())
      .toArray();
    this.itemsCategoriesHasRecipe = Enumerable.from(this.itemsHasRecipe)
      .groupBy((p) => p.CATEG)
      .select((p) => p.key())
      .toArray();
    // lookup
    this.itemById = Enumerable.from(this.itemsOrderByCategory)
      .toObject((p) => p.DF, (p) => p) as { [df: string]: ItemMVList };
    this.itemsByCategory = Enumerable.from(this.itemsOrderByCategory)
      .groupBy((p) => p.CATEG)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [c: string]: ItemMVList[] };
    this.itemsByWeaponKind = Enumerable.from(this.itemsOrderByCategory)
      .groupBy((p) => p.WPN_KIND)
      .toObject((p) => p.key(), (p) => p.orderBy((i) => i.CATEG).toArray()) as { [weaponKind: string]: ItemMVList[] };
    this.itemsByGroupDf = Enumerable.from(this.itemsOrderByCategory)
      .groupBy((p) => p.GROUP_DF)
      .toObject((p) => p.key(), (p) => p.orderBy((i) => i.CATEG).toArray()) as { [groupDf: string]: ItemMVList[] };
    this.itemsBySkill = Enumerable.from(this.itemsOrderByCategory)
      .selectMany((item) => item.SPC.map((spc) => spc.SKILL.map((skill) => skill.DF)).flat().map((df) => ({
        item,
        df,
      })))
      .groupBy((p) => p.df)
      .toObject(
        (p) => p.key(),
        (p) => p.groupBy(({ item }) => item.DF).select((i) => i.first().item).toArray(),
      ) as { [id: string]: ItemMVList[] };
    this.itemsByRecipe = Enumerable.from(this.itemsOrderByCategory)
      .selectMany((item) => item.RSP.map((rsp) => ({
        item,
        rsp,
      })))
      .groupBy((p) => p.rsp.DF)
      .toObject((p) => p.key(), (p) => p.select(({ item }) => item).toArray()) as { [id: string]: ItemMVList[] };
    this.itemsByEquipment = Enumerable.from(this.itemsOrderByCategory)
      .groupBy((p) => p.EQU_BRD)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [EQU_BRD: string]: ItemMVList[] };
    this.itemsByCharacterLegendRecipe = Enumerable.from(this.itemsOrderByCategory)
      .selectMany((item) => item.LRCP_CHARA.map((lrcp) => ({
        item,
        lrcp,
      })))
      .groupBy((p) => p.lrcp.DF)
      .toObject((p) => p.key(), (p) => p.select(({ item }) => item).toArray()) as { [df: string]: ItemMVList[] };
  }

  public afterLoadItem() {
    this.itemsByZone = Enumerable.from(this.zone.List)
    .select((zone) => ({
      zone,
      items: this.itemsOrderByCategory.filter((item) =>
        item.SPC
          .map((p) => p.SKILL)
          .flat()
          .map((p) => this.skillById[p.DF])
          .some((p) => p && p.effect === EBattleEffectKind.eZONE_CHANGE && p.effectValue === zone.id)
      ),
    }))
    .where((p) => !!p.items.length)
    .toObject((p) => p.zone.id, (p) => p.items) as { [id: string]: ItemMVList[] };
  }

  public async loadCharacter(chara?: unknown) {
    this.chara = plainToClass(Chara, chara || await this.loadJson('chara'));
    if (!this.showHiddenContent) {
      this.chara.m_vList = this.chara.m_vList.filter((p) => !CharacterMVList.hides.includes(p.DF));
    }

    this.characterById = Enumerable.from(this.chara.m_vList)
      .toObject((p) => p.DF, (p) => p) as { [df: string]: CharacterMVList };
    this.charactersCanBattle = this.chara.m_vList.filter((p) => p.EXC);
    this.characterNpcs = this.chara.m_vList.filter((p) => !p.EXC);
    this.charactersByGroupDf = Enumerable.from(this.chara.m_vList)
      .groupBy((p) => p.GROUP_DF)
      .toObject((p) => p.key(), (p) => p) as { [GROUP_DF: string]: CharacterMVList[] };
  }

  public afterLoadCharacter() {
    this.charactersBySkill = Enumerable.from(this.chara.m_vList)
    .selectMany((character) => {
      const normalSkillDfs = character.SKILL.map((skill) => skill.DF);
      const blazeArtSkillDfs = character.BA.map((p) => this.blazeArtById[p.DF]?.LV.map((lv) => lv.SKILL_DF)).filter((p) => p).flat();
      return [...new Set(normalSkillDfs.concat(blazeArtSkillDfs))].map((df) => ({
        character,
        df,
      }));
    })
    .groupBy((p) => p.df)
    .toObject(
      p => p.key(),
      p => p.groupBy(({ character }) => character.DF).select((p) => p.first().character).toArray(),
    ) as { [id: string]: CharacterMVList[] };
  }

  public async loadSkill(skill?: unknown) {
    this.skill = plainToClass(Skill, skill || await this.loadJson('skill'));
    // filtered items
    this.skills = this.skill.m_vList.filter((p) => p.type === 1);
    this.skillEffects = this.skill.m_vList.filter((p) => p.type === 2 && !p.category);
    this.skillAddons = this.skill.m_vList.filter((p) => !!p.category);
    this.skillAddonNames = Enumerable.from(this.skillAddons)
      .groupBy((p) => p.name.split('　')[0])
      .select((p) => p.key())
      .where((p) => !!p)
      .toArray()
    this.skillAddonsEquipmentUseful = this.skillAddons.filter((p) => (
      p.type === 2
      && [EBattleEffectTrigger.eANYTIME, EBattleEffectTrigger.eATTACK_SKILL].includes(p.trigger)
      && p.name.includes('強化')
      && !p.name.includes('【')
      && !p.name.includes('】')
    ));
    // lookup
    this.skillById = Enumerable.from(this.skill.m_vList).toObject((p) => p.id, (p) => p) as { [id: string]: SkillList };
  }

  public afterLoadSKill() {
    const characterBlazeArtSkillDfs = new Set(
      this.chara.m_vList
        .map((character) => character.BA.map((ba) => this.blazeArtById[ba.DF].LV.map((lv) => lv.SKILL_DF)))
        .flat(Infinity)
    );
    this.skillBlazeArts = this.skills.filter((p) => characterBlazeArtSkillDfs.has(p.id));
  }

  public async loadAbnormalState(abnormalState?: unknown) {
    await this.loadGeneric('abnormalstate', 'abnormalState', abnormalState);
    this.abnormalStateById = Enumerable.from(this.abnormalState.m_vList)
      .toObject((p) => p.id, (p) => p) as { [id: string]: AbnormalStateMVList };
    this.abnormalStateTypes = Enumerable.from(this.abnormalState.m_vList)
      .groupBy((p) => p.name.split('(')[0])
      .select((p) => p.key())
      .toArray();
  }

  public async loadAbnormalStateEffect(abnormalStateEffect?: unknown) {
    await this.loadGeneric('abnormalstateeffect', 'abnormalStateEffect', abnormalStateEffect);
    this.abnormalStateEffectById = Enumerable.from(this.abnormalStateEffect.m_vList).toObject((p) => p.id, (p) => p) as { [id: string]: AbnormalStateEffectMVList };
    this.abnormalStateEffectsByTarget = Enumerable.from(this.abnormalStateEffect.m_vList)
      .groupBy((p) => p.trarget)
      .toObject((p) => p.key(), (p) => p.orderBy((p) => p.id).toArray()) as { [target: string]: AbnormalStateEffectMVList[] };
    this.abnormalStateEffectsElements = [EAbnormalStateTarget.eFIRE, EAbnormalStateTarget.eWATER, EAbnormalStateTarget.eEARTH, EAbnormalStateTarget.eWIND, EAbnormalStateTarget.eLIGHT, EAbnormalStateTarget.eDARK].map((p) => this.abnormalStateEffectsByTarget[p] || []).flat();
    this.abnormalStateEffectsAttackStates = [EAbnormalStateTarget.eSATK, EAbnormalStateTarget.eMATK].map((p) => this.abnormalStateEffectsByTarget[p] || []).flat();
    this.abnormalStateEffectsStates = [EAbnormalStateTarget.eHP, EAbnormalStateTarget.eSDEF, EAbnormalStateTarget.eMDEF, EAbnormalStateTarget.eSPD, EAbnormalStateTarget.eDDG, EAbnormalStateTarget.eQTH].map((p) => this.abnormalStateEffectsByTarget[p] || []).flat().concat(this.abnormalStateEffectsAttackStates);
  }

  public async loadZone(zone?: Zone) {
    await this.loadGeneric('zone', '', zone);
    this.zoneNames = Enumerable.from(this.zone.List)
      .groupBy((p) => p.name.split(' ')[0])
      .select((p) => p.key())
      .toArray();
  }

  public async loadZoneEffect(zoneEffect?: unknown) {
    await this.loadGeneric('zoneeffect', 'zoneEffect', zoneEffect);
    this.zoneEffectById = Enumerable.from(this.zoneEffect.List)
      .toObject((p) => p.id, (p) => p) as { [id: string]: ZoneEffectList };
  }

  public async loadEnemy(enemy?: unknown) {
    this.enemy = plainToClass(Enemy, enemy || await this.loadJson('enemy'));
    // data
    this.enemiesHasValidSpec = this.enemy.m_vList.filter((p) => p.sParam.SPEC.HP.R);
    // order
    this.enemiesOrderByCategory = Enumerable.from(this.enemiesHasValidSpec)
      .orderBy((p) => p.eKind)
      .thenBy((p) => p.iCategory)
      .toArray();
    // lookup
    this.enemyById = Enumerable.from(this.enemiesHasValidSpec)
      .toObject((p) => p.DF, (p) => p) as { [df: string]: EnemyMVList };
    this.enemiesBySkill = Enumerable.from(this.enemiesHasValidSpec)
      .selectMany((enemy) => enemy.sParam.SKILL.map((skill) => ({
        enemy,
        df: skill.DF,
      })))
      .groupBy((p) => p.df)
      .toObject(
        (p) => p.key(),
        (p) => p.groupBy(({ enemy }) => enemy.DF).select((p) => p.first().enemy).toArray(),
      ) as { [id: string]: EnemyMVList[] };
    this.enemiesByEKind = Enumerable.from(this.enemiesHasValidSpec)
      .groupBy((p) => p.eKind)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [id: string]: EnemyMVList[] };
    this.enemyKindListById = Enumerable.from(this.enemy.KindList).toObject((p) => p.iKind, (p) => p) as { [id: string]: KindList };
  }

  public afterLoadEnemy() {
    this.enemiesByZone = Enumerable.from(this.zone.List)
    .select((zone) => ({
      zone,
      enemies: this.enemiesOrderByCategory.filter((enemy) =>
        enemy.sParam.SKILL
          .map((p) => this.skillById[p.DF])
          .some((p) => p && p.effect === EBattleEffectKind.eZONE_CHANGE && p.effectValue === zone.id)
      ),
    }))
    .where((p) => !!p.enemies.length)
    .toObject((p) => p.zone.id, (p) => p.enemies) as { [id: string]: EnemyMVList[] };
  }

  public async loadWealth(wealth?: unknown) {
    this.wealth = plainToClass(Wealth, wealth || await this.loadJson('wealth'));
    // order
    this.wealthOrderBySort = Enumerable.from(this.wealth.m_vList)
      .orderBy((p) => p.SORT)
      .toArray();
    // lookup
    this.wealthById = Enumerable.from(this.wealth.m_vList).toObject((p) => p.DF, (p) => p) as { [df: string]: WealthMvList };
  }

  public async loadDegree(degree?: Degree) {
    this.degree = plainToClass(Degree, degree || await this.loadJson('degree'));
    this.degreeById = Enumerable.from(this.degree.List).toObject((p) => p.DF, (p) => p) as { [df: string]: DegreeList };
  }

  public async loadBlazeArt(blazeArt?: unknown) {
    await this.loadGeneric('blaze_arts', 'blazeArt', blazeArt);
    // lookup
    this.blazeArtById = Enumerable.from(this.blazeArt.m_vList)
      .toObject((p) => p.DF, (p) => p) as { [df: string]: BlazeArtMvList };
  }

  public async loadQuest(quest?: unknown) {
    await this.loadGeneric('quest', '', quest);
    // lookup
    this.questById = Enumerable.from(this.quest.m_vList)
      .toObject((p) => p.DF, (p) => p) as { [df: string]: QuestMVList };
    this.questsByCategory = Enumerable.from(this.quest.m_vList)
      .groupBy((p) => p.CATEG)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [CATEG: string]: QuestMVList[] };
    this.questsByRewardItem = Enumerable.from(this.quest.m_vList)
      .selectMany((quest) => quest.RWD_ITEM.map((rwd) => ({
        quest,
        rwd,
      })))
      .groupBy((p) => p.rwd.DF)
      .toObject((p) => p.key(), (p) => p.select(({ quest }) => quest).toArray()) as { [df: string]: QuestMVList[] };
  }

  public async loadFieldName(fieldName?: unknown) {
    await this.loadGeneric('fieldName', '', fieldName);
    this.fieldNameById = Enumerable.from(this.fieldName.List).toObject((p) => p.iAreaNameId) as { [s: string]: FieldNameList };
  }

  public async loadAreaDetail(areaDetail?: unknown) {
    await this.loadGeneric('areaDetail', '', areaDetail);
    this.areaDetailById = Enumerable.from(this.areaDetail.List).toObject((p) => p.iAreaID) as { [s: string]: AreaDetailList };
  }

  public async loadAreaInfo(areaInfo?: unknown) {
    await this.loadGeneric('areaInfo', '', areaInfo);
    this.areaInfoById = Enumerable.from(this.areaInfo.List).toObject((p) => p.iAreaId) as { [s: string]: AreaInfoList };
  }

  public async loadTownInfo(townInfo?: unknown) {
    await this.loadGeneric('townInfo', '', townInfo);
    this.townInfosByAreaId = Enumerable.from(this.townInfo.List)
      .groupBy((p) => p.iAreaId)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [s: string]: TownInfoList[] };
  }

  public async loadGateInfo(gateInfo?: unknown) {
    await this.loadGeneric('gateInfo', '', gateInfo);
    this.gateInfoByAreaId = Enumerable.from(this.gateInfo.List)
      .groupBy((p) => p.iArea)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [s: string]: GateInfoList[] };
  }

  public async loadDungeonInfo(dungeonInfo?: unknown) {
    await this.loadGeneric('dungeonInfo', '', dungeonInfo);
    this.dungeonInfosByAreaId = Enumerable.from(this.dungeonInfo.List)
      .groupBy((p) => p.iAreaId)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [s: string]: DungeonList[] };
  }

  public async loadFieldItem(fieldItem?: unknown) {
    await this.loadGeneric('fieldItem', '', fieldItem);
    this.fieldItemById = Enumerable.from(this.fieldItem.List).toObject((p) => p.iItemId, (p) => p) as { [s: string]: FieldItemList };
  }

  public async loadExtraQuest(extraQuest?: unknown) {
    await this.loadGeneric('extraquest', 'extraQuest', extraQuest);
    this.extraQuestsByQuest = Enumerable.from(this.extraQuest.List)
      .groupBy((p) => p.iQuestDf)
      .toObject((p) => p.key(), (p) => p.toArray()) as { [df: string]: ExtraQuestList[] };
  }

  // other load
  public async loadAreaModel(areaModel?: IAreaModel[]) {
    await this.loadGeneratedGeneric('areaModel', '', areaModel);
    this.areaModelsById = Enumerable.from(this.areaModel)
      .groupBy((p) => p.iAreaID)
      .toObject((p) => p.key(), (p) => p.orderBy((i) => i.iLevel).toArray()) as { [iAreaId: string]: IAreaModel[] };
  }

  public processAdvs() {
    const advFiles = this.locale === 'zh-TW' ? dataManager.files.export.tw.adv : dataManager.files.export.adv;
    const advs = Object.values(advFiles).map((p: string) => p.split('.')[0]) as string[];
    const existingAdvs = dataManager.quest.m_vList.map((p) => p.NPC_FD.map((i) => i.ADV)).flat().filter((p) => p);
    const notExistingAdvs = advs.filter((p) => !existingAdvs.includes(p));
    this.unusedAdvs = Enumerable.from(notExistingAdvs)
      .groupBy((p) => p.split('_')[0] || p)
      .toObject((p) => p.key(), (p) => p.orderBy((p) => p).toArray()) as { [s: string]: string[] };
  }
}

export const dataManager = new DataManager();
