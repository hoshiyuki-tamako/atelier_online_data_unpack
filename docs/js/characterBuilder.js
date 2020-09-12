ELEMENT.locale(ELEMENT.lang.en);

Vue.component('v-select', VueSelect.VueSelect);
Vue.use(VTooltip)

class Lookup {
  static state = {
    EXP: 'EXP',
    HP: 'HP',
    SATK: '物理攻撃',
    SDEF: '物理防禦',
    MATK: '魔法攻撃',
    MDEF: '魔法防禦',
    SPD: '速度',
    SDA: 'SP上限?',
    LDA: 'LDA',
    QTH: 'SP回復量?',
    DDG: '回避',
    SADD: 'SADD',
  };

  static element = {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  };

  static elementMapSkillEffectTarget = {
    FIRE: [21, 27],
    WATER: [22, 27],
    EARTH: [23, 27],
    WIND: [24, 27],
    LIGHT: [25, 27],
    DARK: [26, 27],
  };

  static stateMapSkillEffectTarget = {
    HP: 1,
    SATK: 2,
    MATK: 3,
    SDEF: 4,
    MDEF: 5,
    SPD: 6,
  };
}

class LogicHelper {
  static calculateState(gmrb, lv = 1) {
    if (!gmrb) {
      return 0;
    }
    const baseValue = ((gmrb.M - gmrb.B)/gmrb.R);
    return Math.floor(baseValue * lv + gmrb.B);
  }
  static calculateSupportState(value) {
    return Math.ceil(value * .05);
  }
}

class Equipment {
  static states = ['HP', 'SATK', 'SDEF', 'MATK', 'MDEF', 'SPD'];
  static skillTriggers = [1, 14];

  weapon;
  shield;
  helmet;
  cloth;
  accessory1;
  accessory2;
  accessory3;
}

class CharacterModifier {
  static states = Equipment.states;

  level = 80;
  foodLevel = 80;
  blazeArtLevel = 5;
}

class EquipmentModifier {
  quality = 120;
  level = 80;
  skill;
}

class EquipmentsModifier {
  weapon = new EquipmentModifier();
  shield = new EquipmentModifier();
  helmet = new EquipmentModifier();
  cloth = new EquipmentModifier();
  accessory1 = new EquipmentModifier();
  accessory2 = new EquipmentModifier();
  accessory3 = new EquipmentModifier();
}

class Player {
  character;
  equipment = new Equipment();
  supports = [];

  characterModifier = new CharacterModifier();
  equipmentModifier = new EquipmentsModifier();
  supportModifier = [];
}

class EquipmentModifierExport {
  quality;
  level;
  skillId;
}


class EquipmentsModifierExport {
  weapon = new EquipmentModifierExport();
  shield = new EquipmentModifierExport();
  helmet = new EquipmentModifierExport();
  cloth = new EquipmentModifierExport();
  accessory1 = new EquipmentModifierExport();
  accessory2 = new EquipmentModifierExport();
  accessory3 = new EquipmentModifierExport();
}


class PlayerExport {
  version = 1;

  characterId;
  equipment = {
    weaponId: null,
    shieldId: null,
    helmetId: null,
    clothId: null,
    accessory1Id: null,
    accessory2Id: null,
    accessory3Id: null,
  }
  supportIds = [];

  characterModifier = new CharacterModifier();
  equipmentModifier = new EquipmentsModifierExport();
  supportModifier = [];
}

class SaveConfig {
  static localStorageKey = 'player';
}

