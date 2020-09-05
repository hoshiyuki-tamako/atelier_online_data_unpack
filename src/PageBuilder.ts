import fs from 'fs-extra';
import Enumerable from 'linq';
import path from 'path';
import pug from 'pug';

import { LogicHelper } from './LogicHelper';
import { AbnormalEffect } from './master/abnormalEffect';
import { BlazeArt } from './master/blaze_art';
import { Chara } from './master/chara';
import { Degree } from './master/degree';
import { Enemy } from './master/enemy';
import { Item } from './master/item';
import { Quest } from './master/quest';
import { Skill } from './master/skill';
import { Option } from './Option';

export class PageBuilder {

  public static async main () {
    const that = new this();
    await Promise.all([
      that.index(),
      that.item(),
      that.chara(),
      that.skill(),
      that.effect(),
      that.enemy(),
      that.degree(),
      that.quest(),
    ]);
  }

  public async index() {
    await fs.writeFile(
      path.join(Option.outFolder, 'index.html'),
      pug.renderFile(path.join(Option.viewFolder, 'index.pug')),
    );
  }

  public async item() {
    const [item, skill] = await Promise.all([
      Option.loadFileFromCache(Option.itemPath),
      Option.loadFileFromCache(Option.skillPath),
    ]) as [Item, Skill];

    const itemIndex = Enumerable.from(item.m_vList)
      .groupBy(p => p.CATEG)
      .orderBy(p => p.key())
      .select(p => ({
        CATEG: p.key(),
        items: p.toArray(),
      }))
      .toArray();

    await fs.writeFile(
      path.join(Option.outFolder, 'item.html'),
      pug.renderFile(path.join(Option.viewFolder, 'item.pug'), { Option, LogicHelper, itemIndex, item, skill}),
    );
  }

  public async chara() {
    const [item, skill, chara, blazeArt, quest, charaIcons] = await Promise.all([
      Option.loadFileFromCache(Option.itemPath),
      Option.loadFileFromCache(Option.skillPath),
      Option.loadFileFromCache(Option.charaPath),
      Option.loadFileFromCache(Option.blazeArtPath),
      Option.loadFileFromCache(Option.questPath),
      fs.readdir(path.join(Option.outFolder, 'img', 'chara', 'Texture2D')),
    ]) as [Item, Skill, Chara, BlazeArt, Quest, string[]];

    await fs.writeFile(
      path.join(Option.outFolder, 'chara.html'),
      pug.renderFile(path.join(Option.viewFolder, 'chara.pug'), { Option, LogicHelper, Enumerable, item, skill, chara, blazeArt, quest, charaIcons: charaIcons.map(p => path.basename(p)) }),
    );
  }

  public async skill() {
    const [skill] = await Promise.all([
      Option.loadFileFromCache(Option.skillPath),
    ]) as [Skill];

    await fs.writeFile(
      path.join(Option.outFolder, 'skill.html'),
      pug.renderFile(path.join(Option.viewFolder, 'skill.pug'), { skill }),
    );
  }

  public async effect() {
    const [effect] = await Promise.all([
      Option.loadFileFromCache(Option.abnomalstateeffectPath),
    ]) as [AbnormalEffect];

    await fs.writeFile(
      path.join(Option.outFolder, 'effect.html'),
      pug.renderFile(path.join(Option.viewFolder, 'effect.pug'), { effect }),
    );
  }

  public async enemy() {
    const [enemy, skill] = await Promise.all([
      Option.loadFileFromCache(Option.enemyPath),
      Option.loadFileFromCache(Option.skillPath),
    ]) as [Enemy, Skill];

    await fs.writeFile(
      path.join(Option.outFolder, 'enemy.html'),
      pug.renderFile(path.join(Option.viewFolder, 'enemy.pug'), { Option, LogicHelper, Enumerable, enemy, skill }),
    );
  }

  public async degree() {
    const [degree] = await Promise.all([
      Option.loadFileFromCache(Option.degreePath),
    ]) as [Degree];

    await fs.writeFile(
      path.join(Option.outFolder, 'degree.html'),
      pug.renderFile(path.join(Option.viewFolder, 'degree.pug'), { degree }),
    );
  }

  public async quest() {
    const [quest, item] = await Promise.all([
      Option.loadFileFromCache(Option.questPath),
      Option.loadFileFromCache(Option.itemPath),
    ]) as [Quest, Item];

    await fs.writeFile(
      path.join(Option.outFolder, 'quest.html'),
      pug.renderFile(path.join(Option.viewFolder, 'quest.pug'), { quest, item }),
    );
  }

}
