(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home","Skills"],{"1f03":function(t,e,i){"use strict";t.exports=function(t){t.prototype[Symbol.iterator]=function*(){for(let t=this.head;t;t=t.next)yield t.value}}},"1f25":function(t,e,i){"use strict";const a=i("5cf7"),l=Symbol("max"),r=Symbol("length"),s=Symbol("lengthCalculator"),n=Symbol("allowStale"),o=Symbol("maxAge"),h=Symbol("dispose"),c=Symbol("noDisposeOnSet"),u=Symbol("lruList"),m=Symbol("cache"),f=Symbol("updateAgeOnGet"),g=()=>1;class p{constructor(t){if("number"===typeof t&&(t={max:t}),t||(t={}),t.max&&("number"!==typeof t.max||t.max<0))throw new TypeError("max must be a non-negative number");this[l]=t.max||1/0;const e=t.length||g;if(this[s]="function"!==typeof e?g:e,this[n]=t.stale||!1,t.maxAge&&"number"!==typeof t.maxAge)throw new TypeError("maxAge must be a number");this[o]=t.maxAge||0,this[h]=t.dispose,this[c]=t.noDisposeOnSet||!1,this[f]=t.updateAgeOnGet||!1,this.reset()}set max(t){if("number"!==typeof t||t<0)throw new TypeError("max must be a non-negative number");this[l]=t||1/0,_(this)}get max(){return this[l]}set allowStale(t){this[n]=!!t}get allowStale(){return this[n]}set maxAge(t){if("number"!==typeof t)throw new TypeError("maxAge must be a non-negative number");this[o]=t,_(this)}get maxAge(){return this[o]}set lengthCalculator(t){"function"!==typeof t&&(t=g),t!==this[s]&&(this[s]=t,this[r]=0,this[u].forEach(t=>{t.length=this[s](t.value,t.key),this[r]+=t.length})),_(this)}get lengthCalculator(){return this[s]}get length(){return this[r]}get itemCount(){return this[u].length}rforEach(t,e){e=e||this;for(let i=this[u].tail;null!==i;){const a=i.prev;k(this,t,i,e),i=a}}forEach(t,e){e=e||this;for(let i=this[u].head;null!==i;){const a=i.next;k(this,t,i,e),i=a}}keys(){return this[u].toArray().map(t=>t.key)}values(){return this[u].toArray().map(t=>t.value)}reset(){this[h]&&this[u]&&this[u].length&&this[u].forEach(t=>this[h](t.key,t.value)),this[m]=new Map,this[u]=new a,this[r]=0}dump(){return this[u].map(t=>!v(this,t)&&{k:t.key,v:t.value,e:t.now+(t.maxAge||0)}).toArray().filter(t=>t)}dumpLru(){return this[u]}set(t,e,i){if(i=i||this[o],i&&"number"!==typeof i)throw new TypeError("maxAge must be a number");const a=i?Date.now():0,n=this[s](e,t);if(this[m].has(t)){if(n>this[l])return b(this,this[m].get(t)),!1;const s=this[m].get(t),o=s.value;return this[h]&&(this[c]||this[h](t,o.value)),o.now=a,o.maxAge=i,o.value=e,this[r]+=n-o.length,o.length=n,this.get(t),_(this),!0}const f=new y(t,e,n,a,i);return f.length>this[l]?(this[h]&&this[h](t,e),!1):(this[r]+=f.length,this[u].unshift(f),this[m].set(t,this[u].head),_(this),!0)}has(t){if(!this[m].has(t))return!1;const e=this[m].get(t).value;return!v(this,e)}get(t){return d(this,t,!0)}peek(t){return d(this,t,!1)}pop(){const t=this[u].tail;return t?(b(this,t),t.value):null}del(t){b(this,this[m].get(t))}load(t){this.reset();const e=Date.now();for(let i=t.length-1;i>=0;i--){const a=t[i],l=a.e||0;if(0===l)this.set(a.k,a.v);else{const t=l-e;t>0&&this.set(a.k,a.v,t)}}}prune(){this[m].forEach((t,e)=>d(this,e,!1))}}const d=(t,e,i)=>{const a=t[m].get(e);if(a){const e=a.value;if(v(t,e)){if(b(t,a),!t[n])return}else i&&(t[f]&&(a.value.now=Date.now()),t[u].unshiftNode(a));return e.value}},v=(t,e)=>{if(!e||!e.maxAge&&!t[o])return!1;const i=Date.now()-e.now;return e.maxAge?i>e.maxAge:t[o]&&i>t[o]},_=t=>{if(t[r]>t[l])for(let e=t[u].tail;t[r]>t[l]&&null!==e;){const i=e.prev;b(t,e),e=i}},b=(t,e)=>{if(e){const i=e.value;t[h]&&t[h](i.key,i.value),t[r]-=i.length,t[m].delete(i.key),t[u].removeNode(e)}};class y{constructor(t,e,i,a,l){this.key=t,this.value=e,this.length=i,this.now=a,this.maxAge=l||0}}const k=(t,e,i,a)=>{let l=i.value;v(t,l)&&(b(t,i),t[n]||(l=void 0)),l&&e.call(a,l.value,l.key,t)};t.exports=p},"451d":function(t,e,i){"use strict";var a=i("536a"),l=i.n(a);l.a},"536a":function(t,e,i){},"5cf7":function(t,e,i){"use strict";function a(t){var e=this;if(e instanceof a||(e=new a),e.tail=null,e.head=null,e.length=0,t&&"function"===typeof t.forEach)t.forEach((function(t){e.push(t)}));else if(arguments.length>0)for(var i=0,l=arguments.length;i<l;i++)e.push(arguments[i]);return e}function l(t,e,i){var a=e===t.head?new n(i,null,e,t):new n(i,e,e.next,t);return null===a.next&&(t.tail=a),null===a.prev&&(t.head=a),t.length++,a}function r(t,e){t.tail=new n(e,t.tail,null,t),t.head||(t.head=t.tail),t.length++}function s(t,e){t.head=new n(e,null,t.head,t),t.tail||(t.tail=t.head),t.length++}function n(t,e,i,a){if(!(this instanceof n))return new n(t,e,i,a);this.list=a,this.value=t,e?(e.next=this,this.prev=e):this.prev=null,i?(i.prev=this,this.next=i):this.next=null}t.exports=a,a.Node=n,a.create=a,a.prototype.removeNode=function(t){if(t.list!==this)throw new Error("removing node which does not belong to this list");var e=t.next,i=t.prev;return e&&(e.prev=i),i&&(i.next=e),t===this.head&&(this.head=e),t===this.tail&&(this.tail=i),t.list.length--,t.next=null,t.prev=null,t.list=null,e},a.prototype.unshiftNode=function(t){if(t!==this.head){t.list&&t.list.removeNode(t);var e=this.head;t.list=this,t.next=e,e&&(e.prev=t),this.head=t,this.tail||(this.tail=t),this.length++}},a.prototype.pushNode=function(t){if(t!==this.tail){t.list&&t.list.removeNode(t);var e=this.tail;t.list=this,t.prev=e,e&&(e.next=t),this.tail=t,this.head||(this.head=t),this.length++}},a.prototype.push=function(){for(var t=0,e=arguments.length;t<e;t++)r(this,arguments[t]);return this.length},a.prototype.unshift=function(){for(var t=0,e=arguments.length;t<e;t++)s(this,arguments[t]);return this.length},a.prototype.pop=function(){if(this.tail){var t=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,t}},a.prototype.shift=function(){if(this.head){var t=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,t}},a.prototype.forEach=function(t,e){e=e||this;for(var i=this.head,a=0;null!==i;a++)t.call(e,i.value,a,this),i=i.next},a.prototype.forEachReverse=function(t,e){e=e||this;for(var i=this.tail,a=this.length-1;null!==i;a--)t.call(e,i.value,a,this),i=i.prev},a.prototype.get=function(t){for(var e=0,i=this.head;null!==i&&e<t;e++)i=i.next;if(e===t&&null!==i)return i.value},a.prototype.getReverse=function(t){for(var e=0,i=this.tail;null!==i&&e<t;e++)i=i.prev;if(e===t&&null!==i)return i.value},a.prototype.map=function(t,e){e=e||this;for(var i=new a,l=this.head;null!==l;)i.push(t.call(e,l.value,this)),l=l.next;return i},a.prototype.mapReverse=function(t,e){e=e||this;for(var i=new a,l=this.tail;null!==l;)i.push(t.call(e,l.value,this)),l=l.prev;return i},a.prototype.reduce=function(t,e){var i,a=this.head;if(arguments.length>1)i=e;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");a=this.head.next,i=this.head.value}for(var l=0;null!==a;l++)i=t(i,a.value,l),a=a.next;return i},a.prototype.reduceReverse=function(t,e){var i,a=this.tail;if(arguments.length>1)i=e;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");a=this.tail.prev,i=this.tail.value}for(var l=this.length-1;null!==a;l--)i=t(i,a.value,l),a=a.prev;return i},a.prototype.toArray=function(){for(var t=new Array(this.length),e=0,i=this.head;null!==i;e++)t[e]=i.value,i=i.next;return t},a.prototype.toArrayReverse=function(){for(var t=new Array(this.length),e=0,i=this.tail;null!==i;e++)t[e]=i.value,i=i.prev;return t},a.prototype.slice=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var i=new a;if(e<t||e<0)return i;t<0&&(t=0),e>this.length&&(e=this.length);for(var l=0,r=this.head;null!==r&&l<t;l++)r=r.next;for(;null!==r&&l<e;l++,r=r.next)i.push(r.value);return i},a.prototype.sliceReverse=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var i=new a;if(e<t||e<0)return i;t<0&&(t=0),e>this.length&&(e=this.length);for(var l=this.length,r=this.tail;null!==r&&l>e;l--)r=r.prev;for(;null!==r&&l>t;l--,r=r.prev)i.push(r.value);return i},a.prototype.splice=function(t,e,...i){t>this.length&&(t=this.length-1),t<0&&(t=this.length+t);for(var a=0,r=this.head;null!==r&&a<t;a++)r=r.next;var s=[];for(a=0;r&&a<e;a++)s.push(r.value),r=this.removeNode(r);null===r&&(r=this.tail),r!==this.head&&r!==this.tail&&(r=r.prev);for(a=0;a<i.length;a++)r=l(this,r,i[a]);return s},a.prototype.reverse=function(){for(var t=this.head,e=this.tail,i=t;null!==i;i=i.prev){var a=i.prev;i.prev=i.next,i.next=a}return this.head=e,this.tail=t,this};try{i("1f03")(a)}catch(o){}},"67a26":function(t,e,i){"use strict";i.r(e),i.d(e,"SkillKind",(function(){return a}));var a,l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"filters"},[i("div",{staticClass:"filter"},[i("el-select",{attrs:{clearable:"",filterable:""},model:{value:t.filter.skillKind,callback:function(e){t.$set(t.filter,"skillKind",e)},expression:"filter.skillKind"}},t._l(t.skillKindFilter,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"filter"},[i("span",[t._v(t._s(t.$t("属性")))]),i("el-select",{attrs:{clearable:"",filterable:""},model:{value:t.filter.element,callback:function(e){t.$set(t.filter,"element",e)},expression:"filter.element"}},t._l(t.elementFilter,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"filter"},[i("span",[t._v(t._s(t.$t("目標")))]),i("el-select",{attrs:{clearable:"",filterable:""},model:{value:t.filter.targetTeam,callback:function(e){t.$set(t.filter,"targetTeam",e)},expression:"filter.targetTeam"}},t._l(t.targetTeamFilter,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"filter"},[i("span",[t._v(t._s(t.$t("範囲")))]),i("el-select",{attrs:{clearable:"",filterable:""},model:{value:t.filter.targetScope,callback:function(e){t.$set(t.filter,"targetScope",e)},expression:"filter.targetScope"}},t._l(t.targetScopeFilter,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("追加状態 (自)")},model:{value:t.filter.hasStateOwn,callback:function(e){t.$set(t.filter,"hasStateOwn",e)},expression:"filter.hasStateOwn"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("追加状態")},model:{value:t.filter.hasState,callback:function(e){t.$set(t.filter,"hasState",e)},expression:"filter.hasState"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("アイテム")},model:{value:t.filter.hasItem,callback:function(e){t.$set(t.filter,"hasItem",e)},expression:"filter.hasItem"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("敵")},model:{value:t.filter.hasEnemy,callback:function(e){t.$set(t.filter,"hasEnemy",e)},expression:"filter.hasEnemy"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("人物")},model:{value:t.filter.hasCharacter,callback:function(e){t.$set(t.filter,"hasCharacter",e)},expression:"filter.hasCharacter"}})],1)]),i("div",{staticClass:"content"},[i("el-table",{attrs:{data:t.filteredSkills}},[i("el-table-column",{attrs:{prop:"id",label:"ID",width:"100%",sortable:""}}),i("el-table-column",{attrs:{prop:"name",label:t.$t("名前"),sortable:""}}),i("el-table-column",{attrs:{prop:"detail",label:t.$t("詳細"),sortable:""}}),i("el-table-column",{attrs:{prop:"effectValue",label:t.$t("数値"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.effectValue)+", "+t._s(e.row.effectValue2))]}}])}),i("el-table-column",{attrs:{prop:"spAdd",label:t.$t("SP回復率"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.spAdd)+t._s(t.$t("倍")))]}}])}),i("el-table-column",{attrs:{prop:"attackSkill.element",label:t.$t("属性"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$t(t.dataManager.lookup.EBattleElementKind[e.row.attackSkill.element])))]}}])}),i("el-table-column",{attrs:{prop:"targetTeam",label:t.$t("對象"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.$t(t.dataManager.lookup.targetTeam[e.row.targetTeam]))+t._s(t.$t(t.dataManager.lookup.eFieldItemRange[e.row.targetScope])))]}}])}),i("el-table-column",{attrs:{prop:"stateOwn.length",label:t.$t("追加状態 (自)"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.stateOwn.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],l=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(l.name))])}))}}])}),i("el-table-column",{attrs:{prop:"state.length",label:t.$t("追加状態"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.state.map((function(e){return[e,t.dataManager.abnormalStateById[e.id]]})),(function(e){var a=e[0],l=e[1];return i("p",[t._v(t._s((100*a.rate).toFixed())+"% "+t._s(l.name))])}))}}])}),i("el-table-column",{attrs:{prop:"iconPath",label:t.$t("画像"),width:"100%",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.iconPath?i("img",{staticClass:"icon-small",attrs:{src:e.row.icon,alt:e.row.name}}):t._e()]}}])}),i("el-table-column",{attrs:{label:t.$t("アイテム")+"/"+t.$t("人物")+"/"+t.$t("敵")},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",[t.dataManager.itemsBySkill[e.row.id]?i("div",[i("h3",[t._v(t._s(t.$t("アイテム")))]),t._l(t.dataManager.itemsBySkill[e.row.id],(function(t){return i("router-link",{key:t.DF,attrs:{to:{name:"ItemsItem",query:{df:t.DF}}}},[i("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])}))],2):t._e(),t.dataManager.enemiesBySkill[e.row.id]?i("div",[i("h3",[t._v(t._s(t.$t("敵")))]),t._l(t.dataManager.enemiesBySkill[e.row.id],(function(t){return i("router-link",{key:t.DF,attrs:{to:{name:"EnemiesEnemy",query:{df:t.DF}}}},[i("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])}))],2):t._e(),t.dataManager.charactersBySkill[e.row.id]?i("div",[i("h3",[t._v(t._s(t.$t("人物")))]),t._l(t.dataManager.charactersBySkill[e.row.id],(function(t){return i("router-link",{key:t.DF,attrs:{to:{name:"CharactersCharacter",query:{df:t.DF}}}},[i("img",{staticClass:"icon-small",attrs:{src:t.icon,alt:t.NAME}})])}))],2):t._e()])]}}])})],1)],1)])},r=[],s=(i("ddb0"),i("9ab4")),n=i("2fe1"),o=i("0aea"),h=i("5456"),c=i("1f25"),u=i.n(c);(function(t){t[t["none"]=0]="none",t[t["normal"]=1]="normal",t[t["blazeArt"]=2]="blazeArt"})(a||(a={}));let m=class extends o["a"]{constructor(){super(...arguments),this.filter={skillKind:a.normal,element:"",targetTeam:"",targetScope:"",hasStateOwn:!1,hasState:!1,hasItem:!1,hasEnemy:!1,hasCharacter:!1},this.filterCache=new u.a(100)}get skillKindFilter(){return[{label:this.$t("スキル"),value:a.normal},{label:this.$t("ブレイズアーツ"),value:a.blazeArt}]}get elementFilter(){return Object.entries(h["a"].lookup.EBattleElementKind).map(([t,e])=>({label:this.$t(e),value:+t}))}get targetTeamFilter(){return Object.entries(h["a"].lookup.targetTeam).map(([t,e])=>({label:this.$t(e),value:+t}))}get targetScopeFilter(){return Object.entries(h["a"].lookup.eFieldItemRange).map(([t,e])=>({label:this.$t(e),value:+t}))}get skills(){switch(this.filter.skillKind){case a.blazeArt:return h["a"].skillBlazeArts;case a.normal:case a.none:default:return h["a"].skills}}get filteredSkills(){const t=JSON.stringify(this.filter);return this.filterCache.has(t)||this.filterCache.set(t,this.skills.filter(t=>(""===this.filter.element||t.attackSkill.element===+this.filter.element)&&(""===this.filter.targetTeam||t.targetTeam===+this.filter.targetTeam)&&(""===this.filter.targetScope||t.targetScope===+this.filter.targetScope)&&(!this.filter.hasStateOwn||t.stateOwn.length)&&(!this.filter.hasState||t.state.length)&&(!this.filter.hasItem||h["a"].itemsBySkill[t.id])&&(!this.filter.hasEnemy||h["a"].enemiesBySkill[t.id])&&(!this.filter.hasCharacter||h["a"].charactersBySkill[t.id]))),this.filterCache.get(t)}beforeMount(){"undefined"!==typeof this.$route.query.skillKind&&this.$set(this.filter,"skillKind",+this.$route.query.skillKind)}};m=Object(s["__decorate"])([Object(n["a"])({components:{}})],m);var f=m,g=f,p=(i("451d"),i("2877")),d=Object(p["a"])(g,l,r,!1,null,"11f55ffd",null);e["default"]=d.exports},bb51:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"title__container"},[i("h2",[t._v(t._s(t.$t("アトリエオンライン資料庫")))]),i("p",[i("span",{staticClass:"version-link__container"},[i("span",[t._v("Game Version 3.12.1 (日本語)")]),"ja-JP"!==t.$i18n.locale?i("el-link",{attrs:{type:"success",underline:!1},on:{click:function(e){return t.onChangeLocale("ja-JP")}}},[t._v("link")]):t._e()],1),i("br"),i("span",{staticClass:"version-link__container"},[i("span",[t._v("Game Version 3.5.0 (中文)")]),"zh-TW"!==t.$i18n.locale?i("el-link",{attrs:{type:"success",underline:!1},on:{click:function(e){return t.onChangeLocale("zh-TW")}}},[t._v("link")]):t._e()],1)]),i("p",[i("span",[t._v("Twitter")]),i("el-link",{attrs:{href:"https://twitter.com/hoshiyuki_git",target:"_blank",rel:"noopener",type:"primary"}},[t._v("@hoshiyuki_git")])],1),i("br"),i("div",{staticClass:"filters"},[i("div",{staticClass:"filter"},[i("label",[i("el-switch",{attrs:{"active-color":"#13ce66","active-text":t.$t("サイドバー")},model:{value:t.showSideBar,callback:function(e){t.showSideBar=e},expression:"showSideBar"}})],1)]),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{"active-text":t.$t("トップに移動ボタン")},model:{value:t.showBackTopButton,callback:function(e){t.showBackTopButton=e},expression:"showBackTopButton"}})],1),i("div",{staticClass:"filter"},[i("el-switch",{attrs:{value:t.showHiddenContent,"active-color":"#f56c6c","active-text":t.$t("ネタバレ")},on:{change:t.onShowHiddenContent}})],1)])]),i("el-divider"),i("div",t._l(t.allPages,(function(e){return i("div",{staticClass:"categories__container"},[i("div",{staticClass:"categories__title-container"},[i("h2",[t._v(t._s(e.title))])]),i("div",{staticClass:"categories"},t._l(e.pages,(function(e){return i("div",{staticClass:"category__container"},[i("h3",[i("router-link",{staticClass:"category__link",attrs:{to:e.to}},[i("span",[t._v(t._s(e.label))]),i("img",{staticClass:"category__image",attrs:{src:e.imgSrc,alt:e.label||e.imgAlt}})])],1)])})),0)])})),0),i("el-divider"),i("div",{staticClass:"strategy-guides"},[i("h3",[t._v(t._s(t.$t("他の人の攻略サイト")))]),i("br"),t._l(t.otherStrategyPages,(function(e){return i("div",[i("h4",[t._v(t._s(e.title))]),t._l(e.links,(function(e){return i("p",[i("el-link",{attrs:{href:e.href,target:"_blank",rel:"noopener"}},[t._v(t._s(e.href))])],1)})),i("el-divider")],2)}))],2)],1)},l=[],r=(i("ddb0"),i("2b3d"),i("9ab4")),s=i("2fe1"),n=i("5456"),o=i("0063"),h=i.n(o),c=i("0aea"),u=i("5935"),m=i("848f"),f=i("67a26");class g extends c["a"]{}let p=class extends g{get allPages(){return[{title:this.$t("ツール"),pages:this.pageTools},{title:this.$t("裝備"),pages:this.pageWeapons},{title:this.$t("アイテム"),pages:this.pageItems},{title:this.$t("スキル"),pages:this.pageSkills},{title:this.$t("キャラクター"),pages:this.pageCharacters},{title:this.$t("敵"),pages:this.pageEnemies},{title:this.$t("他の資料"),pages:this.pageInfo},{title:this.$t("他"),pages:this.otherPageInfo}]}get pageTools(){return[{label:this.$t("キャラクタービルダー"),imgSrc:"img/other/Texture2D/item_texture_0024.png",to:{name:"ToolsCharacterBuilder"}},{label:this.$t("調合アイテム"),imgSrc:"img/icon/icon_bowl.png",to:{name:"ToolsComposeItem"}}]}get pageWeapons(){return[{label:this.$t("ランキング"),imgSrc:"img/other/Texture2D/item_texture_0025.png",to:{name:"ToolsEquipmentRanking"}}].concat(h.a.from(n["a"].itemsEquipments).groupBy(t=>t.CATEG).orderBy(t=>t.key()).select(t=>({label:this.$t(n["a"].lookup.itemCategory[t.key()]),imgSrc:t.first().icon,to:{name:"Items",query:{category:t.key()}}})).toArray())}get pageItems(){const t=h.a.from(n["a"].item.m_vList).where(t=>!t.EQU_BRD).groupBy(t=>t.CATEG).orderBy(t=>t.key()).select(t=>({label:this.$t(n["a"].lookup.itemCategory[t.key()]),imgSrc:t.first().icon,to:{name:"Items",query:{category:t.key()}}})).toArray();return this.showHiddenContent&&t.push({label:this.$t("未使用アイテム"),imgSrc:"img/icon_item_s/Texture2D/icon_item_s_20020010.png",to:{name:"ItemsUnusedItems"}}),t}get pageSkills(){return[{label:this.$t("スキル"),imgSrc:"img/icon/icon_skill_00003.png",to:{name:"Skills",query:{skillKind:f["SkillKind"].normal}}},{label:this.$t("効果"),imgSrc:"img/fx/Texture2D/FX_Skill2005_02.png",to:{name:"SkillsEffect"}},{label:this.$t("強化効果"),imgSrc:"img/icon_item_s/Texture2D/icon_item_s_10950010.png",to:{name:"SkillsAddon"}},{label:this.$t("異常状態"),imgSrc:"img/fx/Texture2D/FX_smoke.png",to:{name:"SkillsAbnormalEffect"}},{label:this.$t("ブレイズアーツ"),imgSrc:"img/icon_item_s/Texture2D/icon_item_s_56010003.png",to:{name:"Skills",query:{skillKind:f["SkillKind"].blazeArt}}}]}get pageCharacters(){const t=[{label:this.$t("ランキング"),imgSrc:"img/other/Texture2D/item_texture_0025.png",to:{name:"ToolsCharacterRanking"}},{label:this.$t("戦闘キャラクター"),imgSrc:"img/icon_chara/Texture2D/icon_chara_all_0001.png",to:{name:"Characters",query:{characterType:m["a"].battle}}},{label:this.$t("NPC"),imgSrc:"img/icon_chara/Texture2D/icon_chara_all_20001.png",to:{name:"Characters",query:{characterType:m["a"].npc}}}];return this.showHiddenContent&&t.push({label:this.$t("他のキャラクター"),imgSrc:"img/icon_chara/Texture2D/icon_chara_all_5018_00.png",to:{name:"CharactersOtherCharacters"}}),t}get pageEnemies(){return[{label:this.$t("ランキング"),imgSrc:"img/other/Texture2D/item_texture_0025.png",to:{name:"ToolsEnemyRanking"}},{label:this.$t("敵"),imgSrc:"img/icon_chara/Texture2D/icon_chara_all_9999_00.png",to:{name:"Enemies"}}]}get pageInfo(){return[{label:this.$t("区域"),imgSrc:"img/icon/tree.png",to:{name:"Areas"}},{label:this.$t("クェスト"),imgSrc:"img/other/Texture2D/item_texture_0018.png",to:{name:"InfoQuest"}},{label:this.$t("ダイアログ"),imgSrc:"img/icon_chara/Texture2D/icon_chara_all_1010_00.png",to:{name:"InfoDialog"}},{label:this.$t("大事なもの"),imgSrc:"img/icon_item01/Texture2D/icon_item01_00001.png",to:{name:"InfoWealth"}},{label:this.$t("称号"),imgSrc:"img/icon_degree/Texture2D/icon_degree_0605.png",to:{name:"InfoDegree"}},{label:this.$t("ゾーン"),imgSrc:"img/icon_item_s/Texture2D/icon_item_s_10500014.png",to:{name:"InfoZone"}}]}get otherPageInfo(){return[{label:this.$t("計算/公式"),imgSrc:"img/other/Texture2D/item_texture_0010.png",to:{name:"OthersCalculate"}},{label:this.$t("降臨バタル(昔)"),imgSrc:"img/enemy_tex/Texture2D/enemy_tex_023_03.png",to:{name:"OthersAdventBattle"}},{label:"",imgSrc:"img/tips/Texture2D/Tips_Chara_01.png",imgAlt:"tips",to:{name:"OthersTips"}},{label:this.$t("宝文字"),imgSrc:"img/other/Texture2D/item_texture_0020.png",to:{name:"OthersTreasureText"}},{label:this.$t("チャット"),imgSrc:"img/other/stamp.png",to:{name:"OthersChat"}}]}get otherStrategyPages(){return[{title:"ブレセイル観光局",links:[{href:"https://bresail-kanko.info/index.html"},{href:"https://twitter.com/bresail_kanko"},{href:"https://twitter.com/re_dream5"}]},{title:"アトリエオンライン攻略日記〜シャオンのアトリエ〜",links:[{href:"https://ameblo.jp/shana12151014/"},{href:"https://twitter.com/_shaon"}]},{title:"かぴ",links:[{href:"https://twitter.com/kapi_atorie"}]},{title:"アトリエオンライン攻略Wikiまとめ【ブレセイルの錬金術士】",links:[{href:"https://atelieronline.gamerch.com/"}]},{title:"煉金工坊OL 資料庫",links:[{href:"https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1"},{href:"https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing"}]}]}onChangeLocale(t){const e=new URL(window.location.href);e.searchParams.set("locale",t),window.location.href=e.toString()}async onShowHiddenContent(t){t&&await this.$confirm(this.$t("ネタバレのコンテンツ表示しでよろしいでしか")+"?","",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}),this.showHiddenContent=t,window.location.reload()}};p=Object(r["__decorate"])([Object(s["a"])({components:{},computed:{...Object(u["b"])("home",["showSideBar","showBackTopButton","showHiddenContent"])}})],p);var d=p,v=d,_=(i("ea6d"),i("2877")),b=Object(_["a"])(v,a,l,!1,null,"9df76144",null);e["default"]=b.exports},ea6d:function(t,e,i){"use strict";var a=i("fc87"),l=i.n(a);l.a},fc87:function(t,e,i){}}]);