new Vue({
  el: '#app',
  data: {
    // data
    chara: null,
    item: null,
    skill: null,
    abnormalstate: null,
    blaze_art: null,

    // processed data
    items: [],
    characters: [],

    itemLookup: {},
    characterLookup: {},
    skillLookup: {},
    abnormalStateLookup: {},
    addonSkills: [],
    addonSkillsLookUp: {},
    characterGroupDfLookup: {},
    blazeArtLookup: {},

    // state
    pageLoading: true,

    // dialog
    characterEditDialogVisible: false,

    itemPickerSortOption: [
      {
        label: '物理攻撃',
        value: 'SATK'
      },
      {
        label: '物理防禦',
        value: 'SDEF'
      },
      {
        label: '魔法攻撃',
        value: 'MATK'
      },
      {
        label: '魔法防禦',
        value: 'MDEF'
      },
      {
        label: '速度',
        value: 'SPD'
      },
      {
        label: '物理攻撃base(support)',
        value: 'SATK_base'
      },
      {
        label: '物理防禦base(support)',
        value: 'SDEF_base'
      },
      {
        label: '魔法攻撃base(support)',
        value: 'MATK_base'
      },
      {
        label: '魔法防禦base(support)',
        value: 'MDEF_base'
      },
      {
        label: '速度base(support)',
        value: 'SPD_base'
      },
      {
        label: '回避',
        value: 'dodge'
      },
      {
        label: 'クリティカル',
        value: 'criticalHit'
      },
    ]
    .concat(Object.entries(Lookup.element).map(([value, label]) => ({
      label,
      value,
    })))
    .concat(Object.entries(Lookup.element).map(([value, label]) => ({
      label: `${label}base(support)`,
      value: `${value}_base`,
    }))),
    itemPickerShowRemoveIcon: true,
    itemPickerShowSort: true,
    itemPickerSort: null,
    itemPickerShowStates: false,
    itemPickerDialogVisible: false,
    itemPickerFilterCategory: null,
    itemPickerFilterKeyword: '',
    itemPickerFilterCharacterGender: null, // gen_id, EQU_GND
    itemPickerFilterWeaponGen: [], // [gen_id], GEN
    itemPickerFilterGroupDf: null,
    itemPickerCallback: null, // (item: unknown?) => void

    itemPickerDodgeSortSearchCache: new Map(),
    itemPickerCriticalHitSortSearchCache: new Map(),

    itemPickerSortOriginal: null,
    supportItemEditDialogVisible: false,
    supportItemSelected: null,
    supportItemAllLevel: 80,

    mainItemEditorVisible: false,
    mainItemAllQuality: 120,
    mainItemAllLevel: 80,
    mainItemAllSkillId: null,

    importDialogVisible: false,
    exportDialogVisible: false,
    importString: '',

    // cache
    defaultItemDodgeSkillCache: new Map(),
    defaultItemCriticalSkillCache: new Map(),
    defaultItemElementSkillCache: new Map(),
    itemPickerSortStateCache: new Map(),
    itemPickerSortElementCache: new Map(),

    // data
    player: new Player(),

    skillCombo: 0,
  },
  methods: {
    // global helper
    getFilteredSkills(skills, effectTargets = [], effect = null, triggers = []) {
      if (!Array.isArray(effectTargets)) {
        effectTargets = [effectTargets];
      }
      if (!Array.isArray(skills)) {
        skills = [skills];
      }

      const overrideIds = skills.map(p => p.overrideID).filter(p => p);
      return skills
      .filter(p => !overrideIds.includes(p.id))
      .map(p => [p].concat(p.combSkillList))
      .flat()
      .filter(p =>
        !overrideIds.includes(p.id) &&
        (!effect || p.effect === effect) &&
        (!effectTargets.length || effectTargets.includes(p.effectTarget)) &&
        (!triggers.length || triggers.includes(p.trigger))
      );
    },
    getSkillEffectTargetValues(skills, effectTargets = [], effect = null, triggers = []) {
      return this.getFilteredSkills(skills, effectTargets, effect, triggers).reduce((sum, skill) => sum + skill.effectValue, 0);
    },

    // item picker
    setSortStateCache(item) {
      if (!this.itemPickerSortStateCache.has(item)) {
        this.itemPickerSortStateCache.set(item, Enumerable.from(this.getItemStates(item)).toObject(p => p.key, p => p));
      }
      return this;
    },
    setSortElementCache(item) {
      if (!this.itemPickerSortElementCache.has(item)) {
        this.itemPickerSortElementCache.set(item, Enumerable.from(this.getItemElements(item)).toObject(p => p.key, p => p));
      }
      return this;
    },
    getFilteredItemPickerItems() {
      const items = this.items.filter(p => 
        (!this.itemPickerFilterCategory || this.itemPickerFilterCategory === p.CATEG) &&
        (!this.itemPickerFilterKeyword || p.NAME.toLowerCase().includes(this.itemPickerFilterKeyword.toLowerCase()) || p.DF === +this.itemPickerFilterKeyword) && 
        (!this.itemPickerFilterCharacterGender || p.EQU_GND.some(i => !i.GEN) || p.EQU_GND.filter(i => i.ENB).some(i => i.GEN === this.itemPickerFilterCharacterGender)) &&
        (!this.itemPickerFilterWeaponGen.length || this.itemPickerFilterWeaponGen.includes(p.GEN)) &&
        (!this.itemPickerFilterGroupDf || !p.GROUP_DF || this.itemPickerFilterGroupDf === p.GROUP_DF)
      );

      const defualt = { value: 0, skillValue :0 };
      if (this.itemPickerSort) {
        if (this.itemPickerSort in Lookup.state) {
          items.sort((a, b) => {
            this.setSortStateCache(a).setSortStateCache(b);
            const _a = this.itemPickerSortStateCache.get(a)[this.itemPickerSort] || defualt;
            const _b = this.itemPickerSortStateCache.get(b)[this.itemPickerSort] || defualt;
            return (_b.value + _b.skillValue) - (_a.value + _a.skillValue);
          });
        } else if (this.itemPickerSort.replace('_base', '') in Lookup.state) {
          const state = this.itemPickerSort.replace('_base', '');
          items.sort((a, b) => LogicHelper.calculateState(b.EQU[state], 80) - LogicHelper.calculateState(a.EQU[state], 80));
        } else if (this.itemPickerSort in Lookup.element) {
          items.sort((a, b) => {
            this.setSortElementCache(a).setSortElementCache(b);
            const _a = this.itemPickerSortElementCache.get(a)[this.itemPickerSort] || defualt;
            const _b = this.itemPickerSortElementCache.get(b)[this.itemPickerSort] || defualt;
            return (_b.value + _b.skillValue) - (_a.value + _a.skillValue);
          });
        } else if (this.itemPickerSort.replace('_base', '') in Lookup.element) {
          const element = this.itemPickerSort.replace('_base', '');
          items.sort((a, b) => b.ELM[element] - a.ELM[element]);
        } else if (this.itemPickerSort === 'dodge') {
          items.sort((a, b) => {
            if(!this.itemPickerDodgeSortSearchCache.has(b)) {
              this.itemPickerDodgeSortSearchCache.set(b, this.getSkillEffectTargetValues(this.getItemSkills(b, 80), 8));
            }
            if(!this.itemPickerDodgeSortSearchCache.has(a)) {
              this.itemPickerDodgeSortSearchCache.set(a, this.getSkillEffectTargetValues(this.getItemSkills(a, 80), 8));
            }
            return this.itemPickerDodgeSortSearchCache.get(b) - this.itemPickerDodgeSortSearchCache.get(a);
          });
        } else if (this.itemPickerSort === 'criticalHit') {
          items.sort((a, b) => {
            if(!this.itemPickerCriticalHitSortSearchCache.has(b)) {
              this.itemPickerCriticalHitSortSearchCache.set(b, this.getSkillEffectTargetValues(this.getItemSkills(b, 80), 9));
            }
            if(!this.itemPickerCriticalHitSortSearchCache.has(a)) {
              this.itemPickerCriticalHitSortSearchCache.set(a, this.getSkillEffectTargetValues(this.getItemSkills(a, 80), 9));
            }
            return this.itemPickerCriticalHitSortSearchCache.get(b) - this.itemPickerCriticalHitSortSearchCache.get(a);
          });
        }
      }

      return items;
    },
    onPickItem(item = null) {
      this.itemPickerDialogVisible = false;
      if (this.itemPickerCallback) {
        this.itemPickerCallback(item);
      }
    },

    // support item picker
    openSupportItemEditDialog() {
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerShowRemoveIcon = false;
      this.itemPickerSortOriginal = this.itemPickerSort;
      if (this.itemPickerSort && !this.itemPickerSort.includes('_base') && this.itemPickerSortOption.some(p => p.value === `${this.itemPickerSort}_base`)) {
        this.itemPickerSort += '_base';
      }
      this.itemPickerCallback = item => this.supportItemSelected = item;
      if (!this.supportItemSelected) {
        this.supportItemSelected = this.items[0];
      }
      this.supportItemEditDialogVisible = true;
    },
    onCloseSupportItemDialog() {
      if (this.itemPickerSortOriginal) {
        this.itemPickerSort = this.itemPickerSortOriginal;
      }
    },
    onAddSupportItem() {
      this.player.supports.push(this.supportItemSelected);
      this.player.supportModifier.push(new EquipmentModifier());
    },
    onRemoveSupportItem(i) {
      this.player.supports.splice(i, 1);
      this.player.supportModifier.splice(i, 1);
    },
    onSetAllSupportItemLevel() {
      for (const modifier of this.player.supportModifier) {
        modifier.level = this.supportItemAllLevel;
      }
      this.successNotification();
    },
    getSupportItemStates(i) {
      return Equipment.states.map(state => ({
        state,
        label: Lookup.state[state],
        value: LogicHelper.calculateSupportState(LogicHelper.calculateState(this.player.supports[i].EQU[state], this.player.supportModifier[i].level)),
      }))
      .filter(p => p.value);
    },
    getSupportItemStatesSummary() {
      return Equipment.states.map(state => ({
        state,
        label: Lookup.state[state],
        value: this.player.supports.map((support, i) => LogicHelper.calculateSupportState(LogicHelper.calculateState(support.EQU[state], this.player.supportModifier[i].level))).reduce((a, b) => a + b, 0),
      }))
      .filter(p => p.value);
    },
    getSupportItemElements(i) {
      return Object.entries(Lookup.element).map(([element, label]) => ({
        element,
        label,
        value: LogicHelper.calculateSupportState(this.player.supports[i].ELM[element]),
      }))
      .filter(p => p.value);
    },
    getSupportItemElementSummary() {
      return Object.entries(Lookup.element).map(([element, label]) => ({
        element,
        label,
        value: this.player.supports.map(i => LogicHelper.calculateSupportState(i.ELM[element])).reduce((a, b) => a + b, 0),
      }))
      .filter(p => p.value);
    },

    // main item editor
    onConfirmSetAllMainItemQuality() {
      for (const modifier of Object.values(this.player.equipmentModifier)) {
        modifier.quality = this.mainItemAllQuality;
      }
      this.successNotification();
      this.$forceUpdate();
    },
    onConfirmSetAllMainItemLevel() {
      for (const modifier of Object.values(this.player.equipmentModifier)) {
        modifier.level = this.mainItemAllLevel;
      }
      this.successNotification();
      this.$forceUpdate();
    },
    onConfirmSetAllMainItemSkill() {
      for (const modifier of Object.values(this.player.equipmentModifier)) {
        modifier.skill = this.mainItemAllSkillId ? this.skillLookup[this.mainItemAllSkillId] : null;
      }
      this.successNotification();
      this.$forceUpdate();
    },

    // character picker
    getCharacterImage(character = null) {
      character = character || this.player.character;
      if (!character) {
        return '';
      }

      return `img/chara/Texture2D/icon_chara_all_${character.DF.toString().padStart(4, '0')}_00.png`;
    },
    getCharacterStates() {
      if (!this.player.character) {
        return [];
      }

      return CharacterModifier.states.map(state => {
        let foodValue = 0;
        if (this.player.characterModifier.foodLevel) {
          const food = this.player.character.FDM.find(p => p.NO === this.player.characterModifier.foodLevel) || this.player.character.FDM[this.player.character.FDM.length - 1];
          foodValue = food[state] || 0;
        }

        const skills = this.getFilteredSkills(this.getCharacterSkills(), Lookup.stateMapSkillEffectTarget[state], 101);

        return {
          state,
          label: Lookup.state[state],
          value: LogicHelper.calculateState(this.player.character.SPEC[state], this.player.characterModifier.level),
          foodValue,
          skillValue: skills.reduce((sum, p) => sum + p.effectValue, 0),
          skills,
        };
      });
    },
    getCharacterSkills() {
      if (!this.player.character) {
        return [];
      }

      return this.player.character.SKILL
      .filter(p => p.LV <= this.player.characterModifier.level)
      .map(p => this.skillLookup[p.DF]);
    },
    getCharacterDodgeWithDetail() {
      const skills = this.getFilteredSkills(this.getCharacterSkills(), 8);
      return {
        skills,
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
      };
    },
    getCharacterCriticalHitWithDetail() {
      const skills = this.getFilteredSkills(this.getCharacterSkills(), 9);
      return {
        skills,
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
      };
    },
    getCharacterSkillStateWithDetail(state) {
      return this.getFilteredSkills(this.getCharacterSkills(), Lookup.stateMapSkillEffectTarget[state]);
    },
    getCharacterElements() {
      const characterSkills = this.getCharacterSkills();
      return Object.entries(Lookup.element).map(p => {
        const skills = this.getFilteredSkills(characterSkills, Lookup.elementMapSkillEffectTarget[p[0]], 101);
        return {
          key: p[0],
          label: p[1],
          value: skills.reduce((sum, p) => sum + p.effectValue, 0),
          skills,
        };
      });
    },
    getCharacterBlazeArt() {
      if (!(this.player.character && this.player.character.BA.length && this.player.characterModifier.level >= 70)) {
        return null;
      }

      const blazeArtLv = this.blazeArtLookup[this.player.character.BA[0].DF].LV;
      const blazeArt = blazeArtLv[this.player.characterModifier.blazeArtLevel - 1];
      if (!blazeArt) {
        return null;
      }

      return this.skillLookup[blazeArt.SKILL_DF];
    },

    onPickCharacter(character = null) {
      if (this.player.character && character && this.player.character.DF === character.DF) {
        character = null;
      }
      this.player.character = character;
    },

    // equipment
    setEquipmentModifierSkill(value, slot) {
      this.player.equipmentModifier[slot].skill = value;
    },

    getEquipmentStates(slot) {
      if (!this.player.equipment[slot]) {
        return [];
      }

      const skills = this.getEquipmentSkills(slot);
      return Equipment.states
        .map(p => {
          return {
            key: p,
            label: Lookup.state[p],
            value: LogicHelper.calculateState(this.player.equipment[slot].EQU[p], this.player.equipmentModifier[slot].level),
            skillValue: this.getSkillEffectTargetValues(skills, Lookup.stateMapSkillEffectTarget[p], 101),
            extraValue: this.player.equipmentModifier[slot].skill ?
            this.getSkillEffectTargetValues([this.player.equipmentModifier[slot].skill], Lookup.stateMapSkillEffectTarget[p], 101) :
            0,
          };
        })
        .filter(p => p.value || p.skillValue || p.extraValue);
    },
    getEquipmentDodge(slot) {
      const skills = this.getFilteredSkills(this.getEquipmentSkills(slot), 8);
      return {
        skills,
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
      };
    },
    getEquipmentCriticalHit(slot) {
      const skills = this.getFilteredSkills(this.getEquipmentSkills(slot), 9);
      return {
        skills,
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
      };
    },
    getEquipmentElements(slot) {
      if (!this.player.equipment[slot]) {
        return [];
      }
  
      const skills = this.getEquipmentSkills(slot);
      return Object.entries(Lookup.element)
        .map(([element, label]) => ({
          key: element,
          label: label,
          value: this.player.equipment[slot].ELM[element],
          skillValue: this.getSkillEffectTargetValues(skills, Lookup.elementMapSkillEffectTarget[element]),
          extraValue: this.player.equipmentModifier[slot].skill ?
          this.getSkillEffectTargetValues([this.player.equipmentModifier[slot].skill], Lookup.elementMapSkillEffectTarget[element]) :
          0,
          skills,
        }))
        .filter(p => p.value || p.skillValue || p.extraValue);
    },
    getEquipmentSkills(slot, includeModifierSkill = false) {
      if (!this.player.equipment[slot]) {
        return [];
      }
      const skills = includeModifierSkill && this.player.equipmentModifier[slot].skill ? [this.player.equipmentModifier[slot].skill] : [];
      return skills.concat(this.getItemSkills(this.player.equipment[slot], this.player.equipmentModifier[slot].quality));
    },

    // items
    getItemStates(item, quality = 120, level = 80) {
      const skills = this.getItemSkills(item, quality);
      return Equipment.states
        .map(p => {
          return {
            key: p,
            label: Lookup.state[p],
            value: LogicHelper.calculateState(item.EQU[p], level),
            skillValue: this.getSkillEffectTargetValues(skills, Lookup.stateMapSkillEffectTarget[p], 101),
          };
        })
        .filter(p => p.value || p.skillValue);
    },
    getItemDodge(item) {
      if (!this.defaultItemDodgeSkillCache.has(item)) {
        this.defaultItemDodgeSkillCache.set(item, this.getFilteredSkills(this.getItemSkills(item), 8))
      }

      const skills = this.defaultItemDodgeSkillCache.get(item);
      return {
        skills,
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
      };
    },
    getItemCriticalHit(item) {
      if (!this.defaultItemCriticalSkillCache.has(item)) {
        this.defaultItemCriticalSkillCache.set(item, this.getFilteredSkills(this.getItemSkills(item), 9))
      }

      const skills = this.defaultItemCriticalSkillCache.get(item);
      return {
        skills,
        value: skills.reduce((sum, p) => sum + p.effectValue, 0),
      };
    },
    getItemElements(item) {
      if (!this.defaultItemElementSkillCache.has(item)) {
        this.defaultItemElementSkillCache.set(item, this.getItemSkills(item));
      }
      const skills = this.defaultItemElementSkillCache.get(item);
      return Object.entries(Lookup.element)
        .map(([element, label]) => ({
          key: element,
          label,
          value: item.ELM[element],
          skillValue: this.getSkillEffectTargetValues(skills, Lookup.elementMapSkillEffectTarget[element]),
          skills,
        }))
        .filter(p => p.value || p.skillValue);
    },
    getItemSkills(item, quality = 120) {
      const allSkills = item.SPC.filter(p => p.THR <= quality);
      return (allSkills.length ? allSkills[allSkills.length - 1].SKILL : [])
        .map(p => this.skillLookup[p.DF])
        .filter(p => p);
    },

    
    onPickEquipment(slot) {
      return this['onPick' + slot.capitalize()]();
    },
    getEquipmentImage(slot) {
      return this['get' + slot.capitalize() + 'Image']();
    },

    onPickWeapon() {
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerFilterCategory = 20;
      if (this.player.character) {
        this.itemPickerFilterWeaponGen = this.player.character.WEAPON.map(p => p.GEN).filter(p => p);
      }
      this.itemPickerCallback = item => {
        // two handed weapon
        if (item && [3, 4].includes(item.WPN_KIND)) {
          this.player.equipment.shield = null;
        }
        this.player.equipment.weapon = item
      };
      this.itemPickerDialogVisible = true;
    },
    onPickShield() {
      if (this.player.equipment.weapon && [3, 4].includes(this.player.equipment.weapon.WPN_KIND)) {
        return;
      }
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerFilterCategory = 21;
      this.itemPickerCallback = item => this.player.equipment.shield = item;
      this.itemPickerDialogVisible = true;
    },
    onPickHelmet() {
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerFilterCategory = 31;
      this.itemPickerCallback = item => this.player.equipment.helmet = item;
      this.itemPickerDialogVisible = true;
    },
    onPickCloth() {
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerFilterCategory = 32;
      this.itemPickerCallback = item => this.player.equipment.cloth = item;
      this.itemPickerDialogVisible = true;
    },
    onPickAccessory(i) {
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerFilterCategory = 40;
      this.itemPickerCallback = item => this.player.equipment['accessory' + i] = item;
      this.itemPickerDialogVisible = true;
    },
    onPickAccessory1() {
      this.onPickAccessory(1);
    },
    onPickAccessory2() {
      this.onPickAccessory(2);
    },
    onPickAccessory3() {
      this.onPickAccessory(3);
    },

    getWeaponImage() {
      return this.player.equipment.weapon ? 
        `img/icon_s/Texture2D/icon_item_s_${this.player.equipment.weapon.DF}.png` :
        'img/icon/icon_pick_weapon.png';
    },
    getShieldImage() {
      if (this.player.equipment.weapon && [3, 4].includes(this.player.equipment.weapon.WPN_KIND)) {
        return 'img/icon/icon_pick_shield_disabled.png';
      }
      return this.player.equipment.shield ? 
        `img/icon_s/Texture2D/icon_item_s_${this.player.equipment.shield.DF}.png` :
        'img/icon/icon_pick_shield.png';
    },
    getHelmetImage() {
      return this.player.equipment.helmet ? 
        `img/icon_s/Texture2D/icon_item_s_${this.player.equipment.helmet.DF}.png` :
        'img/icon/icon_pick_helmet.png';
    },
    getClothImage() {
      return this.player.equipment.cloth ? 
        `img/icon_s/Texture2D/icon_item_s_${this.player.equipment.cloth.DF}.png` :
        'img/icon/icon_pick_cloth.png';
    },
    getAccessoryImage(i) {
      const name = 'accessory' + i;
      return this.player.equipment[name] ? 
        `img/icon_s/Texture2D/icon_item_s_${this.player.equipment[name].DF}.png` :
        'img/icon/icon_pick_accessory.png';
    },
    getAccessory1Image() {
      return this.getAccessoryImage(1);
    },
    getAccessory2Image() {
      return this.getAccessoryImage(2);
    },
    getAccessory3Image() {
      return this.getAccessoryImage(3);
    },


    // summary
    getSummaryState() {
      const equipmentStates = Object.keys(this.player.equipment).map(slot => ({
        slot,
        values: this.getEquipmentStates(slot),
      }));
      const equipmentDodges = Object.keys(this.player.equipment).map(slot => ({
        slot,
        values: this.getEquipmentDodge(slot),
      }));
      const equipmentCriticalHit = Object.keys(this.player.equipment).map(slot => ({
        slot,
        values: this.getEquipmentCriticalHit(slot),
      }));
      const equipmentElements = Object.keys(this.player.equipment).map(slot => ({
        slot,
        values: this.getEquipmentElements(slot),
      }));
      const equipmentSkills = Object.keys(this.player.equipment).map(slot => ({
        slot,
        skills: this.getEquipmentSkills(slot, true),
      }));


      const supportItemStates = this.getSupportItemStatesSummary();
      const supportElements = this.getSupportItemElementSummary();

      const characterStates = this.getCharacterStates();
      const characterDodge = this.getCharacterDodgeWithDetail();
      const characterCriticalHit = this.getCharacterCriticalHitWithDetail();
      const characterElements =  this.getCharacterElements();
      const characterSkills = this.getCharacterSkills();

      const strengthStates = ['SATK', 'SDEF', 'MATK', 'MDEF'];
      const strength = equipmentStates
      .map(p => p.values.filter(i => strengthStates.includes(i.key)).map(p => p.value))
      .flat()
      .concat(
        supportItemStates.filter(p => strengthStates.includes(p.state)).map(p => p.value)
      )
      .reduce((a, b) => a + b, 0);

      const totalStates = CharacterModifier.states.map(state => ({
        label: Lookup.state[state],
        state,
        value: equipmentStates
        .map(p => p.values.filter(p => p.key === state).reduce((sum, i) => sum + i.value + i.skillValue + i.extraValue, 0))
        .concat(
          characterStates.filter(p => p.state === state).map(p => p.value + p.foodValue + p.skillValue)
        )
        .concat(
          supportItemStates.filter(p => p.state === state).map(p => p.value)
        )
        .reduce((sum, a) => sum + a, 0),
      }));
      const totalDodgeState = characterDodge.value + equipmentDodges.map(p => p.values.value).reduce((sum, a) => sum + a, 0);
      const totalCriticalHitState = characterCriticalHit.value + equipmentCriticalHit.map(p => p.values.value).reduce((sum, a) => sum + a, 0);
      const totalElements = Object.entries(Lookup.element).map(([element, label]) => ({
        element,
        label,
        value: equipmentElements
        .map(i => i.values.find(j => j.key === element))
        .filter(i => i)
        .map(i => i.value + i.skillValue + i.extraValue)
        .flat()
        .concat(characterElements.filter(i => i.key === element).map(i => i.value))
        .concat(
          supportElements.filter(p => p.element === element).map(p => p.value)
        )
        .reduce((a, b) => a + b, 0),
      }));

      const equipmentSkillMultiplierSkills = equipmentSkills.map(slot => ({
        slot: slot.slot,
        skills: this.getFilteredSkills(slot.skills, [], null, [14, 32]),
      })).filter(p => p.skills.length);
      const characterSkillMultiplierSkills = this.getFilteredSkills(characterSkills, [], null, [14, 32]);
      const skillMultiplierSkills = equipmentSkillMultiplierSkills.map(p => p.skills).flat().concat(characterSkillMultiplierSkills);
      const skillMultiplier = {
        equipmentSkillMultiplierSkills,
        characterSkillMultiplierSkills,
        skills: skillMultiplierSkills,
        value: skillMultiplierSkills.reduce((sum, p) => sum + p.effectValue, 0),
      };

      return {
        strength,
        totalStates,
        totalDodgeState,
        totalCriticalHitState,
        totalElements,

        equipmentStates,
        equipmentDodges,
        equipmentCriticalHit,
        equipmentElements,

        equipmentSkills,
        supportItemStates,
        supportElements,

        characterStates,
        characterDodge,
        characterCriticalHit,
        characterElements,
        
        skillMultiplier,
      };
    },


    // import / export
    onImportFromString() {
      const orginalPlayer = this.player;
      if (this.importFromString(this.importString)) {
        this.successNotification();
        this.importDialogVisible = false;
        return;
      }

      // restore if failed to load
      this.player = orginalPlayer;
    },
    importFromLocalStorage() {
      try {
        if (!localStorage) {
          return false;
        }

        const item = localStorage.getItem(SaveConfig.localStorageKey);
        if (item) {
          if (this.importFromString(item)) {
            this.$notify({
              title: 'Success',
              message: 'Import from local storage',
              type: 'success'
            });
            return true;
          }
          localStorage.clear();
          return false;
        }
        return false;
      } catch(e) {
        this.$message.error(e.toString());
        console.error(e);
      }
    },
    importFromSearchParam() {
      const data = new URL(window.location).searchParams.get('i');
      if (data && this.importFromString(data)) {
        this.$notify({
          title: 'Success',
          message: 'Import from url',
          type: 'success'
        });
        return true;
      }
      return false;
    },
    importFromString(str) {
      try {
        const playerExport = JSON.parse(atob(str));
        console.log(playerExport);

        // checking
        if (playerExport.supportIds.length !== playerExport.supportModifier.length) {
          this.$message({
            message: 'Support items modifier length different',
            type: 'warning'
          });
          if (playerExport.supportIds.length > playerExport.supportModifier.length) {
            playerExport.supportModifier.push(Array.from({ length: playerExport.supportIds.length - playerExport.supportModifier.length }, _ => new EquipmentModifier()));
          } else if (playerExport.supportModifier.length > playerExport.supportIds.length) {
            playerExport.supportModifier.length = playerExport.supportIds.length;
          }
        }

        // start mapping
        const newPlayer = new Player();
        if (playerExport.characterId) {
          newPlayer.character = this.characterLookup[playerExport.characterId];
        }
        if (playerExport.equipment.weaponId) {
          newPlayer.equipment.weapon = this.itemLookup[playerExport.equipment.weaponId];
        }
        if (playerExport.equipment.shieldId) {
          newPlayer.equipment.shield = this.itemLookup[playerExport.equipment.shieldId];
        }
        if (playerExport.equipment.helmetId) {
          newPlayer.equipment.helmet = this.itemLookup[playerExport.equipment.helmetId];
        }
        if (playerExport.equipment.clothId) {
          newPlayer.equipment.cloth = this.itemLookup[playerExport.equipment.clothId];
        }
        if (playerExport.equipment.accessory1Id) {
          newPlayer.equipment.accessory1 = this.itemLookup[playerExport.equipment.accessory1Id];
        }
        if (playerExport.equipment.accessory2Id) {
          newPlayer.equipment.accessory2 = this.itemLookup[playerExport.equipment.accessory2Id];
        }
        if (playerExport.equipment.accessory3Id) {
          newPlayer.equipment.accessory3 = this.itemLookup[playerExport.equipment.accessory3Id];
        }
        newPlayer.supportModifier = playerExport.supportModifier;
        newPlayer.characterModifier = playerExport.characterModifier;

        newPlayer.supports = playerExport.supportIds.map(p => this.itemLookup[p]);
        
        for (const [slot, modifier] of Object.entries(playerExport.equipmentModifier)) {
          if (modifier.skillId) {
            newPlayer.equipmentModifier[slot].skill = this.skillLookup[modifier.skillId];
          }
          newPlayer.equipmentModifier[slot].quality = modifier.quality;
          newPlayer.equipmentModifier[slot].level = modifier.level;
        }
        console.log(newPlayer);
        this.player = newPlayer;
        return true;
      } catch (e) {
        this.$message({
          message: 'Failed to import character',
          type: 'warning'
        });
        setTimeout(() => this.$message({
          message: e.toString(),
          type: 'warning'
        }));
        console.error(e);
        this.player = new Player();
        return false;
      }
    },
    getExportString() {
      const playerExport = new PlayerExport();
      if (this.player.character) {
        playerExport.characterId = this.player.character.DF;
      }
      if (this.player.equipment.weapon) {
        playerExport.equipment.weaponId = this.player.equipment.weapon.DF;
      }
      if (this.player.equipment.shield) {
        playerExport.equipment.shieldId = this.player.equipment.shield.DF;
      }
      if (this.player.equipment.helmet) {
        playerExport.equipment.helmetId = this.player.equipment.helmet.DF;
      }
      if (this.player.equipment.cloth) {
        playerExport.equipment.clothId = this.player.equipment.cloth.DF;
      }
      if (this.player.equipment.accessory1) {
        playerExport.equipment.accessory1Id = this.player.equipment.accessory1.DF;
      }
      if (this.player.equipment.accessory2) {
        playerExport.equipment.accessory2Id = this.player.equipment.accessory2.DF;
      }
      if (this.player.equipment.accessory3) {
        playerExport.equipment.accessory3Id = this.player.equipment.accessory3.DF;
      }
      playerExport.supportIds = this.player.supports.map(p => p.DF);


      for (const [slot, modifier] of Object.entries(this.player.equipmentModifier)) {
        if (modifier.skill) {
          playerExport.equipmentModifier[slot].skillId = modifier.skill.id;
        }
        playerExport.equipmentModifier[slot].quality = modifier.quality;
        playerExport.equipmentModifier[slot].level = modifier.level;
      }

      playerExport.characterModifier = this.player.characterModifier;
      playerExport.supportModifier = this.player.supportModifier;
      return btoa(JSON.stringify(playerExport));
    },
    getExportUrl() {
      return `${location.origin}${location.pathname}?i=${this.getExportString()}`;
    },

    // save
    onSave() {
      this.save();
      this.$notify({
        title: 'Success',
        message: 'Saved',
        type: 'success'
      });
    },
    onClear() {
      return this.$confirm('Are you sure to clear everything?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.player = new Player();
        localStorage.clear();
        this.$notify({
          title: 'Success',
          message: 'Cleared player and local data',
          type: 'success'
        });
      });
    },
    save() {
      localStorage.setItem(SaveConfig.localStorageKey, this.getExportString());
      return this;
    },

    // notification
    successNotification() {
      this.$notify({
        title: 'Success',
        message: '',
        type: 'success'
      });
    },

    // helpers
    resetItemPickerFilter() {
      this.itemPickerShowRemoveIcon = true;
      this.itemPickerShowSort = true;

      this.itemPickerFilterCategory = null;
      this.itemPickerFilterKeyword = '';
      this.itemPickerFilterCharacterGender = null;
      this.itemPickerFilterWeaponGen = [];
      this.itemPickerFilterGroupDf = null;
      this.itemPickerCallback = null;
      return this;
    },
    setDefaultItemPickerFilter() {
      if (this.player.character) {
        this.itemPickerFilterCharacterGender = this.player.character.GEN;
        this.itemPickerFilterGroupDf = this.player.character.GROUP_DF;
      }
      return this;
    },

    getNumberSignText(number) {
      return number > 0 ? '+' : '';
    },

    //
    async load() {
      try {
        const [chara, item, skill, abnormalstate, blaze_art] = await Promise.all([
          fetch('export/chara.json').then(p => p.json()),
          fetch('export/item.json').then(p => p.json()),
          fetch('export/skill.json').then(p => p.json()),
          fetch('export/abnormalstate.json').then(p => p.json()),
          fetch('export/blaze_art.json').then(p => p.json()),
        ]);
        this.item = item;
        this.chara = chara;
        this.skill = skill;
        this.abnormalstate = abnormalstate;
        this.blaze_art = blaze_art;

        window.addonSkills = this.addonSkills = this.skill.m_vList.filter(p => 
          p.type === 2 && 
          Equipment.skillTriggers.includes(p.trigger)  &&
          p.name.includes('強化') && 
          !p.name.includes('【') &&
          !p.name.includes('】')
        );
        window.addonSkillsLookUp = this.addonSkillsLookUp = Enumerable.from(this.addonSkills).toObject(p => p.id, p => p);
  
        this.items = this.item.m_vList.filter(p => p.EQU_BRD);
        this.characters = this.chara.m_vList.filter(p => p.SKILL.length);

        // lookups
        this.itemLookup = Enumerable.from(this.items).toObject(p => p.DF, p => p);
        this.characterLookup = Enumerable.from(this.chara.m_vList).toObject(p => p.DF, p => p);
        this.skillLookup = Enumerable.from(this.skill.m_vList).toObject(p => p.id, p => p);
        this.abnormalStateLookup = Enumerable.from(this.abnormalstate.m_vList).toObject(p => p.id, p => p);
        this.characterGroupDfLookup = Enumerable.from(this.characters).groupBy(p => p.GROUP_DF).toObject(p => p.key(), p => p.toArray());
        this.blazeArtLookup = Enumerable.from(this.blaze_art.m_vList).toObject(p => p.DF, p => p);

        if (this.importFromSearchParam() || this.importFromLocalStorage()) {
          // load success
        }
        this.pageLoading = false;
      } catch (e) {
        this.$message.error({
          message: e.toString(),
          duration: 0,
          showClose: true,
        });
      }
    },
  },
  mounted() {
    this.load();
  },
});
