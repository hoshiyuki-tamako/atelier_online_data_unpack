(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{bb51:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"title__container"},[i("h2",[e._v(e._s(e.$t("アトリエオンライン資料庫")))]),i("p",[i("span",{staticClass:"version-link__container"},[i("span",[i("span",[e._v("Game Version 3.15.2 (2021-03-10) ")]),"ja-JP"!==e.$i18n.locale?i("span",[i("el-link",{attrs:{type:"success",underline:!1,href:e.changeLocaleHref("ja-JP")}},[e._v("(日本語)")])],1):i("span",[e._v("(日本語)")])])]),i("br"),i("span",{staticClass:"version-link__container"},[i("span",[e._v("Game Version 3.5.0 (2021-02-24) "),"zh-TW"!==e.$i18n.locale?i("span",[i("el-link",{attrs:{type:"success",underline:!1,href:e.changeLocaleHref("zh-TW")}},[e._v("(繁體中文)")])],1):i("span",[e._v("(繁體中文)")])]),e.isProduction?e._e():[i("span",[e._v(" "),"zh-CN"!==e.$i18n.locale?i("span",[i("el-link",{attrs:{type:"success",underline:!1,href:e.changeLocaleHref("zh-CN")}},[e._v("(简体)")])],1):i("span",[e._v("(简体)")])])]],2)]),i("p",[i("span",[e._v("Twitter")]),i("el-link",{attrs:{href:"https://twitter.com/hoshiyuki_git",target:"_blank",rel:"noopener",type:"primary"}},[e._v("@hoshiyuki_git")])],1),i("br"),i("div",{staticClass:"filters"},[i("div",{staticClass:"filter"},[i("el-button",{on:{click:function(t){e.settingDialogVisible=!0}}},[e._v(e._s(e.$t("設定")))])],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{value:e.showHiddenContent,"active-color":"#f56c6c","active-text":e.$t("ネタバレ")},on:{change:e.onShowHiddenContent}})],1)])]),i("el-divider"),i("div",e._l(e.allPages,(function(t){return i("div",{staticClass:"categories__container"},[i("div",{staticClass:"categories__title-container"},[i("h2",[e._v(e._s(t.title))])]),i("div",{staticClass:"categories"},e._l(t.pages,(function(t){return i("div",{staticClass:"category__container"},[i("router-link",{staticClass:"category__link",attrs:{to:t.to}},[e.darkMode?i("span",[e._v(e._s(t.label))]):i("h3",[e._v(e._s(t.label))]),i("img",{staticClass:"category__image",class:t.img.class,attrs:{src:t.img.src,alt:t.label||t.imgAlt}})])],1)})),0)])})),0),i("el-divider"),i("div",{staticClass:"strategy-guides"},[i("h3",[e._v(e._s(e.$t("他の人の攻略サイト")))]),i("br"),e._l(e.otherStrategyPages,(function(t,n){return i("div",[i("h4",[e._v(e._s(t.title))]),e._l(t.links,(function(t){return i("p",[i("el-link",{attrs:{href:t.href,target:"_blank",rel:"noopener"}},[e._v(e._s(t.href))])],1)})),e.otherStrategyPages.length!==n+1?i("el-divider"):e._e()],2)}))],2),i("el-divider"),i("div",{staticClass:"other-links"},[i("h3",[e._v(e._s(e.$t("他のサイト")))]),e._l(e.otherLinks,(function(t){return i("div",[i("el-link",{attrs:{href:t.href,target:"_blank",rel:"noopener"}},[e._v(e._s(t.title))])],1)}))],2)],1)},a=[],s=(i("99af"),i("4de4"),i("0d03"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0"),i("2b3d"),i("5530")),r=(i("96cf"),i("1da1")),o=i("bee2"),l=i("d4ec"),c=i("262e"),g=i("2caf"),m=i("9ab4"),h=i("2fe1"),_=i("0063"),u=i.n(_),p=i("6b98"),f=i("5935"),d=i("848f"),b=i("67a2"),k=function(e){Object(c["a"])(i,e);var t=Object(g["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return i}(p["a"]),y=function(e){Object(c["a"])(i,e);var t=Object(g["a"])(i);function i(){return Object(l["a"])(this,i),t.apply(this,arguments)}return Object(o["a"])(i,[{key:"changeLocaleHref",value:function(e){var t=new URL(window.location.href);return t.searchParams.set("locale",e),t.toString()}},{key:"onShowHiddenContent",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,this.$confirm("".concat(this.$t("ネタバレのコンテンツ表示しでよろしいでしか"),"?"),"",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"});case 3:this.showHiddenContent=t,window.location.reload();case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"allPages",get:function(){return[{title:this.$t("ツール"),pages:this.pageTools},{title:this.$t("装備"),pages:this.pageWeapons},{title:this.$t("アイテム"),pages:this.pageItems},{title:this.$t("スキル"),pages:this.pageSkills},{title:this.$t("キャラクター"),pages:this.pageCharacters},{title:this.$t("敵"),pages:this.pageEnemies},{title:this.$t("地図"),pages:this.pageArea},{title:this.$t("他の資料"),pages:this.pageInfo},{title:this.$t("他"),pages:this.otherPageInfo}]}},{key:"pageTools",get:function(){return[{label:this.$t("キャラクタービルダー"),img:{src:"img/other/Texture2D/item_texture_0024.png"},to:{name:"ToolsCharacterBuilder"}},{label:this.$t("調合アイテム"),img:{src:"img/icon/icon_bowl.png",class:{"compose-item__image":!0}},to:{name:"ToolsComposeItem"}},{label:this.$t("材料強化"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10020003.png"},to:{name:"ToolsItemEnhanceQuality"}},{label:this.$t("ブレイズアーツレベリング"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_56010002.png"},to:{name:"ToolsBlazeArtLeveling"}}]}},{key:"pageWeapons",get:function(){var e=this;return[{label:this.$t("装備ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsEquipmentRanking"}}].concat(u.a.from(this.dataManager.itemsEquipments).groupBy((function(e){return e.CATEG})).orderBy((function(e){return e.key()})).select((function(t){return{label:e.$t(e.dataManager.lookup.itemCategory[t.key()]),img:{src:t.first().icon},to:{name:"Items",query:{category:t.key()}}}})).toArray())}},{key:"pageItems",get:function(){var e=this,t=u.a.from(this.dataManager.item.m_vList).where((function(e){return!e.EQU_BRD})).groupBy((function(e){return e.CATEG})).orderBy((function(e){return e.key()})).select((function(t){return{label:e.$t(e.dataManager.lookup.itemCategory[t.key()]),img:{src:t.first().icon},to:{name:"Items",query:{category:t.key()}}}})).toArray();return this.showHiddenContent&&t.push({label:this.$t("未使用アイテム"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_20020010.png"},to:{name:"ItemsUnusedItems"}},{label:this.$t("他の投げ物"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10350010.png"},to:{name:"ItemsThrowables"}}),t}},{key:"pageSkills",get:function(){return[{label:this.$t("アクティブスキル"),img:{src:"img/icon/icon_skill_00003.png"},to:{name:"Skills",query:{skillKind:b["SkillKind"].normal}}},{label:this.$t("パッシブスキル"),img:{src:"img/fx/Texture2D/FX_Skill2005_02.png"},to:{name:"Skills",query:{skillKind:b["SkillKind"].effect}}},{label:this.$t("強化効果"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10950010.png"},to:{name:"SkillsAddon"}},{label:this.$t("異常状態"),img:{src:"img/fx/Texture2D/FX_smoke.png"},to:{name:"SkillsAbnormalEffect"}},{label:this.$t("ブレイズアーツ"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_56010003.png"},to:{name:"Skills",query:{skillKind:b["SkillKind"].blazeArt}}}]}},{key:"pageCharacters",get:function(){var e=[{label:this.$t("キャラクターランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsCharacterRanking"}},{label:this.$t("戦闘キャラクター"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_0001.png"},to:{name:"Characters",query:{characterType:d["a"].battle}}},{label:this.$t("NPC"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_3007_00.png"},to:{name:"Characters",query:{characterType:d["a"].npc}}}];return this.showHiddenContent&&e.push({label:this.$t("他のキャラクター"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_20001.png"},to:{name:"CharactersOtherCharacters"}}),e}},{key:"pageEnemies",get:function(){return[{label:this.$t("敵ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsEnemyRanking"}},{label:this.$t("敵"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_9999_00.png"},to:{name:"Enemies"}}]}},{key:"pageArea",get:function(){return[{label:this.$t("区域"),img:{src:"img/icon/tree.png"},to:{name:"Areas"}},{label:this.$t("ダンジョン"),img:{src:"img/item_pickup/Texture2D/Item_PickUp002_Stone.png"},to:{name:"AreasDungeons"}},{label:this.$t("他の物"),img:{src:"img/item_pickup/Texture2D/Item_PickUp001_Stone.png"},to:{name:"AreasGimmicks"}}]}},{key:"pageInfo",get:function(){return[{label:this.$t("クエスト"),img:{src:"img/other/Texture2D/item_texture_0018.png"},to:{name:"InfoQuest"}},{label:this.$t("ダイアログ"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_1010_00.png"},to:{name:"InfoDialog"}},{label:this.$t("大事なもの(財貨)"),img:{src:"img/icon_item01/Texture2D/icon_item01_00001.png"},to:{name:"InfoWealth"}},{label:this.$t("称号"),img:{src:"img/icon_degree/Texture2D/icon_degree_0605.png"},to:{name:"InfoDegree"}},{label:this.$t("課題"),img:{src:"img/icon/icon_mission.png",class:"icon-daily-mission"},to:{name:"InfoDailyMission"}},{label:this.$t("トレジャー"),img:{src:"img/icon/icon_hunt.png"},to:{name:"InfoHunt"}},{label:this.$t("ゾーン"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10500014.png"},to:{name:"InfoZone"}}]}},{key:"otherPageInfo",get:function(){return[{label:this.$t("計算/公式"),img:{src:"img/other/Texture2D/item_texture_0010.png"},to:{name:"OthersCalculate"}},this.isProduction?null:{label:this.$t("音楽 / ボイス"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10950041.png"},to:{name:"OthersAudios"}},{label:this.$t("降臨バタル(昔)"),img:{src:"img/enemy_tex/Texture2D/enemy_tex_023_03.png"},to:{name:"OthersAdventBattle"}},{label:"",img:{src:"img/tips/Texture2D/Tips_Chara_01.png"},imgAlt:"tips",to:{name:"OthersTips"}},{label:this.$t("宝文字"),img:{src:"img/other/Texture2D/item_texture_0020.png"},to:{name:"OthersTreasureText"}},{label:this.$t("チャット資料"),img:{src:"img/other/stamp.png"},to:{name:"OthersChat"}}].filter((function(e){return e}))}},{key:"otherStrategyPages",get:function(){return[{title:"ブレセイル観光局",links:[{href:"https://bresail-kanko.info"},{href:"https://twitter.com/bresail_kanko"},{href:"https://twitter.com/re_dream5"}]},{title:"アトリエオンライン攻略日記〜シャオンのアトリエ〜",links:[{href:"https://ameblo.jp/shana12151014/"},{href:"https://twitter.com/_shaon"}]},{title:"かぴ",links:[{href:"https://twitter.com/kapi_atorie"}]},{title:"アトリエオンライン攻略Wikiまとめ【ブレセイルの錬金術士】",links:[{href:"https://atelieronline.gamerch.com/"}]},{title:"アトリエオンライン攻略",links:[{href:"https://appmedia.jp/atelier-online"}]},{title:"煉金工坊OL 資料庫",links:[{href:"https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1"},{href:"https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing"}]}]}},{key:"otherLinks",get:function(){return[{title:"【公式】アトリエオンライン",href:"https://twitter.com/ao_forest"},{title:"『アトリエ オンライン』 4コマ漫画まとめ",href:"https://twitter.com/i/events/1037277820232163328"},{title:"アトリエ オンライン ～ブレセイルの錬金術士～",href:"https://play.google.com/store/apps/details?id=jp.nhnpa.SJAO"},{title:"鍊金工房 Online ～布雷賽爾的鍊金術士～",href:"https://play.google.com/store/apps/details?id=com.boltrend.ateliertc"}]}}]),i}(k);y=Object(m["b"])([Object(h["b"])({components:{},computed:Object(s["a"])({},Object(f["b"])("home",["settingDialogVisible","showHiddenContent","darkMode"]))})],y);var v=y,$=v,T=(i("e3ae"),i("2877")),x=Object(T["a"])($,n,a,!1,null,"1e7d4edb",null);t["default"]=x.exports},e3ae:function(e,t,i){"use strict";i("f73e")},f73e:function(e,t,i){}}]);