(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ItemsItem"],{"1b40":function(e,t,a){"use strict";a.d(t,"a",(function(){return n["b"]})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return d}));var n=a("2fe1"),i=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<a;t++)for(var l=arguments[t],s=0,r=l.length;s<r;s++,i++)n[i]=l[s];return n},l=/\B([A-Z])/g,s=function(e){return e.replace(l,"-$1").toLowerCase()};function r(e){return function(t,a,n){var l=s(a),r=n.value;n.value=function(){for(var t=this,a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];var s=function(n){var s=e||l;void 0===n?0===a.length?t.$emit(s):1===a.length?t.$emit(s,a[0]):t.$emit.apply(t,i([s],a)):(a.unshift(n),t.$emit.apply(t,i([s],a)))},c=r.apply(this,a);return o(c)?c.then(s):s(c),c}}}function o(e){return e instanceof Promise||e&&"function"===typeof e.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(e,t,a){if(c&&!Array.isArray(e)&&"function"!==typeof e&&!e.hasOwnProperty("type")&&"undefined"===typeof e.type){var n=Reflect.getMetadata("design:type",t,a);n!==Object&&(e.type=n)}}function d(e){return void 0===e&&(e={}),function(t,a){u(e,t,a),Object(n["a"])((function(t,a){(t.props||(t.props={}))[a]=e}))(t,a)}}},2223:function(e,t,a){},"2e50":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"","lock-scroll":!1,top:"0",visible:e.visible,fullscreen:!0},on:{"update:visible":function(t){e.visible=t}}},[a("vue-json-pretty",{attrs:{data:e.data,selectableType:"single"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},i=[],l=a("d4ec"),s=a("bee2"),r=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("9ab4")),p=a("2fe1"),f=a("838b"),_=a.n(f),h=a("6b98"),m=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(u["a"])(Object(r["a"])(e),"data",null),Object(u["a"])(Object(r["a"])(e),"visible",!1),e}return Object(s["a"])(a,[{key:"open",value:function(e){this.visible=!0,this.data=e}}]),a}(h["a"]);m=Object(d["b"])([Object(p["b"])({components:{VueJsonPretty:_.a}})],m);var v=m,g=v,y=(a("f774"),a("2877")),b=Object(y["a"])(g,n,i,!1,null,"068a8a9b",null);t["a"]=b.exports},"3c26":function(e,t,a){"use strict";a("2223")},"45b5":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skills&&e.skills.length?a("div",[e.showTitle?a("el-divider",[e._t("title",(function(){return[e._v(e._s(e.$t("スキル")))]}))],2):e._e(),e._l(e.skills,(function(t,n){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[e._v(e._s(e.$t("名前")))]),a("td",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)]),a("tr",[a("th",[e._v(e._s(e.$t("詳細")))]),a("td",[e._v(e._s(t.detail))])]),a("tr",[a("th",[e._v(e._s(e.$t("数値")))]),a("td",[e._v(e._s(t.effectValue)+", "+e._s(t.effectValue2))])]),1===t.type?[a("tr",[a("th",[e._v(e._s(e.$t("攻撃タイプ")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.attackSkill.attribute])))])]),a("tr",[a("th",[e._v(e._s(e.$t("属性")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.attackSkill.element])))])]),a("tr",[a("th",[e._v(e._s(e.$t("對象")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.targetTeam[t.attackSkill.targetTeam]))+" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.attackSkill.targetScope])))])])]:e._e(),t.attackSkill.stateOwn.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態 (自)")))]),a("td",[e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return[a("el-tooltip",{attrs:{content:i.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(i.name)+" "+e._s(i.turn)+" "+e._s(e.$t("ターン")))])])]}))],2)]):e._e(),t.attackSkill.state.length?a("tr",[a("th",[e._v(e._s(e.$t("追加状態")))]),a("td",[e._l(t.attackSkill.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return[a("el-tooltip",{attrs:{content:i.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(i.name)+" "+e._s(i.turn)+" "+e._s(e.$t("ターン")))])])]}))],2)]):e._e(),e._l([e.dataManager.zoneById[t.effectValue]].filter((function(e){return e})),(function(n){return t.effect===e.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:n.id}},target:"_blank"}},[e._v(e._s(n.name))])],1),a("td",e._l(n.effectlist,(function(t){return a("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])})),0)]):e._e()})),t.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.effectValue]?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l([e.dataManager.skillById[t.effectValue]],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),t.combSkillList.length||t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[e._v(e._s(e.$t("含まれるスキル")))]),a("td",[e._l(t.combSkillList,(function(t){return[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))]})),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))],2)]):e._e()],2),e.skills.length!==n+1?a("p",[e._v(e._s(">"))]):e._e()])}))],2):e._e()},i=[],l=a("d4ec"),s=a("bee2"),r=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("9ab4")),p=a("1b40"),f=a("6b98"),_=a("f015"),h=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(u["a"])(Object(r["a"])(e),"skills",void 0),Object(u["a"])(Object(r["a"])(e),"showTitle",void 0),e}return Object(s["a"])(a,[{key:"EBattleEffectKind",get:function(){return _["c"]}}]),a}(f["a"]);Object(d["b"])([Object(p["c"])({type:Array,default:function(){return[]}})],h.prototype,"skills",void 0),Object(d["b"])([Object(p["c"])({type:Boolean,default:!0})],h.prototype,"showTitle",void 0),h=Object(d["b"])([Object(p["a"])({components:{}})],h);var m=h,v=m,g=(a("3c26"),a("2877")),y=Object(g["a"])(v,n,i,!1,null,"09a79651",null);t["a"]=y.exports},5718:function(e,t,a){},"838b":function(e,t,a){!function(t,a){e.exports=a()}(0,(function(){return function(){"use strict";var e={810:function(e,t,a){function n(e,t,a,n,i,l,s,r){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),s?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=o):i&&(o=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(e,t){return o.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:c}}a.r(t),a.d(t,{default:function(){return u}});var i=n({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,l=n({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[a("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var a=e.model,n=t.target,i=!!n.checked;if(Array.isArray(a)){var l=e._i(a,null);n.checked?l<0&&(e.model=a.concat([null])):l>-1&&(e.model=a.slice(0,l).concat(a.slice(l+1)))}else e.model=i},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function s(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function r(e,t="root",a=0,{key:n,index:i,type:l="content",showComma:o=!1,length:c=1}={}){const u=s(e);if("array"===u){const i=e.map((e,n,i)=>r(e,`${t}[${n}]`,a+1,{index:n,showComma:n!==i.length-1,length:c,type:l})).reduce((e,t)=>e.concat(t),[]);return[r("[",t,a,{key:n,length:e.length,type:"arrayStart"})[0]].concat(i,r("]",t,a,{showComma:o,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const s=Object.keys(e),u=s.map((n,i,s)=>r(e[n],n.includes(".")?`${t}["${n}"]`:`${t}.${n}`,a+1,{key:n,showComma:i!==s.length-1,length:c,type:l})).reduce((e,t)=>e.concat(t),[]);return[r("{",t,a,{key:n,index:i,length:s.length,type:"objectStart"})[0]].concat(u,r("}",t,a,{showComma:o,length:s.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:a,key:n,index:i,path:t,showComma:o,length:c,type:l}).reduce((e,[t,a])=>void 0!==a?{...e,[t]:a}:e,{});return"object"===s(d)?[d]:d}var o=n({components:{Brackets:i,CheckController:l.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return s(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){const t=this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e);return this.node.showComma?t+",":t},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[a("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,n){return a("div",{key:n,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?a("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),e._v(" "),a("span",["content"!==e.node.type?a("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):a("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}),e._v(" "),e.showLength&&e.collapsed?a("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=n({name:"VueJsonPretty",components:{TreeNode:o.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:r(this.data,this.path).reduce((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1},{})}},computed:{flatData(){let e=null;return r(this.data,this.path).reduce((t,a,n)=>{const i={...a,id:n},l=this.hiddenPaths[i.path];if(e&&e.path===i.path){const a="objectStart"===e.type,n={...e,...i,content:a?"{...}":"[...]",type:a?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(n)}return l&&!e?(e=i,t):e?t:t.concat(i)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,a=Math.floor(t/this.itemHeight);let n=a<0?0:a+e>this.flatData.length?this.flatData.length-e:a;n<0&&(n=0);const i=n+e;this.translateY=n*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=n&&t<i)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),a=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,a)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,a=e;this.selectedPaths=a,this.$emit("change",a,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[a("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[a("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return a("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.1"})}},t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}return a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(810)}()}))},"8a81":function(e,t,a){"use strict";a("5718")},"94e3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("JsonViewDialog",{ref:"jsonViewDialog"}),a("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[a("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.item.model,position:e.fbxPosition,rotation:e.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),e.item?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.item.NAME))]),e.item.model?a("div",{staticClass:"item-has-3d",on:{click:e.openFbxViwer}},[a("img",{staticClass:"icon-full",attrs:{src:e.item.icon,alt:e.item.NAME}})]):a("div",[a("img",{staticClass:"icon-full",attrs:{src:e.item.icon,alt:e.item.NAME}})]),a("p",[e._v(e._s(e.item.DESC))]),a("div",{staticClass:"item-local-link"},[e.item.RSP.length?a("p",[a("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:e.item.DF,quality:e.itemModifier.quality}}}},[e._v(e._s(e.$t("調合")))])],1):e._e(),e.item.model?a("p",[a("el-link",{attrs:{underline:!1},on:{click:e.openFbxViwer}},[e._v("3D")])],1):e._e()]),a("br"),a("p",[e._v("DF: "+e._s(e.item.DF))]),a("p",[e._v(e._s(e.$t("種類"))+": "+e._s(e.$t(e.dataManager.lookup.itemCategory[e.item.CATEG])))]),e.item.EQU_BRD?[a("p",[e._v(e._s(e.$t("性別"))+": "+e._s(e.item.genderTextIcon))])]:e._e(),e.item.WPN_KIND?[a("p",[e._v(e._s(e.$t("武器種類"))+": "+e._s(e.$t(e.dataManager.lookup.weaponKind[e.item.WPN_KIND])))]),a("p",[e._v(e._s(e.$t("攻撃属性"))+": "+e._s(e.$t(e.dataManager.lookup.EBattleElementKind[e.item.elementChangeSkill?e.item.elementChangeSkill.effectValue:0])))]),e.item.WPN_KIND!==e.EWeaponKind.eSHIELD?a("p",[e._v(e._s(e.$t("攻撃タイプ"))+": "+e._s(e.$t(e.dataManager.lookup.attackType[+e.ItemMVList.magicDamageWeaponKinds.includes(e.item.WPN_KIND)])))]):e._e(),e.item.JOB.length?[a("p",[e._v(e._s(e.$t("職業"))+": "+e._s(e.item.JOB.map((function(t){return e.$t(e.dataManager.lookup.EJobKind[t])})).join(",")))])]:e._e(),e.item.getAttackSkill()?a("p",[e._v(e._s(e.$t("SP回復率"))+" "+e._s(e.item.getAttackSkill().spAdd)+" "+e._s(e.$t("倍")))]):e._e()]:e._e(),e.item.RSP.length?[a("p",[e._v(e._s(e.$t("レシピ種類"))+": "+e._s(1===e.item.RCP_TYPE?e.$t("レジェンドレシピ"):e.$t("一般レシピ")))]),a("p",[e._v(e._s(e.$t("おすすめ錬金レベル"))+" "+e._s(e.item.ALT?e.item.ALT.LV:"-"))])]:e._e(),e.item.ALT.EXP?a("p",[e._v(e._s(e.$t("調合"))+e._s(e.$t("経験値"))+": "+e._s(e.item.ALT.EXP))]):e._e(),a("p",[a("el-tooltip",{attrs:{content:e.dataManager.wealthById[2].NAME,placement:"right"}},[a("span",{staticClass:"wealth-container"},[a("span",[e._v(e._s(e.$t("売却")))]),a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:e.dataManager.wealthById[2].NAME}}),a("span",[e._v(e._s(e.item.RST.MN))])])])],1),a("br"),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.$refs.jsonViewDialog.open(e.item)}}},[e._v(e._s(e.$t("Rawデータ")))])],2),a("div",{staticClass:"item-container-right"},[e.item.hasSkill||e.item.EQU_BRD?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("品質")}},[a("el-input-number",{attrs:{size:"mini",min:1,max:e.item.EQU_BRD?1/0:100,step:1,"step-strictly":""},model:{value:e.itemModifier.quality,callback:function(t){e.$set(e.itemModifier,"quality",t)},expression:"itemModifier.quality"}})],1),e.item.EQU_BRD?a("el-form-item",{attrs:{label:e.$t("レベル")}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.itemModifier.level,callback:function(t){e.$set(e.itemModifier,"level",t)},expression:"itemModifier.level"}})],1):e._e()],1)],1),a("div",[a("div",{staticClass:"item-modify"},[e.item.EQU_BRD?a("div",[a("div",{staticClass:"item-levels"},[a("table",[e._l(e.item.getStates(e.itemModifier.quality,e.itemModifier.level),(function(t){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(e.$t(t.label)))]),t.value||t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(t.total))]),t.value||t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1)])})),e._l(e.item.getElements(e.itemModifier.quality),(function(t){return a("tr",[a("th",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(e.$t(t.label)))]),t.value||t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1),a("td",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("span",[e._v(e._s(t.total))]),t.value||t.skills.length?a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[a("table",[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])])]):e._e()],2)],1)])}))],2)])]):e._e(),a("div",e._l(e.item.getSkills(e.itemModifier.quality),(function(t){return a("div",[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("p",[e._v(e._s(t.name))]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base"},[t.detail?a("p",{staticClass:"popover-base__detail"},[e._v(e._s(t.detail))]):e._e(),a("br"),a("p",[e._v(e._s(e.$t("数値"))+": "+e._s(t.effectValue)+", "+e._s(t.effectValue2))]),e._l(t.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(i.name)+" "+e._s(i.turn)+" "+e._s(e.$t("ターン")))])})),e._l(t.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var n=t[0],i=t[1];return a("p",[e._v(e._s(e.$t("確率",[(100*n.rate).toFixed()]))+" "+e._s(i.name)+" "+e._s(i.turn)+" "+e._s(e.$t("ターン")))])}))],2)])],2)],1)})),0)])])]):e._e(),e.item.GROUP_DF&&e.dataManager.charactersByGroupDf[e.item.GROUP_DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("キャラクター專用")))]),e._l(e.dataManager.charactersByGroupDf[e.item.GROUP_DF],(function(e){return a("p",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:e.icon,alt:e.NAME}})])],1)],1)}))],2):e._e(),e.item.LRCP_CHARA.length?a("div",[a("el-divider",[e._v(e._s(e.$t("レジェンドレシピ")))]),e._l(e.item.LRCP_CHARA.map((function(t){return e.dataManager.characterById[t.DF]})).filter((function(e){return e})),(function(e){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:e.icon,alt:e.NAME}})])],1)],1)])}))],2):e._e(),e.dataManager.questsByGetItem[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト調合/採取")))]),e._l(e.dataManager.questsByGetItem[e.item.DF],(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}}}},[e._v(e._s(t.NAME))])],1)])}))],2):e._e(),e.dataManager.questsByDeliverItem[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト納品")))]),e._l(e.dataManager.questsByDeliverItem[e.item.DF],(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}}}},[e._v(e._s(t.NAME))])],1)])}))],2):e._e(),e.dataManager.questsByRewardItem[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト報酬")))]),e._l(e.dataManager.questsByRewardItem[e.item.DF],(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}}}},[e._v(e._s(t.NAME))])],1)])}))],2):e._e(),e.dataManager.api.huntInfosByItemId[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("トレジャー")))]),e._l(e.dataManager.api.huntInfosByItemId[e.item.DF],(function(t,n){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoHunt",query:{huntId:t.HUNTID}}}},[e._v(e._s(t.NAME))])],1),e._l(t.RWD.TRS.concat(t.RWD.ITM).filter((function(t){return t.DF===e.item.DF})),(function(t,n){return a("p",[a("span",[e._v(e._s(e.$t("品質"))+e._s(t.QTY))]),t.TRT?a("span",[e._v(" "+e._s(e.dataManager.skillById[t.TRT].name.replace(/\s+/gm,"")))]):e._e()])})),e.dataManager.api.huntInfosByItemId[e.item.DF].length!==n+1?a("br"):e._e()],2)}))],2):e._e(),e._l([e.dataManager.fieldItemById[e.item.DF]].filter((function(e){return e})),(function(t){return a("div",[a("el-divider",[e._v(e._s(e.$t("フィールド用")))]),a("table",[a("tr",[a("th",[e._v(e._s(e.$t("目標")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.eRange])))])]),a("tr",[a("th",[e._v(e._s(e.$t("効果")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.eFieldItemUse[t.eUse])))])]),e._l([t.eStateList.map((function(t){return e.dataManager.abnormalStateById[t]})).filter((function(e){return e}))].filter((function(e){return e.length})),(function(n){return a("tr",[a("th",[e._v(e._s(e.$t("状態")))]),a("td",e._l(n,(function(n,i){return a("div",[a("p",[e._v(e._s(n.name))]),a("p",[e._v(e._s(n.turn)+" "+e._s(e.$t("ターン")))]),t.eStateList.length!==i+1?a("p",[e._v(e._s(">"))]):e._e()])})),0)])}))],2)],1)})),e.item.RSP.length?a("div",[a("el-divider",[e._v(e._s(e.$t("調合條件")))]),e.item.ALT.CST?a("div",[a("p",[a("el-tooltip",{attrs:{content:e.dataManager.wealthById[2].NAME,placement:"right"}},[a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:e.dataManager.wealthById[2].NAME}}),a("span",[e._v(e._s(e.item.ALT.CST))])])])],1)]):e._e(),a("div",{staticClass:"item-compose-items"},e._l(e.item.RSP.map((function(t){return[t,e.dataManager.itemById[t.DF]]})),(function(t){var n=t[0],i=t[1];return a("div",{staticClass:"item-compose-item"},[a("el-tooltip",{attrs:{content:i.NAME,placement:"top"}},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:n.DF}}}},[a("img",{staticClass:"icon-small",attrs:{src:i.icon,alt:i.NAME}}),a("span",[e._v("x"+e._s(n.NC))])])],1)],1)})),0)],1):e._e(),e.dataManager.itemsByRecipe[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("材料")))]),a("div",{staticClass:"item-making-container"},e._l(e.dataManager.itemsByRecipe[e.item.DF],(function(e){return a("div",[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.DF}})])],1)],1)})),0)],1):e._e(),e._l(e.item.SPC.map((function(t){return[t,t.SKILL.map((function(t){return e.dataManager.skillById[t.DF]})).filter((function(e){return e}))]})).filter((function(e){return e[1].length})),(function(t){var n=t[0],i=t[1];return e.item.SPC.length?[a("SkillTextInfo",{attrs:{skills:i}},[a("template",{slot:"title"},[e._v(e._s(e.$t("スキル"))+" ("+e._s(e.$t("品質"))+" "+e._s(n.THR)+")")])],2)]:e._e()}))],2)]):e._e()],1)},i=[],l=a("d4ec"),s=a("bee2"),r=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("caad"),a("2532"),a("9ab4")),p=a("2fe1"),f=a("2ef0"),_=a("e360"),h=a("6b98"),m=a("8faf"),v=a("9eae"),g=a("f015"),y=a("45b5"),b=a("2e50"),k=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(u["a"])(Object(r["a"])(e),"fbxDialogVisible",!1),Object(u["a"])(Object(r["a"])(e),"fbxLoading",null),Object(u["a"])(Object(r["a"])(e),"item",null),Object(u["a"])(Object(r["a"])(e),"itemModifier",new v["a"]),e}return Object(s["a"])(a,[{key:"ItemMVList",get:function(){return m["b"]}},{key:"EWeaponKind",get:function(){return g["l"]}},{key:"fbxRotation",get:function(){var e;return m["b"].weaponKindCategory.includes(null===(e=this.item)||void 0===e?void 0:e.CATEG)?{x:0,y:0,z:Math.PI}:this.item.CATEG===g["g"].eARMOR?{x:-Math.PI/2,y:0,z:0}:[g["g"].eHELM,g["g"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:0,z:Math.PI}:{x:0,y:0,z:0}}},{key:"fbxPosition",get:function(){var e;return m["b"].weaponKindCategory.includes(null===(e=this.item)||void 0===e?void 0:e.CATEG)?{x:0,y:0,z:0}:this.item.CATEG===g["g"].eARMOR?{x:0,y:-.5,z:0}:[g["g"].eHELM,g["g"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:1.2,z:-1.2}:{x:0,y:0,z:0}}},{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.item=this.dataManager.itemById[this.$route.query.df],this.item||this.$router.push({name:"Items"});var e=this.item.EQU_BRD?1/0:m["b"].itemMaxQuality;this.itemModifier.quality=this.$route.query.quality?Object(f["clamp"])(+this.$route.query.quality,1,e):m["b"].equipmentMaxQuality,this.itemModifier.level=this.$route.query.level?Object(f["clamp"])(+this.$route.query.level,1,1/0):m["b"].equipmentMaxLevel}}]),a}(h["a"]);k=Object(d["b"])([Object(p["b"])({components:{"model-fbx":_["ModelFbx"],SkillTextInfo:y["a"],JsonViewDialog:b["a"]}})],k);var $=k,C=$,M=(a("8a81"),a("2877")),S=Object(M["a"])(C,n,i,!1,null,"729118a4",null);t["default"]=S.exports},ea3d:function(e,t,a){},f774:function(e,t,a){"use strict";a("ea3d")}}]);