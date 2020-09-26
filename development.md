# Development

Info for developer

## Notes

- Make sure to unpack both downloaded asset and APK asset as seems some item is not included in the downloaded asset
- Below data is custom made example, please see real data for correct data value

## General

- DF = id *Note if a column is `DF` it can have duplicate `DF` in the same array
- MDL = model ID

## Export Assets Locations

most file follow naming convention from the source code

- Character `./public/img/icon_chara/*`
- Item small `./public/img/icon_item_s/*`
- Wealth `./public/img/icon_item01/*`
- Skill `./public/img/icon_skill/*`
- Degree `./public/img/icon_degree/*`
- Enemy `./public/img/enemy_tex/*`
- Town `./public/img/map_town/*`
- Pickup`./public/img/icon_pickup/*`

those file were use for lookup/generate content for the site

- Lookup `./public/generated/lookup.json`
- Enum `./src/logic/Enum.ts`

## Item

item

```ts
{
  "DF": 10010001, // id of the item
  "CATEG": 11, // Category ID, see Enums ECategory for all the types
  "GEN": 1001, // weapon type, relationship to chara.WEAPON[].GEN
  "PRIO": 10010001, // previous item, for sorting
  "KANA": "ジュウコウセキ", // use for translate other languages
  "ICON": 1001,
  "NAME": "重鉱石", // name
  "DESC": "［材料］リブルムの「茨の結界」などで採掘できる非常に重く頑丈な鉱物を含んだ石。", // description
  "MDL": 0, // model id, use for mapping mode file name
  "SPC": [ // SKILL/Effect
    {
      "THR": 0, // quality
      "SKILL": [
        {
          "DF": 300302, // relationship to skill.id
          "VAL": 0
        }
      ]
    },
  ],
  "RST": { // sell
    "MN": 10, // we sell エーテル gain
    "ITEM": []
  },
  "RAR": 1, // 0 = 特殊材料, 1 = normal
  "EQU_BRD": 0, // Is equipment
  "RSP": [ // recipe
    {
      "NO": 1, // show order
      "DF": 10200001, // relationship to item.DF
      "NC": 1 // how many of this item required count
    }
  ],
  "ALT": { // compose item
    "CST": 0, // エーテル cost
    "LV": 0, // suggested alchemy level
    "EXP": 0 // received wealth point
  },
  "EQU": { // equipment spec
    "EB": {
      "G": 0.0, // not sure what G does
      "M": 0, // GMRB formula, floor(((M - B)/R) * level + B)
      "R": 0,
      "B": 0
    },
    "SATK": { // physical attack
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "SDEF": { // physical defense
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "MATK": { // magic attack
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "MDEF": { // magic defense
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "SPD": { // speed
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "SDA": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "LDA": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "QTH": { //critical hit
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "DDG": { // dodge
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "SADD": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_SLP": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_PSN": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_BRN": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_FRZ": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_PRZ": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_DRK": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_SLN": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_CUS": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_SLW": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    },
    "RST_STN": {
      "G": 0.0,
      "M": 0,
      "R": 0,
      "B": 0
    }
  },
  "EQU_GND": [
    {
      "GEN": 0, // 0 = all gender
      "ENB": 0
    },
    {
      "GEN": 1, // 1 = male
      "ENB": 0 // ENB=enable, 0 mean this gender option is disable
    },
    {
      "GEN": 2, // 2 = female
      "ENB": 1 // 1 = this option is enable, required to check
    }
  ],
  "ELM": { // element, see enum/lookup table for more info
    "FIRE": 0,
    "WATER": 0,
    "WIND": 0,
    "EARTH": 0,
    "LIGHT": 0,
    "DARK": 0
  },
  "JOB": [ // character job, see enum EJobKind
    3
  ],
  "WPN_KIND": 0, // see Lookup.weaponKind
  "GROUP_DF": 0, // Special weapon for character, relationship to chara.GROUP_DF
  "CEIL_RWD_ITEM": [ // 專用 item
    {
      "DF": 10950037,
      "CNT": 1,
      "QTY": 10
    }
  ],
  "RCP_TYPE": 0, // 0 = normal, 1 = legendary recipe
  "LRCP_CHARA": [ // legendary recipe characters
    {
      "DF": 5027 // relationship to chara.DF
    }
  ]
}
```

