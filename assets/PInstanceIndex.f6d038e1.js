import{d as m,A as B,c1 as F,c6 as I,p as _,J as N,h as t,bB as d,L as n,q as f,B as a,C as s,c7 as D,r as E,W as y,c8 as k,D as c,H as x,ca as C}from"./index.1cac1bad.js";import{_ as u}from"./PLink.vue_vue_type_script_setup_true_lang.f43831db.js";import{N as h}from"./text.0b3e9adc.js";import{b as v,c as A}from"./Time.9bd2104a.js";const b=m({__name:"PInstanceList",setup(p){const i=[{title:"ID",key:"id",render(e){return t(d,{},()=>e.id)}},{title:"\u540D\u79F0",key:"name",render(e){return t(h,{},()=>e.name||e.uuid.split("-")[0])}},{title:"\u6240\u6709\u7528\u6237",key:"user",render(e){return t(u,{to:{name:"admin.user.index",params:{userId:e.relationship.user.id}}},()=>e.relationship.user.name)}},{title:"\u8282\u70B9",key:"node",render(e){return t(u,{to:{name:"admin.node.index",params:{nodeId:e.node.id}}},()=>e.node.name)}},{title:"\u955C\u50CF",key:"app",render(e){return t(u,{to:{name:"admin.app.index",params:{appId:e.app.id}}},()=>e.app.name)}},{title:"\u7248\u672C",key:"version",render(e){return t(u,{to:{name:"admin.app.version",params:{versionId:e.version.id}}},()=>e.version.name)}},{title:"\u72B6\u6001",key:"status",render(e){return t(d,{type:e.stats.status==n.RUNNING?"success":"info"},()=>({[n.STARTING]:"\u542F\u52A8\u4E2D",[n.RUNNING]:"\u8FD0\u884C\u4E2D",[n.STOPPING]:"\u5173\u95ED\u4E2D",[n.STOPPED]:"\u5DF2\u505C\u6B62",[n.INSTALLING]:"\u5B89\u88C5\u4E2D"})[e.stats.status])}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created_at",render(e){return t(v,{time:new Date(e.created_at)})}},{title:"\u64CD\u4F5C",key:"action",render(e){return t(u,{to:{name:"admin.instance",params:{insId:e.id}},element:"button",size:"small","text-color":"white"},()=>"\u4FEE\u6539")}}],r=B();return F().listen(()=>{I.ins.list().then(e=>{r.value=e.data.data})}),(e,o)=>{const l=A;return _(),N(l,{columns:i,data:r.value,bordered:!0},null,8,["data"])}}}),T={class:"mdui-container mt-4"},L=m({__name:"PInstanceIndex",setup(p){return(i,r)=>{const e=x,o=C;return _(),f(y,null,[a(D,null,{default:s(()=>[a(k,{breadcrumb:["\u7BA1\u7406\u9762\u677F","\u5B9E\u4F8B\u7BA1\u7406"]},{title:s(()=>[c("\u5B9E\u4F8B\u5217\u8868")]),action:s(()=>[a(e,{type:"primary","text-color":"white"},{default:s(()=>[c("\u65B0\u5EFA\u5B9E\u4F8B")]),_:1})]),_:1})]),_:1}),a(o,{class:"my-0"}),E("div",T,[a(b)])],64)}}});export{L as default};
