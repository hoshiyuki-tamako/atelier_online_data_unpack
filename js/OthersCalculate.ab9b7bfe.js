(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OthersCalculate"],{"40dc":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"calculation-state"},[s("h3",[t._v(t._s(t.$t("ステータスの公式")))]),s("div",[s("p",[t._v("G = "+t._s(t.$t("ゲイン")))]),s("p",[t._v("M = "+t._s(t.$t("マックス")))]),s("p",[t._v("R = "+t._s(t.$t("レベル")))]),s("p",[t._v("B = "+t._s(t.$t("ベース")))]),s("p",[t._v("trunc(B + pow(level/R, G) * (M - B))")])]),s("br"),s("h3",[t._v(t._s(t.$t("サブ装備")))]),s("div",[s("p",[t._v("x = "+t._s(t.$t("上值"))+" * 0.05")]),s("p",[t._v("x "+t._s(">")+"= 0 ? ceil(x) : floor(x)")])]),s("br"),s("h4",[t._v(t._s(t.$t("計算")))]),s("el-form",{attrs:{"label-position":"right","label-width":"80px"}},[s("el-form-item",{attrs:{label:"G"}},[s("el-input-number",{attrs:{label:"G",placeholder:"G",size:"mini",min:0},model:{value:t.state.g,callback:function(e){t.$set(t.state,"g",e)},expression:"state.g"}})],1),s("el-form-item",{attrs:{label:"M"}},[s("el-input-number",{attrs:{placeholder:"M",size:"mini",min:0,step:1,"step-strictly":""},model:{value:t.state.m,callback:function(e){t.$set(t.state,"m",e)},expression:"state.m"}})],1),s("el-form-item",{attrs:{label:"R"}},[s("el-input-number",{attrs:{label:"R",placeholder:"R",size:"mini",min:0,step:1,"step-strictly":""},model:{value:t.state.r,callback:function(e){t.$set(t.state,"r",e)},expression:"state.r"}})],1),s("el-form-item",{attrs:{label:"B"}},[s("el-input-number",{attrs:{placeholder:"B",size:"mini",min:0,step:1,"step-strictly":""},model:{value:t.state.b,callback:function(e){t.$set(t.state,"b",e)},expression:"state.b"}})],1),s("el-form-item",{attrs:{label:"Level"}},[s("el-input-number",{attrs:{placeholder:"Level",size:"mini",min:0,step:1,"step-strictly":""},model:{value:t.state.level,callback:function(e){t.$set(t.state,"level",e)},expression:"state.level"}})],1),s("el-form-item",{attrs:{label:"="}},[s("el-input",{staticClass:"calculate__result",attrs:{value:t.stateResult,size:"mini"}})],1),s("el-form-item",{attrs:{label:t.$t("サブ装備")}},[s("el-input",{staticClass:"calculate__result",attrs:{value:t.stateSupportResult,size:"mini"}})],1)],1)],1),s("el-divider"),s("div",[s("h3",[s("span",[t._v(t._s(t.$t("材料 / 装備品質強化")))]),s("span",[t._v(" "),s("el-link",{on:{click:t.onClickTestItemQualityEnhance}},[t._v(t._s(t.$t("試し")))])],1)]),s("div",[s("p",[t._v("G = 6.5")]),s("p",[t._v("M = 2500000")]),s("p",[t._v("R = 100")]),s("p",[t._v("B = 10")]),s("p",[t._v(t._s(t.$t("品質経験値"))+" = trunc(B + pow(level/R, G) * (M - B))")]),s("p",[t._v(t._s(t.$t("品質"))+" = sum("+t._s(t.$t("品質経験値"))+")")])])]),s("el-divider"),s("div",[s("h3",[s("span",[t._v(t._s(t.$t("装備経験値強化")))]),s("span",[t._v(" "),s("el-link",{on:{click:t.onClickTestItemExperience}},[t._v(t._s(t.$t("試し")))])],1)]),s("div",[s("p",[t._v("G = 3")]),s("p",[t._v("M = 20000")]),s("p",[t._v("R = 60")]),s("p",[t._v("B = 1")]),s("p",[t._v(t._s(t.$t("装備経験値"))+" = trunc(B + pow(level/R, G) * (M - B))")]),s("p",[t._v(t._s(t.$t("レベル"))+" = sum("+t._s(t.$t("装備経験値"))+")")])])]),s("el-divider"),s("div",{staticClass:"calculation-strength"},[s("div",[s("p",[t._v(t._s(t.$t("強さ"))+" = sum("+t._s(t.$t("物理攻撃ベース"))+" + "+t._s(t.$t("物理防禦ベース"))+" + "+t._s(t.$t("魔法攻撃ベース"))+" + "+t._s(t.$t("魔法防禦ベース"))+")")])])]),s("el-divider"),s("div",[s("p",[t._v(t._s(t.$t("ダメージ"))+" = (("+t._s(t.$t("攻撃"))+" * 0.25) - ("+t._s(t.$t("防禦"))+" * 0.125)) * random(0.95, 1.05)")]),s("p",[t._v(t._s(t.$t("スキル"))+" "+t._s(t.$t("ダメージ"))+" = "+t._s(t.$t("上值"))+" * "+t._s(t.$t("スキル"))+" / "+t._s(t.$t("エフェクト")))])]),s("el-divider"),s("div",{staticClass:"calculation-quality"},[s("div",[s("p",[t._v(t._s(t.$t("調合品質"))+" = clamp(floor(sum("+t._s(t.$t("品質"))+") / count) + sum("+t._s(t.$t("品質特性"))+"), 1, 100)")])])])],1)},a=[],i=s("ade3"),r=s("9ab4"),n=s("2fe1"),c=s("6b98"),p=s("acb1");let _=class extends c["a"]{constructor(...t){super(...t),Object(i["a"])(this,"state",{g:1,r:60,m:40,b:6,level:80})}get stateFormula(){const t=new p["a"];return t.G=this.state.g,t.R=this.state.r,t.M=this.state.m,t.B=this.state.b,t}get stateResult(){return this.stateFormula.getValue(this.state.level)}get stateSupportResult(){return this.stateFormula.getSupportValue(this.state.level)}onClickTestItemQualityEnhance(){this.$set(this.state,"g",6.5),this.$set(this.state,"m",25e5),this.$set(this.state,"r",100),this.$set(this.state,"b",10)}onClickTestItemExperience(){this.$set(this.state,"g",3),this.$set(this.state,"m",2e4),this.$set(this.state,"r",60),this.$set(this.state,"b",1)}};_=Object(r["b"])([Object(n["b"])({components:{}})],_);var u=_,v=u,o=(s("f038"),s("2877")),m=Object(o["a"])(v,l,a,!1,null,"03b0afd7",null);e["default"]=m.exports},de0e:function(t,e,s){},f038:function(t,e,s){"use strict";s("de0e")}}]);