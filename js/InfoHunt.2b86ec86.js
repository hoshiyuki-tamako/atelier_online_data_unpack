(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InfoHunt"],{"1aaf":function(n,t,e){},"1b40":function(n,t,e){"use strict";e.d(t,"a",(function(){return r["b"]})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return m}));var r=e("2fe1"),i=function(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;var r=Array(n),i=0;for(t=0;t<e;t++)for(var u=arguments[t],a=0,o=u.length;a<o;a++,i++)r[i]=u[a];return r},u=/\B([A-Z])/g,a=function(n){return n.replace(u,"-$1").toLowerCase()};function o(n){return function(t,e,r){var u=a(e),o=r.value;r.value=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var a=function(r){var a=n||u;void 0===r?0===e.length?t.$emit(a):1===e.length?t.$emit(a,e[0]):t.$emit.apply(t,i([a],e)):(e.unshift(r),t.$emit.apply(t,i([a],e)))},s=o.apply(this,e);return c(s)?s.then(a):a(s),s}}}function c(n){return n instanceof Promise||n&&"function"===typeof n.then}var s="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function l(n,t,e){if(s&&!Array.isArray(n)&&"function"!==typeof n&&!n.hasOwnProperty("type")&&"undefined"===typeof n.type){var r=Reflect.getMetadata("design:type",t,e);r!==Object&&(n.type=r)}}function m(n){return void 0===n&&(n={}),function(t,e){l(n,t,e),Object(r["a"])((function(t,e){(t.props||(t.props={}))[e]=n}))(t,e)}}},"47d6":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"hunt-container"},[e("div",{staticClass:"filters"},[e("div",{staticClass:"filter"},[e("span",[n._v(n._s(n.$t("所要時間")))]),e("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:n.timeCost,callback:function(t){n.timeCost=t},expression:"timeCost"}},n._l(n.dataManager.api.huntInfoTimeCosts,(function(t){return e("el-option",{key:t,attrs:{label:n.humanizeDuration(t),value:t}})})),1)],1),e("CharacterSelector",{attrs:{characters:n.dataManager.api.huntInfoCharacters},model:{value:n.character,callback:function(t){n.character=t},expression:"character"}}),e("ItemSelector",{attrs:{items:n.dataManager.api.huntInfoItems},model:{value:n.item,callback:function(t){n.item=t},expression:"item"}}),e("SkillSelector",{attrs:{skills:n.dataManager.api.huntInfoSkills,title:n.$t("強化効果")},model:{value:n.skill,callback:function(t){n.skill=t},expression:"skill"}})],1),e("div",{staticClass:"filters"},[e("div",{staticClass:"filter"},[e("span",[n._v(n._s(n.$t("名前"))+"/HUNTID")]),e("el-input",{attrs:{clearable:""},model:{value:n.name,callback:function(t){n.name=t},expression:"name"}})],1)]),n._l(n.filteredRows,(function(t){return e("el-card",{key:t.HUNTID,staticClass:"hunt-card"},[e("div",[e("h2",{staticClass:"hunt-title"},[e("span",[n._v(n._s(t.NAME)+" ("+n._s(n.humanizeDuration(t.TM))+")")])]),e("el-tooltip",{attrs:{content:n.dataManager.wealthById[t.DEPWTH.DF].NAME,placement:"left"}},[e("span",{staticClass:"wealth-container"},[e("span",[n._v(n._s(n.$t("消費")))]),e("img",{attrs:{src:n.dataManager.wealthById[t.DEPWTH.DF].icon,alt:n.dataManager.wealthById[t.DEPWTH.DF].NAME}}),e("span",[n._v(n._s(t.DEPWTH.CNT))])])])],1),e("div",[e("el-divider",[n._v(n._s(n.$t("報酬")))]),e("p",[n._v(n._s(n.$t("経験値"))+" "+n._s(t.RWD.EXP))]),n._l(t.RWD.WTH,(function(t){return e("div",[e("el-tooltip",{attrs:{content:n.dataManager.wealthById[t.DF].NAME,placement:"left"}},[e("span",{staticClass:"wealth-container"},[e("img",{attrs:{src:n.dataManager.wealthById[t.DF].icon,alt:n.dataManager.wealthById[t.DF].NAME}}),e("span",[n._v(n._s(t.CNT))])])])],1)})),e("br"),e("div",{staticClass:"rewards"},n._l(t.RWD.TRS.concat(t.RWD.ITM),(function(t,r){return e("el-card",{key:r},[n._l([n.dataManager.itemById[t.DF]].filter((function(n){return n})),(function(r){return[e("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[e("router-link",{staticClass:"quest-reward-item-container",attrs:{to:{name:"ItemsItem",query:{df:r.DF,quality:t.QTY}}}},[e("p",{staticClass:"reward-title"},[e("span",[n._v(n._s(n.$t("品質"))+n._s(t.QTY))]),t.TRT?e("span",[n._v(n._s(n.dataManager.skillById[t.TRT].name.replace(/\s+/gm,"")))]):n._e()]),e("img",{attrs:{src:r.icon,alt:r.NAME}})])],1)]}))],2)})),1)],2),e("div",[e("el-divider",[n._v(n._s(n.$t("ボーナス")))]),n._l(t.JCND,(function(t){return e("div",[e("p",[t.ESS?[e("el-tooltip",{attrs:{content:n.$t("必要"),placement:"left"}},[e("span",[n._v("*")])])]:n._e(),e("span",[n._v("("+n._s(t.RATEBNS)+" "+n._s(n.$t("ボーナス"))+") "+n._s(" "))]),t.TYPE===n.eConditionType.TotalLv?e("span",[n._v(n._s(n.$t("合計LV"))+n._s(t.VALS[0]))]):t.TYPE===n.eConditionType.CharaCnt?e("span",[n._v(n._s(n.$t("{0}人以上のキャラを編成",t.VALS)))]):t.TYPE===n.eConditionType.TargetChara?e("span",[n._v(n._s(n.$t("LV{0}以上の{1}の編成",[t.VALS[1],n.dataManager.characterById[t.VALS[0]].NAME])))]):t.TYPE===n.eConditionType.MinLv?e("span",[n._v(n._s(n.$t("LV{0}以上のキャラを{1}人以上編成",t.VALS)))]):n._e(),n._l([n.dataManager.characterById[t.VALS[0]]].filter((function(n){return n})),(function(r){return t.TYPE===n.eConditionType.TargetChara?[e("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:r.DF}}}},[e("img",{staticClass:"icon-small",attrs:{src:r.icon,alt:r.NAME}})])]:n._e()}))],2)])}))],2),e("div",[e("el-divider",[n._v(n._s(n.$t("即帰還")))]),n._l(t.INSWTH,(function(r){return e("p",[e("el-tooltip",{attrs:{content:n.dataManager.wealthById[r.DF].NAME,placement:"left"}},[e("span",{staticClass:"wealth-container"},[e("img",{attrs:{src:n.dataManager.wealthById[r.DF].icon,alt:n.dataManager.wealthById[r.DF].NAME}}),e("span",[e("span",[n._v("1"+n._s(n.$t("個"))+"/"+n._s(n.humanizeDuration(r.CNT)))]),t.TM>r.CNT?e("span",[n._v(n._s(" ")+"("+n._s((t.TM/r.CNT).toFixed())+n._s(n.$t("個"))+"/"+n._s(n.humanizeDuration(t.TM))+")")]):n._e()])])])],1)}))],2)])}))],2)},i=[],u=e("ade3"),a=e("9ab4"),o=e("2fe1"),c=e("8f14"),s=e.n(c),l=e("6b98"),m=e("f015"),f=e("613e"),d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"filter"},[e("span",[n._v(n._s(n.$t("アイテム")))]),e("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:n.change},model:{value:n.item,callback:function(t){n.item=t},expression:"item"}},n._l(n.items,(function(t){return e("el-option",{key:t.DF,attrs:{label:t.NAME,value:t.DF}},[e("img",{staticClass:"option-image",attrs:{src:t.icon,alt:""}}),e("span",{staticClass:"option-text"},[n._v(n._s(t.NAME))])])})),1)],1)},h=[],y=e("1b40");let p=class extends l["a"]{constructor(...n){super(...n),Object(u["a"])(this,"items",void 0),Object(u["a"])(this,"value",void 0)}get item(){return this.value}set item(n){}change(n){return n}};Object(a["b"])([Object(y["c"])({type:Array,default:()=>[]})],p.prototype,"items",void 0),Object(a["b"])([Object(y["c"])()],p.prototype,"value",void 0),Object(a["b"])([Object(y["b"])("change"),Object(y["b"])("input")],p.prototype,"change",null),p=Object(a["b"])([Object(y["a"])({components:{}})],p);var k=p,v=k,g=e("2877"),b=Object(g["a"])(v,d,h,!1,null,null,null),w=b.exports,j=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"filter"},[e("span",[n._v(n._s(n.title||n.$t("スキル")))]),e("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:n.change},model:{value:n.skill,callback:function(t){n.skill=t},expression:"skill"}},n._l(n.skills,(function(n){return e("el-option",{key:n.id,attrs:{label:n.name,value:n.id}})})),1)],1)},_=[];let C=class extends l["a"]{constructor(...n){super(...n),Object(u["a"])(this,"skills",void 0),Object(u["a"])(this,"value",void 0),Object(u["a"])(this,"title",void 0)}get skill(){return this.value}set skill(n){}change(n){return n}};Object(a["b"])([Object(y["c"])({type:Array,default:()=>[]})],C.prototype,"skills",void 0),Object(a["b"])([Object(y["c"])()],C.prototype,"value",void 0),Object(a["b"])([Object(y["c"])({type:String})],C.prototype,"title",void 0),Object(a["b"])([Object(y["b"])("change"),Object(y["b"])("input")],C.prototype,"change",null),C=Object(a["b"])([Object(y["a"])({components:{}})],C);var M=C,T=M,O=Object(g["a"])(T,j,_,!1,null,null,null),D=O.exports;let N=class extends l["a"]{constructor(...n){super(...n),Object(u["a"])(this,"timeCost",null),Object(u["a"])(this,"character",null),Object(u["a"])(this,"item",null),Object(u["a"])(this,"skill",null),Object(u["a"])(this,"name","")}get eConditionType(){return m["p"]}humanizeDuration(n){const t={"ja-JP":"ja","zh-TW":"zh_TW","zh-HK":"zh_TW","zh-CN":"zh_CN",en:"en"};return s()(1e3*n,{spacer:this.spacer,delimiter:"",conjunction:"",serialComma:!1,language:t[this.dataManager.locale]})}get spacer(){switch(this.dataManager.locale){case"en":return" ";default:return""}}get filteredRows(){return this.dataManager.api.huntInfos.filter(n=>(!this.timeCost||this.timeCost===n.TM)&&(!this.character||n.JCND.some(n=>n.TYPE===m["p"].TargetChara&&n.VALS[0]===this.character))&&(!this.item||n.RWD.TRS.some(n=>n.DF===this.item)||n.RWD.ITM.some(n=>n.DF===this.item))&&(!this.skill||n.RWD.TRS.some(n=>n.TRT===this.skill)||n.RWD.ITM.some(n=>n.TRT===this.skill))&&(!this.name||n.HUNTID===+this.name||n.NAME.toLocaleLowerCase().includes(this.name.trim().toLocaleLowerCase()))).sort((n,t)=>n.DTY-t.DTY)}beforeMount(){var n;this.name=(null===(n=this.$route.query.huntId)||void 0===n?void 0:n.toString())||""}};N=Object(a["b"])([Object(o["b"])({components:{CharacterSelector:f["a"],ItemSelector:w,SkillSelector:D}})],N);var E=N,I=E,A=(e("d1b0"),Object(g["a"])(I,r,i,!1,null,"855d0fc0",null));t["default"]=A.exports},"613e":function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"filter"},[n.showTitle?e("span",[n._v(n._s(n.$t(n.title)))]):n._e(),e("el-select",{attrs:{clearable:n.clearable,placeholder:"",filterable:""},on:{change:n.change},model:{value:n.character,callback:function(t){n.character=t},expression:"character"}},n._l(n.characters,(function(t,r){return e("el-option",{key:r,attrs:{label:t.NAME,value:t.DF}},[t.hasFaceIcon?e("img",{staticClass:"option-image",attrs:{src:t.faceIcon,alt:""}}):t.hasIcon?e("img",{staticClass:"option-image",attrs:{src:t.icon,alt:""}}):n._e(),e("span",{staticClass:"option-text"},[n._v(n._s(t.NAME))])])})),1)],1)},i=[],u=e("ade3"),a=e("9ab4"),o=e("1b40"),c=e("6b98");let s=class extends c["a"]{constructor(...n){super(...n),Object(u["a"])(this,"characters",void 0),Object(u["a"])(this,"value",void 0),Object(u["a"])(this,"showTitle",void 0),Object(u["a"])(this,"title",void 0),Object(u["a"])(this,"clearable",void 0)}get character(){return this.value}set character(n){}change(n){return n}};Object(a["b"])([Object(o["c"])({type:Array,default:()=>[]})],s.prototype,"characters",void 0),Object(a["b"])([Object(o["c"])()],s.prototype,"value",void 0),Object(a["b"])([Object(o["c"])({type:Boolean,default:!0})],s.prototype,"showTitle",void 0),Object(a["b"])([Object(o["c"])({type:String,default:"キャラクター"})],s.prototype,"title",void 0),Object(a["b"])([Object(o["c"])({type:Boolean,default:!0})],s.prototype,"clearable",void 0),Object(a["b"])([Object(o["b"])("change"),Object(o["b"])("input")],s.prototype,"change",null),s=Object(a["b"])([Object(o["a"])({components:{}})],s);var l=s,m=l,f=e("2877"),d=Object(f["a"])(m,r,i,!1,null,null,null);t["a"]=d.exports},"8f14":function(n,t,e){var r;(function(){var i={y:function(n){return 1===n?"χρόνος":"χρόνια"},mo:function(n){return 1===n?"μήνας":"μήνες"},w:function(n){return 1===n?"εβδομάδα":"εβδομάδες"},d:function(n){return 1===n?"μέρα":"μέρες"},h:function(n){return 1===n?"ώρα":"ώρες"},m:function(n){return 1===n?"λεπτό":"λεπτά"},s:function(n){return 1===n?"δευτερόλεπτο":"δευτερόλεπτα"},ms:function(n){return 1===n?"χιλιοστό του δευτερολέπτου":"χιλιοστά του δευτερολέπτου"},decimal:","},u=["۰","١","٢","٣","٤","٥","٦","٧","٨","٩"],a={af:{y:"jaar",mo:function(n){return"maand"+(1===n?"":"e")},w:function(n){return 1===n?"week":"weke"},d:function(n){return 1===n?"dag":"dae"},h:function(n){return 1===n?"uur":"ure"},m:function(n){return 1===n?"minuut":"minute"},s:function(n){return"sekonde"+(1===n?"":"s")},ms:function(n){return"millisekonde"+(1===n?"":"s")},decimal:","},ar:{y:function(n){return["سنة","سنتان","سنوات"][d(n)]},mo:function(n){return["شهر","شهران","أشهر"][d(n)]},w:function(n){return["أسبوع","أسبوعين","أسابيع"][d(n)]},d:function(n){return["يوم","يومين","أيام"][d(n)]},h:function(n){return["ساعة","ساعتين","ساعات"][d(n)]},m:function(n){return["دقيقة","دقيقتان","دقائق"][d(n)]},s:function(n){return["ثانية","ثانيتان","ثواني"][d(n)]},ms:function(n){return["جزء من الثانية","جزآن من الثانية","أجزاء من الثانية"][d(n)]},decimal:",",delimiter:" و ",_formatCount:function(n,t){for(var e=f(u,{".":t}),r=n.toString().split(""),i=0;i<r.length;i++){var a=r[i];b(e,a)&&(r[i]=e[a])}return r.join("")}},bg:{y:function(n){return["години","година","години"][y(n)]},mo:function(n){return["месеца","месец","месеца"][y(n)]},w:function(n){return["седмици","седмица","седмици"][y(n)]},d:function(n){return["дни","ден","дни"][y(n)]},h:function(n){return["часа","час","часа"][y(n)]},m:function(n){return["минути","минута","минути"][y(n)]},s:function(n){return["секунди","секунда","секунди"][y(n)]},ms:function(n){return["милисекунди","милисекунда","милисекунди"][y(n)]},decimal:","},bn:{y:"বছর",mo:"মাস",w:"সপ্তাহ",d:"দিন",h:"ঘন্টা",m:"মিনিট",s:"সেকেন্ড",ms:"মিলিসেকেন্ড"},ca:{y:function(n){return"any"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"os")},w:function(n){return"setman"+(1===n?"a":"es")},d:function(n){return"di"+(1===n?"a":"es")},h:function(n){return"hor"+(1===n?"a":"es")},m:function(n){return"minut"+(1===n?"":"s")},s:function(n){return"segon"+(1===n?"":"s")},ms:function(n){return"milisegon"+(1===n?"":"s")},decimal:","},cs:{y:function(n){return["rok","roku","roky","let"][p(n)]},mo:function(n){return["měsíc","měsíce","měsíce","měsíců"][p(n)]},w:function(n){return["týden","týdne","týdny","týdnů"][p(n)]},d:function(n){return["den","dne","dny","dní"][p(n)]},h:function(n){return["hodina","hodiny","hodiny","hodin"][p(n)]},m:function(n){return["minuta","minuty","minuty","minut"][p(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][p(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][p(n)]},decimal:","},cy:{y:"flwyddyn",mo:"mis",w:"wythnos",d:"diwrnod",h:"awr",m:"munud",s:"eiliad",ms:"milieiliad"},da:{y:"år",mo:function(n){return"måned"+(1===n?"":"er")},w:function(n){return"uge"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"e")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minut"+(1===n?"":"ter")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},de:{y:function(n){return"Jahr"+(1===n?"":"e")},mo:function(n){return"Monat"+(1===n?"":"e")},w:function(n){return"Woche"+(1===n?"":"n")},d:function(n){return"Tag"+(1===n?"":"e")},h:function(n){return"Stunde"+(1===n?"":"n")},m:function(n){return"Minute"+(1===n?"":"n")},s:function(n){return"Sekunde"+(1===n?"":"n")},ms:function(n){return"Millisekunde"+(1===n?"":"n")},decimal:","},el:i,en:{y:function(n){return"year"+(1===n?"":"s")},mo:function(n){return"month"+(1===n?"":"s")},w:function(n){return"week"+(1===n?"":"s")},d:function(n){return"day"+(1===n?"":"s")},h:function(n){return"hour"+(1===n?"":"s")},m:function(n){return"minute"+(1===n?"":"s")},s:function(n){return"second"+(1===n?"":"s")},ms:function(n){return"millisecond"+(1===n?"":"s")},decimal:"."},eo:{y:function(n){return"jaro"+(1===n?"":"j")},mo:function(n){return"monato"+(1===n?"":"j")},w:function(n){return"semajno"+(1===n?"":"j")},d:function(n){return"tago"+(1===n?"":"j")},h:function(n){return"horo"+(1===n?"":"j")},m:function(n){return"minuto"+(1===n?"":"j")},s:function(n){return"sekundo"+(1===n?"":"j")},ms:function(n){return"milisekundo"+(1===n?"":"j")},decimal:","},es:{y:function(n){return"año"+(1===n?"":"s")},mo:function(n){return"mes"+(1===n?"":"es")},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"día"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milisegundo"+(1===n?"":"s")},decimal:","},et:{y:function(n){return"aasta"+(1===n?"":"t")},mo:function(n){return"kuu"+(1===n?"":"d")},w:function(n){return"nädal"+(1===n?"":"at")},d:function(n){return"päev"+(1===n?"":"a")},h:function(n){return"tund"+(1===n?"":"i")},m:function(n){return"minut"+(1===n?"":"it")},s:function(n){return"sekund"+(1===n?"":"it")},ms:function(n){return"millisekund"+(1===n?"":"it")},decimal:","},eu:{y:"urte",mo:"hilabete",w:"aste",d:"egun",h:"ordu",m:"minutu",s:"segundo",ms:"milisegundo",decimal:","},fa:{y:"سال",mo:"ماه",w:"هفته",d:"روز",h:"ساعت",m:"دقیقه",s:"ثانیه",ms:"میلی ثانیه",decimal:"."},fi:{y:function(n){return 1===n?"vuosi":"vuotta"},mo:function(n){return 1===n?"kuukausi":"kuukautta"},w:function(n){return"viikko"+(1===n?"":"a")},d:function(n){return"päivä"+(1===n?"":"ä")},h:function(n){return"tunti"+(1===n?"":"a")},m:function(n){return"minuutti"+(1===n?"":"a")},s:function(n){return"sekunti"+(1===n?"":"a")},ms:function(n){return"millisekunti"+(1===n?"":"a")},decimal:","},fo:{y:"ár",mo:function(n){return 1===n?"mánaður":"mánaðir"},w:function(n){return 1===n?"vika":"vikur"},d:function(n){return 1===n?"dagur":"dagar"},h:function(n){return 1===n?"tími":"tímar"},m:function(n){return 1===n?"minuttur":"minuttir"},s:"sekund",ms:"millisekund",decimal:","},fr:{y:function(n){return"an"+(n>=2?"s":"")},mo:"mois",w:function(n){return"semaine"+(n>=2?"s":"")},d:function(n){return"jour"+(n>=2?"s":"")},h:function(n){return"heure"+(n>=2?"s":"")},m:function(n){return"minute"+(n>=2?"s":"")},s:function(n){return"seconde"+(n>=2?"s":"")},ms:function(n){return"milliseconde"+(n>=2?"s":"")},decimal:","},gr:i,he:{y:function(n){return 1===n?"שנה":"שנים"},mo:function(n){return 1===n?"חודש":"חודשים"},w:function(n){return 1===n?"שבוע":"שבועות"},d:function(n){return 1===n?"יום":"ימים"},h:function(n){return 1===n?"שעה":"שעות"},m:function(n){return 1===n?"דקה":"דקות"},s:function(n){return 1===n?"שניה":"שניות"},ms:function(n){return 1===n?"מילישנייה":"מילישניות"},decimal:"."},hr:{y:function(n){return n%10===2||n%10===3||n%10===4?"godine":"godina"},mo:function(n){return 1===n?"mjesec":2===n||3===n||4===n?"mjeseca":"mjeseci"},w:function(n){return n%10===1&&11!==n?"tjedan":"tjedna"},d:function(n){return 1===n?"dan":"dana"},h:function(n){return 1===n?"sat":2===n||3===n||4===n?"sata":"sati"},m:function(n){var t=n%10;return 2!==t&&3!==t&&4!==t||!(n<10||n>14)?"minuta":"minute"},s:function(n){var t=n%10;return 5===t||Math.floor(n)===n&&n>=10&&n<=19?"sekundi":1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi"},ms:function(n){return 1===n?"milisekunda":n%10===2||n%10===3||n%10===4?"milisekunde":"milisekundi"},decimal:","},hi:{y:"साल",mo:function(n){return 1===n?"महीना":"महीने"},w:function(n){return 1===n?"हफ़्ता":"हफ्ते"},d:"दिन",h:function(n){return 1===n?"घंटा":"घंटे"},m:"मिनट",s:"सेकंड",ms:"मिलीसेकंड",decimal:"."},hu:{y:"év",mo:"hónap",w:"hét",d:"nap",h:"óra",m:"perc",s:"másodperc",ms:"ezredmásodperc",decimal:","},id:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"menit",s:"detik",ms:"milidetik",decimal:"."},is:{y:"ár",mo:function(n){return"mánuð"+(1===n?"ur":"ir")},w:function(n){return"vik"+(1===n?"a":"ur")},d:function(n){return"dag"+(1===n?"ur":"ar")},h:function(n){return"klukkutím"+(1===n?"i":"ar")},m:function(n){return"mínút"+(1===n?"a":"ur")},s:function(n){return"sekúnd"+(1===n?"a":"ur")},ms:function(n){return"millisekúnd"+(1===n?"a":"ur")},decimal:"."},it:{y:function(n){return"ann"+(1===n?"o":"i")},mo:function(n){return"mes"+(1===n?"e":"i")},w:function(n){return"settiman"+(1===n?"a":"e")},d:function(n){return"giorn"+(1===n?"o":"i")},h:function(n){return"or"+(1===n?"a":"e")},m:function(n){return"minut"+(1===n?"o":"i")},s:function(n){return"second"+(1===n?"o":"i")},ms:function(n){return"millisecond"+(1===n?"o":"i")},decimal:","},ja:{y:"年",mo:"月",w:"週",d:"日",h:"時間",m:"分",s:"秒",ms:"ミリ秒",decimal:"."},km:{y:"ឆ្នាំ",mo:"ខែ",w:"សប្តាហ៍",d:"ថ្ងៃ",h:"ម៉ោង",m:"នាទី",s:"វិនាទី",ms:"មិល្លីវិនាទី"},kn:{y:function(n){return 1===n?"ವರ್ಷ":"ವರ್ಷಗಳು"},mo:function(n){return 1===n?"ತಿಂಗಳು":"ತಿಂಗಳುಗಳು"},w:function(n){return 1===n?"ವಾರ":"ವಾರಗಳು"},d:function(n){return 1===n?"ದಿನ":"ದಿನಗಳು"},h:function(n){return 1===n?"ಗಂಟೆ":"ಗಂಟೆಗಳು"},m:function(n){return 1===n?"ನಿಮಿಷ":"ನಿಮಿಷಗಳು"},s:function(n){return 1===n?"ಸೆಕೆಂಡ್":"ಸೆಕೆಂಡುಗಳು"},ms:function(n){return 1===n?"ಮಿಲಿಸೆಕೆಂಡ್":"ಮಿಲಿಸೆಕೆಂಡುಗಳು"}},ko:{y:"년",mo:"개월",w:"주일",d:"일",h:"시간",m:"분",s:"초",ms:"밀리 초",decimal:"."},ku:{y:"sal",mo:"meh",w:"hefte",d:"roj",h:"seet",m:"deqe",s:"saniye",ms:"mîlîçirk",decimal:","},lo:{y:"ປີ",mo:"ເດືອນ",w:"ອາທິດ",d:"ມື້",h:"ຊົ່ວໂມງ",m:"ນາທີ",s:"ວິນາທີ",ms:"ມິນລິວິນາທີ",decimal:","},lt:{y:function(n){return n%10===0||n%100>=10&&n%100<=20?"metų":"metai"},mo:function(n){return["mėnuo","mėnesiai","mėnesių"][k(n)]},w:function(n){return["savaitė","savaitės","savaičių"][k(n)]},d:function(n){return["diena","dienos","dienų"][k(n)]},h:function(n){return["valanda","valandos","valandų"][k(n)]},m:function(n){return["minutė","minutės","minučių"][k(n)]},s:function(n){return["sekundė","sekundės","sekundžių"][k(n)]},ms:function(n){return["milisekundė","milisekundės","milisekundžių"][k(n)]},decimal:","},lv:{y:function(n){return v(n)?"gads":"gadi"},mo:function(n){return v(n)?"mēnesis":"mēneši"},w:function(n){return v(n)?"nedēļa":"nedēļas"},d:function(n){return v(n)?"diena":"dienas"},h:function(n){return v(n)?"stunda":"stundas"},m:function(n){return v(n)?"minūte":"minūtes"},s:function(n){return v(n)?"sekunde":"sekundes"},ms:function(n){return v(n)?"milisekunde":"milisekundes"},decimal:","},mk:{y:function(n){return 1===n?"година":"години"},mo:function(n){return 1===n?"месец":"месеци"},w:function(n){return 1===n?"недела":"недели"},d:function(n){return 1===n?"ден":"дена"},h:function(n){return 1===n?"час":"часа"},m:function(n){return 1===n?"минута":"минути"},s:function(n){return 1===n?"секунда":"секунди"},ms:function(n){return 1===n?"милисекунда":"милисекунди"},decimal:","},mr:{y:function(n){return 1===n?"वर्ष":"वर्षे"},mo:function(n){return 1===n?"महिना":"महिने"},w:function(n){return 1===n?"आठवडा":"आठवडे"},d:"दिवस",h:"तास",m:function(n){return 1===n?"मिनिट":"मिनिटे"},s:"सेकंद",ms:"मिलिसेकंद"},ms:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"minit",s:"saat",ms:"milisaat",decimal:"."},nl:{y:"jaar",mo:function(n){return 1===n?"maand":"maanden"},w:function(n){return 1===n?"week":"weken"},d:function(n){return 1===n?"dag":"dagen"},h:"uur",m:function(n){return 1===n?"minuut":"minuten"},s:function(n){return 1===n?"seconde":"seconden"},ms:function(n){return 1===n?"milliseconde":"milliseconden"},decimal:","},no:{y:"år",mo:function(n){return"måned"+(1===n?"":"er")},w:function(n){return"uke"+(1===n?"":"r")},d:function(n){return"dag"+(1===n?"":"er")},h:function(n){return"time"+(1===n?"":"r")},m:function(n){return"minutt"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},pl:{y:function(n){return["rok","roku","lata","lat"][h(n)]},mo:function(n){return["miesiąc","miesiąca","miesiące","miesięcy"][h(n)]},w:function(n){return["tydzień","tygodnia","tygodnie","tygodni"][h(n)]},d:function(n){return["dzień","dnia","dni","dni"][h(n)]},h:function(n){return["godzina","godziny","godziny","godzin"][h(n)]},m:function(n){return["minuta","minuty","minuty","minut"][h(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][h(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][h(n)]},decimal:","},pt:{y:function(n){return"ano"+(1===n?"":"s")},mo:function(n){return 1===n?"mês":"meses"},w:function(n){return"semana"+(1===n?"":"s")},d:function(n){return"dia"+(1===n?"":"s")},h:function(n){return"hora"+(1===n?"":"s")},m:function(n){return"minuto"+(1===n?"":"s")},s:function(n){return"segundo"+(1===n?"":"s")},ms:function(n){return"milissegundo"+(1===n?"":"s")},decimal:","},ro:{y:function(n){return 1===n?"an":"ani"},mo:function(n){return 1===n?"lună":"luni"},w:function(n){return 1===n?"săptămână":"săptămâni"},d:function(n){return 1===n?"zi":"zile"},h:function(n){return 1===n?"oră":"ore"},m:function(n){return 1===n?"minut":"minute"},s:function(n){return 1===n?"secundă":"secunde"},ms:function(n){return 1===n?"milisecundă":"milisecunde"},decimal:","},ru:{y:function(n){return["лет","год","года"][y(n)]},mo:function(n){return["месяцев","месяц","месяца"][y(n)]},w:function(n){return["недель","неделя","недели"][y(n)]},d:function(n){return["дней","день","дня"][y(n)]},h:function(n){return["часов","час","часа"][y(n)]},m:function(n){return["минут","минута","минуты"][y(n)]},s:function(n){return["секунд","секунда","секунды"][y(n)]},ms:function(n){return["миллисекунд","миллисекунда","миллисекунды"][y(n)]},decimal:","},sq:{y:function(n){return 1===n?"vit":"vjet"},mo:"muaj",w:"javë",d:"ditë",h:"orë",m:function(n){return"minut"+(1===n?"ë":"a")},s:function(n){return"sekond"+(1===n?"ë":"a")},ms:function(n){return"milisekond"+(1===n?"ë":"a")},decimal:","},sr:{y:function(n){return["години","година","године"][y(n)]},mo:function(n){return["месеци","месец","месеца"][y(n)]},w:function(n){return["недељи","недеља","недеље"][y(n)]},d:function(n){return["дани","дан","дана"][y(n)]},h:function(n){return["сати","сат","сата"][y(n)]},m:function(n){return["минута","минут","минута"][y(n)]},s:function(n){return["секунди","секунда","секунде"][y(n)]},ms:function(n){return["милисекунди","милисекунда","милисекунде"][y(n)]},decimal:","},ta:{y:function(n){return 1===n?"வருடம்":"ஆண்டுகள்"},mo:function(n){return 1===n?"மாதம்":"மாதங்கள்"},w:function(n){return 1===n?"வாரம்":"வாரங்கள்"},d:function(n){return 1===n?"நாள்":"நாட்கள்"},h:function(n){return 1===n?"மணி":"மணிநேரம்"},m:function(n){return"நிமிட"+(1===n?"ம்":"ங்கள்")},s:function(n){return"வினாடி"+(1===n?"":"கள்")},ms:function(n){return"மில்லி விநாடி"+(1===n?"":"கள்")}},te:{y:function(n){return"సంవత్స"+(1===n?"రం":"రాల")},mo:function(n){return"నెల"+(1===n?"":"ల")},w:function(n){return 1===n?"వారం":"వారాలు"},d:function(n){return"రోజు"+(1===n?"":"లు")},h:function(n){return"గంట"+(1===n?"":"లు")},m:function(n){return 1===n?"నిమిషం":"నిమిషాలు"},s:function(n){return 1===n?"సెకను":"సెకన్లు"},ms:function(n){return 1===n?"మిల్లీసెకన్":"మిల్లీసెకన్లు"}},uk:{y:function(n){return["років","рік","роки"][y(n)]},mo:function(n){return["місяців","місяць","місяці"][y(n)]},w:function(n){return["тижнів","тиждень","тижні"][y(n)]},d:function(n){return["днів","день","дні"][y(n)]},h:function(n){return["годин","година","години"][y(n)]},m:function(n){return["хвилин","хвилина","хвилини"][y(n)]},s:function(n){return["секунд","секунда","секунди"][y(n)]},ms:function(n){return["мілісекунд","мілісекунда","мілісекунди"][y(n)]},decimal:","},ur:{y:"سال",mo:function(n){return 1===n?"مہینہ":"مہینے"},w:function(n){return 1===n?"ہفتہ":"ہفتے"},d:"دن",h:function(n){return 1===n?"گھنٹہ":"گھنٹے"},m:"منٹ",s:"سیکنڈ",ms:"ملی سیکنڈ",decimal:"."},sk:{y:function(n){return["rok","roky","roky","rokov"][p(n)]},mo:function(n){return["mesiac","mesiace","mesiace","mesiacov"][p(n)]},w:function(n){return["týždeň","týždne","týždne","týždňov"][p(n)]},d:function(n){return["deň","dni","dni","dní"][p(n)]},h:function(n){return["hodina","hodiny","hodiny","hodín"][p(n)]},m:function(n){return["minúta","minúty","minúty","minút"][p(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekúnd"][p(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekúnd"][p(n)]},decimal:","},sl:{y:function(n){return n%10===1?"leto":n%100===2?"leti":n%100===3||n%100===4||Math.floor(n)!==n&&n%100<=5?"leta":"let"},mo:function(n){return n%10===1?"mesec":n%100===2||Math.floor(n)!==n&&n%100<=5?"meseca":n%10===3||n%10===4?"mesece":"mesecev"},w:function(n){return n%10===1?"teden":n%10===2||Math.floor(n)!==n&&n%100<=4?"tedna":n%10===3||n%10===4?"tedne":"tednov"},d:function(n){return n%100===1?"dan":"dni"},h:function(n){return n%10===1?"ura":n%100===2?"uri":n%10===3||n%10===4||Math.floor(n)!==n?"ure":"ur"},m:function(n){return n%10===1?"minuta":n%10===2?"minuti":n%10===3||n%10===4||Math.floor(n)!==n&&n%100<=4?"minute":"minut"},s:function(n){return n%10===1?"sekunda":n%100===2?"sekundi":n%100===3||n%100===4||Math.floor(n)!==n?"sekunde":"sekund"},ms:function(n){return n%10===1?"milisekunda":n%100===2?"milisekundi":n%100===3||n%100===4||Math.floor(n)!==n?"milisekunde":"milisekund"},decimal:","},sv:{y:"år",mo:function(n){return"månad"+(1===n?"":"er")},w:function(n){return"veck"+(1===n?"a":"or")},d:function(n){return"dag"+(1===n?"":"ar")},h:function(n){return"timm"+(1===n?"e":"ar")},m:function(n){return"minut"+(1===n?"":"er")},s:function(n){return"sekund"+(1===n?"":"er")},ms:function(n){return"millisekund"+(1===n?"":"er")},decimal:","},sw:{y:function(n){return 1===n?"mwaka":"miaka"},mo:function(n){return 1===n?"mwezi":"miezi"},w:"wiki",d:function(n){return 1===n?"siku":"masiku"},h:function(n){return 1===n?"saa":"masaa"},m:"dakika",s:"sekunde",ms:"milisekunde",decimal:"."},tr:{y:"yıl",mo:"ay",w:"hafta",d:"gün",h:"saat",m:"dakika",s:"saniye",ms:"milisaniye",decimal:","},th:{y:"ปี",mo:"เดือน",w:"สัปดาห์",d:"วัน",h:"ชั่วโมง",m:"นาที",s:"วินาที",ms:"มิลลิวินาที",decimal:"."},vi:{y:"năm",mo:"tháng",w:"tuần",d:"ngày",h:"giờ",m:"phút",s:"giây",ms:"mili giây",decimal:","},zh_CN:{y:"年",mo:"个月",w:"周",d:"天",h:"小时",m:"分钟",s:"秒",ms:"毫秒",decimal:"."},zh_TW:{y:"年",mo:"個月",w:"周",d:"天",h:"小時",m:"分鐘",s:"秒",ms:"毫秒",decimal:"."}};function o(n){var t=function(n,e){var r=f({},t,e||{});return l(n,r)};return f(t,{language:"en",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},n)}var c=o({});function s(n){var t=[n.language];if(b(n,"fallbacks")){if(!g(n.fallbacks)||!n.fallbacks.length)throw new Error("fallbacks must be an array with at least one element");t=t.concat(n.fallbacks)}for(var e=0;e<t.length;e++){var r=t[e];if(b(n.languages,r))return n.languages[r];if(b(a,r))return a[r]}throw new Error("No language found.")}function l(n,t){var e,r,i;n=Math.abs(n);var u,a,o,c=s(t),l=[];for(e=0,r=t.units.length;e<r;e++){if(u=t.units[e],a=t.unitMeasures[u],e+1===r)if(b(t,"maxDecimalPoints")){var f=Math.pow(10,t.maxDecimalPoints),d=n/a;o=parseFloat((Math.floor(f*d)/f).toFixed(t.maxDecimalPoints))}else o=n/a;else o=Math.floor(n/a);l.push({unitCount:o,unitName:u}),n-=o*a}var h,y,p=0;for(e=0;e<l.length;e++)if(l[e].unitCount){p=e;break}if(t.round)for(e=l.length-1;e>=0;e--){if(i=l[e],i.unitCount=Math.round(i.unitCount),0===e)break;y=l[e-1],h=t.unitMeasures[y.unitName]/t.unitMeasures[i.unitName],(i.unitCount%h===0||t.largest&&t.largest-1<e-p)&&(y.unitCount+=i.unitCount/h,i.unitCount=0)}var k,v=[];for(e=0,l.length;e<r;e++)if(i=l[e],i.unitCount&&v.push(m(i.unitCount,i.unitName,c,t)),v.length===t.largest)break;return v.length?(k=b(t,"delimiter")?t.delimiter:b(c,"delimiter")?c.delimiter:", ",t.conjunction&&1!==v.length?2===v.length?v.join(t.conjunction):v.length>2?v.slice(0,-1).join(k)+(t.serialComma?",":"")+t.conjunction+v.slice(-1):void 0:v.join(k)):m(0,t.units[t.units.length-1],c,t)}function m(n,t,e,r){var i,u;i=b(r,"decimal")?r.decimal:b(e,"decimal")?e.decimal:".",u="function"===typeof e._formatCount?e._formatCount(n,i):n.toString().replace(".",i);var a,o=e[t];return a="function"===typeof o?o(n):o,u+r.spacer+a}function f(n){for(var t,e=1;e<arguments.length;e++)for(var r in t=arguments[e],t)b(t,r)&&(n[r]=t[r]);return n}function d(n){return 1===n?0:2===n?1:n>2&&n<11?2:0}function h(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}function y(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10===0?0:n%10===1?1:n>1?2:0}function p(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}function k(n){return 1===n||n%10===1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}function v(n){return n%10===1&&n%100!==11}var g=Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)};function b(n,t){return Object.prototype.hasOwnProperty.call(n,t)}c.getSupportedLanguages=function(){var n=[];for(var t in a)b(a,t)&&"gr"!==t&&n.push(t);return n},c.humanizer=o,r=function(){return c}.call(t,e,t,n),void 0===r||(n.exports=r)})()},d1b0:function(n,t,e){"use strict";e("1aaf")}}]);