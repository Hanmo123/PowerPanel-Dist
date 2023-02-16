import{c as h,d as m,u as _,k as p,cb as f,m as C,o as v,h as k,p as c,J as i,C as u,ay as y,bo as d,H as b,c3 as g}from"./index.1cac1bad.js";const x=h("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),R=Object.assign({},p.props),P=m({name:"A",props:R,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=_(e),a=p("Typography","-a",x,f,e,n),s=C(()=>{const{common:{cubicBezierEaseInOut:t},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":t}}),o=r?v("a",void 0,s,e):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),k("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}}),$=m({__name:"PLink",props:["to","element"],setup(e){return(n,r)=>{const a=b,s=P,o=g("RouterLink");return c(),i(o,{to:e.to,custom:""},{default:u(({navigate:t,href:l})=>[e.element==="button"?(c(),i(a,y({key:0,onClick:t,type:"primary"},n.$attrs),{default:u(()=>[d(n.$slots,"default")]),_:2},1040,["onClick"])):(c(),i(s,{key:1,href:l,onClick:t,class:"hover:underline"},{default:u(()=>[d(n.$slots,"default")]),_:2},1032,["href","onClick"]))]),_:3},8,["to"])}}});export{$ as _};
