(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InfoDialog"],{"0dd0":function(e,t,r){"use strict";r("44c1")},"3d57":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"quest-dialog",title:"","lock-scroll":!1,"destroy-on-close":!0,top:"0",visible:e.visible,width:"80%",fullscreen:!(!e.md.mobile()&&!e.md.tablet())},on:{"update:visible":function(t){e.visible=t}}},[e.quest?r("el-divider",[r("h3",[e._v(e._s(e.quest.NAME))])]):e._e(),r("el-table",{attrs:{data:e.questDialogs,"show-header":!1}},[r("el-table-column",{attrs:{width:"210px"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.characterDf?r("img",{staticClass:"dialog-character-image",attrs:{src:"img/icon_chara/Texture2D/icon_chara_all_"+t.row.characterDf.toString().padStart(4,"0")+"_"+t.row.facialExpression.toString().padStart(2,"0")+".png",alt:e.dataManager.characterById[t.row.characterDf]?e.dataManager.characterById[t.row.characterDf].NAME:t.row.characterDf}}):e._e()]}}])}),r("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.order===e.EOrderType.eCHARA_TALK?r("div",[r("h4",{domProps:{innerHTML:e._s(e.richTextService.richTextToHtml(t.row.name))}}),r("p",{domProps:{innerHTML:e._s(e.richTextService.richTextToHtml(t.row.dialog))}}),t.row.voice&&e.dataManager.files.audios.voices[t.row.voice+".wav"]?r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:"audios/voices/"+t.row.voice+".wav",type:"audio/mpeg"}})]):e._e()]):t.row.order===e.EOrderType.eSELECTION?r("div",[r("h4",[e._v(e._s(e.$t("選択")))]),e._l(t.row.options,(function(t){return r("p",{domProps:{innerHTML:e._s(e.richTextService.richTextToHtml(t))}})}))],2):t.row.order===e.EOrderType.eBG?r("div",[r("h4",[e._v(e._s(e.$t("背景")))]),r("p",{domProps:{innerHTML:e._s(e.richTextService.richTextToHtml(t.row.text1||""))}}),r("p",{domProps:{innerHTML:e._s(e.richTextService.richTextToHtml(t.row.text2||""))}}),r("img",{staticClass:"dialog-image",attrs:{src:"img/bg_texture/BG_Texture_"+t.row.id.toString().padStart(4,"0")+".png",alt:t.row.id}})]):t.row.order===e.EOrderType.eMUSIC?r("div",[r("h4",[e._v(e._s(e.$t("音楽")))]),r("p",[e._v(e._s(e.eMusicID[t.row.id]||"-"))]),e._l([e.dataManager.soundListBgmById[t.row.id]].filter((function(e){return e})),(function(i){return t.row.id>0?[e.dataManager.files.audios.musics[i.fileName]?r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:i.file,type:"audio/mpeg"}})]):e._e()]:e._e()}))],2):t.row.order===e.EOrderType.ePICTURE?r("div",[r("img",{staticClass:"dialog-image",attrs:{src:"img/still_texture/Still_Texture_"+t.row.id.toString().padStart(4,"0")+".png",alt:t.row.id}})]):t.row.order===e.EOrderType.eWINDOW_ITEM?r("div",[r("img",{staticClass:"dialog-image",attrs:{src:"img/item_texture/item_texture_"+t.row.id.toString().padStart(4,"0")+".png",alt:t.row.id}})]):e._e()]}}])})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v(e._s(e.$t("閉じる")))])],1)],1)},a=[],n=(r("4de4"),r("d81d"),r("0d03"),r("d3b7"),r("25f0"),r("96cf"),r("1da1")),o=r("d4ec"),s=r("bee2"),c=r("262e"),l=r("2caf"),d=r("9ab4"),u=r("2fe1"),v=r("6b98"),g=r("c6c6"),p=r.n(g),f=r("f015"),h=r("d40a"),_=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.md=new p.a(window.navigator.userAgent),e.visible=!1,e.loading=!1,e.quest=null,e.adv="",e.questDialogs=[],e.richTextService=new h["a"],e}return Object(s["a"])(r,[{key:"openDialog",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.quest=t,this.questDialogs=[],this.visible=!0,this.loading=!0,e.next=7,this.dataManager.advManager.getDialog(t.NPC_FD.map((function(e){return e.ADV})).filter((function(e){return e})));case 7:this.questDialogs=e.sent,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),this.visible=!1,this.$message.error(e.t0.toString()),console.error(e.t0);case 15:return e.prev=15,this.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[0,10,15,18]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"openDialogWithAdv",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.quest=null,this.questDialogs=[],this.visible=!0,this.loading=!0,e.next=7,this.dataManager.advManager.getDialog(t);case 7:this.questDialogs=e.sent,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),this.visible=!1,this.$message.error(e.t0.toString()),console.error(e.t0);case 15:return e.prev=15,this.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[0,10,15,18]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"EOrderType",get:function(){return f["j"]}},{key:"eMusicID",get:function(){return f["o"]}}]),r}(v["a"]);_=Object(d["b"])([Object(u["b"])({components:{}})],_);var m=_,w=m,b=(r("4d66"),r("2877")),T=Object(b["a"])(w,i,a,!1,null,"533cb9a3",null);t["a"]=T.exports},"44c1":function(e,t,r){},"4d66":function(e,t,r){"use strict";r("5083")},5083:function(e,t,r){},fcc6:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("AdventureRawDialog",{ref:"advDialog"}),r("div",{staticClass:"content"},e._l(Object.entries(e.dataManager.unusedAdvs),(function(t){var i=t[0],a=t[1];return r("div",[r("el-divider",[e._v(e._s(i))]),r("div",{staticClass:"advs"},e._l(a,(function(t){return r("div",{staticClass:"adv"},[r("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(r){return e.$refs.advDialog.openDialogWithAdv([t])}}},[e._v(e._s(t))])],1)})),0)],1)})),0)],1)},a=[],n=r("d4ec"),o=r("262e"),s=r("2caf"),c=r("9ab4"),l=r("2fe1"),d=r("6b98"),u=r("3d57"),v=function(e){Object(o["a"])(r,e);var t=Object(s["a"])(r);function r(){return Object(n["a"])(this,r),t.apply(this,arguments)}return r}(d["a"]);v=Object(c["b"])([Object(l["b"])({components:{AdventureRawDialog:u["a"]}})],v);var g=v,p=g,f=(r("0dd0"),r("2877")),h=Object(f["a"])(p,i,a,!1,null,"029965c1",null);t["default"]=h.exports}}]);