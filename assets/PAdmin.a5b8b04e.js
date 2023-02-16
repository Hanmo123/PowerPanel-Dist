import{c4 as P,c5 as q,a3 as S,d as x,aS as z,A as E,m as $,T as U,aY as Y,O as T,q as f,r as _,bo as F,P as y,z as v,ba as B,p,S as G,c1 as W,c6 as X,N as H,B as s,C as u,c7 as J,W as k,c8 as K,D as g,b9 as Q,c9 as C,ca as Z,y as M}from"./index.1cac1bad.js";import{_ as V}from"./PLink.vue_vue_type_script_setup_true_lang.f43831db.js";import{_ as tt}from"./Progress.a759239f.js";var D=1/0,et=17976931348623157e292;function nt(t){if(!t)return t===0?t:0;if(t=P(t),t===D||t===-D){var n=t<0?-1:1;return n*et}return t===t?t:0}function at(t){var n=nt(t),e=n%1;return n===n?e?n-e:n:0}var ot=q.isFinite,st=Math.min;function ut(t){var n=Math[t];return function(e,a){if(e=P(e),a=a==null?0:st(at(a),292),a&&ot(e)){var r=(S(e)+"e").split("e"),l=n(r[0]+"e"+(+r[1]+a));return r=(S(l)+"e").split("e"),+(r[0]+"e"+(+r[1]-a))}return n(e)}}var rt=ut("round");const it=rt,lt=t=>1-Math.pow(1-t,5);function ct(t){const{from:n,to:e,duration:a,onUpdate:r,onFinish:l}=t,h=()=>{const b=performance.now(),m=Math.min(b-d,a),i=n+(e-n)*lt(m/a);if(m===a){l();return}r(i),requestAnimationFrame(h)},d=performance.now();h()}const dt={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},mt=x({name:"NumberAnimation",props:dt,setup(t){const{localeRef:n}=z("name"),{duration:e}=t,a=E(t.from),r=$(()=>{const{locale:o}=t;return o!==void 0?o:n.value});let l=!1;const h=o=>{a.value=o},d=()=>{var o;a.value=t.to,l=!1,(o=t.onFinish)===null||o===void 0||o.call(t)},b=(o=t.from,A=t.to)=>{l=!0,a.value=t.from,o!==A&&ct({from:o,to:A,duration:e,onUpdate:h,onFinish:d})},m=$(()=>{var o;const N=it(a.value,t.precision).toFixed(t.precision).split("."),w=new Intl.NumberFormat(r.value),R=(o=w.formatToParts(.5).find(j=>j.type==="decimal"))===null||o===void 0?void 0:o.value,O=t.showSeparator?w.format(Number(N[0])):N[0],L=N[1];return{integer:O,decimal:L,decimalSeparator:R}});function i(){l||b()}return U(()=>{Y(()=>{t.active&&b()})}),Object.assign({formattedValue:m},{play:i})},render(){const{formattedValue:{integer:t,decimal:n,decimalSeparator:e}}=this;return[t,n?e:null,n]}}),_t={key:1,class:"text-right"},ft=x({__name:"PAdminStatus",setup(t){const n=T();return(e,a)=>e.$slots.label?(p(),f("div",{key:0,class:y(["border rounded-md p-4 h-fit break-inside-avoid mb-4",{"border-theme":v(n).status}])},[_("div",{class:y({"text-gray-600":!v(n).status})},[F(e.$slots,"label",{},void 0,!0)],2),e.$slots.value?(p(),f("div",{key:0,class:y(["text-2xl font-semibold mt-[2px]",{"text-gray-600":!v(n).status}])},[F(e.$slots,"value",{},void 0,!0)],2)):B("",!0),F(e.$slots,"addition",{},void 0,!0),e.$slots.action?(p(),f("div",_t,[F(e.$slots,"action",{},void 0,!0)])):B("",!0)],2)):B("",!0)}});const I=G(ft,[["__scopeId","data-v-f9030bef"]]),vt={key:0,class:"mdui-container md:columns-3 gap-4 mt-4"},pt={class:"flex justify-between"},ht={class:"mt-4"},bt=_("span",{class:"font-normal mx-[2px]"},"/",-1),Bt=x({__name:"PAdmin",setup(t){const n=W(),e=E();n.listen(()=>{X.fetch().then(r=>{e.value=r.data.attributes})});const a=T();return(r,l)=>{const h=Z,d=mt,b=tt,m=H;return p(),f(k,null,[s(J,null,{default:u(()=>[s(K,{breadcrumb:["\u7BA1\u7406\u9762\u677F","\u603B\u89C8"]},{title:u(()=>[g("\u9762\u677F\u603B\u89C8")]),_:1})]),_:1}),s(h,{class:"my-0"}),e.value?(p(),f("div",vt,[s(I,null,{label:u(()=>[g("\u8282\u70B9\u6570\u91CF\u603B\u8BA1")]),value:u(()=>{var i;return[s(d,{duration:1500,to:(i=e.value)==null?void 0:i.node.length},null,8,["to"])]}),addition:u(()=>{var i;return[_("div",{class:y(["mt-2",{"text-gray-600":!v(a).status}])},"\u8282\u70B9\u8D1F\u8F7D",2),(p(!0),f(k,null,Q((i=e.value)==null?void 0:i.node,c=>(p(),f("div",{key:c.id,class:y(["mt-1",{"text-gray-500":!v(a).status}])},[_("div",pt,[_("div",null,M(c.name),1),_("div",null,M(c.load),1)]),s(b,{type:"line",percentage:c.load*100,"show-indicator":!1,height:2,class:"mt-1","border-radius":"0"},null,8,["percentage"])],2))),128))]}),action:u(()=>[_("div",ht,[s(V,{element:"button",to:{name:"admin.node.index"},ghost:""},{default:u(()=>[g(" \u7BA1\u7406\u8282\u70B9 "),s(m,{class:"ml-1"},{default:u(()=>[s(v(C))]),_:1})]),_:1},8,["to"])])]),_:1}),s(I,null,{label:u(()=>[g("\u8FD0\u884C\u4E2D\u5B9E\u4F8B / \u603B\u8BA1")]),value:u(()=>{var i,c;return[s(d,{duration:1500,to:(i=e.value)==null?void 0:i.instance.count.running},null,8,["to"]),bt,s(d,{duration:1500,to:(c=e.value)==null?void 0:c.instance.count.total},null,8,["to"])]}),action:u(()=>[s(V,{element:"button",to:{name:"admin.instance"},ghost:""},{default:u(()=>[g(" \u7BA1\u7406\u5B9E\u4F8B "),s(m,{class:"ml-1"},{default:u(()=>[s(v(C))]),_:1})]),_:1},8,["to"])]),_:1})])):B("",!0)],64)}}});export{Bt as default};