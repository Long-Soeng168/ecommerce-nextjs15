"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3334],{54817:(e,t,r)=>{r.d(t,{Z:()=>n});let n=(0,r(78030).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},12887:(e,t,r)=>{r.d(t,{g:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},39819:(e,t,r)=>{r.d(t,{default:()=>i});var n=r(12887),a=r(87138),l=r(16463),o=r(2265),u=r(73222),i=(0,o.forwardRef)(function(e,t){let{defaultLocale:r,href:i,locale:c,localeCookie:f,onClick:d,prefetch:s,unprefixed:h,...m}=e,p=(0,u.Z)(),P=null!=c&&c!==p,v=c||p,g=function(){let[e,t]=(0,o.useState)();return(0,o.useEffect)(()=>{t(window.location.host)},[]),e}(),x=g&&h&&(h.domains[g]===v||!Object.keys(h.domains).includes(g)&&p===r&&!c)?h.pathname:i,y=(0,l.usePathname)();return P&&(s&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),s=!1),o.createElement(a.default,(0,n.g)({ref:t,href:x,hrefLang:P?c:void 0,onClick:function(e){(function(e,t,r,n){if(!e||!(n!==r&&null!=n)||!t)return;let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:l,...o}=e;o.path||(o.path=""!==a?a:"/");let u="".concat(l,"=").concat(n,";");for(let[e,t]of Object.entries(o))u+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(u+="="+t),u+=";";document.cookie=u})(f,y,p,c),d&&d(e)},prefetch:s},m))})},83105:(e,t,r)=>{r.d(t,{default:()=>d});var n=r(12887),a=r(16463),l=r(2265),o=r(73222);function u(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function i(e,t){let r;return"string"==typeof e?r=c(t,e):(r={...e},e.pathname&&(r.pathname=c(t,e.pathname))),r}function c(e,t){let r=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}r(20357);var f=r(39819);let d=(0,l.forwardRef)(function(e,t){let{href:r,locale:c,localeCookie:d,localePrefixMode:s,prefix:h,...m}=e,p=(0,a.usePathname)(),P=(0,o.Z)(),v=c!==P,[g,x]=(0,l.useState)(()=>u(r)&&("never"!==s||v)?i(r,h):r);return(0,l.useEffect)(()=>{p&&x(function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;if(!u(e))return e;let l=n===a||n.startsWith("".concat(a,"/"));return(t!==r||l)&&null!=a?i(e,a):e}(r,c,P,p,h))},[P,r,c,p,h]),l.createElement(f.default,(0,n.g)({ref:t,href:g,locale:c,localeCookie:d},m))});d.displayName="ClientLink"},73222:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(16463),a=r(69773);let l="locale";function o(){let e;let t=(0,n.useParams)();try{e=(0,a.useLocale)()}catch(r){if("string"!=typeof(null==t?void 0:t[l]))throw r;e=t[l]}return e}},5758:(e,t,r)=>{var n=r(45332),a=r(76693),l=r(68846);n.default,a.default,t.os=l.default},88379:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(30925),a=r(2265),l=r(20294),o=r(98830),u=r(23574),i=function(e){return e&&e.__esModule?e:{default:e}}(a);let c=a.forwardRef(function(e,t){let{locale:r,localePrefix:a,...c}=e,f=l.default(),d=r||f,s=o.getLocalePrefix(d,a);return i.default.createElement(u.default,n.extends({ref:t,locale:d,localePrefixMode:a.mode,prefix:s},c))});c.displayName="ClientLink",t.default=c},76693:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(30925),a=r(2265),l=r(20294),o=r(45421),u=r(76569),i=r(88379),c=r(4525),f=r(26148),d=r(11337),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){let t=o.receiveRoutingConfig(e),r=o.receiveLocaleCookie(e.localeCookie);function h(){let e=l.default();if(!t.locales.includes(e))throw Error(void 0);return e}let m=a.forwardRef(function(e,a){let{href:l,locale:o,...c}=e,f=h(),d=o||f;return s.default.createElement(i.default,n.extends({ref:a,href:u.compileLocalizedPathname({locale:d,pathname:l,params:"object"==typeof l?l.params:void 0,pathnames:t.pathnames}),locale:o,localeCookie:r,localePrefix:t.localePrefix},c))});function p(e){let{href:r,locale:n}=e;return u.compileLocalizedPathname({...u.normalizeNameOrNameWithParams(r),locale:n,pathnames:t.pathnames})}return m.displayName="Link",{Link:m,redirect:function(e){let r=p({href:e,locale:h()});for(var n=arguments.length,a=Array(n>1?n-1:0),l=1;l<n;l++)a[l-1]=arguments[l];return c.clientRedirect({pathname:r,localePrefix:t.localePrefix},...a)},permanentRedirect:function(e){let r=p({href:e,locale:h()});for(var n=arguments.length,a=Array(n>1?n-1:0),l=1;l<n;l++)a[l-1]=arguments[l];return c.clientPermanentRedirect({pathname:r,localePrefix:t.localePrefix},...a)},usePathname:function(){let e=f.default(t),r=h();return a.useMemo(()=>e?u.getRoute(r,e,t.pathnames):e,[r,e])},useRouter:function(){let e=d.default(t.localePrefix,r),n=h();return a.useMemo(()=>({...e,push(t){for(var r,a=arguments.length,l=Array(a>1?a-1:0),o=1;o<a;o++)l[o-1]=arguments[o];let u=p({href:t,locale:(null===(r=l[0])||void 0===r?void 0:r.locale)||n});return e.push(u,...l)},replace(t){for(var r,a=arguments.length,l=Array(a>1?a-1:0),o=1;o<a;o++)l[o-1]=arguments[o];let u=p({href:t,locale:(null===(r=l[0])||void 0===r?void 0:r.locale)||n});return e.replace(u,...l)},prefetch(t){for(var r,a=arguments.length,l=Array(a>1?a-1:0),o=1;o<a;o++)l[o-1]=arguments[o];let u=p({href:t,locale:(null===(r=l[0])||void 0===r?void 0:r.locale)||n});return e.prefetch(u,...l)}}),[e,n])},getPathname:p}}},68846:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(16463),a=r(2265),l=r(20294),o=r(23881),u=r(9233),i=r(76569),c=r(26148);t.default=function(e){function t(){return l.default()}let{Link:r,config:f,getPathname:d,...s}=o.default(t,e);return{...s,Link:r,usePathname:function(){let e=c.default(f),r=t();return a.useMemo(()=>e&&f.pathnames?i.getRoute(r,e,f.pathnames):e,[r,e])},useRouter:function(){let e=n.useRouter(),r=t(),l=n.usePathname();return a.useMemo(()=>{function t(e){return function(t,n){let{locale:a,...o}=n||{},i=[d({href:t,locale:a||r,domain:window.location.host})];Object.keys(o).length>0&&i.push(o),e(...i),u.default(f.localeCookie,l,r,a)}}return{...e,push:t(e.push),replace:t(e.replace),prefetch:t(e.prefetch)}},[r,l,e])},getPathname:d}}},45332:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(30925),a=r(2265),l=r(45421),o=r(88379),u=r(4525),i=r(26148),c=r(11337),f=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){let t=l.receiveLocalePrefixConfig(null==e?void 0:e.localePrefix),r=l.receiveLocaleCookie(null==e?void 0:e.localeCookie),d=a.forwardRef(function(e,a){return f.default.createElement(o.default,n.extends({ref:a,localeCookie:r,localePrefix:t},e))});return d.displayName="Link",{Link:d,redirect:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return u.clientRedirect({pathname:e,localePrefix:t},...n)},permanentRedirect:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return u.clientPermanentRedirect({pathname:e,localePrefix:t},...n)},usePathname:function(){return i.default({localePrefix:t,defaultLocale:null==e?void 0:e.defaultLocale})},useRouter:function(){return c.default(t,r)}}}},4525:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(20294),a=r(55016);function l(e){return function(t){let r;try{r=n.default()}catch(e){throw e}for(var a=arguments.length,l=Array(a>1?a-1:0),o=1;o<a;o++)l[o-1]=arguments[o];return e({...t,locale:r},...l)}}let o=l(a.baseRedirect),u=l(a.basePermanentRedirect);t.clientPermanentRedirect=u,t.clientRedirect=o},26148:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(16463),a=r(2265),l=r(20294),o=r(98830);t.default=function(e){let t=n.usePathname(),r=l.default();return a.useMemo(()=>{if(!t)return t;let n=t,a=o.getLocalePrefix(r,e.localePrefix);if(o.hasPathnamePrefixed(a,t))n=o.unprefixPathname(t,a);else if("as-needed"===e.localePrefix.mode&&e.localePrefix.prefixes){let e=o.getLocaleAsPrefix(r);o.hasPathnamePrefixed(e,t)&&(n=o.unprefixPathname(t,e))}return n},[e.localePrefix,r,t])}},11337:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(16463),a=r(2265),l=r(20294),o=r(98830),u=r(9233),i=r(76569);t.default=function(e,t){let r=n.useRouter(),c=l.default(),f=n.usePathname();return a.useMemo(()=>{function n(r){return function(n,a){let{locale:l,...d}=a||{};u.default(t,f,c,l);let s=[function(t,r){let n=window.location.pathname,a=i.getBasePath(f);a&&(n=n.replace(a,""));let l=r||c,u=o.getLocalePrefix(l,e);return o.localizeHref(t,l,c,n,u)}(n,l)];return Object.keys(d).length>0&&s.push(d),r(...s)}}return{...r,push:n(r.push),replace:n(r.replace),prefetch:n(r.prefetch)}},[c,t,e,f,r])}},21165:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(30925),a=r(87138),l=r(16463),o=r(2265),u=r(20294),i=r(9233);function c(e){return e&&e.__esModule?e:{default:e}}var f=c(a),d=c(o),s=o.forwardRef(function(e,t){let{defaultLocale:r,href:a,locale:c,localeCookie:s,onClick:h,prefetch:m,unprefixed:p,...P}=e,v=u.default(),g=null!=c&&c!==v,x=c||v,y=function(){let[e,t]=o.useState();return o.useEffect(()=>{t(window.location.host)},[]),e}(),b=y&&p&&(p.domains[y]===x||!Object.keys(p.domains).includes(y)&&v===r&&!c)?p.pathname:a,_=l.usePathname();return g&&(m=!1),d.default.createElement(f.default,n.extends({ref:t,href:b,hrefLang:g?c:void 0,onClick:function(e){i.default(s,_,v,c),h&&h(e)},prefetch:m},P))});t.default=s},23574:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(30925),a=r(16463),l=r(2265),o=r(20294),u=r(98830),i=r(21165),c=function(e){return e&&e.__esModule?e:{default:e}}(l);let f=l.forwardRef(function(e,t){let{href:r,locale:f,localeCookie:d,localePrefixMode:s,prefix:h,...m}=e,p=a.usePathname(),P=o.default(),v=f!==P,[g,x]=l.useState(()=>u.isLocalizableHref(r)&&("never"!==s||v)?u.prefixHref(r,h):r);return l.useEffect(()=>{p&&x(u.localizeHref(r,f,P,p,h))},[P,r,f,p,h]),c.default.createElement(i.default,n.extends({ref:t,href:g,locale:f,localeCookie:d},m))});f.displayName="ClientLink",t.default=f},23881:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(30925),a=r(16463),l=r(2265),o=r(45421),u=r(98830),i=r(21165),c=r(76569),f=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e,t){let r=o.receiveRoutingConfig(t||{}),d=r.pathnames,s="as-needed"===r.localePrefix.mode&&r.domains||void 0,h=l.forwardRef(function(t,a){let o,c,{href:h,locale:p,...P}=t;"object"==typeof h?(o=h.pathname,c=h.params):o=h;let v=u.isLocalizableHref(h),g=e(),x=g instanceof Promise?l.use(g):g,y=v?m({locale:p||x,href:null==d?o:{pathname:o,params:c}},null!=p||s||void 0):o;return f.default.createElement(i.default,n.extends({ref:a,defaultLocale:r.defaultLocale,href:"object"==typeof h?{...h,pathname:y}:y,locale:p,localeCookie:r.localeCookie,unprefixed:s&&v?{domains:r.domains.reduce((e,t)=>(e[t.domain]=t.defaultLocale,e),{}),pathname:m({locale:x,href:null==d?o:{pathname:o,params:c}},!1)}:void 0},P))});function m(e,t){let n;let{href:a,locale:l}=e;return null==d?"object"==typeof a?(n=a.pathname,a.query&&(n+=c.serializeSearchParams(a.query))):n=a:n=c.compileLocalizedPathname({locale:l,...c.normalizeNameOrNameWithParams(a),pathnames:r.pathnames}),c.applyPathnamePrefix(n,l,r,e.domain,t)}function p(e){return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return e(m(t,t.domain?void 0:s),...n)}}return{config:r,Link:h,redirect:p(a.redirect),permanentRedirect:p(a.permanentRedirect),getPathname:m}}},55016:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(16463),a=r(98830);function l(e){return function(t){let r=a.getLocalePrefix(t.locale,t.localePrefix),n="never"!==t.localePrefix.mode&&a.isLocalizableHref(t.pathname)?a.prefixPathname(r,t.pathname):t.pathname;for(var l=arguments.length,o=Array(l>1?l-1:0),u=1;u<l;u++)o[u-1]=arguments[u];return e(n,...o)}}let o=l(n.redirect),u=l(n.permanentRedirect);t.basePermanentRedirect=u,t.baseRedirect=o},9233:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(76569);t.default=function(e,t,r,a){if(!e||!(a!==r&&null!=a)||!t)return;let l=n.getBasePath(t),{name:o,...u}=e;u.path||(u.path=""!==l?l:"/");let i="".concat(o,"=").concat(a,";");for(let[e,t]of Object.entries(u))i+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(i+="="+t),i+=";";document.cookie=i}},76569:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(98830);function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.append(r,String(e))}):t.set(r,String(n));return"?"+t.toString()}t.applyPathnamePrefix=function(e,t,r,a,l){let o;let{mode:u}=r.localePrefix;if(void 0!==l)o=l;else if(n.isLocalizableHref(e)){if("always"===u)o=!0;else if("as-needed"===u){let e=r.defaultLocale;if(r.domains){let t=r.domains.find(e=>e.domain===a);t&&(e=t.defaultLocale)}o=e!==t}}return o?n.prefixPathname(n.getLocalePrefix(t,r.localePrefix),e):e},t.compileLocalizedPathname=function(e){let{pathname:t,locale:r,params:l,pathnames:o,query:u}=e;function i(e){let t=o[e];return t||(t=e),t}function c(e){let t="string"==typeof e?e:e[r];return l&&Object.entries(l).forEach(e=>{let r,n,[a,l]=e;Array.isArray(l)?(r="(\\[)?\\[...".concat(a,"\\](\\])?"),n=l.map(e=>String(e)).join("/")):(r="\\[".concat(a,"\\]"),n=String(l)),t=t.replace(RegExp(r,"g"),n)}),t=t.replace(/\[\[\.\.\..+\]\]/g,""),t=n.normalizeTrailingSlash(t),u&&(t+=a(u)),t}if("string"==typeof t)return c(i(t));{let{pathname:e,...r}=t;return{...r,pathname:c(i(e))}}},t.getBasePath=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")},t.getRoute=function(e,t,r){let a=n.getSortedPathnames(Object.keys(r)),l=decodeURI(t);for(let t of a){let a=r[t];if("string"==typeof a){if(n.matchesPathname(a,l))return t}else if(n.matchesPathname(a[e],l))return t}return t},t.normalizeNameOrNameWithParams=function(e){return"string"==typeof e?{pathname:e}:e},t.serializeSearchParams=a},63019:(e,t,r)=>{var n=r(72221);t.R=n.default},45421:(e,t)=>{function r(e){return!(null!=e&&!e)&&{name:"NEXT_LOCALE",maxAge:31536e3,sameSite:"lax",..."object"==typeof e&&e}}function n(e){return"object"==typeof e?e:{mode:e||"always"}}Object.defineProperty(t,"__esModule",{value:!0}),t.receiveLocaleCookie=r,t.receiveLocalePrefixConfig=n,t.receiveRoutingConfig=function(e){var t,a;return{...e,localePrefix:n(e.localePrefix),localeCookie:r(e.localeCookie),localeDetection:null===(t=e.localeDetection)||void 0===t||t,alternateLinks:null===(a=e.alternateLinks)||void 0===a||a}}},72221:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e}},98830:(e,t,r)=>{var n=r(20357);function a(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function l(e,t){let r;return"string"==typeof e?r=o(t,e):(r={...e},e.pathname&&(r.pathname=o(t,e.pathname))),r}function o(e,t){let r=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}function u(e,t){return t===e||t.startsWith("".concat(e,"/"))}function i(e){let t=function(){try{return"true"===n.env._next_intl_trailing_slash}catch(e){return!1}}();if("/"!==e){let r=e.endsWith("/");t&&!r?e+="/":!t&&r&&(e=e.slice(0,-1))}return e}function c(e){return"/"+e}function f(e){let t=e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g,"?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g,"(.+)").replace(/\[([^\]]+)\]/g,"([^/]+)");return new RegExp("^".concat(t,"$"))}function d(e){return e.includes("[[...")}function s(e){return e.includes("[...")}function h(e){return e.includes("[")}function m(e,t){let r=e.split("/"),n=t.split("/"),a=Math.max(r.length,n.length);for(let e=0;e<a;e++){let t=r[e],a=n[e];if(!t&&a)return -1;if(t&&!a)return 1;if(t||a){if(!h(t)&&h(a))return -1;if(h(t)&&!h(a))return 1;if(!s(t)&&s(a))return -1;if(s(t)&&!s(a))return 1;if(!d(t)&&d(a))return -1;if(d(t)&&!d(a))return 1}}return 0}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocaleAsPrefix=c,t.getLocalePrefix=function(e,t){var r;return"never"!==t.mode&&(null===(r=t.prefixes)||void 0===r?void 0:r[e])||c(e)},t.getSortedPathnames=function(e){return e.sort(m)},t.hasPathnamePrefixed=u,t.isLocalizableHref=a,t.localizeHref=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!a(e))return e;let i=u(o,n);return(t!==r||i)&&null!=o?l(e,o):e},t.matchesPathname=function(e,t){let r=i(e),n=i(t);return f(r).test(n)},t.normalizeTrailingSlash=i,t.prefixHref=l,t.prefixPathname=o,t.templateToRegex=f,t.unprefixPathname=function(e,t){return e.replace(new RegExp("^".concat(t)),"")||"/"}},87138:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a.a});var n=r(231),a=r.n(n),l={};for(let e in n)"default"!==e&&(l[e]=()=>n[e]);r.d(t,l)},27266:(e,t,r)=>{r.d(t,{y1:()=>a});var n=r(2265);function a(e,t,r){var a=this,l=(0,n.useRef)(null),o=(0,n.useRef)(0),u=(0,n.useRef)(null),i=(0,n.useRef)([]),c=(0,n.useRef)(),f=(0,n.useRef)(),d=(0,n.useRef)(e),s=(0,n.useRef)(!0);d.current=e;var h="undefined"!=typeof window,m=!t&&0!==t&&h;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var p=!!(r=r||{}).leading,P=!("trailing"in r)||!!r.trailing,v="maxWait"in r,g="debounceOnServer"in r&&!!r.debounceOnServer,x=v?Math.max(+r.maxWait||0,t):null;return(0,n.useEffect)(function(){return s.current=!0,function(){s.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var t=i.current,r=c.current;return i.current=c.current=null,o.current=e,f.current=d.current.apply(r,t)},r=function(e,t){m&&cancelAnimationFrame(u.current),u.current=m?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!s.current)return!1;var r=e-l.current;return!l.current||r>=t||r<0||v&&e-o.current>=x},y=function(t){return u.current=null,P&&i.current?e(t):(i.current=c.current=null,f.current)},b=function e(){var a=Date.now();if(n(a))return y(a);if(s.current){var u=t-(a-l.current);r(e,v?Math.min(u,x-(a-o.current)):u)}},_=function(){if(h||g){var d=Date.now(),m=n(d);if(i.current=[].slice.call(arguments),c.current=a,l.current=d,m){if(!u.current&&s.current)return o.current=l.current,r(b,t),p?e(l.current):f.current;if(v)return r(b,t),e(l.current)}return u.current||r(b,t),f.current}};return _.cancel=function(){u.current&&(m?cancelAnimationFrame(u.current):clearTimeout(u.current)),o.current=0,i.current=l.current=c.current=u.current=null},_.isPending=function(){return!!u.current},_.flush=function(){return u.current?y(Date.now()):f.current},_},[p,v,t,x,P,m,h,g])}}}]);