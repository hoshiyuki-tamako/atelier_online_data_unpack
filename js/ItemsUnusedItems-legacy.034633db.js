(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ItemsUnusedItems"],{"0834":function(e,t,n){"use strict";n("4006")},4006:function(e,t,n){},"46d7":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[n("model-fbx",{directives:[{name:"loading",rawName:"v-loading",value:e.fbxLoading,expression:"fbxLoading"}],staticClass:"item-fbx-container",attrs:{src:e.fbxModel,rotation:{x:0,y:0,z:Math.PI},backgroundColor:"rgb(169,169,169)"},on:{"on-load":function(t){e.fbxLoading=!1}}})],1),n("h3",[e._v(e._s(e.$t("模型")))]),n("div",{staticClass:"models-container"},e._l(e.models,(function(t){return n("div",{staticClass:"model-container"},[n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(n){return e.openFbxDialog(e.dataManager.baseServerId+"/models/items/"+t+"/"+t+".fbx")}}},[e._v(e._s(t))])],1)})),0),n("el-divider"),n("div",{staticClass:"unused-items-container"},e._l(e.icons,(function(t){return n("div",{staticClass:"unused-item-container"},[n("p",[e._v(e._s(t.id))]),n("img",{attrs:{src:t.src,alt:t.id}})])})),0)],1)},a=[],s=n("d4ec"),o=n("bee2"),r=n("257e"),c=n("262e"),l=n("2caf"),u=n("ade3"),d=(n("99af"),n("b64b"),n("4e82"),n("0481"),n("d81d"),n("4de4"),n("caad"),n("2532"),n("07ac"),n("ac1f"),n("1276"),n("9ab4")),b=n("2fe1"),f=n("6b98"),m=n("e360"),g=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(s["a"])(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(u["a"])(Object(r["a"])(e),"fbxModel",""),Object(u["a"])(Object(r["a"])(e),"fbxDialogVisible",!1),Object(u["a"])(Object(r["a"])(e),"fbxLoading",null),e}return Object(o["a"])(n,[{key:"unusedWeaponCategory",get:function(){return["dual","hammer","knuckle"]}},{key:"models",get:function(){var e,t,n=Object.keys(null!==(e=null===(t=this.dataManager.files[this.dataManager.baseServerId])||void 0===t?void 0:t.models.items)&&void 0!==e?e:{});return this.unusedWeaponCategory.map((function(e){return n.filter((function(t){return t.includes(e)}))})).flat().sort()}},{key:"itemIcons",get:function(){return this.dataManager.item.m_vList.map((function(e){var t=e.DF;return"icon_item_s_".concat(t,".png")}))}},{key:"icons",get:function(){var e=this.itemIcons;return Object.values(this.dataManager.files.img.icon_item_s.Texture2D).filter((function(t){return!e.includes(t)})).map((function(e){return{id:+e.split("_")[3].split(".")[0],src:"img/icon_item_s/Texture2D/".concat(e)}})).sort((function(e,t){return t.id-e.id}))}},{key:"openFbxDialog",value:function(e){this.fbxModel=e,null===this.fbxLoading&&(this.fbxLoading=!0),this.fbxDialogVisible=!0}}]),n}(f["a"]);g=Object(d["b"])([Object(b["b"])({components:{"model-fbx":m["ModelFbx"]}})],g);var v=g,x=v,p=(n("0834"),n("2877")),h=Object(p["a"])(x,i,a,!1,null,"0730de81",null);t["default"]=h.exports}}]);