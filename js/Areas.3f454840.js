(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Areas"],{"3af1":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"area-nav"},[t("h2",[e._v(e._s(e.$t("区域")))]),t("div",{staticClass:"area-navs"},e._l(e.dataManager.areaDetail.List,(function(a){return t("div",{staticClass:"area-nav"},[e._l([e.dataManager.areaInfoById[a.iAreaID]],(function(r){return[e._l([e.dataManager.fieldNameById[r.iAreaNameId]],(function(r){return[t("el-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#DF-"+a.iAreaID,duration:-1},expression:"{ el: `#DF-${areaDetail.iAreaID}`, duration: -1 }"}],attrs:{type:"primary",underline:!1}},[e._v(e._s(r.strAreaName)+" "+e._s(r.strAreaNameSub.trim()?"/ "+r.strAreaNameSub:""))])]}))]}))],2)})),0)]),t("el-divider"),t("div",e._l(e.dataManager.areaDetail.List,(function(a){return t("div",{staticClass:"item-container area-container",attrs:{id:"DF-"+a.iAreaID}},[e._l([e.dataManager.areaInfoById[a.iAreaID]],(function(r){return[e._l([e.dataManager.fieldNameById[r.iAreaNameId]],(function(n){return[t("div",{staticClass:"item-container-left areas-item-container-left"},[t("img",{staticClass:"icon-full",attrs:{src:a.icon,alt:a.iAreaID,loading:"lazy"}}),n?t("h3",[e._v(e._s(n.strAreaName)+" "+e._s(n.strAreaNameSub.trim()?"/ "+n.strAreaNameSub:""))]):e._e(),t("p",[e._v("iAreaID: "+e._s(a.iAreaID))]),t("p",[e._v("iLevel: "+e._s(a.iLevel))]),r.iHardMode?t("p",[e._v(e._s(e.$t("ハードモード"))+": "+e._s(e.tickCross(!0)))]):e._e(),e.dataManager.areaModelsById[a.iAreaID]?[t("br"),e._l(e.dataManager.areaModelsById[a.iAreaID],(function(r){var n=r.root,i=r.iLevel;return t("div",[t("router-link",{attrs:{to:{name:"AreasArea",query:{iAreaID:a.iAreaID,root:n}},custom:""},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.href,n=a.navigate;return[t("el-link",{attrs:{href:r,type:"primary",underline:!1},on:{click:n}},[e._v(e._s(e.$t("地図"))+" "+e._s(i))])]}}],null,!0)})],1)}))]:e._e(),e.dataManager.areaDungeonsById[a.iAreaID]?[t("br"),e._l(e.dataManager.areaDungeonsById[a.iAreaID],(function(r){var n=r.root,i=r.iLevel;return t("div",[t("router-link",{attrs:{to:{name:"AreasArea",query:{iAreaID:a.iAreaID,root:n}},custom:""},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.href,n=a.navigate;return[t("el-link",{attrs:{href:r,type:"primary",underline:!1},on:{click:n}},[e._v(e._s(e.$t("ダンジョン"))+" "+e._s(i))])]}}],null,!0)})],1)}))]:e._e(),e.dataManager.areaDungeonBattleAreas[a.iAreaID]?[t("br"),e._l(e.dataManager.areaBattleAreas[a.iAreaID],(function(r){var n=r.folder,i=r.iLevel;return t("div",[t("router-link",{attrs:{to:{name:"AreasArea",query:{iAreaID:a.iAreaID,battleArea:n}},custom:""},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.href,n=a.navigate;return[t("el-link",{attrs:{href:r,type:"primary",underline:!1},on:{click:n}},[e._v(e._s(e.$t("バトルエリア"))+" "+e._s(i))])]}}],null,!0)})],1)}))]:e._e(),e.dataManager.areaDungeonBattleAreas[a.iAreaID]?[t("br"),e._l(e.dataManager.areaDungeonBattleAreas[a.iAreaID],(function(r){var n=r.folder,i=r.iLevel;return t("div",[t("router-link",{attrs:{to:{name:"AreasArea",query:{iAreaID:a.iAreaID,battleArea:n}},custom:""},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.href,n=a.navigate;return[t("el-link",{attrs:{href:r,type:"primary",underline:!1},on:{click:n}},[e._v(e._s(e.$t("バトルエリア"))+e._s(e.$t("ダンジョン"))+" "+e._s(i))])]}}],null,!0)})],1)}))]:e._e()],2),t("div",{staticClass:"item-container-right"},[a.iItemIDList.length?t("div",[t("el-divider",[e._v(e._s(e.$t("アイテム")))]),t("div",{staticClass:"example-container"},e._l(a.iItemIDList.map((function(a){return e.dataManager.itemById[a]})),(function(e){return t("div",[t("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[t("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[t("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME,loading:"lazy"}})])],1)],1)})),0)],1):e._e(),a.iEnemyIDList.length?t("div",[t("el-divider",[e._v(e._s(e.$t("敵")))]),t("div",{staticClass:"example-container"},e._l(a.iEnemyIDList.map((function(a){return e.dataManager.enemyById[a]})),(function(e){return t("div",[t("router-link",{attrs:{to:{name:"EnemiesEnemy",query:{df:e.DF}}}},[t("el-tooltip",{attrs:{content:e.strName,placement:"top"}},[t("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.strName,loading:"lazy"}})])],1)],1)})),0)],1):e._e(),a.otherEnemies.length?t("div",[t("el-divider",[e._v(e._s(e.$t("他の敵")))]),e._l(a.otherEnemies,(function(a){var r=a.level,n=a.enemies;return t("div",[t("el-divider",[e._v(e._s(e.$t("地図"))+" "+e._s(r))]),t("div",{staticClass:"example-container"},e._l(n,(function(e){return t("div",[t("router-link",{attrs:{to:{name:"EnemiesEnemy",query:{df:e.DF}}}},[t("el-tooltip",{attrs:{content:e.strName,placement:"top"}},[t("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME,loading:"lazy"}})])],1)],1)})),0)],1)}))],2):e._e(),e.dataManager.dungeonInfosByAreaId[a.iAreaID]?t("div",[t("el-divider",[e._v(e._s(e.$t("ダンジョン")))]),t("div",e._l(e.dataManager.dungeonInfosByAreaId[a.iAreaID],(function(r,n){return t("div",[e._l([e.dataManager.fieldNameById[r.iAreaNameId]],(function(a){return[a?t("p",[e._v(e._s(a.strAreaName)+" "+e._s(a.strAreaNameSub.trim()?"/ "+a.strAreaNameSub:""))]):e._e(),t("p",[e._v(e._s(e.$t("最大階層"))+": "+e._s(r.iMaxFloor))]),e._l([e.dataManager.fieldNameById[e.dataManager.areaInfoById[r.iReturnArea].iAreaNameId]].filter((function(e){return e})),(function(a){return t("p",[e._v(e._s(e.$t("脱出区域"))+": "+e._s(a.strAreaName))])}))]})),e.dataManager.dungeonInfosByAreaId[a.iAreaID].length!==n+1?t("p",[e._v(">")]):e._e()],2)})),0)],1):e._e(),a.dungeonEnemies.length?t("div",[t("el-divider",[e._v(e._s(e.$t("ダンジョン"))+e._s(e.$t("敵")))]),e._l(a.dungeonEnemies,(function(a){var r=a.level,n=a.enemies;return t("div",[t("el-divider",[e._v(e._s(e.$t("ダンジョン"))+" "+e._s(r))]),t("div",{staticClass:"example-container"},e._l(n,(function(e){return t("div",[t("router-link",{attrs:{to:{name:"EnemiesEnemy",query:{df:e.DF}}}},[t("el-tooltip",{attrs:{content:e.strName,placement:"top"}},[t("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME,loading:"lazy"}})])],1)],1)})),0)],1)}))],2):e._e(),e.dataManager.gateInfoByAreaId[a.iAreaID]?t("div",[t("el-divider",[e._v(e._s(e.$t("ゲート")))]),t("div",{staticClass:"area-gates"},e._l(e.dataManager.gateInfoByAreaId[a.iAreaID],(function(a){return t("div",[t("p",[t("span",[e._v(e._s(a.strName))]),a.bDungeon?t("span",[e._v("("+e._s(e.$t("ダンジョンある"))+")")]):e._e()])])})),0)],1):e._e(),a.kanbans?t("div",[t("el-divider",[e._v(e._s(e.$t("看板")))]),e._l(a.kanbans,(function(r,n){return t("div",[t("pre",[e._v(e._s(r.text))]),a.kanbans.length!==n+1?[t("br"),t("br")]:e._e()],2)}))],2):e._e(),e.dataManager.townInfosByAreaId[a.iAreaID]?t("div",[t("el-divider",[e._v(e._s(e.$t("町")))]),t("div",e._l(e.dataManager.townInfosByAreaId[a.iAreaID],(function(a){return t("div",[e._l([e.dataManager.fieldNameById[a.iAreaNameId]].filter((function(e){return e})),(function(r){return[t("p",[e._v(e._s(r.strAreaName)+" "+e._s(r.strAreaNameSub.trim()?"/ "+r.strAreaNameSub:""))]),t("div",{staticClass:"area-towns__images"},e._l(a.townIcons,(function(e){return t("p",[t("img",{staticClass:"area-towns__image",attrs:{src:e,alt:r.strAreaName}})])})),0)]}))],2)})),0)],1):e._e(),e.dataManager.fieldTitlesByAreaId[a.iAreaID]?t("div",[t("el-divider",[e._v(e._s(e.$t("画像")))]),e._l(e.dataManager.fieldTitlesByAreaId[a.iAreaID],(function(e){return t("div",[t("img",{staticClass:"area-field-title__img",attrs:{src:"img/field_title/Texture2D/"+e,alt:e}})])}))],2):e._e()])]}))]}))],2)})),0)],1)},n=[],i=t("9ab4"),s=t("2fe1"),l=t("6b98");let o=class extends l["a"]{async mounted(){this.$route.query.df&&(await Promise.all(Array.from(document.images).filter(e=>!e.complete).map(e=>new Promise(a=>{e.addEventListener("load",a),e.addEventListener("error",a)}))),this.$scrollTo("#DF-"+this.$route.query.df,-1))}};o=Object(i["b"])([Object(s["b"])({components:{}})],o);var d=o,u=d,c=(t("b9c71"),t("2877")),_=Object(c["a"])(u,r,n,!1,null,"5b9e3664",null);a["default"]=_.exports},"4c81":function(e,a,t){},b9c71:function(e,a,t){"use strict";t("4c81")}}]);