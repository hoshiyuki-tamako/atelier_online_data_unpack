(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home","Skills"],{"30b3":function(e,t,a){},4255:function(e,t,a){"use strict";a("6116")},6116:function(e,t,a){},"67a2":function(e,t,a){"use strict";a.r(t),a.d(t,"SkillKind",(function(){return l}));var l,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("JsonViewDialog",{ref:"jsonViewDialog"}),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.skillKind,callback:function(t){e.$set(e.filter,"skillKind",t)},expression:"filter.skillKind"}},e._l(e.skillKindFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("攻撃タイプ")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.attribute,callback:function(t){e.$set(e.filter,"attribute",t)},expression:"filter.attribute"}},e._l(e.attributeFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("属性")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.element,callback:function(t){e.$set(e.filter,"element",t)},expression:"filter.element"}},e._l(e.elementFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("目標")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.targetTeam,callback:function(t){e.$set(e.filter,"targetTeam",t)},expression:"filter.targetTeam"}},e._l(e.targetTeamFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("範囲")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.targetScope,callback:function(t){e.$set(e.filter,"targetScope",t)},expression:"filter.targetScope"}},e._l(e.targetScopeFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("トリガー")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.trigger,callback:function(t){e.$set(e.filter,"trigger",t)},expression:"filter.trigger"}},e._l(e.triggerFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("エフェクト")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.effect,callback:function(t){e.$set(e.filter,"effect",t)},expression:"filter.effect"}},e._l(e.effectFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("エフェクトターゲット")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.effectTarget,callback:function(t){e.$set(e.filter,"effectTarget",t)},expression:"filter.effectTarget"}},e._l(e.effectTargetFilter,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("異常状態")))]),a("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},on:{change:e.resetPage},model:{value:e.filter.abnormalState,callback:function(t){e.$set(e.filter,"abnormalState",t)},expression:"filter.abnormalState"}},e._l(e.dataManager.abnormalState.m_vList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("名前"))+"/ID")]),a("el-input",{attrs:{clearable:""},on:{change:e.resetPage},model:{value:e.filter.name,callback:function(t){e.$set(e.filter,"name",t)},expression:"filter.name"}})],1),a("div",{staticClass:"filter"},[a("span",[e._v(e._s(e.$t("詳細")))]),a("el-input",{attrs:{clearable:""},on:{change:e.resetPage},model:{value:e.filter.detail,callback:function(t){e.$set(e.filter,"detail",t)},expression:"filter.detail"}})],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox-group",{attrs:{size:"small"},on:{change:e.resetPage},model:{value:e.filter.has,callback:function(t){e.$set(e.filter,"has",t)},expression:"filter.has"}},e._l(e.hasFilter,(function(t){return a("el-checkbox-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)]),a("div",{staticClass:"filters"},[a("div",{staticClass:"filter"},[a("el-checkbox",{model:{value:e.showColumnId,callback:function(t){e.showColumnId=t},expression:"showColumnId"}},[e._v("ID")]),a("el-checkbox",{model:{value:e.showColumnName,callback:function(t){e.showColumnName=t},expression:"showColumnName"}},[e._v(e._s(e.$t("名前")))]),a("el-checkbox",{model:{value:e.showColumnAttackSkillAttribute,callback:function(t){e.showColumnAttackSkillAttribute=t},expression:"showColumnAttackSkillAttribute"}},[e._v(e._s(e.$t("攻撃タイプ")))]),a("el-checkbox",{model:{value:e.showColumnAttackSkillElement,callback:function(t){e.showColumnAttackSkillElement=t},expression:"showColumnAttackSkillElement"}},[e._v(e._s(e.$t("属性")))]),a("el-checkbox",{model:{value:e.showColumnTargetTeam,callback:function(t){e.showColumnTargetTeam=t},expression:"showColumnTargetTeam"}},[e._v(e._s(e.$t("對象")))]),a("el-checkbox",{model:{value:e.showColumnStateOwn,callback:function(t){e.showColumnStateOwn=t},expression:"showColumnStateOwn"}},[e._v(e._s(e.$t("追加状態 (自)")))]),a("el-checkbox",{model:{value:e.showColumnState,callback:function(t){e.showColumnState=t},expression:"showColumnState"}},[e._v(e._s(e.$t("追加状態")))])],1)]),a("div",{staticClass:"content"},[a("el-table",{ref:"table",attrs:{data:e.filteredPaginationSkills,"default-expand-all":""},on:{"sort-change":e.onSortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-container-left"},[t.row.iconPath?a("p",[a("img",{staticClass:"icon-small",attrs:{src:t.row.icon,alt:t.row.name}})]):e._e(),a("h3",[e._v(e._s(t.row.name))]),t.row.detail?a("p",[e._v(e._s(t.row.detail))]):e._e(),a("br"),a("p",[e._v("ID: "+e._s(t.row.id))]),a("p",[e._v(e._s(e.$t("数値"))+"1: "+e._s(t.row.effectValue))]),a("p",[e._v(e._s(e.$t("数値"))+"2: "+e._s(t.row.effectValue2))]),a("p",[e._v(e._s(e.$t("攻撃タイプ"))+": "+e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.row.attackSkill.attribute])))]),a("p",[e._v(e._s(e.$t("属性"))+": "+e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.row.attackSkill.element])))]),a("p",[e._v(e._s(e.$t("對象"))+": "+e._s(e.$t(e.dataManager.lookup.targetTeam[t.row.targetTeam]))+" "+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.row.targetScope])))]),t.row.spAdd?a("p",[e._v(e._s(e.$t("SP回復率"))+": "+e._s(t.row.spAdd)+" "+e._s(e.$t("倍")))]):e._e(),t.row.trigger?a("p",[e._v(e._s(e.$t("トリガー"))+": "+e._s(e.EBattleEffectTrigger[t.row.trigger]||t.row.trigger))]):e._e(),t.row.effect?a("p",[e._v(e._s(e.$t("エフェクト"))+" "+e._s(e.EBattleEffectKind[t.row.effect]||t.row.effect))]):e._e(),t.row.effectTarget?a("p",[e._v(e._s(e.$t("エフェクトターゲット"))+" "+e._s(e.EBattleEffectTarget[t.row.effectTarget]||t.row.effectTarget))]):e._e(),t.row.coolTime?a("p",[e._v(e._s(e.$t("クールダウンタイム"))+": "+e._s(t.row.coolTime)+e._s(e.$t("ターン")))]):e._e(),t.row.combSkillList.length||t.row.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("div",[a("br"),a("h4",[e._v(e._s(e.$t("含まれるスキル")))]),e._l(t.row.combSkillList,(function(t){return[a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1),e._l([e.dataManager.skillById[t.id]].filter((function(e){return e})),(function(t){return t.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.effectValue}},target:"_blank"}},[e._v(e._s(t.name)+" / "+e._s(t.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))]})),e._l([e.dataManager.skillById[t.row.id]].filter((function(e){return e})),(function(l){return t.row.effect===e.EBattleEffectKind.eSTATE_GRANT_PASSIVE?a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:l.effectValue}},target:"_blank"}},[e._v(e._s(l.name)+" / "+e._s(l.effectValue2)+e._s(e.$t("ターン")))])],1):e._e()}))],2):e._e(),t.row.stateOwn.length?a("div",[a("br"),a("h4",[e._v(e._s(e.$t("追加状態 (自)")))]),e._l(t.row.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var l=t[0],i=t[1];return[a("el-tooltip",{attrs:{content:i.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*l.rate).toFixed()]))+" "+e._s(i.name))])])]}))],2):e._e(),t.row.state.length?a("div",[a("br"),a("h4",[e._v(e._s(e.$t("追加状態")))]),e._l(t.row.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var l=t[0],i=t[1];return[a("el-tooltip",{attrs:{content:i.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*l.rate).toFixed()]))+" "+e._s(i.name))])])]}))],2):e._e(),e._l([e.dataManager.zoneById[t.row.effectValue]].filter((function(e){return e})),(function(l){return t.row.effect===e.EBattleEffectKind.eZONE_CHANGE?a("div",[a("br"),a("h4",[a("router-link",{attrs:{to:{name:"InfoZone",query:{id:l.id}},target:"_blank"}},[e._v(e._s(l.name))])],1),e._l(l.effectlist,(function(t){return a("p",[e._v(e._s(e.dataManager.zoneEffectById[t].name)+" ("+e._s(e.dataManager.zoneEffectById[t].value)+")")])}))],2):e._e()})),t.row.effect===e.EBattleEffectKind.eSTART_SKILL&&e.dataManager.skillById[t.row.effectValue]?a("div",[a("br"),a("h4",[e._v(e._s(e.$t("スキル")))]),e._l([e.dataManager.skillById[t.row.effectValue]],(function(t){return a("p",[a("router-link",{attrs:{to:{name:"Skills",query:{id:t.id}},target:"_blank"}},[e._v(e._s(t.name))])],1)}))],2):e._e(),a("br"),a("el-link",{attrs:{underline:!1},on:{click:function(a){return e.$refs.jsonViewDialog.open(t.row)}}},[e._v(e._s(e.$t("Rawデータ")))])],2),a("div",{staticClass:"item-container-right"},[e.dataManager.itemsBySkill[t.row.id]?a("div",[a("h3",[e._v(e._s(e.$t("アイテム")))]),e._l(e.dataManager.itemsBySkill[t.row.id],(function(e){return a("router-link",{key:e.DF,attrs:{to:{name:"ItemsItem",query:{df:e.DF}},target:"_blank"}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)}))],2):e._e(),e.dataManager.enemiesBySkill[t.row.id]?a("div",[a("h3",[e._v(e._s(e.$t("敵")))]),e._l(e.dataManager.enemiesBySkill[t.row.id],(function(e){return a("router-link",{key:e.DF,attrs:{to:{name:"EnemiesEnemy",query:{df:e.DF}},target:"_blank"}},[a("el-tooltip",{attrs:{content:e.strName,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.strName}})])],1)}))],2):e._e(),e.dataManager.charactersBySkill[t.row.id]?a("div",[a("h3",[e._v(e._s(e.$t("人物")))]),e._l(e.dataManager.charactersBySkill[t.row.id],(function(e){return a("router-link",{key:e.DF,attrs:{to:{name:"CharactersCharacter",query:{df:e.DF}},target:"_blank"}},[a("el-tooltip",{attrs:{content:e.NAME,placement:"top"}},[a("img",{staticClass:"icon-small",attrs:{src:e.icon,alt:e.NAME}})])],1)}))],2):e._e()])])]}}])}),e.showColumnId?a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100%",sortable:"custom"}}):e._e(),e.showColumnName?a("el-table-column",{attrs:{prop:"name",label:e.$t("名前")}}):e._e(),e.showColumnAttackSkillAttribute?a("el-table-column",{attrs:{prop:"attackSkill.attribute",label:e.$t("攻撃タイプ"),sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.$t(e.dataManager.lookup.EBattleAttribute[t.row.attackSkill.attribute])))]}}],null,!1,2667811187)}):e._e(),e.showColumnAttackSkillElement?a("el-table-column",{attrs:{prop:"attackSkill.element",label:e.$t("属性"),sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.$t(e.dataManager.lookup.EBattleElementKind[t.row.attackSkill.element])))]}}],null,!1,3833127547)}):e._e(),e.showColumnTargetTeam?a("el-table-column",{attrs:{prop:"targetTeam",label:e.$t("對象"),sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.$t(e.dataManager.lookup.targetTeam[t.row.targetTeam]))+e._s(e.$t(e.dataManager.lookup.eFieldItemRange[t.row.targetScope])))]}}],null,!1,4150031021)}):e._e(),e.showColumnStateOwn?a("el-table-column",{attrs:{prop:"stateOwn.length",label:e.$t("追加状態 (自)"),sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.stateOwn.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var l=t[0],i=t[1];return[a("el-tooltip",{attrs:{content:i.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*l.rate).toFixed()]))+" "+e._s(i.name))])])]}))]}}],null,!1,4149350550)}):e._e(),e.showColumnState?a("el-table-column",{attrs:{prop:"state.length",label:e.$t("追加状態"),sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.state.map((function(t){return[t,e.dataManager.abnormalStateById[t.id]]})),(function(t){var l=t[0],i=t[1];return[a("el-tooltip",{attrs:{content:i.effectlist.map((function(t){return e.dataManager.abnormalStateEffectById[t]})).filter((function(e){return e})).map((function(e){return e.name+" "+e.value})).join(" / "),placement:"top"}},[a("p",[e._v(e._s(e.$t("確率",[(100*l.rate).toFixed()]))+" "+e._s(i.name))])])]}))]}}],null,!1,300282592)}):e._e()],1),a("el-pagination",{attrs:{"page-size":e.take,"current-page":e.page,total:e.filteredSkills.length,layout:"prev, pager, next",background:""},on:{"current-change":e.scrollTableTop,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],1)],1)},r=[],n=a("ade3"),s=(a("13d5"),a("9ab4")),o=a("2fe1"),c=a("1f25"),u=a.n(c),m=a("5935"),g=a("6b98"),f=a("f015"),h=a("2e50");class d extends g["a"]{constructor(...e){super(...e),Object(n["a"])(this,"showColumnId",void 0),Object(n["a"])(this,"showColumnName",void 0),Object(n["a"])(this,"showColumnAttackSkillAttribute",void 0),Object(n["a"])(this,"showColumnAttackSkillElement",void 0),Object(n["a"])(this,"showColumnTargetTeam",void 0),Object(n["a"])(this,"showColumnStateOwn",void 0),Object(n["a"])(this,"showColumnState",void 0)}}(function(e){e[e["none"]=0]="none",e[e["normal"]=1]="normal",e[e["blazeArt"]=2]="blazeArt",e[e["effect"]=3]="effect"})(l||(l={}));let _=class extends d{constructor(...e){super(...e),Object(n["a"])(this,"filter",{skillKind:null,attribute:"",element:"",targetTeam:"",targetScope:"",trigger:null,effect:null,effectTarget:null,name:"",detail:"",abnormalState:null,has:[],sort:"",order:null}),Object(n["a"])(this,"filterCache",new u.a(100)),Object(n["a"])(this,"page",1),Object(n["a"])(this,"take",100)}get EBattleEffectTrigger(){return f["e"]}get EBattleEffectKind(){return f["c"]}get EBattleEffectTarget(){return f["d"]}get skillKindFilter(){return[{label:this.$t("アクティブスキル"),value:l.normal},{label:this.$t("ブレイズアーツ"),value:l.blazeArt},{label:this.$t("パッシブスキル"),value:l.effect}]}get attributeFilter(){return Object.entries(this.dataManager.lookup.EBattleAttribute).map(([e,t])=>({label:this.$t(t),value:+e}))}get elementFilter(){return Object.entries(this.dataManager.lookup.EBattleElementKind).map(([e,t])=>({label:this.$t(t),value:+e}))}get targetTeamFilter(){return Object.entries(this.dataManager.lookup.targetTeam).map(([e,t])=>({label:this.$t(t),value:+e}))}get targetScopeFilter(){return Object.entries(this.dataManager.lookup.eFieldItemRange).map(([e,t])=>({label:this.$t(t),value:+e}))}get triggerFilter(){return Object.values(f["e"]).filter(e=>"string"===typeof e).map(e=>({label:e,value:f["e"][e]}))}get effectFilter(){return Object.values(f["c"]).filter(e=>"string"===typeof e).map(e=>({label:e,value:f["c"][e]}))}get effectTargetFilter(){return Object.values(f["d"]).filter(e=>"string"===typeof e).map(e=>({label:e,value:f["d"][e]}))}get hasFilter(){return[{label:this.$t("追加状態 (自)"),value:1},{label:this.$t("追加状態"),value:2},{label:this.$t("アイテム"),value:3},{label:this.$t("敵"),value:4},{label:this.$t("人物"),value:5}]}get skills(){switch(this.filter.skillKind){case l.normal:return this.dataManager.skills;case l.blazeArt:return this.dataManager.skillBlazeArts;case l.effect:return this.dataManager.skillEffects;case l.none:default:return this.dataManager.skill.m_vList}}get filteredSkills(){const e=JSON.stringify(this.filter);if(!this.filterCache.has(e)){let t=this.skills.filter(e=>(""===this.filter.attribute||e.attackSkill.attribute===+this.filter.attribute)&&(""===this.filter.element||e.attackSkill.element===+this.filter.element)&&(""===this.filter.targetTeam||e.targetTeam===+this.filter.targetTeam)&&(""===this.filter.targetScope||e.targetScope===+this.filter.targetScope)&&([null,"",-1].includes(this.filter.trigger)||e.trigger===this.filter.trigger)&&([null,"",-1].includes(this.filter.effect)||e.effect===this.filter.effect)&&([null,"",-1].includes(this.filter.effectTarget)||e.effectTarget===this.filter.effectTarget)&&(!this.filter.name||e.id===+this.filter.name||e.name.toLocaleLowerCase().includes(this.filter.name.toLocaleLowerCase()))&&(!this.filter.detail||e.detail.toLocaleLowerCase().includes(this.filter.detail.toLocaleLowerCase()))&&(!this.filter.abnormalState||e.stateOwn.some(({id:e})=>e===this.filter.abnormalState)||e.state.some(({id:e})=>e===this.filter.abnormalState))&&(!this.filter.has.includes(1)||e.stateOwn.length)&&(!this.filter.has.includes(2)||e.state.length)&&(!this.filter.has.includes(3)||this.dataManager.itemsBySkill[e.id])&&(!this.filter.has.includes(4)||this.dataManager.enemiesBySkill[e.id])&&(!this.filter.has.includes(5)||this.dataManager.charactersBySkill[e.id]));const a=e=>this.filter.sort.split(".").reduce((e,t)=>e[t],e);this.filter.order?"ascending"===this.filter.order?t.sort((e,t)=>a(e)-a(t)):t.sort((e,t)=>a(t)-a(e)):t=t.reverse(),this.filterCache.set(e,t)}return this.filterCache.get(e)}get filteredPaginationSkills(){return this.filteredSkills.slice((this.page-1)*this.take,this.page*this.take)}onSortChange({prop:e,order:t}){this.$set(this.filter,"sort",e),this.$set(this.filter,"order",t),this.resetPage()}scrollTableTop(){this.$refs.table.$el.scrollIntoView()}resetPage(){this.page=1}beforeMount(){this.$route.query.skillKind&&this.$set(this.filter,"skillKind",+this.$route.query.skillKind),this.$route.query.id&&this.$set(this.filter,"name",this.$route.query.id.toString()||"")}};_=Object(s["b"])([Object(o["b"])({components:{JsonViewDialog:h["a"]},computed:{...Object(m["b"])("skillsFilter",["showColumnId","showColumnName","showColumnAttackSkillAttribute","showColumnAttackSkillElement","showColumnTargetTeam","showColumnStateOwn","showColumnState"])}})],_);var p=_,b=p,k=(a("4255"),a("2877")),v=Object(k["a"])(b,i,r,!1,null,"17038d26",null);t["default"]=v.exports},"94ed":function(e,t,a){"use strict";a("30b3")},bb51:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("InfoHeader"),a("el-divider"),a("div",e._l(e.allPages,(function(t){return a("div",{staticClass:"categories__container"},[a("div",{staticClass:"categories__title-container"},[a("h2",[e._v(e._s(t.title))])]),a("div",{staticClass:"categories"},e._l(t.pages,(function(t){return a("div",{staticClass:"category__container"},[a("router-link",{staticClass:"category__link",attrs:{to:t.to}},[e.darkMode?a("span",[e._v(e._s(t.label))]):a("h3",[e._v(e._s(t.label))]),a("img",{staticClass:"category__image",class:t.img.class,attrs:{src:t.img.src,alt:t.label||t.imgAlt}})])],1)})),0)])})),0),a("el-divider"),a("div",{staticClass:"strategy-guides"},[a("h3",[e._v(e._s(e.$t("他のサイト")))]),a("br"),e._l(e.otherStrategyPages,(function(t,l){return a("div",[a("h4",[e._v(e._s(t.title))]),e._l(t.links,(function(t){return a("p",[a("el-link",{attrs:{href:t.href,target:"_blank",rel:"noopener"}},[e._v(e._s(t.href))])],1)})),e.otherStrategyPages.length!==l+1?a("el-divider"):e._e()],2)}))],2),a("el-divider"),a("div",{staticClass:"other-links"},[e._l(e.otherLinks,(function(t,l){return[e._l(t,(function(t){return a("div",[a("el-link",{attrs:{href:t.href,target:"_blank",rel:"noopener"}},[e._v(e._s(t.title))])],1)})),e.otherLinks.length!==l+1?a("el-divider"):e._e()]}))],2)],1)},i=[],r=a("ade3"),n=(a("2b3d"),a("9ab4")),s=a("2fe1"),o=a("0063"),c=a.n(o),u=a("5935"),m=a("6b98"),g=a("7111"),f=a("848f"),h=a("67a2");class d extends m["a"]{constructor(...e){super(...e),Object(r["a"])(this,"showHiddenContent",void 0),Object(r["a"])(this,"darkMode",void 0)}}let _=class extends d{get allPages(){return[{title:this.$t("ツール"),pages:this.pageTools},{title:this.$t("装備"),pages:this.pageWeapons},{title:this.$t("アイテム"),pages:this.pageItems},{title:this.$t("スキル"),pages:this.pageSkills},{title:this.$t("キャラクター"),pages:this.pageCharacters},{title:this.$t("敵"),pages:this.pageEnemies},{title:this.$t("地図"),pages:this.pageArea},{title:this.$t("他の資料"),pages:this.pageInfo},{title:this.$t("他"),pages:this.otherPageInfo}]}get pageTools(){return[{label:this.$t("キャラクタービルダー"),img:{src:"img/other/Texture2D/item_texture_0024.png"},to:{name:"ToolsCharacterBuilder"}},{label:this.$t("調合アイテム"),img:{src:"img/icon/icon_bowl.png",class:{"compose-item__image":!0}},to:{name:"ToolsComposeItem"}},{label:this.$t("材料 / 装備品質強化"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10020003.png"},to:{name:"ToolsItemEnhanceQuality"}},{label:this.$t("装備経験値強化"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_55010003.png"},to:{name:"ToolsEquipmentExperienceLeveling"}},{label:this.$t("ブレイズアーツレベリング"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_56010002.png"},to:{name:"ToolsBlazeArtLeveling"}}]}get pageWeapons(){return[{label:this.$t("装備ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsEquipmentRanking"}}].concat(c.a.from(this.dataManager.itemsEquipments).groupBy(e=>e.CATEG).orderBy(e=>e.key()).select(e=>({label:this.$t(this.dataManager.lookup.itemCategory[e.key()]),img:{src:e.first().icon},to:{name:"Items",query:{category:e.key()}}})).toArray())}get pageItems(){const e=c.a.from(this.dataManager.item.m_vList).where(e=>!e.EQU_BRD).groupBy(e=>e.CATEG).orderBy(e=>e.key()).select(e=>({label:this.$t(this.dataManager.lookup.itemCategory[e.key()]),img:{src:e.first().icon},to:{name:"Items",query:{category:e.key()}}})).toArray();return this.showHiddenContent&&e.push({label:this.$t("未使用アイテム"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_20020010.png"},to:{name:"ItemsUnusedItems"}},{label:this.$t("他の投げ物"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10350010.png"},to:{name:"ItemsThrowables"}}),e}get pageSkills(){return[{label:this.$t("アクティブスキル"),img:{src:"img/icon/icon_skill_00003.png"},to:{name:"Skills",query:{skillKind:h["SkillKind"].normal}}},{label:this.$t("パッシブスキル"),img:{src:"img/fx/Texture2D/FX_Skill2005_02.png"},to:{name:"Skills",query:{skillKind:h["SkillKind"].effect}}},{label:this.$t("ブレイズアーツ"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_56010003.png"},to:{name:"Skills",query:{skillKind:h["SkillKind"].blazeArt}}},{label:this.$t("強化効果"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10950010.png"},to:{name:"SkillsAddon"}},{label:this.$t("異常状態"),img:{src:"img/fx/Texture2D/FX_smoke.png"},to:{name:"SkillsAbnormalEffect"}}]}get pageCharacters(){const e=[{label:this.$t("キャラクターランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsCharacterRanking"}},{label:this.$t("戦闘キャラクター"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_0001.png"},to:{name:"Characters",query:{characterType:f["a"].battle}}},{label:this.$t("NPC"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_3007_00.png"},to:{name:"Characters",query:{characterType:f["a"].npc}}}];return this.showHiddenContent&&e.push({label:this.$t("他のキャラクター"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_20001.png"},to:{name:"CharactersOtherCharacters"}}),e}get pageEnemies(){return[{label:this.$t("敵ランキング"),img:{src:"img/other/Texture2D/item_texture_0025.png"},to:{name:"ToolsEnemyRanking"}},{label:this.$t("敵"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_9999_00.png"},to:{name:"Enemies"}}]}get pageArea(){return[{label:this.$t("区域"),img:{src:"img/icon/tree.png"},to:{name:"Areas"}},{label:this.$t("ダンジョン"),img:{src:"img/item_pickup/Texture2D/Item_PickUp002_Stone.png"},to:{name:"AreasDungeons"}},{label:this.$t("他の物"),img:{src:"img/item_pickup/Texture2D/Item_PickUp001_Stone.png"},to:{name:"AreasGimmicks"}}]}get pageInfo(){return[{label:this.$t("クエスト"),img:{src:"img/other/Texture2D/item_texture_0018.png"},to:{name:"InfoQuest"}},{label:this.$t("ダイアログ"),img:{src:"img/icon_chara/Texture2D/icon_chara_all_1010_00.png"},to:{name:"InfoDialog"}},{label:this.$t("大事なもの(財貨)"),img:{src:"img/icon_item01/Texture2D/icon_item01_00001.png"},to:{name:"InfoWealth"}},{label:this.$t("称号"),img:{src:"img/icon_degree/Texture2D/icon_degree_0605.png"},to:{name:"InfoDegree"}},{label:this.$t("課題"),img:{src:"img/icon/icon_mission.png",class:"icon-daily-mission"},to:{name:"InfoDailyMission"}},{label:this.$t("トレジャー"),img:{src:"img/icon/icon_hunt.png"},to:{name:"InfoHunt"}},{label:this.$t("ゾーン"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10500014.png"},to:{name:"InfoZone"}},{label:this.$t("品質表"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10059999.png"},to:{name:"InfoQualityTable"}},{label:this.$t("装備経験値表"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_55019999.png"},to:{name:"InfoEquipmentExperienceTable"}}]}get otherPageInfo(){return[this.showHiddenContent?{label:this.$t("CG"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10350020.png"},to:{name:"OthersCgs"}}:null,this.showHiddenContent?{label:this.$t("音楽 / ボイス"),img:{src:"img/icon_item_s/Texture2D/icon_item_s_10950041.png"},to:{name:"OthersAudios"}}:null,{label:this.$t("計算/公式"),img:{src:"img/other/Texture2D/item_texture_0010.png"},to:{name:"OthersCalculate"}},{label:this.$t("降臨バタル(昔)"),img:{src:"img/enemy_tex/Texture2D/enemy_tex_023_03.png"},to:{name:"OthersAdventBattle"}},{label:"",img:{src:"img/tips/Texture2D/Tips_Chara_01.png"},imgAlt:"tips",to:{name:"OthersTips"}},{label:this.$t("宝文字"),img:{src:"img/other/Texture2D/item_texture_0020.png"},to:{name:"OthersTreasureText"}},{label:this.$t("チャット資料"),img:{src:"img/other/stamp.png"},to:{name:"OthersChat"}}].filter(e=>e)}get otherStrategyPages(){return[{title:"ブレセイル観光局",links:[{href:"https://bresail-kanko.info"},{href:"https://twitter.com/bresail_kanko"},{href:"https://twitter.com/re_dream5"}]},{title:"アトリエオンライン攻略日記〜シャオンのアトリエ〜",links:[{href:"https://ameblo.jp/shana12151014/"},{href:"https://twitter.com/_shaon"}]},{title:"かぴ",links:[{href:"https://twitter.com/kapi_atorie"}]},{title:"アトリエオンライン攻略Wikiまとめ【ブレセイルの錬金術士】",links:[{href:"https://atelieronline.gamerch.com/"}]},{title:"アトリエオンライン攻略",links:[{href:"https://appmedia.jp/atelier-online"}]},{title:"アトリエオンライン攻略wiki",links:[{href:"http://atelier-online.gamerswiki.jp"}]},{title:"煉金工坊OL 資料庫",links:[{href:"https://forum.gamer.com.tw/C.php?bsn=33099&snA=883&tnum=1"},{href:"https://docs.google.com/spreadsheets/d/1GzUq1eeawlkqm6tVz1e36Fx2anNgPjIAKdwg20g8pCg/edit?usp=sharing"}]},{title:"Atelier Online Material Quick Reference Sheet",links:[{href:"https://docs.google.com/spreadsheets/d/1ww56bJvLGK47T7JkiXw-RbId4zz4x1Lxe6Km1zdrLSg/edit?usp=sharing"}]}]}get otherLinks(){return[this.otherLinksJp,this.otherLinksTw,this.otherLinksEn]}get otherLinksJp(){return[{title:"アトリエ オンライン ～ブレセイルの錬金術士～",href:"https://play.google.com/store/apps/details?id=jp.nhnpa.SJAO"},{title:"アトリエオンライン",href:"https://atelier-online.jp/"},{title:"【公式】アトリエオンライン",href:"https://twitter.com/ao_forest"},{title:"『アトリエ オンライン』 4コマ漫画まとめ",href:"https://twitter.com/i/events/1037277820232163328"}]}get otherLinksTw(){return[{title:"鍊金工房 Online ～布雷賽爾的鍊金術士～",href:"https://play.google.com/store/apps/details?id=com.boltrend.ateliertc"},{title:"鍊金工房 Online",href:"https://atelier-online.boltrend.com/zh-tw/preorder"},{title:"鍊金工房 Online Facebook",href:"https://www.facebook.com/AtelieronlineTW"},{title:"鍊金工房 Online 巴哈姆特",href:"https://forum.gamer.com.tw/B.php?bsn=33099"}]}get otherLinksEn(){return[{title:"Atelier Online: Alchemist of Bressisle",href:"https://play.google.com/store/apps/details?id=com.boltrend.atelieren"},{title:"Atelier Online Reddit",href:"https://www.reddit.com/r/AtelierOnlineOfficial"},{title:"Atelier Online Discord",href:"https://discord.gg/8smHyfwmPM"}]}changeLocaleHref(e){const t=new URL(window.location.href);return t.searchParams.set("locale",e),t.toString()}async onShowHiddenContent(e){e&&await this.$confirm(this.$t("ネタバレのコンテンツ表示しでよろしいでしか")+"?","",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}),this.showHiddenContent=e,window.location.reload()}};_=Object(n["b"])([Object(s["b"])({components:{InfoHeader:g["a"]},computed:{...Object(u["b"])("home",["showHiddenContent","darkMode"])}})],_);var p=_,b=p,k=(a("94ed"),a("2877")),v=Object(k["a"])(b,l,i,!1,null,"397eec0e",null);t["default"]=v.exports}}]);