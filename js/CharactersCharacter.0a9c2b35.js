(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CharactersCharacter"],{"0058":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.states&&e.states.length?a("div",[e.showTitle?a("p",[a("b",[e._v(e._s(e.$t(e.own?"追加状態(自)":"追加状態")))])]):e._e(),e._l(e.abnormlStates,(function(t){var l=t[0],r=t[1];return e.dataManager.abnormalStateById[l.id]?a("p",[a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:r.id}},target:"_blank"}},[e._v(e._s(e.$t("確率",[(100*l.rate).toFixed()])))])],1),a("el-tag",{attrs:{size:"small"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:r.id}},target:"_blank"}},[e._v(e._s(r.name))])],1),e._l([r.effectlist.length>1?r.effectlist[r.effectlist.length-1]:r.effectlist[0]],(function(t){return r.effectlist.length?[e.dataManager.abnormalStateEffectById[t]?a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:r.id}},target:"_blank"}},[e._v(e._s(e.$t("数値"))+" "+e._s(e.dataManager.abnormalStateEffectById[t].value))])],1):e._e()]:e._e()})),a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:r.id}},target:"_blank"}},[e._v(e._s(r.turn)+" "+e._s(e.$t("ターン")))])],1)],2):e._e()}))],2):e._e()},r=[],n=a("ade3"),s=a("9ab4"),i=a("1b40"),o=a("6b98");let c=class extends o["a"]{constructor(...e){super(...e),Object(n["a"])(this,"states",void 0),Object(n["a"])(this,"own",void 0),Object(n["a"])(this,"showTitle",void 0)}get abnormlStates(){return this.states.map(e=>[e,this.dataManager.abnormalStateById[e.id]]).filter(([,e])=>e)}};Object(s["b"])([Object(i["c"])({type:Array,default:()=>[]})],c.prototype,"states",void 0),Object(s["b"])([Object(i["c"])({type:Boolean,default:!1})],c.prototype,"own",void 0),Object(s["b"])([Object(i["c"])({type:Boolean,default:!0})],c.prototype,"showTitle",void 0),c=Object(s["b"])([Object(i["a"])({components:{}})],c);var u=c,d=u,h=(a("a1b6"),a("2877")),f=Object(h["a"])(d,l,r,!1,null,"a12617c6",null);t["a"]=f.exports},"0584":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skills&&e.skills.length?a("div",[e.showTitle?a("el-divider",[e._t("title",(function(){return[e._v(e._s(e.$t("スキル")))]}))],2):e._e(),a("div",{staticClass:"skill-card"},[a("table",[e._l(e.skills,(function(t,l){return[a("tr",[a("th",[e._v(e._s(e.$t("名前")))]),a("td",[a("b",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)])]),t.detail?a("tr",[a("th",[e._v(e._s(e.$t("詳細")))]),a("td",[e._v(e._s(t.detail))])]):e._e(),t.effectValue||t.effectValue2?a("tr",[a("th",[e._v(e._s(e.$t("数値")))]),a("td",[t.effectValue?a("span",[e._v(e._s(t.effectValue))]):e._e(),t.effectValue2?a("span",[e._v(" / "+e._s(t.effectValue2))]):e._e()])]):e._e(),t.attribute?a("tr",[a("th",[e._v(e._s(e.$t("攻撃タイプ")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttributeShort[t.attackSkill.attribute])))])]):e._e(),t.attribute?a("tr",[a("th",[e._v(e._s(e.$t("属性")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]):e._e(),t.attribute?a("tr",[a("th",[e._v(e._s(e.$t("對象")))]),a("td",["en"===e.dataManager.locale?a("span",[e._v(" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope]))+" "+e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam])))]):a("span",[e._v(" "+e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])])]):e._e(),t.stateOwn.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態(自)")))]),a("td",[a("AbnormlStateTags",{attrs:{states:t.stateOwn,own:!0,showTitle:!1}})],1)]):e._e(),t.state.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態")))]),a("td",[a("AbnormlStateTags",{attrs:{states:t.state,showTitle:!1}})],1)]):e._e(),e._l([e.dataManager.zoneById[t.effectValue]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:l.id}},target:"_blank"}},[e._v(e._s(e.$t("ゾーン")))])],1),a("td",e._l(l.effectlist,(function(t){return a("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])})),0)]):e._e()})),t.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.effectValue]?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l([e.dataManager.skillById[t.effectValue]],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),t.combSkillList&&t.combSkillList.length||t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[e._v(e._s(e.$t("含まれるスキル")))]),a("td",[e._l(t.combSkillList,(function(l){return t.combSkillList&&t.combSkillList.length?[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:l.id}},target:"_blank"}},[e._v(e._s(l.name))]),a("span")],1),e._l([e.dataManager.skillById[l.id]].filter((function(e){return e})),(function(t){return l.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))]:e._e()})),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:l.effectValue}},target:"_blank"}},[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))],2)]):e._e(),e.skills.length!==l+1?a("tr",[e._m(0,!0),e._m(1,!0)]):e._e()]}))],2)])],1):e._e()},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("th",[a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("br")])}],n=a("ade3"),s=a("9ab4"),i=a("1b40"),o=a("6b98"),c=a("f015"),u=a("0058");let d=class extends o["a"]{constructor(...e){super(...e),Object(n["a"])(this,"skills",void 0),Object(n["a"])(this,"showTitle",void 0)}get EBattleEffectKind(){return c["c"]}};Object(s["b"])([Object(i["c"])({type:Array,default:()=>[]})],d.prototype,"skills",void 0),Object(s["b"])([Object(i["c"])({type:Boolean,default:!0})],d.prototype,"showTitle",void 0),d=Object(s["b"])([Object(i["a"])({components:{AbnormlStateTags:u["a"]}})],d);var h=d,f=h,_=(a("11b2"),a("2877")),p=Object(_["a"])(f,l,r,!1,null,"a8834904",null);t["a"]=p.exports},"11b2":function(e,t,a){"use strict";a("123f")},"123f":function(e,t,a){},"1b40":function(e,t,a){"use strict";a.d(t,"a",(function(){return l["b"]})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return d}));var l=a("2fe1"),r=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var l=Array(e),r=0;for(t=0;t<a;t++)for(var n=arguments[t],s=0,i=n.length;s<i;s++,r++)l[r]=n[s];return l},n=/\B([A-Z])/g,s=function(e){return e.replace(n,"-$1").toLowerCase()};function i(e){return function(t,a,l){var n=s(a),i=l.value;l.value=function(){for(var t=this,a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];var s=function(l){var s=e||n;void 0===l?0===a.length?t.$emit(s):1===a.length?t.$emit(s,a[0]):t.$emit.apply(t,r([s],a)):(a.unshift(l),t.$emit.apply(t,r([s],a)))},c=i.apply(this,a);return o(c)?c.then(s):s(c),c}}}function o(e){return e instanceof Promise||e&&"function"===typeof e.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(e,t,a){if(c&&!Array.isArray(e)&&"function"!==typeof e&&!e.hasOwnProperty("type")&&"undefined"===typeof e.type){var l=Reflect.getMetadata("design:type",t,a);l!==Object&&(e.type=l)}}function d(e){return void 0===e&&(e={}),function(t,a){u(e,t,a),Object(l["a"])((function(t,a){(t.props||(t.props={}))[a]=e}))(t,a)}}},"2e50":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"","lock-scroll":!1,top:"0",visible:e.visible,fullscreen:!0},on:{"update:visible":function(t){e.visible=t}}},[a("vue-json-pretty",{attrs:{data:e.data,selectableType:"single"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},r=[],n=a("ade3"),s=a("9ab4"),i=a("2fe1"),o=a("838b"),c=a.n(o),u=a("6b98");let d=class extends u["a"]{constructor(...e){super(...e),Object(n["a"])(this,"data",null),Object(n["a"])(this,"visible",!1)}open(e){this.visible=!0,this.data=e}};d=Object(s["b"])([Object(i["b"])({components:{VueJsonPretty:c.a}})],d);var h=d,f=h,_=(a("f774"),a("2877")),p=Object(_["a"])(f,l,r,!1,null,"068a8a9b",null);t["a"]=p.exports},5335:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a("ade3"),r=a("a6fe");class n extends r["a"]{constructor(...e){super(...e),Object(l["a"])(this,"foodLevel",0),Object(l["a"])(this,"blazeArtLevel",0)}}},5783:function(e,t,a){},"838b":function(e,t,a){!function(t,a){e.exports=a()}(0,(function(){return function(){"use strict";var e={810:function(e,t,a){function l(e,t,a,l,r,n,s,i){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),l&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),s?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=o):r&&(o=i?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(e,t){return o.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:c}}a.r(t),a.d(t,{default:function(){return u}});var r=l({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,n=l({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[a("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var a=e.model,l=t.target,r=!!l.checked;if(Array.isArray(a)){var n=e._i(a,null);l.checked?n<0&&(e.model=a.concat([null])):n>-1&&(e.model=a.slice(0,n).concat(a.slice(n+1)))}else e.model=r},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function s(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function i(e,t="root",a=0,{key:l,index:r,type:n="content",showComma:o=!1,length:c=1}={}){const u=s(e);if("array"===u){const r=e.map((e,l,r)=>i(e,`${t}[${l}]`,a+1,{index:l,showComma:l!==r.length-1,length:c,type:n})).reduce((e,t)=>e.concat(t),[]);return[i("[",t,a,{key:l,length:e.length,type:"arrayStart"})[0]].concat(r,i("]",t,a,{showComma:o,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const s=Object.keys(e),u=s.map((l,r,s)=>i(e[l],l.includes(".")?`${t}["${l}"]`:`${t}.${l}`,a+1,{key:l,showComma:r!==s.length-1,length:c,type:n})).reduce((e,t)=>e.concat(t),[]);return[i("{",t,a,{key:l,index:r,length:s.length,type:"objectStart"})[0]].concat(u,i("}",t,a,{showComma:o,length:s.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:a,key:l,index:r,path:t,showComma:o,length:c,type:n}).reduce((e,[t,a])=>void 0!==a?{...e,[t]:a}:e,{});return"object"===s(d)?[d]:d}var o=l({components:{Brackets:r,CheckController:n.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return s(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){const t=this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e);return this.node.showComma?t+",":t},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[a("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,l){return a("div",{key:l,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?a("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),e._v(" "),a("span",["content"!==e.node.type?a("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):a("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}),e._v(" "),e.showLength&&e.collapsed?a("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=l({name:"VueJsonPretty",components:{TreeNode:o.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:i(this.data,this.path).reduce((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1},{})}},computed:{flatData(){let e=null;return i(this.data,this.path).reduce((t,a,l)=>{const r={...a,id:l},n=this.hiddenPaths[r.path];if(e&&e.path===r.path){const a="objectStart"===e.type,l={...e,...r,content:a?"{...}":"[...]",type:a?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(l)}return n&&!e?(e=r,t):e?t:t.concat(r)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,a=Math.floor(t/this.itemHeight);let l=a<0?0:a+e>this.flatData.length?this.flatData.length-e:a;l<0&&(l=0);const r=l+e;this.translateY=l*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=l&&t<r)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),a=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,a)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,a=e;this.selectedPaths=a,this.$emit("change",a,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[a("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[a("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return a("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.1"})}},t={};function a(l){if(t[l])return t[l].exports;var r=t[l]={exports:{}};return e[l](r,r.exports,a),r.exports}return a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(810)}()}))},a1b6:function(e,t,a){"use strict";a("5783")},a9e2:function(e,t,a){},c121:function(e,t,a){"use strict";a("a9e2")},e0a0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("JsonViewDialog",{ref:"jsonViewDialog"}),e.character?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.character.NAME))]),e._l(e.character.images,(function(t){return a("img",{staticClass:"icon-full",attrs:{src:t,alt:e.character.NAME}})})),e._l(e.character.otherImages,(function(t){return a("img",{staticClass:"icon-full",attrs:{src:t,alt:e.character.NAME}})})),a("p",[e._v(e._s(e.character.DESC))]),a("br"),a("p",[e._v("DF: "+e._s(e.character.DF))]),e.character.EXC?[a("p",[e._v(e._s(e.$t("職業"))+": "+e._s(e.$t(e.dataManager.lookup.EJobKind[e.character.BTST])))]),a("p",[e._v(e._s(e.$t("性別"))+": "+e._s(e.character.genderTextIcon))])]:e._e(),e.character.WEAPON.length?a("p",[e._v(e._s(e.$t("武器種類"))+": "+e._s(e.weapons))]):e._e(),e._l(e.character.GROW,(function(t){return a("div",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00006.png",alt:e.$t("限界キャンディ")}}),a("span",[e._v(e._s(t.STONE))]),a("span",[e._v(e._s("⭐".repeat(t.STAR)))])])})),a("br"),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.$refs.jsonViewDialog.open(e.character)}}},[e._v(e._s(e.$t("Rawデータ")))])],2),a("div",{staticClass:"item-container-right"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[e.character.EXC?a("el-tab-pane",{attrs:{label:e.$t("メーン"),name:"main"}},[e.character.EXC?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("レベル")}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.characterModifier.level,callback:function(t){e.$set(e.characterModifier,"level",t)},expression:"characterModifier.level"}})],1),a("el-form-item",{attrs:{label:e.$t("食事レベル")}},[a("el-input-number",{attrs:{size:"mini",min:0,max:Math.min(e.character.FDM.length,e.characterModifier.level),step:1,"step-strictly":""},model:{value:e.characterModifier.foodLevel,callback:function(t){e.$set(e.characterModifier,"foodLevel",t)},expression:"characterModifier.foodLevel"}})],1)],1)],1),a("div",{staticClass:"character-levels"},[a("table",{staticClass:"default-table"},[e._l(e.character.getStates(e.characterModifier.level,e.characterModifier.foodLevel),(function(t){return a("tr",[a("th",[a("el-popover",{attrs:{disabled:!(t.value||t.foodValue||t.skills.length),placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(e.$t(t.label)))])]),a("table",{staticClass:"default-table"},[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.foodValue?a("tr",[a("th",[e._v(e._s(e.$t("食事")))]),a("td",[e._v(e._s(t.foodValue))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1),a("td",[a("el-popover",{attrs:{disabled:!(t.value||t.foodValue||t.skills.length),placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(t.total))])]),a("table",{staticClass:"default-table"},[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.foodValue?a("tr",[a("th",[e._v(e._s(e.$t("食事")))]),a("td",[e._v(e._s(t.foodValue))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1)])})),e._l(e.character.getElements(e.characterModifier.level),(function(t){return a("tr",[a("th",[a("el-popover",{attrs:{disabled:!t.skills.length,placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(e.$t(t.label)))])]),a("table",{staticClass:"default-table"},[t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1),a("td",[a("el-popover",{attrs:{disabled:!t.skills.length,placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(t.value))])]),a("table",{staticClass:"default-table"},[t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1)])}))],2),a("div",e._l(e.character.getSkillWithComboSkills(e.characterModifier.level),(function(t){return a("div",[a("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("p",[a("el-link",{staticClass:"poppover__a",attrs:{icon:"el-icon-more",underline:!1}},[e._v(e._s(t.name))])],1)]),t.detail?a("p",{staticClass:"popover__detail"},[e._v(e._s(t.detail))]):e._e(),t.effectValue||t.effectValue2?a("p",[a("b",[e._v(e._s(e.$t("数値")))]),a("span",[e._v(" "+e._s(t.effectValue))]),t.effectValue2?a("span",[e._v(", "+e._s(t.effectValue2))]):e._e()]):e._e(),t.combSkillList&&t.combSkillList.length?[a("br"),a("p",[a("b",[e._v(e._s(e.$t("含まれるスキル")))])]),e._l(t.combSkillList,(function(t){return[a("p",[e._v(e._s(t.name))]),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))]):e._e()}))]})),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))]):e._e()}))]:e._e(),t.stateOwn.length||t.state.length?a("br"):e._e(),a("AbnormlStateTags",{attrs:{states:t.stateOwn,own:!0}}),a("AbnormlStateTags",{attrs:{states:t.state}})],2)],1)})),0)])]):e._e(),e.character.GROUP_DF&&e.onlyItems.length?a("div",[a("el-divider",[e._v(e._s(e.$t("専用アイテム")))]),e._l(e.onlyItems,(function(e){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)]}))],2):e._e(),e.dataManager.itemsByCharacterLegendRecipe[e.character.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("レジェンドレシピ")))]),e._l(e.dataManager.itemsByCharacterLegendRecipe[e.character.DF],(function(e){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)]}))],2):e._e(),e.dataManager.api.huntInfosByCharacterId[e.character.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("トレジャー")))]),e._l(e.dataManager.api.huntInfosByCharacterId[e.character.DF],(function(t,l){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoHunt",query:{huntId:t.HUNTID}}}},[e._v(e._s(t.NAME))])],1),e._l(t.JCND.filter((function(t){return t.TYPE===e.eConditionType.TargetChara&&t.VALS[0]===e.character.DF})),(function(t){return a("p",[e._v(e._s(e.$t("LV{0}以上の{1}の編成",[t.VALS[1],e.character.NAME])))])}))],2)}))],2):e._e()]):e._e(),e.character.SKILL.length?a("el-tab-pane",{attrs:{label:e.$t("スキル"),name:"skill"}},[a("div",e._l(e.character.skillsByLevel,(function(t){var l=t.level,r=t.skills;return a("div",[a("SkillTextInfo",{attrs:{skills:r}},[a("template",{slot:"title"},[e._v("LV "+e._s(l))])],2)],1)})),0)]):e._e(),e.character.BA.length?a("el-tab-pane",{attrs:{label:e.$t("ブレイズアーツ"),name:"blazArt"}},[a("div",e._l(e.character.BA,(function(t){return a("div",e._l(e.dataManager.blazeArtById[t.DF].LV.entries(),(function(l){var r=l[0],n=l[1];return a("div",[e._l([[e.dataManager.skillById[n.SKILL_DF],r+1]],(function(l){var r=l[0],n=l[1];return[a("SkillTextInfo",{attrs:{skills:[r]}},[a("template",{slot:"title"},[e._v("LV "+e._s(t.LV)+" / BA LV "+e._s(n)+" / EXP "+e._s(e.dataManager.blazeArtById[t.DF].levelExperience(n)))])],2)]}))],2)})),0)})),0)]):e._e(),e.character.FDM.length?a("el-tab-pane",{attrs:{label:e.$t("食事"),name:"meal"}},[a("div",[a("small",[e._v(e._s(e.$t("※ゲーム内ではLV1食事お0/60表示されます LV2食事は1/60です")))]),a("br"),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レベルから(包括的)")))]),a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.startLevel,callback:function(t){e.startLevel=t},expression:"startLevel"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レベルに(包括的)")))]),a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.endLevel,callback:function(t){e.endLevel=t},expression:"endLevel"}})],1)]),a("div",{staticClass:"food-levels"},e._l(e.character.totalFoods(e.startLevel,e.endLevel),(function(t){var l=t.item,r=t.qualities;return a("div",{staticClass:"food-level-container"},e._l(r,(function(t,r){var n=t.quality,s=t.count;return a("el-tooltip",{key:r,attrs:{content:l.NAME,placement:"left"}},[a("router-link",{staticClass:"food-level-item",attrs:{to:{name:l.RSP.length?"ToolsComposeItem":"ItemsItem",query:{df:l.DF,quality:n}},target:"_blank"}},[a("p",[e._v(e._s(e.$t("品質"))+e._s(n))]),a("img",{staticClass:"icon-small",attrs:{src:l.icon,alt:l.NAME}}),a("p",[e._v("x "+e._s(s))])])],1)})),1)})),0),a("br"),a("div",{staticClass:"character-food__items"},e._l(e.character.FDM,(function(t){return a("div",{staticClass:"character-food__item"},[a("el-divider",[e._v("LV"+e._s(t.NO))]),e._l(t.FD.map((function(t){return[t,e.dataManager.itemById[t.DF]]})),(function(t){var l=t[0],r=t[1];return[a("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[a("router-link",{staticClass:"character-food__consume",attrs:{to:r.RSP.length?{name:"ToolsComposeItem",query:{df:r.DF,quality:l.QTY}}:{name:"ItemsItem",query:{df:r.DF}},target:"_blank"}},[a("span",{staticClass:"character-food__quality-text"},[e._v(e._s(e.$t("品質"))+" "+e._s(l.QTY))]),a("img",{staticClass:"icon-small",attrs:{src:r.icon,alt:r.NAME}})])],1)]})),a("table",e._l(Object.keys(e.character.SPEC).filter((function(e){return t[e]})),(function(l){return a("tr",[a("td",[e._v(e._s(e.$t(e.dataManager.lookup.state[l])))]),a("td",[e._v(e._s(t[l]))])])})),0)],2)})),0)])]):e._e(),e.character.quests.length?a("el-tab-pane",{attrs:{label:e.$t("キャラクタークエスト"),name:"characterQuest"}},[a("div",e._l(e.character.quests,(function(t){var l=t[0],r=t[1];return a("div",{staticClass:"character-quest"},[a("el-divider",[e._v("LV "+e._s(l.LV))]),a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:r.DF}},target:"_blank"}},[e._v(e._s(r.NAME))])],1)})),0)]):e._e(),e.dataManager.advQuestsByCharacterId[e.character.DF]&&e.dataManager.advQuestsByCharacterId[e.character.DF].length?a("el-tab-pane",{attrs:{label:e.$t("ダイアログ"),name:"dialog"}},[a("div",e._l(e.dataManager.advQuestsByCharacterId[e.character.DF].filter((function(t){return!e.character.QST.some((function(e){return t.DF===e.QUEST_DF}))})),(function(t){return a("div",{staticClass:"character-quest"},[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}},target:"_blank"}},[e._v(e._s(t.NAME))])],1)})),0)]):e._e()],1)],1)]):e._e()],1)},r=[],n=a("ade3"),s=a("9ab4"),i=a("2fe1"),o=a("6b98"),c=a("87ef"),u=a("5335"),d=a("0584"),h=a("f015"),f=a("2e50"),_=a("0058");let p=class extends o["a"]{constructor(...e){super(...e),Object(n["a"])(this,"activeTab",""),Object(n["a"])(this,"character",null),Object(n["a"])(this,"characterModifier",new u["a"]),Object(n["a"])(this,"startLevel",1),Object(n["a"])(this,"endLevel",c["b"].maxLevel)}get EBattleEffectKind(){return h["c"]}get eConditionType(){return h["n"]}get CharacterMVList(){return c["b"]}beforeMount(){this.characterModifier.level=+this.$route.query.level||c["b"].maxLevel,this.characterModifier.foodLevel=+this.$route.query.foodLevel||c["b"].maxLevel,this.character=this.dataManager.characterById[this.$route.query.df],this.character||this.$router.push({name:"Characters"}),this.character.EXC?this.activeTab="main":this.dataManager.advQuestsByCharacterId[this.character.DF]&&this.dataManager.advQuestsByCharacterId[this.character.DF].length&&(this.activeTab="dialog")}get weapons(){return this.character.WEAPON.map(e=>this.$t(this.dataManager.lookup.ESubCategory[e.GEN])).join(", ")}get onlyItems(){return this.dataManager.itemsByGroupDf[this.character.GROUP_DF]||[]}};p=Object(s["b"])([Object(i["b"])({components:{SkillTextInfo:d["a"],JsonViewDialog:f["a"],AbnormlStateTags:_["a"]}})],p);var v=p,m=v,b=(a("c121"),a("2877")),g=Object(b["a"])(m,l,r,!1,null,"57090d31",null);t["default"]=g.exports},ea3d:function(e,t,a){},f774:function(e,t,a){"use strict";a("ea3d")}}]);