import{c as T,a as b,b as I,d as F,u as ot,e as mt,h as nt,f as H,g as vt,i as ht,j as gt,k as it,t as yt,l as _t,m as Q,n as q,o as xt,p as V,q as Z,r as _,s as Ct,v as wt,w as at,x as lt,y as z,z as A,A as tt,B as P,C as O,D as et,E as Et,F as rt,G as Tt,N as St,_ as kt,H as At,I as Pt,J as Bt}from"./index.1cac1bad.js";const Rt=T("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[b(">",[T("input",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),b("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),T("button",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[I("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),b("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[I("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),b("*",[b("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[b(">",[T("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),T("base-selection",[T("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),T("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),I("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),b("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[b(">",[T("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),T("base-selection",[T("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),T("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),I("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Ot={},zt=F({name:"InputGroup",props:Ot,setup(v){const{mergedClsPrefixRef:u}=ot(v);return mt("-input-group",Rt,u),{mergedClsPrefix:u}},render(){const{mergedClsPrefix:v}=this;return nt("div",{class:`${v}-input-group`},this.$slots)}}),Ft=b([T("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[b("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[b("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),b("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[b("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),H("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[b("tr",[b("&:last-child",[b("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),H("single-line",[b("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),b("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),H("single-column",[b("tr",[b("&:not(:last-child)",[b("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),H("striped",[b("tr:nth-of-type(even)",[b("td","background-color: var(--n-td-color-striped)")])]),vt("bottom-bordered",[b("tr",[b("&:last-child",[b("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),ht(T("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[b("th",`
 background-color: var(--n-th-color-modal);
 `),b("td",`
 background-color: var(--n-td-color-modal);
 `)])),gt(T("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[b("th",`
 background-color: var(--n-th-color-popover);
 `),b("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Lt=Object.assign(Object.assign({},it.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Mt=F({name:"Table",props:Lt,setup(v){const{mergedClsPrefixRef:u,inlineThemeDisabled:x,mergedRtlRef:w}=ot(v),C=it("Table","-table",Ft,yt,v,u),s=_t("Table",w,u),o=Q(()=>{const{size:n}=v,{self:{borderColor:d,tdColor:p,tdColorModal:y,tdColorPopover:h,thColor:E,thColorModal:c,thColorPopover:g,thTextColor:m,tdTextColor:S,borderRadius:D,thFontWeight:U,lineHeight:L,borderColorModal:R,borderColorPopover:G,tdColorStriped:K,tdColorStripedModal:B,tdColorStripedPopover:Y,[q("fontSize",n)]:N,[q("tdPadding",n)]:J,[q("thPadding",n)]:W},common:{cubicBezierEaseInOut:M}}=C.value;return{"--n-bezier":M,"--n-td-color":p,"--n-td-color-modal":y,"--n-td-color-popover":h,"--n-td-text-color":S,"--n-border-color":d,"--n-border-color-modal":R,"--n-border-color-popover":G,"--n-border-radius":D,"--n-font-size":N,"--n-th-color":E,"--n-th-color-modal":c,"--n-th-color-popover":g,"--n-th-font-weight":U,"--n-th-text-color":m,"--n-line-height":L,"--n-td-padding":J,"--n-th-padding":W,"--n-td-color-striped":K,"--n-td-color-striped-modal":B,"--n-td-color-striped-popover":Y}}),t=x?xt("table",Q(()=>v.size[0]),o,v):void 0;return{rtlEnabled:s,mergedClsPrefix:u,cssVars:x?void 0:o,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var v;const{mergedClsPrefix:u}=this;return(v=this.onRender)===null||v===void 0||v.call(this),nt("table",{class:[`${u}-table`,this.themeClass,{[`${u}-table--rtl`]:this.rtlEnabled,[`${u}-table--bottom-bordered`]:this.bottomBordered,[`${u}-table--bordered`]:this.bordered,[`${u}-table--single-line`]:this.singleLine,[`${u}-table--single-column`]:this.singleColumn,[`${u}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),Dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Nt=_("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z",fill:"currentColor"},null,-1),$t=[Nt],jt=F({name:"EditRound",render:function(u,x){return V(),Z("svg",Dt,$t)}});var st={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(v,u){(function(w,C){v.exports=C()})(Ct,function(){return function(){var x={686:function(s,o,t){t.d(o,{default:function(){return bt}});var n=t(279),d=t.n(n),p=t(370),y=t.n(p),h=t(817),E=t.n(h);function c(l){try{return document.execCommand(l)}catch{return!1}}var g=function(r){var e=E()(r);return c("cut"),e},m=g;function S(l){var r=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[r?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(i,"px"),e.setAttribute("readonly",""),e.value=l,e}var D=function(r,e){var i=S(r);e.container.appendChild(i);var a=E()(i);return c("copy"),i.remove(),a},U=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof r=="string"?i=D(r,e):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?i=D(r.value,e):(i=E()(r),c("copy")),i},L=U;function R(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(e){return typeof e}:R=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(l)}var G=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.action,i=e===void 0?"copy":e,a=r.container,f=r.target,k=r.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&R(f)==="object"&&f.nodeType===1){if(i==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(k)return L(k,{container:a});if(f)return i==="cut"?m(f):L(f,{container:a})},K=G;function B(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?B=function(e){return typeof e}:B=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(l)}function Y(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function N(l,r){for(var e=0;e<r.length;e++){var i=r[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function J(l,r,e){return r&&N(l.prototype,r),e&&N(l,e),l}function W(l,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(r&&r.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),r&&M(l,r)}function M(l,r){return M=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},M(l,r)}function ut(l){var r=ft();return function(){var i=$(l),a;if(r){var f=$(this).constructor;a=Reflect.construct(i,arguments,f)}else a=i.apply(this,arguments);return dt(this,a)}}function dt(l,r){return r&&(B(r)==="object"||typeof r=="function")?r:ct(l)}function ct(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function $(l){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$(l)}function X(l,r){var e="data-clipboard-".concat(l);if(!!r.hasAttribute(e))return r.getAttribute(e)}var pt=function(l){W(e,l);var r=ut(e);function e(i,a){var f;return Y(this,e),f=r.call(this),f.resolveOptions(a),f.listenClick(i),f}return J(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=B(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var f=this;this.listener=y()(a,"click",function(k){return f.onClick(k)})}},{key:"onClick",value:function(a){var f=a.delegateTarget||a.currentTarget,k=this.action(f)||"copy",j=K({action:k,container:this.container,target:this.target(f),text:this.text(f)});this.emit(j?"success":"error",{action:k,text:j,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return X("action",a)}},{key:"defaultTarget",value:function(a){var f=X("target",a);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(a){return X("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(a,f)}},{key:"cut",value:function(a){return m(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof a=="string"?[a]:a,k=!!document.queryCommandSupported;return f.forEach(function(j){k=k&&!!document.queryCommandSupported(j)}),k}}]),e}(d()),bt=pt},828:function(s){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function n(d,p){for(;d&&d.nodeType!==o;){if(typeof d.matches=="function"&&d.matches(p))return d;d=d.parentNode}}s.exports=n},438:function(s,o,t){var n=t(828);function d(h,E,c,g,m){var S=y.apply(this,arguments);return h.addEventListener(c,S,m),{destroy:function(){h.removeEventListener(c,S,m)}}}function p(h,E,c,g,m){return typeof h.addEventListener=="function"?d.apply(null,arguments):typeof c=="function"?d.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(S){return d(S,E,c,g,m)}))}function y(h,E,c,g){return function(m){m.delegateTarget=n(m.target,E),m.delegateTarget&&g.call(h,m)}}s.exports=p},879:function(s,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var n=Object.prototype.toString.call(t);return t!==void 0&&(n==="[object NodeList]"||n==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var n=Object.prototype.toString.call(t);return n==="[object Function]"}},370:function(s,o,t){var n=t(879),d=t(438);function p(c,g,m){if(!c&&!g&&!m)throw new Error("Missing required arguments");if(!n.string(g))throw new TypeError("Second argument must be a String");if(!n.fn(m))throw new TypeError("Third argument must be a Function");if(n.node(c))return y(c,g,m);if(n.nodeList(c))return h(c,g,m);if(n.string(c))return E(c,g,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(c,g,m){return c.addEventListener(g,m),{destroy:function(){c.removeEventListener(g,m)}}}function h(c,g,m){return Array.prototype.forEach.call(c,function(S){S.addEventListener(g,m)}),{destroy:function(){Array.prototype.forEach.call(c,function(S){S.removeEventListener(g,m)})}}}function E(c,g,m){return d(document.body,c,g,m)}s.exports=p},817:function(s){function o(t){var n;if(t.nodeName==="SELECT")t.focus(),n=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var d=t.hasAttribute("readonly");d||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),d||t.removeAttribute("readonly"),n=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),y=document.createRange();y.selectNodeContents(t),p.removeAllRanges(),p.addRange(y),n=p.toString()}return n}s.exports=o},279:function(s){function o(){}o.prototype={on:function(t,n,d){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:n,ctx:d}),this},once:function(t,n,d){var p=this;function y(){p.off(t,y),n.apply(d,arguments)}return y._=n,this.on(t,y,d)},emit:function(t){var n=[].slice.call(arguments,1),d=((this.e||(this.e={}))[t]||[]).slice(),p=0,y=d.length;for(p;p<y;p++)d[p].fn.apply(d[p].ctx,n);return this},off:function(t,n){var d=this.e||(this.e={}),p=d[t],y=[];if(p&&n)for(var h=0,E=p.length;h<E;h++)p[h].fn!==n&&p[h].fn._!==n&&y.push(p[h]);return y.length?d[t]=y:delete d[t],this}},s.exports=o,s.exports.TinyEmitter=o}},w={};function C(s){if(w[s])return w[s].exports;var o=w[s]={exports:{}};return x[s](o,o.exports,C),o.exports}return function(){C.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return C.d(o,{a:o}),o}}(),function(){C.d=function(s,o){for(var t in o)C.o(o,t)&&!C.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:o[t]})}}(),function(){C.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)}}(),C(686)}().default})})(st);const It=wt(st.exports),Ht=v=>{const u=(v==null?void 0:v.appendToBody)===void 0?!0:v.appendToBody;return{toClipboard(x,w){return new Promise((C,s)=>{const o=document.createElement("button"),t=new It(o,{text:()=>x,action:()=>"copy",container:w!==void 0?w:document.body});t.on("success",n=>{t.destroy(),C(n)}),t.on("error",n=>{t.destroy(),s(n)}),u&&document.body.appendChild(o),o.click(),u&&document.body.removeChild(o)})}}},Vt=F({__name:"PAddress",setup(v){const u=at(),x=Q(()=>"IP: "+u.allocation.alias+" \xB7 \u7AEF\u53E3: "+u.allocation.port),w=lt();async function C(){const{toClipboard:s}=Ht();await s(x.value),w.success("\u670D\u52A1\u5668\u5730\u5740\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F")}return(s,o)=>(V(),Z("span",{onClick:C},z(A(x)),1))}}),Ut=_("td",null,"\u5B9E\u4F8B ID",-1),Gt=_("td",null,"\u5B9E\u4F8B\u540D\u79F0",-1),Kt=_("td",null,"\u5B9E\u4F8B\u5730\u5740",-1),Yt=_("td",null,"CPU \u9650\u5236",-1),Jt=_("td",null,"\u5185\u5B58\u5927\u5C0F\u9650\u5236",-1),Wt=_("td",null,"\u50A8\u5B58\u7A7A\u95F4\u9650\u5236",-1),Xt=F({__name:"PDetailTable",setup(v){const u=at(),x=tt(),w=tt(!1),C=lt();u.listen(()=>{var o,t;return x.value=(t=u.name)!=null?t:(o=u.uuid)==null?void 0:o.split("-")[0]});const s={rename(){Tt.rename(u.id,x.value).then(()=>{w.value=!1,C.success("\u5B9E\u4F8B\u540D\u79F0\u66F4\u6539\u6210\u529F"),u.name=x.value})}};return(o,t)=>{const n=St,d=kt,p=At,y=zt,h=Pt,E=Mt;return V(),Z("div",null,[P(E,{col:""},{default:O(()=>[_("tbody",null,[_("tr",null,[Ut,_("td",null,z(A(u).id),1)]),_("tr",null,[Gt,_("td",null,[P(h,{trigger:"manual",show:w.value},{trigger:O(()=>{var c;return[_("span",{onClick:t[0]||(t[0]=g=>w.value=!w.value),class:"flex items-center w-fit"},[et(z(A(u).name||((c=A(u).uuid)==null?void 0:c.split("-")[0]))+" ",1),P(n,{class:"ml-1"},{default:O(()=>[P(A(jt))]),_:1})])]}),default:O(()=>[P(y,null,{default:O(()=>[P(d,{value:x.value,"onUpdate:value":t[1]||(t[1]=c=>x.value=c),onKeyup:t[2]||(t[2]=Et(c=>s.rename(),["enter"]))},null,8,["value"]),P(p,{type:"primary","text-color":"white",onClick:t[3]||(t[3]=c=>s.rename())},{default:O(()=>[et(" \u66F4\u6539 ")]),_:1})]),_:1})]),_:1},8,["show"])])]),_("tr",null,[Kt,_("td",null,[P(Vt)])]),_("tr",null,[Yt,_("td",null,z(A(u).cpu||0)+"%",1)]),_("tr",null,[Jt,_("td",null,z(A(rt)((A(u).memory||0)*1024*1024,!0)),1)]),_("tr",null,[Wt,_("td",null,z(A(rt)((A(u).disk||0)*1024*1024,!0)),1)])])]),_:1})])}}}),Zt=F({__name:"PDetail",setup(v){return(u,x)=>(V(),Bt(Xt,{class:"mt-4 mdui-container"}))}});export{Zt as default};
