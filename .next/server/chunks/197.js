"use strict";exports.id=197,exports.ids=[197],exports.modules={6218:(e,t,r)=>{r.d(t,{VY:()=>G,h_:()=>q,zt:()=>H,fC:()=>X,xz:()=>Z});var n=r(17266),o=r(82561),i=r(48051),l=r(93095),a=r(30703),s=r(88957),u=r(66166),c=r(83078),p=r(9815),d=r(77335),f=r(68819);n.forwardRef((e,t)=>{let{children:r,...o}=e,i=n.Children.toArray(r),l=i.find(g);if(l){let e=l.props.children,r=i.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,f.jsx)(x,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,f.jsx)(x,{...o,ref:t,children:r})}).displayName="Slot";var x=n.forwardRef((e,t)=>{let{children:r,...o}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(o,r.props),ref:t?(0,i.F)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});x.displayName="SlotClone";var h=({children:e})=>(0,f.jsx)(f.Fragment,{children:e});function g(e){return n.isValidElement(e)&&e.type===h}var y=r(52067),v=r(6009),[m,b]=(0,l.b)("Tooltip",[u.D7]),w=(0,u.D7)(),C="TooltipProvider",T="tooltip.open",[E,j]=m(C),R=e=>{let{__scopeTooltip:t,delayDuration:r=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,s]=n.useState(!0),u=n.useRef(!1),c=n.useRef(0);return n.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,f.jsx)(E,{scope:t,isOpenDelayed:a,delayDuration:r,onOpen:n.useCallback(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:n.useCallback(e=>{u.current=e},[]),disableHoverableContent:i,children:l})};R.displayName=C;var k="Tooltip",[M,L]=m(k),P=e=>{let{__scopeTooltip:t,children:r,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,p=j(k,e.__scopeTooltip),d=w(t),[x,h]=n.useState(null),g=(0,s.M)(),v=n.useRef(0),m=a??p.disableHoverableContent,b=c??p.delayDuration,C=n.useRef(!1),[E=!1,R]=(0,y.T)({prop:o,defaultProp:i,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(T))):p.onClose(),l?.(e)}}),L=n.useMemo(()=>E?C.current?"delayed-open":"instant-open":"closed",[E]),P=n.useCallback(()=>{window.clearTimeout(v.current),v.current=0,C.current=!1,R(!0)},[R]),D=n.useCallback(()=>{window.clearTimeout(v.current),v.current=0,R(!1)},[R]),O=n.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{C.current=!0,R(!0),v.current=0},b)},[b,R]);return n.useEffect(()=>()=>{v.current&&(window.clearTimeout(v.current),v.current=0)},[]),(0,f.jsx)(u.fC,{...d,children:(0,f.jsx)(M,{scope:t,contentId:g,open:E,stateAttribute:L,trigger:x,onTriggerChange:h,onTriggerEnter:n.useCallback(()=>{p.isOpenDelayed?O():P()},[p.isOpenDelayed,O,P]),onTriggerLeave:n.useCallback(()=>{m?D():(window.clearTimeout(v.current),v.current=0)},[D,m]),onOpen:P,onClose:D,disableHoverableContent:m,children:r})})};P.displayName=k;var D="TooltipTrigger",O=n.forwardRef((e,t)=>{let{__scopeTooltip:r,...l}=e,a=L(D,r),s=j(D,r),c=w(r),p=n.useRef(null),x=(0,i.e)(t,p,a.onTriggerChange),h=n.useRef(!1),g=n.useRef(!1),y=n.useCallback(()=>h.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,f.jsx)(u.ee,{asChild:!0,...c,children:(0,f.jsx)(d.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:x,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||g.current||s.isPointerInTransitRef.current||(a.onTriggerEnter(),g.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),g.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{h.current||a.onOpen()}),onBlur:(0,o.M)(e.onBlur,a.onClose),onClick:(0,o.M)(e.onClick,a.onClose)})})});O.displayName=D;var _="TooltipPortal",[N,I]=m(_,{forceMount:void 0}),V=e=>{let{__scopeTooltip:t,forceMount:r,children:n,container:o}=e,i=L(_,t);return(0,f.jsx)(N,{scope:t,forceMount:r,children:(0,f.jsx)(p.z,{present:r||i.open,children:(0,f.jsx)(c.h,{asChild:!0,container:o,children:n})})})};V.displayName=_;var B="TooltipContent",A=n.forwardRef((e,t)=>{let r=I(B,e.__scopeTooltip),{forceMount:n=r.forceMount,side:o="top",...i}=e,l=L(B,e.__scopeTooltip);return(0,f.jsx)(p.z,{present:n||l.open,children:l.disableHoverableContent?(0,f.jsx)(z,{side:o,...i,ref:t}):(0,f.jsx)(F,{side:o,...i,ref:t})})}),F=n.forwardRef((e,t)=>{let r=L(B,e.__scopeTooltip),o=j(B,e.__scopeTooltip),l=n.useRef(null),a=(0,i.e)(t,l),[s,u]=n.useState(null),{trigger:c,onClose:p}=r,d=l.current,{onPointerInTransitChange:x}=o,h=n.useCallback(()=>{u(null),x(!1)},[x]),g=n.useCallback((e,t)=>{let r=e.currentTarget,n={x:e.clientX,y:e.clientY},o=function(e,t){let r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(r,n,o,i)){case i:return"left";case o:return"right";case r:return"top";case n:return"bottom";default:throw Error("unreachable")}}(n,r.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(n.y-r.y)>=(e.y-r.y)*(n.x-r.x))t.pop();else break}t.push(n)}t.pop();let r=[];for(let t=e.length-1;t>=0;t--){let n=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(n.y-t.y)>=(e.y-t.y)*(n.x-t.x))r.pop();else break}r.push(n)}return(r.pop(),1===t.length&&1===r.length&&t[0].x===r[0].x&&t[0].y===r[0].y)?t:t.concat(r)}(t)}([...function(e,t,r=5){let n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r})}return n}(n,o),...function(e){let{top:t,right:r,bottom:n,left:o}=e;return[{x:o,y:t},{x:r,y:t},{x:r,y:n},{x:o,y:n}]}(t.getBoundingClientRect())])),x(!0)},[x]);return n.useEffect(()=>()=>h(),[h]),n.useEffect(()=>{if(c&&d){let e=e=>g(e,d),t=e=>g(e,c);return c.addEventListener("pointerleave",e),d.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),d.removeEventListener("pointerleave",t)}}},[c,d,g,h]),n.useEffect(()=>{if(s){let e=e=>{let t=e.target,r={x:e.clientX,y:e.clientY},n=c?.contains(t)||d?.contains(t),o=!function(e,t){let{x:r,y:n}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,s=t[i].x,u=t[i].y;a>n!=u>n&&r<(s-l)*(n-a)/(u-a)+l&&(o=!o)}return o}(r,s);n?h():o&&(h(),p())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,d,s,p,h]),(0,f.jsx)(z,{...e,ref:a})}),[S,W]=m(k,{isInside:!1}),z=n.forwardRef((e,t)=>{let{__scopeTooltip:r,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:s,...c}=e,p=L(B,r),d=w(r),{onClose:x}=p;return n.useEffect(()=>(document.addEventListener(T,x),()=>document.removeEventListener(T,x)),[x]),n.useEffect(()=>{if(p.trigger){let e=e=>{let t=e.target;t?.contains(p.trigger)&&x()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[p.trigger,x]),(0,f.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:x,children:(0,f.jsxs)(u.VY,{"data-state":p.stateAttribute,...d,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,f.jsx)(h,{children:o}),(0,f.jsx)(S,{scope:r,isInside:!0,children:(0,f.jsx)(v.f,{id:p.contentId,role:"tooltip",children:i||o})})]})})});A.displayName=B;var Y="TooltipArrow";n.forwardRef((e,t)=>{let{__scopeTooltip:r,...n}=e,o=w(r);return W(Y,r).isInside?null:(0,f.jsx)(u.Eh,{...o,...n,ref:t})}).displayName=Y;var H=R,X=P,Z=O,q=V,G=A}};