(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InfoDialog~InfoQuest~OthersTips"],{"1ab9":function(r,t,n){var e=n("4f4d"),a=n("2514"),o={};for(var l in e)e.hasOwnProperty(l)&&(o[e[l]]=l);var i=r.exports={to:{},get:{}};function s(r,t,n){return Math.min(Math.max(t,r),n)}function h(r){var t=r.toString(16).toUpperCase();return t.length<2?"0"+t:t}i.get=function(r){var t,n,e=r.substring(0,3).toLowerCase();switch(e){case"hsl":t=i.get.hsl(r),n="hsl";break;case"hwb":t=i.get.hwb(r),n="hwb";break;default:t=i.get.rgb(r),n="rgb";break}return t?{model:n,value:t}:null},i.get.rgb=function(r){if(!r)return null;var t,n,a,o=/^#([a-f0-9]{3,4})$/i,l=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,h=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,u=/(\D+)/,c=[0,0,0,1];if(t=r.match(l)){for(a=t[2],t=t[1],n=0;n<3;n++){var f=2*n;c[n]=parseInt(t.slice(f,f+2),16)}a&&(c[3]=parseInt(a,16)/255)}else if(t=r.match(o)){for(t=t[1],a=t[3],n=0;n<3;n++)c[n]=parseInt(t[n]+t[n],16);a&&(c[3]=parseInt(a+a,16)/255)}else if(t=r.match(i)){for(n=0;n<3;n++)c[n]=parseInt(t[n+1],0);t[4]&&(c[3]=parseFloat(t[4]))}else{if(!(t=r.match(h)))return(t=r.match(u))?"transparent"===t[1]?[0,0,0,0]:(c=e[t[1]],c?(c[3]=1,c):null):null;for(n=0;n<3;n++)c[n]=Math.round(2.55*parseFloat(t[n+1]));t[4]&&(c[3]=parseFloat(t[4]))}for(n=0;n<3;n++)c[n]=s(c[n],0,255);return c[3]=s(c[3],0,1),c},i.get.hsl=function(r){if(!r)return null;var t=/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=r.match(t);if(n){var e=parseFloat(n[4]),a=(parseFloat(n[1])+360)%360,o=s(parseFloat(n[2]),0,100),l=s(parseFloat(n[3]),0,100),i=s(isNaN(e)?1:e,0,1);return[a,o,l,i]}return null},i.get.hwb=function(r){if(!r)return null;var t=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=r.match(t);if(n){var e=parseFloat(n[4]),a=(parseFloat(n[1])%360+360)%360,o=s(parseFloat(n[2]),0,100),l=s(parseFloat(n[3]),0,100),i=s(isNaN(e)?1:e,0,1);return[a,o,l,i]}return null},i.to.hex=function(){var r=a(arguments);return"#"+h(r[0])+h(r[1])+h(r[2])+(r[3]<1?h(Math.round(255*r[3])):"")},i.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},i.to.rgb.percent=function(){var r=a(arguments),t=Math.round(r[0]/255*100),n=Math.round(r[1]/255*100),e=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+t+"%, "+n+"%, "+e+"%)":"rgba("+t+"%, "+n+"%, "+e+"%, "+r[3]+")"},i.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},i.to.hwb=function(){var r=a(arguments),t="";return r.length>=4&&1!==r[3]&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"},i.to.keyword=function(r){return o[r.slice(0,3)]}},2514:function(r,t,n){"use strict";var e=n("f0cb"),a=Array.prototype.concat,o=Array.prototype.slice,l=r.exports=function(r){for(var t=[],n=0,l=r.length;n<l;n++){var i=r[n];e(i)?t=a.call(t,o.call(i)):t.push(i)}return t};l.wrap=function(r){return function(){return r(l(arguments))}}},"4f4d":function(r,t,n){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},6929:function(r,t,n){"use strict";var e=n("1ab9"),a=n("bb15"),o=[].slice,l=["keyword","gray","hex"],i={};Object.keys(a).forEach((function(r){i[o.call(a[r].labels).sort().join("")]=r}));var s={};function h(r,t){if(!(this instanceof h))return new h(r,t);if(t&&t in l&&(t=null),t&&!(t in a))throw new Error("Unknown model: "+t);var n,u;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof h)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"===typeof r){var c=e.get(r);if(null===c)throw new Error("Unable to parse color from string: "+r);this.model=c.model,u=a[this.model].channels,this.color=c.value.slice(0,u),this.valpha="number"===typeof c.value[u]?c.value[u]:1}else if(r.length){this.model=t||"rgb",u=a[this.model].channels;var f=o.call(r,0,u);this.color=p(f,u),this.valpha="number"===typeof r[u]?r[u]:1}else if("number"===typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var b=Object.keys(r);"alpha"in r&&(b.splice(b.indexOf("alpha"),1),this.valpha="number"===typeof r.alpha?r.alpha:0);var g=b.sort().join("");if(!(g in i))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=i[g];var d=a[this.model].labels,v=[];for(n=0;n<d.length;n++)v.push(r[d[n]]);this.color=p(v)}if(s[this.model])for(u=a[this.model].channels,n=0;n<u;n++){var m=s[this.model][n];m&&(this.color[n]=m(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function u(r,t){return Number(r.toFixed(t))}function c(r){return function(t){return u(t,r)}}function f(r,t,n){return r=Array.isArray(r)?r:[r],r.forEach((function(r){(s[r]||(s[r]=[]))[t]=n})),r=r[0],function(e){var a;return arguments.length?(n&&(e=n(e)),a=this[r](),a.color[t]=e,a):(a=this[r]().color[t],n&&(a=n(a)),a)}}function b(r){return function(t){return Math.max(0,Math.min(r,t))}}function g(r){return Array.isArray(r)?r:[r]}function p(r,t){for(var n=0;n<t;n++)"number"!==typeof r[n]&&(r[n]=0);return r}h.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var t=this.model in e.to?this:this.rgb();t=t.round("number"===typeof r?r:1);var n=1===t.valpha?t.color:t.color.concat(this.valpha);return e.to[t.model](n)},percentString:function(r){var t=this.rgb().round("number"===typeof r?r:1),n=1===t.valpha?t.color:t.color.concat(this.valpha);return e.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},t=a[this.model].channels,n=a[this.model].labels,e=0;e<t;e++)r[n[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new h(this.color.map(c(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new h(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:f("rgb",0,b(255)),green:f("rgb",1,b(255)),blue:f("rgb",2,b(255)),hue:f(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:f("hsl",1,b(100)),lightness:f("hsl",2,b(100)),saturationv:f("hsv",1,b(100)),value:f("hsv",2,b(100)),chroma:f("hcg",1,b(100)),gray:f("hcg",2,b(100)),white:f("hwb",1,b(100)),wblack:f("hwb",2,b(100)),cyan:f("cmyk",0,b(100)),magenta:f("cmyk",1,b(100)),yellow:f("cmyk",2,b(100)),black:f("cmyk",3,b(100)),x:f("xyz",0,b(100)),y:f("xyz",1,b(100)),z:f("xyz",2,b(100)),l:f("lab",0,b(100)),a:f("lab",1),b:f("lab",2),keyword:function(r){return arguments.length?new h(r):a[this.model].keyword(this.color)},hex:function(r){return arguments.length?new h(r):e.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,t=[],n=0;n<r.length;n++){var e=r[n]/255;t[n]=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),n=r.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level:function(r){var t=this.contrast(r);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var r=this.rgb().color,t=(299*r[0]+587*r[1]+114*r[2])/1e3;return t<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten:function(r){var t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken:function(r){var t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate:function(r){var t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate:function(r){var t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten:function(r){var t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken:function(r){var t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale:function(){var r=this.rgb().color,t=.3*r[0]+.59*r[1]+.11*r[2];return h.rgb(t,t,t)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var t=this.hsl(),n=t.color[0];return n=(n+r)%360,n=n<0?360+n:n,t.color[0]=n,t},mix:function(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var n=r.rgb(),e=this.rgb(),a=void 0===t?.5:t,o=2*a-1,l=n.alpha()-e.alpha(),i=((o*l===-1?o:(o+l)/(1+o*l))+1)/2,s=1-i;return h.rgb(i*n.red()+s*e.red(),i*n.green()+s*e.green(),i*n.blue()+s*e.blue(),n.alpha()*a+e.alpha()*(1-a))}},Object.keys(a).forEach((function(r){if(-1===l.indexOf(r)){var t=a[r].channels;h.prototype[r]=function(){if(this.model===r)return new h(this);if(arguments.length)return new h(arguments,r);var n="number"===typeof arguments[t]?t:this.valpha;return new h(g(a[this.model][r].raw(this.color)).concat(n),r)},h[r]=function(n){return"number"===typeof n&&(n=p(o.call(arguments),t)),new h(n,r)}}})),r.exports=h},a279:function(r,t,n){var e=n("b753");function a(){for(var r={},t=Object.keys(e),n=t.length,a=0;a<n;a++)r[t[a]]={distance:-1,parent:null};return r}function o(r){var t=a(),n=[r];t[r].distance=0;while(n.length)for(var o=n.pop(),l=Object.keys(e[o]),i=l.length,s=0;s<i;s++){var h=l[s],u=t[h];-1===u.distance&&(u.distance=t[o].distance+1,u.parent=o,n.unshift(h))}return t}function l(r,t){return function(n){return t(r(n))}}function i(r,t){var n=[t[r].parent,r],a=e[t[r].parent][r],o=t[r].parent;while(t[o].parent)n.unshift(t[o].parent),a=l(e[t[o].parent][o],a),o=t[o].parent;return a.conversion=n,a}r.exports=function(r){for(var t=o(r),n={},e=Object.keys(t),a=e.length,l=0;l<a;l++){var s=e[l],h=t[s];null!==h.parent&&(n[s]=i(s,t))}return n}},b753:function(r,t,n){var e=n("4f4d"),a={};for(var o in e)e.hasOwnProperty(o)&&(a[e[o]]=o);var l=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in l)if(l.hasOwnProperty(i)){if(!("channels"in l[i]))throw new Error("missing channels property: "+i);if(!("labels"in l[i]))throw new Error("missing channel labels property: "+i);if(l[i].labels.length!==l[i].channels)throw new Error("channel and label counts mismatch: "+i);var s=l[i].channels,h=l[i].labels;delete l[i].channels,delete l[i].labels,Object.defineProperty(l[i],"channels",{value:s}),Object.defineProperty(l[i],"labels",{value:h})}function u(r,t){return Math.pow(r[0]-t[0],2)+Math.pow(r[1]-t[1],2)+Math.pow(r[2]-t[2],2)}l.rgb.hsl=function(r){var t,n,e,a=r[0]/255,o=r[1]/255,l=r[2]/255,i=Math.min(a,o,l),s=Math.max(a,o,l),h=s-i;return s===i?t=0:a===s?t=(o-l)/h:o===s?t=2+(l-a)/h:l===s&&(t=4+(a-o)/h),t=Math.min(60*t,360),t<0&&(t+=360),e=(i+s)/2,n=s===i?0:e<=.5?h/(s+i):h/(2-s-i),[t,100*n,100*e]},l.rgb.hsv=function(r){var t,n,e,a,o,l=r[0]/255,i=r[1]/255,s=r[2]/255,h=Math.max(l,i,s),u=h-Math.min(l,i,s),c=function(r){return(h-r)/6/u+.5};return 0===u?a=o=0:(o=u/h,t=c(l),n=c(i),e=c(s),l===h?a=e-n:i===h?a=1/3+t-e:s===h&&(a=2/3+n-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*h]},l.rgb.hwb=function(r){var t=r[0],n=r[1],e=r[2],a=l.rgb.hsl(r)[0],o=1/255*Math.min(t,Math.min(n,e));return e=1-1/255*Math.max(t,Math.max(n,e)),[a,100*o,100*e]},l.rgb.cmyk=function(r){var t,n,e,a,o=r[0]/255,l=r[1]/255,i=r[2]/255;return a=Math.min(1-o,1-l,1-i),t=(1-o-a)/(1-a)||0,n=(1-l-a)/(1-a)||0,e=(1-i-a)/(1-a)||0,[100*t,100*n,100*e,100*a]},l.rgb.keyword=function(r){var t=a[r];if(t)return t;var n,o=1/0;for(var l in e)if(e.hasOwnProperty(l)){var i=e[l],s=u(r,i);s<o&&(o=s,n=l)}return n},l.keyword.rgb=function(r){return e[r]},l.rgb.xyz=function(r){var t=r[0]/255,n=r[1]/255,e=r[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92;var a=.4124*t+.3576*n+.1805*e,o=.2126*t+.7152*n+.0722*e,l=.0193*t+.1192*n+.9505*e;return[100*a,100*o,100*l]},l.rgb.lab=function(r){var t,n,e,a=l.rgb.xyz(r),o=a[0],i=a[1],s=a[2];return o/=95.047,i/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=116*i-16,n=500*(o-i),e=200*(i-s),[t,n,e]},l.hsl.rgb=function(r){var t,n,e,a,o,l=r[0]/360,i=r[1]/100,s=r[2]/100;if(0===i)return o=255*s,[o,o,o];n=s<.5?s*(1+i):s+i-s*i,t=2*s-n,a=[0,0,0];for(var h=0;h<3;h++)e=l+1/3*-(h-1),e<0&&e++,e>1&&e--,o=6*e<1?t+6*(n-t)*e:2*e<1?n:3*e<2?t+(n-t)*(2/3-e)*6:t,a[h]=255*o;return a},l.hsl.hsv=function(r){var t,n,e=r[0],a=r[1]/100,o=r[2]/100,l=a,i=Math.max(o,.01);return o*=2,a*=o<=1?o:2-o,l*=i<=1?i:2-i,n=(o+a)/2,t=0===o?2*l/(i+l):2*a/(o+a),[e,100*t,100*n]},l.hsv.rgb=function(r){var t=r[0]/60,n=r[1]/100,e=r[2]/100,a=Math.floor(t)%6,o=t-Math.floor(t),l=255*e*(1-n),i=255*e*(1-n*o),s=255*e*(1-n*(1-o));switch(e*=255,a){case 0:return[e,s,l];case 1:return[i,e,l];case 2:return[l,e,s];case 3:return[l,i,e];case 4:return[s,l,e];case 5:return[e,l,i]}},l.hsv.hsl=function(r){var t,n,e,a=r[0],o=r[1]/100,l=r[2]/100,i=Math.max(l,.01);return e=(2-o)*l,t=(2-o)*i,n=o*i,n/=t<=1?t:2-t,n=n||0,e/=2,[a,100*n,100*e]},l.hwb.rgb=function(r){var t,n,e,a,o,l,i,s=r[0]/360,h=r[1]/100,u=r[2]/100,c=h+u;switch(c>1&&(h/=c,u/=c),t=Math.floor(6*s),n=1-u,e=6*s-t,0!==(1&t)&&(e=1-e),a=h+e*(n-h),t){default:case 6:case 0:o=n,l=a,i=h;break;case 1:o=a,l=n,i=h;break;case 2:o=h,l=n,i=a;break;case 3:o=h,l=a,i=n;break;case 4:o=a,l=h,i=n;break;case 5:o=n,l=h,i=a;break}return[255*o,255*l,255*i]},l.cmyk.rgb=function(r){var t,n,e,a=r[0]/100,o=r[1]/100,l=r[2]/100,i=r[3]/100;return t=1-Math.min(1,a*(1-i)+i),n=1-Math.min(1,o*(1-i)+i),e=1-Math.min(1,l*(1-i)+i),[255*t,255*n,255*e]},l.xyz.rgb=function(r){var t,n,e,a=r[0]/100,o=r[1]/100,l=r[2]/100;return t=3.2406*a+-1.5372*o+-.4986*l,n=-.9689*a+1.8758*o+.0415*l,e=.0557*a+-.204*o+1.057*l,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,t=Math.min(Math.max(0,t),1),n=Math.min(Math.max(0,n),1),e=Math.min(Math.max(0,e),1),[255*t,255*n,255*e]},l.xyz.lab=function(r){var t,n,e,a=r[0],o=r[1],l=r[2];return a/=95.047,o/=100,l/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=116*o-16,n=500*(a-o),e=200*(o-l),[t,n,e]},l.lab.xyz=function(r){var t,n,e,a=r[0],o=r[1],l=r[2];n=(a+16)/116,t=o/500+n,e=n-l/200;var i=Math.pow(n,3),s=Math.pow(t,3),h=Math.pow(e,3);return n=i>.008856?i:(n-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,e=h>.008856?h:(e-16/116)/7.787,t*=95.047,n*=100,e*=108.883,[t,n,e]},l.lab.lch=function(r){var t,n,e,a=r[0],o=r[1],l=r[2];return t=Math.atan2(l,o),n=360*t/2/Math.PI,n<0&&(n+=360),e=Math.sqrt(o*o+l*l),[a,e,n]},l.lch.lab=function(r){var t,n,e,a=r[0],o=r[1],l=r[2];return e=l/360*2*Math.PI,t=o*Math.cos(e),n=o*Math.sin(e),[a,t,n]},l.rgb.ansi16=function(r){var t=r[0],n=r[1],e=r[2],a=1 in arguments?arguments[1]:l.rgb.hsv(r)[2];if(a=Math.round(a/50),0===a)return 30;var o=30+(Math.round(e/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===a&&(o+=60),o},l.hsv.ansi16=function(r){return l.rgb.ansi16(l.hsv.rgb(r),r[2])},l.rgb.ansi256=function(r){var t=r[0],n=r[1],e=r[2];if(t===n&&n===e)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;var a=16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(e/255*5);return a},l.ansi16.rgb=function(r){var t=r%10;if(0===t||7===t)return r>50&&(t+=3.5),t=t/10.5*255,[t,t,t];var n=.5*(1+~~(r>50)),e=(1&t)*n*255,a=(t>>1&1)*n*255,o=(t>>2&1)*n*255;return[e,a,o]},l.ansi256.rgb=function(r){if(r>=232){var t=10*(r-232)+8;return[t,t,t]}var n;r-=16;var e=Math.floor(r/36)/5*255,a=Math.floor((n=r%36)/6)/5*255,o=n%6/5*255;return[e,a,o]},l.rgb.hex=function(r){var t=((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2])),n=t.toString(16).toUpperCase();return"000000".substring(n.length)+n},l.hex.rgb=function(r){var t=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var n=t[0];3===t[0].length&&(n=n.split("").map((function(r){return r+r})).join(""));var e=parseInt(n,16),a=e>>16&255,o=e>>8&255,l=255&e;return[a,o,l]},l.rgb.hcg=function(r){var t,n,e=r[0]/255,a=r[1]/255,o=r[2]/255,l=Math.max(Math.max(e,a),o),i=Math.min(Math.min(e,a),o),s=l-i;return t=s<1?i/(1-s):0,n=s<=0?0:l===e?(a-o)/s%6:l===a?2+(o-e)/s:4+(e-a)/s+4,n/=6,n%=1,[360*n,100*s,100*t]},l.hsl.hcg=function(r){var t=r[1]/100,n=r[2]/100,e=1,a=0;return e=n<.5?2*t*n:2*t*(1-n),e<1&&(a=(n-.5*e)/(1-e)),[r[0],100*e,100*a]},l.hsv.hcg=function(r){var t=r[1]/100,n=r[2]/100,e=t*n,a=0;return e<1&&(a=(n-e)/(1-e)),[r[0],100*e,100*a]},l.hcg.rgb=function(r){var t=r[0]/360,n=r[1]/100,e=r[2]/100;if(0===n)return[255*e,255*e,255*e];var a=[0,0,0],o=t%1*6,l=o%1,i=1-l,s=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=i,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=i,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=i}return s=(1-n)*e,[255*(n*a[0]+s),255*(n*a[1]+s),255*(n*a[2]+s)]},l.hcg.hsv=function(r){var t=r[1]/100,n=r[2]/100,e=t+n*(1-t),a=0;return e>0&&(a=t/e),[r[0],100*a,100*e]},l.hcg.hsl=function(r){var t=r[1]/100,n=r[2]/100,e=n*(1-t)+.5*t,a=0;return e>0&&e<.5?a=t/(2*e):e>=.5&&e<1&&(a=t/(2*(1-e))),[r[0],100*a,100*e]},l.hcg.hwb=function(r){var t=r[1]/100,n=r[2]/100,e=t+n*(1-t);return[r[0],100*(e-t),100*(1-e)]},l.hwb.hcg=function(r){var t=r[1]/100,n=r[2]/100,e=1-n,a=e-t,o=0;return a<1&&(o=(e-a)/(1-a)),[r[0],100*a,100*o]},l.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},l.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},l.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},l.gray.hsl=l.gray.hsv=function(r){return[0,0,r[0]]},l.gray.hwb=function(r){return[0,100,r[0]]},l.gray.cmyk=function(r){return[0,0,0,r[0]]},l.gray.lab=function(r){return[r[0],0,0]},l.gray.hex=function(r){var t=255&Math.round(r[0]/100*255),n=(t<<16)+(t<<8)+t,e=n.toString(16).toUpperCase();return"000000".substring(e.length)+e},l.rgb.gray=function(r){var t=(r[0]+r[1]+r[2])/3;return[t/255*100]}},bb15:function(r,t,n){var e=n("b753"),a=n("a279"),o={},l=Object.keys(e);function i(r){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),r(t))};return"conversion"in r&&(t.conversion=r.conversion),t}function s(r){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var n=r(t);if("object"===typeof n)for(var e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in r&&(t.conversion=r.conversion),t}l.forEach((function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:e[r].channels}),Object.defineProperty(o[r],"labels",{value:e[r].labels});var t=a(r),n=Object.keys(t);n.forEach((function(n){var e=t[n];o[r][n]=s(e),o[r][n].raw=i(e)}))})),r.exports=o},d40a:function(r,t,n){"use strict";n.d(t,"a",(function(){return g}));var e=n("ade3");class a{toHtml(){return document.createElement("span")}toString(){return this.toHtml().outerHTML}}class o extends a{toHtml(){return document.createElement("br")}}n("5319");var l,i=n("6929"),s=n.n(i);class h extends a{constructor(r){super(),Object(e["a"])(this,"text",void 0),this.text=r}toHtml(){const r=document.createElement("span");return r.textContent=this.text,r}}(function(r){r["colorStart"]="[c]",r["colorEnd"]="[/c]",r["boldEnd"]="[/b]",r["playerName"]="[px]"})(l||(l={}));class u extends h{constructor(r){var t;super(r.replace(/\[.*?\]/g,"")),Object(e["a"])(this,"color",void 0),Object(e["a"])(this,"isBold",!1);const n=null===(t=r.match(/\[c\]\[(\w+)\]/))||void 0===t?void 0:t[1];this.color=n?s()("#"+n):s()("#000000"),r.includes(l.boldEnd)&&(this.isBold=!0)}toHtml(){const r=super.toHtml();return r.style.color=this.color.toString(),this.isBold&&(r.style.fontWeight="bold"),r}}var c=n("55b6");class f extends a{constructor(r){super(),Object(e["a"])(this,"playerName",""),this.playerName=r||f.defaultPlayerName}toHtml(){const r=document.createElement("span");return r.textContent=this.playerName,r}}Object(e["a"])(f,"defaultPlayerName",`[${c["a"].t("プレーヤー名前")}]`);class b{parse(r,t){const n=[],e=r.trim();let i=0;for(const[s,c]of e.split("").entries())if(!(i>s))if(["\r","\n"].includes(c))n.push(new h(e.substr(i,s-i))),n.push(null!==t&&void 0!==t&&t.ignoreNewLine?new a:new o),i=s+1;else if(`${c}${e[s+1]}${e[s+2]}`===l.colorStart){n.push(new h(e.substr(i,s-i)));const r=e.indexOf(l.boldEnd,i);if(r>0)i=r+l.boldEnd.length;else{const r=e.indexOf(l.colorEnd,i);if(!(r>0))continue;i=r+l.colorEnd.length}n.push(new u(e.substr(s,i-s)))}else`${c}${e[s+1]}${e[s+2]}${e[s+3]}`===l.playerName&&(n.push(new h(e.substr(i,s-i))),n.push(new f(null===t||void 0===t?void 0:t.playerName)),i=s+l.playerName.length);return n.push(new h(e.substr(i))),n}}class g{constructor(){Object(e["a"])(this,"richTextParser",new b)}richTextToHtml(r,t){return this.richTextParser.parse(r,t).join("")}}},f0cb:function(r,t){r.exports=function(r){return!(!r||"string"===typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}}}]);