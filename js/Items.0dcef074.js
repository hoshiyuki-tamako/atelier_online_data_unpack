(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Items"],{"21b1":function(e,t,a){"use strict";a("dd71")},"3d81":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("カテゴリー")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.categoryOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("武器種類")))]),a("el-select",{attrs:{clearable:"",filterable:"",disabled:!e.enableWeaponKindFilter},model:{value:e.weaponKind,callback:function(t){e.weaponKind=t},expression:"weaponKind"}},e._l(e.weaponKindOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("攻撃属性")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.battleElement,callback:function(t){e.battleElement=t},expression:"battleElement"}},e._l(Object.entries(e.dataManager.lookup.EBattleElementKind),(function(t){var l=t[0],n=t[1];return a("el-option",{key:l,attrs:{label:e.$t(n),value:+l}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("スキル属性")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.skillElement,callback:function(t){e.skillElement=t},expression:"skillElement"}},e._l(Object.entries(e.dataManager.lookup.EBattleElementKind),(function(t){var l=t[0],n=t[1];return a("el-option",{key:l,attrs:{label:e.$t(n),value:+l}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("性別")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.genderOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("ソート")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レジェンドレシピ")))]),a("el-switch",{model:{value:e.legendRecipe,callback:function(t){e.legendRecipe=t},expression:"legendRecipe"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("専用装備")))]),a("el-switch",{model:{value:e.characterOnlyItem,callback:function(t){e.characterOnlyItem=t},expression:"characterOnlyItem"}})],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(t){e.has=t},expression:"has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),a("div",{staticClass:"items"},e._l(e.filteredItems,(function(t){return a("router-link",{key:t.DF,attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("el-card",{staticClass:"item"},[a("h3",[e._v(e._s(t.NAME))]),a("img",{staticClass:"item__image",attrs:{src:t.icon,alt:t.NAME}})])],1)})),1)])},n=[],i=a("5530"),s=a("bee2"),r=a("d4ec"),c=a("262e"),o=a("2caf"),u=(a("d81d"),a("b64b"),a("4de4"),a("caad"),a("2532"),a("b0c0"),a("5319"),a("ac1f"),a("9ab4")),d=a("2fe1"),b=a("6b98"),v=a("5935"),p=a("f015"),m=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return a}(b["a"]),f=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"categoryOptions",get:function(){var e=this;return Object.keys(this.dataManager.itemsByCategory).map((function(t){return{label:e.$t(e.dataManager.lookup.itemCategory[t]),value:+t}}))}},{key:"weaponKindOptions",get:function(){var e=this;return Object.keys(this.dataManager.itemsByWeaponKind).map((function(t){return{label:e.$t(e.dataManager.lookup.weaponKind[t]),value:+t}})).filter((function(e){return e.value}))}},{key:"genderOptions",get:function(){return[{label:"♂",value:p["p"].Human_Male},{label:"♀",value:p["p"].Human_Female}]}},{key:"sortOptions",get:function(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}},{key:"enableWeaponKindFilter",get:function(){return!this.category||this.dataManager.itemsWeaponKindCategories.includes(this.category)}},{key:"hasFilter",get:function(){return[{label:this.$t("材料"),value:1},{label:this.$t("調合"),value:2},{label:this.$t("フィールド用"),value:3},{label:this.$t("クエスト調合/採取"),value:4},{label:this.$t("クエスト納品"),value:5},{label:this.$t("クエスト報酬"),value:6},{label:this.$t("トレジャー"),value:7}]}},{key:"items",get:function(){return this.category?this.dataManager.itemsByCategory[this.category]:null!==this.sort?this.dataManager.item.m_vList:this.dataManager.itemsOrderByCategory}},{key:"filteredItems",get:function(){var e=this;this.enableWeaponKindFilter||(this.weaponKind=null);var t=this.items.filter((function(t){var a,l,n;return(!e.weaponKind||t.WPN_KIND===e.weaponKind)&&([null,"",-1].includes(e.battleElement)||(null!==(a=null===(l=t.elementChangeSkill)||void 0===l?void 0:l.effectValue)&&void 0!==a?a:0)===e.battleElement)&&([null,"",-1].includes(e.skillElement)||(null===(n=t.getAttackSkill())||void 0===n?void 0:n.element)===e.skillElement)&&(!e.name||t.DF===+e.name||t.NAME.toLocaleLowerCase().includes(e.name.toLocaleLowerCase()))&&(!e.legendRecipe||t.LRCP_CHARA.length)&&(!e.characterOnlyItem||t.GROUP_DF)&&(!e.has.includes(1)||e.dataManager.itemsByRecipe[t.DF])&&(!e.has.includes(2)||t.RSP.length)&&(!e.has.includes(3)||e.dataManager.fieldItemById[t.DF])&&(!e.has.includes(4)||e.dataManager.questsByGetItem[t.DF])&&(!e.has.includes(5)||e.dataManager.questsByDeliverItem[t.DF])&&(!e.has.includes(6)||e.dataManager.questsByRewardItem[t.DF])&&(!e.has.includes(7)||e.dataManager.api.huntInfosByItemId[t.DF])&&(!e.gender||t.canGenderUseEquipment(e.gender))}));return 1===this.sort?t.reverse():t}},{key:"beforeMount",value:function(){this.$route.query.category&&(this.resetFilter(),this.category=+this.$route.query.category,this.$router.replace({query:Object(i["a"])(Object(i["a"])({},this.$route.query),{},{category:void 0})}))}},{key:"resetFilter",value:function(){this.category=null,this.name="",this.weaponKind=null,this.battleElement=null,this.sort=1,this.legendRecipe=!1,this.characterOnlyItem=!1}}]),a}(m);f=Object(u["b"])([Object(d["b"])({components:{},computed:Object(i["a"])({},Object(v["b"])("itemsFilter",["category","weaponKind","battleElement","skillElement","gender","name","sort","legendRecipe","characterOnlyItem","has"]))})],f);var h=f,g=h,y=(a("21b1"),a("2877")),k=Object(y["a"])(g,l,n,!1,null,"e8e7fd28",null);t["default"]=k.exports},dd71:function(e,t,a){}}]);