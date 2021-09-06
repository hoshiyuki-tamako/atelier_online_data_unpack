(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Characters"],{"459b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("種類")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.characterType,callback:function(t){e.characterType=t},expression:"characterType"}},e._l(e.characterTypeFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("性別")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.genderOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("武器種類")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.weaponType,callback:function(t){e.weaponType=t},expression:"weaponType"}},e._l(e.weaponTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("ソート")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(t){e.has=t},expression:"has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),e.waitForReset?e._e():a("div",{staticClass:"characters"},e._l(e.filteredCharacters,(function(t){return a("el-card",{key:t.DF,staticClass:"character"},[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[a("h3",[e._v(e._s(t.NAME))]),a("img",{attrs:{src:t.icon,alt:"",loading:"lazy"}})])],1)})),1)])},l=[],r=a("ade3"),i=(a("5319"),a("9ab4")),c=a("2fe1"),n=a("5935"),o=a("6b98"),u=a("848f");class h extends o["a"]{constructor(...e){super(...e),Object(r["a"])(this,"characterType",void 0),Object(r["a"])(this,"gender",void 0),Object(r["a"])(this,"weaponType",void 0),Object(r["a"])(this,"sort",void 0),Object(r["a"])(this,"name",void 0),Object(r["a"])(this,"has",void 0)}}let d=class extends h{constructor(...e){super(...e),Object(r["a"])(this,"waitForReset",!0)}get characterTypeFilter(){return[{label:this.$t("戦闘キャラクター"),value:u["a"].battle},{label:this.$t("NPC"),value:u["a"].npc}]}get genderOptions(){return[{label:"♂",value:1},{label:"♀",value:2}]}get weaponTypeOptions(){return Object.entries(this.dataManager.lookup.ESubCategory).map(([e,t])=>({label:this.$t(t),value:+e}))}get sortOptions(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}get hasFilter(){return[{label:this.$t("レジェンドレシピ"),value:1},{label:this.$t("専用アイテム"),value:2},{label:this.$t("ブレイズアーツ"),value:3},{label:this.$t("クエスト"),value:4},{label:this.$t("トレジャー"),value:5},{label:this.$t("ダイアログ"),value:6}]}get filteredCharacters(){const e=this.characters.filter(e=>{var t,a;return(!this.gender||e.GEN===this.gender)&&([null,"",-1].includes(this.weaponType)||e.WEAPON.some(e=>e.GEN===this.weaponType))&&(!this.name||e.DF===+this.name||e.NAME.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))&&(!this.has.includes(1)||this.dataManager.itemsByCharacterLegendRecipe[e.DF])&&(!this.has.includes(2)||(null===(t=this.dataManager.itemsByGroupDf[e.GROUP_DF])||void 0===t?void 0:t.length))&&(!this.has.includes(3)||e.BA.length)&&(!this.has.includes(4)||e.QST.length)&&(!this.has.includes(5)||this.dataManager.api.huntInfosByCharacterId[e.DF])&&(!this.has.includes(6)||(null===(a=this.dataManager.advQuestsByCharacterId[e.DF])||void 0===a?void 0:a.length))});return 1===this.sort?e.reverse():e}get characters(){switch(this.characterType){case u["a"].battle:return this.dataManager.charactersCanBattle;case u["a"].npc:return this.dataManager.characterNpcs;case u["a"].none:default:return this.dataManager.chara.m_vList}}async beforeMount(){"undefined"!==typeof this.$route.query.characterType&&(await this.$store.dispatch("charactersFilter/reset"),this.characterType=+this.$route.query.characterType,this.$router.replace({query:{...this.$route.query,characterType:void 0}})),this.waitForReset=!1}};d=Object(i["b"])([Object(c["b"])({components:{},computed:{...Object(n["b"])("charactersFilter",["characterType","gender","weaponType","sort","name","has"])}})],d);var p=d,v=p,b=(a("f464"),a("2877")),f=Object(b["a"])(v,s,l,!1,null,"1d680e64",null);t["default"]=f.exports},f464:function(e,t,a){"use strict";a("fa36")},fa36:function(e,t,a){}}]);