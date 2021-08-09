(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsEquipmentRanking"],{baf1:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("div",{staticClass:"filters"},[l("div",{staticClass:"filter"},[l("span",[t._v(t._s(t.$t("カテゴリー")))]),l("el-select",{attrs:{placeholder:"",searchable:"",clearable:""},on:{change:t.updateSort},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.itemCategoryOptions,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("div",{staticClass:"filter"},[l("span",[t._v(t._s(t.$t("武器種類")))]),l("el-select",{attrs:{placeholder:"",searchable:"",clearable:"",disabled:!t.isCurrentCategoryWeaponKindFilter},model:{value:t.weaponKind,callback:function(e){t.weaponKind=e},expression:"weaponKind"}},t._l(t.weaponKindOptions,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("div",{staticClass:"filter"},[l("span",[t._v(t._s(t.$t("攻撃属性")))]),l("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:t.battleElement,callback:function(e){t.battleElement=e},expression:"battleElement"}},t._l(Object.entries(t.dataManager.lookup.EBattleElementKind),(function(e){var a=e[0],o=e[1];return l("el-option",{key:a,attrs:{label:t.$t(o),value:+a}})})),1)],1),l("div",{staticClass:"filter"},[l("span",[t._v(t._s(t.$t("スキル属性")))]),l("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:t.skillElement,callback:function(e){t.skillElement=e},expression:"skillElement"}},t._l(Object.entries(t.dataManager.lookup.EBattleElementKind),(function(e){var a=e[0],o=e[1];return l("el-option",{key:a,attrs:{label:t.$t(o),value:+a}})})),1)],1),l("div",{staticClass:"filters"},[l("el-checkbox",{on:{change:t.updateSort},model:{value:t.support,callback:function(e){t.support=e},expression:"support"}},[t._v(t._s(t.$t("サブ装備")))])],1)]),l("div",{staticClass:"filters"},[l("div",{staticClass:"filter"},[l("span",[t._v(t._s(t.$t("品質")))]),l("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:t.quality,callback:function(e){t.quality=e},expression:"quality"}})],1),l("div",{staticClass:"filter"},[l("span",[t._v("LV")]),l("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}})],1)]),l("div",{staticClass:"filters"},[l("div",{staticClass:"filter"},[l("el-checkbox",{model:{value:t.showColumnTotalState,callback:function(e){t.showColumnTotalState=e},expression:"showColumnTotalState"}},[t._v(t._s(t.$t("総戦闘力")))]),l("el-checkbox",{model:{value:t.showColumnSATKSkill,callback:function(e){t.showColumnSATKSkill=e},expression:"showColumnSATKSkill"}},[t._v(t._s(t.$t("物理スキル")))]),l("el-checkbox",{model:{value:t.showColumnSATK,callback:function(e){t.showColumnSATK=e},expression:"showColumnSATK"}},[t._v(t._s(t.$t("物理攻撃")))]),l("el-checkbox",{model:{value:t.showColumnSDEF,callback:function(e){t.showColumnSDEF=e},expression:"showColumnSDEF"}},[t._v(t._s(t.$t("物理防禦")))]),l("el-checkbox",{model:{value:t.showColumnMATKSkill,callback:function(e){t.showColumnMATKSkill=e},expression:"showColumnMATKSkill"}},[t._v(t._s(t.$t("魔法スキル")))]),l("el-checkbox",{model:{value:t.showColumnMATK,callback:function(e){t.showColumnMATK=e},expression:"showColumnMATK"}},[t._v(t._s(t.$t("魔法攻撃")))]),l("el-checkbox",{model:{value:t.showColumnMDEF,callback:function(e){t.showColumnMDEF=e},expression:"showColumnMDEF"}},[t._v(t._s(t.$t("魔法防禦")))]),l("el-checkbox",{model:{value:t.showColumnSPD,callback:function(e){t.showColumnSPD=e},expression:"showColumnSPD"}},[t._v(t._s(t.$t("速度")))]),l("el-checkbox",{model:{value:t.showColumnQTH,callback:function(e){t.showColumnQTH=e},expression:"showColumnQTH"}},[t._v(t._s(t.$t("クリティカル")))]),l("el-checkbox",{model:{value:t.showColumnDDG,callback:function(e){t.showColumnDDG=e},expression:"showColumnDDG"}},[t._v(t._s(t.$t("回避")))]),l("el-checkbox",{model:{value:t.showColumnTotalElement,callback:function(e){t.showColumnTotalElement=e},expression:"showColumnTotalElement"}},[t._v(t._s(t.$t("全属性")))]),l("el-checkbox",{model:{value:t.showColumnFIRE,callback:function(e){t.showColumnFIRE=e},expression:"showColumnFIRE"}},[t._v(t._s(t.$t("火")))]),l("el-checkbox",{model:{value:t.showColumnWATER,callback:function(e){t.showColumnWATER=e},expression:"showColumnWATER"}},[t._v(t._s(t.$t("水")))]),l("el-checkbox",{model:{value:t.showColumnEARTH,callback:function(e){t.showColumnEARTH=e},expression:"showColumnEARTH"}},[t._v(t._s(t.$t("土")))]),l("el-checkbox",{model:{value:t.showColumnWIND,callback:function(e){t.showColumnWIND=e},expression:"showColumnWIND"}},[t._v(t._s(t.$t("風")))]),l("el-checkbox",{model:{value:t.showColumnLIGHT,callback:function(e){t.showColumnLIGHT=e},expression:"showColumnLIGHT"}},[t._v(t._s(t.$t("光")))]),l("el-checkbox",{model:{value:t.showColumnDARK,callback:function(e){t.showColumnDARK=e},expression:"showColumnDARK"}},[t._v(t._s(t.$t("闇")))])],1)]),l("el-table",{ref:"table",attrs:{data:t.filteredData},on:{"sort-change":t.onSortChange}},[l("el-table-column",{attrs:{prop:"NAME",label:t.$t("名前")},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.NAME))]),l("router-link",{attrs:{to:{name:"ItemsItem",query:{df:e.row.DF,quality:t.quality,level:t.level}},target:"_blank"}},[l("img",{staticClass:"icon-small",attrs:{src:e.row.icon,alt:e.row.NAME}})]),t._l(t.dataManager.charactersByGroupDf[e.row.GROUP_DF],(function(a){return e.row.GROUP_DF&&t.dataManager.charactersByGroupDf[e.row.GROUP_DF]?[l("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:a.DF}},target:"_blank"}},[l("img",{staticClass:"icon-small",attrs:{src:a.icon,alt:a.NAME}})])]:t._e()}))]}}])}),t.showColumnTotalState?l("el-table-column",{attrs:{prop:"totalState",label:t.$t("総戦闘力"),width:t.tableOptions.column.longTextWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnSATK&&t.showAttackSkillColumn?l("el-table-column",{attrs:{prop:"SATKSkill",width:t.tableOptions.column.attackSkillWidth,align:t.tableOptions.column.align,sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.SATKSkill))]),e.row.SATKSkill&&e.row.skill?[l("span",[t._v(" (")]),l("span",[t._v(t._s(100*e.row.skill.effectValue)+"%")]),l("span",[t._v(" "+t._s(t.$t(t.dataManager.lookup.EBattleElementKindShort[e.row.skill.element])))]),l("span",[t._v(")")])]:t._e()]}}],null,!1,2591032270)},[l("template",{slot:"header"},["en"===t.dataManager.locale?l("el-tooltip",{attrs:{content:t.$t("物理スキル"),placement:"top"}},[l("span",[t._v("P.ATK Skill")])]):l("span",[t._v(t._s(t.$t("物理スキル")))])],1)],2):t._e(),t.showColumnSATK?l("el-table-column",{attrs:{prop:"SATK",label:t.$t("物理攻撃"),width:t.tableOptions.column.longTextWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnSDEF?l("el-table-column",{attrs:{prop:"SDEF",label:t.$t("物理防禦"),width:t.tableOptions.column.longTextWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnMATKSkill&&t.showAttackSkillColumn?l("el-table-column",{attrs:{prop:"MATKSkill",width:t.tableOptions.column.attackSkillWidth,align:t.tableOptions.column.align,sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v(t._s(e.row.MATKSkill))]),e.row.MATKSkill&&e.row.skill?[l("span",[t._v(" (")]),l("span",[t._v(t._s(100*e.row.skill.effectValue)+"%")]),l("span",[t._v(" "+t._s(t.$t(t.dataManager.lookup.EBattleElementKindShort[e.row.skill.element])))]),l("span",[t._v(")")])]:t._e()]}}],null,!1,3923244558)},[l("template",{slot:"header"},["en"===t.dataManager.locale?l("el-tooltip",{attrs:{content:t.$t("魔法スキル"),placement:"top"}},[l("span",[t._v("M.ATK Skill")])]):l("span",[t._v(t._s(t.$t("魔法スキル")))])],1)],2):t._e(),t.showColumnMATK?l("el-table-column",{attrs:{prop:"MATK",label:t.$t("魔法攻撃"),width:t.tableOptions.column.longTextWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnMDEF?l("el-table-column",{attrs:{prop:"MDEF",label:t.$t("魔法防禦"),width:t.tableOptions.column.longTextWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnSPD?l("el-table-column",{attrs:{prop:"SPD",label:t.$t("速度"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnQTH&&!t.support?l("el-table-column",{attrs:{prop:"QTH",label:t.$t("クリティカル"),width:t.tableOptions.column.criticalHitWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnDDG&&!t.support?l("el-table-column",{attrs:{prop:"DDG",label:t.$t("回避"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnTotalElement?l("el-table-column",{attrs:{prop:"totalElement",label:t.$t("全属性"),width:t.tableOptions.column.allElementWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnFIRE?l("el-table-column",{attrs:{prop:"FIRE",label:t.$t("火"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnWATER?l("el-table-column",{attrs:{prop:"WATER",label:t.$t("水"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnEARTH?l("el-table-column",{attrs:{prop:"EARTH",label:t.$t("土"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnWIND?l("el-table-column",{attrs:{prop:"WIND",label:t.$t("風"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnLIGHT?l("el-table-column",{attrs:{prop:"LIGHT",label:t.$t("光"),width:"100%",align:t.tableOptions.column.align,sortable:"custom"}}):t._e(),t.showColumnDARK?l("el-table-column",{attrs:{prop:"DARK",label:t.$t("闇"),width:t.tableOptions.column.darknessWidth,align:t.tableOptions.column.align,sortable:"custom"}}):t._e()],1)],1)},o=[],n=l("5530"),s=l("bee2"),i=l("d4ec"),u=l("257e"),c=l("262e"),r=l("2caf"),m=l("ade3"),b=(l("99af"),l("caad"),l("2532"),l("4de4"),l("d81d"),l("b64b"),l("4e82"),l("07ac"),l("9ab4")),h=l("2fe1"),p=l("6b98"),d=l("0063"),v=l.n(d),w=l("2ef0"),k=l("acb1"),C=l("8faf"),g=l("5935"),E=l("f015"),f=function(t){Object(c["a"])(l,t);var e=Object(r["a"])(l);function l(){var t;Object(i["a"])(this,l);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return t=e.call.apply(e,[this].concat(o)),Object(m["a"])(Object(u["a"])(t),"category",void 0),Object(m["a"])(Object(u["a"])(t),"weaponKind",void 0),Object(m["a"])(Object(u["a"])(t),"battleElement",void 0),Object(m["a"])(Object(u["a"])(t),"skillElement",void 0),Object(m["a"])(Object(u["a"])(t),"support",void 0),Object(m["a"])(Object(u["a"])(t),"quality",void 0),Object(m["a"])(Object(u["a"])(t),"level",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnTotalState",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnSATKSkill",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnSATK",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnSDEF",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnMATKSkill",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnMATK",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnMDEF",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnSPD",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnQTH",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnDDG",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnTotalElement",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnFIRE",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnWATER",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnEARTH",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnWIND",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnLIGHT",void 0),Object(m["a"])(Object(u["a"])(t),"showColumnDARK",void 0),t}return l}(p["a"]),S=function(t){Object(c["a"])(l,t);var e=Object(r["a"])(l);function l(){var t;Object(i["a"])(this,l);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return t=e.call.apply(e,[this].concat(o)),Object(m["a"])(Object(u["a"])(t),"sort",""),Object(m["a"])(Object(u["a"])(t),"order",null),t}return Object(s["a"])(l,[{key:"tableOptions",get:function(){var t={column:{longTextWidth:"100%",attackSkillWidth:"120%",criticalHitWidth:"130%",allElementWidth:"120%",darknessWidth:"100%",align:"left"}};switch(this.dataManager.locale){case"zh-TW":case"zh-HK":case"zh-CN":return Object(n["a"])(Object(n["a"])({},t),{},{column:Object(n["a"])(Object(n["a"])({},t.column),{},{criticalHitWidth:"100%"})});case"en":return{column:{longTextWidth:"180",attackSkillWidth:"130%",criticalHitWidth:"120%",allElementWidth:"120%",darknessWidth:"110%",align:"center"}};default:return t}}},{key:"showAttackSkillColumn",get:function(){return this.isCurrentCategoryWeaponKindFilter&&!this.support}},{key:"isCurrentCategoryWeaponKindFilter",get:function(){return!this.category||this.dataManager.itemsWeaponKindCategories.includes(this.category)}},{key:"itemCategoryOptions",get:function(){var t=this;return v.a.from(this.dataManager.item.m_vList).where((function(t){return!!t.EQU_BRD})).groupBy((function(t){return t.CATEG})).orderBy((function(t){return t.key()})).select((function(e){return{label:t.$t(t.dataManager.lookup.itemCategory[e.key()]),value:e.key()}}))}},{key:"weaponKindOptions",get:function(){var t=this;return Object.keys(this.dataManager.itemsByWeaponKind).map((function(e){return{label:t.$t(t.dataManager.lookup.weaponKind[e]),value:+e}})).filter((function(t){return t.value}))}},{key:"filteredData",get:function(){var t=this,e=this.support?this.supportEquipments:this.equpiments;return this.sort?"ascending"===this.order?v.a.from(e).orderBy((function(e){return e[t.sort]})).thenBy((function(t){return t.totalState})).thenBy((function(t){return t.totalElement})).toArray():v.a.from(e).orderByDescending((function(e){return e[t.sort]})).thenByDescending((function(t){return t.totalState})).thenByDescending((function(t){return t.totalElement})).toArray():e}},{key:"items",get:function(){return this.isCurrentCategoryWeaponKindFilter||(this.weaponKind=null),this.weaponKind?this.dataManager.itemsByWeaponKind[this.weaponKind]:this.category?this.dataManager.itemsByCategory[this.category]:this.dataManager.itemsEquipments}},{key:"filteredItems",get:function(){var t=this;return this.items.filter((function(e){var l,a,o;return([null,"",-1].includes(t.battleElement)||(null!==(l=null===(a=e.elementChangeSkill)||void 0===a?void 0:a.effectValue)&&void 0!==l?l:0)===t.battleElement)&&([null,"",-1].includes(t.skillElement)||(null===(o=e.getAttackSkill())||void 0===o?void 0:o.element)===t.skillElement)}))}},{key:"supportEquipments",get:function(){var t=this;return this.filteredItems.map((function(e){return{DF:e.DF,NAME:e.NAME,GROUP_DF:e.GROUP_DF,icon:e.icon,totalState:Object(w["sum"])(C["b"].states.filter((function(t){return t in e.EQU})).map((function(l){return e.EQU[l].getSupportValue(t.level)}))),SATK:e.EQU.SATK.getSupportValue(t.level),SATKSkill:0,SDEF:e.EQU.SDEF.getSupportValue(t.level),MATK:e.EQU.MATK.getSupportValue(t.level),MATKSkill:0,MDEF:e.EQU.MDEF.getSupportValue(t.level),SPD:e.EQU.SPD.getSupportValue(t.level),QTH:0,DDG:0,totalElement:Object(w["sum"])(Object.values(e.ELM).map((function(t){return k["a"].getSupportElement(t)}))),FIRE:k["a"].getSupportElement(e.ELM.FIRE),WATER:k["a"].getSupportElement(e.ELM.WATER),EARTH:k["a"].getSupportElement(e.ELM.EARTH),WIND:k["a"].getSupportElement(e.ELM.WIND),LIGHT:k["a"].getSupportElement(e.ELM.LIGHT),DARK:k["a"].getSupportElement(e.ELM.DARK),skill:null}}))}},{key:"equpiments",get:function(){var t=this;return this.filteredItems.map((function(e){var l=e.getState("SATK",t.quality,t.level).total,a=e.getState("MATK",t.quality,t.level).total,o=e.getAttackSkill(t.quality);return{DF:e.DF,NAME:e.NAME,GROUP_DF:e.GROUP_DF,icon:e.icon,totalState:Object(w["sum"])(e.getStates(t.quality,t.level).map((function(t){return t.total}))),SATK:l,SATKSkill:o&&[E["b"].eSLASH_DAMAGED,E["b"].eBLOW_DAMAGED].includes(o.attackSkill.attribute)?Math.round(l*o.effectValue):0,SDEF:e.getState("SDEF",t.quality,t.level).total,MATK:a,MATKSkill:o&&o.attackSkill.attribute===E["b"].eMAGIC_DAMAGED?Math.round(a*o.effectValue):0,MDEF:e.getState("MDEF",t.quality,t.level).total,SPD:e.getState("SPD",t.quality,t.level).total,QTH:e.getState("QTH",t.quality,t.level).total,DDG:e.getState("DDG",t.quality,t.level).total,totalElement:Object(w["sum"])(e.getElements(t.quality).map((function(t){return t.total}))),FIRE:e.getElement("FIRE",t.quality).total,WATER:e.getElement("WATER",t.quality).total,EARTH:e.getElement("EARTH",t.quality).total,WIND:e.getElement("WIND",t.quality).total,LIGHT:e.getElement("LIGHT",t.quality).total,DARK:e.getElement("DARK",t.quality).total,skill:o}}))}},{key:"beforeMount",value:function(){this.category||(this.category=this.dataManager.itemsEquipments[0].CATEG)}},{key:"onSortChange",value:function(t){var e=t.prop,l=t.order;this.sort=e,this.order=l}},{key:"updateSort",value:function(){var t=this.sort;if(this.sort&&this.$refs.table.clearSort(),this.showAttackSkillColumn)this.sort=t;else switch(t){case"SATKSkill":this.sort="SATK";break;case"MATKSkill":this.sort="MATK";break;default:this.sort=t}}}]),l}(f);S=Object(b["b"])([Object(h["b"])({components:{},computed:Object(n["a"])({},Object(g["b"])("equipmentRankingFilter",["category","weaponKind","battleElement","skillElement","support","quality","level","showColumnTotalState","showColumnSATKSkill","showColumnSATK","showColumnSDEF","showColumnMATKSkill","showColumnMATK","showColumnMDEF","showColumnSPD","showColumnQTH","showColumnDDG","showColumnTotalElement","showColumnFIRE","showColumnWATER","showColumnEARTH","showColumnWIND","showColumnLIGHT","showColumnDARK"]))})],S);var O=S,T=O,_=l("2877"),A=Object(_["a"])(T,a,o,!1,null,null,null);e["default"]=A.exports}}]);