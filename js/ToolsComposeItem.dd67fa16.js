(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsComposeItem"],{"0058":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.states&&t.states.length?a("div",[t.showTitle?a("p",[a("b",[t._v(t._s(t.$t(t.own?"追加状態(自)":"追加状態")))])]):t._e(),t._l(t.abnormlStates,(function(e){var i=e[0],s=e[1];return t.dataManager.abnormalStateById[i.id]?a("p",[a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:s.id}},target:"_blank"}},[t._v(t._s(t.$t("確率",[(100*i.rate).toFixed()])))])],1),a("el-tag",{attrs:{size:"small"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:s.id}},target:"_blank"}},[t._v(t._s(s.name))])],1),t._l([s.effectlist.length>1?s.effectlist[s.effectlist.length-1]:s.effectlist[0]],(function(e){return s.effectlist.length?[t.dataManager.abnormalStateEffectById[e]?a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:s.id}},target:"_blank"}},[t._v(t._s(t.$t("数値"))+" "+t._s(t.dataManager.abnormalStateEffectById[e].value))])],1):t._e()]:t._e()})),a("el-tag",{attrs:{size:"small",effect:"plain"}},[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:s.id}},target:"_blank"}},[t._v(t._s(s.turn)+" "+t._s(t.$t("ターン")))])],1)],2):t._e()}))],2):t._e()},s=[],r=a("ade3"),l=a("9ab4"),o=a("1b40"),n=a("6b98");let c=class extends n["a"]{constructor(...t){super(...t),Object(r["a"])(this,"states",void 0),Object(r["a"])(this,"own",void 0),Object(r["a"])(this,"showTitle",void 0)}get abnormlStates(){return this.states.map(t=>[t,this.dataManager.abnormalStateById[t.id]]).filter(([,t])=>t)}};Object(l["b"])([Object(o["c"])({type:Array,default:()=>[]})],c.prototype,"states",void 0),Object(l["b"])([Object(o["c"])({type:Boolean,default:!1})],c.prototype,"own",void 0),Object(l["b"])([Object(o["c"])({type:Boolean,default:!0})],c.prototype,"showTitle",void 0),c=Object(l["b"])([Object(o["a"])({components:{}})],c);var u=c,m=u,f=(a("a1b6"),a("2877")),d=Object(f["a"])(m,i,s,!1,null,"a12617c6",null);e["a"]=d.exports},"0584":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.skills&&t.skills.length?a("div",[t.showTitle?a("el-divider",[t._t("title",(function(){return[t._v(t._s(t.$t("スキル")))]}))],2):t._e(),a("div",{staticClass:"skill-card"},[a("table",[t._l(t.skills,(function(e,i){return[a("tr",[a("th",[t._v(t._s(t.$t("名前")))]),a("td",[a("b",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}},target:"_blank"}},[t._v(t._s(e.name))])],1)])]),e.detail?a("tr",[a("th",[t._v(t._s(t.$t("詳細")))]),a("td",[t._v(t._s(e.detail))])]):t._e(),e.effectValue||e.effectValue2?a("tr",[a("th",[t._v(t._s(t.$t("数値")))]),a("td",[e.effectValue?a("span",[t._v(t._s(e.effectValue))]):t._e(),e.effectValue2?a("span",[t._v(" / "+t._s(e.effectValue2))]):t._e()])]):t._e(),e.attribute?a("tr",[a("th",[t._v(t._s(t.$t("攻撃タイプ")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttributeShort[e.attackSkill.attribute])))])]):t._e(),e.attribute?a("tr",[a("th",[t._v(t._s(t.$t("属性")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.attackSkill.element])))])]):t._e(),e.attribute?a("tr",[a("th",[t._v(t._s(t.$t("對象")))]),a("td",["en"===t.dataManager.locale?a("span",[t._v(" "+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope]))+" "+t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam])))]):a("span",[t._v(" "+t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam]))+" "+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope])))])])]):t._e(),e.stateOwn.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態(自)")))]),a("td",[a("AbnormlStateTags",{attrs:{states:e.stateOwn,own:!0,showTitle:!1}})],1)]):t._e(),e.state.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態")))]),a("td",[a("AbnormlStateTags",{attrs:{states:e.state,showTitle:!1}})],1)]):t._e(),t._l([t.dataManager.zoneById[e.effectValue]].filter((function(t){return t})),(function(i){return e.effect===t.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:i.id}},target:"_blank"}},[t._v(t._s(t.$t("ゾーン")))])],1),a("td",t._l(i.effectlist,(function(e){return a("p",[t._v(t._s(t.dataManager.zoneEffectById[e].name)+" ("+t._s(t.dataManager.zoneEffectById[e].value)+")")])})),0)]):t._e()})),e.effect===t.EBattleEffectKind.eSTART_SKILL&&t.dataManager.skillById[e.effectValue]?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l([t.dataManager.skillById[e.effectValue]],(function(e){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}},target:"_blank"}},[t._v(t._s(e.name))])],1)})),0)]):t._e(),e.combSkillList&&e.combSkillList.length||e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[t._v(t._s(t.$t("含まれるスキル")))]),a("td",[t._l(e.combSkillList,(function(i){return e.combSkillList&&e.combSkillList.length?[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:i.id}},target:"_blank"}},[t._v(t._s(i.name))]),a("span")],1),t._l([t.dataManager.skillById[i.id]].filter((function(t){return t})),(function(e){return i.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))]:t._e()})),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(i){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:i.effectValue}},target:"_blank"}},[t._v(t._s(i.name)+" / "+t._s(i.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))],2)]):t._e(),t.skills.length!==i+1?a("tr",[t._m(0,!0),t._m(1,!0)]):t._e()]}))],2)])],1):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("br")])}],r=a("ade3"),l=a("9ab4"),o=a("1b40"),n=a("6b98"),c=a("f015"),u=a("0058");let m=class extends n["a"]{constructor(...t){super(...t),Object(r["a"])(this,"skills",void 0),Object(r["a"])(this,"showTitle",void 0)}get EBattleEffectKind(){return c["c"]}};Object(l["b"])([Object(o["c"])({type:Array,default:()=>[]})],m.prototype,"skills",void 0),Object(l["b"])([Object(o["c"])({type:Boolean,default:!0})],m.prototype,"showTitle",void 0),m=Object(l["b"])([Object(o["a"])({components:{AbnormlStateTags:u["a"]}})],m);var f=m,d=f,p=(a("11b2"),a("2877")),_=Object(p["a"])(d,i,s,!1,null,"a8834904",null);e["a"]=_.exports},"11b2":function(t,e,a){"use strict";a("123f")},"123f":function(t,e,a){},"1b40":function(t,e,a){"use strict";a.d(e,"a",(function(){return i["b"]})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return m}));var i=a("2fe1"),s=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var i=Array(t),s=0;for(e=0;e<a;e++)for(var r=arguments[e],l=0,o=r.length;l<o;l++,s++)i[s]=r[l];return i},r=/\B([A-Z])/g,l=function(t){return t.replace(r,"-$1").toLowerCase()};function o(t){return function(e,a,i){var r=l(a),o=i.value;i.value=function(){for(var e=this,a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var l=function(i){var l=t||r;void 0===i?0===a.length?e.$emit(l):1===a.length?e.$emit(l,a[0]):e.$emit.apply(e,s([l],a)):(a.unshift(i),e.$emit.apply(e,s([l],a)))},c=o.apply(this,a);return n(c)?c.then(l):l(c),c}}}function n(t){return t instanceof Promise||t&&"function"===typeof t.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(t,e,a){if(c&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var i=Reflect.getMetadata("design:type",e,a);i!==Object&&(t.type=i)}}function m(t){return void 0===t&&(t={}),function(e,a){u(t,e,a),Object(i["a"])((function(e,a){(e.props||(e.props={}))[a]=t}))(e,a)}}},"1efa":function(t,e,a){},"4cb9":function(t,e,a){"use strict";a("1efa")},5783:function(t,e,a){},a1b6:function(t,e,a){"use strict";a("5783")},c01f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"",visible:t.itemPickerDialogVisible,fullscreen:""},on:{"update:visible":function(e){t.itemPickerDialogVisible=e}}},[a("div",{staticClass:"item-picker-container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("種類"),filterable:"",clearable:""},model:{value:t.itemPickerCategory,callback:function(e){t.itemPickerCategory=e},expression:"itemPickerCategory"}},t._l(t.itemCategories,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"filder"},[a("el-input",{attrs:{placeholder:t.$t("名前")+"/DF",clearable:""},model:{value:t.itemPickerKeyword,callback:function(e){t.itemPickerKeyword=e},expression:"itemPickerKeyword"}})],1)]),a("div",{staticClass:"item-picker-items"},t._l(t.filteredItems,(function(e){return a("div",{on:{click:function(a){return t.onPickItem(e)}}},[a("p",[t._v(t._s(e.NAME))]),a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:""}})])})),0)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.itemPickerDialogVisible=!1}}},[t._v(t._s(t.$t("閉じる")))])],1)]),a("el-dialog",{attrs:{title:"",visible:t.exportComposeItemUrlVisible},on:{"update:visible":function(e){t.exportComposeItemUrlVisible=e}}},[a("el-input",{attrs:{type:"textarea",value:t.href,autosize:""}})],1),a("div",{staticClass:"compose-container"},[a("div",{staticClass:"compose-material-container"},[a("div",{staticClass:"compose-material-top"},t._l(t.materials,(function(e,i){return a("div",{staticClass:"compose-material"},[a("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("div",[a("el-input-number",{staticClass:"compose-input--size",attrs:{min:1,max:100,placeholder:t.$t("品質"),size:"small"},model:{value:t.materialOptions[i].quality,callback:function(e){t.$set(t.materialOptions[i],"quality",e)},expression:"materialOptions[i].quality"}})],1),a("div",[a("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("品質特性"),size:"small",filterable:""},model:{value:t.materialOptions[i].addonQuality,callback:function(e){t.$set(t.materialOptions[i],"addonQuality",e)},expression:"materialOptions[i].addonQuality"}},t._l(new Array(16).keys(),(function(e){return a("el-option",{key:e,attrs:{label:t.$t("品質特性")+" "+e,value:e}})})),1)],1),a("div",[a("img",{attrs:{src:e.icon,alt:e.NAME}})])]),a("div",{staticClass:"item-popover"},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF,quality:t.materialOptions[i].quality}},target:"_blank"}},[t._v(t._s(e.NAME))]),a("p",[t._v(t._s(e.DESC))]),e.RSP.length?a("br"):t._e(),e.RSP.length?a("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:e.DF,quality:t.materialOptions[i].quality}},target:"_blank"}},[t._v(t._s(t.$t("調合")))]):t._e()],1)])],1)})),0),a("div",{staticClass:"compose-item",on:{click:function(e){t.itemPickerDialogVisible=!0}}},[a("div",{staticClass:"compose-requirement"},[t._l([t.compose],(function(e){return a("p",[a("el-tooltip",{attrs:{content:t.dataManager.wealthById[2].NAME,placement:"right"}},[e.ALT&&e.ALT.CST?a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.dataManager.wealthById[2].NAME}}),a("span",[t._v(t._s(e.ALT.CST))])]):t._e()])],1)})),a("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("div",{staticClass:"compose-item-image",attrs:{slot:"reference"},slot:"reference"},[a("img",{attrs:{src:t.compose.icon,alt:t.compose.NAME}})]),a("div",{staticClass:"item-popover"},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.compose.DF,quality:t.composeQuality}},target:"_blank"}},[t._v(t._s(t.compose.NAME))]),a("p",[t._v(t._s(t.compose.DESC))])],1)])],2)])]),a("div",{staticClass:"compose-result"},[a("h3",[t._v(t._s(t.$t("品質"))+" "+t._s(t.composeQuality))]),a("h4",[t._v(t._s(t.compose.NAME))]),a("div",{staticClass:"compose-result-image-container"},[a("img",{staticClass:"compose-result-image",attrs:{src:t.compose.icon,alt:t.compose.NAME},on:{click:function(e){t.itemPickerDialogVisible=!0}}})]),a("div",{staticClass:"compose-result-export"},[a("el-button",{attrs:{type:"primary",circle:""},on:{click:function(e){t.exportComposeItemUrlVisible=!0}}},[t._v("URL")])],1),a("div",{staticClass:"compose-result-skills"},[a("SkillTextInfo",{attrs:{skills:t.compose.getSkills(t.composeQuality),showTitle:!1}})],1)])])],1)},s=[],r=a("ade3"),l=(a("5319"),a("13d5"),a("9ab4")),o=a("2fe1"),n=a("2ef0"),c=a("5935"),u=a("6b98"),m=a("a837"),f=a("0584");class d extends u["a"]{constructor(...t){super(...t),Object(r["a"])(this,"itemDf",void 0),Object(r["a"])(this,"allQuality",void 0),Object(r["a"])(this,"itemPickerCategory",void 0),Object(r["a"])(this,"itemPickerKeyword",void 0)}}let p=class extends d{constructor(...t){super(...t),Object(r["a"])(this,"materials",[]),Object(r["a"])(this,"itemPickerDialogVisible",!1),Object(r["a"])(this,"exportComposeItemUrlVisible",!1)}get href(){return window.location.href.replace(window.location.hash,"")+this.$router.resolve({name:"ToolsComposeItem",query:{df:this.compose.DF.toString(),materialOptions:this.materialOptionsExport}}).href}get materialOptions(){return this.$store.state.composeItemFilter.materialOptions}set materialOptions(t){this.$store.commit("composeItemFilter/updateMaterialOptions",t)}get materialOptionsExport(){return btoa(JSON.stringify(this.materialOptions))}get compose(){const t=this.dataManager.itemById[this.itemDf];return t||(this.itemDf=this.dataManager.itemsHasRecipe[0].DF,this.dataManager.itemById[this.itemDf])}set compose(t){this.itemDf=(null===t||void 0===t?void 0:t.DF)||this.dataManager.itemsHasRecipe[0].DF}get itemCategories(){return this.dataManager.itemsCategoriesHasRecipe.map(t=>({label:this.$t(this.dataManager.lookup.itemCategory[t]),value:+t}))}get filteredItems(){return this.dataManager.itemsHasRecipe.filter(t=>(!this.itemPickerKeyword||t.DF===+this.itemPickerKeyword||t.NAME.toLocaleLowerCase().includes(this.itemPickerKeyword.toLocaleLowerCase()))&&(!this.itemPickerCategory||t.CATEG===this.itemPickerCategory))}get composeQuality(){if(!this.materialOptions.length)return 0;const t=this.materialOptions.reduce((t,e)=>t+e.quality,0),e=this.materialOptions.reduce((t,e)=>t+e.addonQuality,0);return Object(n["clamp"])(Math.floor(t/this.materialOptions.length+e),1,100)}beforeMount(){try{if(this.$route.query.df){const t=this.dataManager.itemById[this.$route.query.df];if(t&&this.dataManager.itemsHasRecipe.some(e=>e.DF===t.DF)){if(this.onPickItem(t,+this.$route.query.quality),this.$route.query.materialOptions){const t=JSON.parse(atob(this.$route.query.materialOptions));for(const[e,a]of this.materialOptions.entries()){const i=t[e]||a;a.quality=i.quality||a.quality,a.addonQuality=i.addonQuality||a.addonQuality}}return}}}catch(t){this.$message.error(t.toString()),console.error(t)}try{if(this.compose){const t=this.materialOptions;return this.onPickItem(this.compose),void(this.materialOptions.length===t.length&&(this.materialOptions=t))}}catch(t){this.$message.error(t.toString()),console.error(t)}this.onPickItem(this.dataManager.itemsHasRecipe[0])}onPickItem(t,e=10,a=0){const i=Object(n["clamp"])(e||10,1,100),s=Object(n["clamp"])(a||0,0,15);this.compose=t;const r=this.compose.RSP.map(t=>new Array(t.NC).fill(this.dataManager.itemById[t.DF])).flat();this.materialOptions=Array.from({length:r.length},()=>Object.assign(new m["a"],{quality:i,addonQuality:s})),this.materials=r,this.itemPickerDialogVisible=!1}onClickSetAllQuality(){for(const t of this.materialOptions)t.quality=this.allQuality}};p=Object(l["b"])([Object(o["b"])({components:{SkillTextInfo:f["a"]},computed:{...Object(c["b"])("composeItemFilter",["itemDf","allQuality"]),...Object(c["b"])("composeItemFilter",{itemPickerCategory:"itemPicker.category",itemPickerKeyword:"itemPicker.keyword"})}})],p);var _=p,h=_,b=(a("4cb9"),a("2877")),g=Object(b["a"])(h,i,s,!1,null,"5accbe16",null);e["default"]=g.exports}}]);