(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsComposeItem"],{"38a0":function(t,e,i){"use strict";i("a83b")},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),o=i("23cb"),r=i("50c4");t.exports=function(t){var e=a(this),i=r(e.length),s=arguments.length,l=o(s>1?arguments[1]:void 0,i),n=s>2?arguments[2]:void 0,c=void 0===n?i:o(n,i);while(c>l)e[l++]=t;return e}},a83b:function(t,e,i){},c01f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:"",visible:t.itemPickerDialogVisible,fullscreen:""},on:{"update:visible":function(e){t.itemPickerDialogVisible=e}}},[i("div",{staticClass:"item-picker-container"},[i("div",{staticClass:"filters"},[i("div",{staticClass:"filter"},[i("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("種類"),filterable:"",clearable:""},model:{value:t.itemPickerCategory,callback:function(e){t.itemPickerCategory=e},expression:"itemPickerCategory"}},t._l(t.itemCategories,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"filder"},[i("el-input",{attrs:{placeholder:t.$t("名前")+"/DF",clearable:""},model:{value:t.itemPickerKeyword,callback:function(e){t.itemPickerKeyword=e},expression:"itemPickerKeyword"}})],1)]),i("div",{staticClass:"item-picker-items"},t._l(t.filteredItems,(function(e){return i("div",{on:{click:function(i){return t.onPickItem(e)}}},[i("p",[t._v(t._s(e.NAME))]),i("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])})),0)])]),i("el-dialog",{attrs:{title:"",visible:t.exportComposeItemUrlVisible},on:{"update:visible":function(e){t.exportComposeItemUrlVisible=e}}},[i("el-input",{attrs:{type:"textarea",value:t.href,autosize:""}})],1),i("div",{staticClass:"compose-container"},[i("div",{staticClass:"compose-material-container"},[i("div",{staticClass:"compose-material-top"},t._l(t.materials,(function(e,a){return i("div",{staticClass:"compose-material"},[i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("div",[i("el-input-number",{staticClass:"compose-input--size",attrs:{min:1,max:100,placeholder:t.$t("品質"),size:"small"},model:{value:t.materialOptions[a].quality,callback:function(e){t.$set(t.materialOptions[a],"quality",e)},expression:"materialOptions[i].quality"}})],1),i("div",[i("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("品質特性"),size:"small",filterable:""},model:{value:t.materialOptions[a].addonQuality,callback:function(e){t.$set(t.materialOptions[a],"addonQuality",e)},expression:"materialOptions[i].addonQuality"}},t._l(new Array(16).keys(),(function(e){return i("el-option",{key:e,attrs:{label:t.$t("品質特性")+" "+e,value:e}})})),1)],1),i("div",[i("img",{attrs:{src:e.icon,alt:e.NAME}})]),i("template",{slot:"popover"},[i("div",{staticClass:"popover-base item-popover"},[i("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF,quality:t.materialOptions[a].quality}},target:"_blank"}},[t._v(t._s(e.NAME))]),i("p",[t._v(t._s(e.DESC))]),e.RSP.length?i("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:e.DF,quality:t.materialOptions[a].quality}},target:"_blank"}},[t._v(t._s(t.$t("調合")))]):t._e()],1)])],2)],1)})),0),i("div",{staticClass:"compose-item",on:{click:function(e){t.itemPickerDialogVisible=!0}}},[i("div",{staticClass:"compose-requirement"},t._l([t.compose],(function(e){return i("p",[i("el-tooltip",{attrs:{content:t.dataManager.wealthById[2].NAME,placement:"right"}},[e.ALT&&e.ALT.CST?i("span",{staticClass:"wealth-container"},[i("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.dataManager.wealthById[2].NAME}}),i("span",[t._v(t._s(e.ALT.CST))])]):t._e()])],1)})),0),i("v-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("div",{staticClass:"compose-item-image"},[i("img",{attrs:{src:t.compose.icon,alt:t.compose.NAME}})]),i("template",{slot:"popover"},[i("div",{staticClass:"popover-base item-popover"},[i("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.compose.DF,quality:t.composeQuality}},target:"_blank"}},[t._v(t._s(t.compose.NAME))]),i("p",[t._v(t._s(t.compose.DESC))])],1)])],2)],1)]),i("div",{staticClass:"compose-result"},[i("h3",[t._v(t._s(t.$t("品質"))+" "+t._s(t.composeQuality))]),i("h4",[t._v(t._s(t.compose.NAME))]),i("div",{staticClass:"compose-result-image-container"},[i("img",{staticClass:"compose-result-image",attrs:{src:t.compose.icon,alt:t.compose.NAME},on:{click:function(e){t.itemPickerDialogVisible=!0}}})]),i("div",{staticClass:"compose-result-export"},[i("el-button",{attrs:{type:"primary",circle:""},on:{click:function(e){t.exportComposeItemUrlVisible=!0}}},[t._v("URL")])],1),t._l(t.compose.getSkills(t.composeQuality),(function(e,a){return i("div",{staticClass:"compose-result-skill"},[i("table",[i("tr",[i("th",[t._v(t._s(t.$t("名前")))]),i("td",[i("router-link",{attrs:{to:{name:"Skills",query:{id:e.id}},target:"_blank"}},[t._v(t._s(e.name))])],1)]),i("tr",[i("th",[t._v(t._s(t.$t("詳細")))]),i("td",[t._v(t._s(e.detail))])]),i("tr",[i("th",[t._v(t._s(t.$t("数値")))]),i("td",[t._v(t._s(e.effectValue)+", "+t._s(e.effectValue2))])]),1===e.type?[i("tr",[i("th",[t._v(t._s(t.$t("攻撃タイプ")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleAttribute[e.attackSkill.attribute])))])]),i("tr",[i("th",[t._v(t._s(t.$t("属性")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.attackSkill.element])))])]),i("tr",[i("th",[t._v(t._s(t.$t("對象")))]),i("td",[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[e.attackSkill.targetTeam]))+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.attackSkill.targetScope])))])]),e.attackSkill.stateOwn.length?i("tr",[i("th",[t._v(t._s(t.$t("追加状態 (自)")))]),i("td",t._l(e.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],o=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(o.name)+" "+t._s(o.turn)+t._s(t.$t("ターン")))])})),0)]):t._e(),e.attackSkill.state.length?i("tr",[i("th",[t._v(t._s(t.$t("追加状態")))]),i("td",t._l(e.attackSkill.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],o=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(o.name)+" "+t._s(o.turn)+t._s(t.$t("ターン")))])})),0)]):t._e()]:t._e()],2),t.compose.getSkills(t.composeQuality).length!==a+1?i("p",[t._v(t._s(">"))]):t._e()])}))],2)])],1)},o=[],r=(i("cb29"),i("4de4"),i("0481"),i("a630"),i("caad"),i("d81d"),i("13d5"),i("45fc"),i("4069"),i("d3b7"),i("ac1f"),i("25f0"),i("2532"),i("3ca3"),i("5319"),i("ddb0"),i("5530")),s=i("3835"),l=i("b85c"),n=i("bee2"),c=i("d4ec"),m=i("262e"),u=i("2caf"),p=i("9ab4"),d=i("2fe1"),v=i("0aea"),f=i("5456"),y=i("2ef0"),h=i("a837"),_=i("5935"),k=function(t){Object(m["a"])(i,t);var e=Object(u["a"])(i);function i(){return Object(c["a"])(this,i),e.apply(this,arguments)}return i}(v["a"]),g=function(t){Object(m["a"])(i,t);var e=Object(u["a"])(i);function i(){var t;return Object(c["a"])(this,i),t=e.apply(this,arguments),t.materials=[],t.itemPickerDialogVisible=!1,t.exportComposeItemUrlVisible=!1,t}return Object(n["a"])(i,[{key:"beforeMount",value:function(){try{if(this.$route.query.df){var t=f["a"].itemById[this.$route.query.df];if(t&&f["a"].itemsHasRecipe.some((function(e){return e.DF===t.DF}))){if(this.onPickItem(t,+this.$route.query.quality),this.$route.query.materialOptions){var e,i=JSON.parse(atob(this.$route.query.materialOptions)),a=Object(l["a"])(this.materialOptions.entries());try{for(a.s();!(e=a.n()).done;){var o=Object(s["a"])(e.value,2),r=o[0],n=o[1],c=i[r]||n;n.quality=c.quality||n.quality,n.addonQuality=c.addonQuality||n.addonQuality}}catch(u){a.e(u)}finally{a.f()}}return}}}catch(p){this.$message.error(p.toString()),console.error(p)}try{if(this.compose){var m=this.materialOptions;return this.onPickItem(this.compose),void(this.materialOptions.length===m.length&&(this.materialOptions=m))}}catch(p){this.$message.error(p.toString()),console.error(p)}this.onPickItem(f["a"].itemsHasRecipe[0])}},{key:"onPickItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=Object(y["clamp"])(e||10,1,100),o=Object(y["clamp"])(i||0,0,15);this.compose=t;var r=this.compose.RSP.map((function(t){return new Array(t.NC).fill(f["a"].itemById[t.DF])})).flat();this.materialOptions=Array.from({length:r.length},(function(){return Object.assign(new h["a"],{quality:a,addonQuality:o})})),this.materials=r,this.itemPickerDialogVisible=!1}},{key:"onClickSetAllQuality",value:function(){var t,e=Object(l["a"])(this.materialOptions);try{for(e.s();!(t=e.n()).done;){var i=t.value;i.quality=this.allQuality}}catch(a){e.e(a)}finally{e.f()}}},{key:"href",get:function(){return window.location.href.replace(window.location.hash,"")+this.$router.resolve({name:"ToolsComposeItem",query:{df:this.compose.DF.toString(),materialOptions:this.materialOptionsExport}}).href}},{key:"materialOptions",get:function(){return this.$store.state.composeItemFilter.materialOptions},set:function(t){this.$store.commit("composeItemFilter/updateMaterialOptions",t)}},{key:"materialOptionsExport",get:function(){return btoa(JSON.stringify(this.materialOptions))}},{key:"compose",get:function(){var t=f["a"].itemById[this.itemDf];return t||(this.itemDf=f["a"].itemsHasRecipe[0].DF,f["a"].itemById[this.itemDf])},set:function(t){this.itemDf=(null===t||void 0===t?void 0:t.DF)||f["a"].itemsHasRecipe[0].DF}},{key:"itemCategories",get:function(){var t=this;return f["a"].itemsCategoriesHasRecipe.map((function(e){return{label:t.$t(f["a"].lookup.itemCategory[e]),value:+e}}))}},{key:"filteredItems",get:function(){var t=this;return f["a"].itemsHasRecipe.filter((function(e){return(!t.itemPickerKeyword||e.DF===+t.itemPickerKeyword||e.NAME.toLocaleLowerCase().includes(t.itemPickerKeyword.toLocaleLowerCase()))&&(!t.itemPickerCategory||e.CATEG===t.itemPickerCategory)}))}},{key:"composeQuality",get:function(){if(!this.materialOptions.length)return 0;var t=this.materialOptions.reduce((function(t,e){return t+e.quality}),0),e=this.materialOptions.reduce((function(t,e){return t+e.addonQuality}),0);return Object(y["clamp"])(Math.floor(t/this.materialOptions.length+e),1,100)}}]),i}(k);g=Object(p["a"])([Object(d["a"])({components:{},computed:Object(r["a"])(Object(r["a"])({},Object(_["b"])("composeItemFilter",["itemDf","allQuality"])),Object(_["b"])("composeItemFilter",{itemPickerCategory:"itemPicker.category",itemPickerKeyword:"itemPicker.keyword"}))})],g);var b=g,O=b,C=(i("38a0"),i("2877")),$=Object(C["a"])(O,a,o,!1,null,"05e7e4fb",null);e["default"]=$.exports},cb29:function(t,e,i){var a=i("23e7"),o=i("81d5"),r=i("44d2");a({target:"Array",proto:!0},{fill:o}),r("fill")}}]);