## Skill

skill

```ts
{
  "id": 1,
  "name": "ダンシングブレード",
  "detail": "オーラを剣に纏い200%のダメージを与える",
  "attribute": 1, // EBattleAttribute
  "type": 1, // 1 = skill, 2 = effect. see EBattleType
  "trigger": 1, // EBattleEffectTrigger
  "effect": 1, // see enum EBattleEffectKind
  "effectValue": 2.0, // value of the effect
  "effectValue2": 0.0, // some type using this as 'damage reflect', some type using this as turn if effectValue is a DF/id
  "effectTarget": 0, // see enum EBattleEffectTarget
  "state": [ // abnormalState
    {
      "id": 3092, // relationship to abnormalstate.id
      "rate": 1.0 // success rate
    }
  ],
  "stateOwn": [ // structure as above, but apply to caster itself
    {
      "id": 3092,
      "rate": 1.0
    }
  ],
  "targetTeam": 1,
  "targetScope": 1, // EBattleTargetAreaDefine
  "element": 0, // element of the skill, normally use for skill.type == 1 && skill.effect == 1
  "shield": 0,
  "spAdd": 2.0, // sp recover rate, when weapon normal attack will recover this amount for the skill to be able to active
  "coolTime": 0, // how many turn before this skill can be use again, mostly use for enemy
  "iconPath": "icon_skill_01111", // the icon image
  "overrideID": 0, // remove skill that may match in a skills list, relationship to skill.id
  "markID": 0, // effect icon that show above player/on the item special effect icon
  "skillLV": 0, // skill level, technically anything that != 0 can be apply to item as a skill
  "rarity": 1, // for 調合 items
  "category": 0, // 調合 effect category e.g. 品質上昇/強化
  "specialVoiceID": 0, // for skill
  "enemyList": [ // skills that automatic apply when battle with that enemy
    800001004, // relationship to enemy.DF
    800001006
  ],
  "enemyListJ": [], // not in use
  "combSkillListJ": [], // not in use
  "combSkillList": [] // same as skill[], required to check this array when fetching skill value as skill can have other child skill
},
```

## Abnormal State

abnormalstate

```ts
{
  "id": 1,
  "name": "眠り",
  "turn": 3, // how many turn before the effect go off
  "effectlist": [
    1001 // relationship to abnormalstateeffect.id
  ],
  "strongStatelist": [],
  "weakStatelist": [],
  "naturalheal": 1,
  "icon": "icon_abnormal_status_1001",
  "telop": "{0}は目を覚ました！",
  "skillLow": 0, // this value show 
  "skillHigh": 0,
  "stateList": [],
  "effectListJ": [],
  "familyStateListJ": [],
  "stateListJ": []
}
```

## Abnormal State Effect

abnormalstateeffect

```ts
{
  "id": 1001,
  "name": "行動不能",
  "group": 1,
  "trarget": 0,
  "value": 1.0
}
```

## Character

chara

