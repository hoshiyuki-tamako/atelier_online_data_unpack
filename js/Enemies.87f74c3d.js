(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Enemies"],{"0355":function(e,a,t){"use strict";t("e0f5")},"9d7b":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"filters"},[t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("種類")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.eKind,callback:function(a){e.eKind=a},expression:"eKind"}},e._l(e.enemyCategoryFilter,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("攻撃目標")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.attackTargetKind,callback:function(a){e.attackTargetKind=a},expression:"attackTargetKind"}},e._l(e.attackTargetKindOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("大きさ")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.enemySize,callback:function(a){e.enemySize=a},expression:"enemySize"}},e._l(e.enemySizeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("出現エリア")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.appearArea,callback:function(a){e.appearArea=a},expression:"appearArea"}},e._l(e.appearAreaOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("div",{staticClass:"filters"},[t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("名前"))+"/DF")]),t("el-input",{attrs:{clearable:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("ソート")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.sort,callback:function(a){e.sort=a},expression:"sort"}},e._l(e.sortOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("div",{staticClass:"filters"},[t("div",{staticClass:"filter"},[t("el-checkbox-group",{attrs:{size:"small"},model:{value:e.has,callback:function(a){e.has=a},expression:"has"}},e._l(e.hasFilter,(function(a){return t("el-checkbox-button",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1)],1)]),t("div",{staticClass:"enemies"},e._l(e.filteredEnemies,(function(a){return t("el-card",{key:a.DF,staticClass:"enemy"},[t("h3",[t("router-link",{attrs:{to:{name:"EnemiesEnemy",query:{df:a.DF}}}},[t("p",[e._v(e._s(a.strName))]),t("img",{attrs:{src:a.icon,alt:"",loading:"lazy"}})])],1)])})),1)])},s=[],i=t("ade3"),n=t("9ab4"),r=t("2fe1"),c=t("5935"),o=t("6b98");class u extends o["a"]{constructor(...e){super(...e),Object(i["a"])(this,"eKind",void 0),Object(i["a"])(this,"attackTargetKind",void 0),Object(i["a"])(this,"enemySize",void 0),Object(i["a"])(this,"appearArea",void 0),Object(i["a"])(this,"name",void 0),Object(i["a"])(this,"sort",void 0),Object(i["a"])(this,"has",void 0)}}let d=class extends u{get enemyCategoryFilter(){return this.dataManager.enemy.KindList.filter(e=>e.iKind).map(e=>({label:e.strName,value:e.iKind}))}get attackTargetKindOptions(){return Object.entries(this.dataManager.lookup.EAttackTargetKind).map(([e,a])=>({label:this.$t(a),value:+e}))}get enemySizeOptions(){return Object.entries(this.dataManager.lookup.eEnemySize).map(([e,a])=>({label:this.$t(a),value:+e}))}get appearAreaOptions(){return this.dataManager.areaInfo.List.map(e=>{var a;return{label:(null===(a=this.dataManager.fieldNameById[e.iAreaNameId])||void 0===a?void 0:a.strAreaName)||e.iAreaId,value:e.iAreaId}})}get sortOptions(){return[{label:this.$t("古い"),value:0},{label:this.$t("新しい"),value:1}]}get hasFilter(){return[{label:this.$t("ボス"),value:1},{label:this.$t("オンラインオーンリー"),value:2},{label:this.$t("クエスト"),value:3},{label:this.$t("普通"),value:4}]}get enemies(){return this.eKind?this.dataManager.enemiesByEKind[this.eKind]||[]:this.dataManager.enemiesOrderByCategory}get filteredEnemies(){const e=this.enemies.filter(e=>([null,"",-1].includes(this.attackTargetKind)||e.eAttackTargetKind===this.attackTargetKind)&&([null,"",-1].includes(this.enemySize)||e.eSize===this.enemySize)&&(!this.appearArea||e.appearAreas.some(e=>e.iAreaId===this.appearArea))&&(!this.name||e.DF===+this.name||e.strName.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()))&&(!this.has.includes(1)||e.bBoss)&&(!this.has.includes(2)||e.bOnlyOnline)&&(!this.has.includes(3)||this.dataManager.questsByEnemy[e.DF])&&(!this.has.includes(4)||!this.dataManager.questsByEnemy[e.DF]));return 1===this.sort?e.reverse():e}};d=Object(n["b"])([Object(r["b"])({components:{},computed:{...Object(c["b"])("enemiesFilter",["eKind","attackTargetKind","enemySize","appearArea","name","sort","has"])}})],d);var p=d,b=p,v=(t("0355"),t("2877")),h=Object(v["a"])(b,l,s,!1,null,"4cb0ba6e",null);a["default"]=h.exports},e0f5:function(e,a,t){}}]);