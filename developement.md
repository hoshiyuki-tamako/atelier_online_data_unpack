# Memo
skill.effect // 135 = Monster Start Zone Effect, will redirect to effect=139
skill.type // 1 = skill, 2 = effect
skill.overrideID // remove skill from skill list

item.EQU_BRD // is item an equipment
item.RAR // 0 = 特殊材料, 1 = normal
item.GROUP_DF // character special weapon, map to chara.GROUP_DF
item.GEN // weapon type lookup for character

*.MDL // MDL = model ID

item.MDL // model file ID

// unknown
chara.BTST
chara.EXC

// spawnlist
id/DF,type

type; // 3 = enemy


skill.attribute, EBattleAttribute
skill.type, EBattleType
skill.trigger, EBattleEffectTrigger
skill.effect, EBattleEffectKind
skill.effectTarget, EBattleEffectTarget
skill.targetScope, EBattleTargetAreaDefine
skill.state[], SkillState // when skill use, target will may have this 

chara.json = class MasterChara

品質20 = 81
品質22 = 81 + 81 * 1 + 25
品質23 = 81 + 81 * 2 + 1
品質25 = 81 + 81 * 3 + 79
品質26 = 81 + 81 * 4 + 108
品質27 = 81 + 81 * 6 + 80
品質28 = 81 + 81 * 7 + 162
品質29 = 81 + 81 * 9 + 198

EXP LV 1 = 1
EXP LV 74 = 29532
EXP LV 75 = 30661