```ts
    {
      "DF": 4, // id
      "CATEG": 1, // character category
      "NAME": "アニスヒソップ",
      "DESC": "アニスヒソップの説明。",
      "GEN": 2, // gender
      "ICON": "./chara.png",
      "BTST": 2, // Job kind, see enum eJobKind
      "EXC": 8,
      "SKILL": [ // skills, note that it can have duplicated / overrideID skill, make sure remove before process
        {
          "DF": 400101, // relationship to skill.id
          "LV": 0 // required character reach this level
        },
      ],
      "SPEC": { // see item.EQU for more info
        "HP": {
          "G": 1.0,
          "M": 1463,
          "R": 60,
          "B": 147
        },
        "SATK": {
          "G": 1.0,
          "M": 732,
          "R": 60,
          "B": 73
        },
        "SDEF": {
          "G": 1.0,
          "M": 1000,
          "R": 60,
          "B": 100
        },
        "MATK": {
          "G": 1.0,
          "M": 1195,
          "R": 60,
          "B": 119
        },
        "MDEF": {
          "G": 1.0,
          "M": 1268,
          "R": 60,
          "B": 127
        },
        "SPD": {
          "G": 1.0,
          "M": 242,
          "R": 60,
          "B": 8
        },
        "SDA": {
          "G": 1.0,
          "M": 100,
          "R": 60,
          "B": 100
        },
        "LDA": {
          "G": 1.0,
          "M": 100,
          "R": 60,
          "B": 100
        },
        "QTH": {
          "G": 1.0,
          "M": 10,
          "R": 60,
          "B": 10
        },
        "DDG": {
          "G": 1.0,
          "M": 0,
          "R": 60,
          "B": 0
        },
        "SADD": {
          "G": 1.0,
          "M": 0,
          "R": 60,
          "B": 0
        }
      },
      "FDM": [ // food
        {
          "NO": 1, // sort order
          "GRD": 1, // item count of "FD": []
          "FD": [ // item
            {
              "DF": 10830001, // relationship to item.DF
              "QTY": 0 // quality of the item
            }
          ],
          "HP": 8, // total state, just add this value to existing state will give the result total state. no sum/other process required
          "SATK": 4,
          "SDEF": 5,
          "MATK": 6,
          "MDEF": 7,
          "SPD": 1,
          "SDA": 0,
          "LDA": 0,
          "QTH": 0,
          "DDG": 0,
          "SADD": 0
        }
      ],
      "QST": [ // character quest
        {
          "NO": 1, // sort order
          "QUEST_DF": 500004001, // relationship to quest.DF
          "FLAG_DF": 23005000,
          "LV": 1 // required character level
        },
      ],
      "WEAPON": [ // weapon gender
        {
          "GEN": 2005 // relationship to item.EQU_GND[].GEN
        }
      ],
      "GROW": [ // how many stone required to growth
        {
          "STAR": 1, // at one star
          "STONE": 10 // how many stone required
        },
      ],
      "MDL": { // model info
        "fScale": 1.0,
        "eAnimKind": 1,
        "avHelmOffset": [
          {
            "id": 4,
            "offsetY": 0.0
          }
        ],
        "bMacho": 0,
        "hairId": 4,
        "eyeId": 4,
        "headId": 4,
        "voice": 4,
        "weaponId": 0,
        "bodyId": 4,
        "shieldId": 0,
        "helmId": 0,
        "accId1": 16,
        "accId2": 0,
        "accId3": 0
      },
      "BA": [ // blaze art
        {
          "LV": 100, // level that required to gain this blaze art
          "DF": 5008 // relationship to blaze_art.DF
        }
      ],
      "GROUP_DF": 4 // relationship to item.GORUP_DF, use for checking character only special item
    }
```

## Blaze Art

blaze_arts

```ts
{
  "DF": 1, // id
  "LV": [ // blaze art levels
    {
      "SKILL_DF": 600101, // relationship to skill.id
      "EXP_PT": 100 // how many experience point for next level
    },
  ]
}
```

## Degree

degree

```ts
{
  "DF": 1, // DF can have duplicate
  "STP": 1, // Step of the degree
  "TYP": 1, // type of the degree
  "RTY": 1, // rarity
  "NAME": "新人ぷに狩人",
  "DESC": "ぷに族のモンスターを初めて討伐する",
  "PRIO": 6010, // previous item, use for sorting
  "KEY_SIDE_QUEST": 0
}
```

## Wealth

wealth

```ts
{
  "DF": 1,
  "NAME": "コール",
  "DESC": "ブレセイルで流通している通貨",
  "ICON": 1, // icon of the wealth, `icon_item01_${this.ICON.toString().padStart(5, '0')}.png`
  "CHARA": 0, // relationship to chara.DF
  "SORT": 1, // sorting
  "CATEG": 0 // enum EWealthKind
}
```

## Quest

quest

