export enum ECategory {
  eNONE = 0,
  eMATERIAL = 11,
  eRECOVERY = 12,
  eBOMB = 13,
  eSUPPORT = 14,
  eTOOL = 0xF,
  eFOOD = 0x10,
  eUNIQUE = 17,
  eWEAPON = 20,
  eSHIELD = 21,
  eHELM = 0x1F,
  eARMOR = 0x20,
  eACCESSORY = 40,
  eGROW_CHARA = 50,
  eGROW_WEAPON = 51,
  eGROW_ARMOR = 52,
  eGROW_ACCESSORY = 53,
  eGROW_STONE = 54,
  eGROW_OTHER = 55,
  eGROW_BLAZE_ARTS = 56
}


export enum EBattleEffectTarget {
  eNONE,
  eHP,
  eSATK,
  eMATK,
  eSDEF,
  eMDEF,
  eSPD,
  eHIT,
  eAVOID,
  eCRITICAL,
  eSKILL,
  eSATK_SDEF,
  eSATK_SPD,
  eSDEF_SPD,
  eMATK_MDEF,
  eMATK_SPD,
  eMDEF_SPD,
  eSALL,
  eMALL,
  eALL,
  eEL_NONE,
  eEL_FIRE,
  eEL_WATER,
  eEL_EARTH,
  eEL_WIND,
  eEL_LIGHT,
  eEL_DARK,
  eEL_ALL,
}

export enum EBattleAttribute {
  eNONE,
  eSLASH_DAMAGED,
  eBLOW_DAMAGED,
  eMAGIC_DAMAGED
}

export enum EBattleType {
  eNONE,
  eACTIVESKILL,
  ePASSIVESKILL
}

export enum EBattleEffectTrigger {
  eNONE,
  eANYTIME,
  eHP_MAX,
  eATTACK,
  eATTACK_HPMAX,
  eATTACK_HPHALF,
  eATTACK_HPDYING,
  eATTACK_STRONG,
  eATTACK_ABNORMALSTATE,
  eATTACK_PUNI,
  eATTACK_ELEMENT,
  eATTACK_GOBLIN,
  eATTACK_GHOST,
  eATTACK_CRITICAL,
  eATTACK_SKILL,
  eATTACK_NONSKILL,
  eDAMAGED,
  eDAMAGED_HPHALF,
  eDAMAGED_HPDYING,
  eDAMAGED_PHYSICS,
  eDAMAGED_MAGIC,
  eDAMAGED_FIRE,
  eDAMAGED_WATER,
  eDAMAGED_EARTH,
  eDAMAGED_WIND,
  eDAMAGED_LIGHT,
  eDAMAGED_DARK,
  eDAMAGED_STRONG,
  eRECOVER,
  eITEM_ATTACK,
  eITEM_RECOVER,
  eITEM_SUPPORT,
  eCHAIN,
  eALLAY_ATTACK,
  eSHIELD,
  eMACE,
  eROD,
  eBOW,
  eSWORD,
  eATTACK_NOT_MACE,
  eBATTLE_START,
  eDAMAGED_HPDYING_PHYSICS,
  eDAMAGED_HPDYING_MAGIC,
  eATTACK_DESIGN,
  eATTACK_DESIGN_RACE,
  eITEM_ATTACK_HPMAX,
  eITEM_ATTACK_HPHALF,
  eITEM_ATTACK_HPDYING,
  eITEM_ATTACK_STRONG,
  eITEM_ATTACK_ABNORMALSTATE,
  eITEM_ATTACK_DESIGN_RACE,
  eATTACK_ITEM_ATTACK,
  eATTACK_ITEM_ATTACK_HPMAX,
  eATTACK_ITEM_ATTACK_HPHALF,
  eATTACK_ITEM_ATTACK_HPDYING,
  eATTACK_ITEM_ATTACK_STRONG,
  eATTACK_ITEM_ATTACK_ABNORMALSTATE,
  eATTACK_ITEM_ATTACK_DESIGN_RACE,
  eATTACK_ITEM_ATTACK_NONSKILL,
  eLANCE,
  eHAMMER,
  eDUAL,
  eBLADE,
  eBOOK,
  eKNUCKLE,
  eGUN,
  eDAMAGED_SWORD,
  eDAMAGED_MACE,
  eDAMAGED_ROD,
  eDAMAGED_HAMMER,
  eDAMAGED_LANCE,
  eDAMAGED_BOW,
  eDAMAGED_DUAL,
  eDAMAGED_BOOK,
  eDAMAGED_KNUCKLE,
  eDAMAGED_GUN,
  eDAMAGED_HPHALF_PHYSICS,
  eDAMAGED_HPHALF_MAGIC,
  eATTACK_FIRE,
  eATTACK_WATER,
  eATTACK_EARTH,
  eATTACK_WIND,
  eATTACK_LIGHT,
  eATTACK_DARK,
  eITEM_ATTACK_DESIGN,
  eDAMAGED_COVER,
  eABNORMALSTATE_ADD,
  ePURSMIT,
  eBLAZE_ARTS
}


