(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CharactersCharacter"],{"1b40":function(t,e,a){"use strict";a.d(e,"a",(function(){return r["b"]})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return u}));var r=a("2fe1"),n=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<a;e++)for(var i=arguments[e],l=0,s=i.length;l<s;l++,n++)r[n]=i[l];return r},i=/\B([A-Z])/g,l=function(t){return t.replace(i,"-$1").toLowerCase()};function s(t){return function(e,a,r){var i=l(a),s=r.value;r.value=function(){for(var e=this,a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];var l=function(r){var l=t||i;void 0===r?0===a.length?e.$emit(l):1===a.length?e.$emit(l,a[0]):e.$emit.apply(e,n([l],a)):(a.unshift(r),e.$emit.apply(e,n([l],a)))},o=s.apply(this,a);return c(o)?o.then(l):l(o),o}}}function c(t){return t instanceof Promise||t&&"function"===typeof t.then}var o="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function _(t,e,a){if(o&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var r=Reflect.getMetadata("design:type",e,a);r!==Object&&(t.type=r)}}function u(t){return void 0===t&&(t={}),function(e,a){_(t,e,a),Object(r["a"])((function(e,a){(e.props||(e.props={}))[a]=t}))(e,a)}}},"1b61":function(t,e,a){},"45b5":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.skills&&t.skills.length?a("div",[t.showTitle?a("el-divider",[t._t("title",[t._v(t._s(t.$t("スキル")))])],2):t._e(),t._l(t.skills,(function(e,r){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[t._v(t._s(t.$t("名前")))]),a("td",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1)]),a("tr",[a("th",[t._v(t._s(t.$t("詳細")))]),a("td",[t._v(t._s(e.detail))])]),a("tr",[a("th",[t._v(t._s(t.$t("数値")))]),a("td",[t._v(t._s(e.effectValue)+", "+t._s(e.effectValue2))])]),1===e.type?[a("tr",[a("th",[t._v(t._s(t.$t("攻撃タイプ")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttribute[e.attackSkill.attribute])))])]),a("tr",[a("th",[t._v(t._s(t.$t("属性")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.attackSkill.element])))])]),a("tr",[a("th",[t._v(t._s(t.$t("對象")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam]))+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope])))])])]:t._e(),e.attackSkill.stateOwn.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態 (自)")))]),a("td",t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],n=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])})),0)]):t._e(),e.attackSkill.state.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態")))]),a("td",t._l(e.attackSkill.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],n=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])})),0)]):t._e(),t._l([t.dataManager.zoneById[e.effectValue]].filter((function(t){return t})),(function(r){return e.effect===t.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:r.id}}}},[t._v(t._s(r.name))])],1),a("td",t._l(r.effectlist,(function(e){return a("p",[t._v(t._s(t.dataManager.zoneEffectById[e].name)+" ("+t._s(t.dataManager.zoneEffectById[e].value)+")")])})),0)]):t._e()})),e.effect===t.EBattleEffectKind.eSTART_SKILL&&t.dataManager.skillById[e.effectValue]?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l([t.dataManager.skillById[e.effectValue]],(function(e){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1)})),0)]):t._e(),e.combSkillList.length||e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[t._v(t._s(t.$t("含まれるスキル")))]),a("td",[t._l(e.combSkillList,(function(e){return[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(e){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))]})),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(e){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))],2)]):t._e()],2),t.skills.length!==r+1?a("p",[t._v(t._s(">"))]):t._e()])}))],2):t._e()},n=[],i=a("d4ec"),l=a("bee2"),s=a("262e"),c=a("2caf"),o=a("9ab4"),_=a("1b40"),u=a("6b98"),f=a("f015"),d=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(l["a"])(a,[{key:"EBattleEffectKind",get:function(){return f["c"]}}]),a}(u["a"]);Object(o["b"])([Object(_["c"])({type:Array,default:function(){return[]}})],d.prototype,"skills",void 0),Object(o["b"])([Object(_["c"])({type:Boolean,default:!0})],d.prototype,"showTitle",void 0),d=Object(o["b"])([Object(_["a"])({components:{}})],d);var v=d,h=v,p=(a("a6d5"),a("2877")),m=Object(p["a"])(h,r,n,!1,null,"b4101b12",null);e["a"]=m.exports},5335:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("d4ec"),n=a("262e"),i=a("2caf"),l=a("a6fe"),s=function(t){Object(n["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.foodLevel=0,t.blazeArtLevel=0,t}return a}(l["a"])},"60ab":function(t,e,a){},a15b:function(t,e,a){"use strict";var r=a("23e7"),n=a("44ad"),i=a("fc6a"),l=a("a640"),s=[].join,c=n!=Object,o=l("join",",");r({target:"Array",proto:!0,forced:c||!o},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a6d5:function(t,e,a){"use strict";a("60ab")},c76d:function(t,e,a){"use strict";a("1b61")},e0a0:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.character?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[t._v(t._s(t.character.NAME))]),t._l(t.character.images,(function(e){return a("img",{staticClass:"icon-full",attrs:{src:e,alt:t.character.NAME}})})),t._l(t.character.otherImages,(function(e){return a("img",{staticClass:"icon-full",attrs:{src:e,alt:t.character.NAME}})})),a("p",[t._v(t._s(t.character.DESC))]),a("br"),a("p",[t._v("DF: "+t._s(t.character.DF))]),t.character.EXC?[a("p",[t._v(t._s(t.$t("職業"))+": "+t._s(t.$t(t.dataManager.lookup.EJobKind[t.character.BTST])))]),a("p",[t._v(t._s(t.$t("性別"))+": "+t._s(t.character.genderTextIcon))])]:t._e(),t.character.WEAPON.length?a("p",[t._v(t._s(t.$t("武器種類"))+": "+t._s(t.weapons))]):t._e(),t._l(t.character.GROW,(function(e){return a("div",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00006.png",alt:t.$t("限界キャンディ")}}),a("span",[t._v(t._s(e.STONE))]),a("span",[t._v(t._s("⭐".repeat(e.STAR)))])])}))],2),a("div",{staticClass:"item-container-right"},[t.character.EXC?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:"LV"}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:t.characterModifier.level,callback:function(e){t.$set(t.characterModifier,"level",e)},expression:"characterModifier.level"}})],1),a("el-form-item",{attrs:{label:t.$t("食事")+" LV"}},[a("el-input-number",{attrs:{size:"mini",min:0,max:Math.min(t.character.FDM.length,t.characterModifier.level),step:1,"step-strictly":""},model:{value:t.characterModifier.foodLevel,callback:function(e){t.$set(t.characterModifier,"foodLevel",e)},expression:"characterModifier.foodLevel"}})],1)],1)],1),a("div",{staticClass:"character-levels"},[a("table",[t._l(t.character.getStates(t.characterModifier.level,t.characterModifier.foodLevel),(function(e){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(t.$t(e.label)))]),e.value||e.foodValue||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.foodValue?a("tr",[a("th",[t._v(t._s(t.$t("食事")))]),a("td",[t._v(t._s(e.foodValue))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(e.total))]),e.value||e.foodValue||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.foodValue?a("tr",[a("th",[t._v(t._s(t.$t("食事")))]),a("td",[t._v(t._s(e.foodValue))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])})),t._l(t.character.getElements(t.characterModifier.level),(function(e){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(t.$t(e.label)))]),e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(e.value))]),e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])}))],2),a("div",t._l(t.character.getSkills(t.characterModifier.level),(function(e){return a("div",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("p",[t._v(t._s(e.name))]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[e.detail?a("p",{staticClass:"popover-base__detail"},[t._v(t._s(e.detail))]):t._e(),a("br"),a("p",[t._v(t._s(t.$t("数値"))+": "+t._s(e.effectValue)+", "+t._s(e.effectValue2))]),t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],n=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])})),t._l(e.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var r=e[0],n=e[1];return a("p",[t._v(t._s((100*r.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])}))],2)])],2)],1)})),0)])]):t._e(),t.character.GROUP_DF&&t.onlyItems.length?a("div",[a("el-divider",[t._v(t._s(t.$t("専用アイテム")))]),t._l(t.onlyItems,(function(t){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("el-tooltip",{attrs:{content:t.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])],1)]}))],2):t._e(),t.dataManager.itemsByCharacterLegendRecipe[t.character.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("レジェンドレシピ")))]),t._l(t.dataManager.itemsByCharacterLegendRecipe[t.character.DF],(function(t){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("el-tooltip",{attrs:{content:t.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])],1)]}))],2):t._e(),t.dataManager.api.huntInfosByCharacterId[t.character.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("トレジャー")))]),t._l(t.dataManager.api.huntInfosByCharacterId[t.character.DF],(function(e,r){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoHunt",query:{huntId:e.HUNTID}}}},[t._v(t._s(e.NAME))])],1),t._l(e.JCND.filter((function(e){return e.TYPE===t.eConditionType.TargetChara&&e.VALS[0]===t.character.DF})),(function(e){return a("p",[t._v(t._s(t.$t("LV{0}以上の{1}の編成",[e.VALS[1],t.character.NAME])))])}))],2)}))],2):t._e(),t.character.SKILL.length?a("div",[a("el-divider",[t._v(t._s(t.$t("スキル")))]),t._l(t.character.skillsByLevel,(function(e){var r=e.level,n=e.skillDfs;return a("div",[a("SkillTextInfo",{attrs:{skills:n.map((function(e){return t.dataManager.skillById[e]})).filter((function(t){return t}))}},[a("template",{slot:"title"},[t._v("LV "+t._s(r))])],2)],1)}))],2):t._e(),t.character.BA.length?a("div",[a("el-divider",[t._v(t._s(t.$t("ブレイズアーツ"))+" (BA)")]),t._l(t.character.BA,(function(e){return a("div",t._l(t.dataManager.blazeArtById[e.DF].LV.entries(),(function(r){var n=r[0],i=r[1];return a("div",[t._l([[t.dataManager.skillById[i.SKILL_DF],n+1]],(function(r){var n=r[0],i=r[1];return[a("SkillTextInfo",{attrs:{skills:[n]}},[a("template",{slot:"title"},[t._v("LV "+t._s(e.LV)+" / BA LV "+t._s(i)+" / EXP "+t._s(t.dataManager.blazeArtById[e.DF].levelExperience(i)))])],2)]}))],2)})),0)}))],2):t._e(),t.character.FDM.length?a("div",[a("el-divider",[t._v(t._s(t.$t("食事")))]),a("div",{staticClass:"character-food__items"},t._l(t.character.FDM,(function(e){return a("div",{staticClass:"character-food__item"},[a("el-divider",[t._v("LV"+t._s(e.NO))]),t._l(e.FD.map((function(e){return[e,t.dataManager.itemById[e.DF]]})),(function(e){var r=e[0],n=e[1];return[a("el-tooltip",{attrs:{content:n.NAME,placement:"left"}},[a("router-link",{staticClass:"character-food__consume",attrs:{to:n.RSP.length?{name:"ToolsComposeItem",query:{df:n.DF,quality:r.QTY}}:{name:"ItemsItem",query:{df:n.DF}}}},[a("span",{staticClass:"character-food__quality-text"},[t._v(t._s(t.$t("品質"))+" "+t._s(r.QTY))]),a("img",{staticClass:"icon-small",attrs:{src:n.icon,alt:n.NAME}})])],1)]})),a("table",t._l(Object.keys(t.character.SPEC),(function(r){return a("tr",[a("td",[t._v(t._s(t.$t(t.dataManager.lookup.state[r])))]),a("td",[t._v(t._s(e[r]))])])})),0)],2)})),0)],1):t._e(),t.character.QST.length?a("div",[a("el-divider",[t._v(t._s(t.$t("クエスト")))]),t._l(t.character.QST.map((function(e){return[e,t.dataManager.questById[e.QUEST_DF]]})).filter((function(t){var e=t[1];return e})),(function(e){var r=e[0],n=e[1];return a("div",{staticClass:"character-quest"},[a("el-divider",[t._v("LV "+t._s(r.LV))]),a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:n.DF}}}},[t._v(t._s(n.NAME))])],1)}))],2):t._e()])]):t._e()])},n=[],i=(a("a15b"),a("d81d"),a("d4ec")),l=a("bee2"),s=a("262e"),c=a("2caf"),o=a("9ab4"),_=a("2fe1"),u=a("6b98"),f=a("87ef"),d=a("5335"),v=a("45b5"),h=a("f015"),p=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.character=null,t.characterModifier=new d["a"],t}return Object(l["a"])(a,[{key:"beforeMount",value:function(){this.characterModifier.level=+this.$route.query.level||f["b"].maxLevel,this.characterModifier.foodLevel=+this.$route.query.foodLevel||f["b"].maxLevel,this.character=this.dataManager.characterById[this.$route.query.df],this.character||this.$router.push({name:"Characters"})}},{key:"eConditionType",get:function(){return h["n"]}},{key:"weapons",get:function(){var t=this;return this.character.WEAPON.map((function(e){return t.$t(t.dataManager.lookup.ESubCategory[e.GEN])})).join(", ")}},{key:"onlyItems",get:function(){return this.dataManager.itemsByGroupDf[this.character.GROUP_DF]||[]}}]),a}(u["a"]);p=Object(o["b"])([Object(_["b"])({components:{SkillTextInfo:v["a"]}})],p);var m=p,g=m,b=(a("c76d"),a("2877")),k=Object(b["a"])(g,r,n,!1,null,"b7fdae70",null);e["default"]=k.exports}}]);