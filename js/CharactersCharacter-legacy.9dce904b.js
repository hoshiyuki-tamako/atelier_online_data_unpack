(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CharactersCharacter"],{"1b40":function(e,t,a){"use strict";a.d(t,"a",(function(){return n["b"]})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return d}));var n=a("2fe1"),r=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var l=arguments[t],s=0,i=l.length;s<i;s++,r++)n[r]=l[s];return n},l=/\B([A-Z])/g,s=function(e){return e.replace(l,"-$1").toLowerCase()};function i(e){return function(t,a,n){var l=s(a),i=n.value;n.value=function(){for(var t=this,a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];var s=function(n){var s=e||l;void 0===n?0===a.length?t.$emit(s):1===a.length?t.$emit(s,a[0]):t.$emit.apply(t,r([s],a)):(a.unshift(n),t.$emit.apply(t,r([s],a)))},c=i.apply(this,a);return o(c)?c.then(s):s(c),c}}}function o(e){return e instanceof Promise||e&&"function"===typeof e.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(e,t,a){if(c&&!Array.isArray(e)&&"function"!==typeof e&&!e.hasOwnProperty("type")&&"undefined"===typeof e.type){var n=Reflect.getMetadata("design:type",t,a);n!==Object&&(e.type=n)}}function d(e){return void 0===e&&(e={}),function(t,a){u(e,t,a),Object(n["a"])((function(t,a){(t.props||(t.props={}))[a]=e}))(t,a)}}},2223:function(e,t,a){},"2e50":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"","lock-scroll":!1,top:"0",visible:e.visible,fullscreen:!0},on:{"update:visible":function(t){e.visible=t}}},[a("vue-json-pretty",{attrs:{data:e.data,selectableType:"single"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},r=[],l=a("d4ec"),s=a("bee2"),i=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("9ab4")),h=a("2fe1"),f=a("838b"),p=a.n(f),_=a("6b98"),v=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(u["a"])(Object(i["a"])(e),"data",null),Object(u["a"])(Object(i["a"])(e),"visible",!1),e}return Object(s["a"])(a,[{key:"open",value:function(e){this.visible=!0,this.data=e}}]),a}(_["a"]);v=Object(d["b"])([Object(h["b"])({components:{VueJsonPretty:p.a}})],v);var m=v,b=m,g=(a("f774"),a("2877")),y=Object(g["a"])(b,n,r,!1,null,"068a8a9b",null);t["a"]=y.exports},"3c26":function(e,t,a){"use strict";a("2223")},"45b5":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skills&&e.skills.length?a("div",[e.showTitle?a("el-divider",[e._t("title",(function(){return[e._v(e._s(e.$t("スキル")))]}))],2):e._e(),e._l(e.skills,(function(t,n){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[e._v(e._s(e.$t("名前")))]),a("td",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)]),a("tr",[a("th",[e._v(e._s(e.$t("詳細")))]),a("td",[e._v(e._s(t.detail))])]),a("tr",[a("th",[e._v(e._s(e.$t("数値")))]),a("td",[e._v(e._s(t.effectValue)+", "+e._s(t.effectValue2))])]),1===t.type?[a("tr",[a("th",[e._v(e._s(e.$t("攻撃タイプ")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.attackSkill.attribute])))])]),a("tr",[a("th",[e._v(e._s(e.$t("属性")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]),a("tr",[a("th",[e._v(e._s(e.$t("對象")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])])]:e._e(),t.attackSkill.stateOwn.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態 (自)")))]),a("td",[e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],r=t[1];return[a("el-tooltip",{attrs:{content:r.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(r.name)+" "+e._s(r.turn)+" "+e._s(e.$t("ターン")))])])]}))],2)]):e._e(),t.attackSkill.state.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態")))]),a("td",[e._l(t.attackSkill.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],r=t[1];return[a("el-tooltip",{attrs:{content:r.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(r.name)+" "+e._s(r.turn)+" "+e._s(e.$t("ターン")))])])]}))],2)]):e._e(),e._l([e.dataManager.zoneById[t.effectValue]].filter((function(e){return e})),(function(n){return t.effect===e.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:n.id}},target:"_blank"}},[e._v(e._s(n.name))])],1),a("td",e._l(n.effectlist,(function(t){return a("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])})),0)]):e._e()})),t.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.effectValue]?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l([e.dataManager.skillById[t.effectValue]],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),t.combSkillList.length||t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[e._v(e._s(e.$t("含まれるスキル")))]),a("td",[e._l(t.combSkillList,(function(t){return[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))]})),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))],2)]):e._e()],2),e.skills.length!==n+1?a("p",[e._v(e._s(">"))]):e._e()])}))],2):e._e()},r=[],l=a("d4ec"),s=a("bee2"),i=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("9ab4")),h=a("1b40"),f=a("6b98"),p=a("f015"),_=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(u["a"])(Object(i["a"])(e),"skills",void 0),Object(u["a"])(Object(i["a"])(e),"showTitle",void 0),e}return Object(s["a"])(a,[{key:"EBattleEffectKind",get:function(){return p["c"]}}]),a}(f["a"]);Object(d["b"])([Object(h["c"])({type:Array,default:function(){return[]}})],_.prototype,"skills",void 0),Object(d["b"])([Object(h["c"])({type:Boolean,default:!0})],_.prototype,"showTitle",void 0),_=Object(d["b"])([Object(h["a"])({components:{}})],_);var v=_,m=v,b=(a("3c26"),a("2877")),g=Object(b["a"])(m,n,r,!1,null,"09a79651",null);t["a"]=g.exports},5335:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("d4ec"),r=a("257e"),l=a("262e"),s=a("2caf"),i=a("ade3"),o=(a("99af"),a("a6fe")),c=function(e){Object(l["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s)),Object(i["a"])(Object(r["a"])(e),"foodLevel",0),Object(i["a"])(Object(r["a"])(e),"blazeArtLevel",0),e}return a}(o["a"])},6998:function(e,t,a){"use strict";a("8fa7")},"838b":function(e,t,a){!function(t,a){e.exports=a()}(0,(function(){return function(){"use strict";var e={810:function(e,t,a){function n(e,t,a,n,r,l,s,i){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),s?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=o):r&&(o=i?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(e,t){return o.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:c}}a.r(t),a.d(t,{default:function(){return u}});var r=n({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,l=n({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[a("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var a=e.model,n=t.target,r=!!n.checked;if(Array.isArray(a)){var l=e._i(a,null);n.checked?l<0&&(e.model=a.concat([null])):l>-1&&(e.model=a.slice(0,l).concat(a.slice(l+1)))}else e.model=r},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function s(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function i(e,t="root",a=0,{key:n,index:r,type:l="content",showComma:o=!1,length:c=1}={}){const u=s(e);if("array"===u){const r=e.map((e,n,r)=>i(e,`${t}[${n}]`,a+1,{index:n,showComma:n!==r.length-1,length:c,type:l})).reduce((e,t)=>e.concat(t),[]);return[i("[",t,a,{key:n,length:e.length,type:"arrayStart"})[0]].concat(r,i("]",t,a,{showComma:o,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const s=Object.keys(e),u=s.map((n,r,s)=>i(e[n],n.includes(".")?`${t}["${n}"]`:`${t}.${n}`,a+1,{key:n,showComma:r!==s.length-1,length:c,type:l})).reduce((e,t)=>e.concat(t),[]);return[i("{",t,a,{key:n,index:r,length:s.length,type:"objectStart"})[0]].concat(u,i("}",t,a,{showComma:o,length:s.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:a,key:n,index:r,path:t,showComma:o,length:c,type:l}).reduce((e,[t,a])=>void 0!==a?{...e,[t]:a}:e,{});return"object"===s(d)?[d]:d}var o=n({components:{Brackets:r,CheckController:l.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return s(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){const t=this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e);return this.node.showComma?t+",":t},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[a("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,n){return a("div",{key:n,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?a("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),e._v(" "),a("span",["content"!==e.node.type?a("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):a("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}),e._v(" "),e.showLength&&e.collapsed?a("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=n({name:"VueJsonPretty",components:{TreeNode:o.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:i(this.data,this.path).reduce((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1},{})}},computed:{flatData(){let e=null;return i(this.data,this.path).reduce((t,a,n)=>{const r={...a,id:n},l=this.hiddenPaths[r.path];if(e&&e.path===r.path){const a="objectStart"===e.type,n={...e,...r,content:a?"{...}":"[...]",type:a?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(n)}return l&&!e?(e=r,t):e?t:t.concat(r)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,a=Math.floor(t/this.itemHeight);let n=a<0?0:a+e>this.flatData.length?this.flatData.length-e:a;n<0&&(n=0);const r=n+e;this.translateY=n*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=n&&t<r)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),a=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,a)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,a=e;this.selectedPaths=a,this.$emit("change",a,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[a("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[a("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return a("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.1"})}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}return a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(810)}()}))},"8fa7":function(e,t,a){},a15b:function(e,t,a){"use strict";var n=a("23e7"),r=a("44ad"),l=a("fc6a"),s=a("a640"),i=[].join,o=r!=Object,c=s("join",",");n({target:"Array",proto:!0,forced:o||!c},{join:function(e){return i.call(l(this),void 0===e?",":e)}})},e0a0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("JsonViewDialog",{ref:"jsonViewDialog"}),e.character?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.character.NAME))]),e._l(e.character.images,(function(t){return a("img",{staticClass:"icon-full",attrs:{src:t,alt:e.character.NAME}})})),e._l(e.character.otherImages,(function(t){return a("img",{staticClass:"icon-full",attrs:{src:t,alt:e.character.NAME}})})),a("p",[e._v(e._s(e.character.DESC))]),a("br"),a("p",[e._v("DF: "+e._s(e.character.DF))]),e.character.EXC?[a("p",[e._v(e._s(e.$t("職業"))+": "+e._s(e.$t(e.dataManager.lookup.EJobKind[e.character.BTST])))]),a("p",[e._v(e._s(e.$t("性別"))+": "+e._s(e.character.genderTextIcon))])]:e._e(),e.character.WEAPON.length?a("p",[e._v(e._s(e.$t("武器種類"))+": "+e._s(e.weapons))]):e._e(),e._l(e.character.GROW,(function(t){return a("div",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00006.png",alt:e.$t("限界キャンディ")}}),a("span",[e._v(e._s(t.STONE))]),a("span",[e._v(e._s("⭐".repeat(t.STAR)))])])})),a("br"),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.$refs.jsonViewDialog.open(e.character)}}},[e._v(e._s(e.$t("Rawデータ")))])],2),a("div",{staticClass:"item-container-right"},[e.character.EXC?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("レベル")}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.characterModifier.level,callback:function(t){e.$set(e.characterModifier,"level",t)},expression:"characterModifier.level"}})],1),a("el-form-item",{attrs:{label:e.$t("食事レベル")}},[a("el-input-number",{attrs:{size:"mini",min:0,max:Math.min(e.character.FDM.length,e.characterModifier.level),step:1,"step-strictly":""},model:{value:e.characterModifier.foodLevel,callback:function(t){e.$set(e.characterModifier,"foodLevel",t)},expression:"characterModifier.foodLevel"}})],1)],1)],1),a("div",{staticClass:"character-levels"},[a("table",[e._l(e.character.getStates(e.characterModifier.level,e.characterModifier.foodLevel),(function(t){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(e.$t(t.label)))]),t.value||t.foodValue||t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.foodValue?a("tr",[a("th",[e._v(e._s(e.$t("食事")))]),a("td",[e._v(e._s(t.foodValue))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(t.total))]),t.value||t.foodValue||t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.foodValue?a("tr",[a("th",[e._v(e._s(e.$t("食事")))]),a("td",[e._v(e._s(t.foodValue))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1)])})),e._l(e.character.getElements(e.characterModifier.level),(function(t){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(e.$t(t.label)))]),t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(t.value))]),t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1)])}))],2),a("div",e._l(e.character.getSkills(e.characterModifier.level),(function(t){return a("div",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("p",[e._v(e._s(t.name))]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[t.detail?a("p",{staticClass:"popover-base__detail"},[e._v(e._s(t.detail))]):e._e(),a("br"),a("p",[e._v(e._s(e.$t("数値"))+": "+e._s(t.effectValue)+", "+e._s(t.effectValue2))]),e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],r=t[1];return a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(r.name)+" "+e._s(r.turn)+" "+e._s(e.$t("ターン")))])})),e._l(t.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],r=t[1];return a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(r.name)+" "+e._s(r.turn)+" "+e._s(e.$t("ターン")))])}))],2)])],2)],1)})),0)])]):e._e(),e.character.GROUP_DF&&e.onlyItems.length?a("div",[a("el-divider",[e._v(e._s(e.$t("専用アイテム")))]),e._l(e.onlyItems,(function(e){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)]}))],2):e._e(),e.dataManager.itemsByCharacterLegendRecipe[e.character.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("レジェンドレシピ")))]),e._l(e.dataManager.itemsByCharacterLegendRecipe[e.character.DF],(function(e){return[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)]}))],2):e._e(),e.dataManager.api.huntInfosByCharacterId[e.character.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("トレジャー")))]),e._l(e.dataManager.api.huntInfosByCharacterId[e.character.DF],(function(t,n){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoHunt",query:{huntId:t.HUNTID}}}},[e._v(e._s(t.NAME))])],1),e._l(t.JCND.filter((function(t){return t.TYPE===e.eConditionType.TargetChara&&t.VALS[0]===e.character.DF})),(function(t){return a("p",[e._v(e._s(e.$t("LV{0}以上の{1}の編成",[t.VALS[1],e.character.NAME])))])}))],2)}))],2):e._e(),e.character.SKILL.length?a("div",[a("el-divider",[e._v(e._s(e.$t("スキル")))]),e._l(e.character.skillsByLevel,(function(t){var n=t.level,r=t.skillDfs;return a("div",[a("SkillTextInfo",{attrs:{skills:r.map((function(t){return e.dataManager.skillById[t]})).filter((function(e){return e}))}},[a("template",{slot:"title"},[e._v("LV "+e._s(n))])],2)],1)}))],2):e._e(),e.character.BA.length?a("div",[a("el-divider",[e._v(e._s(e.$t("ブレイズアーツ"))+" (BA)")]),e._l(e.character.BA,(function(t){return a("div",e._l(e.dataManager.blazeArtById[t.DF].LV.entries(),(function(n){var r=n[0],l=n[1];return a("div",[e._l([[e.dataManager.skillById[l.SKILL_DF],r+1]],(function(n){var r=n[0],l=n[1];return[a("SkillTextInfo",{attrs:{skills:[r]}},[a("template",{slot:"title"},[e._v("LV "+e._s(t.LV)+" / BA LV "+e._s(l)+" / EXP "+e._s(e.dataManager.blazeArtById[t.DF].levelExperience(l)))])],2)]}))],2)})),0)}))],2):e._e(),e.character.FDM.length?a("div",[a("el-divider",[e._v(e._s(e.$t("食事")))]),a("small",[e._v(e._s(e.$t("※ゲーム内ではLV1食事お0/60表示されます LV2食事は1/60です")))]),a("br"),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レベルから(包括的)")))]),a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.startLevel,callback:function(t){e.startLevel=t},expression:"startLevel"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("レベルに(包括的)")))]),a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.endLevel,callback:function(t){e.endLevel=t},expression:"endLevel"}})],1)]),a("div",{staticClass:"food-levels"},e._l(e.character.totalFoods(e.startLevel,e.endLevel),(function(t){var n=t.item,r=t.qualities;return a("div",{staticClass:"food-level-container"},e._l(r,(function(t,r){var l=t.quality,s=t.count;return a("el-tooltip",{key:r,attrs:{content:n.NAME,placement:"left"}},[a("router-link",{staticClass:"food-level-item",attrs:{to:{name:n.RSP.length?"ToolsComposeItem":"ItemsItem",query:{df:n.DF,quality:l}},target:"_blank"}},[a("p",[e._v(e._s(e.$t("品質"))+e._s(l))]),a("img",{staticClass:"icon-small",attrs:{src:n.icon,alt:n.NAME}}),a("p",[e._v("x "+e._s(s))])])],1)})),1)})),0),a("br"),a("div",{staticClass:"character-food__items"},e._l(e.character.FDM,(function(t){return a("div",{staticClass:"character-food__item"},[a("el-divider",[e._v("LV"+e._s(t.NO))]),e._l(t.FD.map((function(t){return[t,e.dataManager.itemById[t.DF]]})),(function(t){var n=t[0],r=t[1];return[a("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[a("router-link",{staticClass:"character-food__consume",attrs:{to:r.RSP.length?{name:"ToolsComposeItem",query:{df:r.DF,quality:n.QTY}}:{name:"ItemsItem",query:{df:r.DF}}}},[a("span",{staticClass:"character-food__quality-text"},[e._v(e._s(e.$t("品質"))+" "+e._s(n.QTY))]),a("img",{staticClass:"icon-small",attrs:{src:r.icon,alt:r.NAME}})])],1)]})),a("table",e._l(Object.keys(e.character.SPEC).filter((function(e){return t[e]})),(function(n){return a("tr",[a("td",[e._v(e._s(e.$t(e.dataManager.lookup.state[n])))]),a("td",[e._v(e._s(t[n]))])])})),0)],2)})),0)],1):e._e(),e.character.QST.length?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト")))]),e._l(e.character.QST.map((function(t){return[t,e.dataManager.questById[t.QUEST_DF]]})).filter((function(e){var t=e[1];return t})),(function(t){var n=t[0],r=t[1];return a("div",{staticClass:"character-quest"},[a("el-divider",[e._v("LV "+e._s(n.LV))]),a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:r.DF}}}},[e._v(e._s(r.NAME))])],1)}))],2):e._e()])]):e._e()],1)},r=[],l=a("d4ec"),s=a("bee2"),i=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("a15b"),a("d81d"),a("9ab4")),h=a("2fe1"),f=a("6b98"),p=a("87ef"),_=a("5335"),v=a("45b5"),m=a("f015"),b=a("2e50"),g=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(u["a"])(Object(i["a"])(e),"character",null),Object(u["a"])(Object(i["a"])(e),"characterModifier",new _["a"]),Object(u["a"])(Object(i["a"])(e),"startLevel",1),Object(u["a"])(Object(i["a"])(e),"endLevel",p["b"].maxLevel),e}return Object(s["a"])(a,[{key:"eConditionType",get:function(){return m["n"]}},{key:"CharacterMVList",get:function(){return p["b"]}},{key:"beforeMount",value:function(){this.characterModifier.level=+this.$route.query.level||p["b"].maxLevel,this.characterModifier.foodLevel=+this.$route.query.foodLevel||p["b"].maxLevel,this.character=this.dataManager.characterById[this.$route.query.df],this.character||this.$router.push({name:"Characters"})}},{key:"weapons",get:function(){var e=this;return this.character.WEAPON.map((function(t){return e.$t(e.dataManager.lookup.ESubCategory[t.GEN])})).join(", ")}},{key:"onlyItems",get:function(){return this.dataManager.itemsByGroupDf[this.character.GROUP_DF]||[]}}]),a}(f["a"]);g=Object(d["b"])([Object(h["b"])({components:{SkillTextInfo:v["a"],JsonViewDialog:b["a"]}})],g);var y=g,k=y,C=(a("6998"),a("2877")),$=Object(C["a"])(k,n,r,!1,null,"2350dd72",null);t["default"]=$.exports},ea3d:function(e,t,a){},f774:function(e,t,a){"use strict";a("ea3d")}}]);