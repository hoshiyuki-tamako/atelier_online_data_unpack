import fs from 'fs-extra';
import { minify as _minify, Options } from 'html-minifier';
import Enumerable from 'linq';
import _ from 'lodash';
import * as math from 'mathjs';
import path from 'path';
import pug from 'pug';

import { LogicHelper } from './LogicHelper';
import { AbnormalState } from './master/abnormalState';
import { AbnormalStateEffect } from './master/abnormalStateEffect';
import { AdventBattle } from './master/adventBattle';
import { AreaDetail } from './master/areaDetail';
import { AreaInfo } from './master/areaInfo';
import { BlazeArt } from './master/blazeArt';
import { Chara } from './master/chara';
import { Degree } from './master/degree';
import { DungeonInfo } from './master/dungeonInfo';
import { Enemy } from './master/enemy';
import { FieldName } from './master/fieldName';
import { GateInfo } from './master/gateInfo';
import { Item } from './master/item';
import { Quest } from './master/quest';
import { Skill } from './master/skill';
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
    // await Option.preLoadFiles();

    const that = new this();
    await Promise.all([
      that.index(),
      // that.item(),
      // that.chara(),
      // that.otherChara(),
      // that.skill(),
      // that.effect(),
      // that.abnormalEffect(),
      // that.enemy(),
      // that.degree(),
      // that.quest(),
      // that.wealth(),
      // that.zone(),
      // that.unusedItem(),
      // that.area(),
      // that.blazeArt(),
      // that.calculate(),
      // that.other(),
      // that.memo(),
      // that.equipmentRank(),
    ]);
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
      // {
      //   href: "equipmentRank.html",
      //   title: "裝備ランク TODO",
      //   img: {
      //     src: "img/other/Texture2D/item_texture_0025.png",
      //   },
      // },
      {
        href: "unusedItem.html",
        title: "未使用アイテム",
        img: {
          src: "img/icon_s/Texture2D/icon_item_s_20020010.png",
        },
      },
      {
        href: "memo.html",
        title: "Memo",
        img: {
          src: "img/icon_s/Texture2D/icon_item_s_10950054.png",
        },
      },
    ];

    const pugOption = { _, pages };
    await fs.writeFile(
      path.join(Option.outFolder, 'index.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'index.pug'), pugOption), Option.minifyOption),
    );
  }

  public async item() {
    const [item, skill, chara] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
    ]) as [Item, Skill, Chara];

    const itemIndex = Enumerable.from(item.m_vList)
      .groupBy(p => p.CATEG)
      .orderBy(p => p.key())
      .select(p => ({
        CATEG: p.key(),
        items: p.toArray(),
      }))
      .toArray();
    const itemsOrderByCategory = item.m_vList.sort((a, b) => a.CATEG - b.CATEG);
    const pugOption = { Option, LogicHelper, itemIndex, itemsOrderByCategory, item, skill, chara };
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
    const [skill, item, enemy, chara, blazeArt, skillIcons] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.blazeArt),
      fs.readdir(path.join(Option.outFolder, 'img', 'icon_skill', 'Texture2D')),
    ]) as [Skill, Item, Enemy, Chara, BlazeArt, string[]];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const charasOrderByCategory = Enumerable.from(chara.m_vList).orderBy(p => p.CATEG).toArray();

    const pugOption = { Enumerable, skill, item, enemy, chara, blazeArt, itemsOrderByCategory, enemiesOrderByCategory, charasOrderByCategory,
      skillIcons: skillIcons.map(p => path.basename(p)).filter(p => !p.includes('#')) };
    await fs.writeFile(
      path.join(Option.outFolder, 'skill.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'skill.pug'), pugOption), Option.minifyOption),
    );
  }

  public async effect() {
    const [skill, item, enemy, chara, blazeArt, skillIcons] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.blazeArt),
      fs.readdir(path.join(Option.outFolder, 'img', 'icon_skill', 'Texture2D')),
    ]) as [Skill, Item, Enemy, Chara, BlazeArt, string[]];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const charasOrderByCategory = Enumerable.from(chara.m_vList).orderBy(p => p.CATEG).toArray();

    const pugOption = { Enumerable, skill, item, enemy, chara, blazeArt, itemsOrderByCategory, enemiesOrderByCategory, charasOrderByCategory,
      skillIcons: skillIcons.map(p => path.basename(p)).filter(p => !p.includes('#')) };
    await fs.writeFile(
      path.join(Option.outFolder, 'effect.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'effect.pug'), pugOption), Option.minifyOption),
    );
  }

  public async abnormalEffect() {
    const [abnormalState, abnormalStateEffect] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.abnormalstate),
      Option.loadFileFromCache(Option.exportDataPaths.abnormalstateeffect),
    ]) as [AbnormalState, AbnormalStateEffect];

    const pugOption = { abnormalState, abnormalStateEffect };
    await fs.writeFile(
      path.join(Option.outFolder, 'abnormalEffect.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'abnormalEffect.pug'), pugOption), Option.minifyOption),
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
    const [quest, item, chara, enemy, wealth, areaInfo, fieldName] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.quest),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
      Option.loadFileFromCache(Option.exportDataPaths.wealth),
      Option.loadFileFromCache(Option.exportDataPaths.areaInfo),
      Option.loadFileFromCache(Option.exportDataPaths.fieldname),
    ]) as [Quest, Item, Chara, Enemy, Wealth, AreaInfo, FieldName];

    const pugOption = { Option, Enumerable, quest, item, chara, enemy, wealth, areaInfo, fieldName };
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
    const [zone, zoneEffect, item, skill, enemy] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.zone),
      Option.loadFileFromCache(Option.exportDataPaths.zoneeffect),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
    ]) as [Zone, ZoneEffect, Item, Skill, Enemy];

    const itemsOrderByCategory = Enumerable.from(item.m_vList).orderBy(p => p.CATEG).toArray();
    const enemiesOrderByCategory = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();
    const skillLoopUp = Enumerable.from(skill.m_vList).toObject(p => p.id, p => p);

    const pugOption = { zone, zoneEffect, item, skill, itemsOrderByCategory, enemiesOrderByCategory, skillLoopUp };
    await fs.writeFile(
      path.join(Option.outFolder, 'zone.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'zone.pug'), pugOption), Option.minifyOption),
    );
  }

  public async unusedItem() {
    const [item, itemIcons, models] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.item),
      fs.readdir(path.join(Option.outFolder, 'img', 'icon_s', 'Texture2D')),
      fs.readdir(path.join(Option.outFolder, 'models', 'unused-weapons')),
    ]) as [Item, string[], string[]];

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
      models: models.map(p => path.basename(p)),
    };
    await fs.writeFile(
      path.join(Option.outFolder, 'unusedItem.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'unusedItem.pug'), pugOption), Option.minifyOption),
    );
  }

  public async area() {
    const [fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, gateInfo, item, enemy] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.fieldname),
      Option.loadFileFromCache(Option.exportDataPaths.areaDetail),
      Option.loadFileFromCache(Option.exportDataPaths.areaInfo),
      Option.loadFileFromCache(Option.exportDataPaths.townInfo),
      Option.loadFileFromCache(Option.exportDataPaths.dungeonInfo),
      Option.loadFileFromCache(Option.exportDataPaths.gateinfo),
      Option.loadFileFromCache(Option.exportDataPaths.item),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
    ]) as [FieldName, AreaDetail, AreaInfo, TownInfo, DungeonInfo, GateInfo, Item, Enemy];

    const pugOption = { fieldName, areaDetail, areaInfo, townInfo, dungeonInfo, gateInfo, item, enemy };
  await fs.writeFile(
      path.join(Option.outFolder, 'area.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'area.pug'), pugOption), Option.minifyOption),
    );
  }

  public async blazeArt() {
    const [blazeArt, skill, chara] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.blazeArt),
      Option.loadFileFromCache(Option.exportDataPaths.skill),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
    ]) as [BlazeArt, Skill, Chara];

    const pugOption = { blazeArt, skill, chara };
    await fs.writeFile(
      path.join(Option.outFolder, 'blazeArt.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'blazeArt.pug'), pugOption), Option.minifyOption),
    );
  }

  public async calculate() {
    const pugOption = {};
    await fs.writeFile(
      path.join(Option.outFolder, 'calculate.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'calculate.pug'), pugOption), Option.minifyOption),
    );
  }

  public async other() {
    const [tips, treasure, chara, adventBattle, enemy] = await Promise.all([
      Option.loadFileFromCache(Option.exportDataPaths.tips),
      Option.loadFileFromCache(Option.exportDataPaths.treasure),
      Option.loadFileFromCache(Option.exportDataPaths.chara),
      Option.loadFileFromCache(Option.exportDataPaths.adventbattle),
      Option.loadFileFromCache(Option.exportDataPaths.enemy),
    ]) as [Tips, Treasure, Chara, AdventBattle, Enemy];

    const pugOption = { tips, treasure, chara, adventBattle, enemy };
    await fs.writeFile(
      path.join(Option.outFolder, 'other.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'other.pug'), pugOption), Option.minifyOption),
    );
  }

  public async memo() {
    const pugOption = { Option };
    await fs.writeFile(
      path.join(Option.outFolder, 'memo.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'memo.pug'), pugOption), Option.minifyOption),
    );
  }

  public async equipmentRank() {
    const pugOption = {};
    await fs.writeFile(
      path.join(Option.outFolder, 'equipmentRank.html'),
      minify(pug.renderFile(path.join(Option.viewFolder, 'equipmentRank.pug'), pugOption), Option.minifyOption),
    );
  }

}
