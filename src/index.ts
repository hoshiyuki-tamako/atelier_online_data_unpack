import fs from 'fs-extra';
import Enumerable from 'linq';

import { AbnormalEffect } from './master/abnormalEffect';
import { BlazeArt } from './master/blaze_art';
import { Chara, SPEC as CSpec } from './master/chara';
import { Degree } from './master/degree';
import { Elm, Enemy, Spec } from './master/enemy';
import { Item } from './master/item';
import { Quest } from './master/quest';
import { Skill } from './master/skill';

function calculateState(g: number, m: number, r: number, b: number, lv = 1) {
    const baseValue = ((m - b)/r);
    return Math.floor(baseValue * lv + b);
}

function entityStatus(SPEC: { [key: string]: Spec } | CSpec, lv = 1) {
    let s = '';
    s += `\r\n--- LV ${lv} ---\r\n`;
    if ('EXP' in SPEC && SPEC.EXP) {
        s += `EXP ${calculateState(SPEC.EXP.G, SPEC.EXP.M, SPEC.EXP.R, SPEC.EXP.B, lv)}\r\n`
    }
    s += `HP ${calculateState(SPEC.HP.G, SPEC.HP.M, SPEC.HP.R, SPEC.HP.B, lv)}\r\n`
    s += `物理攻撃 ${calculateState(SPEC.SATK.G, SPEC.SATK.M, SPEC.SATK.R, SPEC.SATK.B, lv)}\r\n`
    s += `物理防禦 ${calculateState(SPEC.SDEF.G, SPEC.SDEF.M, SPEC.SDEF.R, SPEC.SDEF.B, lv)}\r\n`
    s += `魔法攻撃 ${calculateState(SPEC.MATK.G, SPEC.MATK.M, SPEC.MATK.R, SPEC.MATK.B, lv)}\r\n`
    s += `魔法防禦 ${calculateState(SPEC.MDEF.G, SPEC.MDEF.M, SPEC.MDEF.R, SPEC.MDEF.B, lv)}\r\n`
    s += `速度 ${calculateState(SPEC.SPD.G, SPEC.SPD.M, SPEC.SPD.R, SPEC.SPD.B, lv)}\r\n`

    s += `SDA ${calculateState(SPEC.SDA.G, SPEC.SDA.M, SPEC.SDA.R, SPEC.SDA.B, lv)}\r\n`
    s += `LDA ${calculateState(SPEC.LDA.G, SPEC.LDA.M, SPEC.LDA.R, SPEC.LDA.B, lv)}\r\n`
    s += `QTH ${calculateState(SPEC.QTH.G, SPEC.QTH.M, SPEC.QTH.R, SPEC.QTH.B, lv)}\r\n`
    s += `DDG (回避?) ${calculateState(SPEC.DDG.G, SPEC.DDG.M, SPEC.DDG.R, SPEC.DDG.B, lv)}\r\n`
    s += `SADD ${calculateState(SPEC.SADD.G, SPEC.SADD.M, SPEC.SADD.R, SPEC.SADD.B, lv)}\r\n`
    return s;
}

function elementStatus(ELM: Elm) {
    let s = '';
    s += `\r\n--- 屬性 ---\r\n`;
    s += Object.entries(ELM).map(p => `${p[0]}: ${p[1]}`).join("\r\n");
    s += "\r\n";
    return s;
}


function skill() {
    const skills = (fs.readJsonSync("./raw/skill.json") as Skill).m_vList;
    const str = "name, description, effectValue, effectValue2\r\n" + skills.map(p => `${p.name}, ${p.detail}, ${p.effectValue}, ${p.effectValue2}`).join("\r\n");
    fs.writeFileSync("./result/skill.txt", str);
}

