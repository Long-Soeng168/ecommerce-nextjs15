"use strict";exports.id=464,exports.ids=[464],exports.modules={67616:(e,t,r)=>{r.d(t,{default:()=>d});var s=r(68819),a=r(17266),o=r(30361),l=r(57671);r(61561);var i=r(96126),n=r(23844),c=r(23339);let d=({product:e})=>{let t=(0,n.useTranslations)("Index"),[r,d]=(0,a.useState)(!1),{addToCart:u}=(0,i.j)();return(0,s.jsx)("div",{className:"absolute z-50 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-white font-bold text-lg rounded-lg bottom-1.5 right-1.5",children:(0,s.jsx)(c.TooltipProvider,{delayDuration:0,children:(0,s.jsxs)(c.Tooltip,{children:[(0,s.jsx)(c.TooltipTrigger,{asChild:!0,onClick:()=>{u(e,!1),d(!0)},children:(0,s.jsx)("div",{className:"p-2 rounded-lg bg-primary text-primary-foreground",children:r?(0,s.jsx)(o.Z,{}):(0,s.jsx)(l.Z,{})})}),(0,s.jsx)(c.TooltipContent,{side:"bottom",className:"mt-2",children:(0,s.jsx)("p",{children:t("addToCart")})})]})})})}},36526:(e,t,r)=>{function s(){return null}r.d(t,{default:()=>s}),r(17266)},23964:(e,t,r)=>{r.r(t),r.d(t,{Carousel:()=>u,CarouselContent:()=>x,CarouselItem:()=>h,CarouselNext:()=>f,CarouselPrevious:()=>m});var s=r(68819),a=r(17266),o=r(76812),l=r(481),i=r(91175),n=r(61561);let c=a.createContext(null);function d(){let e=a.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let u=a.forwardRef(({orientation:e="horizontal",opts:t,setApi:r,plugins:o,className:n,children:d,...u},x)=>{let[h,m]=(0,l.Z)({...t,axis:"horizontal"===e?"x":"y"},o),[f,p]=a.useState(!1),[j,y]=a.useState(!1),v=a.useCallback(e=>{e&&(p(e.canScrollPrev()),y(e.canScrollNext()))},[]),g=a.useCallback(()=>{m?.scrollPrev()},[m]),w=a.useCallback(()=>{m?.scrollNext()},[m]),b=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),g()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[g,w]);return a.useEffect(()=>{m&&r&&r(m)},[m,r]),a.useEffect(()=>{if(m)return v(m),m.on("reInit",v),m.on("select",v),()=>{m?.off("select",v)}},[m,v]),(0,s.jsx)(c.Provider,{value:{carouselRef:h,api:m,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:g,scrollNext:w,canScrollPrev:f,canScrollNext:j},children:(0,s.jsx)("div",{ref:x,onKeyDownCapture:b,className:(0,i.cn)("relative",n),role:"region","aria-roledescription":"carousel",...u,children:d})})});u.displayName="Carousel";let x=a.forwardRef(({className:e,...t},r)=>{let{carouselRef:a,orientation:o}=d();return(0,s.jsx)("div",{ref:a,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:r,className:(0,i.cn)("flex","horizontal"===o?"-ml-4":"-mt-4 flex-col",e),...t})})});x.displayName="CarouselContent";let h=a.forwardRef(({className:e,...t},r)=>{let{orientation:a}=d();return(0,s.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,i.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===a?"pl-4":"pt-4",e),...t})});h.displayName="CarouselItem";let m=a.forwardRef(({className:e,variant:t="outline",size:r="icon",...a},l)=>{let{orientation:c,scrollPrev:u,canScrollPrev:x}=d();return(0,s.jsxs)(n.z,{ref:l,variant:t,size:r,className:(0,i.cn)("absolute  h-8 w-8 rounded-full border-primary","horizontal"===c?"left-4 min-[1666px]:-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!x,onClick:u,...a,children:[(0,s.jsx)(o.Y4O,{className:"w-4 h-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});m.displayName="CarouselPrevious";let f=a.forwardRef(({className:e,variant:t="outline",size:r="icon",...a},l)=>{let{orientation:c,scrollNext:u,canScrollNext:x}=d();return(0,s.jsxs)(n.z,{ref:l,variant:t,size:r,className:(0,i.cn)("absolute h-8 w-8 rounded-full border-primary","horizontal"===c?"right-4 min-[1666px]:-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!x,onClick:u,...a,children:[(0,s.jsx)(o.LZ3,{className:"w-4 h-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});f.displayName="CarouselNext"},23339:(e,t,r)=>{r.d(t,{Tooltip:()=>n,TooltipContent:()=>d,TooltipProvider:()=>i,TooltipTrigger:()=>c});var s=r(68819),a=r(17266),o=r(6218),l=r(91175);let i=o.zt,n=o.fC,c=o.xz,d=a.forwardRef(({className:e,sideOffset:t=4,...r},a)=>(0,s.jsx)(o.h_,{children:(0,s.jsx)(o.VY,{ref:a,sideOffset:t,className:(0,l.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));d.displayName=o.VY.displayName},88834:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var a=r(71851);let e=(await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/my-add-to-cart-mini.jsx`)).default;s()}catch(e){s(e)}},1)},84821:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>c});var a=r(89351),o=r(43365),l=r(45580);r(22052),r(21570);var i=r(12310),n=e([i]);i=(n.then?(await n)():n)[0];let c=async({title:e,categoryId:t=""})=>{let r=await (0,i.Z)("Index");return(0,a.jsxs)("div",{className:"flex justify-between mb-4 border-b-4 border-primary",children:[(0,a.jsx)("h2",{className:"px-8 pt-2 pb-1 text-lg font-semibold rounded-tl-full rounded-br-full pr-9 text-primary-foreground bg-primary",children:e}),(0,a.jsxs)(l.default,{href:`/products${t?"?categoryId="+t:""}`,className:"flex items-center gap-1 text-xl transition-all duration-500 hover:underline text-primary hover:translate-x-4",children:[r("seeMore"),(0,a.jsx)(o.Z,{})]})]})};s()}catch(e){s(e)}})},40694:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>n});var a=r(89351);r(22052);var o=r(7175),l=r(19688),i=e([o,l]);[o,l]=i.then?(await i)():i;let n=({books:e,showNavigateButton:t=!0})=>(0,a.jsx)(a.Fragment,{children:e?.length>0&&(0,a.jsxs)(l.Carousel,{children:[(0,a.jsx)(l.CarouselContent,{children:e.map(e=>(0,a.jsx)(l.CarouselItem,{className:"basis-1/2 md:basis-1/3 xl:basis-1/6",children:(0,a.jsx)(o.Z,{product:e})},e.id))}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.CarouselPrevious,{}),(0,a.jsx)(l.CarouselNext,{})]})]})});s()}catch(e){s(e)}})},37011:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var a=r(71851);let e=(await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/scroll-to-top.jsx`)).default;s()}catch(e){s(e)}},1)},19688:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{Carousel:()=>o,CarouselContent:()=>l,CarouselItem:()=>i,CarouselNext:()=>c,CarouselPrevious:()=>n});var a=r(71851);let e=await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/ui/carousel.jsx`),o=e.Carousel,l=e.CarouselContent,i=e.CarouselItem,n=e.CarouselPrevious,c=e.CarouselNext;s()}catch(e){s(e)}},1)},7175:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>u});var a=r(89351);r(22052),r(21570);var o=r(74894),l=r(45580),i=r(77457),n=r(94229),c=r(88834),d=e([i,c]);[i,c]=d.then?(await d)():d;let u=({product:e,endpoint:t="/products"})=>(0,a.jsx)("div",{className:"flex flex-col items-stretch justify-between w-full h-full transition-all duration-500 rounded-lg group hover:scale-95",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"relative overflow-hidden ",children:[(0,a.jsx)(l.default,{href:`${t}/${e.id}`,children:(0,a.jsx)(o.default,{width:600,height:600,className:"object-cover w-full border-[0.5px] border-primary rounded-md aspect-[6/9] font-moul",src:n.wX+"thumb/"+e.image,alt:e.title})}),0!=e.discount&&null!=e.discount&&(0,a.jsxs)("span",{className:"absolute px-1.5 font-bold text-lg rounded-sm text-white bottom-1.5 left-1.5 bg-real_primary/80",children:["- ",e.discount,"%"]}),(0,a.jsx)(c.default,{product:e})]}),(0,a.jsxs)(l.default,{href:`/products/${e.id}`,children:[(0,a.jsx)("div",{className:"flex flex-col justify-between mt-1 lg:items-center lg:flex-row",children:0!=e.discount&&null!=e.discount?(0,a.jsxs)("p",{className:"space-x-2 overflow-hidden text-lg text-gray-400 text-ellipsis",children:[(0,a.jsxs)("span",{className:"line-through",children:[e.price," $"]}),(0,a.jsxs)("span",{className:"text-red-500",children:[e.price-e.discount/100*e.price," $"]})]}):(0,a.jsxs)("p",{className:"max-w-full overflow-hidden text-lg font-bold text-red-500 text-ellipsis",children:[e.price," $"]})}),(0,a.jsx)(i.TooltipProvider,{delayDuration:0,children:(0,a.jsxs)(i.Tooltip,{className:"bg-blue-200",children:[(0,a.jsxs)(i.TooltipTrigger,{className:"w-full",children:[(0,a.jsx)("h3",{className:"text-md text-start text-foreground line-clamp-1",children:e.title}),(0,a.jsx)("h3",{className:"text-gray-400 text-md text-start line-clamp-2",children:e.short_description})]}),(0,a.jsx)(i.TooltipContent,{side:"bottom",className:"text-sm bg-secondary text-secondary-foreground",children:(0,a.jsx)("p",{className:"max-w-[25ch] leading-5  left-0 right-0",children:e.title})})]})})]})]})});s()}catch(e){s(e)}})},77457:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{Tooltip:()=>o,TooltipContent:()=>i,TooltipProvider:()=>n,TooltipTrigger:()=>l});var a=r(71851);let e=await (0,a.createProxy)(String.raw`/Users/themacstore/Desktop/PROJECT_nextjs/ecommerce_nextjs15/src/components/ui/tooltip.jsx`),o=e.Tooltip,l=e.TooltipTrigger,i=e.TooltipContent,n=e.TooltipProvider;s()}catch(e){s(e)}},1)},3944:(e,t,r)=>{async function s(){let e=process.env.BASE_API_URL+"/books_new_arrival";try{let t=await fetch(e,{next:{revalidate:3600}});if(!t.ok)throw Error(`Failed to fetch New Arrival Books : ${t.statusText}`);return await t.json()}catch(e){return console.log(e.message),null}}async function a({limit:e}={}){let t=process.env.BASE_API_URL+`/books_best_selling?limit=${e||""}`;try{let e=await fetch(t,{next:{revalidate:3600}});if(!e.ok)throw Error(`Failed to fetch Best Selling Books : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}async function o({categoryId:e="",subCategoryId:t="",randomOrder:r="",orderBy:s="",orderDir:a="",page:l="",perPage:i="",search:n="",priceFrom:c="",priceTo:d="",yearFrom:u="",yearTo:x="",authorId:h="",publisherId:m=""}={}){let f=new URLSearchParams({categoryId:e,subCategoryId:t,randomOrder:r,page:l,search:n,perPage:i,orderBy:s,orderDir:a,priceFrom:c,priceTo:d,yearFrom:u,yearTo:x,authorId:h,publisherId:m}),p=`${process.env.BASE_API_URL}/books?${f}`;try{let e=await fetch(p,{next:{revalidate:3600}});if(!e.ok)throw Error(`Failed to fetch Books : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}async function l({categoryId:e="",subCategoryId:t="",randomOrder:r="",orderBy:s="",orderDir:a="",page:o="",perPage:i="",search:n="",priceFrom:c="",priceTo:d="",yearFrom:u="",yearTo:x="",authorId:h="",publisherId:m=""}={}){let f=new URLSearchParams({categoryId:e,subCategoryId:t,randomOrder:r,page:o,search:n,perPage:i,orderBy:s,orderDir:a,priceFrom:c,priceTo:d,yearFrom:u,yearTo:x,authorId:h,publisherId:m}),p=`${process.env.BASE_API_URL}/kid_books?${f}`;try{let e=await fetch(p,{next:{revalidate:3600}});if(!e.ok)throw Error(`Failed to fetch Kids Books : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}async function i({id:e}){let t=process.env.BASE_API_URL+`/books/${e}`;try{let e=await fetch(t,{next:{revalidate:3600}});if(404==e.status)return 404;if(!e.ok)throw Error(`Failed to fetch Book : ${e.statusText}`);return await e.json()}catch(e){return console.log(e.message),null}}r.d(t,{$3:()=>s,Pv:()=>a,fA:()=>l,v9:()=>i,yZ:()=>o})}};