import fs from 'fs-extra';
import { minify as _minify } from 'html-minifier';
import Enumerable from 'linq';
import _ from 'lodash';
import * as math from 'mathjs';
import path from 'path';
import pug from 'pug';

import { LogicHelper } from './LogicHelper';
import { AbnormalStateEffect } from './master/abnormalStateEffect';
import { AreaDetail } from './master/areaDetail';
import { AreaInfo } from './master/areaInfo';
import { BlazeArt } from './master/blazeArt';
import { Chara } from './master/chara';
import { Degree } from './master/degree';
import { DungeonInfo } from './master/dungeonInfo';
import { Enemy } from './master/enemy';
import { FieldName } from './master/fieldName';
import { Item } from './master/item';
import { Quest } from './master/quest';
import { Skill } from './master/skill';
import { TownInfo } from './master/townInfo';
import { Zone } from './master/zone';
import { ZoneEffect } from './master/zoneEffect';
import { Option } from './Option';
import { AbnormalState } from './master/abnormalState';
import { Wealth } from './master/wealth';

function minify(r: string, o: any) {
  // return _minify(r, o);
  _minify;
  return r;
}

export class PageBuilder {

  public static async main () {
    await Option.preLoadFiles();

    const that = new this();
    await Promise.all([
      that.index(),
      that.item(),
      that.chara(),
      that.otherChara(),
      that.skill(),
      that.effect(),
      that.enemy(),
      that.degree(),
      that.quest(),
      that.wealth(),
      that.zone(),
      that.unusedItem(),
      that.area(),
    ]);
  }

