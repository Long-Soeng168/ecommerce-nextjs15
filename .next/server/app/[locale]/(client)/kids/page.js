(()=>{var e={};e.id=564,e.ids=[564],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},13051:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(3003),a=s(14293),l=s(66550),o=s.n(l),i=s(86979),n={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);s.d(t,n);let c=["",{children:["[locale]",{children:["(client)",{children:["kids",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,11440)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/(client)/kids/page.jsx"]}]},{loading:[()=>Promise.resolve().then(s.bind(s,53972)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/(client)/kids/loading.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,87329)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/(client)/layout.jsx"],loading:[()=>Promise.resolve().then(s.bind(s,18843)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/(client)/loading.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,33116)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,48756)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/not-found.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,88768)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,98199)),"/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/not-found.jsx"]}],d=["/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/app/[locale]/(client)/kids/page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/[locale]/(client)/kids/page",pathname:"/[locale]/kids",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2633:(e,t,s)=>{Promise.resolve().then(s.bind(s,28027)),Promise.resolve().then(s.bind(s,73805)),Promise.resolve().then(s.t.bind(s,92481,23)),Promise.resolve().then(s.t.bind(s,79404,23)),Promise.resolve().then(s.bind(s,67616)),Promise.resolve().then(s.bind(s,43710)),Promise.resolve().then(s.bind(s,36526)),Promise.resolve().then(s.bind(s,92200)),Promise.resolve().then(s.bind(s,95030)),Promise.resolve().then(s.bind(s,23339))},30361:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(62881).Z)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},67616:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var r=s(68819),a=s(17266),l=s(30361),o=s(57671);s(61561);var i=s(96126),n=s(23844),c=s(23339);let d=({product:e})=>{let t=(0,n.useTranslations)("Index"),[s,d]=(0,a.useState)(!1),{addToCart:u}=(0,i.j)();return(0,r.jsx)("div",{className:"absolute z-50 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-white font-bold text-lg rounded-lg bottom-1.5 right-1.5",children:(0,r.jsx)(c.TooltipProvider,{delayDuration:0,children:(0,r.jsxs)(c.Tooltip,{children:[(0,r.jsx)(c.TooltipTrigger,{asChild:!0,onClick:()=>{u(e,!1),d(!0)},children:(0,r.jsx)("div",{className:"p-2 rounded-lg bg-primary text-primary-foreground",children:s?(0,r.jsx)(l.Z,{}):(0,r.jsx)(o.Z,{})})}),(0,r.jsx)(c.TooltipContent,{side:"bottom",className:"mt-2",children:(0,r.jsx)("p",{children:t("addToCart")})})]})})})}},43710:(e,t,s)=>{"use strict";s.d(t,{default:()=>f});var r=s(68819),a=s(17266),l=s(35047),o=s(76812),i=s(91175),n=s(61561);let c=({className:e,...t})=>(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,i.cn)("mx-auto flex w-full justify-center",e),...t});c.displayName="Pagination";let d=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("ul",{ref:s,className:(0,i.cn)("flex flex-row items-center gap-1",e),...t}));d.displayName="PaginationContent";let u=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("li",{ref:s,className:(0,i.cn)("cursor-pointer",e),...t}));u.displayName="PaginationItem";let m=({className:e,isActive:t,size:s="icon",...a})=>(0,r.jsx)("a",{"aria-current":t?"page":void 0,className:(0,i.cn)((0,n.d)({variant:t?"outline":"ghost",size:s}),e),...a});m.displayName="PaginationLink";let x=({className:e,title:t="Previous",...s})=>(0,r.jsxs)(m,{"aria-label":"Go to previous page",size:"default",className:(0,i.cn)("gap-1 pl-2.5",e),...s,children:[(0,r.jsx)(o.wyc,{className:"w-4 h-4"}),(0,r.jsx)("span",{children:t})]});x.displayName="PaginationPrevious";let p=({className:e,title:t="Next",...s})=>(0,r.jsxs)(m,{"aria-label":"Go to next page",size:"default",className:(0,i.cn)("gap-1 pr-2.5",e),...s,children:[(0,r.jsx)("span",{children:t}),(0,r.jsx)(o.XCv,{className:"w-4 h-4"})]});p.displayName="PaginationNext";var h=s(23844);let f=({links:e,from:t,to:s,total:a})=>{let o=(0,l.usePathname)(),i=(0,l.useSearchParams)(),{replace:n}=(0,l.useRouter)(),f=(0,h.useTranslations)("Index"),j=Number(i.get("page"))||1,g=e=>{let t=new URLSearchParams(i);return t.set("page",e),`${o}?${t.toString()}`},y=j>1,v=j<Number(e&&e[e?.length-2]?.label),b=e=>{n(g(e))};return(0,r.jsxs)("div",{className:"flex items-center justify-center w-full md:justify-between ",children:[(0,r.jsxs)("p",{className:"hidden whitespace-nowrap md:block",children:[f("showing")," ",t," ",f("to")," ",s," ",f("of")," ",a," ",f("results")]}),(0,r.jsx)(c,{className:"w-auto mx-0",children:(0,r.jsxs)(d,{children:[(0,r.jsx)(u,{children:(0,r.jsx)(x,{title:f("previous"),className:y?"text-primary font-bold":"",onClick:()=>y&&b(j-1)})}),e?.filter(e=>!e.label.includes("Previous")&&!e.label.includes("Next")).map((e,t)=>{let s="..."===e.label?null:Number(e.label);return r.jsx(u,{className:`${e.active?"":"hidden"}  md:block`,children:r.jsx(m,{onClick:()=>s&&b(s),dangerouslySetInnerHTML:{__html:e.label},className:e.active?"text-primary border-primary border-2 font-bold":""})},t)}),(0,r.jsx)(u,{children:(0,r.jsx)(p,{title:f("next"),className:v?"text-primary font-bold":"",onClick:()=>v&&b(j+1)})})]})})]})}},36526:(e,t,s)=>{"use strict";function r(){return null}s.d(t,{default:()=>r}),s(17266)},92200:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var r=s(68819),a=s(88307),l=s(35047),o=s(39917),i=s(31817);function n({placeholder:e}){let t=(0,l.useSearchParams)(),s=(0,i.jD)(),{replace:n}=(0,l.useRouter)(),c=(0,o.y1)(e=>{let r=new URLSearchParams(t);e?(r.set("search",e),r.set("page",1)):r.delete("search"),n(`${s}?${r.toString()}`)},300);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"relative flex flex-1 flex-shrink-0 h-full border rounded-md border-primary",children:[(0,r.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,r.jsx)("input",{className:"block w-full py-2 pl-10 text-sm border border-gray-200 rounded-md peer outline-1 placeholder:text-gray-500",placeholder:e,onChange:e=>{c(e.target.value)},defaultValue:t.get("search")?.toString()}),(0,r.jsx)(a.Z,{className:"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500  dark:text-white"})]})})}},23339:(e,t,s)=>{"use strict";s.d(t,{Tooltip:()=>n,TooltipContent:()=>d,TooltipProvider:()=>i,TooltipTrigger:()=>c});var r=s(68819),a=s(17266),l=s(6218),o=s(91175);let i=l.zt,n=l.fC,c=l.xz,d=a.forwardRef(({className:e,sideOffset:t=4,...s},a)=>(0,r.jsx)(l.h_,{children:(0,r.jsx)(l.VY,{ref:a,sideOffset:t,className:(0,o.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})}));d.displayName=l.VY.displayName},84807:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>c});var a=s(89351),l=s(16203),o=s(7175),i=s(3944);s(22052);var n=e([l,o]);[l,o]=n.then?(await n)():n;let c=async({currentPage:e,search:t,categoryId:s,subCategoryId:r,perPage:n,orderBy:c,orderDir:d,priceFrom:u,priceTo:m,yearFrom:x,yearTo:p,authorId:h,publisherId:f})=>{let j=await (0,i.fA)({categoryId:s,subCategoryId:r,search:t,page:e,perPage:n,orderBy:c,orderDir:d,priceFrom:u,priceTo:m,yearFrom:x,yearTo:p,authorId:h,publisherId:f}),g=j?.data;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:g?.map(e=>a.jsx(o.Z,{product:e},e.id))}),(0,a.jsx)("div",{className:"flex items-center justify-between pt-8",children:(0,a.jsx)(l.default,{links:j?.links,from:j?.from,to:j?.to,total:j?.total})})]})};r()}catch(e){r(e)}})},62182:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>n});var a=s(89351),l=s(86894),o=s(97733);s(22052);var i=e([o]);o=(i.then?(await i)():i)[0];let n=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:Array.from({length:5}).map((e,t)=>(0,a.jsx)(l.A,{ratio:"6/9"},t))})]});r()}catch(e){r(e)}})},53972:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>i});var a=s(89351),l=s(97733);s(22052);var o=e([l]);l=(o.then?(await o)():o)[0];let i=()=>(0,a.jsx)(l.default,{});r()}catch(e){r(e)}})},11440:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>m});var a=s(89351),l=s(22052),o=s(84807),i=s(62182),n=s(12310),c=s(36503),d=s(37011),u=e([o,i,c,d,n]);[o,i,c,d,n]=u.then?(await u)():u;let m=async e=>{let t=await (0,n.Z)("Index"),s=await e.searchParams,r=s?.search||"",u=s?.page||"1",m=s?.perPage||"20",x=s?.categoryId||"",p=s?.subCategoryId||"",h=s?.orderBy||"",f=s?.orderDir||"",j=s?.priceFrom||"",g=s?.priceTo||"",y=s?.yearFrom||"",v=s?.yearTo||"",b=s?.authorId||"",w=s?.publisherId||"";return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d.default,{}," "+u),(0,a.jsxs)("div",{className:"flex-1 p-4 pt-4 space-y-2",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(c.default,{placeholder:t("searchBooks")})}),(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)(i.Z,{}),children:(0,a.jsx)(o.Z,{currentPage:u,perPage:m,search:r,categoryId:x,subCategoryId:p,orderBy:h,orderDir:f,priceFrom:j,priceTo:g,yearFrom:y,yearTo:v,authorId:b,publisherId:w})}," "+r+u+m+x+p+h+f+j+g+y+v+b+w)]})]})};r()}catch(e){r(e)}})},88834:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>e});var a=s(71851);let e=(await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/my-add-to-cart-mini.jsx`)).default;r()}catch(e){r(e)}},1)},16203:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>e});var a=s(71851);let e=(await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/my-pagination.jsx`)).default;r()}catch(e){r(e)}},1)},37011:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>e});var a=s(71851);let e=(await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/scroll-to-top.jsx`)).default;r()}catch(e){r(e)}},1)},86894:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(89351),a=s(63787);function l({ratio:e}){return(0,r.jsxs)("div",{className:"flex flex-col w-full space-y-3",children:[(0,r.jsx)(a.O,{className:`w-full aspect-[${e}]`}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(a.O,{className:"w-full h-4"}),(0,r.jsx)(a.O,{className:"h-4 w-[80%]"})]})]})}},36503:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>e});var a=s(71851);let e=(await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/ui/my-kids-search.jsx`)).default;r()}catch(e){r(e)}},1)},7175:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>u});var a=s(89351);s(22052),s(21570);var l=s(74894),o=s(45580),i=s(77457),n=s(94229),c=s(88834),d=e([i,c]);[i,c]=d.then?(await d)():d;let u=({product:e,endpoint:t="/products"})=>(0,a.jsx)("div",{className:"flex flex-col items-stretch justify-between w-full h-full transition-all duration-500 rounded-lg group hover:scale-95",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"relative overflow-hidden ",children:[(0,a.jsx)(o.default,{href:`${t}/${e.id}`,children:(0,a.jsx)(l.default,{width:600,height:600,className:"object-cover w-full border-[0.5px] border-primary rounded-md aspect-[6/9] font-moul",src:n.wX+"thumb/"+e.image,alt:e.title})}),0!=e.discount&&null!=e.discount&&(0,a.jsxs)("span",{className:"absolute px-1.5 font-bold text-lg rounded-sm text-white bottom-1.5 left-1.5 bg-real_primary/80",children:["- ",e.discount,"%"]}),(0,a.jsx)(c.default,{product:e})]}),(0,a.jsxs)(o.default,{href:`/products/${e.id}`,children:[(0,a.jsx)("div",{className:"flex flex-col justify-between mt-1 lg:items-center lg:flex-row",children:0!=e.discount&&null!=e.discount?(0,a.jsxs)("p",{className:"space-x-2 overflow-hidden text-lg text-gray-400 text-ellipsis",children:[(0,a.jsxs)("span",{className:"line-through",children:[e.price," $"]}),(0,a.jsxs)("span",{className:"text-red-500",children:[e.price-e.discount/100*e.price," $"]})]}):(0,a.jsxs)("p",{className:"max-w-full overflow-hidden text-lg font-bold text-red-500 text-ellipsis",children:[e.price," $"]})}),(0,a.jsx)(i.TooltipProvider,{delayDuration:0,children:(0,a.jsxs)(i.Tooltip,{className:"bg-blue-200",children:[(0,a.jsxs)(i.TooltipTrigger,{className:"w-full",children:[(0,a.jsx)("h3",{className:"text-md text-start text-foreground line-clamp-1",children:e.title}),(0,a.jsx)("h3",{className:"text-gray-400 text-md text-start line-clamp-2",children:e.short_description})]}),(0,a.jsx)(i.TooltipContent,{side:"bottom",className:"text-sm bg-secondary text-secondary-foreground",children:(0,a.jsx)("p",{className:"max-w-[25ch] leading-5  left-0 right-0",children:e.title})})]})})]})]})});r()}catch(e){r(e)}})},77457:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{Tooltip:()=>l,TooltipContent:()=>i,TooltipProvider:()=>n,TooltipTrigger:()=>o});var a=s(71851);let e=await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/ui/tooltip.jsx`),l=e.Tooltip,o=e.TooltipTrigger,i=e.TooltipContent,n=e.TooltipProvider;r()}catch(e){r(e)}},1)},3944:(e,t,s)=>{"use strict";async function r(){let e=process.env.BASE_API_URL+"/books_new_arrival";try{let t=await fetch(e,{next:{revalidate:3600}});if(!t.ok)throw Error(`Failed to fetch New Arrival Books : ${t.statusText}`);return await t.json()}catch(e){return console.log(e.message),null}}async function a({limit:e}={}){let t=process.env.BASE_API_URL+`/books_best_selling?limit=${e||""}`;try{let e=await fetch(t,{next:{revalidate:3600}});if(!e.ok)throw Error(`Failed to fetch Best Selling Books : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}async function l({categoryId:e="",subCategoryId:t="",randomOrder:s="",orderBy:r="",orderDir:a="",page:o="",perPage:i="",search:n="",priceFrom:c="",priceTo:d="",yearFrom:u="",yearTo:m="",authorId:x="",publisherId:p=""}={}){let h=new URLSearchParams({categoryId:e,subCategoryId:t,randomOrder:s,page:o,search:n,perPage:i,orderBy:r,orderDir:a,priceFrom:c,priceTo:d,yearFrom:u,yearTo:m,authorId:x,publisherId:p}),f=`${process.env.BASE_API_URL}/books?${h}`;try{let e=await fetch(f,{next:{revalidate:3600}});if(!e.ok)throw Error(`Failed to fetch Books : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}async function o({categoryId:e="",subCategoryId:t="",randomOrder:s="",orderBy:r="",orderDir:a="",page:l="",perPage:i="",search:n="",priceFrom:c="",priceTo:d="",yearFrom:u="",yearTo:m="",authorId:x="",publisherId:p=""}={}){let h=new URLSearchParams({categoryId:e,subCategoryId:t,randomOrder:s,page:l,search:n,perPage:i,orderBy:r,orderDir:a,priceFrom:c,priceTo:d,yearFrom:u,yearTo:m,authorId:x,publisherId:p}),f=`${process.env.BASE_API_URL}/kid_books?${h}`;try{let e=await fetch(f,{next:{revalidate:3600}});if(!e.ok)throw Error(`Failed to fetch Kids Books : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}async function i({id:e}){let t=process.env.BASE_API_URL+`/books/${e}`;try{let e=await fetch(t,{next:{revalidate:3600}});if(404==e.status)return 404;if(!e.ok)throw Error(`Failed to fetch Book : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}s.d(t,{$3:()=>r,Pv:()=>a,fA:()=>o,v9:()=>i,yZ:()=>l})}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[147,424,848,971,199,638,910,444,617,197,714,548],()=>s(13051));module.exports=r})();