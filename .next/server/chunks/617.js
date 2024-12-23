"use strict";exports.id=617,exports.ids=[617],exports.modules={88874:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]])},941:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},39183:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},96633:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},90748:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},72607:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},57671:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]])},60850:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(62881).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},47829:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(59643).Z)("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]])},12310:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{Z:()=>s});var o=n(22052),a=n(8583),i=n(82543),l=e([i]);i=(l.then?(await l)():l)[0];var s=(0,o.cache)(async function(e){let t,n;"string"==typeof e?t=e:e&&(n=e.locale,t=e.namespace);let r=await (0,i.Z)(n);return(0,a.eX)({...r,namespace:t,messages:r.messages})});r()}catch(e){r(e)}})},33726:(e,t,n)=>{n.d(t,{VY:()=>q,ck:()=>H,fC:()=>K,h4:()=>U,xz:()=>$});var r=n(17266),o=n(93095),a=n(68507),i=n(48051),l=n(82561),s=n(52067),d=n(77335),u=n(91855),c=n(88957),f=n(17124),p=n(68819),v="Accordion",h=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[w,m,g]=(0,a.B)(v),[x,y]=(0,o.b)(v,[g,u.p_]),b=(0,u.p_)(),R=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,p.jsx)(w.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,p.jsx)(N,{...r,ref:t}):(0,p.jsx)(E,{...r,ref:t})})});R.displayName=v;var[C,j]=x(v),[M,k]=x(v,{collapsible:!1}),E=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:a=()=>{},collapsible:i=!1,...l}=e,[d,u]=(0,s.T)({prop:n,defaultProp:o,onChange:a});return(0,p.jsx)(C,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:u,onItemClose:r.useCallback(()=>i&&u(""),[i,u]),children:(0,p.jsx)(M,{scope:e.__scopeAccordion,collapsible:i,children:(0,p.jsx)(I,{...l,ref:t})})})}),N=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:a=()=>{},...i}=e,[l=[],d]=(0,s.T)({prop:n,defaultProp:o,onChange:a}),u=r.useCallback(e=>d((t=[])=>[...t,e]),[d]),c=r.useCallback(e=>d((t=[])=>t.filter(t=>t!==e)),[d]);return(0,p.jsx)(C,{scope:e.__scopeAccordion,value:l,onItemOpen:u,onItemClose:c,children:(0,p.jsx)(M,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(I,{...i,ref:t})})})}),[T,A]=x(v),I=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:o,dir:a,orientation:s="vertical",...u}=e,c=r.useRef(null),v=(0,i.e)(c,t),g=m(n),x="ltr"===(0,f.gm)(a),y=(0,l.M)(e.onKeyDown,e=>{if(!h.includes(e.key))return;let t=e.target,n=g().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),o=n.length;if(-1===r)return;e.preventDefault();let a=r,i=o-1,l=()=>{(a=r+1)>i&&(a=0)},d=()=>{(a=r-1)<0&&(a=i)};switch(e.key){case"Home":a=0;break;case"End":a=i;break;case"ArrowRight":"horizontal"===s&&(x?l():d());break;case"ArrowDown":"vertical"===s&&l();break;case"ArrowLeft":"horizontal"===s&&(x?d():l());break;case"ArrowUp":"vertical"===s&&d()}let u=a%o;n[u].ref.current?.focus()});return(0,p.jsx)(T,{scope:n,disabled:o,direction:a,orientation:s,children:(0,p.jsx)(w.Slot,{scope:n,children:(0,p.jsx)(d.WV.div,{...u,"data-orientation":s,ref:v,onKeyDown:o?void 0:y})})})}),D="AccordionItem",[P,_]=x(D),V=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,a=A(D,n),i=j(D,n),l=b(n),s=(0,c.M)(),d=r&&i.value.includes(r)||!1,f=a.disabled||e.disabled;return(0,p.jsx)(P,{scope:n,open:d,disabled:f,triggerId:s,children:(0,p.jsx)(u.fC,{"data-orientation":a.orientation,"data-state":Z(d),...l,...o,ref:t,disabled:f,open:d,onOpenChange:e=>{e?i.onItemOpen(r):i.onItemClose(r)}})})});V.displayName=D;var L="AccordionHeader",S=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=A(v,n),a=_(L,n);return(0,p.jsx)(d.WV.h3,{"data-orientation":o.orientation,"data-state":Z(a.open),"data-disabled":a.disabled?"":void 0,...r,ref:t})});S.displayName=L;var W="AccordionTrigger",F=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=A(v,n),a=_(W,n),i=k(W,n),l=b(n);return(0,p.jsx)(w.ItemSlot,{scope:n,children:(0,p.jsx)(u.xz,{"aria-disabled":a.open&&!i.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...l,...r,ref:t})})});F.displayName=W;var z="AccordionContent",O=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=A(v,n),a=_(z,n),i=b(n);return(0,p.jsx)(u.VY,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...i,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function Z(e){return e?"open":"closed"}O.displayName=z;var K=R,H=V,U=S,$=F,q=O},91855:(e,t,n)=>{n.d(t,{Fw:()=>R,VY:()=>E,fC:()=>M,p_:()=>h,wy:()=>y,xz:()=>k});var r=n(17266),o=n(82561),a=n(93095),i=n(52067),l=n(65819),s=n(48051),d=n(77335),u=n(9815),c=n(88957),f=n(68819),p="Collapsible",[v,h]=(0,a.b)(p),[w,m]=v(p),g=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:o,defaultOpen:a,disabled:l,onOpenChange:s,...u}=e,[p=!1,v]=(0,i.T)({prop:o,defaultProp:a,onChange:s});return(0,f.jsx)(w,{scope:n,disabled:l,contentId:(0,c.M)(),open:p,onOpenToggle:r.useCallback(()=>v(e=>!e),[v]),children:(0,f.jsx)(d.WV.div,{"data-state":j(p),"data-disabled":l?"":void 0,...u,ref:t})})});g.displayName=p;var x="CollapsibleTrigger",y=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,a=m(x,n);return(0,f.jsx)(d.WV.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":j(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...r,ref:t,onClick:(0,o.M)(e.onClick,a.onOpenToggle)})});y.displayName=x;var b="CollapsibleContent",R=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=m(b,e.__scopeCollapsible);return(0,f.jsx)(u.z,{present:n||o.open,children:({present:e})=>(0,f.jsx)(C,{...r,ref:t,present:e})})});R.displayName=b;var C=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:o,children:a,...i}=e,u=m(b,n),[c,p]=r.useState(o),v=r.useRef(null),h=(0,s.e)(t,v),w=r.useRef(0),g=w.current,x=r.useRef(0),y=x.current,R=u.open||c,C=r.useRef(R),M=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.b)(()=>{let e=v.current;if(e){M.current=M.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();w.current=t.height,x.current=t.width,C.current||(e.style.transitionDuration=M.current.transitionDuration,e.style.animationName=M.current.animationName),p(o)}},[u.open,o]),(0,f.jsx)(d.WV.div,{"data-state":j(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!R,...i,ref:h,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style},children:R&&a})});function j(e){return e?"open":"closed"}var M=g,k=y,E=R},29152:(e,t,n)=>{n.d(t,{f:()=>s});var r=n(17266);n(55305);var o=n(99469),a=n(68819),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...i}=e,l=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(l,{...i,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),l=r.forwardRef((e,t)=>(0,a.jsx)(i.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));l.displayName="Label";var s=l},87267:(e,t,n)=>{n.d(t,{VY:()=>ex,aV:()=>ev,ck:()=>eh,fC:()=>ep,l_:()=>ey,rU:()=>em,xz:()=>ew,z$:()=>eg});var r=n(17266),o=n(55305),a=n(93095),i=n(82561),l=n(77335),s=n(52067),d=n(48051),u=n(17124),c=n(9815),f=n(88957),p=n(68507),v=n(30703),h=n(53405),w=n(65819),m=n(55049),g=n(6009),x=n(68819),y="NavigationMenu",[b,R,C]=(0,p.B)(y),[j,M,k]=(0,p.B)(y),[E,N]=(0,a.b)(y,[C,k]),[T,A]=E(y),[I,D]=E(y),P=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:a,defaultValue:i,delayDuration:c=200,skipDelayDuration:f=300,orientation:p="horizontal",dir:v,...h}=e,[w,m]=r.useState(null),g=(0,d.e)(t,e=>m(e)),y=(0,u.gm)(v),b=r.useRef(0),R=r.useRef(0),C=r.useRef(0),[j,M]=r.useState(!0),[k="",E]=(0,s.T)({prop:o,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(C.current),t&&M(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>M(!0),f)),a?.(e)},defaultProp:i}),N=r.useCallback(()=>{window.clearTimeout(R.current),R.current=window.setTimeout(()=>E(""),150)},[E]),T=r.useCallback(e=>{window.clearTimeout(R.current),E(e)},[E]),A=r.useCallback(e=>{k===e?window.clearTimeout(R.current):b.current=window.setTimeout(()=>{window.clearTimeout(R.current),E(e)},c)},[k,E,c]);return r.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(R.current),window.clearTimeout(C.current)},[]),(0,x.jsx)(V,{scope:n,isRootMenu:!0,value:k,dir:y,orientation:p,rootNavigationMenu:w,onTriggerEnter:e=>{window.clearTimeout(b.current),j?A(e):T(e)},onTriggerLeave:()=>{window.clearTimeout(b.current),N()},onContentEnter:()=>window.clearTimeout(R.current),onContentLeave:N,onItemSelect:e=>{E(t=>t===e?"":e)},onItemDismiss:()=>E(""),children:(0,x.jsx)(l.WV.nav,{"aria-label":"Main","data-orientation":p,dir:y,...h,ref:g})})});P.displayName=y;var _="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",...d}=e,u=A(_,n),[c="",f]=(0,s.T)({prop:r,onChange:o,defaultProp:a});return(0,x.jsx)(V,{scope:n,isRootMenu:!1,value:c,dir:u.dir,orientation:i,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,x.jsx)(l.WV.div,{"data-orientation":i,...d,ref:t})})}).displayName=_;var V=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:a,orientation:i,children:l,value:s,onItemSelect:d,onItemDismiss:u,onTriggerEnter:c,onTriggerLeave:p,onContentEnter:v,onContentLeave:w}=e,[g,y]=r.useState(null),[R,C]=r.useState(new Map),[j,M]=r.useState(null);return(0,x.jsx)(T,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:s,previousValue:(0,h.D)(s),baseId:(0,f.M)(),dir:a,orientation:i,viewport:g,onViewportChange:y,indicatorTrack:j,onIndicatorTrackChange:M,onTriggerEnter:(0,m.W)(c),onTriggerLeave:(0,m.W)(p),onContentEnter:(0,m.W)(v),onContentLeave:(0,m.W)(w),onItemSelect:(0,m.W)(d),onItemDismiss:(0,m.W)(u),onViewportContentChange:r.useCallback((e,t)=>{C(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{C(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,x.jsx)(b.Provider,{scope:t,children:(0,x.jsx)(I,{scope:t,items:R,children:l})})})},L="NavigationMenuList",S=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=A(L,n),a=(0,x.jsx)(l.WV.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,x.jsx)(l.WV.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,x.jsx)(b.Slot,{scope:n,children:o.isRootMenu?(0,x.jsx)(er,{asChild:!0,children:a}):a})})});S.displayName=L;var W="NavigationMenuItem",[F,z]=E(W),O=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...a}=e,i=(0,f.M)(),s=r.useRef(null),d=r.useRef(null),u=r.useRef(null),c=r.useRef(()=>{}),p=r.useRef(!1),v=r.useCallback((e="start")=>{if(s.current){c.current();let t=ei(s.current);t.length&&el("start"===e?t:t.reverse())}},[]),h=r.useCallback(()=>{if(s.current){let e=ei(s.current);e.length&&(c.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,x.jsx)(F,{scope:n,value:o||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:d,contentRef:s,focusProxyRef:u,wasEscapeCloseRef:p,onEntryKeyDown:v,onFocusProxyEnter:v,onRootContentClose:h,onContentFocusOutside:h,children:(0,x.jsx)(l.WV.li,{...a,ref:t})})});O.displayName=W;var Z="NavigationMenuTrigger",K=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...a}=e,s=A(Z,e.__scopeNavigationMenu),u=z(Z,e.__scopeNavigationMenu),c=r.useRef(null),f=(0,d.e)(c,u.triggerRef,t),p=eu(s.baseId,u.value),v=ec(s.baseId,u.value),h=r.useRef(!1),w=r.useRef(!1),m=u.value===s.value;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b.ItemSlot,{scope:n,value:u.value,children:(0,x.jsx)(ea,{asChild:!0,children:(0,x.jsx)(l.WV.button,{id:p,disabled:o,"data-disabled":o?"":void 0,"data-state":ed(m),"aria-expanded":m,"aria-controls":v,...a,ref:f,onPointerEnter:(0,i.M)(e.onPointerEnter,()=>{w.current=!1,u.wasEscapeCloseRef.current=!1}),onPointerMove:(0,i.M)(e.onPointerMove,ef(()=>{o||w.current||u.wasEscapeCloseRef.current||h.current||(s.onTriggerEnter(u.value),h.current=!0)})),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(()=>{o||(s.onTriggerLeave(),h.current=!1)})),onClick:(0,i.M)(e.onClick,()=>{s.onItemSelect(u.value),w.current=m}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===s.dir?"ArrowLeft":"ArrowRight"}[s.orientation];m&&e.key===t&&(u.onEntryKeyDown(),e.preventDefault())})})})}),m&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g.f,{"aria-hidden":!0,tabIndex:0,ref:u.focusProxyRef,onFocus:e=>{let t=u.contentRef.current,n=e.relatedTarget,r=n===c.current,o=t?.contains(n);(r||!o)&&u.onFocusProxyEnter(r?"start":"end")}}),s.viewport&&(0,x.jsx)("span",{"aria-owns":v})]})]})});K.displayName=Z;var H="navigationMenu.linkSelect",U=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...a}=e;return(0,x.jsx)(ea,{asChild:!0,children:(0,x.jsx)(l.WV.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...a,ref:t,onClick:(0,i.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(H,{bubbles:!0,cancelable:!0});if(t.addEventListener(H,e=>o?.(e),{once:!0}),(0,l.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(J,{bubbles:!0,cancelable:!0});(0,l.jH)(t,e)}},{checkForDefaultPrevented:!1})})})});U.displayName="NavigationMenuLink";var $="NavigationMenuIndicator",q=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=A($,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?o.createPortal((0,x.jsx)(c.z,{present:n||i,children:(0,x.jsx)(Y,{...r,ref:t})}),a.indicatorTrack):null});q.displayName=$;var Y=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,a=A($,n),i=R(n),[s,d]=r.useState(null),[u,c]=r.useState(null),f="horizontal"===a.orientation,p=!!a.value;r.useEffect(()=>{let e=i(),t=e.find(e=>e.value===a.value)?.ref.current;t&&d(t)},[i,a.value]);let v=()=>{s&&c({size:f?s.offsetWidth:s.offsetHeight,offset:f?s.offsetLeft:s.offsetTop})};return es(s,v),es(a.indicatorTrack,v),u?(0,x.jsx)(l.WV.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":a.orientation,...o,ref:t,style:{position:"absolute",...f?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...o.style}}):null}),B="NavigationMenuContent",G=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=A(B,e.__scopeNavigationMenu),a=z(B,e.__scopeNavigationMenu),l=(0,d.e)(a.contentRef,t),s=a.value===o.value,u={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...r};return o.viewport?(0,x.jsx)(X,{forceMount:n,...u,ref:l}):(0,x.jsx)(c.z,{present:n||s,children:(0,x.jsx)(Q,{"data-state":ed(s),...u,ref:l,onPointerEnter:(0,i.M)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(o.onContentLeave)),style:{pointerEvents:!s&&o.isRootMenu?"none":void 0,...u.style}})})});G.displayName=B;var X=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=A(B,e.__scopeNavigationMenu);return(0,w.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,w.b)(()=>()=>r(e.value),[e.value,r]),null}),J="navigationMenu.rootContentDismiss",Q=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:a,focusProxyRef:l,wasEscapeCloseRef:s,onRootContentClose:u,onContentFocusOutside:c,...f}=e,p=A(B,n),h=r.useRef(null),w=(0,d.e)(h,t),m=eu(p.baseId,o),g=ec(p.baseId,o),y=R(n),b=r.useRef(null),{onItemDismiss:C}=p;r.useEffect(()=>{let e=h.current;if(p.isRootMenu&&e){let t=()=>{C(),u(),e.contains(document.activeElement)&&a.current?.focus()};return e.addEventListener(J,t),()=>e.removeEventListener(J,t)}},[p.isRootMenu,e.value,a,C,u]);let j=r.useMemo(()=>{let e=y().map(e=>e.value);"rtl"===p.dir&&e.reverse();let t=e.indexOf(p.value),n=e.indexOf(p.previousValue),r=o===p.value,a=n===e.indexOf(o);if(!r&&!a)return b.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(a&&-1!==t)return t>n?"to-start":"to-end"}return null})();return b.current=i,i},[p.previousValue,p.value,p.dir,y,o]);return(0,x.jsx)(er,{asChild:!0,children:(0,x.jsx)(v.XB,{id:g,"aria-labelledby":m,"data-motion":j,"data-orientation":p.orientation,...f,ref:w,disableOutsidePointerEvents:!1,onDismiss:()=>{let e=new Event(J,{bubbles:!0,cancelable:!0});h.current?.dispatchEvent(e)},onFocusOutside:(0,i.M)(e.onFocusOutside,e=>{c();let t=e.target;p.rootNavigationMenu?.contains(t)&&e.preventDefault()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.target,n=y().some(e=>e.ref.current?.contains(t)),r=p.isRootMenu&&p.viewport?.contains(t);(n||r||!p.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ei(e.currentTarget),n=document.activeElement,r=t.findIndex(e=>e===n);el(e.shiftKey?t.slice(0,r).reverse():t.slice(r+1,t.length))?e.preventDefault():l.current?.focus()}}),onEscapeKeyDown:(0,i.M)(e.onEscapeKeyDown,e=>{s.current=!0})})})}),ee="NavigationMenuViewport",et=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!A(ee,e.__scopeNavigationMenu).value;return(0,x.jsx)(c.z,{present:n||o,children:(0,x.jsx)(en,{...r,ref:t})})});et.displayName=ee;var en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...a}=e,s=A(ee,n),u=(0,d.e)(t,s.onViewportChange),f=D(B,e.__scopeNavigationMenu),[p,v]=r.useState(null),[h,w]=r.useState(null),m=p?p?.width+"px":void 0,g=p?p?.height+"px":void 0,y=!!s.value,b=y?s.value:s.previousValue;return es(h,()=>{h&&v({width:h.offsetWidth,height:h.offsetHeight})}),(0,x.jsx)(l.WV.div,{"data-state":ed(y),"data-orientation":s.orientation,...a,ref:u,style:{pointerEvents:!y&&s.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":m,"--radix-navigation-menu-viewport-height":g,...a.style},onPointerEnter:(0,i.M)(e.onPointerEnter,s.onContentEnter),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(s.onContentLeave)),children:Array.from(f.items).map(([e,{ref:t,forceMount:n,...r}])=>{let o=b===e;return(0,x.jsx)(c.z,{present:n||o,children:(0,x.jsx)(Q,{...r,ref:(0,d.F)(t,e=>{o&&e&&w(e)})})},e)})})}),er=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=A("FocusGroup",n);return(0,x.jsx)(j.Provider,{scope:n,children:(0,x.jsx)(j.Slot,{scope:n,children:(0,x.jsx)(l.WV.div,{dir:o.dir,...r,ref:t})})})}),eo=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ea=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=M(n),a=A("FocusGroupItem",n);return(0,x.jsx)(j.ItemSlot,{scope:n,children:(0,x.jsx)(l.WV.button,{...r,ref:t,onKeyDown:(0,i.M)(e.onKeyDown,e=>{if(["Home","End",...eo].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===a.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),eo.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>el(t)),e.preventDefault()}})})})});function ei(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function el(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function es(e,t){let n=(0,m.W)(t);(0,w.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function ed(e){return e?"open":"closed"}function eu(e,t){return`${e}-trigger-${t}`}function ec(e,t){return`${e}-content-${t}`}function ef(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ep=P,ev=S,eh=O,ew=K,em=U,eg=q,ex=G,ey=et},6009:(e,t,n)=>{n.d(t,{f:()=>l});var r=n(17266),o=n(77335),a=n(68819),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden";var l=i}};