(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InfoQuest"],{"0f8a":function(t,e,a){"use strict";a("820f")},"1f03":function(t,e,a){"use strict";t.exports=function(t){t.prototype[Symbol.iterator]=function*(){for(let t=this.head;t;t=t.next)yield t.value}}},"1f25":function(t,e,a){"use strict";const l=a("5cf7"),r=Symbol("max"),s=Symbol("length"),i=Symbol("lengthCalculator"),n=Symbol("allowStale"),o=Symbol("maxAge"),u=Symbol("dispose"),h=Symbol("noDisposeOnSet"),c=Symbol("lruList"),d=Symbol("cache"),f=Symbol("updateAgeOnGet"),p=()=>1;class v{constructor(t){if("number"===typeof t&&(t={max:t}),t||(t={}),t.max&&("number"!==typeof t.max||t.max<0))throw new TypeError("max must be a non-negative number");this[r]=t.max||1/0;const e=t.length||p;if(this[i]="function"!==typeof e?p:e,this[n]=t.stale||!1,t.maxAge&&"number"!==typeof t.maxAge)throw new TypeError("maxAge must be a number");this[o]=t.maxAge||0,this[u]=t.dispose,this[h]=t.noDisposeOnSet||!1,this[f]=t.updateAgeOnGet||!1,this.reset()}set max(t){if("number"!==typeof t||t<0)throw new TypeError("max must be a non-negative number");this[r]=t||1/0,_(this)}get max(){return this[r]}set allowStale(t){this[n]=!!t}get allowStale(){return this[n]}set maxAge(t){if("number"!==typeof t)throw new TypeError("maxAge must be a non-negative number");this[o]=t,_(this)}get maxAge(){return this[o]}set lengthCalculator(t){"function"!==typeof t&&(t=p),t!==this[i]&&(this[i]=t,this[s]=0,this[c].forEach(t=>{t.length=this[i](t.value,t.key),this[s]+=t.length})),_(this)}get lengthCalculator(){return this[i]}get length(){return this[s]}get itemCount(){return this[c].length}rforEach(t,e){e=e||this;for(let a=this[c].tail;null!==a;){const l=a.prev;C(this,t,a,e),a=l}}forEach(t,e){e=e||this;for(let a=this[c].head;null!==a;){const l=a.next;C(this,t,a,e),a=l}}keys(){return this[c].toArray().map(t=>t.key)}values(){return this[c].toArray().map(t=>t.value)}reset(){this[u]&&this[c]&&this[c].length&&this[c].forEach(t=>this[u](t.key,t.value)),this[d]=new Map,this[c]=new l,this[s]=0}dump(){return this[c].map(t=>!m(this,t)&&{k:t.key,v:t.value,e:t.now+(t.maxAge||0)}).toArray().filter(t=>t)}dumpLru(){return this[c]}set(t,e,a){if(a=a||this[o],a&&"number"!==typeof a)throw new TypeError("maxAge must be a number");const l=a?Date.now():0,n=this[i](e,t);if(this[d].has(t)){if(n>this[r])return w(this,this[d].get(t)),!1;const i=this[d].get(t),o=i.value;return this[u]&&(this[h]||this[u](t,o.value)),o.now=l,o.maxAge=a,o.value=e,this[s]+=n-o.length,o.length=n,this.get(t),_(this),!0}const f=new y(t,e,n,l,a);return f.length>this[r]?(this[u]&&this[u](t,e),!1):(this[s]+=f.length,this[c].unshift(f),this[d].set(t,this[c].head),_(this),!0)}has(t){if(!this[d].has(t))return!1;const e=this[d].get(t).value;return!m(this,e)}get(t){return g(this,t,!0)}peek(t){return g(this,t,!1)}pop(){const t=this[c].tail;return t?(w(this,t),t.value):null}del(t){w(this,this[d].get(t))}load(t){this.reset();const e=Date.now();for(let a=t.length-1;a>=0;a--){const l=t[a],r=l.e||0;if(0===r)this.set(l.k,l.v);else{const t=r-e;t>0&&this.set(l.k,l.v,t)}}}prune(){this[d].forEach((t,e)=>g(this,e,!1))}}const g=(t,e,a)=>{const l=t[d].get(e);if(l){const e=l.value;if(m(t,e)){if(w(t,l),!t[n])return}else a&&(t[f]&&(l.value.now=Date.now()),t[c].unshiftNode(l));return e.value}},m=(t,e)=>{if(!e||!e.maxAge&&!t[o])return!1;const a=Date.now()-e.now;return e.maxAge?a>e.maxAge:t[o]&&a>t[o]},_=t=>{if(t[s]>t[r])for(let e=t[c].tail;t[s]>t[r]&&null!==e;){const a=e.prev;w(t,e),e=a}},w=(t,e)=>{if(e){const a=e.value;t[u]&&t[u](a.key,a.value),t[s]-=a.length,t[d].delete(a.key),t[c].removeNode(e)}};class y{constructor(t,e,a,l,r){this.key=t,this.value=e,this.length=a,this.now=l,this.maxAge=r||0}}const C=(t,e,a,l)=>{let r=a.value;m(t,r)&&(w(t,a),t[n]||(r=void 0)),r&&e.call(l,r.value,r.key,t)};t.exports=v},"5cf7":function(t,e,a){"use strict";function l(t){var e=this;if(e instanceof l||(e=new l),e.tail=null,e.head=null,e.length=0,t&&"function"===typeof t.forEach)t.forEach((function(t){e.push(t)}));else if(arguments.length>0)for(var a=0,r=arguments.length;a<r;a++)e.push(arguments[a]);return e}function r(t,e,a){var l=e===t.head?new n(a,null,e,t):new n(a,e,e.next,t);return null===l.next&&(t.tail=l),null===l.prev&&(t.head=l),t.length++,l}function s(t,e){t.tail=new n(e,t.tail,null,t),t.head||(t.head=t.tail),t.length++}function i(t,e){t.head=new n(e,null,t.head,t),t.tail||(t.tail=t.head),t.length++}function n(t,e,a,l){if(!(this instanceof n))return new n(t,e,a,l);this.list=l,this.value=t,e?(e.next=this,this.prev=e):this.prev=null,a?(a.prev=this,this.next=a):this.next=null}t.exports=l,l.Node=n,l.create=l,l.prototype.removeNode=function(t){if(t.list!==this)throw new Error("removing node which does not belong to this list");var e=t.next,a=t.prev;return e&&(e.prev=a),a&&(a.next=e),t===this.head&&(this.head=e),t===this.tail&&(this.tail=a),t.list.length--,t.next=null,t.prev=null,t.list=null,e},l.prototype.unshiftNode=function(t){if(t!==this.head){t.list&&t.list.removeNode(t);var e=this.head;t.list=this,t.next=e,e&&(e.prev=t),this.head=t,this.tail||(this.tail=t),this.length++}},l.prototype.pushNode=function(t){if(t!==this.tail){t.list&&t.list.removeNode(t);var e=this.tail;t.list=this,t.prev=e,e&&(e.next=t),this.tail=t,this.head||(this.head=t),this.length++}},l.prototype.push=function(){for(var t=0,e=arguments.length;t<e;t++)s(this,arguments[t]);return this.length},l.prototype.unshift=function(){for(var t=0,e=arguments.length;t<e;t++)i(this,arguments[t]);return this.length},l.prototype.pop=function(){if(this.tail){var t=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,t}},l.prototype.shift=function(){if(this.head){var t=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,t}},l.prototype.forEach=function(t,e){e=e||this;for(var a=this.head,l=0;null!==a;l++)t.call(e,a.value,l,this),a=a.next},l.prototype.forEachReverse=function(t,e){e=e||this;for(var a=this.tail,l=this.length-1;null!==a;l--)t.call(e,a.value,l,this),a=a.prev},l.prototype.get=function(t){for(var e=0,a=this.head;null!==a&&e<t;e++)a=a.next;if(e===t&&null!==a)return a.value},l.prototype.getReverse=function(t){for(var e=0,a=this.tail;null!==a&&e<t;e++)a=a.prev;if(e===t&&null!==a)return a.value},l.prototype.map=function(t,e){e=e||this;for(var a=new l,r=this.head;null!==r;)a.push(t.call(e,r.value,this)),r=r.next;return a},l.prototype.mapReverse=function(t,e){e=e||this;for(var a=new l,r=this.tail;null!==r;)a.push(t.call(e,r.value,this)),r=r.prev;return a},l.prototype.reduce=function(t,e){var a,l=this.head;if(arguments.length>1)a=e;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");l=this.head.next,a=this.head.value}for(var r=0;null!==l;r++)a=t(a,l.value,r),l=l.next;return a},l.prototype.reduceReverse=function(t,e){var a,l=this.tail;if(arguments.length>1)a=e;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");l=this.tail.prev,a=this.tail.value}for(var r=this.length-1;null!==l;r--)a=t(a,l.value,r),l=l.prev;return a},l.prototype.toArray=function(){for(var t=new Array(this.length),e=0,a=this.head;null!==a;e++)t[e]=a.value,a=a.next;return t},l.prototype.toArrayReverse=function(){for(var t=new Array(this.length),e=0,a=this.tail;null!==a;e++)t[e]=a.value,a=a.prev;return t},l.prototype.slice=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var a=new l;if(e<t||e<0)return a;t<0&&(t=0),e>this.length&&(e=this.length);for(var r=0,s=this.head;null!==s&&r<t;r++)s=s.next;for(;null!==s&&r<e;r++,s=s.next)a.push(s.value);return a},l.prototype.sliceReverse=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var a=new l;if(e<t||e<0)return a;t<0&&(t=0),e>this.length&&(e=this.length);for(var r=this.length,s=this.tail;null!==s&&r>e;r--)s=s.prev;for(;null!==s&&r>t;r--,s=s.prev)a.push(s.value);return a},l.prototype.splice=function(t,e,...a){t>this.length&&(t=this.length-1),t<0&&(t=this.length+t);for(var l=0,s=this.head;null!==s&&l<t;l++)s=s.next;var i=[];for(l=0;s&&l<e;l++)i.push(s.value),s=this.removeNode(s);null===s&&(s=this.tail),s!==this.head&&s!==this.tail&&(s=s.prev);for(l=0;l<a.length;l++)s=r(this,s,a[l]);return i},l.prototype.reverse=function(){for(var t=this.head,e=this.tail,a=t;null!==a;a=a.prev){var l=a.prev;a.prev=a.next,a.next=l}return this.head=e,this.tail=t,this};try{a("1f03")(l)}catch(o){}},"820f":function(t,e,a){},"926b":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.questDialogLoading,expression:"questDialogLoading"}],attrs:{id:"quest-dialog",title:"","lock-scroll":!1,"destroy-on-close":!0,top:"0",visible:t.questDialogVisible,width:"80%",fullscreen:!(!t.md.mobile()&&!t.md.tablet())},on:{"update:visible":function(e){t.questDialogVisible=e}}},[t.selectedQuest?a("el-divider",[a("h3",[t._v(t._s(t.selectedQuest.NAME))])]):t._e(),a("el-table",{attrs:{data:t.questDialogs,"show-header":!1}},[a("el-table-column",{attrs:{width:"210px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.characterDf?a("img",{staticClass:"dialog-character-image",attrs:{src:"img/icon_chara/Texture2D/icon_chara_all_"+e.row.characterDf.toString().padStart(4,"0")+"_00.png",alt:t.dataManager.characterById[e.row.characterDf]?t.dataManager.characterById[e.row.characterDf].NAME:e.row.characterDf}}):t._e()]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.order===t.EOrderType.eCHARA_TALK?a("div",[a("h4",[t._v(t._s(t.replaceWithPlayerName(e.row.name)))]),a("p",[t._v(t._s(t.replaceWithPlayerName(e.row.dialog)))]),e.row.voice&&t.dataManager.files.audios.voice[e.row.voice+".wav"]?a("audio",{attrs:{controls:""}},[a("source",{attrs:{src:"audios/voice/"+e.row.voice+".wav",type:"audio/mpeg"}})]):t._e()]):e.row.order===t.EOrderType.eSELECTION?a("div",[a("h4",[t._v(t._s(t.$t("選択")))]),t._l(e.row.options,(function(e){return a("p",[t._v(t._s(t.replaceWithPlayerName(e)))])}))],2):e.row.order===t.EOrderType.eBG?a("div",[a("h4",[t._v(t._s(t.$t("背景")))]),a("p",[t._v(t._s(t.replaceWithPlayerName(e.row.text1||"")))]),a("p",[t._v(t._s(t.replaceWithPlayerName(e.row.text2||"")))])]):e.row.order===t.EOrderType.eMUSIC?a("div",[a("h4",[t._v(t._s(t.$t("音楽")))]),a("p",[t._v(t._s(t.eMusicID[e.row.id]||"-"))]),e.row.id>0&&t.dataManager.files.audios.music[e.row.id+".wav"]?a("audio",{attrs:{controls:""}},[a("source",{attrs:{src:"audios/music/"+e.row.id+".wav",type:"audio/mpeg"}})]):t._e()]):t._e()]}}])})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.questDialogVisible=!1}}},[t._v(t._s(t.$t("閉じる")))])],1)],1),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[t._v(t._s(t.$t("カテゴリー")))]),a("el-select",{attrs:{clearable:"",filterable:""},on:{change:t.resetPage},model:{value:t.filter.category,callback:function(e){t.$set(t.filter,"category",e)},expression:"filter.category"}},t._l(t.categoryFilter,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[t._v(t._s(t.$t("キャラクター")))]),a("el-select",{attrs:{clearable:"",filterable:""},on:{change:t.resetPage},model:{value:t.filter.character,callback:function(e){t.$set(t.filter,"character",e)},expression:"filter.character"}},t._l(t.characterFilter,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[t._v(t._s(t.$t("名前"))+"/DF")]),a("el-input",{attrs:{clearable:""},on:{change:t.resetPage},model:{value:t.filter.name,callback:function(e){t.$set(t.filter,"name",e)},expression:"filter.name"}})],1),a("div",{staticClass:"filter"},[a("el-switch",{attrs:{"active-text":t.$t("EXクェスト")},on:{change:t.resetPage},model:{value:t.filter.extraQuest,callback:function(e){t.$set(t.filter,"extraQuest",e)},expression:"filter.extraQuest"}})],1),a("div",{staticClass:"filter"},[a("el-switch",{attrs:{"active-text":t.$t("すべて展開")},model:{value:t.defaultExpandAll,callback:function(e){t.defaultExpandAll=e},expression:"defaultExpandAll"}})],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},on:{change:t.resetPage},model:{value:t.filter.has,callback:function(e){t.$set(t.filter,"has",e)},expression:"filter.has"}},t._l(t.hasFilter,(function(e){return a("el-checkbox-button",{key:e.value,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox",{model:{value:t.showColumnDF,callback:function(e){t.showColumnDF=e},expression:"showColumnDF"}},[t._v("DF")]),a("el-checkbox",{model:{value:t.showColumnNAME,callback:function(e){t.showColumnNAME=e},expression:"showColumnNAME"}},[t._v(t._s(t.$t("名前")))]),a("el-checkbox",{model:{value:t.showColumnCATEG,callback:function(e){t.showColumnCATEG=e},expression:"showColumnCATEG"}},[t._v(t._s(t.$t("カテゴリー")))]),a("el-checkbox",{model:{value:t.showColumnCOST,callback:function(e){t.showColumnCOST=e},expression:"showColumnCOST"}},[t._v(t._s(t.$t("消費")))]),a("el-checkbox",{model:{value:t.showColumnENM,callback:function(e){t.showColumnENM=e},expression:"showColumnENM"}},[t._v(t._s(t.$t("討伐")))]),a("el-checkbox",{model:{value:t.showColumnGET,callback:function(e){t.showColumnGET=e},expression:"showColumnGET"}},[t._v(t._s(t.$t("調合/採取")))]),a("el-checkbox",{model:{value:t.showColumnDLV,callback:function(e){t.showColumnDLV=e},expression:"showColumnDLV"}},[t._v(t._s(""+t.$t("納品")+t.$t("報告")))]),a("el-checkbox",{model:{value:t.showColumnARA,callback:function(e){t.showColumnARA=e},expression:"showColumnARA"}},[t._v(t._s(""+t.$t("場所に行く")))]),a("el-checkbox",{model:{value:t.showColumnDialog,callback:function(e){t.showColumnDialog=e},expression:"showColumnDialog"}},[t._v(t._s(t.$t("ダイアログ")))]),a("el-checkbox",{model:{value:t.showColumnCharacter,callback:function(e){t.showColumnCharacter=e},expression:"showColumnCharacter"}},[t._v(t._s(t.$t("キャラクター")))])],1)]),a("div",{staticClass:"content"},[a("el-table",{ref:"table",staticClass:"quest-table",attrs:{data:t.filteredPaginationQuests,"default-expand-all":t.defaultExpandAll,"row-key":t.getRowKey},on:{"update:defaultExpandAll":function(e){t.defaultExpandAll=e},"update:default-expand-all":function(e){t.defaultExpandAll=e},"sort-change":t.onSortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l([e.row],(function(e){return[a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[e.CHARA?a("div",[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:e.CHARA}}}}),a("img",{staticClass:"icon-full",attrs:{src:t.dataManager.characterById[e.CHARA].icon,alt:t.dataManager.characterById[e.CHARA].NAME}})],1):t._e(),a("h3",[t._v(t._s(e.NAME))]),a("p",[t._v(t._s(e.DESC))]),a("br"),a("p",[t._v("DF: "+t._s(e.DF))]),a("p",[t._v(t._s(t.$t("種類"))+": "+t._s(t.$t(t.dataManager.lookup.EQuestCategory[e.CATEG])))]),e.TYPE?a("p",[t._v(t._s(t.$t("タイプ"))+": "+t._s(t.$t(t.dataManager.lookup.EQuestType[e.TYPE])))]):t._e(),a("p",[t._v(t._s(t.$t("解放チャプター"))+": "+t._s(e.CHAPTER?e.CHAPTER:"-"))]),a("p",[t._v(t._s(t.$t("キークェスト"))+": "+t._s(t.tickCross(e.KEY_QUEST)))]),a("p",[t._v(t._s(t.$t("重要"))+": "+t._s(t.tickCross(e.IMPORTANT)))]),a("p",[t._v(t._s(t.$t("挑戦"))+": "+t._s(t.tickCross(e.CHALLENGE)))]),e.AREA?a("p",[a("span",[t._v(t._s(t.$t("区域"))+": ")]),a("router-link",{attrs:{to:{name:"Areas",query:{df:e.AREA}},target:"_blank"}},[t._l([t.dataManager.areaInfoById[e.AREA]].filter((function(t){return t})),(function(e){return[t._l([t.dataManager.fieldNameById[e.iAreaNameId]].filter((function(t){return t})),(function(e){return[t._v(t._s(e.strAreaName))]}))]}))],2)],1):t._e()]),a("div",{staticClass:"item-container-right"},[e.CONDITION?a("div",[a("h4",[t._v(t._s(t.$t("達成條件")))]),a("p",[t._v(t._s(e.CONDITION))])]):t._e(),e.COST.WTH.CNT?a("div",[a("el-divider",[t._v(t._s(t.$t("消費")))]),a("el-tooltip",{attrs:{content:t.dataManager.wealthById[e.COST.WTH.DF].NAME,placement:"left"}},[a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:t.dataManager.wealthById[e.COST.WTH.DF].icon,alt:t.dataManager.wealthById[e.COST.WTH.DF].NAME}}),a("span",[t._v(t._s(e.COST.WTH.CNT))])])])],1):t._e(),e.ENM.length?a("div",[a("el-divider",[t._v(t._s(t.$t("討伐")))]),a("div",t._l(e.ENM.map((function(e){return[e,t.dataManager.enemyById[e.DF]]})).filter((function(t){return t[1]})),(function(e){var l=e[0],r=e[1];return a("div",{staticClass:"quest-kill-container"},[a("el-tooltip",{attrs:{content:r.strName,placement:"left"}},[a("router-link",{attrs:{to:{name:"EnemiesEnemy",query:{df:r.DF}},target:"_blank"}},[a("img",{attrs:{src:r.icon,alt:r.strName}}),a("span",[t._v("x "+t._s(l.BDR))])])],1)],1)})),0)],1):t._e(),e.GET.length?a("div",[a("el-divider",[t._v(t._s(t.$t("調合/採取")))]),a("div",t._l(e.GET.map((function(e){return[e,t.dataManager.itemById[e.DF]]})).filter((function(t){return t[1]})),(function(e){var l=e[0],r=e[1];return a("div",[a("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[a("router-link",{staticClass:"quest-reward-item-container",attrs:{to:{name:r.RSP.length?"ToolsComposeItem":"ItemsItem",query:{df:r.DF,quality:l.QTY}},target:"_blank"}},[a("p",[t._v(t._s(t.$t("品質"))+t._s(l.QTY))]),a("img",{attrs:{src:r.icon,alt:r.NAME}}),a("p",[t._v("x "+t._s(l.BDR))])])],1)],1)})),0)],1):t._e(),e.DLV.length?a("div",[a("el-divider",[t._v(t._s(t.$t("納品"))+"/"+t._s(t.$t("報告")))]),a("div",t._l(e.DLV.map((function(e){return[e,t.dataManager.itemById[e.DF]]})).filter((function(t){return t[1]})),(function(e){var l=e[0],r=e[1];return a("div",[a("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[a("router-link",{staticClass:"quest-reward-item-container",attrs:{to:{name:r.RSP.length?"ToolsComposeItem":"ItemsItem",query:{df:r.DF,quality:l.QTY}},target:"_blank"}},[a("p",[t._v(t._s(t.$t("品質"))+t._s(l.QTY))]),a("img",{attrs:{src:r.icon,alt:r.NAME}}),a("p",[t._v("x "+t._s(l.BDR))])])],1)],1)})),0)],1):t._e(),e.REG.length?a("div",[a("el-divider",[t._v(t._s(t.$t("場所に行く")))]),a("div",t._l(e.REG.map((function(e){return[e,t.dataManager.areaInfoById[e.DF]]})).filter((function(t){return t[1]})),(function(e){var l=e[0],r=e[1];return a("div",[a("router-link",{attrs:{to:{name:"Areas",query:{df:l.DF}},target:"_blank"}},[t.dataManager.fieldNameById[r.iAreaNameId]?a("span",[t._v(t._s(t.dataManager.fieldNameById[r.iAreaNameId].strAreaName))]):a("span",[t._v(t._s(r.iAreaNameId))])])],1)})),0)],1):t._e(),e.ARA.length?a("div",[a("el-divider",[t._v(t._s(t.$t("場所に行く")))]),a("div",t._l(e.ARA.map((function(e){return[e,t.dataManager.areaInfoById[e.AREA]]})).filter((function(t){return t[1]})),(function(e){var l=e[0],r=e[1];return a("div",[a("router-link",{attrs:{to:{name:"Areas",query:{df:l.AREA}},target:"_blank"}},[t.dataManager.fieldNameById[r.iAreaNameId]?a("span",[t._v(t._s(t.dataManager.fieldNameById[r.iAreaNameId].strAreaName))]):a("span",[t._v(t._s(r.iAreaNameId))])])],1)})),0)],1):t._e(),e.RWD_ITEM.length||e.RWD_WTH.length?a("div",[a("el-divider",[t._v(t._s(t.$t("報酬")))]),t._l(e.RWD_ITEM.map((function(e){return[e,t.dataManager.itemById[e.DF]]})).filter((function(t){return t[1]})),(function(e){var l=e[0],r=e[1];return a("div",[a("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[a("router-link",{staticClass:"quest-reward-item-container",attrs:{to:{name:"ItemsItem",query:{df:r.DF,quality:l.QTY}},target:"_blank"}},[a("p",[t._v(t._s(t.$t("品質"))+t._s(l.QTY))]),a("img",{attrs:{src:r.icon,alt:r.NAME}}),a("p",[t._v("x "+t._s(l.CNT))])])],1)],1)})),t._l(e.RWD_WTH.map((function(e){return[e,t.dataManager.wealthById[e.DF]]})),(function(e){var l=e[0],r=e[1];return a("div",[a("el-tooltip",{attrs:{content:r.NAME,placement:"left"}},[a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:r.icon,alt:r.NAME}}),a("span",[t._v(t._s(l.CNT))])])])],1)})),e.RNK_PT?a("div",[a("el-tooltip",{attrs:{content:t.dataManager.wealthById[9999].NAME,placement:"left"}},[a("span",{staticClass:"wealth-container"},[a("img",{attrs:{src:"img/icon_item01/Texture2D/icon_item01_00009.png",alt:t.dataManager.wealthById[9999].NAME}}),a("span",[t._v(t._s(e.RNK_PT))])])])],1):t._e()],2):t._e(),e.UNLOCK.length?a("div",[a("el-divider",[t._v(t._s(t.$t("必要称号")))]),t._l(e.UNLOCK.map((function(e){return[e,t.dataManager.degreeByIdStep[e.DF][e.STP]]})),(function(e){e[0];var l=e[1];return a("div",[a("el-tooltip",{attrs:{content:l.DESC,placement:"left"}},[a("span",{staticClass:"degree-container"},[l.TYP?a("img",{attrs:{src:l.icon,alt:l.NAME}}):t._e(),a("span",[t._v(t._s(l.NAME))])])])],1)}))],2):t._e(),e.PARTY_IN?a("div",[a("el-divider",[t._v(t._s(t.$t("必要キャラクター")))]),a("div",[a("el-tooltip",{attrs:{content:t.dataManager.characterById[e.PARTY_IN].NAME,placement:"left"}},[a("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:e.PARTY_IN}},target:"_blank"}},[a("img",{staticClass:"icon-middle",attrs:{src:t.dataManager.characterById[e.PARTY_IN].icon,alt:t.dataManager.characterById[e.PARTY_IN].NAME}})])],1)],1)],1):t._e()])])]}))]}}])}),t.showColumnDF?a("el-table-column",{attrs:{prop:"DF",label:"DF",width:"100%",sortable:"custom"}}):t._e(),t.showColumnNAME?a("el-table-column",{attrs:{prop:"NAME",label:t.$t("名前"),sortable:"custom"}}):t._e(),t.showColumnCATEG?a("el-table-column",{attrs:{prop:"CATEG",label:t.$t("カテゴリー"),sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$t(t.dataManager.lookup.EQuestCategory[e.row.CATEG])))]}}],null,!1,1913108140)}):t._e(),t.showColumnCOST?a("el-table-column",{attrs:{prop:"COST.WTH.CNT",label:t.$t("消費"),width:"100%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.tickCross(e.row.COST.WTH.CNT)))]}}],null,!1,2692121966)}):t._e(),t.showColumnENM?a("el-table-column",{attrs:{prop:"ENM.length",label:t.$t("討伐"),width:"100%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.tickCross(e.row.ENM.length)))]}}],null,!1,247999907)}):t._e(),t.showColumnGET?a("el-table-column",{attrs:{prop:"GET.length",label:t.$t("調合/採取"),width:"120%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.tickCross(e.row.GET.length)))]}}],null,!1,4227987091)}):t._e(),t.showColumnDLV?a("el-table-column",{attrs:{prop:"DLV.length",label:""+t.$t("納品")+t.$t("報告"),width:"100%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.tickCross(e.row.DLV.length)))]}}],null,!1,911508923)}):t._e(),t.showColumnARA?a("el-table-column",{attrs:{prop:"ARA.length",label:""+t.$t("場所に行く"),width:"120%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.tickCross(e.row.ARA.length||e.row.REG.length)))]}}],null,!1,3925489461)}):t._e(),t.showColumnCharacter?a("el-table-column",{attrs:{prop:"CHARA",label:t.$t("キャラクター"),width:"130%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.CHARA?a("img",{staticClass:"character-preview",attrs:{src:t.dataManager.characterById[e.row.CHARA].icon,alt:t.dataManager.characterById[e.row.CHARA].NAME}}):t._e()]}}],null,!1,3656122451)}):t._e(),t.showColumnDialog?a("el-table-column",{attrs:{prop:"NPC_FD.length",label:t.$t("ダイアログ"),width:"120%",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.NPC_FD.some((function(t){return t.ADV}))?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onOpenDialog(e.row)}}},[t._v(t._s(t.$t("ダイアログ")))]):t._e()]}}],null,!1,1773443053)}):t._e()],1),a("el-pagination",{attrs:{"page-size":t.take,"current-page":t.page,total:t.filteredQuests.length,layout:"prev, pager, next",background:""},on:{"current-change":t.scrollTableTop,"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1)],1)},r=[],s=(a("13d5"),a("5319"),a("ddb0"),a("9ab4")),i=a("2fe1"),n=a("0aea"),o=a("5456"),u=a("1f25"),h=a.n(u),c=a("c6c6"),d=a.n(c),f=a("5935"),p=a("f015");class v extends n["a"]{}let g=class extends v{constructor(){super(...arguments),this.md=new d.a(window.navigator.userAgent),this.filter={category:null,character:null,has:[],name:"",extraQuest:!1,sort:"",order:null},this.page=1,this.take=100,this.defaultExpandAll=!1,this.filterCache=new h.a(100),this.currentRows=[],this.questDialogVisible=!1,this.questDialogLoading=!1,this.selectedQuest=null,this.questDialogs=[]}get EOrderType(){return p["i"]}get eMusicID(){return p["m"]}get categoryFilter(){return Object.keys(o["a"].questsByCategory).filter(t=>t).map(t=>({label:this.$t(o["a"].lookup.EQuestCategory[t]),value:t}))}get characterFilter(){return o["a"].charactersCanBattle.map(t=>({label:t.NAME,value:t.DF}))}get hasFilter(){return[{label:this.$t("消費"),value:1},{label:this.$t("討伐"),value:2},{label:this.$t("調合/採取"),value:3},{label:`${this.$t("納品")}/${this.$t("報告")}`,value:4},{label:""+this.$t("場所に行く"),value:5},{label:""+this.$t("ダイアログ"),value:6},{label:""+this.$t("キークェスト"),value:7},{label:""+this.$t("挑戦"),value:8},{label:""+this.$t("必要称号"),value:9},{label:""+this.$t("必要キャラクター"),value:10}]}get filteredQuests(){const t=JSON.stringify(this.filter);if(!this.filterCache.has(t)){const e=this.filter.category?o["a"].questsByCategory[this.filter.category]:[...o["a"].quest.m_vList].reverse(),a=e.filter(t=>(!this.filter.character||t.CHARA===this.filter.character)&&(!this.filter.name||t.DF===+this.filter.name||t.NAME.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))&&(!this.filter.extraQuest||o["a"].extraQuestsByQuest[t.DF])&&(!this.filter.has.includes(1)||t.COST.WTH.CNT)&&(!this.filter.has.includes(2)||t.ENM.length)&&(!this.filter.has.includes(3)||t.GET.length)&&(!this.filter.has.includes(4)||t.DLV.length)&&(!this.filter.has.includes(5)||t.ARA.length||t.REG.length)&&(!this.filter.has.includes(6)||t.NPC_FD.some(t=>t.ADV))&&(!this.filter.has.includes(7)||t.KEY_QUEST)&&(!this.filter.has.includes(8)||t.CHALLENGE)&&(!this.filter.has.includes(9)||t.UNLOCK.length)&&(!this.filter.has.includes(10)||t.PARTY_IN));if(this.filter.order){const t=t=>this.filter.sort.split(".").reduce((t,e)=>t[e],t);"NAME"===this.filter.sort?"ascending"===this.filter.order?a.sort((e,a)=>t(e).localeCompare(t(a))):a.sort((e,a)=>t(a).localeCompare(t(e))):"ascending"===this.filter.order?a.sort((e,a)=>t(e)-t(a)):a.sort((e,a)=>t(a)-t(e))}this.filterCache.set(t,a)}return this.filterCache.get(t)}get filteredPaginationQuests(){return this.currentRows=this.filteredQuests.slice((this.page-1)*this.take,this.page*this.take),this.defaultExpandAll&&this.$nextTick(this.expandAll.bind(this)),this.currentRows}beforeMount(){this.$route.query.df&&(this.filter.name=this.$route.query.df.toString())}mounted(){this.$route.query.df&&this.expandAll()}expandAll(){this.currentRows.forEach(t=>this.$refs.table.toggleRowExpansion(t,!0))}getRowKey(t){return t.DF}onSortChange({prop:t,order:e}){this.$set(this.filter,"sort",t),this.$set(this.filter,"order",e),this.resetPage()}scrollTableTop(){this.$refs.table.$el.scrollIntoView()}resetPage(){this.page=1}async onOpenDialog(t){try{this.selectedQuest=t,this.questDialogs=[],this.questDialogVisible=!0,this.questDialogLoading=!0,this.questDialogs=await this.dataManager.advManager.getDialog(t.NPC_FD.map(t=>t.ADV).filter(t=>t))}catch(e){this.questDialogVisible=!1,this.$message.error(e.toString()),console.error(e)}finally{this.questDialogLoading=!1}}replaceWithPlayerName(t){return t.replace("[px]",`[${this.$t("プレーヤー")}${this.$t("名前")}]`)}};g=Object(s["a"])([Object(i["a"])({components:{},computed:{...Object(f["b"])("questsFilter",["showColumnDF","showColumnNAME","showColumnCATEG","showColumnCOST","showColumnENM","showColumnGET","showColumnDLV","showColumnARA","showColumnDialog","showColumnCharacter"])}})],g);var m=g,_=m,w=(a("d8ed"),a("0f8a"),a("2877")),y=Object(w["a"])(_,l,r,!1,null,"2fe57bae",null);e["default"]=y.exports},be7c:function(t,e,a){},d8ed:function(t,e,a){"use strict";a("be7c")}}]);