(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Characters"],{"26e9":function(e,t,a){"use strict";var r=a("23e7"),l=a("e8b5"),n=[].reverse,s=[1,2];r({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return l(this)&&(this.length=this.length),n.call(this)}})},"428b":function(e,t,a){},"459b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.characterType,callback:function(t){e.characterType=t},expression:"characterType"}},e._l(e.characterTypeFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("性別")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.genderOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("武器種類")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.weaponType,callback:function(t){e.weaponType=t},expression:"weaponType"}},e._l(e.weaponTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("ソート")))]),a("el-select",{attrs:{clearable:"",filterable:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(t){e.has=t},expression:"has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),a("div",{staticClass:"characters"},e._l(e.filteredCharacters,(function(t){return a("el-card",{key:t.DF,staticClass:"character"},[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[a("h3",[e._v(e._s(t.NAME))]),a("img",{attrs:{src:t.icon,alt:t.NAME}})])],1)})),1)])},l=[],n=(a("4de4"),a("caad"),a("d81d"),a("26e9"),a("45fc"),a("4e82"),a("b0c0"),a("4fad"),a("ac1f"),a("2532"),a("5319"),a("3835")),s=a("5530"),c=(a("96cf"),a("1da1")),i=a("bee2"),u=a("d4ec"),o=a("262e"),h=a("2caf"),p=a("9ab4"),b=a("2fe1"),f=a("6b98"),v=a("848f"),d=a("5935"),y=function(e){Object(o["a"])(a,e);var t=Object(h["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return a}(f["a"]),g=function(e){Object(o["a"])(a,e);var t=Object(h["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"beforeMount",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("undefined"===typeof this.$route.query.characterType){e.next=5;break}return e.next=3,this.$store.dispatch("charactersFilter/reset");case 3:this.characterType=+this.$route.query.characterType,this.$router.replace({query:Object(s["a"])(Object(s["a"])({},this.$route.query),{},{characterType:void 0})});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"characterTypeFilter",get:function(){return[{label:this.$t("戦闘キャラクター"),value:v["a"].battle},{label:this.$t("NPC"),value:v["a"].npc}]}},{key:"genderOptions",get:function(){return[{label:"♂",value:1},{label:"♀",value:2}]}},{key:"weaponTypeOptions",get:function(){var e=this;return Object.entries(this.dataManager.lookup.ESubCategory).map((function(t){var a=Object(n["a"])(t,2),r=a[0],l=a[1];return{label:e.$t(l),value:+r}}))}},{key:"sortOptions",get:function(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}},{key:"hasFilter",get:function(){return[{label:this.$t("レジェンドレシピ"),value:1},{label:this.$t("専用アイテム"),value:2},{label:this.$t("ブレイズアーツ"),value:3},{label:this.$t("クエスト"),value:4}]}},{key:"filteredCharacters",get:function(){var e=this,t=this.characters.filter((function(t){var a;return(!e.gender||t.GEN===e.gender)&&([null,"",-1].includes(e.weaponType)||t.WEAPON.some((function(t){return t.GEN===e.weaponType})))&&(!e.name||t.DF===+e.name||t.NAME.toLocaleLowerCase().includes(e.name.toLocaleLowerCase()))&&(!e.has.includes(1)||e.dataManager.itemsByCharacterLegendRecipe[t.DF])&&(!e.has.includes(2)||(null===(a=e.dataManager.itemsByGroupDf[t.GROUP_DF])||void 0===a?void 0:a.length))&&(!e.has.includes(3)||t.BA.length)&&(!e.has.includes(4)||t.QST.length)}));return 1===this.sort?t.reverse():t}},{key:"characters",get:function(){switch(this.characterType){case v["a"].battle:return this.dataManager.charactersCanBattle;case v["a"].npc:return this.dataManager.characterNpcs;case v["a"].none:default:return this.dataManager.chara.m_vList}}}]),a}(y);g=Object(p["a"])([Object(b["b"])({components:{},computed:Object(s["a"])({},Object(d["b"])("charactersFilter",["characterType","gender","weaponType","sort","name","has"]))})],g);var k=g,m=k,O=(a("6346"),a("2877")),C=Object(O["a"])(m,r,l,!1,null,"8fc90618",null);t["default"]=C.exports},6346:function(e,t,a){"use strict";a("428b")}}]);