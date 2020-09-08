Vue.component('v-select', VueSelect.VueSelect);
Vue.use(VTooltip)

class LogicHelper {
  static calculateState(gmrb, lv = 1) {
    const baseValue = ((gmrb.M - gmrb.B)/gmrb.R);
    return Math.floor(baseValue * lv + gmrb.B);
  }
  static calculateSupportState(value) {
    return Math.round(value * .05);
  }
}

class Option {
  static stateLookUp = {
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

  static elementLookUp = {
    FIRE: '火',
    WATER: '水',
    WIND: '風',
    EARTH: '土',
    LIGHT: '光',
    DARK: '闇',
  };
}

new Vue({
  el: '#app',
  data: {
    // data
    chara: null,
    item: null,
    skill: null,

    // processed data
    items: [],

    selectItems: [],
    charas: [],

    // view data
    // dialog
    pickItemDialogVisible: false,
    pickItemFilter: {
      category: null,
      weaponGen: [],
    },
    pickItemDialogTarget: '',

    //
    selectedSupportEquipment: '',

    equipmentSlots: ['weapon', 'shield', 'head', 'body', 'accessory1', 'accessory2', 'accessory3'],
    equipment: {
      character: 0,
    
      weapon: null,
      shield: null,
      head: null,
      body: null,
    
      accessory1: null,
      accessory2: null,
      accessory3: null,
  
      supports: [],
    },
    equipmentModifier: {
      weapon: {
        lv: null,
        effect: null,
      },
      shield: {
        lv: null,
        effect: null,
      },
      head: {
        lv: null,
        effect: null,
      },
      body: {
        lv: null,
        effect: null,
      },
    
      accessory1: {
        lv: null,
        effect: null,
      },
      accessory2: {
        lv: null,
        effect: null,
      },
      accessory3: {
        lv: null,
        effect: null,
      },
    },
  },
  methods: {
    // event
    onChangeCharacter(value) {
      this.equipment.character = value ? value.value : 0;
    },

    // pick items
    onPickWeapon() {
      this.resetPickItemFilter();
      this.$set(this.pickItemFilter, 'category', 20);
      if (this.equipment.character) {
        const chara = this.chara.m_vList.find(p => p.DF === this.equipment.character)
        if (chara.WEAPON.some(p => p.GEN)) {
          this.$set(this.pickItemFilter, 'weaponGen', chara.WEAPON.map(p => p.GEN));
        }
      }
      this.pickItemDialogTarget = 'weapon';
      this.pickItemDialogVisible = true;
    },
    onPickShield() {
      this.resetPickItemFilter();
      this.$set(this.pickItemFilter, 'category', 21);
      this.pickItemDialogTarget = 'shield';
      this.pickItemDialogVisible = true;
    },
    onPickHead() {
      this.resetPickItemFilter();
      this.$set(this.pickItemFilter, 'category', 31);
      this.pickItemDialogTarget = 'head';
      this.pickItemDialogVisible = true;
    },
    onPickBody() {
      this.resetPickItemFilter();
      this.$set(this.pickItemFilter, 'category', 32);
      this.pickItemDialogTarget = 'body';
      this.pickItemDialogVisible = true;
    },
    onPickAccessory(slot) {
      this.resetPickItemFilter();
      this.$set(this.pickItemFilter, 'category', 40);
      this.pickItemDialogTarget = `accessory${slot}`;
      this.pickItemDialogVisible = true;
    },

    onPickItem(item) {
      this.$set(this.equipment, this.pickItemDialogTarget, item.DF);
      this.pickItemDialogVisible = false;
    },
    onRemoveCurrentItem() {
      this.$set(this.equipment, this.pickItemDialogTarget, null);
      this.pickItemDialogVisible = false;
    },

    getFilteredPickItems() {
      if (!this.chara) {
        return [];
      }

      const character = this.chara.m_vList.find(p => p.DF === this.equipment.character);
      return this.items.filter(p => 
        (!this.pickItemFilter.category || p.CATEG === this.pickItemFilter.category) &&
        (!this.pickItemFilter.weaponGen.length || this.pickItemFilter.weaponGen.includes(p.GEN)) && 
        (!character || !p.GROUP_DF || character.GROUP_DF === p.GROUP_DF) && 
        (!character || !p.EQU_GND.length || p.EQU_GND.some(i => !i.GEN) || p.EQU_GND.filter(i => i.ENB).map(i => i.GEN).includes(character.GEN))
      );
    },
    resetPickItemFilter() {
      this.pickItemFilter = {
        category: null,
        weaponGen: [],
      };
    },

    addEquipment() {
      if (this.selectedSupportEquipment) {
        this.equipment.supports.push(this.selectedSupportEquipment.value);
      }
    },
    removeEquipmentSupport(i) {
      this.equipment.supports.splice(i, 1);
    },

    // get items
    getItemStates(df) {
      if (!this.item || !df) {
        return 0;
      }
      const item = this.item.m_vList.find(i => i.DF === df);
      return Object.keys(Option.stateLookUp)
      .filter(p => item.EQU[p])
      .map(p => ({
        label: Option.stateLookUp[p],
        value: this.calculateState(item.EQU[p], 80),
      }))
      .filter(p => p.value);
    },
    getItemElements(df) {
      if (!this.item || !df) {
        return [];
      }
      const item = this.item.m_vList.find(i => i.DF === df);
      return Object.entries(item.ELM).filter(p => p[1]).map(p =>({
        label: Option.elementLookUp[p[0]],
        value: p[1],
      }));
    },
    getItemSkills(df) {
      if (!this.item || !df) {
        return [];
      }
      const item = this.item.m_vList.find(i => i.DF === df);
      if (!item.SPC.length) {
        return [];
      }
      return item.SPC[item.SPC.length - 1].SKILL.map(p => this.skill.m_vList.find(i => i.id === p.DF));
    },

    // get single
    getSpeed() {
      let characterSpeed = 0;
      if (this.equipment.character) {
        const character = this.chara.m_vList.find(p => p.DF === this.equipment.character);
        const skills = character.SKILL.map(p => this.skill.m_vList.find(i => i.id === p.DF));
        const overrideIds = skills.map(p => p.overrideID);
        characterSpeed += skills
          .filter(p => !overrideIds.includes(p.id) && p.effectTarget === 6)
          .map(p => p.effectValue)
          .reduce((a, b) => a + b, 0);

        characterSpeed += this.calculateState(character.SPEC.SPD, 80);
      }

      const itemSpeed = this.equipmentSlots
      .map(p => this.equipment[p])
      .filter(p => p)
      .map(df =>this.item.m_vList.find(p => p.DF === df))
      .map(p => this.calculateState(p.EQU.SPD, 80))
      .reduce((a, b) => a + b, 0);

      const skillSpeed = this.equipmentSlots
        .map(p => this.equipment[p])
        .filter(p => p)
        .map(df =>this.item.m_vList.find(p => p.DF === df))
        .filter(p => p.SPC.length)
        .map(p => p.SPC[p.SPC.length - 1].SKILL)
        .flat()
        .map(p => this.skill.m_vList.find(i => i.id === p.DF))
        .filter(skill => skill.effectTarget === 6)
        .map(skill => skill.effectValue)
        .reduce((a, b) => a + b, 0);

      return characterSpeed + itemSpeed + skillSpeed;
    },
    getDodge() {
      const dodges = this.equipmentSlots
        .map(p => this.equipment[p])
        .filter(df => df)
        .map(df => this.item.m_vList.find(p => p.DF === df))
        .map(item => this.getDodgeValueFromItem(item));
      return dodges.reduce((a, b) => a + b, 0);
    },
    getDodgeValueFromItem(item) {
      if (!item.SPC.length) {
        return 0;
      }

      return item.SPC[item.SPC.length - 1].SKILL
        .map(p => this.skill.m_vList.find(i => i.id === p.DF))
        .filter(p => p.effectTarget === 8)
        .map(p => p.effectValue)
        .reduce((a, b) => a + b, 0);
    },

    getCriticalHitRate() {
      let characterCriticalHitRate = 0;
      if (this.equipment.character) {
        const character = this.chara.m_vList.find(p => p.DF === this.equipment.character);
        const skills = character.SKILL.map(p => this.skill.m_vList.find(i => i.id === p.DF));
        const overrideIds = skills.map(p => p.overrideID);
        console.log(skills);
        characterCriticalHitRate += skills
          .filter(p => !overrideIds.includes(p.id) && p.effectTarget === 9)
          .map(p => p.effectValue)
          .reduce((a, b) => a + b, 0);
      }

      const itemCriticalHitRate = this.equipmentSlots
      .map(p => this.equipment[p])
      .filter(p => p)
      .map(df =>this.item.m_vList.find(p => p.DF === df))
      .filter(p => p.SPC.length)
      .map(p => p.SPC[p.SPC.length - 1].SKILL)
      .flat()
      .map(p => this.skill.m_vList.find(i => i.id === p.DF))
      .filter(skill => skill.effectTarget === 9)
      .map(skill => skill.effectValue)
      .reduce((a, b) => a + b, 0);

      return characterCriticalHitRate + itemCriticalHitRate;
    },

    getSkillScale() {
       return 1;
    },    

    getState(type) {
      let characterState = 0;
      if (this.equipment.character) {
        const chara = this.chara.m_vList.find(p => p.DF === this.equipment.character);
        characterState += this.calculateState(chara.SPEC[type], 80) + chara.FDM[chara.FDM.length - 1][type];
      }

      const itemEquipmentState = this.equipmentSlots
        .map(p => this.equipment[p])
        .filter(p => p)
        .map(p => this.item.m_vList.find(i => i.DF === p))
        .map(p => p.EQU[type] ? this.calculateState(p.EQU[type], 80) : 0)
        .reduce((a, b) => a + b, 0);

      const supportState = this.equipment.supports
          .map(p => this.item.m_vList.find(i => i.DF === p))
          .map(p => p.EQU[type] ? this.calculateState(p.EQU[type], 80) : 0)
          .reduce((a, b) => a + b, 0) * 0.05;

      return Math.round(characterState + itemEquipmentState + supportState);
    },
    getElements() {
      const element = {};
      const elements = this.equipmentSlots
      .map(p => this.equipment[p])
      .filter(p => p)
      .map(df =>this.item.m_vList.find(p => p.DF === df))
      .map(item => Object.entries(item.ELM));
      for (const each of elements) {
        for (const [k, v] of each) {
          element[k] = element[k] || 0;
          element[k] += v;
        }
      }
      return Object.entries(element).map(p => ({
        label: Option.elementLookUp[p[0]],
        value: p[1],
      }));
    },
    getSelectedCharacterImage() {
      return `img/chara/Texture2D/icon_chara_all_${this.equipment.character.toString().padStart(4, '0')}_00.png`;
    },
    getSelectedCharacter() {
      return this.chara.m_vList.find(p => p.DF === this.equipment.character);
    },

    getWeaponImage() {
      if (!this.equipment.weapon) {
        return 'img/icon/icon_pick_weapon.png';
      }
      return `img/icon_s/Texture2D/icon_item_s_${this.equipment.weapon}.png`;
    },
    getShieldImage() {
      if (!this.equipment.shield) {
        return 'img/icon/icon_pick_shield.png';
      }
      return `img/icon_s/Texture2D/icon_item_s_${this.equipment.shield}.png`;
    },
    getHeadImage() {
      if (!this.equipment.head) {
        return 'img/icon/icon_pick_head.png';
      }
      return `img/icon_s/Texture2D/icon_item_s_${this.equipment.head}.png`;
    },
    getBodyImage() {
      if (!this.equipment.body) {
        return 'img/icon/icon_pick_body.png';
      }
      return `img/icon_s/Texture2D/icon_item_s_${this.equipment.body}.png`;
    },
    getAccessoryImage(slot) {
      const name = 'accessory' + slot;
      if (!this.equipment[name]) {
        return 'img/icon/icon_pick_accessory.png';
      }
      return `img/icon_s/Texture2D/icon_item_s_${this.equipment[name]}.png`;
    },


    //
    calculateState(gmrb, lv = 1) {
      return LogicHelper.calculateState(gmrb, lv);
    },
    async load() {
      const [chara, item, skill] = await Promise.all([
        fetch('export/chara.json').then(p => p.json()),
        fetch('export/item.json').then(p => p.json()),
        fetch('export/skill.json').then(p => p.json()),
      ]);
      this.item = item;
      this.chara = chara;
      this.skill = skill;
  
      this.items = this.item.m_vList.filter(p => p.EQU_BRD);
      this.selectItems = this.items.map(p => ({
        label: `${p.NAME} (LV 80) DF=${p.DF}`,
        value: p.DF,
      }));
      this.charas = this.chara.m_vList.filter(p => p.SKILL.length).map(p => ({
        label: `${p.NAME} DF=${p.DF}`,
        value: p.DF,
      }));
    },
  },
  mounted() {
    this.load();
  },
});
