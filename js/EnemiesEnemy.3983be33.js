(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EnemiesEnemy"],{"0058":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.states&&e.states.length?a("div",[e.showTitle?a("p",[a("b",[e._v(e._s(e.$t(e.own?"追加状態(自)":"追加状態")))])]):e._e(),e._l(e.abnormlStates,(function(t){var l=t[0],n=t[1];return e.dataManager.abnormalStateById[l.id]?a("p",[a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:n.id}},target:"_blank"}},[e._v(e._s(e.$t("確率",[(100*l.rate).toFixed()])))])],1),a("el-tag",{attrs:{size:"small"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:n.id}},target:"_blank"}},[e._v(e._s(n.name))])],1),e._l([n.effectlist.length>1?n.effectlist[n.effectlist.length-1]:n.effectlist[0]],(function(t){return n.effectlist.length?[e.dataManager.abnormalStateEffectById[t]?a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:n.id}},target:"_blank"}},[e._v(e._s(e.$t("数値"))+" "+e._s(e.dataManager.abnormalStateEffectById[t].value))])],1):e._e()]:e._e()})),a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:n.id}},target:"_blank"}},[e._v(e._s(n.turn)+" "+e._s(e.$t("ターン")))])],1)],2):e._e()}))],2):e._e()},n=[],s=a("ade3"),i=a("9ab4"),o=a("1b40"),r=a("6b98");let c=class extends r["a"]{constructor(...e){super(...e),Object(s["a"])(this,"states",void 0),Object(s["a"])(this,"own",void 0),Object(s["a"])(this,"showTitle",void 0)}get abnormlStates(){return this.states.map(e=>[e,this.dataManager.abnormalStateById[e.id]]).filter(([,e])=>e)}};Object(i["b"])([Object(o["c"])({type:Array,default:()=>[]})],c.prototype,"states",void 0),Object(i["b"])([Object(o["c"])({type:Boolean,default:!1})],c.prototype,"own",void 0),Object(i["b"])([Object(o["c"])({type:Boolean,default:!0})],c.prototype,"showTitle",void 0),c=Object(i["b"])([Object(o["a"])({components:{}})],c);var u=c,d=u,f=(a("a1b6"),a("2877")),h=Object(f["a"])(d,l,n,!1,null,"a12617c6",null);t["a"]=h.exports},"0584":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skills&&e.skills.length?a("div",[e.showTitle?a("el-divider",[e._t("title",(function(){return[e._v(e._s(e.$t("スキル")))]}))],2):e._e(),a("div",{staticClass:"skill-card"},[a("table",[e._l(e.skills,(function(t,l){return[a("tr",[a("th",[e._v(e._s(e.$t("名前")))]),a("td",[a("b",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)])]),t.detail?a("tr",[a("th",[e._v(e._s(e.$t("詳細")))]),a("td",[e._v(e._s(t.detail))])]):e._e(),t.effectValue||t.effectValue2?a("tr",[a("th",[e._v(e._s(e.$t("数値")))]),a("td",[t.effectValue?a("span",[e._v(e._s(t.effectValue))]):e._e(),t.effectValue2?a("span",[e._v(" / "+e._s(t.effectValue2))]):e._e()])]):e._e(),t.attribute?a("tr",[a("th",[e._v(e._s(e.$t("攻撃タイプ")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttributeShort[t.attackSkill.attribute])))])]):e._e(),t.attribute?a("tr",[a("th",[e._v(e._s(e.$t("属性")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]):e._e(),t.attribute?a("tr",[a("th",[e._v(e._s(e.$t("對象")))]),a("td",["en"===e.dataManager.locale?a("span",[e._v(" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope]))+" "+e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam])))]):a("span",[e._v(" "+e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])])]):e._e(),t.stateOwn.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態(自)")))]),a("td",[a("AbnormlStateTags",{attrs:{states:t.stateOwn,own:!0,showTitle:!1}})],1)]):e._e(),t.state.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態")))]),a("td",[a("AbnormlStateTags",{attrs:{states:t.state,showTitle:!1}})],1)]):e._e(),e._l([e.dataManager.zoneById[t.effectValue]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:l.id}},target:"_blank"}},[e._v(e._s(e.$t("ゾーン")))])],1),a("td",e._l(l.effectlist,(function(t){return a("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])})),0)]):e._e()})),t.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.effectValue]?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l([e.dataManager.skillById[t.effectValue]],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),t.combSkillList&&t.combSkillList.length||t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[e._v(e._s(e.$t("含まれるスキル")))]),a("td",[e._l(t.combSkillList,(function(l){return t.combSkillList&&t.combSkillList.length?[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:l.id}},target:"_blank"}},[e._v(e._s(l.name))]),a("span")],1),e._l([e.dataManager.skillById[l.id]].filter((function(e){return e})),(function(t){return l.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))]:e._e()})),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:l.effectValue}},target:"_blank"}},[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))],2)]):e._e(),e.skills.length!==l+1?a("tr",[e._m(0,!0),e._m(1,!0)]):e._e()]}))],2)])],1):e._e()},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("th",[a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("br")])}],s=a("ade3"),i=a("9ab4"),o=a("1b40"),r=a("6b98"),c=a("f015"),u=a("0058");let d=class extends r["a"]{constructor(...e){super(...e),Object(s["a"])(this,"skills",void 0),Object(s["a"])(this,"showTitle",void 0)}get EBattleEffectKind(){return c["c"]}};Object(i["b"])([Object(o["c"])({type:Array,default:()=>[]})],d.prototype,"skills",void 0),Object(i["b"])([Object(o["c"])({type:Boolean,default:!0})],d.prototype,"showTitle",void 0),d=Object(i["b"])([Object(o["a"])({components:{AbnormlStateTags:u["a"]}})],d);var f=d,h=f,p=(a("11b2"),a("2877")),_=Object(p["a"])(h,l,n,!1,null,"a8834904",null);t["a"]=_.exports},"11b2":function(e,t,a){"use strict";a("123f")},"123f":function(e,t,a){},"1b40":function(e,t,a){"use strict";a.d(t,"a",(function(){return l["b"]})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return d}));var l=a("2fe1"),n=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var l=Array(e),n=0;for(t=0;t<a;t++)for(var s=arguments[t],i=0,o=s.length;i<o;i++,n++)l[n]=s[i];return l},s=/\B([A-Z])/g,i=function(e){return e.replace(s,"-$1").toLowerCase()};function o(e){return function(t,a,l){var s=i(a),o=l.value;l.value=function(){for(var t=this,a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];var i=function(l){var i=e||s;void 0===l?0===a.length?t.$emit(i):1===a.length?t.$emit(i,a[0]):t.$emit.apply(t,n([i],a)):(a.unshift(l),t.$emit.apply(t,n([i],a)))},c=o.apply(this,a);return r(c)?c.then(i):i(c),c}}}function r(e){return e instanceof Promise||e&&"function"===typeof e.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(e,t,a){if(c&&!Array.isArray(e)&&"function"!==typeof e&&!e.hasOwnProperty("type")&&"undefined"===typeof e.type){var l=Reflect.getMetadata("design:type",t,a);l!==Object&&(e.type=l)}}function d(e){return void 0===e&&(e={}),function(t,a){u(e,t,a),Object(l["a"])((function(t,a){(t.props||(t.props={}))[a]=e}))(t,a)}}},"2e50":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"","lock-scroll":!1,top:"0",visible:e.visible,fullscreen:!0},on:{"update:visible":function(t){e.visible=t}}},[a("vue-json-pretty",{attrs:{data:e.data,selectableType:"single"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},n=[],s=a("ade3"),i=a("9ab4"),o=a("2fe1"),r=a("838b"),c=a.n(r),u=a("6b98");let d=class extends u["a"]{constructor(...e){super(...e),Object(s["a"])(this,"data",null),Object(s["a"])(this,"visible",!1)}open(e){this.visible=!0,this.data=e}};d=Object(i["b"])([Object(o["b"])({components:{VueJsonPretty:c.a}})],d);var f=d,h=f,p=(a("f774"),a("2877")),_=Object(p["a"])(h,l,n,!1,null,"068a8a9b",null);t["a"]=_.exports},"51c8":function(e,t,a){},5783:function(e,t,a){},5897:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("JsonViewDialog",{ref:"jsonViewDialog"}),a("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[a("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.enemy.model,position:e.fbxPosition,rotation:e.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.enemy.strName))]),e.enemy.model?a("div",{staticClass:"item-has-3d",on:{click:e.openFbxViwer}},[a("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:""}})]):a("div",[a("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:""}})]),a("p",[e._v(e._s(e.enemy.strDesc))]),e.enemy.model?a("p",[a("el-link",{attrs:{underline:!1},on:{click:e.openFbxViwer}},[e._v("3D")])],1):e._e(),a("br"),a("p",[e._v("DF: "+e._s(e.enemy.DF))]),a("p",[e._v(e._s(e.$t("短い名前"))+": "+e._s(e.enemy.AnotherName))]),a("p",[e._v(e._s(e.$t("種族"))+": "+e._s(e.dataManager.enemyKindListById[e.enemy.eKind].strName))]),a("p",[e._v(e._s(e.$t("攻撃目標"))+": "+e._s(e.$t(e.dataManager.lookup.EAttackTargetKind[e.enemy.eAttackTargetKind])))]),a("p",[e._v(e._s(e.$t("ボス"))+": "+e._s(e.enemy.bBoss?"✓":"x"))]),a("p",[e._v(e._s(e.$t("オンラインオーンリー"))+": "+e._s(e.enemy.bOnlyOnline?"✓":"x"))]),a("p",[e._v(e._s(e.$t("大きさ"))+": "+e._s(e.$t(e.dataManager.lookup.eEnemySize[e.enemy.eSize])))]),a("p",[e._v(e._s(e.$t("視角"))+": "+e._s(e.enemy.viewAngleDegree)+"°")]),a("p",[e._v(e._s(e.$t("移動速度"))+": "+e._s(e.enemy.fMoveSpeed))]),a("p",[e._v(e._s(e.$t("打撃範囲"))+": "+e._s(e.enemy.fHitRadius))]),a("br"),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.$refs.jsonViewDialog.open(e.enemy)}}},[e._v(e._s(e.$t("Rawデータ")))])],1),a("div",{staticClass:"item-container-right"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:e.$t("メーン"),name:"main"}},[a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("レベル")}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.enemyModifier.level,callback:function(t){e.$set(e.enemyModifier,"level",t)},expression:"enemyModifier.level"}})],1)],1)],1),a("div",{staticClass:"enemy-info"},[a("div",[a("table",[e._l(e.enemy.getStates(e.enemyModifier.level),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])])})),e._l(e.enemy.getElements(e.enemyModifier.level).filter((function(e){return e.value})),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])])}))],2)]),a("div",e._l(e.enemy.skillsWithComboSkills,(function(e){return a("div",[a("SkillPopup",{attrs:{skill:e}})],1)})),0)])]),e.enemy.appearAreas.length?a("div",[a("el-divider",[e._v(e._s(e.$t("出現エリア")))]),e._l(e.enemy.appearAreas,(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Areas",query:{df:t.iAreaId}}}},[e._v(e._s(e.dataManager.fieldNameById[t.iAreaNameId].strAreaName))])],1)}))],2):e._e(),e.dataManager.questsByEnemy[e.enemy.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト")))]),e._l(e.dataManager.questsByEnemy[e.enemy.DF],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}}}},[e._v(e._s(t.NAME))])],1)}))],2):e._e()]),e.enemy.sParam.SKILL.length?a("el-tab-pane",{attrs:{label:e.$t("スキル"),name:"skill"}},[a("SkillTextInfo",{attrs:{skills:e.enemy.skills,showTitle:!1}})],1):e._e()],1)],1)])],1)},n=[],s=a("ade3"),i=a("9ab4"),o=a("2fe1"),r=a("e360"),c=a("6b98"),u=a("f8f9"),d=a("a6fe");class f extends d["a"]{}var h=a("0584"),p=a("2e50"),_=a("977d");let m=class extends c["a"]{constructor(...e){super(...e),Object(s["a"])(this,"activeTab","main"),Object(s["a"])(this,"fbxDialogVisible",!1),Object(s["a"])(this,"fbxLoading",null),Object(s["a"])(this,"enemy",null),Object(s["a"])(this,"enemyModifier",new f)}get fbxRotation(){return this.enemy.sParam.MDL.startsWith("044")?{x:0,y:0,z:0}:{x:0,y:Math.PI,z:Math.PI}}get fbxPosition(){return{x:0,y:0,z:0}}openFbxViwer(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}beforeMount(){this.enemyModifier.level=+this.$route.query.level||u["b"].defaultLevel,this.enemy=this.dataManager.enemyById[this.$route.query.df],this.enemy||this.$router.push({name:"Enemies"})}};m=Object(i["b"])([Object(o["b"])({components:{"model-fbx":r["ModelFbx"],SkillTextInfo:h["a"],JsonViewDialog:p["a"],SkillPopup:_["a"]}})],m);var b=m,v=b,y=(a("6258"),a("2877")),k=Object(y["a"])(v,l,n,!1,null,"1fe710d1",null);t["default"]=k.exports},6258:function(e,t,a){"use strict";a("51c8")},"838b":function(e,t,a){!function(t,a){e.exports=a()}(0,(function(){return function(){"use strict";var e={810:function(e,t,a){function l(e,t,a,l,n,s,i,o){var r,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),l&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(r=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=r):n&&(r=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(c.functional){c._injectStyles=r;var u=c.render;c.render=function(e,t){return r.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,r):[r]}return{exports:e,options:c}}a.r(t),a.d(t,{default:function(){return u}});var n=l({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,s=l({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[a("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var a=e.model,l=t.target,n=!!l.checked;if(Array.isArray(a)){var s=e._i(a,null);l.checked?s<0&&(e.model=a.concat([null])):s>-1&&(e.model=a.slice(0,s).concat(a.slice(s+1)))}else e.model=n},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function i(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,t="root",a=0,{key:l,index:n,type:s="content",showComma:r=!1,length:c=1}={}){const u=i(e);if("array"===u){const n=e.map((e,l,n)=>o(e,`${t}[${l}]`,a+1,{index:l,showComma:l!==n.length-1,length:c,type:s})).reduce((e,t)=>e.concat(t),[]);return[o("[",t,a,{key:l,length:e.length,type:"arrayStart"})[0]].concat(n,o("]",t,a,{showComma:r,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const i=Object.keys(e),u=i.map((l,n,i)=>o(e[l],l.includes(".")?`${t}["${l}"]`:`${t}.${l}`,a+1,{key:l,showComma:n!==i.length-1,length:c,type:s})).reduce((e,t)=>e.concat(t),[]);return[o("{",t,a,{key:l,index:n,length:i.length,type:"objectStart"})[0]].concat(u,o("}",t,a,{showComma:r,length:i.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:a,key:l,index:n,path:t,showComma:r,length:c,type:s}).reduce((e,[t,a])=>void 0!==a?{...e,[t]:a}:e,{});return"object"===i(d)?[d]:d}var r=l({components:{Brackets:n,CheckController:s.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return i(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){const t=this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e);return this.node.showComma?t+",":t},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[a("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,l){return a("div",{key:l,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?a("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),e._v(" "),a("span",["content"!==e.node.type?a("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):a("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}),e._v(" "),e.showLength&&e.collapsed?a("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=l({name:"VueJsonPretty",components:{TreeNode:r.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:o(this.data,this.path).reduce((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1},{})}},computed:{flatData(){let e=null;return o(this.data,this.path).reduce((t,a,l)=>{const n={...a,id:l},s=this.hiddenPaths[n.path];if(e&&e.path===n.path){const a="objectStart"===e.type,l={...e,...n,content:a?"{...}":"[...]",type:a?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(l)}return s&&!e?(e=n,t):e?t:t.concat(n)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,a=Math.floor(t/this.itemHeight);let l=a<0?0:a+e>this.flatData.length?this.flatData.length-e:a;l<0&&(l=0);const n=l+e;this.translateY=l*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=l&&t<n)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),a=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,a)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,a=e;this.selectedPaths=a,this.$emit("change",a,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[a("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[a("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return a("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.1"})}},t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={exports:{}};return e[l](n,n.exports,a),n.exports}return a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(810)}()}))},"977d":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skill?a("div",[a("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("p",[a("el-link",{staticClass:"poppover__a",attrs:{icon:"el-icon-more",underline:!1}},[e._v(e._s(e.skill.name))])],1)]),a("div",[a("router-link",{staticClass:"skill-popup-link",attrs:{to:{name:"Skills",query:{id:e.skill.id}},target:"_blank"}},[a("i",{staticClass:"el-icon-right"})]),e.skill.detail?a("p",{staticClass:"popover__detail"},[e._v(e._s(e.skill.detail))]):e._e(),e.skill.effectValue||e.skill.effectValue2?a("p",[a("b",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleEffectTarget[e.skill.effectTarget]||e.dataManager.lookup.EBattleEffectKind[e.skill.effect]||"数値")))]),e.skill.isEffectValueRate?[a("span",[e._v(e._s(e.skill.effectValueText))])]:[a("span",[e._v(" "+e._s(e.skill.effectValue))]),e.skill.effectValue2?a("span",[e._v(", "+e._s(e.skill.effectValue2))]):e._e()]],2):e._e(),e.skill.combSkillList&&e.skill.combSkillList.length?[a("br"),a("p",[a("b",[e._v(e._s(e.$t("含まれるスキル")))])]),e._l(e.skill.combSkillList,(function(t){return[a("p",[e._v(e._s(t.name))]),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))]):e._e()}))]})),e._l([e.dataManager.skillById[e.skill.id]].filter((function(e){return e})),(function(t){return e.skill.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))]):e._e()}))]:e._e(),e.skill.stateOwn.length||e.skill.state.length?a("br"):e._e(),a("AbnormlStateTags",{attrs:{states:e.skill.stateOwn,own:!0}}),a("AbnormlStateTags",{attrs:{states:e.skill.state}})],2)],2)],1):e._e()},n=[],s=a("ade3"),i=a("9ab4"),o=a("1b40"),r=a("6b98"),c=a("f015"),u=a("0058");let d=class extends r["a"]{constructor(...e){super(...e),Object(s["a"])(this,"skill",void 0)}get EBattleEffectKind(){return c["c"]}};Object(i["b"])([Object(o["c"])({type:Object,default:()=>({})})],d.prototype,"skill",void 0),d=Object(i["b"])([Object(o["a"])({components:{AbnormlStateTags:u["a"]}})],d);var f=d,h=f,p=(a("d3a1"),a("2877")),_=Object(p["a"])(h,l,n,!1,null,"d767f1f0",null);t["a"]=_.exports},a1b6:function(e,t,a){"use strict";a("5783")},c872:function(e,t,a){},d3a1:function(e,t,a){"use strict";a("c872")},ea3d:function(e,t,a){},f774:function(e,t,a){"use strict";a("ea3d")}}]);