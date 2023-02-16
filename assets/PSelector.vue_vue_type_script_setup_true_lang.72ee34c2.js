import{aP as oe,aQ as ie,bu as ae,co as re,a5 as le,a as se,c as $,aH as ue,d as N,u as de,k as j,b7 as ce,A as M,m as z,bF as fe,am as he,b8 as pe,o as ge,bK as U,aJ as me,h as w,bL as ve,bM as be,bN as Se,aD as ye,_ as we,aw as xe,aq as k,ac as E,p as Ie,J as Te,z as Me,ce as Re}from"./index.1cac1bad.js";import{N as Ce}from"./Time.9bd2104a.js";const Ve=t=>{const{boxShadow2:a}=t;return{menuBoxShadow:a}},Be=oe({name:"Mention",common:ie,peers:{InternalSelectMenu:ae,Input:re},self:Ve}),Pe=Be;function Fe(t,a={debug:!1,useSelectionEnd:!1,checkWidthOverflow:!0}){const b=t.selectionStart!==null?t.selectionStart:0,f=t.selectionEnd!==null?t.selectionEnd:0,r=a.useSelectionEnd?f:b,x=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],p=navigator.userAgent.toLowerCase().includes("firefox");if(!le)throw new Error("textarea-caret-position#getCaretPosition should only be called in a browser");const u=a==null?void 0:a.debug;if(u){const h=document.querySelector("#input-textarea-caret-position-mirror-div");h!=null&&h.parentNode&&h.parentNode.removeChild(h)}const c=document.createElement("div");c.id="input-textarea-caret-position-mirror-div",document.body.appendChild(c);const l=c.style,i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,g=t.nodeName==="INPUT";l.whiteSpace=g?"nowrap":"pre-wrap",g||(l.wordWrap="break-word"),l.position="absolute",u||(l.visibility="hidden"),x.forEach(h=>{if(g&&h==="lineHeight")if(i.boxSizing==="border-box"){const V=parseInt(i.height),B=parseInt(i.paddingTop)+parseInt(i.paddingBottom)+parseInt(i.borderTopWidth)+parseInt(i.borderBottomWidth),I=B+parseInt(i.lineHeight);V>I?l.lineHeight=`${V-B}px`:V===I?l.lineHeight=i.lineHeight:l.lineHeight="0"}else l.lineHeight=i.height;else l[h]=i[h]}),p?t.scrollHeight>parseInt(i.height)&&(l.overflowY="scroll"):l.overflow="hidden",c.textContent=t.value.substring(0,r),g&&c.textContent&&(c.textContent=c.textContent.replace(/\s/g,"\xA0"));const s=document.createElement("span");s.textContent=t.value.substring(r)||".",s.style.position="relative",s.style.left=`${-t.scrollLeft}px`,s.style.top=`${-t.scrollTop}px`,c.appendChild(s);const S={top:s.offsetTop+parseInt(i.borderTopWidth),left:s.offsetLeft+parseInt(i.borderLeftWidth),absolute:!1,height:parseInt(i.fontSize)*1.5};return u?s.style.backgroundColor="#aaa":document.body.removeChild(c),S.left>=t.clientWidth&&a.checkWidthOverflow&&(S.left=t.clientWidth),S}const _e=se([$("mention","width: 100%; z-index: auto; position: relative;"),$("mention-menu",`
 box-shadow: var(--n-menu-box-shadow);
 `,[ue({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Ee=Object.assign(Object.assign({},j.props),{to:U.propTo,autosize:[Boolean,Object],options:{type:Array,default:[]},type:{type:String,default:"text"},separator:{type:String,validator:t=>t.length!==1?(xe("mention","`separator`'s length must be 1."),!1):!0,default:" "},bordered:{type:Boolean,default:void 0},disabled:Boolean,value:String,defaultValue:{type:String,default:""},loading:Boolean,prefix:{type:[String,Array],default:"@"},placeholder:{type:String,default:""},placement:{type:String,default:"bottom-start"},size:String,renderLabel:Function,status:String,"onUpdate:show":[Array,Function],onUpdateShow:[Array,Function],"onUpdate:value":[Array,Function],onUpdateValue:[Array,Function],onSearch:Function,onSelect:Function,onFocus:Function,onBlur:Function,internalDebug:Boolean}),ze=N({name:"Mention",props:Ee,setup(t){const{namespaceRef:a,mergedClsPrefixRef:b,mergedBorderedRef:f,inlineThemeDisabled:r}=de(t),x=j("Mention","-mention",_e,Pe,t,b),p=ce(t),u=M(null),c=M(null),l=M(null),i=M("");let g=null,s=null,S=null;const h=z(()=>{const{value:e}=i;return t.options.filter(n=>e?typeof n.label=="string"?n.label.startsWith(e):typeof n.value=="string"?n.value.startsWith(e):!1:!0)}),V=z(()=>fe(h.value,{getKey:e=>e.value})),B=M(null),I=M(!1),L=M(t.defaultValue),K=he(t,"value"),q=pe(K,L),W=z(()=>{const{self:{menuBoxShadow:e}}=x.value;return{"--n-menu-box-shadow":e}}),R=r?ge("mention",void 0,W,t):void 0;function T(e){if(t.disabled)return;const{onUpdateShow:n,"onUpdate:show":o}=t;n&&E(n,e),o&&E(o,e),e||(g=null,s=null,S=null),I.value=e}function H(e){const{onUpdateValue:n,"onUpdate:value":o}=t,{nTriggerFormChange:d,nTriggerFormInput:m}=p;o&&E(o,e),n&&E(n,e),m(),d(),L.value=e}function A(){return t.type==="text"?u.value.inputElRef:u.value.textareaElRef}function D(){var e;const n=A();if(document.activeElement!==n){T(!1);return}const{selectionEnd:o}=n;if(o===null){T(!1);return}const d=n.value,{separator:m}=t,{prefix:C}=t,_=typeof C=="string"?[C]:C;for(let y=o-1;y>=0;--y){const v=d[y];if(v===m||v===`
`||v==="\r"){T(!1);return}if(_.includes(v)){const F=d.slice(y+1,o);T(!0),(e=t.onSearch)===null||e===void 0||e.call(t,F,v),i.value=F,g=v,s=y+1,S=o;return}}T(!1)}function J(){const{value:e}=c;if(!e)return;const n=A(),o=Fe(n);o.left+=n.parentElement.offsetLeft,e.style.left=`${o.left}px`,e.style.top=`${o.top+o.height}px`}function Y(){var e;!I.value||(e=l.value)===null||e===void 0||e.syncPosition()}function Q(e){H(e),P()}function P(){setTimeout(()=>{J(),D(),k().then(Y)},0)}function X(e){var n,o;if(e.key==="ArrowLeft"||e.key==="ArrowRight"){if(!((n=u.value)===null||n===void 0)&&n.isCompositing)return;P()}else if(e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="Enter"){if(!((o=u.value)===null||o===void 0)&&o.isCompositing)return;const{value:d}=B;if(I.value){if(d)if(e.preventDefault(),e.key==="ArrowUp")d.prev();else if(e.key==="ArrowDown")d.next();else{const m=d.getPendingTmNode();m?O(m):T(!1)}}else P()}}function G(e){const{onFocus:n}=t;n==null||n(e);const{nTriggerFormFocus:o}=p;o(),P()}function Z(){var e;(e=u.value)===null||e===void 0||e.focus()}function ee(){var e;(e=u.value)===null||e===void 0||e.blur()}function te(e){const{onBlur:n}=t;n==null||n(e);const{nTriggerFormBlur:o}=p;o(),T(!1)}function O(e){var n;if(g===null||s===null||S===null)return;const{rawNode:{value:o=""}}=e,d=A(),m=d.value,{separator:C}=t,_=m.slice(S),y=_.startsWith(C),v=`${o}${y?"":C}`;H(m.slice(0,s)+v+_),(n=t.onSelect)===null||n===void 0||n.call(t,e.rawNode,g);const F=s+v.length+(y?1:0);k().then(()=>{d.selectionStart=F,d.selectionEnd=F,D()})}function ne(){t.disabled||P()}return{namespace:a,mergedClsPrefix:b,mergedBordered:f,mergedSize:p.mergedSizeRef,mergedStatus:p.mergedStatusRef,mergedTheme:x,treeMate:V,selectMenuInstRef:B,inputInstRef:u,cursorRef:c,followerRef:l,showMenu:I,adjustedTo:U(t),isMounted:me(),mergedValue:q,handleInputFocus:G,handleInputBlur:te,handleInputUpdateValue:Q,handleInputKeyDown:X,handleSelect:O,handleInputMouseDown:ne,focus:Z,blur:ee,cssVars:r?void 0:W,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{mergedTheme:t,mergedClsPrefix:a,$slots:b}=this;return w("div",{class:`${a}-mention`},w(we,{status:this.mergedStatus,themeOverrides:t.peerOverrides.Input,theme:t.peers.Input,size:this.mergedSize,autosize:this.autosize,type:this.type,ref:"inputInstRef",placeholder:this.placeholder,onMousedown:this.handleInputMouseDown,onUpdateValue:this.handleInputUpdateValue,onKeydown:this.handleInputKeyDown,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,bordered:this.mergedBordered,disabled:this.disabled,value:this.mergedValue}),w(ve,null,{default:()=>[w(be,null,{default:()=>w("div",{style:{position:"absolute",width:0,height:0},ref:"cursorRef"})}),w(Se,{ref:"followerRef",placement:this.placement,show:this.showMenu,containerClass:this.namespace,to:this.adjustedTo,teleportDisabled:this.adjustedTo===U.tdkey},{default:()=>w(ye,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{const{mergedTheme:f,onRender:r}=this;return r==null||r(),this.showMenu?w(Ce,{clsPrefix:a,theme:f.peers.InternalSelectMenu,themeOverrides:f.peerOverrides.InternalSelectMenu,autoPending:!0,ref:"selectMenuInstRef",class:[`${a}-mention-menu`,this.themeClass],loading:this.loading,treeMate:this.treeMate,virtualScroll:!1,style:this.cssVars,onToggle:this.handleSelect,renderLabel:this.renderLabel},b):null}})})]}))}}),ke=N({__name:"PSelector",props:["modelValue","list"],emits:["update:modelValue"],setup(t,{emit:a}){const b=t,f=z({get(){return"#"+b.modelValue},set(r){r.lastIndexOf("#")>0||(a("update:modelValue",r.slice(1)),k(()=>a("update:modelValue",r.slice(1).replace(" ",""))))}});return(r,x)=>{const p=ze;return Ie(),Te(p,{value:Me(f),"onUpdate:value":x[0]||(x[0]=u=>Re(f)?f.value=u:null),options:t.list,"default-value":"#",prefix:"#"},null,8,["value","options"])}}});export{ke as _};
