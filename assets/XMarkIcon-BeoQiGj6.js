import{r as l,R as T}from"./index-DRRpwTSH.js";import{e as me,N as be,E as Pe,n as ce,y as Se,s as D}from"./use-root-containers-B0QkqHUt.js";import{O as J,U as z,b as K,T as ye,n as re,w as oe,s as ie,o as g,y as Ee,a as ge,u as A,d as U,C as H,I as j,c as pe,i as $e,l as Ie,m as G,M as _,z as he,A as Te,e as L,r as de,j as we,N as ee}from"./keyboard-C1HsO_kv.js";import{T as xe}from"./use-resolve-button-type-CnzAr53l.js";import{f as te,s as ne}from"./hidden-9PZBqRVJ.js";var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),ke=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(ke||{});let Ce={0:e=>{let n={...e,popoverState:A(e.popoverState,{0:1,1:0})};return n.popoverState===0&&(n.__demoMode=!1),n},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,n){return e.button===n.button?e:{...e,button:n.button}},3(e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},4(e,n){return e.panel===n.panel?e:{...e,panel:n.panel}},5(e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},le=l.createContext(null);le.displayName="PopoverContext";function Q(e){let n=l.useContext(le);if(n===null){let d=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,Q),d}return n}let ae=l.createContext(null);ae.displayName="PopoverAPIContext";function ue(e){let n=l.useContext(ae);if(n===null){let d=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,ue),d}return n}let se=l.createContext(null);se.displayName="PopoverGroupContext";function fe(){return l.useContext(se)}let Z=l.createContext(null);Z.displayName="PopoverPanelContext";function Oe(){return l.useContext(Z)}function Fe(e,n){return A(n.type,Ce,e,n)}let Be="div";function Re(e,n){var d;let{__demoMode:P=!1,...w}=e,a=l.useRef(null),t=K(n,ye(u=>{a.current=u})),m=l.useRef([]),b=l.useReducer(Fe,{__demoMode:P,popoverState:P?0:1,buttons:m,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:l.createRef(),afterPanelSentinel:l.createRef()}),[{popoverState:S,button:i,buttonId:$,panel:o,panelId:R,beforePanelSentinel:M,afterPanelSentinel:y},s]=b,f=re((d=a.current)!=null?d:i),x=l.useMemo(()=>{if(!i||!o)return!1;for(let Y of document.querySelectorAll("body > *"))if(Number(Y==null?void 0:Y.contains(i))^Number(Y==null?void 0:Y.contains(o)))return!0;let u=oe(),k=u.indexOf(i),X=(k+u.length-1)%u.length,q=(k+1)%u.length,V=u[X],ve=u[q];return!o.contains(V)&&!o.contains(ve)},[i,o]),C=ie($),F=ie(R),B=l.useMemo(()=>({buttonId:C,panelId:F,close:()=>s({type:1})}),[C,F,s]),O=fe(),N=O==null?void 0:O.registerPopover,c=g(()=>{var u;return(u=O==null?void 0:O.isFocusWithinPopoverGroup())!=null?u:(f==null?void 0:f.activeElement)&&((i==null?void 0:i.contains(f.activeElement))||(o==null?void 0:o.contains(f.activeElement)))});l.useEffect(()=>N==null?void 0:N(B),[N,B]);let[I,v]=me(),r=be({mainTreeNodeRef:O==null?void 0:O.mainTreeNodeRef,portals:I,defaultContainers:[i,o]});Pe(f==null?void 0:f.defaultView,"focus",u=>{var k,X,q,V;u.target!==window&&u.target instanceof HTMLElement&&S===0&&(c()||i&&o&&(r.contains(u.target)||(X=(k=M.current)==null?void 0:k.contains)!=null&&X.call(k,u.target)||(V=(q=y.current)==null?void 0:q.contains)!=null&&V.call(q,u.target)||s({type:1})))},!0),Ee(r.resolveContainers,(u,k)=>{s({type:1}),he(k,Te.Loose)||(u.preventDefault(),i==null||i.focus())},S===0);let p=g(u=>{s({type:1});let k=u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:i:i;k==null||k.focus()}),h=l.useMemo(()=>({close:p,isPortalled:x}),[p,x]),E=l.useMemo(()=>({open:S===0,close:p}),[S,p]),W={ref:t};return T.createElement(Z.Provider,{value:null},T.createElement(le.Provider,{value:b},T.createElement(ae.Provider,{value:h},T.createElement(ge,{value:A(S,{0:U.Open,1:U.Closed})},T.createElement(v,null,H({ourProps:W,theirProps:w,slot:E,defaultTag:Be,name:"Popover"}),T.createElement(r.MainTreeNode,null))))))}let Ne="button";function De(e,n){let d=j(),{id:P=`headlessui-popover-button-${d}`,...w}=e,[a,t]=Q("Popover.Button"),{isPortalled:m}=ue("Popover.Button"),b=l.useRef(null),S=`headlessui-focus-sentinel-${j()}`,i=fe(),$=i==null?void 0:i.closeOthers,o=Oe()!==null;l.useEffect(()=>{if(!o)return t({type:3,buttonId:P}),()=>{t({type:3,buttonId:null})}},[o,P,t]);let[R]=l.useState(()=>Symbol()),M=K(b,n,o?null:r=>{if(r)a.buttons.current.push(R);else{let p=a.buttons.current.indexOf(R);p!==-1&&a.buttons.current.splice(p,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&t({type:2,button:r})}),y=K(b,n),s=re(b),f=g(r=>{var p,h,E;if(o){if(a.popoverState===1)return;switch(r.key){case L.Space:case L.Enter:r.preventDefault(),(h=(p=r.target).click)==null||h.call(p),t({type:1}),(E=a.button)==null||E.focus();break}}else switch(r.key){case L.Space:case L.Enter:r.preventDefault(),r.stopPropagation(),a.popoverState===1&&($==null||$(a.buttonId)),t({type:0});break;case L.Escape:if(a.popoverState!==0)return $==null?void 0:$(a.buttonId);if(!b.current||s!=null&&s.activeElement&&!b.current.contains(s.activeElement))return;r.preventDefault(),r.stopPropagation(),t({type:1});break}}),x=g(r=>{o||r.key===L.Space&&r.preventDefault()}),C=g(r=>{var p,h;de(r.currentTarget)||e.disabled||(o?(t({type:1}),(p=a.button)==null||p.focus()):(r.preventDefault(),r.stopPropagation(),a.popoverState===1&&($==null||$(a.buttonId)),t({type:0}),(h=a.button)==null||h.focus()))}),F=g(r=>{r.preventDefault(),r.stopPropagation()}),B=a.popoverState===0,O=l.useMemo(()=>({open:B}),[B]),N=xe(e,b),c=o?{ref:y,type:N,onKeyDown:f,onClick:C}:{ref:M,id:a.buttonId,type:N,"aria-expanded":a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:f,onKeyUp:x,onClick:C,onMouseDown:F},I=ce(),v=g(()=>{let r=a.panel;if(!r)return;function p(){A(I.current,{[D.Forwards]:()=>G(r,_.First),[D.Backwards]:()=>G(r,_.Last)})===ee.Error&&G(oe().filter(h=>h.dataset.headlessuiFocusGuard!=="true"),A(I.current,{[D.Forwards]:_.Next,[D.Backwards]:_.Previous}),{relativeTo:a.button})}p()});return T.createElement(T.Fragment,null,H({ourProps:c,theirProps:w,slot:O,defaultTag:Ne,name:"Popover.Button"}),B&&!o&&m&&T.createElement(te,{id:S,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:v}))}let _e="div",Le=J.RenderStrategy|J.Static;function Ge(e,n){let d=j(),{id:P=`headlessui-popover-overlay-${d}`,...w}=e,[{popoverState:a},t]=Q("Popover.Overlay"),m=K(n),b=pe(),S=b!==null?(b&U.Open)===U.Open:a===0,i=g(o=>{if(de(o.currentTarget))return o.preventDefault();t({type:1})}),$=l.useMemo(()=>({open:a===0}),[a]);return H({ourProps:{ref:m,id:P,"aria-hidden":!0,onClick:i},theirProps:w,slot:$,defaultTag:_e,features:Le,visible:S,name:"Popover.Overlay"})}let Ae="div",je=J.RenderStrategy|J.Static;function Ke(e,n){let d=j(),{id:P=`headlessui-popover-panel-${d}`,focus:w=!1,...a}=e,[t,m]=Q("Popover.Panel"),{close:b,isPortalled:S}=ue("Popover.Panel"),i=`headlessui-focus-sentinel-before-${j()}`,$=`headlessui-focus-sentinel-after-${j()}`,o=l.useRef(null),R=K(o,n,c=>{m({type:4,panel:c})}),M=re(o),y=$e();Ie(()=>(m({type:5,panelId:P}),()=>{m({type:5,panelId:null})}),[P,m]);let s=pe(),f=s!==null?(s&U.Open)===U.Open:t.popoverState===0,x=g(c=>{var I;switch(c.key){case L.Escape:if(t.popoverState!==0||!o.current||M!=null&&M.activeElement&&!o.current.contains(M.activeElement))return;c.preventDefault(),c.stopPropagation(),m({type:1}),(I=t.button)==null||I.focus();break}});l.useEffect(()=>{var c;e.static||t.popoverState===1&&((c=e.unmount)==null||c)&&m({type:4,panel:null})},[t.popoverState,e.unmount,e.static,m]),l.useEffect(()=>{if(t.__demoMode||!w||t.popoverState!==0||!o.current)return;let c=M==null?void 0:M.activeElement;o.current.contains(c)||G(o.current,_.First)},[t.__demoMode,w,o,t.popoverState]);let C=l.useMemo(()=>({open:t.popoverState===0,close:b}),[t,b]),F={ref:R,id:P,onKeyDown:x,onBlur:w&&t.popoverState===0?c=>{var I,v,r,p,h;let E=c.relatedTarget;E&&o.current&&((I=o.current)!=null&&I.contains(E)||(m({type:1}),((r=(v=t.beforePanelSentinel.current)==null?void 0:v.contains)!=null&&r.call(v,E)||(h=(p=t.afterPanelSentinel.current)==null?void 0:p.contains)!=null&&h.call(p,E))&&E.focus({preventScroll:!0})))}:void 0,tabIndex:-1},B=ce(),O=g(()=>{let c=o.current;if(!c)return;function I(){A(B.current,{[D.Forwards]:()=>{var v;G(c,_.First)===ee.Error&&((v=t.afterPanelSentinel.current)==null||v.focus())},[D.Backwards]:()=>{var v;(v=t.button)==null||v.focus({preventScroll:!0})}})}I()}),N=g(()=>{let c=o.current;if(!c)return;function I(){A(B.current,{[D.Forwards]:()=>{var v;if(!t.button)return;let r=oe(),p=r.indexOf(t.button),h=r.slice(0,p+1),E=[...r.slice(p+1),...h];for(let W of E.slice())if(W.dataset.headlessuiFocusGuard==="true"||(v=t.panel)!=null&&v.contains(W)){let u=E.indexOf(W);u!==-1&&E.splice(u,1)}G(E,_.First,{sorted:!1})},[D.Backwards]:()=>{var v;G(c,_.Previous)===ee.Error&&((v=t.button)==null||v.focus())}})}I()});return T.createElement(Z.Provider,{value:P},f&&S&&T.createElement(te,{id:i,ref:t.beforePanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:O}),H({mergeRefs:y,ourProps:F,theirProps:a,slot:C,defaultTag:Ae,features:je,visible:f,name:"Popover.Panel"}),f&&S&&T.createElement(te,{id:$,ref:t.afterPanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}))}let Ue="div";function We(e,n){let d=l.useRef(null),P=K(d,n),[w,a]=l.useState([]),t=Se(),m=g(y=>{a(s=>{let f=s.indexOf(y);if(f!==-1){let x=s.slice();return x.splice(f,1),x}return s})}),b=g(y=>(a(s=>[...s,y]),()=>m(y))),S=g(()=>{var y;let s=we(d);if(!s)return!1;let f=s.activeElement;return(y=d.current)!=null&&y.contains(f)?!0:w.some(x=>{var C,F;return((C=s.getElementById(x.buttonId.current))==null?void 0:C.contains(f))||((F=s.getElementById(x.panelId.current))==null?void 0:F.contains(f))})}),i=g(y=>{for(let s of w)s.buttonId.current!==y&&s.close()}),$=l.useMemo(()=>({registerPopover:b,unregisterPopover:m,isFocusWithinPopoverGroup:S,closeOthers:i,mainTreeNodeRef:t.mainTreeNodeRef}),[b,m,S,i,t.mainTreeNodeRef]),o=l.useMemo(()=>({}),[]),R=e,M={ref:P};return T.createElement(se.Provider,{value:$},H({ourProps:M,theirProps:R,slot:o,defaultTag:Ue,name:"Popover.Group"}),T.createElement(t.MainTreeNode,null))}let qe=z(Re),ze=z(De),He=z(Ge),Xe=z(Ke),Ve=z(We),rt=Object.assign(qe,{Button:ze,Overlay:He,Panel:Xe,Group:Ve});function Ye({title:e,titleId:n,...d},P){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:P,"aria-labelledby":n},d),e?l.createElement("title",{id:n},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const Je=l.forwardRef(Ye),ot=Je;export{rt as C,ot as X};