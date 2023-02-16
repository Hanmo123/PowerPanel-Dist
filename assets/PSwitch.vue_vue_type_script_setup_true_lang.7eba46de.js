import{aQ as ve,cf as ge,cg as me,c as L,b as t,b5 as O,a as W,f as u,g as H,d as q,u as we,k as G,b7 as pe,A as j,am as ye,b8 as ke,m as $,n as y,bn as K,bk as h,o as xe,ch as M,h as r,a9 as k,b3 as _e,bw as Ce,ac as N,p as I,J as E,C as X,bo as Y,z as J,ce as Q}from"./index.1cac1bad.js";import{d as Se}from"./Time.9bd2104a.js";const Be=e=>{const{primaryColor:s,opacityDisabled:d,borderRadius:o,textColor3:i}=e,l="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ge),{iconColor:i,textColor:"white",loadingColor:s,opacityDisabled:d,railColor:l,railColorActive:s,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${me(s,{alpha:.2})}`})},$e={name:"Switch",common:ve,self:Be},Re=$e,Ve=L("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),L("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[O({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),u("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),H("disabled",[H("icon",[u("rubber-band",[u("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[W("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),u("active",[u("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[W("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),u("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[O()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),u("active",[t("rail","background-color: var(--n-rail-color-active);")]),u("loading",[t("rail",`
 cursor: wait;
 `)]),u("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ze=Object.assign(Object.assign({},G.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Fe=q({name:"Switch",props:ze,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=we(e),o=G("Switch","-switch",Ve,Re,e,s),i=pe(e),{mergedSizeRef:l,mergedDisabledRef:c}=i,w=j(e.defaultValue),b=ye(e,"value"),p=ke(b,w),C=$(()=>p.value===e.checkedValue),x=j(!1),a=j(!1),f=$(()=>{const{railStyle:n}=e;if(!!n)return n({focused:a.value,checked:C.value})});function v(n){const{"onUpdate:value":R,onChange:V,onUpdateValue:z}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=i;R&&N(R,n),z&&N(z,n),V&&N(V,n),w.value=n,F(),T()}function Z(){const{nTriggerFormFocus:n}=i;n()}function ee(){const{nTriggerFormBlur:n}=i;n()}function te(){e.loading||c.value||(p.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue))}function ne(){a.value=!0,Z()}function oe(){a.value=!1,ee(),x.value=!1}function ae(n){e.loading||c.value||n.key===" "&&(p.value!==e.checkedValue?v(e.checkedValue):v(e.uncheckedValue),x.value=!1)}function ie(n){e.loading||c.value||n.key===" "&&(n.preventDefault(),x.value=!0)}const A=$(()=>{const{value:n}=l,{self:{opacityDisabled:R,railColor:V,railColorActive:z,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:re,loadingColor:le,textColor:se,iconColor:de,[y("buttonHeight",n)]:g,[y("buttonWidth",n)]:ce,[y("buttonWidthPressed",n)]:ue,[y("railHeight",n)]:m,[y("railWidth",n)]:S,[y("railBorderRadius",n)]:he,[y("buttonBorderRadius",n)]:be},common:{cubicBezierEaseInOut:fe}}=o.value;let D,P,U;return B?(D=`calc((${m} - ${g}) / 2)`,P=`max(${m}, ${g})`,U=`max(${S}, calc(${S} + ${g} - ${m}))`):(D=K((h(m)-h(g))/2),P=K(Math.max(h(m),h(g))),U=h(m)>h(g)?S:K(h(S)+h(g)-h(m))),{"--n-bezier":fe,"--n-button-border-radius":be,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ce,"--n-button-width-pressed":ue,"--n-button-height":g,"--n-height":P,"--n-offset":D,"--n-opacity-disabled":R,"--n-rail-border-radius":he,"--n-rail-color":V,"--n-rail-color-active":z,"--n-rail-height":m,"--n-rail-width":S,"--n-width":U,"--n-box-shadow-focus":re,"--n-loading-color":le,"--n-text-color":se,"--n-icon-color":de}}),_=d?xe("switch",$(()=>l.value[0]),A,e):void 0;return{handleClick:te,handleBlur:oe,handleFocus:ne,handleKeyup:ae,handleKeydown:ie,mergedRailStyle:f,pressed:x,mergedClsPrefix:s,mergedValue:p,checked:C,mergedDisabled:c,cssVars:d?void 0:A,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:s,checked:d,mergedRailStyle:o,onRender:i,$slots:l}=this;i==null||i();const{checked:c,unchecked:w,icon:b,"checked-icon":p,"unchecked-icon":C}=l,x=!(M(b)&&M(p)&&M(C));return r("div",{role:"switch","aria-checked":d,class:[`${e}-switch`,this.themeClass,x&&`${e}-switch--icon`,d&&`${e}-switch--active`,s&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},k(c,a=>k(w,f=>a||f?r("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),a),r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),f)):null)),r("div",{class:`${e}-switch__button`},k(b,a=>k(p,f=>k(C,v=>r(_e,null,{default:()=>this.loading?r(Ce,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(f||a)?r("div",{class:`${e}-switch__button-icon`,key:f?"checked-icon":"icon"},f||a):!this.checked&&(v||a)?r("div",{class:`${e}-switch__button-icon`,key:v?"unchecked-icon":"icon"},v||a):null})))),k(c,a=>a&&r("div",{key:"checked",class:`${e}-switch__checked`},a)),k(w,a=>a&&r("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}}),Pe=q({__name:"PSwitch",props:["modelValue","element"],emits:["update:modelValue"],setup(e,{emit:s}){const d=e,o=$({get(){return!!d.modelValue},set(i){s("update:modelValue",i?1:0)}});return(i,l)=>{const c=Fe,w=Se;return e.element==="switch"?(I(),E(c,{key:0,value:J(o),"onUpdate:value":l[0]||(l[0]=b=>Q(o)?o.value=b:null)},{default:X(()=>[Y(i.$slots,"default")]),_:3},8,["value"])):(I(),E(w,{key:1,checked:J(o),"onUpdate:checked":l[1]||(l[1]=b=>Q(o)?o.value=b:null)},{default:X(()=>[Y(i.$slots,"default")]),_:3},8,["checked"]))}}});export{Pe as _};
