Vue.component('v-select', VueSelect.VueSelect);

new Vue({
  el: '#app',
  data: {
    // data
    chara: null,
    item: null,

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
  },
  methods: {
    // event
    onChangeCharacter(value) {
      this.equipment.character = value ? value.value : 0;
    },

    // main items
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

    // action
    addEquipment() {
      if (this.selectedSupportEquipment) {
        this.equipment.supports.push(this.selectedSupportEquipment.value);
      }
    },
    removeEquipmentSupport(i) {
      this.equipment.supports.splice(i, 1);
    },

    //
    getState(type) {
      let characterState = 0;
      if (this.equipment.character) {
        const chara = this.chara.m_vList.find(p => p.DF === this.equipment.character);
        characterState += this.calculateState(chara.SPEC[type], 80) + chara.FDM[chara.FDM.length - 1][type];
      }

      const itemEquipmentState = ['weapon', 'shield', 'head', 'body', 'accessory1', 'accessory3', 'accessory3']
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
      return [];
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




    getFilteredPickItems() {
      console.log(this.pickItemFilter);
      return this.items.filter(p => 
        (!this.pickItemFilter.category || p.CATEG === this.pickItemFilter.category) &&
        (!this.pickItemFilter.weaponGen.length || this.pickItemFilter.weaponGen.includes(p.GEN))
      );
    },

    //
    resetPickItemFilter() {
      this.pickItemFilter = {
        category: null,
        weaponGen: [],
      };
    },
    //
    calculateState(gmrb, lv = 1) {
      const baseValue = ((gmrb.M - gmrb.B)/gmrb.R);
      return Math.floor(baseValue * lv + gmrb.B);
    },
    async load() {
      const [chara, item] = await Promise.all([
        fetch('export/chara.json').then(p => p.json()),
        fetch('export/item.json').then(p => p.json()),
      ]);
      this.item = item;
      this.chara = chara;
  
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
