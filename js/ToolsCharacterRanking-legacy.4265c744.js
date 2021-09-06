(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ToolsCharacterRanking"],{7678:function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"container"},[t("div",{staticClass:"filters"},[t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("性別")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.gender,callback:function(l){e.gender=l},expression:"gender"}},e._l(e.genderOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("武器種類")))]),t("el-select",{attrs:{placeholder:"",clearable:"",filterable:""},model:{value:e.weaponType,callback:function(l){e.weaponType=l},expression:"weaponType"}},e._l(e.weaponTypeOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),t("div",{staticClass:"filters"},[t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("レベル")))]),t("el-input-number",{attrs:{size:"mini",min:1,step:1,"step-strictly":""},model:{value:e.level,callback:function(l){e.level=l},expression:"level"}})],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("食事レベル")))]),t("el-input-number",{attrs:{size:"mini",min:1,max:e.level,step:1,"step-strictly":""},model:{value:e.foodLevel,callback:function(l){e.foodLevel=l},expression:"foodLevel"}})],1),t("div",{staticClass:"filter"},[t("span",[e._v(e._s(e.$t("ブレイズアーツレベル")))]),t("el-input-number",{attrs:{size:"mini",min:0,max:5,step:1,"step-strictly":""},model:{value:e.blazeArtLevel,callback:function(l){e.blazeArtLevel=l},expression:"blazeArtLevel"}})],1)]),t("div",{staticClass:"filters"},[t("div",{staticClass:"filter"},[t("el-checkbox",{model:{value:e.showColumnTotalState,callback:function(l){e.showColumnTotalState=l},expression:"showColumnTotalState"}},[e._v(e._s(e.$t("総戦闘力")))]),t("el-checkbox",{model:{value:e.showColumnBlazeArt,callback:function(l){e.showColumnBlazeArt=l},expression:"showColumnBlazeArt"}},[e._v(e._s(e.$t("ブレイズアーツ")))]),t("el-checkbox",{model:{value:e.showColumnHP,callback:function(l){e.showColumnHP=l},expression:"showColumnHP"}},[e._v(e._s(e.$t("HP")))]),t("el-checkbox",{model:{value:e.showColumnSATK,callback:function(l){e.showColumnSATK=l},expression:"showColumnSATK"}},[e._v(e._s(e.$t("物理攻撃")))]),t("el-checkbox",{model:{value:e.showColumnSDEF,callback:function(l){e.showColumnSDEF=l},expression:"showColumnSDEF"}},[e._v(e._s(e.$t("物理防禦")))]),t("el-checkbox",{model:{value:e.showColumnMATK,callback:function(l){e.showColumnMATK=l},expression:"showColumnMATK"}},[e._v(e._s(e.$t("魔法攻撃")))]),t("el-checkbox",{model:{value:e.showColumnMDEF,callback:function(l){e.showColumnMDEF=l},expression:"showColumnMDEF"}},[e._v(e._s(e.$t("魔法防禦")))]),t("el-checkbox",{model:{value:e.showColumnSPD,callback:function(l){e.showColumnSPD=l},expression:"showColumnSPD"}},[e._v(e._s(e.$t("速度")))]),t("el-checkbox",{model:{value:e.showColumnQTH,callback:function(l){e.showColumnQTH=l},expression:"showColumnQTH"}},[e._v(e._s(e.$t("クリティカル")))]),t("el-checkbox",{model:{value:e.showColumnDDG,callback:function(l){e.showColumnDDG=l},expression:"showColumnDDG"}},[e._v(e._s(e.$t("回避")))]),t("el-checkbox",{model:{value:e.showColumnTotalElement,callback:function(l){e.showColumnTotalElement=l},expression:"showColumnTotalElement"}},[e._v(e._s(e.$t("全属性")))]),t("el-checkbox",{model:{value:e.showColumnFIRE,callback:function(l){e.showColumnFIRE=l},expression:"showColumnFIRE"}},[e._v(e._s(e.$t("火")))]),t("el-checkbox",{model:{value:e.showColumnWATER,callback:function(l){e.showColumnWATER=l},expression:"showColumnWATER"}},[e._v(e._s(e.$t("水")))]),t("el-checkbox",{model:{value:e.showColumnEARTH,callback:function(l){e.showColumnEARTH=l},expression:"showColumnEARTH"}},[e._v(e._s(e.$t("土")))]),t("el-checkbox",{model:{value:e.showColumnWIND,callback:function(l){e.showColumnWIND=l},expression:"showColumnWIND"}},[e._v(e._s(e.$t("風")))]),t("el-checkbox",{model:{value:e.showColumnLIGHT,callback:function(l){e.showColumnLIGHT=l},expression:"showColumnLIGHT"}},[e._v(e._s(e.$t("光")))]),t("el-checkbox",{model:{value:e.showColumnDARK,callback:function(l){e.showColumnDARK=l},expression:"showColumnDARK"}},[e._v(e._s(e.$t("闇")))])],1)]),t("el-table",{attrs:{data:e.filteredData}},[t("el-table-column",{attrs:{prop:"NAME",label:e.$t("名前")},scopedSlots:e._u([{key:"default",fn:function(l){return[t("span",[e._v(e._s(l.row.NAME))]),t("router-link",{attrs:{to:{name:"CharactersCharacter",query:{df:l.row.DF,level:e.level,foodLevel:e.foodLevel}},target:"_blank"}},[t("img",{staticClass:"icon-small",attrs:{src:l.row.icon,alt:""}})])]}}])}),e.showColumnTotalState?t("el-table-column",{attrs:{prop:"totalState",label:e.$t("総戦闘力"),width:e.tableOptions.column.longTextWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnBlazeArt?t("el-table-column",{attrs:{prop:"blazeArt",width:e.tableOptions.column.attackSkillWidth,align:e.tableOptions.column.align,sortable:""},scopedSlots:e._u([{key:"default",fn:function(l){return[t("span",[e._v(e._s(l.row.blazeArt))]),l.row.blazeArt&&l.row.blazeArtSkill&&l.row.blazeArtSkill.attackSkill?[t("span",[e._v(" (")]),t("span",[e._v(e._s(100*l.row.blazeArtSkill.attackSkill.effectValue)+"%")]),t("span",[e._v(" "+e._s(e.$t(e.dataManager.lookup.EBattleElementKindShort[l.row.blazeArtSkill.attackSkill.element])))]),t("span",[e._v(" "+e._s(e.$t(e.dataManager.lookup.EBattleAttributeShort[l.row.blazeArtSkill.attackSkill.attribute])))]),t("span",[e._v(")")])]:e._e()]}}],null,!1,149498821)},[t("template",{slot:"header"},[t("span",[e._v(e._s(e.$t("ブレイズアーツ")))])])],2):e._e(),e.showColumnHP?t("el-table-column",{attrs:{prop:"HP",label:e.$t("HP"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnSATK?t("el-table-column",{attrs:{prop:"SATK",label:e.$t("物理攻撃"),width:e.tableOptions.column.longTextWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnSDEF?t("el-table-column",{attrs:{prop:"SDEF",label:e.$t("物理防禦"),width:e.tableOptions.column.longTextWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnMATK?t("el-table-column",{attrs:{prop:"MATK",label:e.$t("魔法攻撃"),width:e.tableOptions.column.longTextWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnMDEF?t("el-table-column",{attrs:{prop:"MDEF",label:e.$t("魔法防禦"),width:e.tableOptions.column.longTextWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnSPD?t("el-table-column",{attrs:{prop:"SPD",label:e.$t("速度"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnQTH?t("el-table-column",{attrs:{prop:"QTH",label:e.$t("クリティカル"),width:e.tableOptions.column.criticalHitWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnDDG?t("el-table-column",{attrs:{prop:"DDG",label:e.$t("回避"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnTotalElement?t("el-table-column",{attrs:{prop:"totalElement",label:e.$t("全属性"),width:e.tableOptions.column.allElementWidth,align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnFIRE?t("el-table-column",{attrs:{prop:"FIRE",label:e.$t("火"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnWATER?t("el-table-column",{attrs:{prop:"WATER",label:e.$t("水"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnEARTH?t("el-table-column",{attrs:{prop:"EARTH",label:e.$t("土"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnWIND?t("el-table-column",{attrs:{prop:"WIND",label:e.$t("風"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnLIGHT?t("el-table-column",{attrs:{prop:"LIGHT",label:e.$t("光"),width:"100%",align:e.tableOptions.column.align,sortable:""}}):e._e(),e.showColumnDARK?t("el-table-column",{attrs:{prop:"DARK",label:e.$t("闇"),width:e.tableOptions.column.darknessWidth,align:e.tableOptions.column.align,sortable:""}}):e._e()],1)],1)},a=[],n=t("3835"),s=t("5530"),c=t("bee2"),i=t("d4ec"),u=t("257e"),r=t("262e"),b=t("2caf"),m=t("ade3"),h=(t("99af"),t("d81d"),t("4fad"),t("4de4"),t("caad"),t("9ab4")),p=t("2fe1"),v=t("2ef0"),d=t("5935"),w=t("6b98"),C=t("f015"),O=function(e){Object(r["a"])(t,e);var l=Object(b["a"])(t);function t(){var e;Object(i["a"])(this,t);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return e=l.call.apply(l,[this].concat(a)),Object(m["a"])(Object(u["a"])(e),"gender",void 0),Object(m["a"])(Object(u["a"])(e),"weaponType",void 0),Object(m["a"])(Object(u["a"])(e),"foodLevel",void 0),Object(m["a"])(Object(u["a"])(e),"level",void 0),Object(m["a"])(Object(u["a"])(e),"blazeArtLevel",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnTotalState",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnBlazeArt",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnHP",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnSATK",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnSDEF",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnMATK",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnMDEF",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnSPD",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnQTH",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnDDG",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnTotalElement",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnFIRE",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnWATER",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnEARTH",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnWIND",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnLIGHT",void 0),Object(m["a"])(Object(u["a"])(e),"showColumnDARK",void 0),e}return t}(w["a"]),f=function(e){Object(r["a"])(t,e);var l=Object(b["a"])(t);function t(){return Object(i["a"])(this,t),l.apply(this,arguments)}return Object(c["a"])(t,[{key:"tableOptions",get:function(){var e={column:{longTextWidth:"100%",attackSkillWidth:"170%",criticalHitWidth:"130%",allElementWidth:"120%",darknessWidth:"100%",align:"left"}};switch(this.dataManager.locale){case"zh-TW":case"zh-HK":case"zh-CN":return Object(s["a"])(Object(s["a"])({},e),{},{column:Object(s["a"])(Object(s["a"])({},e.column),{},{criticalHitWidth:"100%"})});case"en":return Object(s["a"])(Object(s["a"])({},e),{},{column:Object(s["a"])(Object(s["a"])({},e.column),{},{longTextWidth:"180",attackSkillWidth:"220%",criticalHitWidth:"120%",allElementWidth:"120%",darknessWidth:"110%",align:"center"})});default:return e}}},{key:"genderOptions",get:function(){return[{label:"♂",value:1},{label:"♀",value:2}]}},{key:"weaponTypeOptions",get:function(){var e=this;return Object.entries(this.dataManager.lookup.ESubCategory).map((function(l){var t=Object(n["a"])(l,2),o=t[0],a=t[1];return{label:e.$t(a),value:+o}}))}},{key:"filteredData",get:function(){var e=this;return this.dataManager.charactersCanBattle.filter((function(l){return(!e.gender||l.GEN===e.gender)&&([null,"",-1].includes(e.weaponType)||l.WEAPON.some((function(l){return l.GEN===e.weaponType})))})).map((function(l){var t=l.getState("SATK",e.level,e.foodLevel).total,o=l.getState("MATK",e.level,e.foodLevel).total,a=l.getBlazeArt(e.level,e.blazeArtLevel),n=function(){return null!==a&&void 0!==a&&a.attackSkill?a.attackSkill.attribute===C["b"].eMAGIC_DAMAGED?Math.round(o*a.attackSkill.effectValue):Math.round(t*a.attackSkill.effectValue):0}();return{icon:l.icon,DF:l.DF,NAME:l.NAME,totalState:Object(v["sum"])(l.getStates(e.level,e.foodLevel).map((function(e){return e.total}))),blazeArt:n,HP:l.getState("HP",e.level,e.foodLevel).total,SATK:t,SDEF:l.getState("SDEF",e.level,e.foodLevel).total,MATK:o,MDEF:l.getState("MDEF",e.level,e.foodLevel).total,SPD:l.getState("SPD",e.level,e.foodLevel).total,QTH:l.getState("QTH",e.level,e.foodLevel).total,DDG:l.getState("DDG",e.level,e.foodLevel).total,totalElement:Object(v["sum"])(l.getElements(e.level).map((function(e){return e.total}))),FIRE:l.getElement("FIRE",e.level).total,WATER:l.getElement("WATER",e.level).total,EARTH:l.getElement("EARTH",e.level).total,WIND:l.getElement("WIND",e.level).total,LIGHT:l.getElement("LIGHT",e.level).total,DARK:l.getElement("DARK",e.level).total,blazeArtSkill:a}}))}}]),t}(O);f=Object(h["b"])([Object(p["b"])({components:{},computed:Object(s["a"])({},Object(d["b"])("characterRankingFilter",["gender","weaponType","foodLevel","level","blazeArtLevel","showColumnTotalState","showColumnBlazeArt","showColumnHP","showColumnSATK","showColumnSDEF","showColumnMATK","showColumnMDEF","showColumnSPD","showColumnQTH","showColumnDDG","showColumnTotalElement","showColumnFIRE","showColumnWATER","showColumnEARTH","showColumnWIND","showColumnLIGHT","showColumnDARK"]))})],f);var k=f,g=k,T=(t("9c80"),t("2877")),_=Object(T["a"])(g,o,a,!1,null,"fa4455a2",null);l["default"]=_.exports},"9c80":function(e,l,t){"use strict";t("ca848")},ca848:function(e,l,t){}}]);