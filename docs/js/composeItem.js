ELEMENT.locale(ELEMENT.lang.en);

Vue.use(VTooltip);


class Lookup {
  static itemCategory = {
    0: 'none',
    11: '材料',
    12: '攻撃＆探索',
    13: '攻撃',
    14: '能力上昇',
    15: '探索',
    16: '料理',

    // 17: 'Unique'

    20: '武器',
    21: '盾',
    31: '頭裝備',
    32: '体裝備',
    40: 'アクセサリー',
    50: '経験値',
    51: '武器強化',
    52: '防具強化',
    53: 'アクセ強化',
    54: '限界突破',
    55: '万能強化',
    56: 'ブレイズアーツ経験値',
  };
}

new Vue({
  el: '#app',
  data: {
    // data
    item: null,
    skill: null,
    abnormalState: null,

    // processed data
    items: [],
    itemCategories: [],

    // state
    composeLoading: true,

    pickItemDialogVisible: false,
    itemPickerFilterCategory: null,
    itemPickerFilterKeyword: '',

    // export
    exportComposeItemUrlVisible: false,

    //
    materialOptions: [], // { quality: 1, addOnQuality: 1 }
    materials: [], 
    compose: null,
  },
  methods: {
    // dialog
    onPickItem(item, quality = 10, addOnQuality = 0) {
      quality = _.clamp(quality || 10, 1, 100);
      addOnQuality = _.clamp(addOnQuality || 0, 0, 15);

      this.compose = item;
      const items = item.RSP.map(p => {
        const _item = this.item.m_vList.find(i => i.DF === p.DF);
        return new Array(p.NC).fill(_item);
      }).flat();
      this.materialOptions = Array.from({length: items.length}, p => ({ quality, addOnQuality }));
      this.materials = items;
      this.pickItemDialogVisible = false;
    },
    getFilteredItemPickerItems() {
      return this.items.filter(p =>
        (!this.itemPickerFilterKeyword || p.NAME.includes(this.itemPickerFilterKeyword) || p.DF.toString().includes(this.itemPickerFilterKeyword)) &&
        (!this.itemPickerFilterCategory || p.CATEG === this.itemPickerFilterCategory)
      );
    },

    // compose target
    onPickItemOpen() {
      this.pickItemDialogVisible = true;
    },
    getPickedItem() {
      if (!this.compose) {
        return {};
      }
      return this.compose;
    },
    getPickedItemUrl() {
      if (!this.compose) {
        return '';
      }
      return `img/icon_s/Texture2D/icon_item_s_${this.compose.DF}.png`;
    },
    getPickedItemSkills() {
      if (!this.compose) {
        return [];
      }
      const quality = this.getQuality();
      const filteredSkills = this.compose.SPC.filter(p => p.THR <= quality);
      if (!filteredSkills.length) {
        return [];
      }
      filteredSkills.sort((a, b) => a.THR - b.THR);
      return filteredSkills[filteredSkills.length - 1].SKILL
      .map(p => this.skill.m_vList.find(i => i.id === p.DF))
      .filter(p => p);
    },
    getQuality() {
      if (!this.materialOptions.length) {
        return 0;
      }

      const sumQuality = this.materialOptions.reduce((sum, p) => sum + p.quality, 0);
      const addOnQuality = this.materialOptions.reduce((sum, p) => sum + p.addOnQuality, 0);
      return _.clamp(Math.floor((sumQuality / this.materialOptions.length) + addOnQuality), 1, 100);
    },

    getAbnormalState(id) {
      return this.abnormalState.m_vList.find(p => p.id === id);
    },
    
    // export
    getExportUrl() {
      return `${location.origin}${location.pathname}?df=${this.compose.DF}&materialOptions=${btoa(JSON.stringify(this.materialOptions))}`;
    },

    //
    async load() {
      const [item, skill, abnormalState] = await Promise.all([
        fetch('export/item.json').then(p => p.json()),
        fetch('export/skill.json').then(p => p.json()),
        fetch('export/abnormalstate.json').then(p => p.json())
      ]);
      this.item = item;
      this.skill = skill;
      this.abnormalState = abnormalState;
      this.items = this.item.m_vList.filter(p => p.RSP.length);
      this.items.sort((a, b) => a.CATEG - b.CATEG);
      this.itemCategories = [... new Set(this.items.map(p => p.CATEG))].map(p => ({
        label: Lookup.itemCategory[p],
        value: p,
      }));

      this.composeLoading = false;
      if (this.tryPickItemFromSearchParams()) {
        return;
      }

      this.onPickItem(this.items[0]);
    },
    tryPickItemFromSearchParams() {
      const searchParams = new URL(window.location).searchParams;
      const df = +searchParams.get('df');
      if (!df) {
        return false;
      }
      const item = this.items.find(p => p.DF === df);
      if (!item) {
        return false;
      }

      try {
        const materialOptionString = searchParams.get('materialOptions');
        if (materialOptionString) {
          const materialOptions = JSON.parse(atob(materialOptionString));
          this.onPickItem(item);
          console.log(materialOptions)
          // make sure the param is correct
          for (const [i, materialOption] of this.materialOptions.entries()) {
            const thatOption = materialOptions[i] || materialOption;
            materialOption.quality = thatOption.quality || materialOption.quality;
            materialOption.addOnQuality = thatOption.addOnQuality || materialOption.addOnQuality;
          }
          return true;
        }
      } catch (e) {
        console.error(e);
      }

      const quality = +searchParams.get('quality');
      this.onPickItem(item, quality);
      return true;
    }
  },
  mounted() {
    this.load();
  },
});