  public async index() {
    const pages = [
      {
        href: "./item.html",
        title: "アイテム / 裝備 / 料理",
        img: {
          src: "./img/icon_s/Texture2D/icon_item_s_10010001.png",
          alt: "",
        },
      },
      {
        href: "./chara.html",
        title: "キャラクター",
        img: {
          src: "./img/chara/Texture2D/icon_chara_all_0001.png",
          alt: "",
        },
      },
      {
        href: "./otherChara.html",
        title: "他のキャラクター",
        img: {
          src: "./img/chara/Texture2D/icon_chara_all_20001.png",
          alt: "",
        },
      },
      {
        href: "./enemy.html",
        title: "敵",
        img: {
          src: "./img/enemy/Texture2D/enemy_tex_031_06.png",
          alt: "",
        },
      },

      {
        href: "./skill.html",
        title: "Skill / 效果",
        img: {
          src: "./img/fx/Texture2D/FX_Skill2005_02.png",
          alt: "",
        },
      },
      {
        href: "./effect.html",
        title: "異常状態",
        img: {
          src: "./img/fx/Texture2D/FX_smoke.png",
          alt: "",
        },
      },
      {
        href: "./zone.html",
        title: "ゾーン",
        img: {
          src: "./img/icon_s/Texture2D/icon_item_s_10500012.png",
          alt: "",
        },
      },
      {
        href: "./area.html",
        title: "区域",
        img: {
          src: "./img/map/Texture2D/MapArea_04_001_ALL.png",
          alt: "",
        },
      },
      {
        href: "./unusedItem.html",
        title: "未使用アイテム",
        img: {
          src: "./img/icon_s/Texture2D/icon_item_s_20020010.png",
          alt: "",
        },
      },
 
      {
        href: "./wealth.html",
        title: "大事なもの",
        img: {
          src: "./img/icon_item01/Texture2D/icon_item01_00001.png",
          alt: "",
        },
      },
      {
        href: "./degree.html",
        title: "称号",
        img: {
          src: "./img/other/Texture2D/item_texture_0025.png",
          alt: "",
        },
      },
      {
        href: "./quest.html",
        title: "クェスト",
        img: {
          src: "./img/other/Texture2D/item_texture_0018.png",
          alt: "",
        },
      },
    ];

    await fs.writeFile(
      path.join(Option.outFolder, 'index.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'index.pug'), { _, pages }), Option.minifyOption),
    );
  }

  public async item() {
    const [item, skill] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.skill),
    ]) as [Item, Skill];

    const itemIndex = Enumerable.from(item.m_vList)
      .groupBy(p => p.CATEG)
      .orderBy(p => p.key())
      .select(p => ({
        CATEG: p.key(),
        items: p.toArray(),
      }))
      .toArray();
    const itemsOrderByCategory = item.m_vList.sort((a, b) => a.CATEG - b.CATEG);
    const pugOption = { Option, LogicHelper, itemIndex, itemsOrderByCategory, item, skill };
    await fs.writeFile(
      path.join(Option.outFolder, 'item.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'item.pug'), pugOption), Option.minifyOption),
    );
  }

  public async chara() {
    const [item, skill, chara, blazeArt, quest, charaIcons] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.blazeArt),
      Option.loadFileFromCache(Option.exportDataPaths.quest),
      fs.readdir(path.join(Option.outFolder, 'img', 'chara', 'Texture2D')),
    ]) as [Item, Skill, Chara, BlazeArt, Quest, string[]];

    const pugOption = { Option, LogicHelper, Enumerable, item, skill, chara, blazeArt, quest, charaIcons: charaIcons.map(p => path.basename(p)) };
    await fs.writeFile(
      path.join(Option.outFolder, 'chara.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'chara.pug'), pugOption), Option.minifyOption),
    );
  }

  public async otherChara() {
    const [chara, charaIcons] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      fs.readdir(path.join(Option.outFolder, 'img', 'chara', 'Texture2D')),
    ]) as [Chara, string[]];

    const pugOption = { chara, charaIcons: charaIcons.map(p => path.basename(p)) };
    await fs.writeFile(
      path.join(Option.outFolder, 'otherChara.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'otherChara.pug'), pugOption), Option.minifyOption),
    );
  }

  public async skill() {
    const [skill, item, enemy, chara, blazeArt] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.blazeArt),
    ]) as [Skill, Item, Enemy, Chara, BlazeArt];

    const itemsOrderByCategory = Enumerable.from(item.m_vList)
    .orderBy(p => p.CATEG)
    .toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList)
    .orderBy(p => p.eKind)
    .thenBy(p => p.iCategory)
    .toArray();
    const charasOrderByCategory = Enumerable.from(chara.m_vList)
    .orderBy(p => p.CATEG)
    .toArray();

    const pugOption = { Enumerable, skill, item, enemy, chara, blazeArt, itemsOrderByCategory, enemiesOrderByCategory, charasOrderByCategory };
    await fs.writeFile(
      path.join(Option.outFolder, 'skill.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'skill.pug'), pugOption), Option.minifyOption),
    );
  }

  public async effect() {
    const [abnormalState, abnormalstateeffect] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.abnormalstate),
      Option.loadFileFromCache(Option.exportDataPaths.abnormalstateeffect),
    ]) as [AbnormalState, AbnormalStateEffect];

    const pugOption = { abnormalState, abnormalstateeffect };
    await fs.writeFile(
      path.join(Option.outFolder, 'effect.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'effect.pug'), pugOption), Option.minifyOption),
    );
  }

  public async enemy() {
    const [enemy, skill] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
      Option.loadFileFromCache(Option.exportDataPaths.skill),
    ]) as [Enemy, Skill];

    const pugOption = { Option, LogicHelper, Enumerable, math, enemy, skill };
    await fs.writeFile(
      path.join(Option.outFolder, 'enemy.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'enemy.pug'), pugOption), Option.minifyOption),
    );
  }

  public async degree() {
    const [degree] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.degree),
    ]) as [Degree];

    const pugOption = { degree };
    await fs.writeFile(
      path.join(Option.outFolder, 'degree.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'degree.pug'), pugOption), Option.minifyOption),
    );
  }

  public async quest() {
    const [quest, item, chara, enemy, wealth] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.quest),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
      Option.loadFileFromCache(Option.exportDataPaths.wealth),
    ]) as [Quest, Item, Chara, Enemy, Wealth];

    const pugOption = { Option, Enumerable, quest, item, chara, enemy, wealth };
    await fs.writeFile(
      path.join(Option.outFolder, 'quest.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'quest.pug'), pugOption), Option.minifyOption),
    );
  }

  public async wealth() {
    const [wealth, icons] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.wealth),
      fs.readdir(path.join(Option.outFolder, 'img', 'icon_item01', 'Texture2D')),
    ]) as [Wealth, string[]];

    const wealthIcons = icons
      .map(p => path.basename(p))
      .filter(p => !p.includes("#"))
      .map(p => +p.split('_')[2].split('.')[0]);
    const pugOption = { wealth, wealthIcons };
    await fs.writeFile(
      path.join(Option.outFolder, 'wealth.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'wealth.pug'), pugOption), Option.minifyOption),
    );
  }

  public async zone() {
    const [zone, zoneEffect] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.zone),
      Option.loadFileFromCache(Option.exportDataPaths.zoneeffect),
    ]) as [Zone, ZoneEffect];

    const pugOption = { zone, zoneEffect };
    await fs.writeFile(
      path.join(Option.outFolder, 'zone.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'zone.pug'), pugOption), Option.minifyOption),
    );
  }

  public async unusedItem() {
    const [item, itemIcons] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.item),
      fs.readdir(path.join(Option.outFolder, 'img', 'icon_s', 'Texture2D')),
    ]) as [Item, string[]];

    const generatedItemIcons = item.m_vList.map(p => `icon_item_s_${p.DF}.png`);
    const pugOption = {
      itemIcons: itemIcons
      .map(p => path.basename(p))
      .filter(p => !p.includes("#"))
      .filter(p => !generatedItemIcons.includes(p))
      .map(p => ({
        id: +p.split('_')[3].split('.')[0],
        src: p,
      })),
    };
    await fs.writeFile(
      path.join(Option.outFolder, 'unusedItem.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'unusedItem.pug'), pugOption), Option.minifyOption),
    );
  }

  public async area() {
    const [fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, item, enemy] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.fieldname),
      Option.loadFileFromCache(Option.exportDataPaths.areaDetail),
      Option.loadFileFromCache(Option.exportDataPaths.areaInfo),
      Option.loadFileFromCache(Option.exportDataPaths.townInfo),
      Option.loadFileFromCache(Option.exportDataPaths.dungeonInfo),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
    ]) as [FieldName, AreaDetail, AreaInfo, TownInfo, DungeonInfo, Item, Enemy];

    const pugOption = { fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, item, enemy };
    await fs.writeFile(
      path.join(Option.outFolder, 'area.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'area.pug'), pugOption), Option.minifyOption),
    );
  }

}
