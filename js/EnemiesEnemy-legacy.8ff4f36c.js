(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EnemiesEnemy"],{"0bc2":function(e,t,a){},"13df":function(e,t,a){"use strict";var n=a("0bc2"),i=a.n(n);i.a},5897:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[a("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.enemy.model,position:e.fbxPosition,rotation:e.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.enemy.strName))]),e.enemy.model?a("div",{staticClass:"item-has-3d",on:{click:e.openFbxViwer}},[a("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:e.enemy.strName}})]):a("div",[a("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:e.enemy.strName}})]),a("p",[e._v(e._s(e.enemy.strDesc))]),e.enemy.model?a("p",[a("el-link",{attrs:{underline:!1},on:{click:e.openFbxViwer}},[e._v("3D")])],1):e._e(),a("br"),a("p",[e._v("DF: "+e._s(e.enemy.DF))]),a("p",[e._v(e._s(e.$t("短い名前"))+": "+e._s(e.enemy.AnotherName))]),a("p",[e._v(e._s(e.$t("種族"))+": "+e._s(e.dataManager.enemyKindListById[e.enemy.eKind].strName))]),a("p",[e._v(e._s(e.$t("攻撃目標"))+": "+e._s(e.$t(e.dataManager.lookup.EAttackTargetKind[e.enemy.eAttackTargetKind])))]),a("p",[e._v(e._s(e.$t("ボス"))+": "+e._s(e.enemy.bBoss?"✓":"x"))]),a("p",[e._v(e._s(e.$t("オンラインオーンリー"))+": "+e._s(e.enemy.bOnlyOnline?"✓":"x"))]),a("p",[e._v(e._s(e.$t("大きさ"))+": "+e._s(e.$t(e.dataManager.lookup.eEnemySize[e.enemy.eSize])))]),a("p",[e._v(e._s(e.$t("視角"))+": "+e._s(e.enemy.viewAngleDegree)+"°")]),a("p",[e._v(e._s(e.$t("移動速度"))+": "+e._s(e.enemy.fMoveSpeed))]),a("p",[e._v(e._s(e.$t("打撃範囲"))+": "+e._s(e.enemy.fHitRadius))])]),a("div",{staticClass:"item-container-right"},[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:"LV"}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.enemyModifier.level,callback:function(t){e.$set(e.enemyModifier,"level",t)},expression:"enemyModifier.level"}})],1)],1),a("table",[e._l(e.enemy.getStates(e.enemyModifier.level),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])])})),e._l(e.enemy.getElements(e.enemyModifier.level).filter((function(e){return e.value})),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])])}))],2)],1),e.appareAreas.length?a("div",[a("el-divider",[e._v(e._s(e.$t("出現エリア")))]),e._l(e.appareAreas,(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Areas",query:{df:t.iAreaId}}}},[e._v(e._s(e.dataManager.fieldNameById[t.iAreaNameId].strAreaName))])],1)}))],2):e._e(),e.enemy.sParam.SKILL.length?a("div",[a("el-divider",[e._v(e._s(e.$t("スキル"))+"/"+e._s(e.$t("効果")))]),e._l(e.enemy.sParam.SKILL.map((function(t){return e.dataManager.skillById[t.DF]})).filter((function(e){return e})),(function(t,n){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[e._v(e._s(e.$t("名前")))]),a("td",[e._v(e._s(t.name))])]),a("tr",[a("th",[e._v(e._s(e.$t("詳細")))]),a("td",[e._v(e._s(t.detail))])]),a("tr",[a("th",[e._v(e._s(e.$t("数値")))]),a("td",[e._v(e._s(t.effectValue)+", "+e._s(t.effectValue2))])]),1===t.type?[a("tr",[a("th",[e._v(e._s(e.$t("攻撃タイプ")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.attackSkill.attribute])))])]),a("tr",[a("th",[e._v(e._s(e.$t("属性")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]),a("tr",[a("th",[e._v(e._s(e.$t("對象")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])]),t.attackSkill.stateOwn.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態 (自)")))]),a("td",e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return a("p",[e._v(e._s((100*n.rate).toFixed())+"% "+e._s(i.name)+" "+e._s(i.turn)+e._s(e.$t("ターン")))])})),0)]):e._e(),t.attackSkill.state.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態")))]),a("td",e._l(t.attackSkill.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return a("p",[e._v(e._s((100*n.rate).toFixed())+"% "+e._s(i.name)+" "+e._s(i.turn)+e._s(e.$t("ターン")))])})),0)]):e._e()]:e._e()],2),e.enemy.sParam.SKILL.length!==n+1?a("p",[e._v(e._s(">"))]):e._e()])}))],2):e._e()])])],1)},i=[],r=(a("99af"),a("4de4"),a("caad"),a("d81d"),a("d3b7"),a("ac1f"),a("6062"),a("2532"),a("3ca3"),a("1276"),a("ddb0"),a("3835")),s=a("2909"),l=a("d4ec"),o=a("bee2"),c=a("262e"),u=a("2caf"),_=a("9ab4"),d=a("2fe1"),m=a("0aea"),f=a("5456"),v=a("f8f9"),b=a("a6fe"),p=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(l["a"])(this,a),t.apply(this,arguments)}return a}(b["a"]),y=a("e360"),g=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.fbxDialogVisible=!1,e.fbxLoading=null,e.enemy=null,e.enemyModifier=new p,e}return Object(o["a"])(a,[{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.enemyModifier.level=+this.$route.query.level||v["b"].defaultLevel,this.enemy=f["a"].enemyById[this.$route.query.df],this.enemy||this.$router.push({name:"Enemies"})}},{key:"fbxRotation",get:function(){return{x:0,y:0,z:0}}},{key:"fbxPosition",get:function(){return{x:0,y:0,z:0}}},{key:"appareAreas",get:function(){var e=this,t=Object(s["a"])(f["a"].spawnerDataManager.spawnLists.entries()).map((function(t){var a=Object(r["a"])(t,2),n=a[0],i=a[1];return{csvFileName:n,spawners:i.filter((function(t){return 3===t.spawnerKind&&t.DF===e.enemy.DF}))}})).filter((function(e){return e.spawners.length})).map((function(e){return+e.csvFileName.split("_")[1]})),a=f["a"].areaDetail.List.filter((function(t){return t.iEnemyIDList.includes(e.enemy.DF)})).map((function(e){return e.iAreaID}));return Object(s["a"])(new Set(t.concat(a))).sort((function(e,t){return e-t})).map((function(e){return f["a"].areaInfoById[e]})).filter((function(e){return e}))}}]),a}(m["a"]);g=Object(_["__decorate"])([Object(d["a"])({components:{"model-fbx":y["ModelFbx"]}})],g);var h=g,k=h,$=(a("13df"),a("2877")),x=Object($["a"])(k,n,i,!1,null,"2cb5a821",null);t["default"]=x.exports}}]);