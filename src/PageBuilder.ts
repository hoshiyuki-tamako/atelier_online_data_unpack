import fs from 'fs-extra';
import Enumerable from 'linq';
import _ from 'lodash';
import moment from 'moment';
import path from 'path';
import pug from 'pug';
import { Worker } from 'worker_threads';

import { eChatTab } from './data/Enums';
import { Lookup, LookupChinese } from './data/Lookup';
import { AbnormalState } from './master/abnormalState';
import { AbnormalStateEffect } from './master/abnormalStateEffect';
import { AdventBattle } from './master/adventBattle';
import { AreaDetail } from './master/areaDetail';
import { AreaInfo } from './master/areaInfo';
import { BlazeArt } from './master/blazeArt';
import { Chara, MVList as CharaMVList } from './master/chara';
import { Chat } from './master/chat';
import { Degree } from './master/degree';
import { DungeonInfo } from './master/dungeonInfo';
import { Enemy, MVList as EnemyMVList } from './master/enemy';
import { FieldItem } from './master/fieldItem';
import { FieldName } from './master/fieldName';
import { GateInfo } from './master/gateInfo';
import { Item, MVList as ItemMVList } from './master/item';
import { Quest } from './master/quest';
import { Skill } from './master/skill';
import { SpawnerData } from './master/SpawnerData';
import { Tips } from './master/tips';
import { TownInfo } from './master/townInfo';
import { Treasure } from './master/treasure';
import { Wealth } from './master/wealth';
import { Zone } from './master/zone';
import { ZoneEffect } from './master/zoneEffect';
import { Option } from './Option';
import { ExportService } from './services/ExportService';
import { I18nService } from './services/I18nService';
import { LogicService } from './services/LogicService';

export class PageBuilder {

  public static async main () {
    await Promise.all(['zh-TW', 'ja-JP'].map(async locale => {
      const that = new this(
        new I18nService().setLocale(locale),
        await new ExportService().setLocale(locale).preLoadFiles(),
        locale === 'zh-TW' ? LookupChinese : Lookup,
        new LogicService(),
      );
      await Promise.all([
        that.index(),
        that.item(),
        that.chara(),
        that.otherChara(),
        that.skill(),
        that.abnormalEffect(),
        that.enemy(),
        that.degree(),
        that.quest(),
        that.wealth(),
        that.zone(),
        that.area(),
        that.blazeArt(),
        that.calculate(),
        that.other(),
        that.totalRanking(),
        // that.unusedItem(),
      ]);
    }));
  }

  public constructor(
    private i18nService: I18nService,
    private exportService: ExportService,
    private lookup: Lookup | LookupChinese,
    private logicService: LogicService,
  ) {
  }

  // helper
  async minify(html: string, options = Option.minifyOption) {
    if (process.env.NODE_ENV === 'production') {
      return new Promise((resolve, reject) => {
        const worker = new Worker('./src/worker.js', {
          workerData: {
            html,
            options,
          },
        });
        worker.on('message', result => resolve(result));
        worker.on('error', error => reject(error));
      });
    }
    return html;
  }

