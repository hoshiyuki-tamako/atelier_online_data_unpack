(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EnemiesEnemy"],{"018e":function(e,t,n){},"1b40":function(e,t,n){"use strict";n.d(t,"a",(function(){return a["b"]})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return d}));var a=n("2fe1"),l=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),l=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,r=i.length;o<r;o++,l++)a[l]=i[o];return a},i=/\B([A-Z])/g,o=function(e){return e.replace(i,"-$1").toLowerCase()};function r(e){return function(t,n,a){var i=o(n),r=a.value;a.value=function(){for(var t=this,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var o=function(a){var o=e||i;void 0===a?0===n.length?t.$emit(o):1===n.length?t.$emit(o,n[0]):t.$emit.apply(t,l([o],n)):(n.unshift(a),t.$emit.apply(t,l([o],n)))},c=r.apply(this,n);return s(c)?c.then(o):o(c),c}}}function s(e){return e instanceof Promise||e&&"function"===typeof e.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(e,t,n){if(c&&!Array.isArray(e)&&"function"!==typeof e&&!e.hasOwnProperty("type")&&"undefined"===typeof e.type){var a=Reflect.getMetadata("design:type",t,n);a!==Object&&(e.type=a)}}function d(e){return void 0===e&&(e={}),function(t,n){u(e,t,n),Object(a["a"])((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}},"2e50":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"","lock-scroll":!1,top:"0",visible:e.visible,fullscreen:!0},on:{"update:visible":function(t){e.visible=t}}},[n("vue-json-pretty",{attrs:{data:e.data,selectableType:"single"}}),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},l=[],i=n("d4ec"),o=n("bee2"),r=n("257e"),s=n("262e"),c=n("2caf"),u=n("ade3"),d=(n("99af"),n("9ab4")),f=n("2fe1"),h=n("838b"),p=n.n(h),m=n("6b98"),_=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;Object(i["a"])(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l)),Object(u["a"])(Object(r["a"])(e),"data",null),Object(u["a"])(Object(r["a"])(e),"visible",!1),e}return Object(o["a"])(n,[{key:"open",value:function(e){this.visible=!0,this.data=e}}]),n}(m["a"]);_=Object(d["b"])([Object(f["b"])({components:{VueJsonPretty:p.a}})],_);var y=_,b=y,v=(n("f774"),n("2877")),g=Object(v["a"])(b,a,l,!1,null,"068a8a9b",null);t["a"]=g.exports},"3fb0":function(e,t,n){},4407:function(e,t,n){"use strict";n("3fb0")},"45b5":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.skills&&e.skills.length?n("div",[e.showTitle?n("el-divider",[e._t("title",(function(){return[e._v(e._s(e.$t("スキル")))]}))],2):e._e(),e._l(e.skills,(function(t,a){return n("div",{staticClass:"skill-card"},[n("table",{staticClass:"skill-table"},[n("tr",[n("th",[e._v(e._s(e.$t("名前")))]),n("td",[n("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)]),n("tr",[n("th",[e._v(e._s(e.$t("詳細")))]),n("td",[e._v(e._s(t.detail))])]),n("tr",[n("th",[e._v(e._s(e.$t("数値")))]),n("td",[e._v(e._s(t.effectValue)+", "+e._s(t.effectValue2))])]),1===t.type?[n("tr",[n("th",[e._v(e._s(e.$t("攻撃タイプ")))]),n("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.attackSkill.attribute])))])]),n("tr",[n("th",[e._v(e._s(e.$t("属性")))]),n("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]),n("tr",[n("th",[e._v(e._s(e.$t("對象")))]),n("td",[e._v(e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])])]:e._e(),t.attackSkill.stateOwn.length?n("tr",[n("th",[e._v(e._s(e.$t("追加状態 (自)")))]),n("td",[e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var a=t[0],l=t[1];return[n("el-tooltip",{attrs:{content:l.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[n("p",[n("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:l.id}},target:"_blank"}},[e._v(e._s(e.$t("確率",[(100*a.rate).toFixed()]))+" "+e._s(l.name)+" "+e._s(l.turn)+" "+e._s(e.$t("ターン")))])],1)])]}))],2)]):e._e(),t.attackSkill.state.length?n("tr",[n("th",[e._v(e._s(e.$t("追加状態")))]),n("td",[e._l(t.attackSkill.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var a=t[0],l=t[1];return[n("el-tooltip",{attrs:{content:l.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[n("p",[n("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:l.id}},target:"_blank"}},[e._v(e._s(e.$t("確率",[(100*a.rate).toFixed()]))+" "+e._s(l.name)+" "+e._s(l.turn)+" "+e._s(e.$t("ターン")))])],1)])]}))],2)]):e._e(),e._l([e.dataManager.zoneById[t.effectValue]].filter((function(e){return e})),(function(a){return t.effect===e.EBattleEffectKind.eZONE_CHANGE?n("tr",[n("th",[n("router-link",{attrs:{to:{name:"InfoZone",query:{id:a.id}},target:"_blank"}},[e._v(e._s(a.name))])],1),n("td",e._l(a.effectlist,(function(t){return n("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])})),0)]):e._e()})),t.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.effectValue]?n("tr",[n("th",[e._v(e._s(e.$t("スキル")))]),n("td",e._l([e.dataManager.skillById[t.effectValue]],(function(t){return n("p",[n("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),t.combSkillList.length||t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?n("tr",[n("th",[e._v(e._s(e.$t("含まれるスキル")))]),n("td",[e._l(t.combSkillList,(function(t){return[n("p",[n("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?n("p",[n("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))]})),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?n("p",[n("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))],2)]):e._e()],2),e.skills.length!==a+1?n("p",[e._v(e._s(">"))]):e._e()])}))],2):e._e()},l=[],i=n("d4ec"),o=n("bee2"),r=n("257e"),s=n("262e"),c=n("2caf"),u=n("ade3"),d=(n("99af"),n("9ab4")),f=n("1b40"),h=n("6b98"),p=n("f015"),m=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;Object(i["a"])(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l)),Object(u["a"])(Object(r["a"])(e),"skills",void 0),Object(u["a"])(Object(r["a"])(e),"showTitle",void 0),e}return Object(o["a"])(n,[{key:"EBattleEffectKind",get:function(){return p["c"]}}]),n}(h["a"]);Object(d["b"])([Object(f["c"])({type:Array,default:function(){return[]}})],m.prototype,"skills",void 0),Object(d["b"])([Object(f["c"])({type:Boolean,default:!0})],m.prototype,"showTitle",void 0),m=Object(d["b"])([Object(f["a"])({components:{}})],m);var _=m,y=_,b=(n("50e0"),n("2877")),v=Object(b["a"])(y,a,l,!1,null,"0427d2b3",null);t["a"]=v.exports},"50e0":function(e,t,n){"use strict";n("018e")},5897:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("JsonViewDialog",{ref:"jsonViewDialog"}),n("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[n("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.enemy.model,position:e.fbxPosition,rotation:e.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),n("div",{staticClass:"item-container"},[n("div",{staticClass:"item-container-left"},[n("h3",{staticClass:"item-name"},[e._v(e._s(e.enemy.strName))]),e.enemy.model?n("div",{staticClass:"item-has-3d",on:{click:e.openFbxViwer}},[n("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:e.enemy.strName}})]):n("div",[n("img",{staticClass:"icon-full",attrs:{src:e.enemy.icon,alt:e.enemy.strName}})]),n("p",[e._v(e._s(e.enemy.strDesc))]),e.enemy.model?n("p",[n("el-link",{attrs:{underline:!1},on:{click:e.openFbxViwer}},[e._v("3D")])],1):e._e(),n("br"),n("p",[e._v("DF: "+e._s(e.enemy.DF))]),n("p",[e._v(e._s(e.$t("短い名前"))+": "+e._s(e.enemy.AnotherName))]),n("p",[e._v(e._s(e.$t("種族"))+": "+e._s(e.dataManager.enemyKindListById[e.enemy.eKind].strName))]),n("p",[e._v(e._s(e.$t("攻撃目標"))+": "+e._s(e.$t(e.dataManager.lookup.EAttackTargetKind[e.enemy.eAttackTargetKind])))]),n("p",[e._v(e._s(e.$t("ボス"))+": "+e._s(e.enemy.bBoss?"✓":"x"))]),n("p",[e._v(e._s(e.$t("オンラインオーンリー"))+": "+e._s(e.enemy.bOnlyOnline?"✓":"x"))]),n("p",[e._v(e._s(e.$t("大きさ"))+": "+e._s(e.$t(e.dataManager.lookup.eEnemySize[e.enemy.eSize])))]),n("p",[e._v(e._s(e.$t("視角"))+": "+e._s(e.enemy.viewAngleDegree)+"°")]),n("p",[e._v(e._s(e.$t("移動速度"))+": "+e._s(e.enemy.fMoveSpeed))]),n("p",[e._v(e._s(e.$t("打撃範囲"))+": "+e._s(e.enemy.fHitRadius))]),n("br"),n("el-link",{attrs:{underline:!1},on:{click:function(t){return e.$refs.jsonViewDialog.open(e.enemy)}}},[e._v(e._s(e.$t("Rawデータ")))])],1),n("div",{staticClass:"item-container-right"},[n("el-tabs",{attrs:{type:"card"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[n("el-tab-pane",{attrs:{label:e.$t("メーン"),name:"main"}},[n("div",[n("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[n("el-form-item",{attrs:{label:e.$t("レベル")}},[n("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.enemyModifier.level,callback:function(t){e.$set(e.enemyModifier,"level",t)},expression:"enemyModifier.level"}})],1)],1),n("table",[e._l(e.enemy.getStates(e.enemyModifier.level),(function(t){return n("tr",[n("th",[e._v(e._s(e.$t(t.label)))]),n("td",[e._v(e._s(t.value))])])})),e._l(e.enemy.getElements(e.enemyModifier.level).filter((function(e){return e.value})),(function(t){return n("tr",[n("th",[e._v(e._s(e.$t(t.label)))]),n("td",[e._v(e._s(t.value))])])}))],2)],1),e.enemy.appearAreas.length?n("div",[n("el-divider",[e._v(e._s(e.$t("出現エリア")))]),e._l(e.enemy.appearAreas,(function(t){return n("p",[n("router-link",{attrs:{to:{name:"Areas",query:{df:t.iAreaId}}}},[e._v(e._s(e.dataManager.fieldNameById[t.iAreaNameId].strAreaName))])],1)}))],2):e._e(),e.dataManager.questsByEnemy[e.enemy.DF]?n("div",[n("el-divider",[e._v(e._s(e.$t("クエスト")))]),e._l(e.dataManager.questsByEnemy[e.enemy.DF],(function(t){return n("p",[n("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}}}},[e._v(e._s(t.NAME))])],1)}))],2):e._e()]),e.enemy.sParam.SKILL.length?n("el-tab-pane",{attrs:{label:e.$t("スキル"),name:"skill"}},[n("SkillTextInfo",{attrs:{skills:e.enemy.sParam.SKILL.map((function(t){return e.dataManager.skillById[t.DF]})).filter((function(e){return e})),showTitle:!1}})],1):e._e()],1)],1)])],1)},l=[],i=n("d4ec"),o=n("bee2"),r=n("257e"),s=n("262e"),c=n("2caf"),u=n("ade3"),d=(n("99af"),n("2ca0"),n("9ab4")),f=n("2fe1"),h=n("e360"),p=n("6b98"),m=n("f8f9"),_=n("a6fe"),y=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(_["a"]),b=n("45b5"),v=n("2e50"),g=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;Object(i["a"])(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l)),Object(u["a"])(Object(r["a"])(e),"activeTab","main"),Object(u["a"])(Object(r["a"])(e),"fbxDialogVisible",!1),Object(u["a"])(Object(r["a"])(e),"fbxLoading",null),Object(u["a"])(Object(r["a"])(e),"enemy",null),Object(u["a"])(Object(r["a"])(e),"enemyModifier",new y),e}return Object(o["a"])(n,[{key:"fbxRotation",get:function(){return this.enemy.sParam.MDL.startsWith("044")?{x:0,y:0,z:0}:{x:0,y:Math.PI,z:Math.PI}}},{key:"fbxPosition",get:function(){return{x:0,y:0,z:0}}},{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.enemyModifier.level=+this.$route.query.level||m["b"].defaultLevel,this.enemy=this.dataManager.enemyById[this.$route.query.df],this.enemy||this.$router.push({name:"Enemies"})}}]),n}(p["a"]);g=Object(d["b"])([Object(f["b"])({components:{"model-fbx":h["ModelFbx"],SkillTextInfo:b["a"],JsonViewDialog:v["a"]}})],g);var k=g,$=k,j=(n("4407"),n("2877")),S=Object(j["a"])($,a,l,!1,null,"2449bf71",null);t["default"]=S.exports},"838b":function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){return function(){"use strict";var e={810:function(e,t,n){function a(e,t,n,a,l,i,o,r){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=s):l&&(s=r?function(){l.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:l),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(e,t){return s.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:c}}n.r(t),n.d(t,{default:function(){return u}});var l=a({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,i=a({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[n("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var n=e.model,a=t.target,l=!!a.checked;if(Array.isArray(n)){var i=e._i(n,null);a.checked?i<0&&(e.model=n.concat([null])):i>-1&&(e.model=n.slice(0,i).concat(n.slice(i+1)))}else e.model=l},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function o(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function r(e,t="root",n=0,{key:a,index:l,type:i="content",showComma:s=!1,length:c=1}={}){const u=o(e);if("array"===u){const l=e.map((e,a,l)=>r(e,`${t}[${a}]`,n+1,{index:a,showComma:a!==l.length-1,length:c,type:i})).reduce((e,t)=>e.concat(t),[]);return[r("[",t,n,{key:a,length:e.length,type:"arrayStart"})[0]].concat(l,r("]",t,n,{showComma:s,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const o=Object.keys(e),u=o.map((a,l,o)=>r(e[a],a.includes(".")?`${t}["${a}"]`:`${t}.${a}`,n+1,{key:a,showComma:l!==o.length-1,length:c,type:i})).reduce((e,t)=>e.concat(t),[]);return[r("{",t,n,{key:a,index:l,length:o.length,type:"objectStart"})[0]].concat(u,r("}",t,n,{showComma:s,length:o.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:n,key:a,index:l,path:t,showComma:s,length:c,type:i}).reduce((e,[t,n])=>void 0!==n?{...e,[t]:n}:e,{});return"object"===o(d)?[d]:d}var s=a({components:{Brackets:l,CheckController:i.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return o(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){const t=this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e);return this.node.showComma?t+",":t},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[n("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,a){return n("div",{key:a,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?n("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),e._v(" "),n("span",["content"!==e.node.type?n("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):n("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}),e._v(" "),e.showLength&&e.collapsed?n("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=a({name:"VueJsonPretty",components:{TreeNode:s.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:r(this.data,this.path).reduce((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1},{})}},computed:{flatData(){let e=null;return r(this.data,this.path).reduce((t,n,a)=>{const l={...n,id:a},i=this.hiddenPaths[l.path];if(e&&e.path===l.path){const n="objectStart"===e.type,a={...e,...l,content:n?"{...}":"[...]",type:n?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(a)}return i&&!e?(e=l,t):e?t:t.concat(l)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,n=Math.floor(t/this.itemHeight);let a=n<0?0:n+e>this.flatData.length?this.flatData.length-e:n;a<0&&(a=0);const l=a+e;this.translateY=a*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=a&&t<l)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),n=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,n)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,n=e;this.selectedPaths=n,this.$emit("change",n,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[n("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[n("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return n("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.1"})}},t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}return n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(810)}()}))},ea3d:function(e,t,n){},f774:function(e,t,n){"use strict";n("ea3d")}}]);