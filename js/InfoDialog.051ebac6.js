(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InfoDialog"],{"0cb3":function(t,e,r){},"0dd0":function(t,e,r){"use strict";r("44c1")},"3d57":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"quest-dialog",title:"","lock-scroll":!1,"destroy-on-close":!0,top:"0",visible:t.visible,width:"80%",fullscreen:!(!t.md.mobile()&&!t.md.tablet())},on:{"update:visible":function(e){t.visible=e}}},[t.quest?r("el-divider",[r("h3",[t._v(t._s(t.quest.NAME))])]):t._e(),r("el-table",{attrs:{data:t.questDialogs,"show-header":!1}},[r("el-table-column",{attrs:{width:"210px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.characterDf?r("img",{staticClass:"dialog-character-image",attrs:{src:t.getCharacterIcon(e.row.characterDf,e.row.facialExpression),alt:t.dataManager.characterById[e.row.characterDf]?t.dataManager.characterById[e.row.characterDf].NAME:e.row.characterDf}}):t._e()]}}])}),r("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.order===t.EOrderType.eCHARA_TALK?r("div",[r("h4",{domProps:{innerHTML:t._s(t.richTextService.richTextToHtml(e.row.name))}}),r("p",{domProps:{innerHTML:t._s(t.richTextService.richTextToHtml(e.row.dialog))}}),e.row.voice&&t.dataManager.files.audios.voices[e.row.voice+".m4a"]?r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:"audios/voices/"+e.row.voice+".m4a",type:"audio/mp4"}})]):t._e()]):e.row.order===t.EOrderType.eSELECTION?r("div",[r("h4",[t._v(t._s(t.$t("選択")))]),t._l(e.row.options,(function(e){return r("p",{domProps:{innerHTML:t._s(t.richTextService.richTextToHtml(e))}})}))],2):e.row.order===t.EOrderType.eBG?r("div",[r("h4",[t._v(t._s(t.$t("背景")))]),r("p",{domProps:{innerHTML:t._s(t.richTextService.richTextToHtml(e.row.text1||""))}}),r("p",{domProps:{innerHTML:t._s(t.richTextService.richTextToHtml(e.row.text2||""))}}),r("img",{staticClass:"dialog-image",attrs:{src:"img/bg_texture/BG_Texture_"+e.row.id.toString().padStart(4,"0")+".png",alt:e.row.id}})]):e.row.order===t.EOrderType.eMUSIC?r("div",[r("h4",[t._v(t._s(t.$t("音楽")))]),r("p",[t._v(t._s(t.eMusicID[e.row.id]||"-"))]),t._l([t.dataManager.soundListBgmById[e.row.id]].filter((function(t){return t})),(function(a){return e.row.id>0?[t.dataManager.files.audios.musics[a.fileName]?r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a.file,type:"audio/mp4"}})]):t._e()]:t._e()}))],2):e.row.order===t.EOrderType.ePICTURE?r("div",[r("img",{staticClass:"dialog-image",attrs:{src:"img/still_texture/Still_Texture_"+e.row.id.toString().padStart(4,"0")+".png",alt:e.row.id}})]):e.row.order===t.EOrderType.eWINDOW_ITEM?r("div",[r("img",{staticClass:"dialog-image",attrs:{src:"img/item_texture/item_texture_"+e.row.id.toString().padStart(4,"0")+".png",alt:e.row.id}})]):t._e()]}}])})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible=!1}}},[t._v(t._s(t.$t("閉じる")))])],1)],1)},i=[],s=r("ade3"),o=r("9ab4"),n=r("2fe1"),c=r("c6c6"),l=r.n(c),d=r("6b98"),u=r("f015"),g=r("d40a"),h=r("87ef");let v=class extends d["a"]{constructor(...t){super(...t),Object(s["a"])(this,"md",new l.a(window.navigator.userAgent)),Object(s["a"])(this,"visible",!1),Object(s["a"])(this,"loading",!1),Object(s["a"])(this,"quest",null),Object(s["a"])(this,"adv",""),Object(s["a"])(this,"questDialogs",[]),Object(s["a"])(this,"richTextService",new g["a"])}get EOrderType(){return u["j"]}get eMusicID(){return u["o"]}getCharacterIcon(t,e){const r=`icon_chara_all_${t.toString().padStart(4,"0")}_${e.toString().padStart(2,"0")}.png`;if(this.dataManager.files.img.icon_chara.Texture2D[r])return"img/icon_chara/Texture2D/"+r;const a=new h["b"];return a.DF=t,a.icon}onPlay(t){for(const e of document.getElementsByTagName("audio"))e!==t.target&&e.pause()}async openDialog(t){try{this.quest=t,this.questDialogs=[],this.visible=!0,this.loading=!0,this.questDialogs=await this.dataManager.advManager.getDialog(t.NPC_FD.map(t=>t.ADV).filter(t=>t))}catch(e){this.visible=!1,this.$message.error(e.toString()),console.error(e)}finally{this.loading=!1}}async openDialogWithAdv(t){try{this.quest=null,this.questDialogs=[],this.visible=!0,this.loading=!0,this.questDialogs=await this.dataManager.advManager.getDialog(t)}catch(e){this.visible=!1,this.$message.error(e.toString()),console.error(e)}finally{this.loading=!1}}};v=Object(o["b"])([Object(n["b"])({components:{}})],v);var p=v,_=p,f=(r("e270"),r("2877")),m=Object(f["a"])(_,a,i,!1,null,"79a992ed",null);e["a"]=m.exports},"44c1":function(t,e,r){},e270:function(t,e,r){"use strict";r("0cb3")},fcc6:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("AdventureRawDialog",{ref:"advDialog"}),r("div",{staticClass:"content"},t._l(Object.entries(t.dataManager.unusedAdvs),(function(e){var a=e[0],i=e[1];return r("div",[r("el-divider",[t._v(t._s(a))]),r("div",{staticClass:"advs"},t._l(i,(function(e){return r("div",{staticClass:"adv"},[r("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(r){return t.$refs.advDialog.openDialogWithAdv([e])}}},[t._v(t._s(e))])],1)})),0)],1)})),0)],1)},i=[],s=r("9ab4"),o=r("2fe1"),n=r("6b98"),c=r("3d57");let l=class extends n["a"]{};l=Object(s["b"])([Object(o["b"])({components:{AdventureRawDialog:c["a"]}})],l);var d=l,u=d,g=(r("0dd0"),r("2877")),h=Object(g["a"])(u,a,i,!1,null,"029965c1",null);e["default"]=h.exports}}]);