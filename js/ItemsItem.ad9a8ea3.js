(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ItemsItem"],{"0227":function(t,e,a){"use strict";a("df91")},"1b40":function(t,e,a){"use strict";a.d(e,"a",(function(){return i["b"]})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return c}));var i=a("2fe1"),n=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var i=Array(t),n=0;for(e=0;e<a;e++)for(var r=arguments[e],l=0,s=r.length;l<s;l++,n++)i[n]=r[l];return i},r=/\B([A-Z])/g,l=function(t){return t.replace(r,"-$1").toLowerCase()};function s(t){return function(e,a,i){var r=l(a),s=i.value;i.value=function(){for(var e=this,a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var l=function(i){var l=t||r;void 0===i?0===a.length?e.$emit(l):1===a.length?e.$emit(l,a[0]):e.$emit.apply(e,n([l],a)):(a.unshift(i),e.$emit.apply(e,n([l],a)))},_=s.apply(this,a);return o(_)?_.then(l):l(_),_}}}function o(t){return t instanceof Promise||t&&"function"===typeof t.then}var _="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(t,e,a){if(_&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var i=Reflect.getMetadata("design:type",e,a);i!==Object&&(t.type=i)}}function c(t){return void 0===t&&(t={}),function(e,a){u(t,e,a),Object(i["a"])((function(e,a){(e.props||(e.props={}))[a]=t}))(e,a)}}},"45b5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.skills&&t.skills.length?a("div",[t.showTitle?a("el-divider",[t._t("title",[t._v(t._s(t.$t("スキル")))])],2):t._e(),t._l(t.skills,(function(e,i){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[t._v(t._s(t.$t("名前")))]),a("td",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1)]),a("tr",[a("th",[t._v(t._s(t.$t("詳細")))]),a("td",[t._v(t._s(e.detail))])]),a("tr",[a("th",[t._v(t._s(t.$t("数値")))]),a("td",[t._v(t._s(e.effectValue)+", "+t._s(e.effectValue2))])]),1===e.type?[a("tr",[a("th",[t._v(t._s(t.$t("攻撃タイプ")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttribute[e.attackSkill.attribute])))])]),a("tr",[a("th",[t._v(t._s(t.$t("属性")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.attackSkill.element])))])]),a("tr",[a("th",[t._v(t._s(t.$t("對象")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam]))+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope])))])])]:t._e(),e.attackSkill.stateOwn.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態 (自)")))]),a("td",[t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var i=e[0],n=e[1];return[a("el-tooltip",{attrs:{content:n.effectlist.map((function(e){return t.dataManager.abnormalStateEffectById[e]})).filter((function(t){return t})).map((function(t){return t.name+" "+t.value})).join(" / "),placement:"top"}},[a("p",[t._v(t._s((100*i.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])])]}))],2)]):t._e(),e.attackSkill.state.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態")))]),a("td",[t._l(e.attackSkill.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var i=e[0],n=e[1];return[a("el-tooltip",{attrs:{content:n.effectlist.map((function(e){return t.dataManager.abnormalStateEffectById[e]})).filter((function(t){return t})).map((function(t){return t.name+" "+t.value})).join(" / "),placement:"top"}},[a("p",[t._v(t._s((100*i.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])])]}))],2)]):t._e(),t._l([t.dataManager.zoneById[e.effectValue]].filter((function(t){return t})),(function(i){return e.effect===t.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:i.id}}}},[t._v(t._s(i.name))])],1),a("td",t._l(i.effectlist,(function(e){return a("p",[t._v(t._s(t.dataManager.zoneEffectById[e].name)+" ("+t._s(t.dataManager.zoneEffectById[e].value)+")")])})),0)]):t._e()})),e.effect===t.EBattleEffectKind.eSTART_SKILL&&t.dataManager.skillById[e.effectValue]?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l([t.dataManager.skillById[e.effectValue]],(function(e){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1)})),0)]):t._e(),e.combSkillList.length||e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[t._v(t._s(t.$t("含まれるスキル")))]),a("td",[t._l(e.combSkillList,(function(e){return[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(e){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))]})),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(e){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))],2)]):t._e()],2),t.skills.length!==i+1?a("p",[t._v(t._s(">"))]):t._e()])}))],2):t._e()},n=[],r=a("d4ec"),l=a("bee2"),s=a("262e"),o=a("2caf"),_=a("9ab4"),u=a("1b40"),c=a("6b98"),d=a("f015"),f=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(l["a"])(a,[{key:"EBattleEffectKind",get:function(){return d["c"]}}]),a}(c["a"]);Object(_["b"])([Object(u["c"])({type:Array,default:function(){return[]}})],f.prototype,"skills",void 0),Object(_["b"])([Object(u["c"])({type:Boolean,default:!0})],f.prototype,"showTitle",void 0),f=Object(_["b"])([Object(u["a"])({components:{}})],f);var m=f,v=m,p=(a("0227"),a("2877")),g=Object(p["a"])(v,i,n,!1,null,"659e5d12",null);e["a"]=g.exports},"820c":function(t,e,a){"use strict";a("eb62")},"94e3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-dialog",{attrs:{title:"",visible:t.fbxDialogVisible,width:"90%"},on:{"update:visible":function(e){t.fbxDialogVisible=e}}},[a("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:t.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:t.item.model,position:t.fbxPosition,rotation:t.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(e){t.fbxLoading=!1}}})],1),t.item?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[t._v(t._s(t.item.NAME))]),t.item.model?a("div",{staticClass:"item-has-3d",on:{click:t.openFbxViwer}},[a("img",{staticClass:"icon-full",attrs:{src:t.item.icon,alt:t.item.NAME}})]):a("div",[a("img",{staticClass:"icon-full",attrs:{src:t.item.icon,alt:t.item.NAME}})]),a("p",[t._v(t._s(t.item.DESC))]),a("div",{staticClass:"item-local-link"},[t.item.RSP.length?a("p",[a("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:t.item.DF,quality:t.itemModifier.quality}}}},[t._v(t._s(t.$t("調合")))])],1):t._e(),t.item.model?a("p",[a("el-link",{attrs:{underline:!1},on:{click:t.openFbxViwer}},[t._v("3D")])],1):t._e()]),a("br"),a("p",[t._v("DF: "+t._s(t.item.DF))]),a("p",[t._v(t._s(t.$t("種類"))+": "+t._s(t.$t(t.dataManager.lookup.itemCategory[t.item.CATEG])))]),t.item.EQU_BRD?[a("p",[t._v(t._s(t.$t("性別"))+": "+t._s(t.item.genderTextIcon))])]:t._e(),t.item.WPN_KIND?[a("p",[t._v(t._s(t.$t("武器種類"))+": "+t._s(t.$t(t.dataManager.lookup.weaponKind[t.item.WPN_KIND])))]),a("p",[t._v(t._s(t.$t("攻撃属性"))+": "+t._s(t.$t(t.dataManager.lookup.EBattleElementKind[t.item.elementChangeSkill?t.item.elementChangeSkill.effectValue:0])))]),t.item.WPN_KIND!==t.EWeaponKind.eSHIELD?a("p",[t._v(t._s(t.$t("攻撃タイプ"))+": "+t._s(t.$t(t.dataManager.lookup.attackType[+t.ItemMVList.magicDamageWeaponKinds.includes(t.item.WPN_KIND)])))]):t._e(),t.item.JOB.length?[a("p",[t._v(t._s(t.$t("職業"))+": "+t._s(t.item.JOB.map((function(e){return t.$t(t.dataManager.lookup.EJobKind[e])})).join(",")))])]:t._e(),t.item.getAttackSkill()?a("p",[t._v(t._s(t.$t("SP回復率"))+" "+t._s(t.item.getAttackSkill().spAdd)+" "+t._s(t.$t("倍")))]):t._e()]:t._e(),t.item.RSP.length?[a("p",[t._v(t._s(t.$t("レシピ種類"))+": "+t._s(1===t.item.RCP_TYPE?t.$t("レジェンドレシピ"):t.$t("一般レシピ")))]),a("p",[t._v(t._s(t.$t("おすすめ錬金 LV"))+" "+t._s(t.item.ALT?t.item.ALT.LV:"-"))])]:t._e(),t.item.ALT.EXP?a("p",[t._v(t._s(t.$t("調合"))+t._s(t.$t("経験値"))+": "+t._s(t.item.ALT.EXP))]):t._e(),a("p",[a("el-tooltip",{attrs:{content:t.dataManager.wealthById[2].NAME,placement:"right"}},[a("span",{staticClass:"wealth-container"},[a("span",[t._v(t._s(t.$t("売却")))]),a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.dataManager.wealthById[2].NAME}}),a("span",[t._v(t._s(t.item.RST.MN))])])])],1)],2),a("div",{staticClass:"item-container-right"},[t.item.hasSkill||t.item.EQU_BRD?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:t.$t("品質")}},[a("el-input-number",{attrs:{size:"mini",min:1,max:t.item.EQU_BRD?1/0:100,step:1,"step-strictly":""},model:{value:t.itemModifier.quality,callback:function(e){t.$set(t.itemModifier,"quality",e)},expression:"itemModifier.quality"}})],1),t.item.EQU_BRD?a("el-form-item",{attrs:{label:"LV"}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:t.itemModifier.level,callback:function(e){t.$set(t.itemModifier,"level",e)},expression:"itemModifier.level"}})],1):t._e()],1)],1),a("div",[a("div",{staticClass:"item-modify"},[t.item.EQU_BRD?a("div",[a("div",{staticClass:"item-levels"},[a("table",[t._l(t.item.getStates(t.itemModifier.quality,t.itemModifier.level),(function(e){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(t.$t(e.label)))]),e.value||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(e.total))]),e.value||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])})),t._l(t.item.getElements(t.itemModifier.quality),(function(e){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(t.$t(e.label)))]),e.value||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[t._v(t._s(e.total))]),e.value||e.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[e.value?a("tr",[a("th",[t._v(t._s(t.$t("ベース")))]),a("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l(e.skills,(function(e){return a("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])}))],2)])]):t._e(),a("div",t._l(t.item.getSkills(t.itemModifier.quality),(function(e){return a("div",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("p",[t._v(t._s(e.name))]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[e.detail?a("p",{staticClass:"popover-base__detail"},[t._v(t._s(e.detail))]):t._e(),a("br"),a("p",[t._v(t._s(t.$t("数値"))+": "+t._s(e.effectValue)+", "+t._s(e.effectValue2))]),t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var i=e[0],n=e[1];return a("p",[t._v(t._s((100*i.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])})),t._l(e.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var i=e[0],n=e[1];return a("p",[t._v(t._s((100*i.rate).toFixed())+"% "+t._s(n.name)+" "+t._s(n.turn)+t._s(t.$t("ターン")))])}))],2)])],2)],1)})),0)])])]):t._e(),t.item.GROUP_DF&&t.dataManager.charactersByGroupDf[t.item.GROUP_DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("キャラクター專用")))]),t._l(t.dataManager.charactersByGroupDf[t.item.GROUP_DF],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[a("el-tooltip",{attrs:{content:t.NAME,placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:t.icon,alt:t.NAME}})])],1)],1)}))],2):t._e(),t.item.LRCP_CHARA.length?a("div",[a("el-divider",[t._v(t._s(t.$t("レジェンドレシピ")))]),t._l(t.item.LRCP_CHARA.map((function(e){return t.dataManager.characterById[e.DF]})).filter((function(t){return t})),(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[a("el-tooltip",{attrs:{content:t.NAME,placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:t.icon,alt:t.NAME}})])],1)],1)])}))],2):t._e(),t.dataManager.questsByGetItem[t.item.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("クエスト調合/採取")))]),t._l(t.dataManager.questsByGetItem[t.item.DF],(function(e){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:e.DF}}}},[t._v(t._s(e.NAME))])],1)])}))],2):t._e(),t.dataManager.questsByDeliverItem[t.item.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("クエスト納品")))]),t._l(t.dataManager.questsByDeliverItem[t.item.DF],(function(e){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:e.DF}}}},[t._v(t._s(e.NAME))])],1)])}))],2):t._e(),t.dataManager.questsByRewardItem[t.item.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("クエスト報酬")))]),t._l(t.dataManager.questsByRewardItem[t.item.DF],(function(e){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:e.DF}}}},[t._v(t._s(e.NAME))])],1)])}))],2):t._e(),t.dataManager.api.huntInfosByItemId[t.item.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("トレジャー")))]),t._l(t.dataManager.api.huntInfosByItemId[t.item.DF],(function(e,i){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoHunt",query:{huntId:e.HUNTID}}}},[t._v(t._s(e.NAME))])],1),t._l(e.RWD.TRS.concat(e.RWD.ITM).filter((function(e){return e.DF===t.item.DF})),(function(e,i){return a("p",[a("span",[t._v(t._s(t.$t("品質"))+t._s(e.QTY))]),e.TRT?a("span",[t._v(" "+t._s(t.dataManager.skillById[e.TRT].name.replace(/\s+/gm,"")))]):t._e()])})),t.dataManager.api.huntInfosByItemId[t.item.DF].length!==i+1?a("br"):t._e()],2)}))],2):t._e(),t._l([t.dataManager.fieldItemById[t.item.DF]].filter((function(t){return t})),(function(e){return a("div",[a("el-divider",[t._v(t._s(t.$t("フィールド用")))]),a("table",[a("tr",[a("th",[t._v(t._s(t.$t("目標")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.eRange])))])]),a("tr",[a("th",[t._v(t._s(t.$t("効果")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.eFieldItemUse[e.eUse])))])]),t._l([e.eStateList.map((function(e){return t.dataManager.abnormalStateById[e]})).filter((function(t){return t}))].filter((function(t){return t.length})),(function(i){return a("tr",[a("th",[t._v(t._s(t.$t("状態")))]),a("td",t._l(i,(function(i,n){return a("div",[a("p",[t._v(t._s(i.name))]),a("p",[t._v(t._s(i.turn)+" "+t._s(t.$t("ターン")))]),e.eStateList.length!==n+1?a("p",[t._v(t._s(">"))]):t._e()])})),0)])}))],2)],1)})),t.item.RSP.length?a("div",[a("el-divider",[t._v(t._s(t.$t("調合條件")))]),t.item.ALT.CST?a("div",[a("p",[a("el-tooltip",{attrs:{content:t.dataManager.wealthById[2].NAME,placement:"right"}},[a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.dataManager.wealthById[2].NAME}}),a("span",[t._v(t._s(t.item.ALT.CST))])])])],1)]):t._e(),a("div",{staticClass:"item-compose-items"},t._l(t.item.RSP.map((function(e){return[e,t.dataManager.itemById[e.DF]]})),(function(e){var i=e[0],n=e[1];return a("div",{staticClass:"item-compose-item"},[a("el-tooltip",{attrs:{content:n.NAME,placement:"top"}},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:i.DF}}}},[a("img",{staticClass:"icon-small",attrs:{src:n.icon,alt:n.NAME}}),a("span",[t._v("x"+t._s(i.NC))])])],1)],1)})),0)],1):t._e(),t.dataManager.itemsByRecipe[t.item.DF]?a("div",[a("el-divider",[t._v(t._s(t.$t("材料")))]),a("div",{staticClass:"item-making-container"},t._l(t.dataManager.itemsByRecipe[t.item.DF],(function(t){return a("div",[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[a("el-tooltip",{attrs:{content:t.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.DF}})])],1)],1)})),0)],1):t._e(),t._l(t.item.SPC.map((function(e){return[e,e.SKILL.map((function(e){return t.dataManager.skillById[e.DF]})).filter((function(t){return t}))]})).filter((function(t){return t[1].length})),(function(e){var i=e[0],n=e[1];return t.item.SPC.length?[a("SkillTextInfo",{attrs:{skills:n}},[a("template",{slot:"title"},[t._v(t._s(t.$t("スキル"))+" ("+t._s(t.$t("品質"))+" "+t._s(i.THR)+")")])],2)]:t._e()}))],2)]):t._e()],1)},n=[],r=a("d4ec"),l=a("bee2"),s=a("262e"),o=a("2caf"),_=(a("caad"),a("2532"),a("9ab4")),u=a("2fe1"),c=a("6b98"),d=a("8faf"),f=a("9eae"),m=a("2ef0"),v=a("e360"),p=a("f015"),g=a("45b5"),h=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.fbxDialogVisible=!1,t.fbxLoading=null,t.item=null,t.itemModifier=new f["a"],t}return Object(l["a"])(a,[{key:"ItemMVList",get:function(){return d["b"]}},{key:"EWeaponKind",get:function(){return p["l"]}},{key:"fbxRotation",get:function(){var t;return d["b"].weaponKindCategory.includes(null===(t=this.item)||void 0===t?void 0:t.CATEG)?{x:0,y:0,z:Math.PI}:this.item.CATEG===p["g"].eARMOR?{x:-Math.PI/2,y:0,z:0}:[p["g"].eHELM,p["g"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:0,z:Math.PI}:{x:0,y:0,z:0}}},{key:"fbxPosition",get:function(){var t;return d["b"].weaponKindCategory.includes(null===(t=this.item)||void 0===t?void 0:t.CATEG)?{x:0,y:0,z:0}:this.item.CATEG===p["g"].eARMOR?{x:0,y:-.5,z:0}:[p["g"].eHELM,p["g"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:1.2,z:-1.2}:{x:0,y:0,z:0}}},{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.item=this.dataManager.itemById[this.$route.query.df],this.item||this.$router.push({name:"Items"});var t=this.item.EQU_BRD?1/0:d["b"].itemMaxQuality;this.itemModifier.quality=this.$route.query.quality?Object(m["clamp"])(+this.$route.query.quality,1,t):d["b"].equipmentMaxQuality,this.itemModifier.level=this.$route.query.level?Object(m["clamp"])(+this.$route.query.level,1,1/0):d["b"].equipmentMaxLevel}}]),a}(c["a"]);h=Object(_["b"])([Object(u["b"])({components:{"model-fbx":v["ModelFbx"],SkillTextInfo:g["a"]}})],h);var b=h,y=b,k=(a("820c"),a("2877")),M=Object(k["a"])(y,i,n,!1,null,"045443d6",null);e["default"]=M.exports},df91:function(t,e,a){},eb62:function(t,e,a){}}]);