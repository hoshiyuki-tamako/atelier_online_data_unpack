(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsComposeItem"],{"1efa":function(t,e,i){},"4cb9":function(t,e,i){"use strict";i("1efa")},c01f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:"",visible:t.itemPickerDialogVisible,fullscreen:""},on:{"update:visible":function(e){t.itemPickerDialogVisible=e}}},[i("div",{staticClass:"item-picker-container"},[i("div",{staticClass:"filters"},[i("div",{staticClass:"filter"},[i("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("種類"),filterable:"",clearable:""},model:{value:t.itemPickerCategory,callback:function(e){t.itemPickerCategory=e},expression:"itemPickerCategory"}},t._l(t.itemCategories,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"filder"},[i("el-input",{attrs:{placeholder:t.$t("名前")+"/DF",clearable:""},model:{value:t.itemPickerKeyword,callback:function(e){t.itemPickerKeyword=e},expression:"itemPickerKeyword"}})],1)]),i("div",{staticClass:"item-picker-items"},t._l(t.filteredItems,(function(e){return i("div",{on:{click:function(i){return t.onPickItem(e)}}},[i("p",[t._v(t._s(e.NAME))]),i("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:""}})])})),0)]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.itemPickerDialogVisible=!1}}},[t._v(t._s(t.$t("閉じる")))])],1)]),i("el-dialog",{attrs:{title:"",visible:t.exportComposeItemUrlVisible},on:{"update:visible":function(e){t.exportComposeItemUrlVisible=e}}},[i("el-input",{attrs:{type:"textarea",value:t.href,autosize:""}})],1),i("div",{staticClass:"compose-container"},[i("div",{staticClass:"compose-material-container"},[i("div",{staticClass:"compose-material-top"},t._l(t.materials,(function(e,a){return i("div",{staticClass:"compose-material"},[i("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("div",{attrs:{slot:"reference"},slot:"reference"},[i("div",[i("el-input-number",{staticClass:"compose-input--size",attrs:{min:1,max:100,placeholder:t.$t("品質"),size:"small"},model:{value:t.materialOptions[a].quality,callback:function(e){t.$set(t.materialOptions[a],"quality",e)},expression:"materialOptions[i].quality"}})],1),i("div",[i("el-select",{staticClass:"compose-input--size",attrs:{placeholder:t.$t("品質特性"),size:"small",filterable:""},model:{value:t.materialOptions[a].addonQuality,callback:function(e){t.$set(t.materialOptions[a],"addonQuality",e)},expression:"materialOptions[i].addonQuality"}},t._l(new Array(16).keys(),(function(e){return i("el-option",{key:e,attrs:{label:t.$t("品質特性")+" "+e,value:e}})})),1)],1),i("div",[i("img",{attrs:{src:e.icon,alt:e.NAME}})])]),i("div",{staticClass:"item-popover"},[i("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.DF,quality:t.materialOptions[a].quality}},target:"_blank"}},[t._v(t._s(e.NAME))]),i("p",[t._v(t._s(e.DESC))]),e.RSP.length?i("br"):t._e(),e.RSP.length?i("router-link",{attrs:{to:{name:"ToolsComposeItem",query:{df:e.DF,quality:t.materialOptions[a].quality}},target:"_blank"}},[t._v(t._s(t.$t("調合")))]):t._e()],1)])],1)})),0),i("div",{staticClass:"compose-item",on:{click:function(e){t.itemPickerDialogVisible=!0}}},[i("div",{staticClass:"compose-requirement"},[t._l([t.compose],(function(e){return i("p",[i("el-tooltip",{attrs:{content:t.dataManager.wealthById[2].NAME,placement:"right"}},[e.ALT&&e.ALT.CST?i("span",{staticClass:"wealth-container"},[i("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00002.png",alt:t.dataManager.wealthById[2].NAME}}),i("span",[t._v(t._s(e.ALT.CST))])]):t._e()])],1)})),i("el-popover",{attrs:{placement:"right-end",trigger:"hover"}},[i("div",{staticClass:"compose-item-image",attrs:{slot:"reference"},slot:"reference"},[i("img",{attrs:{src:t.compose.icon,alt:t.compose.NAME}})]),i("div",{staticClass:"item-popover"},[i("router-link",{attrs:{to:{name:"ItemsItem",query:{df:t.compose.DF,quality:t.composeQuality}},target:"_blank"}},[t._v(t._s(t.compose.NAME))]),i("p",[t._v(t._s(t.compose.DESC))])],1)])],2)])]),i("div",{staticClass:"compose-result"},[i("h3",[t._v(t._s(t.$t("品質"))+" "+t._s(t.composeQuality))]),i("h4",[t._v(t._s(t.compose.NAME))]),i("div",{staticClass:"compose-result-image-container"},[i("img",{staticClass:"compose-result-image",attrs:{src:t.compose.icon,alt:t.compose.NAME},on:{click:function(e){t.itemPickerDialogVisible=!0}}})]),i("div",{staticClass:"compose-result-export"},[i("el-button",{attrs:{type:"primary",circle:""},on:{click:function(e){t.exportComposeItemUrlVisible=!0}}},[t._v("URL")])],1),i("div",{staticClass:"compose-result-skills"},[i("SkillTextInfo",{attrs:{skills:t.compose.getSkills(t.composeQuality),showTitle:!1}})],1)])])],1)},r=[],o=i("5530"),s=i("3835"),l=i("b85c"),n=i("bee2"),c=i("d4ec"),m=i("257e"),u=i("262e"),p=i("2caf"),d=i("ade3"),f=(i("99af"),i("ac1f"),i("5319"),i("d3b7"),i("25f0"),i("d81d"),i("4de4"),i("caad"),i("2532"),i("ddb0"),i("0481"),i("cb29"),i("a630"),i("3ca3"),i("9ab4")),y=i("2fe1"),h=i("2ef0"),v=i("5935"),b=i("6b98"),g=i("a837"),k=i("0584"),O=function(t){Object(u["a"])(i,t);var e=Object(p["a"])(i);function i(){var t;Object(c["a"])(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r)),Object(d["a"])(Object(m["a"])(t),"itemDf",void 0),Object(d["a"])(Object(m["a"])(t),"allQuality",void 0),Object(d["a"])(Object(m["a"])(t),"itemPickerCategory",void 0),Object(d["a"])(Object(m["a"])(t),"itemPickerKeyword",void 0),t}return i}(b["a"]),C=function(t){Object(u["a"])(i,t);var e=Object(p["a"])(i);function i(){var t;Object(c["a"])(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r)),Object(d["a"])(Object(m["a"])(t),"materials",[]),Object(d["a"])(Object(m["a"])(t),"itemPickerDialogVisible",!1),Object(d["a"])(Object(m["a"])(t),"exportComposeItemUrlVisible",!1),t}return Object(n["a"])(i,[{key:"href",get:function(){return window.location.href.replace(window.location.hash,"")+this.$router.resolve({name:"ToolsComposeItem",query:{df:this.compose.DF.toString(),materialOptions:this.materialOptionsExport}}).href}},{key:"materialOptions",get:function(){return this.$store.state.composeItemFilter.materialOptions},set:function(t){this.$store.commit("composeItemFilter/updateMaterialOptions",t)}},{key:"materialOptionsExport",get:function(){return btoa(JSON.stringify(this.materialOptions))}},{key:"compose",get:function(){var t=this.dataManager.itemById[this.itemDf];return t||(this.itemDf=this.dataManager.itemsHasRecipe[0].DF,this.dataManager.itemById[this.itemDf])},set:function(t){this.itemDf=(null===t||void 0===t?void 0:t.DF)||this.dataManager.itemsHasRecipe[0].DF}},{key:"itemCategories",get:function(){var t=this;return this.dataManager.itemsCategoriesHasRecipe.map((function(e){return{label:t.$t(t.dataManager.lookup.itemCategory[e]),value:+e}}))}},{key:"filteredItems",get:function(){var t=this;return this.dataManager.itemsHasRecipe.filter((function(e){return(!t.itemPickerKeyword||e.DF===+t.itemPickerKeyword||e.NAME.toLocaleLowerCase().includes(t.itemPickerKeyword.toLocaleLowerCase()))&&(!t.itemPickerCategory||e.CATEG===t.itemPickerCategory)}))}},{key:"composeQuality",get:function(){if(!this.materialOptions.length)return 0;var t=this.materialOptions.reduce((function(t,e){return t+e.quality}),0),e=this.materialOptions.reduce((function(t,e){return t+e.addonQuality}),0);return Object(h["clamp"])(Math.floor(t/this.materialOptions.length+e),1,100)}},{key:"beforeMount",value:function(){try{if(this.$route.query.df){var t=this.dataManager.itemById[this.$route.query.df];if(t&&this.dataManager.itemsHasRecipe.some((function(e){return e.DF===t.DF}))){if(this.onPickItem(t,+this.$route.query.quality),this.$route.query.materialOptions){var e,i=JSON.parse(atob(this.$route.query.materialOptions)),a=Object(l["a"])(this.materialOptions.entries());try{for(a.s();!(e=a.n()).done;){var r=Object(s["a"])(e.value,2),o=r[0],n=r[1],c=i[o]||n;n.quality=c.quality||n.quality,n.addonQuality=c.addonQuality||n.addonQuality}}catch(u){a.e(u)}finally{a.f()}}return}}}catch(p){this.$message.error(p.toString()),console.error(p)}try{if(this.compose){var m=this.materialOptions;return this.onPickItem(this.compose),void(this.materialOptions.length===m.length&&(this.materialOptions=m))}}catch(p){this.$message.error(p.toString()),console.error(p)}this.onPickItem(this.dataManager.itemsHasRecipe[0])}},{key:"onPickItem",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(h["clamp"])(i||10,1,100),o=Object(h["clamp"])(a||0,0,15);this.compose=t;var s=this.compose.RSP.map((function(t){return new Array(t.NC).fill(e.dataManager.itemById[t.DF])})).flat();this.materialOptions=Array.from({length:s.length},(function(){return Object.assign(new g["a"],{quality:r,addonQuality:o})})),this.materials=s,this.itemPickerDialogVisible=!1}},{key:"onClickSetAllQuality",value:function(){var t,e=Object(l["a"])(this.materialOptions);try{for(e.s();!(t=e.n()).done;){var i=t.value;i.quality=this.allQuality}}catch(a){e.e(a)}finally{e.f()}}}]),i}(O);C=Object(f["b"])([Object(y["b"])({components:{SkillTextInfo:k["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(v["b"])("composeItemFilter",["itemDf","allQuality"])),Object(v["b"])("composeItemFilter",{itemPickerCategory:"itemPicker.category",itemPickerKeyword:"itemPicker.keyword"}))})],C);var _=C,j=_,P=(i("4cb9"),i("2877")),w=Object(P["a"])(j,a,r,!1,null,"5accbe16",null);e["default"]=w.exports},cb29:function(t,e,i){var a=i("23e7"),r=i("81d5"),o=i("44d2");a({target:"Array",proto:!0},{fill:r}),o("fill")}}]);