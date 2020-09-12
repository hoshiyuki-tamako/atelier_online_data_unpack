import fs from 'fs-extra';
import { minify as _minify, Options } from 'html-minifier';
import Enumerable from 'linq';
import _ from 'lodash';
import moment from 'moment';
import path from 'path';
import pug from 'pug';

import { eChatTab } from './Enums';
import { ExportFileManager } from './ExportFileManager';
import { LogicHelper } from './LogicHelper';
import { Lookup, LookupChinese } from './Lookup';
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
import { SpawnerData, SpawnerDataManager } from './master/SpawnerData';
import { Tips } from './master/tips';
import { TownInfo } from './master/townInfo';
import { Treasure } from './master/treasure';
import { Wealth } from './master/wealth';
import { Zone } from './master/zone';
import { ZoneEffect } from './master/zoneEffect';
import { Option } from './Option';


function minify(html: string, options: Options) {
  if (process.env.NODE_ENV === 'production') {
    return _minify(html, options);
  }
  return html;
}

export class PageBuilder {

  public static async main () {
    await Promise.all(['tw', 'jp'].map(async region => {
      const lookup = region === 'tw' ? LookupChinese : Lookup;
      const exportFileManager = new ExportFileManager().setRegion(region);
      const spawnerDataManager = new SpawnerDataManager(exportFileManager);
      await Promise.all([
        exportFileManager.preLoadFiles(),
        spawnerDataManager.loadFromCache(),
      ]);

      const that = new this(exportFileManager, spawnerDataManager, lookup);
      await Promise.all([
        region === 'tw' ? that.indexTw() : that.index(),
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
        that.unusedItem(),
        that.area(),
        that.blazeArt(),
        that.calculate(),
        that.other(),
        that.totalRanking(),
      ]);
    }));
  }

  public constructor(
    private exportFileManager: ExportFileManager,
    private spawnerDataManager: SpawnerDataManager,
    private lookup: any
  ) {
  }

