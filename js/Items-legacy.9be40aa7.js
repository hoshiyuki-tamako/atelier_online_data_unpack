(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Items"],{"3d81":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("カテゴリー")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.categoryOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("武器種類")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:"",disabled:!e.enableWeaponKindFilter},model:{value:e.weaponKind,callback:function(t){e.weaponKind=t},expression:"weaponKind"}},e._l(e.weaponKindOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("攻撃属性")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.battleElement,callback:function(t){e.battleElement=t},expression:"battleElement"}},e._l(Object.entries(e.dataManager.lookup.EBattleElementKind),(function(t){var l=t[0],n=t[1];return a("el-option",{key:l,attrs:{label:e.$t(n),value:+l}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("スキル属性")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.skillElement,callback:function(t){e.skillElement=t},expression:"skillElement"}},e._l(Object.entries(e.dataManager.lookup.EBattleElementKind),(function(t){var l=t[0],n=t[1];return a("el-option",{key:l,attrs:{label:e.$t(n),value:+l}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("性別")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.genderOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("ソート")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レジェンドレシピ")))]),a("el-switch",{model:{value:e.legendRecipe,callback:function(t){e.legendRecipe=t},expression:"legendRecipe"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("専用装備")))]),a("el-switch",{model:{value:e.characterOnlyItem,callback:function(t){e.characterOnlyItem=t},expression:"characterOnlyItem"}})],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(t){e.has=t},expression:"has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),a("div",{staticClass:"items"},e._l(e.filteredItems,(function(t){return a("router-link",{key:t.DF,attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("el-card",{staticClass:"item"},[a("h3",[e._v(e._s(t.NAME))]),a("img",{staticClass:"item__image",attrs:{src:t.icon,alt:t.NAME}})])],1)})),1)])},n=[],i=a("5530"),s=a("1da1"),r=a("bee2"),c=a("d4ec"),o=a("257e"),u=a("262e"),d=a("2caf"),b=a("ade3"),v=(a("96cf"),a("99af"),a("d81d"),a("b64b"),a("4de4"),a("caad"),a("2532"),a("4e82"),a("b0c0"),a("ac1f"),a("5319"),a("9ab4")),p=a("2fe1"),m=a("5935"),f=a("6b98"),h=a("f015"),g=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;Object(c["a"])(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(b["a"])(Object(o["a"])(e),"category",void 0),Object(b["a"])(Object(o["a"])(e),"weaponKind",void 0),Object(b["a"])(Object(o["a"])(e),"battleElement",void 0),Object(b["a"])(Object(o["a"])(e),"skillElement",void 0),Object(b["a"])(Object(o["a"])(e),"gender",void 0),Object(b["a"])(Object(o["a"])(e),"name",void 0),Object(b["a"])(Object(o["a"])(e),"sort",void 0),Object(b["a"])(Object(o["a"])(e),"legendRecipe",void 0),Object(b["a"])(Object(o["a"])(e),"characterOnlyItem",void 0),Object(b["a"])(Object(o["a"])(e),"has",void 0),e}return a}(f["a"]),y=function(e){Object(u["a"])(a,e);var t=Object(d["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"categoryOptions",get:function(){var e=this;return Object.keys(this.dataManager.itemsByCategory).map((function(t){return{label:e.$t(e.dataManager.lookup.itemCategory[t]),value:+t}}))}},{key:"weaponKindOptions",get:function(){var e=this;return Object.keys(this.dataManager.itemsByWeaponKind).map((function(t){return{label:e.$t(e.dataManager.lookup.weaponKind[t]),value:+t}})).filter((function(e){return e.value}))}},{key:"genderOptions",get:function(){return[{label:"♂",value:h["p"].Human_Male},{label:"♀",value:h["p"].Human_Female}]}},{key:"sortOptions",get:function(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}},{key:"enableWeaponKindFilter",get:function(){return!this.category||this.dataManager.itemsWeaponKindCategories.includes(this.category)}},{key:"hasFilter",get:function(){return[{label:this.$t("材料"),value:1},{label:this.$t("調合"),value:2},{label:this.$t("フィールド用"),value:3},{label:this.$t("クエスト調合/採取"),value:4},{label:this.$t("クエスト納品"),value:5},{label:this.$t("クエスト報酬"),value:6},{label:this.$t("トレジャー"),value:7}]}},{key:"items",get:function(){return this.category?this.dataManager.itemsByCategory[this.category]:null!==this.sort?this.dataManager.item.m_vList:this.dataManager.itemsOrderByCategory}},{key:"filteredItems",get:function(){var e=this;this.enableWeaponKindFilter||(this.weaponKind=null);var t=this.items.filter((function(t){var a,l,n;return(!e.weaponKind||t.WPN_KIND===e.weaponKind)&&([null,"",-1].includes(e.battleElement)||(null!==(a=null===(l=t.elementChangeSkill)||void 0===l?void 0:l.effectValue)&&void 0!==a?a:0)===e.battleElement)&&([null,"",-1].includes(e.skillElement)||(null===(n=t.getAttackSkill())||void 0===n?void 0:n.element)===e.skillElement)&&(!e.name||t.DF===+e.name||t.NAME.toLocaleLowerCase().includes(e.name.toLocaleLowerCase()))&&(!e.legendRecipe||t.LRCP_CHARA.length)&&(!e.characterOnlyItem||t.GROUP_DF)&&(!e.has.includes(1)||e.dataManager.itemsByRecipe[t.DF])&&(!e.has.includes(2)||t.RSP.length)&&(!e.has.includes(3)||e.dataManager.fieldItemById[t.DF])&&(!e.has.includes(4)||e.dataManager.questsByGetItem[t.DF])&&(!e.has.includes(5)||e.dataManager.questsByDeliverItem[t.DF])&&(!e.has.includes(6)||e.dataManager.questsByRewardItem[t.DF])&&(!e.has.includes(7)||e.dataManager.api.huntInfosByItemId[t.DF])&&(!e.gender||t.canGenderUseEquipment(e.gender))}));return 1===this.sort?t.reverse():t}},{key:"beforeMount",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$route.query.category){e.next=5;break}return e.next=3,this.$store.dispatch("itemsFilter/reset");case 3:this.category=+this.$route.query.category,this.$router.replace({query:Object(i["a"])(Object(i["a"])({},this.$route.query),{},{category:void 0})});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(g);y=Object(v["b"])([Object(p["b"])({components:{},computed:Object(i["a"])({},Object(m["b"])("itemsFilter",["category","weaponKind","battleElement","skillElement","gender","name","sort","legendRecipe","characterOnlyItem","has"]))})],y);var O=y,k=O,_=(a("53e5"),a("2877")),j=Object(_["a"])(k,l,n,!1,null,"967558ce",null);t["default"]=j.exports},"53e5":function(e,t,a){"use strict";a("ebc0")},ebc0:function(e,t,a){}}]);