```ts
{
  "DF": 100001001,
  "CATEG": 1, // category, see enum EQuestCategory for more info
  "TYPE": 5011,
  "GROUP": 1,
  "NAME": "オルビュースの探索",
  "KANA": "オルビュースノタンサク",
  "DESC": "オルビュースの探索をしに行こう",
  "CONDITION": "「アカデミー正門前」に行く",
  "QUEST_NO": 1, // quest number, for checking next step
  "QUEST_SUB_NO": 0, // step of current quest, one quest can have multiple step
  "CHAPTER": 1,
  "CHARA": 0, // character that related to this quest
  "NPC": 1010,
  "DESTINATION": -2,
  "AREA": 1, // iAreaId, relationship to areaDetail, areaInfo, fieldname, dungeonInfo
  "RNK_PT": 10, // how many rank point earn after complete
  "UNLOCK": [ // required 'degree' to unlock this quest
    {
      "DF": 2002, // relationship to degree.DF
      "STP": 1
    },
  ],
  "LAST": 0,
  "INVISIBLE": 0,
  "IMPORTANT": 0,
  "PARTY_IN": 0, // required character in party. relationship to chara.DF
  "KEY_QUEST": 0,
  "OFFICIAL_EXAMINATION": 0, // the icon that above the quest in 3d world
  "CHALLENGE": 0,
  "COST": { // required cost to accept the quest
    "WTH": {
      "DF": 0, // 0 = no cost required. relationship to wealth.id
      "CNT": 0 // how many wealth it cost
    }
  },
  "EVENT": 0,
  "NPC_FD": [],
  "RWD_ITEM": [ // reward item
    {
      "DF": 50010001, // relationship to item.id
      "QTY": 50, // quality
      "TRT": 0,
      "CNT": 1, // amount
      "EX_DF0": 0,
      "EX_QTY0": 0,
      "EX_TRT0": 0,
      "EX_CNT0": 0,
      "EX_DF1": 0,
      "EX_QTY1": 0,
      "EX_TRT1": 0,
      "EX_CNT1": 0,
      "EX_DF2": 0,
      "EX_QTY2": 0,
      "EX_TRT2": 0,
      "EX_CNT2": 0,
      "EX_DF3": 0,
      "EX_QTY3": 0,
      "EX_TRT3": 0,
      "EX_CNT3": 0,
      "EX_DF4": 0,
      "EX_QTY4": 0,
      "EX_TRT4": 0,
      "EX_CNT4": 0
    }
  ],
  "RWD_WTH": [ // reward wealth
    {
      "DF": 2, // relationship to wealth.id
      "CNT": 100 // amount
    }
  ],
  "FLG_ON": [ // for some reason this value is always point to itself?
    {
      "DF": 100001001 // relationship to quest.DF
    }
  ],
  "ENM": [ // required to kill enemy
    {
      "DF": 100010003, // relationship to enemy.DF
      "CATEG": 0,
      "BDR": 1, // count
      "QTY": 0,
      "AREA": 0
    }
  ],
  "BTL": [], // not in use
  "QST": [], // not in use
  "MIX": [], // not in use
  "SKL": [], // not in use
  "ACT_SKL": [], // not in use
  "DLV": [ // delivery item
    {
      "DF": 10220001, // relationship to item.DF
      "CATEG": 0,
      "BDR": 2, // item count
      "QTY": 0, // quality
      "AREA": 0
    }
  ],
  "ALC": [], // not in use
  "GET": [ // gather
    {
      "DF": 10090001, // relationship to item.DF
      "CATEG": 0,
      "BDR": 5, // count
      "QTY": 0, // quality
      "AREA": 0
    }
  ],
  "PIC": [], // not in use
  "REG": [ // required enter
    {
      "DF": 1, // relationship to areaDetail.iAreaID
      "CATEG": 0,
      "BDR": 1,
      "QTY": 0,
      "AREA": 0
    }
  ],
  "DUN": [ // required enter dungeon
    {
      "DF": 10002, // relationship to dungeonInfo.iDungeonId
      "CATEG": 0,
      "BDR": 1,
      "QTY": 0,
      "AREA": 0
    }
  ],
  "ARR": [], // not in use
  "SPE": [ // speak
    {
      "DF": 0,
      "CATEG": 0,
      "BDR": 0,
      "QTY": 0,
      "AREA": 0
    }
  ],
  "VIL": [ // 村
    {
      "DF": 1,
      "CATEG": 0,
      "BDR": 1,
      "QTY": 0,
      "AREA": 0
    }
  ],
  "TALK": [ // talk
    {
      "DF": 0,
      "CATEG": 0,
      "BDR": 1,
      "QTY": 0,
      "AREA": 0
    }
  ],
  "ARA": [ // arrive area?
    {
      "DF": 15004,
      "CATEG": 0,
      "BDR": 1,
      "QTY": 0,
      "AREA": 2
    }
  ]
}
```