  // pages
  public async index() {
    const pages = [
      {
        href: "item.html",
        title: "アイテム / 裝備 / 料理",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_s/Texture2D/icon_item_s_10010001.png",
        },
      },
      {
        href: "chara.html",
        title: "キャラクター",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/chara/Texture2D/icon_chara_all_0001.png",
        },
      },
      {
        href: "otherChara.html",
        title: "他のキャラクター",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/chara/Texture2D/icon_chara_all_20001.png",
        },
      },
      {
        href: "blazeArt.html",
        title: "ブレイズアーツ",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_s/Texture2D/icon_item_s_56010003.png",
        },
      },
      {
        href: "enemy.html",
        title: "敵",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/enemy/Texture2D/enemy_tex_031_06.png",
        },
      },



      {
        href: "skill.html",
        title: "スキル",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_skill/Texture2D/icon_skill_00003.png",
        },
      },
      {
        href: "effect.html",
        title: "効果",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/fx/Texture2D/FX_Skill2005_02.png",
        },
      },
      {
        href: "abnormalEffect.html",
        title: "異常状態",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/fx/Texture2D/FX_smoke.png",
        },
      },
      {
        href: "zone.html",
        title: "ゾーン",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_s/Texture2D/icon_item_s_10500014.png",
        },
      },
      {
        href: "area.html",
        title: "区域",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/map/Texture2D/MapArea_04_001_ALL.png",
        },
      },





      {
        href: "wealth.html",
        title: "大事なもの",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_item01/Texture2D/icon_item01_00001.png",
        },
      },
      {
        href: "degree.html",
        title: "称号",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_degree/Texture2D/icon_degree_0605.png",
        },
      },
      {
        href: "quest.html",
        title: "クェスト",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/other/Texture2D/item_texture_0018.png",
        },
      },
      {
        href: "calculate.html",
        title: this.i18nService.i18n.getLocale() === 'zh-TW' ? "計算/公式(日版)" : "計算/公式",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/other/Texture2D/item_texture_0010.png",
        },
      },
      {
        href: "other.html",
        title: "他",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon_s/Texture2D/icon_item_s_10950055.png",
        },
      },

      {
        href: `${this.exportService.rootFolderRelativePath}characterBuilder.html?locale=${this.i18nService.i18n.getLocale()}`,
        title: "キャラクタービルダー",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/other/Texture2D/item_texture_0024.png",
        },
      },
      {
        href: `${this.exportService.rootFolderRelativePath}composeItem.html?locale=${this.i18nService.i18n.getLocale()}`,
        title: "調合アイテム",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/icon/icon_bowl.png",
        },
      },
      {
        href: "totalRanking.html",
        title: "値ランキング",
        img: {
          src: this.exportService.rootFolderRelativePath + "img/other/Texture2D/item_texture_0025.png",
        },
      },
      // {
      //   href: "unusedItem.html",
      //   title: "未使用アイテム",
      //   img: {
      //     src: "img/icon_s/Texture2D/icon_item_s_20020010.png",
      //   },
      // },
    ];
    const pageChunks = _.chunk(pages, 5);
    const updateDate = moment().utc().format('YYYY-MM-DD');
    const pugOption = { that: this, pageChunks, updateDate };
    await fs.writeFile(
      this.exportService.getExportViewOutFilePath('index.html'),
      await this.minify(pug.renderFile(this.exportService.getExportViewPath('index.pug'), pugOption)),
    );
  }

  public async item() {
    const [item, skill, chara, fieldItem, abnormalState, quest] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.skill),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.fieldItem),
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstate),
      this.exportService.data(this.exportService.exportDataFilenameMap.quest),
    ]) as [Item, Skill, Chara, FieldItem, AbnormalState, Quest];

    const itemIndex = Enumerable.from(item.m_vList)
      .groupBy(p => p.CATEG)
      .orderBy(p => p.key())
      .select(p => ({
        CATEG: p.key(),
        items: p.toArray(),
      }))
      .toArray();
    const itemsOrderByCategory = item.m_vList.sort((a, b) => a.CATEG - b.CATEG);
    const pugOption = { that: this, itemIndex, itemsOrderByCategory, item, skill, chara, fieldItem, abnormalState, quest };
    await fs.writeFile(
      this.exportService.getExportViewOutFilePath('item.html'),
      await this.minify(pug.renderFile(this.exportService.getExportViewPath('item.pug'), pugOption)),
    );
  }

  public async chara() {
    const [item, skill, chara, blazeArt, quest, abnormalState, charaIcons] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.skill),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.blazeArt),
      this.exportService.data(this.exportService.exportDataFilenameMap.quest),
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstate),
      fs.readdir(path.join(this.exportService.htmlRoot, 'img', 'chara', 'Texture2D')),
    ]) as [Item, Skill, Chara, BlazeArt, Quest, AbnormalState, string[]];

    const pugOption = { that: this, Enumerable, item, skill, chara, blazeArt, quest, abnormalState, charaIcons: charaIcons.map(p => path.basename(p)) };
    await fs.writeFile(
      this.exportService.getExportViewOutFilePath('chara.html'),
      await this.minify(pug.renderFile(this.exportService.getExportViewPath('chara.pug'), pugOption)),
    );
  }

  public async otherChara() {
    const [chara, charaIcons] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      fs.readdir(path.join(this.exportService.htmlRoot, 'img', 'chara', 'Texture2D')),
    ]) as [Chara, string[]];

    chara.m_vList = chara.m_vList.filter(p => ![3005].includes(p.DF));

    const pugOption = { that: this, chara, charaIcons: charaIcons.map(p => path.basename(p)) };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'otherChara.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'otherChara.pug'), pugOption)),
    );
  }

  public async skill() {
    const [skill, item, enemy, chara, blazeArt, abnormalState, skillIcons] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.skill),
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.blazeArt),
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstate),
      fs.readdir(path.join(this.exportService.htmlRoot, 'img', 'icon_skill', 'Texture2D')),
    ]) as [Skill, Item, Enemy, Chara, BlazeArt, AbnormalState, string[]];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const charasOrderByCategory = Enumerable.from(chara.m_vList).orderBy(p => p.CATEG).toArray();

    const pugOption = { that: this, Enumerable, skill, item, enemy, chara, blazeArt, abnormalState, itemsOrderByCategory, enemiesOrderByCategory, charasOrderByCategory,
      skillIcons: skillIcons.map(p => path.basename(p)).filter(p => !p.includes('#')) };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'skill.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'skill.pug'), pugOption)),
    );
  }

  public async abnormalEffect() {
    const [abnormalState, abnormalStateEffect] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstate),
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstateeffect),
    ]) as [AbnormalState, AbnormalStateEffect];

    const pugOption = { that: this, abnormalState, abnormalStateEffect };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'abnormalEffect.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'abnormalEffect.pug'), pugOption)),
    );
  }

  public async enemy() {
    const [enemy, skill, spawnerData, areaInfo, fieldName, areaDetail, abnormalState] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
      this.exportService.data(this.exportService.exportDataFilenameMap.skill),
      this.exportService.spawnerDataManager.loadFromCache(),
      this.exportService.data(this.exportService.exportDataFilenameMap.areaInfo),
      this.exportService.data(this.exportService.exportDataFilenameMap.fieldname),
      this.exportService.data(this.exportService.exportDataFilenameMap.areaDetail),
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstate),
    ]) as [Enemy, Skill, { [k: string]: SpawnerData[] }, AreaInfo, FieldName, AreaDetail, AbnormalState];

    const getAreaIds = (enemy: EnemyMVList) => {
      const spawnerDataAreaIds = Object.entries(spawnerData).map(p => ({
          key: path.basename(p[0]),
          spawners: p[1].filter(i => i.spawnerKind === 3 && i.DF === enemy.DF),
      }))
      .filter(p => p.spawners.length)
      .map(p => +p.key.split('_')[1]);
      const areaIds = areaDetail.List
      .filter(i => i.iEnemyIDList.includes(enemy.DF))
      .map(p => p.iAreaID)
      .concat(spawnerDataAreaIds);
      return [... new Set(areaIds)];
    };

    const pugOption = { that: this, Enumerable, enemy, skill, spawnerData, getAreaIds, areaInfo, fieldName, areaDetail, abnormalState };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'enemy.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'enemy.pug'), pugOption)),
    );
  }

  public async degree() {
    const [degree] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.degree),
    ]) as [Degree];

    const pugOption = { that: this, degree };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'degree.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'degree.pug'), pugOption)),
    );
  }

  public async quest() {
    const [quest, item, chara, enemy, wealth, areaInfo, fieldName, degree] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.quest),
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
      this.exportService.data(this.exportService.exportDataFilenameMap.wealth),
      this.exportService.data(this.exportService.exportDataFilenameMap.areaInfo),
      this.exportService.data(this.exportService.exportDataFilenameMap.fieldname),
      this.exportService.data(this.exportService.exportDataFilenameMap.degree),
    ]) as [Quest, Item, Chara, Enemy, Wealth, AreaInfo, FieldName, Degree];

    const pugOption = { that: this, Enumerable, quest, item, chara, enemy, wealth, areaInfo, fieldName, degree };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'quest.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'quest.pug'), pugOption)),
    );
  }

  public async wealth() {
    const [wealth, icons] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.wealth),
      fs.readdir(path.join(this.exportService.htmlRoot, 'img', 'icon_item01', 'Texture2D')),
    ]) as [Wealth, string[]];

    wealth.m_vList.sort((a, b) => a.SORT - b.SORT);
    const wealthIcons = icons
      .map(p => path.basename(p))
      .filter(p => !p.includes("#"))
      .map(p => +p.split('_')[2].split('.')[0]);
    const pugOption = { that: this, wealth, wealthIcons };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'wealth.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'wealth.pug'), pugOption)),
    );
  }

  public async zone() {
    const [zone, zoneEffect, item, skill, enemy] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.zone),
      this.exportService.data(this.exportService.exportDataFilenameMap.zoneeffect),
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.skill),
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
    ]) as [Zone, ZoneEffect, Item, Skill, Enemy];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const skillLoopUp = Enumerable.from(skill.m_vList).toObject(p => p.id, p => p);

    const pugOption = { that: this, zone, zoneEffect, item, skill, itemsOrderByCategory, enemiesOrderByCategory, skillLoopUp };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'zone.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'zone.pug'), pugOption)),
    );
  }

  public async area() {
    const [fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, gateInfo, item, enemy, spawnerData, townIcons] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.fieldname),
      this.exportService.data(this.exportService.exportDataFilenameMap.areaDetail),
      this.exportService.data(this.exportService.exportDataFilenameMap.areaInfo),
      this.exportService.data(this.exportService.exportDataFilenameMap.townInfo),
      this.exportService.data(this.exportService.exportDataFilenameMap.dungeonInfo),
      this.exportService.data(this.exportService.exportDataFilenameMap.gateinfo),
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
      this.exportService.spawnerDataManager.loadFromCache(),
      fs.readdir(path.join(this.exportService.htmlRoot, 'img', 'Map_Town', 'Texture2D')),
    ]) as [FieldName, AreaDetail, AreaInfo, TownInfo, DungeonInfo, GateInfo, Item, Enemy, { [k: string]: SpawnerData[] }, string[]];
    const pugOption = { that: this, fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, gateInfo, item, enemy, spawnerData,
      townIcons: townIcons.map(p => path.basename(p))
      .filter(p => !p.includes('#') && !p.endsWith('_02.png')) };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'area.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'area.pug'), pugOption)),
    );
  }

  public async blazeArt() {
    const [blazeArt, skill, chara, abnormalState] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.blazeArt),
      this.exportService.data(this.exportService.exportDataFilenameMap.skill),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.abnormalstate),
    ]) as [BlazeArt, Skill, Chara, AbnormalState];

    const pugOption = { that: this, blazeArt, skill, chara, abnormalState };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'blazeArt.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'blazeArt.pug'), pugOption)),
    );
  }

  public async calculate() {
    const pugOption = { that: this };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'calculate.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'calculate.pug'), pugOption)),
    );
  }

  public async other() {
    const [tips, treasure, chara, adventBattle, enemy, chat] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.tips),
      this.exportService.data(this.exportService.exportDataFilenameMap.treasure),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.adventbattle),
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
      this.exportService.data(this.exportService.exportDataFilenameMap.chat),
    ]) as [Tips, Treasure, Chara, AdventBattle, Enemy, Chat];

    const pugOption = { that: this, eChatTab, tips, treasure, chara, adventBattle, enemy, chat };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'other.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'other.pug'), pugOption)),
    );
  }

  public async totalRanking() {
    const [item, chara, enemy] = await Promise.all([
      this.exportService.data(this.exportService.exportDataFilenameMap.item),
      this.exportService.data(this.exportService.exportDataFilenameMap.chara),
      this.exportService.data(this.exportService.exportDataFilenameMap.enemy),
    ]) as [Item, Chara, Enemy];

    const lv = 80;
    const equipments = item.m_vList.filter(p => p.EQU_BRD);
    const battleCharacters = chara.m_vList.filter(p => p.SKILL.length);

    // process order
    // equipment state
    const byItemState = {} as { [s: string]: ItemMVList[] };
    const itemStates = ['SATK', 'SDEF', 'MATK', 'MDEF', 'SPD'];
    for (const state of itemStates) {
      byItemState[state] = Enumerable.from(equipments)
      .orderByDescending(p => this.logicService.state(p.EQU[state], lv))
      .take(100)
      .toArray();
    }
    byItemState.total = Enumerable.from(equipments)
    .orderByDescending(p => itemStates.map(i => this.logicService.state(p.EQU[i], lv)).reduce((a, b) => a + b, 0))
    .take(100)
    .toArray();
    itemStates.unshift('total');

    // equipment element
    const byItemElement = {} as { [s: string]: ItemMVList[] };
    for (const element of Object.keys(Lookup.element)) {
      byItemElement[element] = Enumerable.from(equipments)
      .orderByDescending(p => p.ELM[element])
      .take(100)
      .toArray();
    }
    byItemElement.total = Enumerable.from(equipments)
    .orderByDescending(p => 
      Object.keys(Lookup.element)
        .map(i => p.ELM[i])
        .reduce((a, b) => a + b, 0)
    )
    .take(100)
    .toArray();

    // character
    const characterStates = ['HP', 'SATK', 'SDEF', 'MATK', 'MDEF', 'SPD'];
    const byCharacter = {} as { [s: string]: CharaMVList[] };
    for (const state of characterStates) {
      byCharacter[state] = Enumerable.from(battleCharacters)
      .orderByDescending(p =>
        this.logicService.state(p.SPEC[state], lv) + (p.FDM[p.FDM.length - 1][state] ? p.FDM[p.FDM.length - 1][state] : 0)
      )
      .take(100)
      .toArray();
    }
    byCharacter.total = Enumerable.from(battleCharacters)
    .orderByDescending(p => 
      characterStates
      .map(i => this.logicService.state(p.SPEC[i], lv) + (p.FDM[p.FDM.length - 1][i] ? p.FDM[p.FDM.length - 1][i] : 0))
      .reduce((a, b) => a + b, 0)
    )
    .take(100)
    .toArray();
    characterStates.unshift('total');

    // enemy
    const enemyLv = 120;
    const enemyStates = ['EXP', 'HP', 'SATK', 'SDEF', 'MATK', 'MDEF', 'SPD'];
    const byEnemyState = {} as { [s: string]: EnemyMVList[] };
    const byEnemyElement = {} as { [s: string]: EnemyMVList[] };

    for (const state of enemyStates) {
      byEnemyState[state] = Enumerable.from(enemy.m_vList)
      .orderByDescending(p => this.logicService.state(p.sParam.SPEC[state], enemyLv))
      .take(100)
      .toArray();
    }
    byEnemyState.total = Enumerable.from(enemy.m_vList)
    .orderByDescending(p => 
      enemyStates
      .map(i => this.logicService.state(p.sParam.SPEC[i], enemyLv))
      .reduce((a, b) => a + b, 0)
    )
    .take(100)
    .toArray();
    enemyStates.unshift('total');

    for (const element of Object.keys(Lookup.element)) {
      byEnemyElement[element] = Enumerable.from(enemy.m_vList)
      .orderByDescending(p => this.logicService.state(p.sParam.ELM[element], enemyLv))
      .take(100)
      .toArray();
    }
    byEnemyElement.total = Enumerable.from(enemy.m_vList)
    .orderByDescending(p => 
      Object.keys(Lookup.element)
      .map(i => this.logicService.state(p.sParam.ELM[i], enemyLv))
      .reduce((a, b) => a + b, 0)
    )
    .take(100)
    .toArray();

    // start render
    const pugOption = { that: this, chara, byItemState, byItemElement, byCharacter, byEnemyState, byEnemyElement, itemStates, characterStates, enemyStates };
    await fs.writeFile(
      path.join(this.exportService.outFolder, 'totalRanking.html'),
      await this.minify(pug.renderFile(path.join(this.exportService.viewFolder, 'totalRanking.pug'), pugOption)),
    );
  }

    // public async unusedItem() {
  //   const [item, itemIcons, models] = await Promise.all([
  //     this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
  //     fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'icon_s', 'Texture2D')),
  //     fs.readdir(path.join(this.exportFileManager.htmlRoot, 'models', 'unused-weapons')),
  //   ]) as [Item, string[], string[]];

  //   const generatedItemIcons = item.m_vList.map(p => `icon_item_s_${p.DF}.png`);
  //   const pugOption = {
  //     Option,
  //     itemIcons: itemIcons
  //     .map(p => path.basename(p))
  //     .filter(p => !p.includes("#"))
  //     .filter(p => !generatedItemIcons.includes(p))
  //     .map(p => ({
  //       id: +p.split('_')[3].split('.')[0],
  //       src: p,
  //     })),
  //     models: models.map(p => path.basename(p)),
  //   };
  //   await fs.writeFile(
  //     path.join(this.exportFileManager.outFolder, 'unusedItem.html'),
  //     await this.minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'unusedItem.pug'), pugOption)),
  //   );
  // }

}
