(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"3e64":function(t,e,i){"use strict";i("ca39")},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"title__container"},[i("h2",[t._v(t._s(t.$t("アトリエオンライン資料庫")))]),i("p",[i("span",{staticClass:"version-link__container"},[i("span",[i("span",[t._v("Game Version 3.15.0 ")]),"ja-JP"!==t.$i18n.locale?i("span",[i("el-link",{attrs:{type:"success",underline:!1,href:t.changeLocaleHref("ja-JP")}},[t._v("(日本語)")])],1):i("span",[t._v("(日本語)")])])]),i("br"),i("span",{staticClass:"version-link__container"},[i("span",[t._v("Game Version 3.5.0 "),"zh-TW"!==t.$i18n.locale?i("span",[i("el-link",{attrs:{type:"success",underline:!1,href:t.changeLocaleHref("zh-TW")}},[t._v("(中文)")])],1):i("span",[t._v("(中文)")])])])]),i("p",[i("span",[t._v("Twitter")]),i("el-link",{attrs:{href:"https://twitter.com/hoshiyuki_git",target:"_blank",rel:"noopener",type:"primary"}},[t._v("@hoshiyuki_git")])],1),i("br"),i("div",{staticClass:"filters"},[i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-color":"#13ce66","active-text":t.$t("サイドバー")},model:{value:t.showSideBar,callback:function(e){t.showSideBar=e},expression:"showSideBar"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("トップに移動ボタン")},model:{value:t.showBackTopButton,callback:function(e){t.showBackTopButton=e},expression:"showBackTopButton"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{value:t.darkMode,"active-color":"#13ce66","active-text":t.$t("ダークモード")},on:{change:t.onDarkMode}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{value:t.showHiddenContent,"active-color":"#f56c6c","active-text":t.$t("ネタバレ")},on:{change:t.onShowHiddenContent}})],1),i("div",{staticClass:"filter"},[i("el-button",{attrs:{type:"danger",icon:"el-icon-refresh-left",size:"small","aria-label":t.$t("セッティングリセット"),round:""},on:{click:t.onResetSetting}})],1)])]),i("el-divider"),i("div",t._l(t.allPages,(function(e){return i("div",{staticClass:"categories__container"},[i("div",{staticClass:"categories__title-container"},[i("h2",[t._v(t._s(e.title))])]),i("div",{staticClass:"categories"},t._l(e.pages,(function(e){return i("div",{staticClass:"category__container"},[i("router-link",{staticClass:"category__link",attrs:{to:e.to}},[i("h3",[t._v(t._s(e.label))]),i("img",{staticClass:"category__image",class:e.img.class,attrs:{src:e.img.src,alt:e.label||e.imgAlt}})])],1)})),0)])})),0),i("el-divider"),i("div",{staticClass:"strategy-guides"},[i("h3",[t._v(t._s(t.$t("他の人の攻略サイト")))]),i("br"),t._l(t.otherStrategyPages,(function(e,n){return i("div",[i("h4",[t._v(t._s(e.title))]),t._l(e.links,(function(e){return i("p",[i("el-link",{attrs:{href:e.href,target:"_blank",rel:"noopener"}},[t._v(t._s(e.href))])],1)})),t.otherStrategyPages.length!==n+1?i("el-divider"):t._e()],2)}))],2),i("el-divider"),i("div",{staticClass:"other-links"},[i("h3",[t._v(t._s(t.$t("他のサイト")))]),t._l(t.otherLinks,(function(e){return i("div",[i("el-link",{attrs:{href:e.href,target:"_blank",rel:"noopener"}},[t._v(t._s(e.title))])],1)}))],2)],1)},r=[],s=(i("99af"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0"),i("2b3d"),i("5530")),a=(i("96cf"),i("1da1")),o=i("bee2"),l=i("d4ec"),c=i("262e"),h=i("2caf"),m=i("9ab4"),g=i("2fe1"),u=i("5456"),p=i("0063"),_=i.n(p),d=i("0aea"),f=i("5935"),k=i("848f"),b=i("67a2"),v=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){return Object(l["a"])(this,i),e.apply(this,arguments)}return i}(d["a"]),y=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){return Object(l["a"])(this,i),e.apply(this,arguments)}return Object(o["a"])(i,[{key:"changeLocaleHref",value:function(t){var e=new URL(window.location.href);return e.searchParams.set("locale",t),e.toString()}},{key:"onShowHiddenContent",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,this.$confirm("".concat(this.$t("ネタバレのコンテンツ表示しでよろしいでしか"),"?"),"",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"});case 3:this.showHiddenContent=e,window.location.reload();case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"onDarkMode",value:function(t){this.darkMode=t,window.location.reload()}},{key:"onResetSetting",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("".concat(this.$t("セッティングリセットよろしいでしか"),"?"),"",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"});case 2:return t.next=4,Promise.all([this.$store.dispatch("home/reset"),this.$store.dispatch("characterRankingFilter/reset"),this.$store.dispatch("enemyRankingFilter/reset"),this.$store.dispatch("equipmentRankingFilter/reset"),this.$store.dispatch("skillsFilter/reset"),this.$store.dispatch("itemsFilter/reset"),this.$store.dispatch("enemiesFilter/reset"),this.$store.dispatch("charactersFilter/reset"),this.$store.dispatch("composeItemFilter/reset"),this.$store.dispatch("itemEnhanceQuality/reset"),this.$store.dispatch("questsFilter/reset"),this.$store.dispatch("adventBattleFilter/reset"),this.$store.dispatch("blazeArtLeveling/reset")]);case 4:window.location.reload();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"allPages",get:function(){return[{title:this.$t("ツール"),pages:this.pageTools},{title:this.$t("装備"),pages:this.pageWeapons},{title:this.$t("アイテム"),pages:this.pageItems},{title:this.$t("スキル"),pages:this.pageSkills},{title:this.$t("キャラクター"),pages:this.pageCharacters},{title:this.$t("敵"),pages:this.pageEnemies},{title:this.$t("地図"),pages:this.pageArea},{title:this.$t("他の資料"),pages:this.pageInfo},{title:this.$t("他"),pages:this.otherPageInfo}]}},{key:"pageTools",get:function(){return[{label:this.$t("キャラクタービルダー"),img:{src:"img/other/Texture2D/item_texture_0024.png"},to:{name:"ToolsCharacterBuilder"}},{label:this.$t("調合アイテム"),img:{src:"img/icon/icon_bowl.png",class:{"compose-item__image":!0}},to:{name:"ToolsComposeItem"}},{label:this.$t("材料強化"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10020003.png"},to:{name:"ToolsItemEnhanceQuality"}},{label:this.$t("ブレイズアーツレベリング"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_56010002.png"},to:{name:"ToolsBlazeArtLeveling"}}]}},{key:"pageWeapons",get:function(){var t=this;return[{label:this.$t("ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsEquipmentRanking"}}].concat(_.a.from(u["a"].itemsEquipments).groupBy((function(t){return t.CATEG})).orderBy((function(t){return t.key()})).select((function(e){return{label:t.$t(u["a"].lookup.itemCategory[e.key()]),img:{src:e.first().icon},to:{name:"Items",query:{category:e.key()}}}})).toArray())}},{key:"pageItems",get:function(){var t=this,e=_.a.from(u["a"].item.m_vList).where((function(t){return!t.EQU_BRD})).groupBy((function(t){return t.CATEG})).orderBy((function(t){return t.key()})).select((function(e){return{label:t.$t(u["a"].lookup.itemCategory[e.key()]),img:{src:e.first().icon},to:{name:"Items",query:{category:e.key()}}}})).toArray();return this.showHiddenContent&&(e.push({label:this.$t("未使用アイテム"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_20020010.png"},to:{name:"ItemsUnusedItems"}}),e.push({label:this.$t("他の投げ物"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10350010.png"},to:{name:"ItemsThrowables"}})),e}},{key:"pageSkills",get:function(){return[{label:this.$t("アクティブスキル"),img:{src:"img/icon/icon_skill_00003.png"},to:{name:"Skills",query:{skillKind:b["SkillKind"].normal}}},{label:this.$t("パッシブスキル"),img:{src:"img/fx/Texture2D/FX_Skill2005_02.png"},to:{name:"Skills",query:{skillKind:b["SkillKind"].effect}}},{label:this.$t("強化効果"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10950010.png"},to:{name:"SkillsAddon"}},{label:this.$t("異常状態"),img:{src:"img/fx/Texture2D/FX_smoke.png"},to:{name:"SkillsAbnormalEffect"}},{label:this.$t("ブレイズアーツ"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_56010003.png"},to:{name:"Skills",query:{skillKind:b["SkillKind"].blazeArt}}}]}},{key:"pageCharacters",get:function(){var t=[{label:this.$t("ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsCharacterRanking"}},{label:this.$t("戦闘キャラクター"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_0001.png"},to:{name:"Characters",query:{characterType:k["a"].battle}}},{label:this.$t("NPC"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_3007_00.png"},to:{name:"Characters",query:{characterType:k["a"].npc}}}];return this.showHiddenContent&&t.push({label:this.$t("他のキャラクター"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_20001.png"},to:{name:"CharactersOtherCharacters"}}),t}},{key:"pageEnemies",get:function(){return[{label:this.$t("ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsEnemyRanking"}},{label:this.$t("敵"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_9999_00.png"},to:{name:"Enemies"}}]}},{key:"pageArea",get:function(){return[{label:this.$t("区域"),img:{src:"img/icon/tree.png"},to:{name:"Areas"}},{label:this.$t("ダンジョン"),img:{src:"img/item_pickup/Texture2D/Item_PickUp002_Stone.png"},to:{name:"AreasDungeons"}},{label:this.$t("他の物"),img:{src:"img/item_pickup/Texture2D/Item_PickUp001_Stone.png"},to:{name:"AreasGimmicks"}}]}},{key:"pageInfo",get:function(){return[{label:this.$t("クェスト"),img:{src:"img/other/Texture2D/item_texture_0018.png"},to:{name:"InfoQuest"}},{label:this.$t("ダイアログ"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_1010_00.png"},to:{name:"InfoDialog"}},{label:this.$t("大事なもの"),img:{src:"img/icon_item01/Texture2D/icon_item01_00001.png"},to:{name:"InfoWealth"}},{label:this.$t("称号"),img:{src:"img/icon_degree/Texture2D/icon_degree_0605.png"},to:{name:"InfoDegree"}},{label:this.$t("ゾーン"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10500014.png"},to:{name:"InfoZone"}}]}},{key:"otherPageInfo",get:function(){return[{label:this.$t("計算/公式"),img:{src:"img/other/Texture2D/item_texture_0010.png"},to:{name:"OthersCalculate"}},{label:this.$t("降臨バタル(昔)"),img:{src:"img/enemy_tex/Texture2D/enemy_tex_023_03.png"},to:{name:"OthersAdventBattle"}},{label:"",img:{src:"img/tips/Texture2D/Tips_Chara_01.png"},imgAlt:"tips",to:{name:"OthersTips"}},{label:this.$t("宝文字"),img:{src:"img/other/Texture2D/item_texture_0020.png"},to:{name:"OthersTreasureText"}},{label:this.$t("チャット資料"),img:{src:"img/other/stamp.png"},to:{name:"OthersChat"}}]}},{key:"otherStrategyPages",get:function(){return[{title:"ブレセイル観光局",links:[{href:"https://bresail-kanko.info/index.html"},{href:"https://twitter.com/bresail_kanko"},{href:"https://twitter.com/re_dream5"}]},{title:"アトリエオンライン攻略日記〜シャオンのアトリエ〜",links:[{href:"https://ameblo.jp/shana12151014/"},{href:"https://twitter.com/_shaon"}]},{title:"かぴ",links:[{href:"https://twitter.com/kapi_atorie"}]},{title:"アトリエオンライン攻略Wikiまとめ【ブレセイルの錬金術士】",links:[{href:"https://atelieronline.gamerch.com/"}]},{title:"アトリエオンライン攻略",links:[{href:"https://appmedia.jp/atelier-online"}]},{title:"煉金工坊OL 資料庫",links:[{href:"https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1"},{href:"https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing"}]}]}},{key:"otherLinks",get:function(){return[{title:"【公式】アトリエオンライン",href:"https://twitter.com/ao_forest"},{title:"『アトリエ オンライン』 4コマ漫画まとめ",href:"https://twitter.com/i/events/1037277820232163328"},{title:"アトリエ オンライン ～ブレセイルの錬金術士～",href:"https://play.google.com/store/apps/details?id=jp.nhnpa.SJAO"},{title:"鍊金工房 Online ～布雷賽爾的鍊金術士～",href:"https://play.google.com/store/apps/details?id=com.boltrend.ateliertc"}]}}]),i}(v);y=Object(m["b"])([Object(g["a"])({components:{},computed:Object(s["a"])({},Object(f["b"])("home",["showSideBar","showBackTopButton","showHiddenContent","darkMode"]))})],y);var $=y,x=$,w=(i("3e64"),i("2877")),T=Object(w["a"])(x,n,r,!1,null,"e39c0424",null);e["default"]=T.exports},ca39:function(t,e,i){}}]);