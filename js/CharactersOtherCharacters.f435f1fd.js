(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CharactersOtherCharacters"],{"18fc":function(a,t,e){"use strict";e("c1d2")},c1d2:function(a,t,e){},d7aa:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"other-characters"},a._l(a.otherCharacters,(function(t,r){return e("el-card",{key:r,staticClass:"other-character"},[a.dataManager.advCharacterById[t.df]?e("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[e("div",{attrs:{slot:"reference"},slot:"reference"},[e("h3",[a._v(a._s(t.df))]),e("img",{attrs:{src:"img/icon_chara/Texture2D/"+t.icon,alt:"",loading:"lazy"}})]),a._l(a.dataManager.advCharacterById[t.df],(function(t){return e("p",[a._v(a._s(t))])}))],2):[e("h3",[a._v(a._s(t.df))]),e("img",{attrs:{src:"img/icon_chara/Texture2D/"+t.icon,alt:"",loading:"lazy"}})]],2)})),1)])},c=[],s=e("9ab4"),n=e("2fe1"),i=e("6b98");let o=class extends i["a"]{get otherCharacters(){const a=this.dataManager.chara.m_vList.map(a=>a.images.concat(a.otherImages)).flat();return Object.values(this.dataManager.files.img.icon_chara.Texture2D).filter(t=>t.startsWith("icon_chara_all_")&&!a.includes("img/icon_chara/Texture2D/"+t)).map(a=>({icon:a,df:a.match(/(\d+)/)[1]||"-"}))}};o=Object(s["b"])([Object(n["b"])({components:{}})],o);var l=o,d=l,h=(e("18fc"),e("2877")),f=Object(h["a"])(d,r,c,!1,null,"195f733d",null);t["default"]=f.exports}}]);