export enum EBattleEffectKind {
  eNONE = 0,
  eDAMAGE = 1,
  eHP_RECOVERY = 2,
  eSP_RECOVERY = 3,
  eESCAPE = 4,
  eBURST = 5,
  eSKILL_RESERVE = 6,
  eSTATUS_FIX = 101,
  eSTATUS_RATE = 102,
  eDAMAGE_RATE = 103,
  eDAMAGE_INVALID = 104,
  eDAMAGE_REFLECT = 105,
  eSTATE_GRANT = 106,
  eSTATE_RECOVERY = 107,
  eSTATE_RESISTANCE = 108,
  eSTATE_INVALID = 109,
  eDEAD_REVIVE = 110,
  eDEAD_AVOID = 111,
  eAUTO_BOMB = 112,
  eAUTO_RECOVER = 113,
  eAUTO_SUPPORT = 114,
  eCOVER = 115,
  ePURSUIT = 116,
  eSTEAL_ETHER = 117,
  eTREASURE_ADD = 118,
  eELEMENT_CHANGE = 119,
  eHP_ABSORB = 120,
  eREADY_WIT = 121,
  eITEM_FIX = 122,
  eITEM_RATE = 123,
  eHATE = 124,
  eACTIONTURN = 125,
  eTARGET_ALL = 126,
  eQUALITY_UP = 0x7F,
  eBUFF_DELETE = 0x80,
  eSTATE_GRANT_UP = 129,
  eCOUNTER = 130,
  eHP_REGENE = 131,
  eSP_REGENE = 132,
  eITEM_COST_DOWN = 133,
  eSP_DAMAGE = 134,
  eSTART_SKILL = 135,
  eHP_REGENE_EVERY = 136,
  eONE_DAMAGE = 137,
  eONE_ENDURE = 138,
  eZONE_CHANGE = 139,
  eCOVER_HPHALF = 140,
  eCOVER_DYING = 141,
  eHP1_DAMAGE = 142,
  eITEM_AFTER_ATACK = 155,
  eITEM_DOUBLE_10 = 156,
  eITEM_DOUBLE_20 = 157,
  eITEM_DOUBLE_50 = 158,
  eITEM_DOUBLE_100 = 159,
  eELEMENT_ATTACK_HP_ABSORB = 160,
  ePHYSICS_ATTACK_TURN_1 = 161,
  ePHYSICS_ATTACK_TURN_2 = 162,
  ePHYSICS_ATTACK_TURN_3 = 163,
  ePHYSICS_ATTACK_TURN_4 = 164,
  ePHYSICS_ATTACK_TURN_5 = 165,
  eMAGIC_ATTACK_TURN_1 = 166,
  eMAGIC_ATTACK_TURN_2 = 167,
  eMAGIC_ATTACK_TURN_3 = 168,
  eMAGIC_ATTACK_TURN_4 = 169,
  eMAGIC_ATTACK_TURN_5 = 170,
  eSIDE_PHYSICS_INVALID = 171,
  eSIDE_MAGIC_INVALID = 172,
  eITEM_PHYSICS_ADD = 173,
  eITEM_MAGIC_ADD = 174,
  eDAMAGE_REACT = 175,
  eBATTLE_EXP_UP = 181,
  eCOMPOSITE = 201,
  eSTATE_GRANT_PASSIVE = 301,
  eAUTO_ACTIVE_SKILL = 302
}

export enum EBattleTargetAreaDefine {
  eNONE,
  eONE,
  eALL,
  eUSER
}

export enum eChatType {
  Phrase,
  Stamp,
  System
}


export enum eEnemySize {
  Small,
  Medium,
  Large
}



export enum eAttackTargetKind {
  One,
  All
}


export enum EQuestCategory {
  None,
  Main,
  Side,
  Sub_Normal,
  Sub_Extra,
  Chara,
  Event_Special,
  Event_Normal,
  Event_Extra
}



export enum EQuestGroup {
  None,
  Main,
  Chara,
  Side,
  Event,
  Normal,
  Ticket,
  Extra
}


export enum eSpawnerKind {
  Ignore,
  Animal,
  CharaMob,
  Enemy,
  Item,
  Kanban,
  Prefab,
  Talker,
  Portal,
  Gimmick,
  LocalGimmick,
  NPC,
  QuestArea,
  WindObject,
  SuperFairyCircle,
  EnumMax
}


export enum eFieldItemUse {
  None,
  HPHeal,
  Recovery,
  EnumMax
}

export enum eFieldItemRange {
  None,
  One,
  All,
  EnumMax
}

export enum eInfoKind {
  Pos,
  SpawnerKind,
  PosX,
  PosY,
  PosZ,
  RotX,
  RotY,
  RotZ,
  ControlFlag,
  OptionData,
  EnumMax
}

export enum eChatTab
{
  Useful,
  Communication,
  Field,
  Battle,
  Stamp,
  Log,
  EnumMax
}
