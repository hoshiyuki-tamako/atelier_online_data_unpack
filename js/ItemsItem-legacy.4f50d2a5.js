(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ItemsItem"],{"874f":function(t,e,i){},"94e3":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("el-dialog",{attrs:{title:"",visible:t.fbxDialogVisible,width:"90%"},on:{"update:visible":function(e){t.fbxDialogVisible=e}}},[i("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:t.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:t.item.model,position:t.fbxPosition,rotation:t.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(e){t.fbxLoading=!1}}})],1),t.item?i("div",{staticClass:"item-container"},[i("div",{staticClass:"item-container-left"},[i("h3",{staticClass:"item-name"},[t._v(t._s(t.item.NAME))]),t.item.model?i("div",{staticClass:"item-has-3d",on:{click:t.openFbxViwer}},[i("img",{staticClass:"icon-full",attrs:{src:t.item.icon,alt:t.item.NAME}})]):i("div",[i("img",{staticClass:"icon-full",attrs:{src:t.item.icon,alt:t.item.NAME}})]),i("p",[t._v(t._s(t.item.DESC))]),i("div",{staticClass:"item-local-link"},[t.item.RSP.length?i("p",[i("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:t.item.DF,quality:t.itemModifier.quality}}}},[t._v(t._s(t.$t("調合")))])],1):t._e(),t.item.model?i("p",[i("el-link",{attrs:{underline:!1},on:{click:t.openFbxViwer}},[t._v("3D")])],1):t._e()]),i("br"),i("p",[t._v("DF: "+t._s(t.item.DF))]),i("p",[t._v(t._s(t.$t("種類"))+": "+t._s(t.$t(t.dataManager.lookup.itemCategory[t.item.CATEG])))]),t.item.EQU_BRD?[i("p",[t._v(t._s(t.$t("性別"))+": "+t._s(t.item.genderTextIcon))])]:t._e(),t.item.WPN_KIND?[i("p",[t._v(t._s(t.$t("武器種類"))+": "+t._s(t.$t(t.dataManager.lookup.weaponKind[t.item.WPN_KIND])))]),i("p",[t._v(t._s(t.$t("攻撃属性"))+": "+t._s(t.$t(t.dataManager.lookup.EBattleElementKind[t.item.elementChangeSkill?t.item.elementChangeSkill.effectValue:0])))]),t.item.WPN_KIND!==t.EWeaponKind.eSHIELD?i("p",[t._v(t._s(t.$t("攻撃タイプ"))+": "+t._s(t.$t(t.dataManager.lookup.attackType[+t.ItemMVList.magicDamageWeaponKinds.includes(t.item.WPN_KIND)])))]):t._e(),t.item.JOB.length?[i("p",[t._v(t._s(t.$t("職業"))+": "+t._s(t.item.JOB.map((function(e){return t.$t(t.dataManager.lookup.EJobKind[e])})).join(",")))])]:t._e(),t.item.getAttackSkill()?i("p",[t._v(t._s(t.$t("SP回復率"))+t._s(t.item.getAttackSkill().spAdd)+t._s(t.$t("倍")))]):t._e()]:t._e(),t.item.RSP.length?[i("p",[t._v(t._s(t.$t("レシピ種類"))+": "+t._s(1===t.item.RCP_TYPE?t.$t("レジェンドレシピ"):t.$t("一般レシピ")))]),i("p",[t._v(t._s(t.$t("おすすめ錬金 LV"))+" "+t._s(t.item.ALT?t.item.ALT.LV:"-"))])]:t._e(),i("p",[i("span",{staticClass:"wealth-container"},[i("span",[t._v(t._s(t.$t("売却")))]),i("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.$t("エーテル")}}),i("span",[t._v(t._s(t.item.RST.MN))])])])],2),i("div",{staticClass:"item-container-right"},[t.item.hasSkill||t.item.EQU_BRD?i("div",[i("div",[i("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[i("el-form-item",{attrs:{label:t.$t("品質")}},[i("el-input-number",{attrs:{size:"mini",min:1,max:t.item.EQU_BRD?1/0:100,step:1,"step-strictly":""},model:{value:t.itemModifier.quality,callback:function(e){t.$set(t.itemModifier,"quality",e)},expression:"itemModifier.quality"}})],1),t.item.EQU_BRD?i("el-form-item",{attrs:{label:"LV"}},[i("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:t.itemModifier.level,callback:function(e){t.$set(t.itemModifier,"level",e)},expression:"itemModifier.level"}})],1):t._e()],1)],1),i("div",[i("div",{staticClass:"item-modify"},[t.item.EQU_BRD?i("div",[i("div",{staticClass:"item-levels"},[i("table",[t._l(t.item.getStates(t.itemModifier.quality,t.itemModifier.level),(function(e){return i("tr",[i("th",[i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("span",[t._v(t._s(t.$t(e.label)))]),e.value||e.skills.length?i("template",{slot:"popover"},[i("div",{staticClass:"popover-base"},[i("table",[e.value?i("tr",[i("th",[t._v(t._s(t.$t("ベース")))]),i("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?i("tr",[i("th",[t._v(t._s(t.$t("スキル")))]),i("td",t._l(e.skills,(function(e){return i("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),i("td",[i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("span",[t._v(t._s(e.total))]),e.value||e.skills.length?i("template",{slot:"popover"},[i("div",{staticClass:"popover-base"},[i("table",[e.value?i("tr",[i("th",[t._v(t._s(t.$t("ベース")))]),i("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?i("tr",[i("th",[t._v(t._s(t.$t("スキル")))]),i("td",t._l(e.skills,(function(e){return i("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])})),t._l(t.item.getElements(t.itemModifier.quality),(function(e){return i("tr",[i("th",[i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("span",[t._v(t._s(t.$t(e.label)))]),e.value||e.skills.length?i("template",{slot:"popover"},[i("div",{staticClass:"popover-base"},[i("table",[e.value?i("tr",[i("th",[t._v(t._s(t.$t("ベース")))]),i("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?i("tr",[i("th",[t._v(t._s(t.$t("スキル")))]),i("td",t._l(e.skills,(function(e){return i("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1),i("td",[i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("span",[t._v(t._s(e.total))]),e.value||e.skills.length?i("template",{slot:"popover"},[i("div",{staticClass:"popover-base"},[i("table",[e.value?i("tr",[i("th",[t._v(t._s(t.$t("ベース")))]),i("td",[t._v(t._s(e.value))])]):t._e(),e.skills.length?i("tr",[i("th",[t._v(t._s(t.$t("スキル")))]),i("td",t._l(e.skills,(function(e){return i("p",[t._v(t._s(e.name)+" "+t._s(e.effectValue>0?"+":"")+t._s(e.effectValue))])})),0)]):t._e()])])]):t._e()],2)],1)])}))],2)])]):t._e(),i("div",t._l(t.item.getSkills(t.itemModifier.quality),(function(e){return i("div",[i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("p",[t._v(t._s(e.name))]),i("template",{slot:"popover"},[i("div",{staticClass:"popover-base"},[e.detail?i("p",{staticClass:"popover-base__detail"},[t._v(t._s(e.detail))]):t._e(),i("br"),i("p",[t._v(t._s(t.$t("数値"))+": "+t._s(e.effectValue)+", "+t._s(e.effectValue2))]),t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],s=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン"))+"j")])})),t._l(e.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],s=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])}))],2)])],2)],1)})),0)])])]):t._e(),t.item.GROUP_DF&&t.dataManager.charactersByGroupDf[t.item.GROUP_DF]?i("div",[i("el-divider",[t._v(t._s(t.$t("キャラクター專用")))]),t._l(t.dataManager.charactersByGroupDf[t.item.GROUP_DF],(function(t){return i("p",[i("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[i("img",{staticClass:"icon-middle",attrs:{src:t.icon,alt:t.NAME}})])],1)}))],2):t._e(),t.item.LRCP_CHARA.length?i("div",[i("el-divider",[t._v(t._s(t.$t("レジェンドレシピ")))]),t._l(t.item.LRCP_CHARA.map((function(e){return t.dataManager.characterById[e.DF]})).filter((function(t){return t})),(function(t){return i("div",[i("p",[i("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[i("img",{staticClass:"icon-middle",attrs:{src:t.icon,alt:t.NAME}})])],1)])}))],2):t._e(),t.dataManager.questsByRewardItem[t.item.DF]?i("div",[i("el-divider",[t._v(t._s(t.$t("クェスト報酬")))]),t._l(t.dataManager.questsByRewardItem[t.item.DF],(function(e){return i("div",[i("p",[i("router-link",{attrs:{to:{name:"InfoQuest",query:{df:e.DF}}}},[t._v(t._s(e.NAME))])],1)])}))],2):t._e(),t._l([t.dataManager.fieldItemById[t.item.DF]].filter((function(t){return t})),(function(e){return i("div",[i("el-divider",[t._v(t._s(t.$t("フィールド用")))]),i("table",[i("tr",[i("th",[t._v(t._s(t.$t("目標")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.eRange])))])]),i("tr",[i("th",[t._v(t._s(t.$t("効果")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.eFieldItemUse[e.eUse])))])]),t._l([e.eStateList.map((function(e){return t.dataManager.abnormalStateById[e]})).filter((function(t){return t}))].filter((function(t){return t.length})),(function(a){return i("tr",[i("th",[t._v(t._s(t.$t("状態")))]),i("td",t._l(a,(function(a,s){return i("div",[i("p",[t._v(t._s(a.name))]),i("p",[t._v(t._s(a.turn)+" "+t._s(t.$t("ターン")))]),e.eStateList.length!==s+1?i("p",[t._v(t._s(">"))]):t._e()])})),0)])}))],2)],1)})),t.item.RSP.length?i("div",[i("el-divider",[t._v(t._s(t.$t("調合條件")))]),t.item.ALT.CST?i("div",[i("p",[i("span",{staticClass:"wealth-container"},[i("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.$t("エーテル")}}),i("span",[t._v(t._s(t.item.ALT.CST))])])])]):t._e(),i("div",{staticClass:"item-compose-items"},t._l(t.item.RSP.map((function(e){return[e,t.dataManager.itemById[e.DF]]})),(function(e){var a=e[0],s=e[1];return i("div",{staticClass:"item-compose-item"},[i("router-link",{attrs:{to:{name:"ItemsItem",query:{df:a.DF}}}},[i("img",{staticClass:"icon-small",attrs:{src:s.icon,alt:s.NAME}}),i("span",[t._v("x"+t._s(a.NC))])])],1)})),0)],1):t._e(),t.dataManager.itemsByRecipe[t.item.DF]?i("div",[i("el-divider",[t._v(t._s(t.$t("材料")))]),i("div",{staticClass:"item-making-container"},t._l(t.dataManager.itemsByRecipe[t.item.DF],(function(t){return i("div",[i("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[i("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.DF}})])],1)})),0)],1):t._e(),t.item.SPC.length?i("div",t._l(t.item.SPC.map((function(e){return[e,e.SKILL.map((function(e){return t.dataManager.skillById[e.DF]})).filter((function(t){return t}))]})).filter((function(t){return t[1].length})),(function(e){var a=e[0],s=e[1];return i("div",[i("el-divider",[t._v(t._s(t.$t("スキル"))+" ("+t._s(t.$t("品質"))+" "+t._s(a.THR)+")")]),t._l(s,(function(e,a){return i("table",[i("tr",[i("th",[t._v(t._s(t.$t("名前")))]),i("td",[i("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}}}},[t._v(t._s(e.name))])],1)]),i("tr",[i("th",[t._v(t._s(t.$t("詳細")))]),i("td",[t._v(t._s(e.detail))])]),i("tr",[i("th",[t._v(t._s(t.$t("数値")))]),i("td",[t._v(t._s(e.effectValue)+", "+t._s(e.effectValue2))])]),1===e.type?[i("tr",[i("th",[t._v(t._s(t.$t("攻撃タイプ")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttribute[e.attackSkill.attribute])))])]),i("tr",[i("th",[t._v(t._s(t.$t("属性")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.attackSkill.element])))])]),i("tr",[i("th",[t._v(t._s(t.$t("對象")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam]))+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope])))])]),e.attackSkill.stateOwn.length?i("tr",[i("th",[t._v(t._s(t.$t("追加状態 (自)")))]),i("td",t._l(e.attackSkill.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],s=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])})),0)]):t._e(),e.attackSkill.state.length?i("tr",[i("th",[t._v(t._s(t.$t("追加状態")))]),i("td",t._l(e.attackSkill.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],s=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(s.name)+" "+t._s(s.turn)+t._s(t.$t("ターン")))])})),0)]):t._e()]:t._e(),s.length!==a+1?i("p",[t._v(t._s(">"))]):t._e()],2)}))],2)})),0):t._e()],2)]):t._e(),i("hr")],1)},s=[],n=(i("caad"),i("2532"),i("d4ec")),l=i("bee2"),r=i("262e"),o=i("2caf"),_=i("9ab4"),m=i("2fe1"),u=i("0aea"),d=i("5456"),c=i("8faf"),v=i("9eae"),p=i("2ef0"),f=i("e360"),g=i("f015"),h=function(t){Object(r["a"])(i,t);var e=Object(o["a"])(i);function i(){var t;return Object(n["a"])(this,i),t=e.apply(this,arguments),t.fbxDialogVisible=!1,t.fbxLoading=null,t.item=null,t.itemModifier=new v["a"],t}return Object(l["a"])(i,[{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.item=d["a"].itemById[this.$route.query.df],this.item||this.$router.push({name:"Items"});var t=this.item.EQU_BRD?1/0:c["b"].itemMaxQuality;this.itemModifier.quality=this.$route.query.quality?Object(p["clamp"])(+this.$route.query.quality,1,t):c["b"].equipmentMaxQuality,this.itemModifier.level=this.$route.query.level?Object(p["clamp"])(+this.$route.query.level,1,1/0):c["b"].equipmentMaxLevel}},{key:"ItemMVList",get:function(){return c["b"]}},{key:"EWeaponKind",get:function(){return g["j"]}},{key:"fbxRotation",get:function(){var t;return c["b"].weaponKindCategory.includes(null===(t=this.item)||void 0===t?void 0:t.CATEG)?{x:0,y:0,z:Math.PI}:this.item.CATEG===g["f"].eARMOR?{x:-Math.PI/2,y:0,z:0}:[g["f"].eHELM,g["f"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:0,z:Math.PI}:{x:0,y:0,z:0}}},{key:"fbxPosition",get:function(){var t;return c["b"].weaponKindCategory.includes(null===(t=this.item)||void 0===t?void 0:t.CATEG)?{x:0,y:0,z:0}:this.item.CATEG===g["f"].eARMOR?{x:0,y:-.5,z:0}:[g["f"].eHELM,g["f"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:1.2,z:-1.2}:{x:0,y:0,z:0}}}]),i}(u["a"]);h=Object(_["b"])([Object(m["a"])({components:{"model-fbx":f["ModelFbx"]}})],h);var b=h,k=b,$=(i("ee62"),i("2877")),y=Object($["a"])(k,a,s,!1,null,"2c039944",null);e["default"]=y.exports},ee62:function(t,e,i){"use strict";i("874f")}}]);