function chara() {
    const charas = (fs.readJsonSync("./raw/chara.json") as Chara).m_vList;
    const skills = (fs.readJsonSync("./raw/skill.json") as Skill).m_vList;
    const items = (fs.readJsonSync("./raw/item.json") as Item).m_vList;
    const blazeArt = (fs.readJsonSync("./raw/blaze_art.json") as BlazeArt).m_vList;
    const quests = (fs.readJsonSync("./raw/quest.json") as Quest).m_vList;

    let str = `キャラクター (${charas.filter(p => p.SKILL.length).length - 1}/40)\r\n`;
    str += "--------------------\r\n"
    str += charas.filter(p => p.SKILL.length).map(p => {
        return p.NAME;
    }).join("\r\n");
    str += "\r\n\r\n\r\n===========================================\r\n\r\n\r\n\r\n"
    
    const displayData = Enumerable.from(charas)
    .select(chara => {
        return {
            ...chara,
            skills: chara.SKILL.map(s => {
                return {
                    lv: s.LV,
                    ... skills.find(skill => skill.id === s.DF),
                };
            }),
            blazeArt: chara.BA.map(_ba => {
                return blazeArt.find(b => b.DF === _ba.DF).LV.map((ba, lv) => {
                    return {
                        lv,
                        ... skills.find(skill => skill.id === ba.SKILL_DF),
                    };
                });
            }).flat(),
        };
    }).toArray();

    str += displayData.filter(p => p.skills.length).map(p => {
        let s = `${p.NAME}\r\n\r\n`;
        s += entityStatus(p.SPEC, 1);
        s += entityStatus(p.SPEC, 60);
        s += entityStatus(p.SPEC, 80);

        s += "\r\n ----- Skill -----\r\n "
        s += p.skills.map(skill => {
            return `LV ${skill.lv} ${skill.name}\r\n${skill.detail}\r\neffect: ${skill.effectValue}, ${skill.effectValue2}`;
        }).join("\r\n\r\n");

        s += "\r\n\r\n----- Blaze Art -----\r\n"
        s += p.blazeArt.map(ba => {
            return `LV ${ba.lv} ${ba.name}\r\n${ba.detail}\r\neffect: ${ba.effectValue}, ${ba.effectValue2}`
        }).join("\r\n\r\n");

        s += "\r\n\r\n----- 食事 -----\r\n"
        s += p.FDM.map(fdm => {
            let _s = `LV ${fdm.NO}\r\n`;
            return _s + fdm.FD.map(_fdm => {
                const food = items.find(i => i.DF === _fdm.DF);
                return `品質 ${_fdm.QTY}, ${food.NAME}`;
            }).join("\r\n");
        }).join("\r\n");

        s += "\r\n\r\n----- クェスト -----\r\n"
        s += p.QST.map(qsty => {
            return `LV ${qsty.LV} ${quests.find(i => i.DF === qsty.QUEST_DF)?.NAME ?? "-"}`;
        }).join("\r\n");
        
        return s;
    }).join("\r\n\r\n\r\n\r\n=================================================================\r\n\r\n\r\n\r\n");
    fs.writeFileSync("./result/chara.txt", str);
}

function degree() {
    const degrees = (fs.readJsonSync("./raw/degree.json") as Degree).List;
    const str = "name, description\r\n" + degrees.map(p => `${p.NAME}, ${p.DESC}`).join("\r\n");
    fs.writeFileSync("./result/degree.txt", str);
}

function enemy() {
    const enemy =fs.readJsonSync("./raw/enemy.json") as Enemy;
    const enemies = enemy.m_vList;
    const kind = enemy.KindList;
    const skills = (fs.readJsonSync("./raw/skill.json") as Skill).m_vList;
    
    let str = '';
    str += "===== 種族 ===== \r\n";
    str += kind.map(p => {
        return `${p.strName}`;
    }).join("\r\n");
    str += "\r\n\r\n\r\n=================================================================\r\n\r\n\r\n\r\n";

    str += enemies.map(p => {
        let s = `DF: ${p.DF}\r\n`;
        s += `名前: ${p.strName}\r\n`
        s += `短い名前: ${p.strAnotherName}\r\n`;
        s += `詳細: ${p.strDesc}\r\n`;
        s += `種族: ${kind.find(i => i.iKind === p.eKind).strName}\r\n`;
        s += `ボス: ${p.bBoss ? "yes" : "no"}\r\n`;

        {
            s += elementStatus(p.sParam.ELM);
            s += entityStatus(p.sParam.SPEC, 1);
            s += entityStatus(p.sParam.SPEC, 60);
            s += entityStatus(p.sParam.SPEC, 80);
            s += entityStatus(p.sParam.SPEC, 120);
        }
        if (p.sParam.SKILL.length) {
            s += `\r\n--------- Skill/Effect ---------\r\n`;
            s += p.sParam.SKILL.map(skill => {
                const _skill = skills.find(i => i.id === skill.DF);
                if (!_skill) {
                    return `skill not found: DF=${skill.DF}`;
                }
                return `${_skill.name}\r\n${_skill.detail}\r\neffect: ${_skill.effectValue}, ${_skill.effectValue2}\r\n`;
            }).join("\r\n");
        }
        return s;
    }).join("\r\n\r\n===============================================================\r\n\r\n");
    fs.writeFileSync("./result/enemy.txt", str);
}