## Extra Quest

extraquest

```ts
{
  "iDf": 1,
  "iPosID": 1111,
  "iDungeonID": 8000001, // relationship to dungeonInfo.iDungeonId
  "iFieldDf": 102,
  "iQuestDf": 121212121, // relationship to quest.DF
  "arKeyCharaDf": [
    1,
    2,
    3,
    4
  ],
  "sNormalADV": "EXQT_001_020",
  "sGoodADV": "EXQT_001_020",
  "sTrueADV": "EXQT_001_020"
}
```

## Enemy

enemy

```ts
{
  "DF": 101, // id
  "bBoss": 0, // is boss
  "eAttackTargetKind": 0, // single or area attack, see Enum eAttackTargetKind
  "sNormalAttackFile": "NormalAttack_Enemy_01", // the asset that contains effect and attack param / photon api command
  "sBossStartFile": "",
  "sBossEndFile": "",
  "eKind": 1, // enemy type
  "iCategory": 1, // enemy type of category
  "musicID": 0, // e.g. boss battle music
  "strName": "灼熱のエレメント",
  "strAnotherName": "",
  "eSize": 0, // size of the monster
  "bAura": 0, // aura effect
  "fViewRadius": 5.0, // view distance
  "fViewCos": -1.0, // view in 3D space, Math.round(Math.acos(fViewCos) * (180/Math.PI), 2)
  "fMoveRadius": 20.0, // how far it will move around
  "fMoveSpeed": 2.0, // moving speed when on MapArea
  "fHitRadius": 1.2, // hit radius on MapArea
  "bOnlyOnline": 0, // is the monster only appear online mode
  "fCullingSide": 8.0, // see game engine documentation unity Occlusion culling
  "strDesc": "",
  "sParam": {
    "MDL": "001_01",
    "NAME": "",
    "DESC": "",
    "ELM": { // see item.ELM for more info
      "FIRE": 100,
      "WATER": -100,
      "WIND": 30,
      "EARTH": 30,
      "LIGHT": 30,
      "DARK": 30
    },
    "SKILL": [
      {
        "DF": 5008 // relationship to skill.id
      },
    ],
    "SPEC": { // see item.EQU for more info
      "EXP": {
        "G": 0.6,
        "M": 10,
        "R": 60,
        "B": 1
      },
      "HP": {
        "G": 1.0,
        "M": 1300,
        "R": 60,
        "B": 130
      },
      "SATK": {
        "G": 1.0,
        "M": 0,
        "R": 60,
        "B": 0
      },
      "SDEF": {
        "G": 1.0,
        "M": 1050,
        "R": 60,
        "B": 105
      },
      "MATK": {
        "G": 1.0,
        "M": 2000,
        "R": 60,
        "B": 200
      },
      "MDEF": {
        "G": 1.0,
        "M": 1900,
        "R": 60,
        "B": 190
      },
      "SPD": {
        "G": 1.0,
        "M": 465,
        "R": 60,
        "B": 15
      },
      "SDA": {
        "G": 1.0,
        "M": 100,
        "R": 60,
        "B": 100
      },
      "LDA": {
        "G": 1.0,
        "M": 100,
        "R": 60,
        "B": 100
      },
      "QTH": {
        "G": 1.0,
        "M": 10,
        "R": 60,
        "B": 10
      },
      "DDG": {
        "G": 1.0,
        "M": 0,
        "R": 60,
        "B": 0
      },
      "SADD": {
        "G": 1.0,
        "M": 100,
        "R": 60,
        "B": 100
      }
    }
  }
},
```

