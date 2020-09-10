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
    WIND: [23, 27],
    EARTH: [24, 27],
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
    const baseValue = ((gmrb.M - gmrb.B)/gmrb.R);
    return Math.floor(baseValue * lv + gmrb.B);
  }
  static calculateSupportState(value) {
    return Math.round(value * .05);
  }
}

class Equipment {
  static states = ['SATK', 'SDEF', 'MATK', 'MDEF', 'SPD'];
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
  static states = ['HP'].concat(Equipment.states);

  level = 80;
  foodLevel = 80;
  blazeArtLevel = 5;
}

class EquipmentModifier {
  level = 80;
  quality = 100;
  skill;

  set skillId(id) {
    this.skill = window.addonSkills.find(p => p.id === id);
  }

  get skillId() {
    return this.skill ? this.skill.id : null;
  }
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

Vue.mixin({
  data: function() {
    return {
      Lookup,
      CharacterModifier,
    };
  },
});


new Vue({
  el: '#app',
  data: {
    // data
    chara: null,
    item: null,
    skill: null,

    // processed data
    items: [],
    characters: [],

    skillLookup: {},
    addonSkills: [],
    
    selectItems: [],

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
    ].concat(Object.entries(Lookup.element).map(p => ({
      label: p[1],
      value: p[0],
    }))),
    itemPickerShowRemoveIcon: true,
    itemPickerShowSort: null,
    itemPickerSort: null,
    itemPickerDialogVisible: false,
    itemPickerFilterCategory: null,
    itemPickerFilterKeyword: '',
    itemPickerFilterCharacterGender: null, // gen_id, EQU_GND
    itemPickerFilterWeaponGen: [], // [gen_id], GEN
    itemPickerFilterGroupDf: null,
    itemPickerCallback: null, // (item: unknown?) => void

    supportItemEditDialogVisible: false,
    supportItemSelected: null,
    

    // data
    player: new Player(),
  },
  methods: {
    // global helper
    getFilteredSkills(skills, effectTargets = [], effect = null, triggers = []) {
      if (!Array.isArray(effectTargets)) {
        effectTargets = [effectTargets];
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
    getFilteredItemPickerItems() {
      const items = this.items.filter(p => 
        (!this.itemPickerFilterCategory || this.itemPickerFilterCategory === p.CATEG) &&
        (!this.itemPickerFilterKeyword || p.NAME.toLowerCase().includes(this.itemPickerFilterKeyword.toLowerCase()) || p.DF === +this.itemPickerFilterKeyword) && 
        (!this.itemPickerFilterCharacterGender || p.EQU_GND.some(i => !i.GEN) || p.EQU_GND.filter(i => i.ENB).some(i => i.GEN === this.itemPickerFilterCharacterGender)) &&
        (!this.itemPickerFilterWeaponGen.length || this.itemPickerFilterWeaponGen.includes(p.GEN)) &&
        (!this.itemPickerFilterGroupDf || !p.GROUP_DF || this.itemPickerFilterGroupDf === p.GROUP_DF)
      );

      if (this.itemPickerSort) {
        if (this.itemPickerSort in Lookup.state) {
          items.sort((a, b) => LogicHelper.calculateState(b.EQU[this.itemPickerSort], 80) - LogicHelper.calculateState(a.EQU[this.itemPickerSort], 80));
        } else if (this.itemPickerSort in Lookup.element) {
          items.sort((a, b) => b.ELM[this.itemPickerSort] - a.ELM[this.itemPickerSort]);
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
      this.itemPickerShowSort = true;
      this.itemPickerCallback = item => this.supportItemSelected = item;
      if (!this.supportItemSelected) {
        this.supportItemSelected = this.items[0];
      }
      this.supportItemEditDialogVisible = true;
    },
    onAddSupportItem() {
      this.player.supports.push(this.supportItemSelected);
      this.player.supportModifier.push(new EquipmentModifier());
    },
    onRemoveSupportItem(i) {
      this.player.supports.splice(i, 1);
      this.player.supportModifier.splice(i, 1);
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

    // character picker
    getCharacterImage(character = null) {
      character = character || this.player.character;
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

        const skills = this.getFilteredSkills(this.getCharacterSkills(), Lookup.stateMapSkillEffectTarget[state]);

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

    onPickCharacter(character = null) {
      if (this.player.character && character && this.player.character.DF === character.DF) {
        character = null;
      }
      this.player.character = character;
    },

    // equipment
    getEquipmentStates(slot) {
      if (!this.player.equipment[slot]) {
        return [];
      }

      const skills = this.getEquipmentSkills(slot);
      return Equipment.states
        .filter(p => this.player.equipment[slot].EQU[p])
        .map(p => {
          return {
            key: p,
            label: Lookup.state[p],
            value: LogicHelper.calculateState(this.player.equipment[slot].EQU[p], this.player.equipmentModifier[slot].level),
            skillValue: this.getSkillEffectTargetValues(skills, Lookup.stateMapSkillEffectTarget[p]),
            extraValue: this.player.equipmentModifier[slot].skill ?
            this.getSkillEffectTargetValues([this.player.equipmentModifier[slot].skill], Lookup.elementMapSkillEffectTarget[p]) :
            0,
          };
        })
        .filter(p => p.value + p.skillValue + p.extraValue);
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
        .filter(p => this.player.equipment[slot].ELM[p[0]])
        .map(p => ({
          key: p[0],
          label: p[1],
          value: this.player.equipment[slot].ELM[p[0]],
          skillValue: 0, //this.getSkillEffectTargetValues(skills, Lookup.elementMapSkillEffectTarget[p]),
          extraValue: this.player.equipmentModifier[slot].skill ?
          this.getSkillEffectTargetValues([this.player.equipmentModifier[slot].skill], Lookup.elementMapSkillEffectTarget[p]) :
          0,
          skills,
        }))
        .filter(p => p.value + p.skillValue + p.extraValue);
    },
    getEquipmentSkills(slot) {
      if (!this.player.equipment[slot]) {
        return [];
      }

      const allSkills = this.player.equipment[slot].SPC.filter(p => p.THR <= this.player.equipmentModifier[slot].quality);
      return (allSkills.length ? allSkills[allSkills.length - 1].SKILL : [])
        .map(p => this.skillLookup[p.DF]);
    },

    onPickWeapon() {
      this.resetItemPickerFilter().setDefaultItemPickerFilter();
      this.itemPickerFilterCategory = 20;
      if (this.player.character) {
        this.itemPickerFilterWeaponGen = this.player.character.WEAPON.map(p => p.GEN).filter(p => p);
      }
      this.itemPickerCallback = item => this.player.equipment.weapon = item;
      this.itemPickerDialogVisible = true;
    },
    onPickShield() {
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

    getWeaponImage() {
      return this.player.equipment.weapon ? 
        `img/icon_s/Texture2D/icon_item_s_${this.player.equipment.weapon.DF}.png` :
        'img/icon/icon_pick_weapon.png';
    },
    getShieldImage() {
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
      const equipmentSkills = Object.keys(this.player.equipment).map(this.getEquipmentSkills.bind(this)).flat();

      const supportItemStates = this.getSupportItemStatesSummary();
      const supportElements = this.getSupportItemElementSummary();

      const characterStates = this.getCharacterStates();
      const characterDodge = this.getCharacterDodgeWithDetail();
      const characterCriticalHit = this.getCharacterCriticalHitWithDetail();
      const characterElements =  this.getCharacterElements();
      const characterSkills = this.getCharacterSkills();

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

      const skillMultiplier = this.getSkillEffectTargetValues(equipmentSkills.concat(characterSkills), 10);

      return {
        totalStates,
        totalDodgeState,
        totalCriticalHitState,
        totalElements,

        equipmentStates,
        equipmentDodges,
        equipmentCriticalHit,

        characterStates,
        characterDodge,
        characterCriticalHit,
        
        skillMultiplier,
      };
    },


    // helpers
    resetItemPickerFilter() {
      this.itemPickerShowRemoveIcon = true;
      this.itemPickerShowSort = false;
      this.itemPickerSort = null;
  
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
        this.itemPickerFilterCharacterGender = this.player.character;
        this.itemPickerFilterGroupDf = this.player.character.GROUP_DF;
      }
      return this;
    },

    //
    async load() {
      try {
        const [chara, item, skill] = await Promise.all([
          fetch('export/chara.json').then(p => p.json()),
          fetch('export/item.json').then(p => p.json()),
          fetch('export/skill.json').then(p => p.json()),
        ]);
        this.item = item;
        this.chara = chara;
        this.skill = skill;

        window.addonSkills = this.addonSkills = this.skill.m_vList.filter(p => p.type === 2 && Equipment.skillTriggers.includes(p.trigger));
        this.items = this.item.m_vList.filter(p => p.EQU_BRD);
        this.characters = this.chara.m_vList.filter(p => p.SKILL.length);

        this.skillLookup = Enumerable.from(this.skill.m_vList).toObject(p => p.id, p => p);
        this.selectItems = this.items.map(p => ({
          label: `${p.NAME} (LV 80) DF=${p.DF}`,
          value: p.DF,
        }));
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
