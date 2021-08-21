(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Items"],{1273:function(e,t,a){},"3d81":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("カテゴリー")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.categoryOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("武器種類")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:"",disabled:!e.enableWeaponKindFilter},model:{value:e.weaponKind,callback:function(t){e.weaponKind=t},expression:"weaponKind"}},e._l(e.weaponKindOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("攻撃属性")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.battleElement,callback:function(t){e.battleElement=t},expression:"battleElement"}},e._l(Object.entries(e.dataManager.lookup.EBattleElementKind),(function(t){var l=t[0],s=t[1];return a("el-option",{key:l,attrs:{label:e.$t(s),value:+l}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("スキル属性")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.skillElement,callback:function(t){e.skillElement=t},expression:"skillElement"}},e._l(Object.entries(e.dataManager.lookup.EBattleElementKind),(function(t){var l=t[0],s=t[1];return a("el-option",{key:l,attrs:{label:e.$t(s),value:+l}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("性別")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.genderOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("ソート")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レジェンドレシピ")))]),a("el-switch",{model:{value:e.legendRecipe,callback:function(t){e.legendRecipe=t},expression:"legendRecipe"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("専用装備")))]),a("el-switch",{model:{value:e.characterOnlyItem,callback:function(t){e.characterOnlyItem=t},expression:"characterOnlyItem"}})],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(t){e.has=t},expression:"has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),e.waitForReset?e._e():a("div",{staticClass:"items"},e._l(e.filteredItems,(function(t){return a("router-link",{key:t.DF,attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("el-card",{staticClass:"item"},[a("h3",[e._v(e._s(t.NAME))]),a("img",{staticClass:"item__image",attrs:{src:t.icon,alt:t.NAME}})])],1)})),1)])},s=[],i=a("ade3"),n=(a("5319"),a("9ab4")),r=a("2fe1"),c=a("5935"),o=a("6b98"),u=a("f015");class d extends o["a"]{constructor(...e){super(...e),Object(i["a"])(this,"category",void 0),Object(i["a"])(this,"weaponKind",void 0),Object(i["a"])(this,"battleElement",void 0),Object(i["a"])(this,"skillElement",void 0),Object(i["a"])(this,"gender",void 0),Object(i["a"])(this,"name",void 0),Object(i["a"])(this,"sort",void 0),Object(i["a"])(this,"legendRecipe",void 0),Object(i["a"])(this,"characterOnlyItem",void 0),Object(i["a"])(this,"has",void 0)}}let h=class extends d{constructor(...e){super(...e),Object(i["a"])(this,"waitForReset",!0)}get categoryOptions(){return Object.keys(this.dataManager.itemsByCategory).map(e=>({label:this.$t(this.dataManager.lookup.itemCategory[e]),value:+e}))}get weaponKindOptions(){return Object.keys(this.dataManager.itemsByWeaponKind).map(e=>({label:this.$t(this.dataManager.lookup.weaponKind[e]),value:+e})).filter(e=>e.value)}get genderOptions(){return[{label:"♂",value:u["p"].Human_Male},{label:"♀",value:u["p"].Human_Female}]}get sortOptions(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}get enableWeaponKindFilter(){return!this.category||this.dataManager.itemsWeaponKindCategories.includes(this.category)}get hasFilter(){return[{label:this.$t("材料"),value:1},{label:this.$t("調合"),value:2},{label:this.$t("フィールド用"),value:3},{label:this.$t("クエスト調合/採取"),value:4},{label:this.$t("クエスト納品"),value:5},{label:this.$t("クエスト報酬"),value:6},{label:this.$t("トレジャー"),value:7},{label:this.$t("食事"),value:8}]}get items(){return this.category?this.dataManager.itemsByCategory[this.category]:null!==this.sort?this.dataManager.item.m_vList:this.dataManager.itemsOrderByCategory}get filteredItems(){this.enableWeaponKindFilter||(this.weaponKind=null);const e=this.items.filter(e=>{var t,a,l;return(!this.weaponKind||e.WPN_KIND===this.weaponKind)&&([null,"",-1].includes(this.battleElement)||(null!==(t=null===(a=e.elementChangeSkill)||void 0===a?void 0:a.effectValue)&&void 0!==t?t:0)===this.battleElement)&&([null,"",-1].includes(this.skillElement)||(null===(l=e.getAttackSkill())||void 0===l?void 0:l.element)===this.skillElement)&&(!this.name||e.DF===+this.name||e.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))&&(!this.legendRecipe||e.LRCP_CHARA.length)&&(!this.characterOnlyItem||e.GROUP_DF)&&(!this.has.includes(1)||this.dataManager.itemsByRecipe[e.DF])&&(!this.has.includes(2)||e.RSP.length)&&(!this.has.includes(3)||this.dataManager.fieldItemById[e.DF])&&(!this.has.includes(4)||this.dataManager.questsByGetItem[e.DF])&&(!this.has.includes(5)||this.dataManager.questsByDeliverItem[e.DF])&&(!this.has.includes(6)||this.dataManager.questsByRewardItem[e.DF])&&(!this.has.includes(7)||this.dataManager.api.huntInfosByItemId[e.DF])&&(!this.has.includes(8)||this.dataManager.characterMealItemDfs.includes(e.DF))&&(!this.gender||e.canGenderUseEquipment(this.gender))});return 1===this.sort?e.reverse():e}async beforeMount(){this.$route.query.category&&(await this.$store.dispatch("itemsFilter/reset"),this.category=+this.$route.query.category,this.$router.replace({query:{...this.$route.query,category:void 0}})),this.waitForReset=!1}};h=Object(n["b"])([Object(r["b"])({components:{},computed:{...Object(c["b"])("itemsFilter",["category","weaponKind","battleElement","skillElement","gender","name","sort","legendRecipe","characterOnlyItem","has"])}})],h);var v=h,b=v,p=(a("83fc"),a("2877")),m=Object(p["a"])(b,l,s,!1,null,"223e2c22",null);t["default"]=m.exports},"83fc":function(e,t,a){"use strict";a("1273")}}]);