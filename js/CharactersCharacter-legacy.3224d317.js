(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CharactersCharacter"],{5335:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a("d4ec"),s=a("262e"),n=a("2caf"),i=a("a6fe"),l=function(t){Object(s["a"])(a,t);var e=Object(n["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.foodLevel=0,t.blazeArtLevel=0,t}return a}(i["a"])},"56ac":function(t,e,a){"use strict";var r=a("e878"),s=a.n(r);s.a},a15b:function(t,e,a){"use strict";var r=a("23e7"),s=a("44ad"),n=a("fc6a"),i=a("a640"),l=[].join,c=s!=Object,_=i("join",",");r({target:"Array",proto:!0,forced:c||!_},{join:function(t){return l.call(n(this),void 0===t?",":t)}})},e0a0:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.character?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[t._v(t._s(t.character.NAME)),t._l(t.images,(function(e){return a("img",{staticClass:"icon-full",attrs:{src:e,alt:t.character.NAME}})}))],2),a("p",[t._v(t._s(t.character.DESC))]),a("br"),a("p",[t._v("DF: "+t._s(t.character.DF))]),t.character.EXC?[a("p",[t._v(t._s(t.$t("職業"))+": "+t._s(t.$t(t.dataManager.lookup.EJobKind[t.character.BTST])))]),a("p",[t._v(t._s(t.$t("性別"))+": "+t._s(t.character.genderTextIcon))])]:t._e(),t.character.WEAPON.length?a("p",[t._v(t._s(t.$t("武器種類"))+": "+t._s(t.weapons))]):t._e(),t._l(t.character.GROW,(function(e){return a("div",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00006.png",alt:t.$t("武器種類")}}),a("span",[t._v(t._s(e.STONE))]),a("span",[t._v(t._s("⭐".repeat(e.STAR)))])])}))],2),a("div",{staticClass:"item-container-right"},[t.character.EXC?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:"LV"}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:t.characterModifier.level,callback:function(e){t.$set(t.characterModifier,"level",e)},expression:"characterModifier.level"}})],1),a("el-form-item",{attrs:{label:t.$t("食事")+" LV"}},[a("el-input-number",{attrs:{size:"mini",min:0,max:Math.min(t.character.FDM.length,t.characterModifier.level),step:1,"step-strictly":""},model:{value:t.characterModifier.foodLevel,callback:function(e){t.$set(t.characterModifier,"foodLevel",e)},expression:"characterModifier.foodLevel"}})],1)],1)],1),a("div",{staticClass:"character-levels"},[a("table",[t._l(t.character.getStates(t.characterModifier.level,t.characterModifier.foodLevel),(function(e){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(t.$t(e.label)))]),e.value||e.foodValue||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.foodValue?a("tr",[a("th",[t._v(t._s(t.$t("食事")))]),a("td",[t._v(t._s(e.foodValue))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(e.total))]),e.value||e.foodValue||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.foodValue?a("tr",[a("th",[t._v(t._s(t.$t("食事")))]),a("td",[t._v(t._s(e.foodValue))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])})),t._l(t.character.getElements(t.characterModifier.level),(function(e){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(t.$t(e.label)))]),e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(e.value))]),e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])}))],2),a("div",t._l(t.character.getSkills(t.characterModifier.level),(function(e){return a("div",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("p",[t._v(t._s(e.name))]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[e.detail?a("p",{staticClass:"popover-base__detail"},[t._v(t._s(e.detail))]):t._e(),a("br"),a("p",[t._v(t._s(t.$t("数値"))+": "+t._s(e.effectValue)+", "+t._s(e.effectValue2))]),t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],s=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン"))+"j")])})),t._l(e.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],s=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])}))],2)])],2)],1)})),0)])]):t._e(),t.character.GROUP_DF&&t.onlyItems.length?a("div",[a("el-divider",[t._v(t._s(t.$t("専用アイテム")))]),t._l(t.onlyItems,(function(t){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])]}))],2):t._e(),t.dataManager.itemsByCharacterLegendRecipe[t.character.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("レジェンドレシピ")))]),t._l(t.dataManager.itemsByCharacterLegendRecipe[t.character.DF],(function(t){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])]}))],2):t._e(),t.character.SKILL.length?a("div",[a("el-divider",[t._v(t._s(t.$t("スキル")))]),t._l(t.character.skillsByLevel,(function(e){var r=e.level,s=e.skillDfs;return a("div",[a("el-divider",[t._v("LV "+t._s(r))]),t._l(s.map((function(e){return t.dataManager.skillById[e]})).filter((function(t){return t})),(function(e,r){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[t._v(t._s(t.$t("名前")))]),a("td",[t._v(t._s(e.name))])]),a("tr",[a("th",[t._v(t._s(t.$t("詳細")))]),a("td",[t._v(t._s(e.detail))])]),a("tr",[a("th",[t._v(t._s(t.$t("数値")))]),a("td",[t._v(t._s(e.effectValue2))])]),e.stateOwn.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態 (自)")))]),a("td",t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],s=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])})),0)]):t._e(),e.state.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態")))]),a("td",t._l(e.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],s=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])})),0)]):t._e()]),s.length!==r+1?a("p",[t._v(t._s(">"))]):t._e()])}))],2)}))],2):t._e(),t.character.BA.length?a("div",[a("el-divider",[t._v(t._s(t.$t("ブレイズアーツ"))+" (BA)")]),t._l(t.character.BA,(function(e){return a("div",t._l(t.dataManager.blazeArtById[e.DF].LV.entries(),(function(r){var s=r[0],n=r[1];return a("div",[t._l([t.dataManager.skillById[n.SKILL_DF]],(function(r){return[a("el-divider",[t._v("LV "+t._s(e.LV)+" / BA LV "+t._s(s+1))]),a("table",{staticClass:"skill-table"},[a("tr",[a("th",[t._v(t._s(t.$t("名前")))]),a("td",[t._v(t._s(r.name))])]),a("tr",[a("th",[t._v(t._s(t.$t("詳細")))]),a("td",[t._v(t._s(r.detail))])]),a("tr",[a("th",[t._v(t._s(t.$t("数値")))]),a("td",[t._v(t._s(r.effectValue)+", "+t._s(r.effectValue2))])]),1===r.type?[a("tr",[a("th",[t._v(t._s(t.$t("攻撃タイプ")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttribute[r.attackSkill.attribute])))])]),a("tr",[a("th",[t._v(t._s(t.$t("属性")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[r.attackSkill.element])))])]),a("tr",[a("th",[t._v(t._s(t.$t("對象")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[r.attackSkill.targetTeam]))+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[r.attackSkill.targetScope])))])]),r.attackSkill.stateOwn.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態 (自)")))]),a("td",t._l(r.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],s=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])})),0)]):t._e(),r.attackSkill.state.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態")))]),a("td",t._l(r.attackSkill.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],s=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])})),0)]):t._e()]:t._e()],2)]}))],2)})),0)}))],2):t._e(),t.character.FDM.length?a("div",[a("el-divider",[t._v(t._s(t.$t("食事")))]),a("div",{staticClass:"character-food__items"},t._l(t.character.FDM,(function(e){return a("div",{staticClass:"character-food__item"},[a("el-divider",[t._v("LV"+t._s(e.NO))]),t._l(e.FD.map((function(e){return[e,t.dataManager.itemById[e.DF]]})),(function(e){var r=e[0],s=e[1];return[a("router-link",{staticClass:"character-food__consume",attrs:{to:s.RSP.length?{name:"ToolsComposeItem",query:{df:s.DF,quality:r.QTY}}:{name:"ItemsItem",query:{df:s.DF}}}},[a("span",{staticClass:"character-food__quality-text"},[t._v(t._s(t.$t("品質"))+" "+t._s(r.QTY))]),a("img",{staticClass:"icon-small",attrs:{src:s.icon,alt:s.NAME}})])]})),a("table",t._l(Object.keys(t.character.SPEC),(function(r){return a("tr",[a("td",[t._v(t._s(t.$t(t.dataManager.lookup.state[r])))]),a("td",[t._v(t._s(e[r]))])])})),0)],2)})),0)],1):t._e(),t.character.QST.length?a("div",[a("el-divider",[t._v(t._s(t.$t("クェスト")))]),t._l(t.character.QST.map((function(e){return[e,t.dataManager.questById[e.QUEST_DF]]})).filter((function(t){var e=t[1];return e})),(function(e){var r=e[0],s=e[1];return a("div",{staticClass:"character-quest"},[a("el-divider",[t._v("LV "+t._s(r.LV))]),a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:s.DF}}}},[t._v(t._s(s.NAME))])],1)}))],2):t._e()])]):t._e()])},s=[],n=(a("4de4"),a("a15b"),a("d81d"),a("d3b7"),a("07ac"),a("25f0"),a("4d90"),a("2ca0"),a("d4ec")),i=a("bee2"),l=a("262e"),c=a("2caf"),_=a("9ab4"),o=a("2fe1"),u=a("0aea"),v=a("5456"),d=a("87ef"),f=a("5335"),h=function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.character=null,t.characterModifier=new f["a"],t}return Object(i["a"])(a,[{key:"beforeMount",value:function(){this.characterModifier.level=+this.$route.query.level||d["b"].maxLevel,this.characterModifier.foodLevel=+this.$route.query.foodLevel||d["b"].maxLevel,this.character=v["a"].characterById[this.$route.query.df],this.character||this.$router.push({name:"Characters"})}},{key:"images",get:function(){var t=this;return Object.values(v["a"].files.img.icon_chara.Texture2D).filter((function(e){return e.startsWith("icon_chara_all_".concat(t.character.DF.toString().padStart(4,"0")))})).map((function(t){return"img/icon_chara/Texture2D/".concat(t)}))}},{key:"weapons",get:function(){var t=this;return this.character.WEAPON.map((function(e){return t.$t(v["a"].lookup.ESubCategory[e.GEN])})).join(", ")}},{key:"onlyItems",get:function(){return v["a"].itemsByGroupDf[this.character.GROUP_DF]||[]}}]),a}(u["a"]);h=Object(_["__decorate"])([Object(o["a"])({components:{}})],h);var p=h,m=p,g=(a("56ac"),a("2877")),b=Object(g["a"])(m,r,s,!1,null,"f2e537f8",null);e["default"]=b.exports},e878:function(t,e,a){}}]);