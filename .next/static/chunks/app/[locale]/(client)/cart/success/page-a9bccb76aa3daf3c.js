(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8142],{50190:(e,t,n)=>{Promise.resolve().then(n.bind(n,39819)),Promise.resolve().then(n.bind(n,83105)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,35841)),Promise.resolve().then(n.bind(n,34331))},12887:(e,t,n)=>{"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(null,arguments)}n.d(t,{g:()=>o})},39819:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var o=n(12887),r=n(87138),l=n(16463),a=n(2265),i=n(73222),c=(0,a.forwardRef)(function(e,t){let{defaultLocale:n,href:c,locale:u,localeCookie:s,onClick:f,prefetch:d,unprefixed:h,...p}=e,v=(0,i.Z)(),m=null!=u&&u!==v,g=u||v,b=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{t(window.location.host)},[]),e}(),w=b&&h&&(h.domains[b]===g||!Object.keys(h.domains).includes(b)&&v===n&&!u)?h.pathname:c,x=(0,l.usePathname)();return m&&(d&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),d=!1),a.createElement(r.default,(0,o.g)({ref:t,href:w,hrefLang:m?u:void 0,onClick:function(e){(function(e,t,n,o){if(!e||!(o!==n&&null!=o)||!t)return;let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:l,...a}=e;a.path||(a.path=""!==r?r:"/");let i="".concat(l,"=").concat(o,";");for(let[e,t]of Object.entries(a))i+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(i+="="+t),i+=";";document.cookie=i})(s,x,v,u),f&&f(e)},prefetch:d},p))})},83105:(e,t,n)=>{"use strict";n.d(t,{default:()=>f});var o=n(12887),r=n(16463),l=n(2265),a=n(73222);function i(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function c(e,t){let n;return"string"==typeof e?n=u(t,e):(n={...e},e.pathname&&(n.pathname=u(t,e.pathname))),n}function u(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}n(20357);var s=n(39819);let f=(0,l.forwardRef)(function(e,t){let{href:n,locale:u,localeCookie:f,localePrefixMode:d,prefix:h,...p}=e,v=(0,r.usePathname)(),m=(0,a.Z)(),g=u!==m,[b,w]=(0,l.useState)(()=>i(n)&&("never"!==d||g)?c(n,h):n);return(0,l.useEffect)(()=>{v&&w(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;if(!i(e))return e;let l=o===r||o.startsWith("".concat(r,"/"));return(t!==n||l)&&null!=r?c(e,r):e}(n,u,m,v,h))},[m,n,u,v,h]),l.createElement(s.default,(0,o.g)({ref:t,href:b,locale:u,localeCookie:f},p))});f.displayName="ClientLink"},73222:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(16463),r=n(69773);let l="locale";function a(){let e;let t=(0,o.useParams)();try{e=(0,r.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[l]))throw n;e=t[l]}return e}},87138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.a});var o=n(231),r=n.n(o),l={};for(let e in o)"default"!==e&&(l[e]=()=>o[e]);n.d(t,l)},16463:(e,t,n)=>{"use strict";n.r(t);var o=n(71169),r={};for(let e in o)"default"!==e&&(r[e]=()=>o[e]);n.d(t,r)},58945:(e,t,n)=>{"use strict";let o=n(2265).createContext(void 0);t.IntlContext=o},50307:(e,t,n)=>{"use strict";var o=n(2265),r=n(58945);function l(){let e=o.useContext(r.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=l,t.useLocale=function(){return l().locale}},69773:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50307);n(2265),n(58945),t.useLocale=o.useLocale},35841:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});var o=n(2265);function r(){return(0,o.useEffect)(()=>{console.log("trigger scroll to top"),window.scrollTo({top:0,behavior:"smooth"})},[]),null}},34331:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var o=n(57437),r=n(43393),l=n.n(r);n(2265);let a=e=>{let{animationData:t,isLoop:n=!1,className:r}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(l(),{animationData:t,className:"flex items-center justify-center max-w-60 ".concat(r),loop:n})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[4705,3393,231,7130,6215,1744],()=>t(50190)),_N_E=e.O()}]);