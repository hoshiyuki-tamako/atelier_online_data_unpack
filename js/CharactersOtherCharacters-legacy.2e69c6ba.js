(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CharactersOtherCharacters"],{"2e7e":function(t,e,a){},"4d63":function(t,e,a){var n=a("83ab"),r=a("da84"),c=a("94ca"),i=a("7156"),o=a("9bf2").f,s=a("241c").f,u=a("44e7"),f=a("ad6d"),d=a("9f7f"),h=a("6eeb"),l=a("d039"),p=a("69f3").set,g=a("2626"),b=a("b622"),v=b("match"),_=r.RegExp,x=_.prototype,m=/a/g,O=/a/g,w=new _(m)!==m,C=d.UNSUPPORTED_Y,j=n&&c("RegExp",!w||C||l((function(){return O[v]=!1,_(m)!=m||_(O)==O||"/a/i"!=_(m,"i")})));if(j){var y=function(t,e){var a,n=this instanceof y,r=u(t),c=void 0===e;if(!n&&r&&t.constructor===y&&c)return t;w?r&&!c&&(t=t.source):t instanceof y&&(c&&(e=f.call(t)),t=t.source),C&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var o=i(w?new _(t,e):_(t,e),n?this:x,y);return C&&a&&p(o,{sticky:a}),o},E=function(t){t in y||o(y,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},D=s(_),R=0;while(D.length>R)E(D[R++]);x.constructor=y,y.prototype=x,h(r,"RegExp",y)}g("RegExp")},d45a:function(t,e,a){"use strict";a("2e7e")},d7aa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"other-characters"},t._l(t.otherCharacters,(function(e){return a("div",{staticClass:"other-character"},[a("p",[t._v(t._s(e.df))]),a("img",{attrs:{src:"img/icon_chara/Texture2D/"+e.icon,alt:e.df}})])})),0)])},r=[],c=(a("4de4"),a("d81d"),a("45fc"),a("0d03"),a("d3b7"),a("07ac"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("4d90"),a("2ca0"),a("d4ec")),i=a("bee2"),o=a("262e"),s=a("2caf"),u=a("9ab4"),f=a("2fe1"),d=a("0aea"),h=function(t){Object(o["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"existingCharacterIconDfs",get:function(){return this.dataManager.chara.m_vList.map((function(t){return t.DF.toString().padStart(4,"0")}))}},{key:"otherCharacters",get:function(){var t=this.existingCharacterIconDfs;return Object.values(this.dataManager.files.img.icon_chara.Texture2D).filter((function(e){return e.startsWith("icon_chara_all_")&&!t.some((function(t){return new RegExp("^icon_chara_all_".concat(t)).exec(e)}))})).map((function(t){return{icon:t,df:t.match(/(\d+)/)[1]||"-"}}))}}]),a}(d["a"]);h=Object(u["a"])([Object(f["b"])({components:{}})],h);var l=h,p=l,g=(a("d45a"),a("2877")),b=Object(g["a"])(p,n,r,!1,null,"6beeaf70",null);e["default"]=b.exports}}]);