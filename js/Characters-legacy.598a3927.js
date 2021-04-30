(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Characters"],{"004c":function(e,t,a){},"459b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("種類")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.characterType,callback:function(t){e.characterType=t},expression:"characterType"}},e._l(e.characterTypeFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("性別")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.genderOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("武器種類")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.weaponType,callback:function(t){e.weaponType=t},expression:"weaponType"}},e._l(e.weaponTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("ソート")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(t){e.has=t},expression:"has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),a("div",{staticClass:"characters"},e._l(e.filteredCharacters,(function(t){return a("el-card",{key:t.DF,staticClass:"character"},[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[a("h3",[e._v(e._s(t.NAME))]),a("img",{attrs:{src:t.icon,alt:t.NAME}})])],1)})),1)])},l=[],n=a("5530"),s=a("1da1"),c=a("3835"),i=a("bee2"),u=a("d4ec"),o=a("262e"),h=a("2caf"),p=(a("96cf"),a("d81d"),a("4fad"),a("4de4"),a("caad"),a("b0c0"),a("2532"),a("5319"),a("ac1f"),a("9ab4")),b=a("2fe1"),d=a("6b98"),f=a("848f"),v=a("5935"),y=function(e){Object(o["a"])(a,e);var t=Object(h["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return a}(d["a"]),g=function(e){Object(o["a"])(a,e);var t=Object(h["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"characterTypeFilter",get:function(){return[{label:this.$t("戦闘キャラクター"),value:f["a"].battle},{label:this.$t("NPC"),value:f["a"].npc}]}},{key:"genderOptions",get:function(){return[{label:"♂",value:1},{label:"♀",value:2}]}},{key:"weaponTypeOptions",get:function(){var e=this;return Object.entries(this.dataManager.lookup.ESubCategory).map((function(t){var a=Object(c["a"])(t,2),r=a[0],l=a[1];return{label:e.$t(l),value:+r}}))}},{key:"sortOptions",get:function(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}},{key:"hasFilter",get:function(){return[{label:this.$t("レジェンドレシピ"),value:1},{label:this.$t("専用アイテム"),value:2},{label:this.$t("ブレイズアーツ"),value:3},{label:this.$t("クエスト"),value:4},{label:this.$t("トレジャー"),value:5}]}},{key:"filteredCharacters",get:function(){var e=this,t=this.characters.filter((function(t){var a;return(!e.gender||t.GEN===e.gender)&&([null,"",-1].includes(e.weaponType)||t.WEAPON.some((function(t){return t.GEN===e.weaponType})))&&(!e.name||t.DF===+e.name||t.NAME.toLocaleLowerCase().includes(e.name.toLocaleLowerCase()))&&(!e.has.includes(1)||e.dataManager.itemsByCharacterLegendRecipe[t.DF])&&(!e.has.includes(2)||(null===(a=e.dataManager.itemsByGroupDf[t.GROUP_DF])||void 0===a?void 0:a.length))&&(!e.has.includes(3)||t.BA.length)&&(!e.has.includes(4)||t.QST.length)&&(!e.has.includes(5)||e.dataManager.api.huntInfosByCharacterId[t.DF])}));return 1===this.sort?t.reverse():t}},{key:"characters",get:function(){switch(this.characterType){case f["a"].battle:return this.dataManager.charactersCanBattle;case f["a"].npc:return this.dataManager.characterNpcs;case f["a"].none:default:return this.dataManager.chara.m_vList}}},{key:"beforeMount",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("undefined"===typeof this.$route.query.characterType){e.next=5;break}return e.next=3,this.$store.dispatch("charactersFilter/reset");case 3:this.characterType=+this.$route.query.characterType,this.$router.replace({query:Object(n["a"])(Object(n["a"])({},this.$route.query),{},{characterType:void 0})});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(y);g=Object(p["b"])([Object(b["b"])({components:{},computed:Object(n["a"])({},Object(v["b"])("charactersFilter",["characterType","gender","weaponType","sort","name","has"]))})],g);var k=g,m=k,O=(a("9b16"),a("2877")),C=Object(O["a"])(m,r,l,!1,null,"05610ef4",null);t["default"]=C.exports},"9b16":function(e,t,a){"use strict";a("004c")}}]);