function item() {
    const items = (fs.readJsonSync("./raw/item.json") as Item).m_vList;
    const skills = (fs.readJsonSync("./raw/skill.json") as Skill).m_vList;

    let str = '';
    str += `ステータスの公式: floor ((m - b)/r) * level + b\r\n`;
    str += "R = レベル值\r\n"
    str += "M = R レベルのステータス最大值\r\n"
    str += "B = ステータス初始值\r\n"
    str += "level = アイテムのレベル\r\n\r\n"
    str += "今他の不明 tags: SDA LDA QTH DDG SADD (status add?)\r\n";

    str += "\r\n\r\n\r\n";
    str += "====================================================================================\r\n\r\n";
    str += items.map(p => {
        let s = `${p.NAME}\r\n${p.DESC}\r\n`;

        if (p.EQU_BRD) {
            const statusOutput = (lv: number) => {
                s += `\r\n--- LV ${lv} ---\r\n`;
                s += `物理攻撃 ${calculateState(p.EQU.SATK.G, p.EQU.SATK.M, p.EQU.SATK.R, p.EQU.SATK.B, lv)}\r\n`
                s += `物理防禦 ${calculateState(p.EQU.SDEF.G, p.EQU.SDEF.M, p.EQU.SDEF.R, p.EQU.SDEF.B, lv)}\r\n`
        
                s += `魔法攻撃 ${calculateState(p.EQU.MATK.G, p.EQU.MATK.M, p.EQU.MATK.R, p.EQU.MATK.B, lv)}\r\n`
                s += `魔法防禦 ${calculateState(p.EQU.MDEF.G, p.EQU.MDEF.M, p.EQU.MDEF.R, p.EQU.MDEF.B, lv)}\r\n`
        
                s += `速度 ${calculateState(p.EQU.SPD.G, p.EQU.SPD.M, p.EQU.SPD.R, p.EQU.SPD.B, lv)}\r\n`
                s += `SADD ${calculateState(p.EQU.SADD.G, p.EQU.SADD.M, p.EQU.SADD.R, p.EQU.SADD.B, lv)}\r\n`
            };
    
            statusOutput(60);
            statusOutput(80);
    
            s += `\r\n--- 屬性 ---\r\n`;
            s += Object.entries(p.ELM).map(p => `${p[0]}: ${p[1]}`).join("\r\n");
            s += "\r\n";
        }

        if (p.SPC.length) {
            s += p.SPC.map(p => {
                let _s = `\r\n --------- Skill/Effect (品質 ${p.THR}) ---------\r\n`;
                _s += p.SKILL.map(skill => {
                    const _skill = skills.find(i => i.id === skill.DF);
                    if (!_skill) {
                        return `skill not found: DF=${skill.DF}`;
                    }
                    return `${_skill.name}\r\n${_skill.detail}\r\neffect: ${_skill.effectValue}, ${_skill.effectValue2}`;
                }).join("\r\n\r\n");
                return _s;
            }).join("\r\n\r\n");
        }
        return s;
    }).join("\r\n\r\n====================================================================================\r\n\r\n");
    fs.writeFileSync("./result/item.txt", str);
}

function effect() {
    const effects = (fs.readJsonSync("./raw/abnomalstateeffect.json") as AbnormalEffect).m_vList;
    const str = "name, value\r\n" + effects.map(p => {
        return `${p.name}, ${p.value}`;
    }).join("\r\n");
    fs.writeFileSync("./result/effect.txt", str);
}

function quest() {
    const quests = (fs.readJsonSync("./raw/quest.json") as Quest).m_vList;
    const items = (fs.readJsonSync("./raw/item.json") as Item).m_vList;

    let str = '';
    str += quests.map(p => {
        let s = `${p.NAME}\r\n`;
        s += `${p.DESC}\r\n\r\n`;

        s += `達成條件: ${p.CONDITION}\r\n`;
        
        if (p.RWD_ITEM.length || p.RWD_WTH.length) {
            s += `------ 報酬 ------`;
            if (p.RWD_ITEM.length) {
                s += "\r\n" + p.RWD_ITEM.map(i => {
                    const _item = items.find(item => item.DF === i.DF);
                    if (!_item) {
                        return `cannot find item: DF=${i.DF}`;
                    }
                    return `品質 ${i.QTY} ${_item.NAME}`;
                }).join("\r\n");
            }
            if (p.RWD_WTH.length) {
                s += "\r\n" + p.RWD_WTH.map(i => {
                    let type = '';
                    switch (i.DF) {
                        case 9000:
                            type = '降臨メダル ';
                            break;
                        case 2:
                            type = 'エーテル';
                            break;
                        case 1:
                            type = 'アカデミーポイント';
                            break;
                        case 4:
                            type = 'コール';
                            break;
                        default:
                            type = `DF: ${i.DF} `;
                    }
                    return `${type} ${i.CNT}`;
                }).join("\r\n");
            }
        }
        return s;
    }).join("\r\n\r\n============================\r\n\r\n");
    fs.writeFileSync("./result/quest.txt", str);
}

skill();
chara();
degree();
enemy();
item();
effect();
quest();
