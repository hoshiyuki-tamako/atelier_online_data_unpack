(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsBlazeArtLeveling"],{"1b40":function(t,e,a){"use strict";a.d(e,"a",(function(){return r["b"]})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return p}));var r=a("2fe1"),i=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<a;e++)for(var s=arguments[e],c=0,n=s.length;c<n;c++,i++)r[i]=s[c];return r},s=/\B([A-Z])/g,c=function(t){return t.replace(s,"-$1").toLowerCase()};function n(t){return function(e,a,r){var s=c(a),n=r.value;r.value=function(){for(var e=this,a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];var c=function(r){var c=t||s;void 0===r?0===a.length?e.$emit(c):1===a.length?e.$emit(c,a[0]):e.$emit.apply(e,i([c],a)):(a.unshift(r),e.$emit.apply(e,i([c],a)))},o=n.apply(this,a);return l(o)?o.then(c):c(o),o}}}function l(t){return t instanceof Promise||t&&"function"===typeof t.then}var o="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function u(t,e,a){if(o&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var r=Reflect.getMetadata("design:type",e,a);r!==Object&&(t.type=r)}}function p(t){return void 0===t&&(t={}),function(e,a){u(t,e,a),Object(r["a"])((function(e,a){(e.props||(e.props={}))[a]=t}))(e,a)}}},2763:function(t,e,a){},"3b85":function(t,e,a){"use strict";a("2763")},"613e":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter"},[t.showTitle?a("span",[t._v(t._s(t.$t(t.title)))]):t._e(),a("el-select",{attrs:{clearable:t.clearable,placeholder:"",filterable:""},on:{change:t.change},model:{value:t.character,callback:function(e){t.character=e},expression:"character"}},t._l(t.characters,(function(e,r){return a("el-option",{key:r,attrs:{label:e.NAME,value:e.DF}},[e.hasFaceIcon?a("img",{staticClass:"option-image",attrs:{src:e.faceIcon,alt:""}}):e.hasIcon?a("img",{staticClass:"option-image",attrs:{src:e.icon,alt:""}}):t._e(),a("span",{staticClass:"option-text"},[t._v(t._s(e.NAME))])])})),1)],1)},i=[],s=a("ade3"),c=a("9ab4"),n=a("1b40"),l=a("6b98");let o=class extends l["a"]{constructor(...t){super(...t),Object(s["a"])(this,"characters",void 0),Object(s["a"])(this,"value",void 0),Object(s["a"])(this,"showTitle",void 0),Object(s["a"])(this,"title",void 0),Object(s["a"])(this,"clearable",void 0)}get character(){return this.value}set character(t){}change(t){return t}};Object(c["b"])([Object(n["c"])({type:Array,default:()=>[]})],o.prototype,"characters",void 0),Object(c["b"])([Object(n["c"])()],o.prototype,"value",void 0),Object(c["b"])([Object(n["c"])({type:Boolean,default:!0})],o.prototype,"showTitle",void 0),Object(c["b"])([Object(n["c"])({type:String,default:"キャラクター"})],o.prototype,"title",void 0),Object(c["b"])([Object(n["c"])({type:Boolean,default:!0})],o.prototype,"clearable",void 0),Object(c["b"])([Object(n["b"])("change"),Object(n["b"])("input")],o.prototype,"change",null),o=Object(c["b"])([Object(n["a"])({components:{}})],o);var u=o,p=u,h=a("2877"),v=Object(h["a"])(p,r,i,!1,null,null,null);e["a"]=v.exports},cce3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-enhance-quality"},[a("div",{staticClass:"left"},[a("div",{staticClass:"experience-items"},t._l(t.blazeArtExpItems,(function(e){return a("div",{staticClass:"experience-item",on:{click:function(a){return t.onClickAddItem(e)}}},[a("el-tooltip",{attrs:{content:e.SPC[0].SKILL[0].VAL+" "+t.$t("経験値"),placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)})),0),a("br"),a("br"),a("div",{staticClass:"items"},t._l(t.items,(function(e,r){return a("div",{staticClass:"item",on:{click:function(e){return t.onClickRemoveItem(r)}}},[a("el-tooltip",{attrs:{content:e.SPC[0].SKILL[0].VAL+" "+t.$t("経験値"),placement:"top"}},[a("img",{staticClass:"icon-middle",attrs:{src:e.icon,alt:e.NAME}})])],1)})),0)]),a("div",{staticClass:"right"},[a("div",{staticClass:"character"},[a("CharacterSelector",{attrs:{characters:t.dataManager.charactersHasBlazeArts,showTitle:!1,clearable:!1},model:{value:t.characterDf,callback:function(e){t.characterDf=e},expression:"characterDf"}}),a("img",{staticClass:"icon-large",attrs:{src:t.character.icon,alt:t.character.NAME}})],1),a("div",{staticClass:"blaze-art"},[a("div",{staticClass:"orginal-item__edit"},[a("span",[t._v(t._s(t.$t("レベル")))]),a("el-input-number",{attrs:{size:"mini",min:1,max:t.character.maxBlazeArtLevel,step:1,"step-strictly":""},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),a("span",[t._v(t._s(t.$t("あと")))]),a("el-input-number",{attrs:{size:"mini",min:0,max:t.maxExp,step:1,"step-strictly":""},model:{value:t.untilExp,callback:function(e){t.untilExp=e},expression:"untilExp"}})],1),a("br"),t._l(t.blazeArt.LV,(function(e,r){return a("p",[t._v(t._s(t.$t("レベル"))+" "+t._s(r+1)+" "+t._s(t.$t("経験値"))+" "+t._s(t.blazeArt.levelExperience(r+1)))])})),a("br"),t._l([t.expInfo],(function(e){var r=e.level,i=e.totalExp,s=e.untilNextLevel,c=e.overExp;return a("div",{staticClass:"result"},[a("table",[a("tr",[a("th",[t._v(t._s(t.$t("目標レベル")))]),a("td",[t._v(t._s(r))])]),a("tr",[a("th",[t._v(t._s(t.$t("あと")))]),a("td",[t._v(t._s(s))])]),a("tr",[a("th",[t._v(t._s(t.$t("経験値")))]),a("td",[t._v(t._s(i))])]),a("tr",[a("th",[t._v(t._s(t.$t("無駄になった経験値")))]),a("td",[t._v(t._s(c))])])])])})),a("br"),t._l(t.totalItems,(function(e){var r=e.item,i=e.count;return a("p",{staticClass:"total-item"},[a("img",{staticClass:"icon-small",attrs:{src:r.icon,alt:r.NAME}}),a("span",[t._v("x "+t._s(i)+" "+t._s(t.$t("個"))+" "+t._s(r.SPC[0].SKILL[0].VAL)+" "+t._s(t.$t("経験値")))])])}))],2)])])},i=[],s=a("ade3"),c=(a("13d5"),a("9ab4")),n=a("2fe1"),l=a("5935"),o=a("0063"),u=a.n(o),p=a("6b98"),h=a("f015"),v=a("613e");class f extends p["a"]{constructor(...t){super(...t),Object(s["a"])(this,"level",void 0),Object(s["a"])(this,"untilExp",void 0),Object(s["a"])(this,"characterDf",void 0)}}let b=class extends f{get maxExp(){return this.blazeArt.LV[this.level-1].EXP_PT}get currentExp(){return[...Array(this.level)].reduce((t,e,a)=>t+this.blazeArt.levelExperience(1+a),this.untilExp?this.blazeArt.levelExperience(this.level+1)-this.untilExp:this.untilExp)}get blazeArtExpItems(){var t;return null!==(t=this.dataManager.itemsByCategory[h["h"].eGROW_BLAZE_ARTS])&&void 0!==t?t:[]}get experienceItemDfs(){return this.$store.state.blazeArtLeveling.experienceItemDfs}set experienceItemDfs(t){this.$store.commit("blazeArtLeveling/updateExperienceItemDfs",t)}get items(){return this.experienceItemDfs.map(t=>this.dataManager.itemById[t])}get totalItems(){return u.a.from(this.items).groupBy(t=>t.DF).select(t=>({item:t.firstOrDefault(),count:t.count()})).orderBy(t=>t.item.DF).toArray()}get character(){return this.dataManager.characterById[this.characterDf]}get blazeArt(){return this.dataManager.blazeArtById[this.character.BA[0].DF]}get totalItemExp(){return this.items.map(t=>t.SPC).flat().map(t=>t.SKILL).flat().reduce((t,e)=>t+e.VAL,0)}get expInfo(){let t=this.currentExp+this.totalItemExp;for(const[e,{EXP_PT:a}]of this.blazeArt.LV.entries())if(t-=a,t<0)return{level:e+1,totalExp:this.totalItemExp,untilNextLevel:Math.abs(t),overExp:0};return{level:this.blazeArt.LV.length,totalExp:this.totalItemExp||this.blazeArt.LV.reduce((t,e)=>t+e.EXP_PT,0),untilNextLevel:0,overExp:this.blazeArt.LV.reduce((t,e)=>t+e.EXP_PT,0)-(this.currentExp+this.totalItemExp)}}beforeMount(){var t,e;this.characterDf&&null!==(t=this.character)&&void 0!==t&&t.hasBlazeArts||(this.characterDf=null===(e=this.dataManager.charactersHasBlazeArts[0])||void 0===e?void 0:e.DF,this.characterDf||this.$router.push({name:"Home"}))}onClickAddItem(t){this.experienceItemDfs.push(t.DF)}onClickRemoveItem(t){this.experienceItemDfs.splice(t,1)}};b=Object(c["b"])([Object(n["b"])({components:{CharacterSelector:v["a"]},computed:{...Object(l["b"])("blazeArtLeveling",["level","untilExp","characterDf"])}})],b);var d=b,m=d,x=(a("3b85"),a("2877")),_=Object(x["a"])(m,r,i,!1,null,"20b4af17",null);e["default"]=_.exports}}]);