  public async indexTw() {
    const pages = [
      {
        href: "item.html",
        title: "物品 / 裝備 / 料理",
        img: {
          src: "../img/icon_s/Texture2D/icon_item_s_10010001.png",
        },
      },
      {
        href: "chara.html",
        title: "角色",
        img: {
          src: "../img/chara/Texture2D/icon_chara_all_0001.png",
        },
      },
      {
        href: "otherChara.html",
        title: "其他角色",
        img: {
          src: "../img/chara/Texture2D/icon_chara_all_20001.png",
        },
      },
      {
        href: "blazeArt.html",
        title: "Blaze Art",
        img: {
          src: "../img/icon_s/Texture2D/icon_item_s_56010003.png",
        },
      },
      {
        href: "enemy.html",
        title: "敵",
        img: {
          src: "../img/enemy/Texture2D/enemy_tex_031_06.png",
        },
      },



      {
        href: "skill.html",
        title: "技能",
        img: {
          src: "../img/icon_skill/Texture2D/icon_skill_00003.png",
        },
      },
      {
        href: "effect.html",
        title: "效果",
        img: {
          src: "../img/fx/Texture2D/FX_Skill2005_02.png",
        },
      },
      {
        href: "abnormalEffect.html",
        title: "異常状態",
        img: {
          src: "../img/fx/Texture2D/FX_smoke.png",
        },
      },
      {
        href: "zone.html",
        title: "Zone",
        img: {
          src: "../img/icon_s/Texture2D/icon_item_s_10500014.png",
        },
      },
      {
        href: "area.html",
        title: "地區",
        img: {
          src: "../img/map/Texture2D/MapArea_04_001_ALL.png",
        },
      },


      {
        href: "wealth.html",
        title: "重要物品",
        img: {
          src: "../img/icon_item01/Texture2D/icon_item01_00001.png",
        },
      },
      {
        href: "degree.html",
        title: "稱號",
        img: {
          src: "../img/icon_degree/Texture2D/icon_degree_0605.png",
        },
      },
      {
        href: "quest.html",
        title: "任務",
        img: {
          src: "../img/other/Texture2D/item_texture_0018.png",
        },
      },
      {
        href: "other.html",
        title: "其他",
        img: {
          src: "../img/icon_s/Texture2D/icon_item_s_10950055.png",
        },
      },

      
      {
        href: "../characterBuilder.html",
        title: "角色建立(日版)",
        img: {
          src: "../img/other/Texture2D/item_texture_0024.png",
        },
      },
      {
        href: "../composeItem.html",
        title: "鍊金/調合物品(日版)",
        img: {
          src: "../img/icon/icon_bowl.png",
        },
      },
    ];

    const pugOption = { _, moment, pages };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'index.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'index.pug'), pugOption), Option.minifyOption),
    );
  }

  public async index() {
    const pages = [
      {
        href: "item.html",
        title: "アイテム / 裝備 / 料理",
        img: {
          src: "img/icon_s/Texture2D/icon_item_s_10010001.png",
        },
      },
      {
        href: "chara.html",
        title: "キャラクター",
        img: {
          src: "img/chara/Texture2D/icon_chara_all_0001.png",
        },
      },
      {
        href: "otherChara.html",
        title: "他のキャラクター",
        img: {
          src: "img/chara/Texture2D/icon_chara_all_20001.png",
        },
      },
      {
        href: "blazeArt.html",
        title: "ブレイズアーツ",
        img: {
          src: "img/icon_s/Texture2D/icon_item_s_56010003.png",
        },
      },
      {
        href: "enemy.html",
        title: "敵",
        img: {
          src: "img/enemy/Texture2D/enemy_tex_031_06.png",
        },
      },



      {
        href: "skill.html",
        title: "スキル",
        img: {
          src: "img/icon_skill/Texture2D/icon_skill_00003.png",
        },
      },
      {
        href: "effect.html",
        title: "効果",
        img: {
          src: "img/fx/Texture2D/FX_Skill2005_02.png",
        },
      },
      {
        href: "abnormalEffect.html",
        title: "異常状態",
        img: {
          src: "img/fx/Texture2D/FX_smoke.png",
        },
      },
      {
        href: "zone.html",
        title: "ゾーン",
        img: {
          src: "img/icon_s/Texture2D/icon_item_s_10500014.png",
        },
      },
      {
        href: "area.html",
        title: "区域",
        img: {
          src: "img/map/Texture2D/MapArea_04_001_ALL.png",
        },
      },





      {
        href: "wealth.html",
        title: "大事なもの",
        img: {
          src: "img/icon_item01/Texture2D/icon_item01_00001.png",
        },
      },
      {
        href: "degree.html",
        title: "称号",
        img: {
          src: "img/icon_degree/Texture2D/icon_degree_0605.png",
        },
      },
      {
        href: "quest.html",
        title: "クェスト",
        img: {
          src: "img/other/Texture2D/item_texture_0018.png",
        },
      },
      {
        href: "calculate.html",
        title: "計算/公式",
        img: {
          src: "img/other/Texture2D/item_texture_0010.png",
        },
      },
      {
        href: "other.html",
        title: "他",
        img: {
          src: "img/icon_s/Texture2D/icon_item_s_10950055.png",
        },
      },

      {
        href: "characterBuilder.html",
        title: "キャラクタービルダー",
        img: {
          src: "img/other/Texture2D/item_texture_0024.png",
        },
      },
      {
        href: "composeItem.html",
        title: "調合アイテム",
        img: {
          src: "img/icon/icon_bowl.png",
        },
      },
      {
        href: "totalRanking.html",
        title: "値ランキング",
        img: {
          src: "img/other/Texture2D/item_texture_0025.png",
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

    const pugOption = { _, moment, pages };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'index.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'index.pug'), pugOption), Option.minifyOption),
    );
  }

  public async item() {
    const [item, skill, chara, fieldItem, abnormalState, quest] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.skill)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.fieldItem)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.abnormalstate)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.quest)),
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
    const pugOption = { exportFileManager: this.exportFileManager, Lookup: this.lookup, LogicHelper, itemIndex, itemsOrderByCategory, item, skill, chara, fieldItem, abnormalState, quest };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'item.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'item.pug'), pugOption), Option.minifyOption),
    );
  }

  public async chara() {
    const [item, skill, chara, blazeArt, quest, charaIcons] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.skill)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.blazeArt)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.quest)),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'chara', 'Texture2D')),
    ]) as [Item, Skill, Chara, BlazeArt, Quest, string[]];

    const pugOption = { exportFileManager: this.exportFileManager, Lookup: this.lookup, LogicHelper, Enumerable, item, skill, chara, blazeArt, quest, charaIcons: charaIcons.map(p => path.basename(p)) };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'chara.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'chara.pug'), pugOption), Option.minifyOption),
    );
  }

  public async otherChara() {
    const [chara, charaIcons] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'chara', 'Texture2D')),
    ]) as [Chara, string[]];

    chara.m_vList = chara.m_vList.filter(p => ![3005].includes(p.DF));

    const pugOption = { exportFileManager: this.exportFileManager, chara, charaIcons: charaIcons.map(p => path.basename(p)) };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'otherChara.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'otherChara.pug'), pugOption), Option.minifyOption),
    );
  }

  public async skill() {
    const [skill, item, enemy, chara, blazeArt, abnormalState, skillIcons] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.skill)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.blazeArt)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.abnormalstate)),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'icon_skill', 'Texture2D')),
    ]) as [Skill, Item, Enemy, Chara, BlazeArt, AbnormalState, string[]];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const charasOrderByCategory = Enumerable.from(chara.m_vList).orderBy(p => p.CATEG).toArray();

    const pugOption = { exportFileManager: this.exportFileManager, Lookup: this.lookup, Enumerable, skill, item, enemy, chara, blazeArt, abnormalState, itemsOrderByCategory, enemiesOrderByCategory, charasOrderByCategory,
      skillIcons: skillIcons.map(p => path.basename(p)).filter(p => !p.includes('#')) };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'skill.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'skill.pug'), pugOption), Option.minifyOption),
    );
  }

  public async abnormalEffect() {
    const [abnormalState, abnormalStateEffect] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.abnormalstate)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.abnormalstateeffect)),
    ]) as [AbnormalState, AbnormalStateEffect];

    const pugOption = { exportFileManager: this.exportFileManager, abnormalState, abnormalStateEffect };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'abnormalEffect.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'abnormalEffect.pug'), pugOption), Option.minifyOption),
    );
  }

  public async enemy() {
    const [enemy, skill, spawnerData, areaInfo, fieldName, areaDetail] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.skill)),
      this.spawnerDataManager.loadFromCache(),

      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.areaInfo)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.fieldname)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.areaDetail)),
    ]) as [Enemy, Skill, { [k: string]: SpawnerData[] }, AreaInfo, FieldName, AreaDetail];

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

    const pugOption = { exportFileManager: this.exportFileManager, Lookup: this.lookup, LogicHelper, Enumerable, enemy, skill, spawnerData, getAreaIds, areaInfo, fieldName, areaDetail };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'enemy.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'enemy.pug'), pugOption), Option.minifyOption),
    );
  }

  public async degree() {
    const [degree] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.degree)),
    ]) as [Degree];

    const pugOption = { exportFileManager: this.exportFileManager, degree };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'degree.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'degree.pug'), pugOption), Option.minifyOption),
    );
  }

  public async quest() {
    const [quest, item, chara, enemy, wealth, areaInfo, fieldName, degree] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.quest)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.wealth)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.areaInfo)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.fieldname)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.degree)),
    ]) as [Quest, Item, Chara, Enemy, Wealth, AreaInfo, FieldName, Degree];

    const pugOption = { exportFileManager: this.exportFileManager, Lookup: this.lookup, Enumerable, quest, item, chara, enemy, wealth, areaInfo, fieldName, degree };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'quest.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'quest.pug'), pugOption), Option.minifyOption),
    );
  }

  public async wealth() {
    const [wealth, icons] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.wealth)),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'icon_item01', 'Texture2D')),
    ]) as [Wealth, string[]];

    wealth.m_vList.sort((a, b) => a.SORT - b.SORT);
    const wealthIcons = icons
      .map(p => path.basename(p))
      .filter(p => !p.includes("#"))
      .map(p => +p.split('_')[2].split('.')[0]);
    const pugOption = { exportFileManager: this.exportFileManager, wealth, wealthIcons };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'wealth.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'wealth.pug'), pugOption), Option.minifyOption),
    );
  }

  public async zone() {
    const [zone, zoneEffect, item, skill, enemy] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.zone)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.zoneeffect)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.skill)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
    ]) as [Zone, ZoneEffect, Item, Skill, Enemy];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const skillLoopUp = Enumerable.from(skill.m_vList).toObject(p => p.id, p => p);

    const pugOption = { exportFileManager: this.exportFileManager, zone, zoneEffect, item, skill, itemsOrderByCategory, enemiesOrderByCategory, skillLoopUp };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'zone.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'zone.pug'), pugOption), Option.minifyOption),
    );
  }

  public async unusedItem() {
    const [item, itemIcons, models] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'icon_s', 'Texture2D')),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'models', 'unused-weapons')),
    ]) as [Item, string[], string[]];

    const generatedItemIcons = item.m_vList.map(p => `icon_item_s_${p.DF}.png`);
    const pugOption = {
      Option,
      itemIcons: itemIcons
      .map(p => path.basename(p))
      .filter(p => !p.includes("#"))
      .filter(p => !generatedItemIcons.includes(p))
      .map(p => ({
        id: +p.split('_')[3].split('.')[0],
        src: p,
      })),
      models: models.map(p => path.basename(p)),
    };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'unusedItem.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'unusedItem.pug'), pugOption), Option.minifyOption),
    );
  }

  public async area() {
    const [fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, gateInfo, item, enemy, spawnerData, townIcons] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.fieldname)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.areaDetail)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.areaInfo)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.townInfo)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.dungeonInfo)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.gateinfo)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
      this.spawnerDataManager.loadFromCache(),
      fs.readdir(path.join(this.exportFileManager.htmlRoot, 'img', 'Map_Town', 'Texture2D')),
    ]) as [FieldName, AreaDetail, AreaInfo, TownInfo, DungeonInfo, GateInfo, Item, Enemy, { [k: string]: SpawnerData[] }, string[]];
    const pugOption = { exportFileManager: this.exportFileManager, fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, gateInfo, item, enemy, spawnerData,
      townIcons: townIcons.map(p => path.basename(p))
      .filter(p => !p.includes('#') && !p.endsWith('_02.png')) };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'area.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'area.pug'), pugOption), Option.minifyOption),
    );
  }

  public async blazeArt() {
    const [blazeArt, skill, chara] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.blazeArt)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.skill)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
    ]) as [BlazeArt, Skill, Chara];

    const pugOption = { exportFileManager: this.exportFileManager, blazeArt, skill, chara };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'blazeArt.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'blazeArt.pug'), pugOption), Option.minifyOption),
    );
  }

  public async calculate() {
    const pugOption = { Option };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'calculate.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'calculate.pug'), pugOption), Option.minifyOption),
    );
  }

  public async other() {
    const [tips, treasure, chara, adventBattle, enemy, chat] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.tips)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.treasure)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.adventbattle)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chat)),
    ]) as [Tips, Treasure, Chara, AdventBattle, Enemy, Chat];

    const pugOption = { exportFileManager: this.exportFileManager, eChatTab, tips, treasure, chara, adventBattle, enemy, chat };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'other.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'other.pug'), pugOption), Option.minifyOption),
    );
  }

  public async totalRanking() {
    const [item, chara, enemy] = await Promise.all([
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.item)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.chara)),
      this.exportFileManager.loadFileFromCache(this.exportFileManager.getExportFilePath(this.exportFileManager.exportDataFilenameMap.enemy)),
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
      .orderByDescending(p => LogicHelper.calculateState(p.EQU[state], lv))
      .take(100)
      .toArray();
    }
    byItemState.total = Enumerable.from(equipments)
    .orderByDescending(p => itemStates.map(i => LogicHelper.calculateState(p.EQU[i], lv)).reduce((a, b) => a + b, 0))
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
        LogicHelper.calculateState(p.SPEC[state], lv) + (p.FDM[p.FDM.length - 1][state] ? p.FDM[p.FDM.length - 1][state] : 0)
      )
      .take(100)
      .toArray();
    }
    byCharacter.total = Enumerable.from(battleCharacters)
    .orderByDescending(p => 
      characterStates
      .map(i => LogicHelper.calculateState(p.SPEC[i], lv) + (p.FDM[p.FDM.length - 1][i] ? p.FDM[p.FDM.length - 1][i] : 0))
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
      .orderByDescending(p => LogicHelper.calculateState(p.sParam.SPEC[state], enemyLv))
      .take(100)
      .toArray();
    }
    byEnemyState.total = Enumerable.from(enemy.m_vList)
    .orderByDescending(p => 
      enemyStates
      .map(i => LogicHelper.calculateState(p.sParam.SPEC[i], enemyLv))
      .reduce((a, b) => a + b, 0)
    )
    .take(100)
    .toArray();
    enemyStates.unshift('total');

    for (const element of Object.keys(Lookup.element)) {
      byEnemyElement[element] = Enumerable.from(enemy.m_vList)
      .orderByDescending(p => LogicHelper.calculateState(p.sParam.ELM[element], enemyLv))
      .take(100)
      .toArray();
    }
    byEnemyElement.total = Enumerable.from(enemy.m_vList)
    .orderByDescending(p => 
      Object.keys(Lookup.element)
      .map(i => LogicHelper.calculateState(p.sParam.ELM[i], enemyLv))
      .reduce((a, b) => a + b, 0)
    )
    .take(100)
    .toArray();

    // start render
    const pugOption = { exportFileManager: this.exportFileManager, Lookup: this.lookup, LogicHelper, chara, byItemState, byItemElement, byCharacter, byEnemyState, byEnemyElement, itemStates, characterStates, enemyStates };
    await fs.writeFile(
      path.join(this.exportFileManager.outFolder, 'totalRanking.html'),
      minify(pug.renderFile(path.join(this.exportFileManager.viewFolder, 'totalRanking.pug'), pugOption), Option.minifyOption),
    );
  }

}
