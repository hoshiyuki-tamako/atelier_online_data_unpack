(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ItemsItem"],{"2e50":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"","lock-scroll":!1,top:"0",visible:e.visible,fullscreen:!0},on:{"update:visible":function(t){e.visible=t}}},[a("vue-json-pretty",{attrs:{data:e.data,selectableType:"single"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},i=[],s=a("d4ec"),n=a("bee2"),r=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("9ab4")),h=a("2fe1"),m=a("838b"),p=a.n(m),_=a("6b98"),f=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var l=arguments.length,i=new Array(l),n=0;n<l;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i)),Object(u["a"])(Object(r["a"])(e),"data",null),Object(u["a"])(Object(r["a"])(e),"visible",!1),e}return Object(n["a"])(a,[{key:"open",value:function(e){this.visible=!0,this.data=e}}]),a}(_["a"]);f=Object(d["b"])([Object(h["b"])({components:{VueJsonPretty:p.a}})],f);var v=f,b=v,g=(a("f774"),a("2877")),k=Object(g["a"])(b,l,i,!1,null,"068a8a9b",null);t["a"]=k.exports},"30bd":function(e,t,a){"use strict";a("b661")},"838b":function(e,t,a){!function(t,a){e.exports=a()}(0,(function(){return function(){"use strict";var e={810:function(e,t,a){function l(e,t,a,l,i,s,n,r){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),l&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),n?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=o):i&&(o=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(e,t){return o.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:c}}a.r(t),a.d(t,{default:function(){return u}});var i=l({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,s=l({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[a("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var a=e.model,l=t.target,i=!!l.checked;if(Array.isArray(a)){var s=e._i(a,null);l.checked?s<0&&(e.model=a.concat([null])):s>-1&&(e.model=a.slice(0,s).concat(a.slice(s+1)))}else e.model=i},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function n(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function r(e,t="root",a=0,{key:l,index:i,type:s="content",showComma:o=!1,length:c=1}={}){const u=n(e);if("array"===u){const i=e.map((e,l,i)=>r(e,`${t}[${l}]`,a+1,{index:l,showComma:l!==i.length-1,length:c,type:s})).reduce((e,t)=>e.concat(t),[]);return[r("[",t,a,{key:l,length:e.length,type:"arrayStart"})[0]].concat(i,r("]",t,a,{showComma:o,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const n=Object.keys(e),u=n.map((l,i,n)=>r(e[l],l.includes(".")?`${t}["${l}"]`:`${t}.${l}`,a+1,{key:l,showComma:i!==n.length-1,length:c,type:s})).reduce((e,t)=>e.concat(t),[]);return[r("{",t,a,{key:l,index:i,length:n.length,type:"objectStart"})[0]].concat(u,r("}",t,a,{showComma:o,length:n.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:a,key:l,index:i,path:t,showComma:o,length:c,type:s}).reduce((e,[t,a])=>void 0!==a?{...e,[t]:a}:e,{});return"object"===n(d)?[d]:d}var o=l({components:{Brackets:i,CheckController:s.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return n(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){const t=this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e);return this.node.showComma?t+",":t},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[a("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,l){return a("div",{key:l,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?a("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),e._v(" "),a("span",["content"!==e.node.type?a("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):a("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}),e._v(" "),e.showLength&&e.collapsed?a("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=l({name:"VueJsonPretty",components:{TreeNode:o.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:r(this.data,this.path).reduce((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1},{})}},computed:{flatData(){let e=null;return r(this.data,this.path).reduce((t,a,l)=>{const i={...a,id:l},s=this.hiddenPaths[i.path];if(e&&e.path===i.path){const a="objectStart"===e.type,l={...e,...i,content:a?"{...}":"[...]",type:a?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(l)}return s&&!e?(e=i,t):e?t:t.concat(i)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,a=Math.floor(t/this.itemHeight);let l=a<0?0:a+e>this.flatData.length?this.flatData.length-e:a;l<0&&(l=0);const i=l+e;this.translateY=l*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=l&&t<i)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),a=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,a)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,a=e;this.selectedPaths=a,this.$emit("change",a,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[a("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[a("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return a("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.1"})}},t={};function a(l){if(t[l])return t[l].exports;var i=t[l]={exports:{}};return e[l](i,i.exports,a),i.exports}return a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(810)}()}))},"94e3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("JsonViewDialog",{ref:"jsonViewDialog"}),a("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[a("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.item.model,position:e.fbxPosition,rotation:e.fbxRotation,backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),e.item?a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[a("h3",{staticClass:"item-name"},[e._v(e._s(e.item.NAME))]),e.item.model?a("div",{staticClass:"item-has-3d",on:{click:e.openFbxViwer}},[a("img",{staticClass:"icon-full",attrs:{src:e.item.icon,alt:""}})]):a("div",[a("img",{staticClass:"icon-full",attrs:{src:e.item.icon,alt:""}})]),a("p",[e._v(e._s(e.item.DESC))]),a("div",{staticClass:"item-local-link"},[e.item.RSP.length?a("p",[a("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:e.item.DF,quality:e.itemModifier.quality}}}},[e._v(e._s(e.$t("調合")))])],1):e._e(),e.item.model?a("p",[a("el-link",{attrs:{underline:!1},on:{click:e.openFbxViwer}},[e._v("3D")])],1):e._e()]),a("br"),a("p",[e._v("DF: "+e._s(e.item.DF))]),a("p",[e._v(e._s(e.$t("種類"))+": "+e._s(e.$t(e.dataManager.lookup.itemCategory[e.item.CATEG])))]),e.item.EQU_BRD?[a("p",[e._v(e._s(e.$t("性別"))+": "+e._s(e.item.genderTextIcon))])]:e._e(),e.item.WPN_KIND?[a("p",[e._v(e._s(e.$t("武器種類"))+": "+e._s(e.$t(e.dataManager.lookup.weaponKind[e.item.WPN_KIND])))]),a("p",[e._v(e._s(e.$t("攻撃属性"))+": "+e._s(e.$t(e.dataManager.lookup.EBattleElementKindShort[e.item.elementChangeSkill?e.item.elementChangeSkill.effectValue:0])))]),e.item.WPN_KIND!==e.EWeaponKind.eSHIELD?a("p",[e._v(e._s(e.$t("攻撃タイプ"))+": "+e._s(e.$t(e.dataManager.lookup.attackType[+e.ItemMVList.magicDamageWeaponKinds.includes(e.item.WPN_KIND)])))]):e._e(),e.item.JOB.length?[a("p",[e._v(e._s(e.$t("職業"))+": "+e._s(e.item.JOB.map((function(t){return e.$t(e.dataManager.lookup.EJobKind[t])})).join(",")))])]:e._e(),e.item.getAttackSkill()?a("p",[e._v(e._s(e.$t("SP回復率"))+" "+e._s(e.item.getAttackSkill().spAdd)+" "+e._s(e.$t("倍")))]):e._e()]:e._e(),e.item.RSP.length?[a("p",[e._v(e._s(e.$t("レシピ種類"))+": "+e._s(1===e.item.RCP_TYPE?e.$t("レジェンドレシピ"):e.$t("一般レシピ")))]),a("p",[e._v(e._s(e.$t("おすすめ錬金レベル"))+" "+e._s(e.item.ALT?e.item.ALT.LV:"-"))])]:e._e(),e.item.ALT.EXP?a("p",[e._v(e._s(e.$t("調合"))+e._s(e.$t("経験値"))+": "+e._s(e.item.ALT.EXP))]):e._e(),a("p",[a("el-tooltip",{attrs:{content:e.dataManager.wealthById[2].NAME,placement:"right"}},[a("span",{staticClass:"wealth-container"},[a("span",[e._v(e._s(e.$t("売却")))]),a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:e.dataManager.wealthById[2].NAME}}),a("span",[e._v(e._s(e.item.RST.MN))])])])],1),a("br"),a("el-link",{attrs:{underline:!1},on:{click:function(t){return e.$refs.jsonViewDialog.open(e.item)}}},[e._v(e._s(e.$t("Rawデータ")))])],2),a("div",{staticClass:"item-container-right"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[e.hasMainTabItem?a("el-tab-pane",{attrs:{label:e.$t("メーン"),name:"main"}},[e.item.hasSkill||e.item.EQU_BRD?a("div",[a("div",[a("el-form",{attrs:{"label-position":"left","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("品質")}},[a("el-input-number",{attrs:{size:"mini",min:1,max:e.item.EQU_BRD?1/0:100,step:1,"step-strictly":""},model:{value:e.itemModifier.quality,callback:function(t){e.$set(e.itemModifier,"quality",t)},expression:"itemModifier.quality"}})],1),e.item.EQU_BRD?a("el-form-item",{attrs:{label:e.$t("レベル")}},[a("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.itemModifier.level,callback:function(t){e.$set(e.itemModifier,"level",t)},expression:"itemModifier.level"}})],1):e._e(),e.item.EQU_BRD?a("el-form-item",{attrs:{label:e.$t("サブ装備")}},[a("el-switch",{model:{value:e.showSupportState,callback:function(t){e.showSupportState=t},expression:"showSupportState"}})],1):e._e()],1)],1),a("div",[a("div",{staticClass:"item-modify"},[e.item.EQU_BRD?a("div",[a("div",{staticClass:"item-levels"},[e.showSupportState?a("table",{staticClass:"default-table"},[e._l(e.item.getSupportStates(e.itemModifier.level),(function(t){return a("tr",[t.value?[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])]:e._e()],2)})),e._l(e.item.getSupportElements(),(function(t){return a("tr",[t.value?[a("th",[e._v(e._s(e.$t(t.label)))]),a("td",[e._v(e._s(t.value))])]:e._e()],2)}))],2):a("table",{staticClass:"default-table"},[e._l(e.item.getStates(e.itemModifier.quality,e.itemModifier.level),(function(t){return a("tr",[a("th",[a("el-popover",{attrs:{disabled:!(t.value||t.skills&&t.skills.length),placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(e.$t(t.label)))])]),a("table",{staticClass:"default-table"},[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills&&t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1),a("td",[a("el-popover",{attrs:{disabled:!(t.value||t.skills&&t.skills.length),placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(t.total))])]),a("table",{staticClass:"default-table"},[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills&&t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1)])})),e._l(e.item.getElements(e.itemModifier.quality),(function(t){return a("tr",[a("th",[a("el-popover",{attrs:{disabled:!(t.value||t.skills&&t.skills.length),placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(e.$t(t.label)))])]),a("table",{staticClass:"default-table"},[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills&&t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1),a("td",[a("el-popover",{attrs:{disabled:!(t.value||t.skills&&t.skills.length),placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("span",{staticClass:"poppover__a"},[e._v(e._s(t.total))])]),a("table",{staticClass:"default-table"},[t.value?a("tr",[a("th",[e._v(e._s(e.$t("ベース")))]),a("td",[e._v(e._s(t.value))])]):e._e(),t.skills&&t.skills.length?a("tr",[a("th",[e._v(e._s(e.$t("スキル")))]),a("td",e._l(t.skills,(function(t){return a("p",[e._v(e._s(t.name)+" "+e._s(t.effectValue>0?"+":"")+e._s(t.effectValue))])})),0)]):e._e()])],2)],1)])}))],2)])]):e._e(),e.showSupportState?e._e():a("div",e._l(e.item.getSkillWithComboSkills(e.itemModifier.quality),(function(e){return a("div",[a("SkillPopover",{attrs:{skill:e}})],1)})),0)])])]):e._e(),e.item.GROUP_DF&&e.dataManager.charactersByGroupDf[e.item.GROUP_DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("キャラクター專用")))]),e._l(e.dataManager.charactersByGroupDf[e.item.GROUP_DF],(function(e){return a("p",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:e.DF}},target:"_blank"}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:e.icon,alt:e.NAME}})])],1)],1)}))],2):e._e(),e.item.LRCP_CHARA.length?a("div",[a("el-divider",[e._v(e._s(e.$t("レジェンドレシピ")))]),e._l(e.item.LRCP_CHARA.map((function(t){return e.dataManager.characterById[t.DF]})).filter((function(e){return e})),(function(e){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:e.DF}},target:"_blank"}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:e.icon,alt:e.NAME}})])],1)],1)])}))],2):e._e(),e.item.RSP.length?a("div",[a("el-divider",[e._v(e._s(e.$t("調合條件")))]),e.item.ALT.CST?a("div",[a("p",[a("el-tooltip",{attrs:{content:e.dataManager.wealthById[2].NAME,placement:"right"}},[a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:e.dataManager.wealthById[2].NAME}}),a("span",[e._v(e._s(e.item.ALT.CST))])])])],1)]):e._e(),a("div",{staticClass:"item-compose-items"},e._l(e.item.RSP.map((function(t){return[t,e.dataManager.itemById[t.DF]]})),(function(t){var l=t[0],i=t[1];return a("div",{staticClass:"item-compose-item"},[a("el-tooltip",{attrs:{content:i.NAME,placement:"top"}},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:l.DF}}}},[a("img",{staticClass:"icon-small",attrs:{src:i.icon,alt:i.NAME}}),a("span",[e._v("x"+e._s(l.NC))])])],1)],1)})),0)],1):e._e(),e.dataManager.itemsByRecipe[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("材料")))]),a("div",{staticClass:"item-making-container"},e._l(e.dataManager.itemsByRecipe[e.item.DF],(function(e){return a("div",[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF}}}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.DF}})])],1)],1)})),0)],1):e._e()]):e._e(),e.item.SPC.length?a("el-tab-pane",{attrs:{label:e.$t("スキル"),name:"skill"}},[e._l(e.item.allSkills,(function(t){var l=t[0],i=t[1];return[a("SkillTextInfo",{attrs:{skills:i}},[a("template",{slot:"title"},[e._v(e._s(e.$t("品質"))+" "+e._s(l.THR))])],2)]}))],2):e._e(),e.dataManager.questsByGetItem[e.item.DF]||e.dataManager.questsByDeliverItem[e.item.DF]||e.dataManager.questsByRewardItem[e.item.DF]?a("el-tab-pane",{attrs:{label:e.$t("クエスト"),name:"quest"}},[e.dataManager.questsByGetItem[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト調合/採取")))]),e._l(e.dataManager.questsByGetItem[e.item.DF],(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}},target:"_blank"}},[e._v(e._s(t.NAME))])],1)])}))],2):e._e(),e.dataManager.questsByDeliverItem[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト納品")))]),e._l(e.dataManager.questsByDeliverItem[e.item.DF],(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}},target:"_blank"}},[e._v(e._s(t.NAME))])],1)])}))],2):e._e(),e.dataManager.questsByRewardItem[e.item.DF]?a("div",[a("el-divider",[e._v(e._s(e.$t("クエスト報酬")))]),e._l(e.dataManager.questsByRewardItem[e.item.DF],(function(t){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoQuest",query:{df:t.DF}},target:"_blank"}},[e._v(e._s(t.NAME))])],1)])}))],2):e._e()]):e._e(),e.dataManager.api.huntInfosByItemId[e.item.DF]?a("el-tab-pane",{attrs:{label:e.$t("トレジャー"),name:"hunt"}},[a("div",[a("el-divider",[e._v(e._s(e.$t("トレジャー")))]),e._l(e.dataManager.api.huntInfosByItemId[e.item.DF],(function(t,l){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"InfoHunt",query:{huntId:t.HUNTID}},target:"_blank"}},[e._v(e._s(t.NAME))])],1),e._l(t.RWD.TRS.concat(t.RWD.ITM).filter((function(t){return t.DF===e.item.DF})),(function(t,l){return a("p",[a("span",[e._v(e._s(e.$t("品質"))+e._s(t.QTY))]),t.TRT?a("span",[e._v(" "+e._s(e.dataManager.skillById[t.TRT].name.replace(/\s+/gm,"")))]):e._e()])})),e.dataManager.api.huntInfosByItemId[e.item.DF].length!==l+1?a("br"):e._e()],2)}))],2)]):e._e(),e.dataManager.fieldItemById[e.item.DF]?a("el-tab-pane",{attrs:{label:e.$t("フィールド用"),name:"fieldItem"}},e._l([e.dataManager.fieldItemById[e.item.DF]],(function(t){return a("div",[a("table",[t.eRange?a("tr",[a("th",[e._v(e._s(e.$t("目標")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.eRange])))])]):e._e(),a("tr",[a("th",[e._v(e._s(e.$t("効果")))]),a("td",[e._v(e._s(e.$t(e.dataManager.lookup.eFieldItemUse[t.eUse])))])]),e._l([t.eStateList.map((function(t){return e.dataManager.abnormalStateById[t]})).filter((function(e){return e}))].filter((function(e){return e.length})),(function(t){return a("tr",[a("th",[e._v(e._s(e.$t("状態")))]),a("td",e._l(t,(function(t,l){return a("div",[a("p",[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.turn)+" "+e._s(e.$t("ターン")))])],1)])})),0)])}))],2)])})),0):e._e()],1)],1)]):e._e()],1)},i=[],s=a("d4ec"),n=a("bee2"),r=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("caad"),a("2532"),a("9ab4")),h=a("2fe1"),m=a("2ef0"),p=a("e360"),_=a("6b98"),f=a("8faf"),v=a("9eae"),b=a("f015"),g=a("0584"),k=a("2e50"),y=a("e3ed"),C=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var l=arguments.length,i=new Array(l),n=0;n<l;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i)),Object(u["a"])(Object(r["a"])(e),"activeTab",""),Object(u["a"])(Object(r["a"])(e),"fbxDialogVisible",!1),Object(u["a"])(Object(r["a"])(e),"fbxLoading",null),Object(u["a"])(Object(r["a"])(e),"item",null),Object(u["a"])(Object(r["a"])(e),"itemModifier",new v["a"]),Object(u["a"])(Object(r["a"])(e),"showSupportState",!1),e}return Object(n["a"])(a,[{key:"EBattleEffectKind",get:function(){return b["c"]}},{key:"ItemMVList",get:function(){return f["b"]}},{key:"EWeaponKind",get:function(){return b["p"]}},{key:"fbxRotation",get:function(){var e;return f["b"].weaponKindCategory.includes(null===(e=this.item)||void 0===e?void 0:e.CATEG)?{x:0,y:0,z:Math.PI}:this.item.CATEG===b["h"].eARMOR?{x:-Math.PI/2,y:0,z:0}:[b["h"].eHELM,b["h"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:0,z:Math.PI}:{x:0,y:0,z:0}}},{key:"fbxPosition",get:function(){var e;return f["b"].weaponKindCategory.includes(null===(e=this.item)||void 0===e?void 0:e.CATEG)?{x:0,y:0,z:0}:this.item.CATEG===b["h"].eARMOR?{x:0,y:-.5,z:0}:[b["h"].eHELM,b["h"].eACCESSORY].includes(this.item.CATEG)?{x:0,y:1.2,z:-1.2}:{x:0,y:0,z:0}}},{key:"openFbxViwer",value:function(){null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}},{key:"beforeMount",value:function(){this.item=this.dataManager.itemById[this.$route.query.df],this.item||this.$router.push({name:"Items"});var e=this.item.EQU_BRD?1/0:f["b"].itemMaxQuality;this.itemModifier.quality=this.$route.query.quality?Object(m["clamp"])(+this.$route.query.quality,1,e):f["b"].equipmentMaxQuality,this.itemModifier.level=this.$route.query.level?Object(m["clamp"])(+this.$route.query.level,1,1/0):f["b"].equipmentMaxLevel,this.selectTab()}},{key:"hasMainTabItem",get:function(){return this.item.hasSkill||this.item.EQU_BRD||this.item.GROUP_DF&&this.dataManager.charactersByGroupDf[this.item.GROUP_DF]||this.item.LRCP_CHARA.length||this.item.RSP.length||this.dataManager.itemsByRecipe[this.item.DF]}},{key:"selectTab",value:function(){this.hasMainTabItem?this.activeTab="main":this.item.SPC.length?this.activeTab="skill":this.dataManager.questsByGetItem[this.item.DF]||this.dataManager.questsByDeliverItem[this.item.DF]||this.dataManager.questsByRewardItem[this.item.DF]?this.activeTab="quest":this.dataManager.api.huntInfosByItemId[this.item.DF]?this.activeTab="hunt":this.dataManager.fieldItemById[this.item.DF]&&(this.activeTab="fieldItem")}}]),a}(_["a"]);C=Object(d["b"])([Object(h["b"])({components:{"model-fbx":p["ModelFbx"],SkillTextInfo:g["a"],JsonViewDialog:k["a"],SkillPopover:y["a"]}})],C);var $=C,S=$,M=(a("30bd"),a("2877")),T=Object(M["a"])(S,l,i,!1,null,"15184bad",null);t["default"]=T.exports},b661:function(e,t,a){},ce1e:function(e,t,a){"use strict";a("f0fd")},e3ed:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.skill?a("div",[a("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("template",{slot:"reference"},[a("p",[a("el-link",{staticClass:"poppover__a",attrs:{icon:"el-icon-more",underline:!1}},[e._v(e._s(e.skill.name))])],1)]),a("div",[a("div",{staticClass:"popover-message__top-container"},[a("div",[e.skill.detail?a("p",{staticClass:"popover__detail"},[e._v(e._s(e.skill.detail))]):e._e()]),a("div",{staticClass:"popover-message__skill-link"},[a("router-link",{staticClass:"skill-popup-link",attrs:{to:{name:"Skills",query:{id:e.skill.id}},target:"_blank"}},[a("i",{staticClass:"el-icon-right"})])],1)]),a("div",[e.skill.effectValue||e.skill.effectValue2?a("p",[a("b",[e.skill.trigger?a("span",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleEffectTrigger[e.skill.trigger]))+e._s("en"===e.dataManager.locale?" ":""))]):e._e(),a("span",[e._v(e._s(e.$t(e.dataManager.lookup.EBattleEffectTarget[e.skill.effectTarget]||e.dataManager.lookup.EBattleEffectKind[e.skill.effect]||"数値")))])]),e.skill.isEffectValueElementChange?[a("span",[e._v(" "+e._s(e.$t(e.skill.effectValueText)))])]:e.skill.isEffectValueRate?[a("span",[e._v(" "+e._s(e.skill.effectValueText))])]:[a("span",[e._v(" "+e._s(e.skill.effectValue))]),e.skill.effectValue2?a("span",[e._v(", "+e._s(e.skill.effectValue2))]):e._e()]],2):e._e(),e.skill.combSkillList&&e.skill.combSkillList.length?[a("br"),a("p",[a("b",[e._v(e._s(e.$t("含まれるスキル")))])]),e._l(e.skill.combSkillList,(function(t){return[a("p",[e._v(e._s(t.name))]),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(l){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))]):e._e()}))]})),e._l([e.dataManager.skillById[e.skill.id]].filter((function(e){return e})),(function(t){return e.skill.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))]):e._e()}))]:e._e(),e.skill.stateOwn.length||e.skill.state.length?a("br"):e._e(),a("AbnormlStateTags",{attrs:{states:e.skill.stateOwn,own:!0}}),a("AbnormlStateTags",{attrs:{states:e.skill.state}})],2)])],2)],1):e._e()},i=[],s=a("d4ec"),n=a("bee2"),r=a("257e"),o=a("262e"),c=a("2caf"),u=a("ade3"),d=(a("99af"),a("9ab4")),h=a("1b40"),m=a("6b98"),p=a("f015"),_=a("0058"),f=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var l=arguments.length,i=new Array(l),n=0;n<l;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i)),Object(u["a"])(Object(r["a"])(e),"skill",void 0),e}return Object(n["a"])(a,[{key:"EBattleEffectKind",get:function(){return p["c"]}}]),a}(m["a"]);Object(d["b"])([Object(h["c"])({type:Object,default:function(){return{}}})],f.prototype,"skill",void 0),f=Object(d["b"])([Object(h["a"])({components:{AbnormlStateTags:_["a"]}})],f);var v=f,b=v,g=(a("ce1e"),a("2877")),k=Object(g["a"])(b,l,i,!1,null,"2846efae",null);t["a"]=k.exports},ea3d:function(e,t,a){},f0fd:function(e,t,a){},f774:function(e,t,a){"use strict";a("ea3d")}}]);