(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EnemiesEnemy"],{"0c21":function(e,t,a){"use strict";a("5b49")},"45b5":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skills&&e.skills.length?a("div",[e.showTitle?a("el-divider",[e._t("title",[e._v(e._s(e.$t("スキル")))])],2):e._e(),e._l(e.skills,(function(t,n){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[e._v(e._s(e.$t("名前")))]),a("td",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}}}},[e._v(e._s(t.name))])],1)]),a("tr",[a("th",[e._v(e._s(e.$t("詳細")))]),a("td",[e._v(e._s(t.detail))])]),a("tr",[a("th",[e._v(e._s(e.$t("数値")))]),a("td",[e._v(e._s(t.effectValue)+", "+e._s(t.effectValue2))])]),1===t.type?[a("tr",[a("th",[e._v(e._s(e.$t("攻撃タイプ")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.attackSkill.attribute])))])]),a("tr",[a("th",[e._v(e._s(e.$t("属性")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]),a("tr",[a("th",[e._v(e._s(e.$t("對象")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])])]:e._e(),t.attackSkill.stateOwn.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態 (自)")))]),a("td",e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return a("p",[e._v(e._s((100*n.rate).toFixed())+"% "+e._s(i.name)+" "+e._s(i.turn)+e._s(e.$t("ターン")))])})),0)]):e._e(),t.attackSkill.state.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態")))]),a("td",e._l(t.attackSkill.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return a("p",[e._v(e._s((100*n.rate).toFixed())+"% "+e._s(i.name)+" "+e._s(i.turn)+e._s(e.$t("ターン")))])})),0)]):e._e(),e._l([e.dataManager.zoneById[t.effectValue]].filter((function(e){return e})),(function(n){return t.effect===e.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:n.id}}}},[e._v(e._s(n.name))])],1),a("td",e._l(n.effectlist,(function(t){return a("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])})),0)]):e._e()})),t.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.effectValue]?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l([e.dataManager.skillById[t.effectValue]],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}}}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),t.combSkillList.length?a("tr",[a("th",[e._v(e._s(e.$t("含まれるスキル")))]),a("td",e._l(t.combSkillList,(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}}}},[e._v(e._s(t.name))])],1)})),0)]):e._e()],2),e.skills.length!==n+1?a("p",[e._v(e._s(">"))]):e._e()])}))],2):e._e()},i=[],r=a("d4ec"),s=a("bee2"),l=a("262e"),o=a("2caf"),u=a("9ab4"),c=a("2fe1");var d="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function f(e,t,a){if(d&&!Array.isArray(e)&&"function"!==typeof e&&!e.hasOwnProperty("type")&&"undefined"===typeof e.type){var n=Reflect.getMetadata("design:type",t,a);n!==Object&&(e.type=n)}}function _(e){return void 0===e&&(e={}),function(t,a){f(e,t,a),Object(c["a"])((function(t,a){(t.props||(t.props={}))[a]=e}))(t,a)}}var m=a("6b98"),v=a("f015"),y=function(e){Object(l["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"EBattleEffectKind",get:function(){return v["c"]}}]),a}(m["a"]);Object(u["a"])([_({type:Array,default:function(){return[]}})],y.prototype,"skills",void 0),Object(u["a"])([_({type:Boolean,default:!0})],y.prototype,"showTitle",void 0),y=Object(u["a"])([Object(c["b"])({components:{}})],y);var b=y,p=b,g=(a("0c21"),a("2877")),k=Object(g["a"])(p,n,i,!1,null,"18ebe8b1",null);t["a"]=k.exports},5897:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[a("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.enemy.model,position:e.fbxPosition,rotation:e.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.enemy.strName))]),e.enemy.model?a("div",{staticClass:"item-has-3d",on:{click:e.openFbxViwer}},[a("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:e.enemy.strName}})]):a("div",[a("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:e.enemy.strName}})]),a("p",[e._v(e._s(e.enemy.strDesc))]),e.enemy.model?a("p",[a("el-link",{attrs:{underline:!1},on:{click:e.openFbxViwer}},[e._v("3D")])],1):e._e(),a("br"),a("p",[e._v("DF: "+e._s(e.enemy.DF))]),a("p",[e._v(e._s(e.$t("短い名前"))+": "+e._s(e.enemy.AnotherName))]),a("p",[e._v(e._s(e.$t("種族"))+": "+e._s(e.dataManager.enemyKindListById[e.enemy.eKind].strName))]),a("p",[e._v(e._s(e.$t("攻撃目標"))+": "+e._s(e.$t(e.dataManager.lookup.EAttackTargetKind[e.enemy.eAttackTargetKind])))]),a("p",[e._v(e._s(e.$t("ボス"))+": "+e._s(e.enemy.bBoss?"✓":"x"))]),a("p",[e._v(e._s(e.$t("オンラインオーンリー"))+": "+e._s(e.enemy.bOnlyOnline?"✓":"x"))]),a("p",[e._v(e._s(e.$t("大きさ"))+": "+e._s(e.$t(e.dataManager.lookup.eEnemySize[e.enemy.eSize])))]),a("p",[e._v(e._s(e.$t("視角"))+": "+e._s(e.enemy.viewAngleDegree)+"°")]),a("p",[e._v(e._s(e.$t("移動速度"))+": "+e._s(e.enemy.fMoveSpeed))]),a("p",[e._v(e._s(e.$t("打撃範囲"))+": "+e._s(e.enemy.fHitRadius))])]),a("div",{staticClass:"item-container-right"},[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:"LV"}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.enemyModifier.level,callback:function(t){e.$set(e.enemyModifier,"level",t)},expression:"enemyModifier.level"}})],1)],1),a("table",[e._l(e.enemy.getStates(e.enemyModifier.level),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])])})),e._l(e.enemy.getElements(e.enemyModifier.level).filter((function(e){return e.value})),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])])}))],2)],1),e.enemy.appearAreas.length?a("div",[a("el-divider",[e._v(e._s(e.$t("出現エリア")))]),e._l(e.enemy.appearAreas,(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Areas",query:{df:t.iAreaId}}}},[e._v(e._s(e.dataManager.fieldNameById[t.iAreaNameId].strAreaName))])],1)}))],2):e._e(),e.dataManager.questsByEnemy[e.enemy.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クェスト")))]),e._l(e.dataManager.questsByEnemy[e.enemy.DF],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}}}},[e._v(e._s(t.NAME))])],1)}))],2):e._e(),e.enemy.sParam.SKILL.length?a("SkillTextInfo",{attrs:{skills:e.enemy.sParam.SKILL.map((function(t){return e.dataManager.skillById[t.DF]})).filter((function(e){return e}))}}):e._e()],1)])],1)},i=[],r=(a("2ca0"),a("d4ec")),s=a("bee2"),l=a("262e"),o=a("2caf"),u=a("9ab4"),c=a("2fe1"),d=a("6b98"),f=a("f8f9"),_=a("a6fe"),m=function(e){Object(l["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return a}(_["a"]),v=a("e360"),y=a("45b5"),b=function(e){Object(l["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.fbxDialogVisible=!1,e.fbxLoading=null,e.enemy=null,e.enemyModifier=new m,e}return Object(s["a"])(a,[{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.enemyModifier.level=+this.$route.query.level||f["b"].defaultLevel,this.enemy=this.dataManager.enemyById[this.$route.query.df],this.enemy||this.$router.push({name:"Enemies"})}},{key:"fbxRotation",get:function(){return this.enemy.sParam.MDL.startsWith("044")?{x:0,y:0,z:0}:{x:0,y:Math.PI,z:Math.PI}}},{key:"fbxPosition",get:function(){return{x:0,y:0,z:0}}}]),a}(d["a"]);b=Object(u["a"])([Object(c["b"])({components:{"model-fbx":v["ModelFbx"],SkillTextInfo:y["a"]}})],b);var p=b,g=p,k=(a("7a30"),a("2877")),h=Object(k["a"])(g,n,i,!1,null,"22b00376",null);t["default"]=h.exports},"5b49":function(e,t,a){},"7a30":function(e,t,a){"use strict";a("a272")},a272:function(e,t,a){}}]);