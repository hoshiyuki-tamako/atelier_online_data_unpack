(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ItemsUnusedItems"],{"095e":function(e,t,i){"use strict";var s=i("aa18"),n=i.n(s);n.a},"46d7":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h3",[e._v(e._s(e.$t("模型")))]),i("el-dialog",{attrs:{title:"",visible:e.fbxDialogVisible,width:"90%"},on:{"update:visible":function(t){e.fbxDialogVisible=t}}},[i("model-fbx",{staticClass:"item-fbx-container",attrs:{src:e.fbxModel,rotation:{x:0,y:0,z:Math.PI},backgroundColor:"rgb(169,169,169)"}})],1),i("div",{staticClass:"models-container"},e._l(e.models,(function(t){return i("div",{staticClass:"model-container"},[i("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(i){return e.openFbxDialog("models/items/"+t+"/"+t+".fbx")}}},[e._v(e._s(t))])],1)})),0),i("el-divider"),i("div",{staticClass:"unused-items-container"},e._l(e.icons,(function(t){return i("div",{staticClass:"unused-item-container"},[i("p",[e._v(e._s(t.id))]),i("img",{attrs:{src:t.src,alt:t.id}})])})),0)],1)},n=[],a=(i("4069"),i("ddb0"),i("9ab4")),o=i("2fe1"),l=i("0aea"),r=i("5456"),c=i("e360");let d=class extends l["a"]{constructor(){super(...arguments),this.fbxModel="",this.fbxDialogVisible=!1}get unusedWeaponCategory(){return["dual","hammer","knuckle"]}get models(){const e=Object.keys(r["a"].files.models.items);return this.unusedWeaponCategory.map(t=>e.filter(e=>e.includes(t))).flat().sort()}get itemIcons(){return r["a"].item.m_vList.map(({DF:e})=>`icon_item_s_${e}.png`)}get icons(){const e=this.itemIcons;return Object.values(r["a"].files.img.icon_item_s.Texture2D).filter(t=>!e.includes(t)).map(e=>({id:+e.split("_")[3].split(".")[0],src:"img/icon_item_s/Texture2D/"+e})).sort((e,t)=>t.id-e.id)}openFbxDialog(e){this.fbxModel=e,this.fbxDialogVisible=!0}};d=Object(a["__decorate"])([Object(o["a"])({components:{"model-fbx":c["ModelFbx"]}})],d);var u=d,m=u,b=(i("095e"),i("2877")),f=Object(b["a"])(m,s,n,!1,null,"77a184b9",null);t["default"]=f.exports},aa18:function(e,t,i){}}]);