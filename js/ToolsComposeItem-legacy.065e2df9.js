(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsComposeItem"],{"08c0":function(t,e,a){"use strict";a("abdf")},"1b40":function(t,e,a){"use strict";a.d(e,"a",(function(){return i["b"]})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return m}));var i=a("2fe1"),r=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var i=Array(t),r=0;for(e=0;e<a;e++)for(var n=arguments[e],o=0,l=n.length;o<l;o++,r++)i[r]=n[o];return i},n=/\B([A-Z])/g,o=function(t){return t.replace(n,"-$1").toLowerCase()};function l(t){return function(e,a,i){var n=o(a),l=i.value;i.value=function(){for(var e=this,a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var o=function(i){var o=t||n;void 0===i?0===a.length?e.$emit(o):1===a.length?e.$emit(o,a[0]):e.$emit.apply(e,r([o],a)):(a.unshift(i),e.$emit.apply(e,r([o],a)))},c=l.apply(this,a);return s(c)?c.then(o):o(c),c}}}function s(t){return t instanceof Promise||t&&"function"===typeof t.then}var c="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(t,e,a){if(c&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var i=Reflect.getMetadata("design:type",e,a);i!==Object&&(t.type=i)}}function m(t){return void 0===t&&(t={}),function(e,a){u(t,e,a),Object(i["a"])((function(e,a){(e.props||(e.props={}))[a]=t}))(e,a)}}},"359d":function(t,e,a){},"45b5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.skills&&t.skills.length?a("div",[t.showTitle?a("el-divider",[t._t("title",(function(){return[t._v(t._s(t.$t("スキル")))]}))],2):t._e(),t._l(t.skills,(function(e,i){return a("div",[a("table",{staticClass:"skill-table"},[a("tr",[a("th",[t._v(t._s(t.$t("名前")))]),a("td",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}},target:"_blank"}},[t._v(t._s(e.name))])],1)]),a("tr",[a("th",[t._v(t._s(t.$t("詳細")))]),a("td",[t._v(t._s(e.detail))])]),a("tr",[a("th",[t._v(t._s(t.$t("数値")))]),a("td",[t._v(t._s(e.effectValue)+", "+t._s(e.effectValue2))])]),1===e.type?[a("tr",[a("th",[t._v(t._s(t.$t("攻撃タイプ")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttribute[e.attackSkill.attribute])))])]),a("tr",[a("th",[t._v(t._s(t.$t("属性")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.attackSkill.element])))])]),a("tr",[a("th",[t._v(t._s(t.$t("對象")))]),a("td",[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam]))+" "+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope])))])])]:t._e(),e.attackSkill.stateOwn.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態 (自)")))]),a("td",[t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var i=e[0],r=e[1];return[a("el-tooltip",{attrs:{content:r.effectlist.map((function(e){return t.dataManager.abnormalStateEffectById[e]})).filter((function(t){return t})).map((function(t){return t.name+" "+t.value})).join(" / "),placement:"top"}},[a("p",[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:r.id}},target:"_blank"}},[t._v(t._s(t.$t("確率",[(100*i.rate).toFixed()]))+" "+t._s(r.name)+" "+t._s(r.turn)+" "+t._s(t.$t("ターン")))])],1)])]}))],2)]):t._e(),e.attackSkill.state.length?a("tr",[a("th",[t._v(t._s(t.$t("追加状態")))]),a("td",[t._l(e.attackSkill.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var i=e[0],r=e[1];return[a("el-tooltip",{attrs:{content:r.effectlist.map((function(e){return t.dataManager.abnormalStateEffectById[e]})).filter((function(t){return t})).map((function(t){return t.name+" "+t.value})).join(" / "),placement:"top"}},[a("p",[a("router-link",{attrs:{to:{name:"SkillsAbnormalEffect",query:{id:r.id}},target:"_blank"}},[t._v(t._s(t.$t("確率",[(100*i.rate).toFixed()]))+" "+t._s(r.name)+" "+t._s(r.turn)+" "+t._s(t.$t("ターン")))])],1)])]}))],2)]):t._e(),t._l([t.dataManager.zoneById[e.effectValue]].filter((function(t){return t})),(function(i){return e.effect===t.EBattleEffectKind.eZONE_CHANGE?a("tr",[a("th",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:i.id}},target:"_blank"}},[t._v(t._s(i.name))])],1),a("td",t._l(i.effectlist,(function(e){return a("p",[t._v(t._s(t.dataManager.zoneEffectById[e].name)+" ("+t._s(t.dataManager.zoneEffectById[e].value)+")")])})),0)]):t._e()})),e.effect===t.EBattleEffectKind.eSTART_SKILL&&t.dataManager.skillById[e.effectValue]?a("tr",[a("th",[t._v(t._s(t.$t("スキル")))]),a("td",t._l([t.dataManager.skillById[e.effectValue]],(function(e){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}},target:"_blank"}},[t._v(t._s(e.name))])],1)})),0)]):t._e(),e.combSkillList.length||e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("tr",[a("th",[t._v(t._s(t.$t("含まれるスキル")))]),a("td",[t._l(e.combSkillList,(function(e){return[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}},target:"_blank"}},[t._v(t._s(e.name))])],1),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(e){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))]})),t._l([t.dataManager.skillById[e.id]].filter((function(t){return t})),(function(e){return e.effect===t.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:e.effectValue}},target:"_blank"}},[t._v(t._s(e.name)+" / "+t._s(e.effectValue2)+t._s(t.$t("ターン")))])],1):t._e()}))],2)]):t._e()],2),t.skills.length!==i+1?a("p",[t._v(t._s(">"))]):t._e()])}))],2):t._e()},r=[],n=a("d4ec"),o=a("bee2"),l=a("257e"),s=a("262e"),c=a("2caf"),u=a("ade3"),m=(a("99af"),a("9ab4")),f=a("1b40"),d=a("6b98"),p=a("f015"),v=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;Object(n["a"])(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r)),Object(u["a"])(Object(l["a"])(t),"skills",void 0),Object(u["a"])(Object(l["a"])(t),"showTitle",void 0),t}return Object(o["a"])(a,[{key:"EBattleEffectKind",get:function(){return p["c"]}}]),a}(d["a"]);Object(m["b"])([Object(f["c"])({type:Array,default:function(){return[]}})],v.prototype,"skills",void 0),Object(m["b"])([Object(f["c"])({type:Boolean,default:!0})],v.prototype,"showTitle",void 0),v=Object(m["b"])([Object(f["a"])({components:{}})],v);var y=v,_=y,b=(a("528d"),a("2877")),h=Object(b["a"])(_,i,r,!1,null,"5a33668a",null);e["a"]=h.exports},"528d":function(t,e,a){"use strict";a("359d")},abdf:function(t,e,a){},c01f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"",visible:t.itemPickerDialogVisible,fullscreen:""},on:{"update:visible":function(e){t.itemPickerDialogVisible=e}}},[a("div",{staticClass:"item-picker-container"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("種類"),filterable:"",clearable:""},model:{value:t.itemPickerCategory,callback:function(e){t.itemPickerCategory=e},expression:"itemPickerCategory"}},t._l(t.itemCategories,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"filder"},[a("el-input",{attrs:{placeholder:t.$t("名前")+"/DF",clearable:""},model:{value:t.itemPickerKeyword,callback:function(e){t.itemPickerKeyword=e},expression:"itemPickerKeyword"}})],1)]),a("div",{staticClass:"item-picker-items"},t._l(t.filteredItems,(function(e){return a("div",{on:{click:function(a){return t.onPickItem(e)}}},[a("p",[t._v(t._s(e.NAME))]),a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])})),0)]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.itemPickerDialogVisible=!1}}},[t._v(t._s(t.$t("閉じる")))])],1)]),a("el-dialog",{attrs:{title:"",visible:t.exportComposeItemUrlVisible},on:{"update:visible":function(e){t.exportComposeItemUrlVisible=e}}},[a("el-input",{attrs:{type:"textarea",value:t.href,autosize:""}})],1),a("div",{staticClass:"compose-container"},[a("div",{staticClass:"compose-material-container"},[a("div",{staticClass:"compose-material-top"},t._l(t.materials,(function(e,i){return a("div",{staticClass:"compose-material"},[a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("div",[a("el-input-number",{staticClass:"compose-input--size",attrs:{min:1,max:100,placeholder:t.$t("品質"),size:"small"},model:{value:t.materialOptions[i].quality,callback:function(e){t.$set(t.materialOptions[i],"quality",e)},expression:"materialOptions[i].quality"}})],1),a("div",[a("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("品質特性"),size:"small",filterable:""},model:{value:t.materialOptions[i].addonQuality,callback:function(e){t.$set(t.materialOptions[i],"addonQuality",e)},expression:"materialOptions[i].addonQuality"}},t._l(new Array(16).keys(),(function(e){return a("el-option",{key:e,attrs:{label:t.$t("品質特性")+" "+e,value:e}})})),1)],1),a("div",[a("img",{attrs:{src:e.icon,alt:e.NAME}})]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base item-popover"},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF,quality:t.materialOptions[i].quality}},target:"_blank"}},[t._v(t._s(e.NAME))]),a("p",[t._v(t._s(e.DESC))]),e.RSP.length?a("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:e.DF,quality:t.materialOptions[i].quality}},target:"_blank"}},[t._v(t._s(t.$t("調合")))]):t._e()],1)])],2)],1)})),0),a("div",{staticClass:"compose-item",on:{click:function(e){t.itemPickerDialogVisible=!0}}},[a("div",{staticClass:"compose-requirement"},t._l([t.compose],(function(e){return a("p",[a("el-tooltip",{attrs:{content:t.dataManager.wealthById[2].NAME,placement:"right"}},[e.ALT&&e.ALT.CST?a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.dataManager.wealthById[2].NAME}}),a("span",[t._v(t._s(e.ALT.CST))])]):t._e()])],1)})),0),a("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[a("div",{staticClass:"compose-item-image"},[a("img",{attrs:{src:t.compose.icon,alt:t.compose.NAME}})]),a("template",{slot:"popover"},[a("div",{staticClass:"popover-base item-popover"},[a("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.compose.DF,quality:t.composeQuality}},target:"_blank"}},[t._v(t._s(t.compose.NAME))]),a("p",[t._v(t._s(t.compose.DESC))])],1)])],2)],1)]),a("div",{staticClass:"compose-result"},[a("h3",[t._v(t._s(t.$t("品質"))+" "+t._s(t.composeQuality))]),a("h4",[t._v(t._s(t.compose.NAME))]),a("div",{staticClass:"compose-result-image-container"},[a("img",{staticClass:"compose-result-image",attrs:{src:t.compose.icon,alt:t.compose.NAME},on:{click:function(e){t.itemPickerDialogVisible=!0}}})]),a("div",{staticClass:"compose-result-export"},[a("el-button",{attrs:{type:"primary",circle:""},on:{click:function(e){t.exportComposeItemUrlVisible=!0}}},[t._v("URL")])],1),a("SkillTextInfo",{attrs:{skills:t.compose.getSkills(t.composeQuality),showTitle:!1}})],1)])],1)},r=[],n=a("5530"),o=a("3835"),l=a("b85c"),s=a("bee2"),c=a("d4ec"),u=a("257e"),m=a("262e"),f=a("2caf"),d=a("ade3"),p=(a("99af"),a("ac1f"),a("5319"),a("d3b7"),a("25f0"),a("d81d"),a("4de4"),a("caad"),a("2532"),a("ddb0"),a("0481"),a("cb29"),a("a630"),a("3ca3"),a("9ab4")),v=a("2fe1"),y=a("2ef0"),_=a("5935"),b=a("6b98"),h=a("a837"),g=a("45b5"),k=function(t){Object(m["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;Object(c["a"])(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r)),Object(d["a"])(Object(u["a"])(t),"itemDf",void 0),Object(d["a"])(Object(u["a"])(t),"allQuality",void 0),Object(d["a"])(Object(u["a"])(t),"itemPickerCategory",void 0),Object(d["a"])(Object(u["a"])(t),"itemPickerKeyword",void 0),t}return a}(b["a"]),O=function(t){Object(m["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;Object(c["a"])(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r)),Object(d["a"])(Object(u["a"])(t),"materials",[]),Object(d["a"])(Object(u["a"])(t),"itemPickerDialogVisible",!1),Object(d["a"])(Object(u["a"])(t),"exportComposeItemUrlVisible",!1),t}return Object(s["a"])(a,[{key:"href",get:function(){return window.location.href.replace(window.location.hash,"")+this.$router.resolve({name:"ToolsComposeItem",query:{df:this.compose.DF.toString(),materialOptions:this.materialOptionsExport}}).href}},{key:"materialOptions",get:function(){return this.$store.state.composeItemFilter.materialOptions},set:function(t){this.$store.commit("composeItemFilter/updateMaterialOptions",t)}},{key:"materialOptionsExport",get:function(){return btoa(JSON.stringify(this.materialOptions))}},{key:"compose",get:function(){var t=this.dataManager.itemById[this.itemDf];return t||(this.itemDf=this.dataManager.itemsHasRecipe[0].DF,this.dataManager.itemById[this.itemDf])},set:function(t){this.itemDf=(null===t||void 0===t?void 0:t.DF)||this.dataManager.itemsHasRecipe[0].DF}},{key:"itemCategories",get:function(){var t=this;return this.dataManager.itemsCategoriesHasRecipe.map((function(e){return{label:t.$t(t.dataManager.lookup.itemCategory[e]),value:+e}}))}},{key:"filteredItems",get:function(){var t=this;return this.dataManager.itemsHasRecipe.filter((function(e){return(!t.itemPickerKeyword||e.DF===+t.itemPickerKeyword||e.NAME.toLocaleLowerCase().includes(t.itemPickerKeyword.toLocaleLowerCase()))&&(!t.itemPickerCategory||e.CATEG===t.itemPickerCategory)}))}},{key:"composeQuality",get:function(){if(!this.materialOptions.length)return 0;var t=this.materialOptions.reduce((function(t,e){return t+e.quality}),0),e=this.materialOptions.reduce((function(t,e){return t+e.addonQuality}),0);return Object(y["clamp"])(Math.floor(t/this.materialOptions.length+e),1,100)}},{key:"beforeMount",value:function(){try{if(this.$route.query.df){var t=this.dataManager.itemById[this.$route.query.df];if(t&&this.dataManager.itemsHasRecipe.some((function(e){return e.DF===t.DF}))){if(this.onPickItem(t,+this.$route.query.quality),this.$route.query.materialOptions){var e,a=JSON.parse(atob(this.$route.query.materialOptions)),i=Object(l["a"])(this.materialOptions.entries());try{for(i.s();!(e=i.n()).done;){var r=Object(o["a"])(e.value,2),n=r[0],s=r[1],c=a[n]||s;s.quality=c.quality||s.quality,s.addonQuality=c.addonQuality||s.addonQuality}}catch(m){i.e(m)}finally{i.f()}}return}}}catch(f){this.$message.error(f.toString()),console.error(f)}try{if(this.compose){var u=this.materialOptions;return this.onPickItem(this.compose),void(this.materialOptions.length===u.length&&(this.materialOptions=u))}}catch(f){this.$message.error(f.toString()),console.error(f)}this.onPickItem(this.dataManager.itemsHasRecipe[0])}},{key:"onPickItem",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(y["clamp"])(a||10,1,100),n=Object(y["clamp"])(i||0,0,15);this.compose=t;var o=this.compose.RSP.map((function(t){return new Array(t.NC).fill(e.dataManager.itemById[t.DF])})).flat();this.materialOptions=Array.from({length:o.length},(function(){return Object.assign(new h["a"],{quality:r,addonQuality:n})})),this.materials=o,this.itemPickerDialogVisible=!1}},{key:"onClickSetAllQuality",value:function(){var t,e=Object(l["a"])(this.materialOptions);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.quality=this.allQuality}}catch(i){e.e(i)}finally{e.f()}}}]),a}(k);O=Object(p["b"])([Object(v["b"])({components:{SkillTextInfo:g["a"]},computed:Object(n["a"])(Object(n["a"])({},Object(_["b"])("composeItemFilter",["itemDf","allQuality"])),Object(_["b"])("composeItemFilter",{itemPickerCategory:"itemPicker.category",itemPickerKeyword:"itemPicker.keyword"}))})],O);var j=O,C=j,$=(a("08c0"),a("2877")),E=Object($["a"])(C,i,r,!1,null,"150ef208",null);e["default"]=E.exports},cb29:function(t,e,a){var i=a("23e7"),r=a("81d5"),n=a("44d2");i({target:"Array",proto:!0},{fill:r}),n("fill")}}]);