## Area Info

areaInfo

```ts
{
  "iAreaId": 1, // relationship to areaDetail.iAreaID. note that its ID for other file.
  "iAreaNameId": 1, // relationship to fieldname.iAreaNameId.
  "iHardMode": 0,
  "iStartPortalID": 0,
  "cMapColor": {
    "rgba": 4294967295
  },
  "iRestartStage": 1,
  "iRestartSpawn": 0,
  "cMapListColor": {
    "rgba": 4294967295
  },
  "eMusic_Day": 6,
  "eMusic_Night": 7,
  "eOtherMusicList": [
    8
  ],
  "eMusic_NormalBattle": 28,
  "eMultiKind": 0,
  "eSunlightKind": 0,
  "sSunlightAnimPath": "",
  "aFixedSunlight": []
}
```

## Area Detail

areaDetail

```ts
{
  "iAreaID": 1,
  "iLevel": 1,
  "iItemIDList": [ // note that this notes doesn't show all real items that can spawn, just a manually created list
    10200001, // relationship to item.DF
    10150001,
    10910001,
    10920001,
    10100001,
    10170002,
    10010003,
    10010002,
    10020002,
    10310002
  ],
  "iEnemyIDList": [  // note that this notes doesn't show all real enemy that can spawn, for real full list use SpawnList_*.txt
    3101, // relationship to enemy.DF
    201,
    301,
    401
  ]
}
```

## FieldName

fieldname

```ts
{
  "iAreaNameId": 1,
  "strAreaName": "オルビュース",
  "strAreaNameSub": "白き芽吹きの地"
}
```

## Gate Info

gateinfo

```ts
{
  "iUnlockGateId": -2,
  "iArea": 1, // relationship to area.iAreaID
  "iStage": 1,
  "iSpawnNo": 0,
  "iUIArea": 1,
  "iUINo": 5,
  "bDummy": 0,
  "strName": "アカデミー正門前",
  "strDialogName": "",
  "bDungeon": 0, // is dungeon
  "bDebug": 0
}
```

## Dungeon

dungeon

seems they merge normal area and dungeon together

```ts
{
  "iDungeonId": 1,
  "iAreaNameId": 17, // relationship to fieldname.id
  "iAreaId": 2,// relationship to area.iAreaID
  "iMaxFloor": 5,
  "iForExtra": 0,
  "iReturnArea": 2, /// relationship to area.iAreaID
  "iReturnStage": 4,
  "iReturnSpawn": 2,
  "strBattleBG": "",
  "eMusic": 36,
  "bEnableFilter": 0,
  "iFlowIdList": [
    1,
    2,
    3,
    4,
    5
  ],
  "eRandomSE": -1,
  "fRandomSECheckSec": 0.0,
  "fRandomSEPer": 0.0,
  "a11FSunlight": [],
  "a21FSunlight": []
}
```

## Spawn List CSV

some of the field see enum for more info

- id/DF, eSpawnerKind, pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, option?, flag?, ?

## Zone

zone

```ts
 {
  "id": 101,
  "name": "烈炎領域 等級1",
  "effectlist": [
    1101, // relationship to zoneeffect.id
    2201,
    2003
  ],
  "effect": "Effect/Particle/FX_FilterFire",
  "strongZonelist": [
    102, // relationship to zone.id
    103,
    104,
    105
  ],
  "weakZonelist": [
    102, // relationship to zone.id
    103,
    104,
    105
  ]
}
```

## Zone effect

zoneeffect

```ts
{
  "id": 1101,
  "name": "火屬性傷害增加10%",
  "effect": 1,
  "value": 0.1,
  "element": 1 // see enum EElement
},
```
