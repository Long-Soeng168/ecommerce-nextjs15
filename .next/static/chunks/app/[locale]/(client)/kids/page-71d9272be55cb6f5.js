(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7564],{41382:(e,t,r)=>{Promise.resolve().then(r.bind(r,39819)),Promise.resolve().then(r.bind(r,83105)),Promise.resolve().then(r.t.bind(r,38173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,80201)),Promise.resolve().then(r.bind(r,54010)),Promise.resolve().then(r.bind(r,35841)),Promise.resolve().then(r.bind(r,81021)),Promise.resolve().then(r.bind(r,50541)),Promise.resolve().then(r.bind(r,73390))},80201:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(57437),s=r(2265),n=r(92940),o=r(98960);r(12200);var i=r(88794),l=r(18087),p=r(73390);let d=e=>{let{product:t}=e,r=(0,l.useTranslations)("Index"),[d,c]=(0,s.useState)(!1),{addToCart:m}=(0,i.j)();return(0,a.jsx)("div",{className:"absolute z-50 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-white font-bold text-lg rounded-lg bottom-1.5 right-1.5",children:(0,a.jsx)(p.TooltipProvider,{delayDuration:0,children:(0,a.jsxs)(p.Tooltip,{children:[(0,a.jsx)(p.TooltipTrigger,{asChild:!0,onClick:()=>{m(t,!1),c(!0)},children:(0,a.jsx)("div",{className:"p-2 rounded-lg bg-primary text-primary-foreground",children:d?(0,a.jsx)(n.Z,{}):(0,a.jsx)(o.Z,{})})}),(0,a.jsx)(p.TooltipContent,{side:"bottom",className:"mt-2",children:(0,a.jsx)("p",{children:r("addToCart")})})]})})})}},54010:(e,t,r)=>{"use strict";r.d(t,{default:()=>y});var a=r(57437),s=r(2265),n=r(16463),o=r(4867),i=r(58214),l=r(12200);let p=e=>{let{className:t,...r}=e;return(0,a.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,i.cn)("mx-auto flex w-full justify-center",t),...r})};p.displayName="Pagination";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("ul",{ref:t,className:(0,i.cn)("flex flex-row items-center gap-1",r),...s})});d.displayName="PaginationContent";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("li",{ref:t,className:(0,i.cn)("cursor-pointer",r),...s})});c.displayName="PaginationItem";let m=e=>{let{className:t,isActive:r,size:s="icon",...n}=e;return(0,a.jsx)("a",{"aria-current":r?"page":void 0,className:(0,i.cn)((0,l.d)({variant:r?"outline":"ghost",size:s}),t),...n})};m.displayName="PaginationLink";let u=e=>{let{className:t,title:r="Previous",...s}=e;return(0,a.jsxs)(m,{"aria-label":"Go to previous page",size:"default",className:(0,i.cn)("gap-1 pl-2.5",t),...s,children:[(0,a.jsx)(o.wyc,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:r})]})};u.displayName="PaginationPrevious";let _=e=>{let{className:t,title:r="Next",...s}=e;return(0,a.jsxs)(m,{"aria-label":"Go to next page",size:"default",className:(0,i.cn)("gap-1 pr-2.5",t),...s,children:[(0,a.jsx)("span",{children:r}),(0,a.jsx)(o.XCv,{className:"w-4 h-4"})]})};_.displayName="PaginationNext";var x=r(18087);let y=e=>{var t;let{links:r,from:s,to:o,total:i}=e,l=(0,n.usePathname)(),y=(0,n.useSearchParams)(),{replace:h}=(0,n.useRouter)(),k=(0,x.useTranslations)("Index"),f=Number(y.get("page"))||1,g=e=>{let t=new URLSearchParams(y);return t.set("page",e),"".concat(l,"?").concat(t.toString())},v=f>1,b=f<Number(r&&(null===(t=r[(null==r?void 0:r.length)-2])||void 0===t?void 0:t.label)),j=e=>{h(g(e))};return(0,a.jsxs)("div",{className:"flex items-center justify-center w-full md:justify-between ",children:[(0,a.jsxs)("p",{className:"hidden whitespace-nowrap md:block",children:[k("showing")," ",s," ",k("to")," ",o," ",k("of")," ",i," ",k("results")]}),(0,a.jsx)(p,{className:"w-auto mx-0",children:(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(u,{title:k("previous"),className:v?"text-primary font-bold":"",onClick:()=>v&&j(f-1)})}),null==r?void 0:r.filter(e=>!e.label.includes("Previous")&&!e.label.includes("Next")).map((e,t)=>{let r="..."===e.label?null:Number(e.label);return(0,a.jsx)(c,{className:"".concat(e.active?"":"hidden","  md:block"),children:(0,a.jsx)(m,{onClick:()=>r&&j(r),dangerouslySetInnerHTML:{__html:e.label},className:e.active?"text-primary border-primary border-2 font-bold":""})},t)}),(0,a.jsx)(c,{children:(0,a.jsx)(_,{title:k("next"),className:b?"text-primary font-bold":"",onClick:()=>b&&j(f+1)})})]})})]})}},35841:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(2265);function s(){return(0,a.useEffect)(()=>{console.log("trigger scroll to top"),window.scrollTo({top:0,behavior:"smooth"})},[]),null}},12200:(e,t,r)=>{"use strict";r.d(t,{d:()=>l,z:()=>p});var a=r(57437),s=r(2265),n=r(63355),o=r(12218),i=r(58214);let l=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-primary bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",xs:"h-6 w-6  [&_svg]:size-4",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:p=!1,...d}=e,c=p?n.g7:"button";return(0,a.jsx)(c,{className:(0,i.cn)(l({variant:s,size:o,className:r})),ref:t,...d})});p.displayName="Button"},81021:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(57437),s=r(54817),n=r(16463),o=r(27266),i=r(98789);function l(e){var t;let{placeholder:r}=e,l=(0,n.useSearchParams)(),p=(0,i.jD)(),{replace:d}=(0,n.useRouter)(),c=(0,o.y1)(e=>{let t=new URLSearchParams(l);e?(t.set("search",e),t.set("page",1)):t.delete("search"),d("".concat(p,"?").concat(t.toString()))},300);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"relative flex flex-1 flex-shrink-0 h-full border rounded-md border-primary",children:[(0,a.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,a.jsx)("input",{className:"block w-full py-2 pl-10 text-sm border border-gray-200 rounded-md peer outline-1 placeholder:text-gray-500",placeholder:r,onChange:e=>{c(e.target.value)},defaultValue:null===(t=l.get("search"))||void 0===t?void 0:t.toString()}),(0,a.jsx)(s.Z,{className:"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500  dark:text-white"})]})})}},50541:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(57437),s=r(43393),n=r.n(s);let o=JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"\xe5\xbd\xa2\xe7\x8a\xb6\xe5\x9b\xbe\xe5\xb1\x82 5","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":8,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":24,"s":[30],"e":[100]},{"t":40}]},"r":{"k":0},"p":{"k":[187.875,77.125,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":8,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":24,"s":[200,200,100],"e":[100,100,100]},{"t":40}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\xe6\xa4\xad\xe5\x9c\x86\xe8\xb7\xaf\xe5\xbe\x84 1","mn":"ADBE Vector Shape - Ellipse","_render":true},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\xe6\x8f\x8f\xe8\xbe\xb9 1","mn":"ADBE Vector Graphic - Stroke","_render":true},{"ty":"fl","c":{"k":[0.5838,0.4295,0.8705,1]},"o":{"k":100},"nm":"\xe5\xa1\xab\xe5\x85\x85 1","mn":"ADBE Vector Graphic - Fill","_render":true},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\xe5\x8f\x98\xe6\x8d\xa2","_render":true}],"nm":"\xe6\xa4\xad\xe5\x9c\x86 1","np":3,"mn":"ADBE Vector Group","_render":true}],"ip":0,"op":40,"st":0,"bm":0,"sr":1,"completed":true},{"ddd":0,"ind":1,"ty":4,"nm":"\xe5\xbd\xa2\xe7\x8a\xb6\xe5\x9b\xbe\xe5\xb1\x82 4","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":6,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":22,"s":[30],"e":[100]},{"t":36}]},"r":{"k":0},"p":{"k":[162.125,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":6,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":22,"s":[200,200,100],"e":[100,100,100]},{"t":36}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\xe6\xa4\xad\xe5\x9c\x86\xe8\xb7\xaf\xe5\xbe\x84 1","mn":"ADBE Vector Shape - Ellipse","_render":true},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\xe6\x8f\x8f\xe8\xbe\xb9 1","mn":"ADBE Vector Graphic - Stroke","_render":true},{"ty":"fl","c":{"k":[0.65,0.5567,0.8233,1]},"o":{"k":100},"nm":"\xe5\xa1\xab\xe5\x85\x85 1","mn":"ADBE Vector Graphic - Fill","_render":true},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\xe5\x8f\x98\xe6\x8d\xa2","_render":true}],"nm":"\xe6\xa4\xad\xe5\x9c\x86 1","np":3,"mn":"ADBE Vector Group","_render":true}],"ip":0,"op":40,"st":0,"bm":0,"sr":1,"completed":true},{"ddd":0,"ind":2,"ty":4,"nm":"\xe5\xbd\xa2\xe7\x8a\xb6\xe5\x9b\xbe\xe5\xb1\x82 3","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":4,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":20,"s":[30],"e":[100]},{"t":32}]},"r":{"k":0},"p":{"k":[135.625,76.625,0]},"a":{"k":[-76.375,-2.875,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":4,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":20,"s":[200,200,100],"e":[100,100,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\xe6\xa4\xad\xe5\x9c\x86\xe8\xb7\xaf\xe5\xbe\x84 1","mn":"ADBE Vector Shape - Ellipse","_render":true},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\xe6\x8f\x8f\xe8\xbe\xb9 1","mn":"ADBE Vector Graphic - Stroke","_render":true},{"ty":"fl","c":{"k":[0.5294,0.2745,1,1]},"o":{"k":100},"nm":"\xe5\xa1\xab\xe5\x85\x85 1","mn":"ADBE Vector Graphic - Fill","_render":true},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\xe5\x8f\x98\xe6\x8d\xa2","_render":true}],"nm":"\xe6\xa4\xad\xe5\x9c\x86 1","np":3,"mn":"ADBE Vector Group","_render":true}],"ip":0,"op":40,"st":0,"bm":0,"sr":1,"completed":true},{"ddd":0,"ind":3,"ty":4,"nm":"\xe5\xbd\xa2\xe7\x8a\xb6\xe5\x9b\xbe\xe5\xb1\x82 2","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":2,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":16,"s":[30],"e":[100]},{"t":28}]},"r":{"k":0},"p":{"k":[109.375,76.625,0]},"a":{"k":[-76.625,-3.125,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":2,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":16,"s":[200,200,100],"e":[100,100,100]},{"t":28}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\xe6\xa4\xad\xe5\x9c\x86\xe8\xb7\xaf\xe5\xbe\x84 1","mn":"ADBE Vector Shape - Ellipse","_render":true},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\xe6\x8f\x8f\xe8\xbe\xb9 1","mn":"ADBE Vector Graphic - Stroke","_render":true},{"ty":"fl","c":{"k":[0.5492,0.5606,0.8908,1]},"o":{"k":100},"nm":"\xe5\xa1\xab\xe5\x85\x85 1","mn":"ADBE Vector Graphic - Fill","_render":true},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\xe5\x8f\x98\xe6\x8d\xa2","_render":true}],"nm":"\xe6\xa4\xad\xe5\x9c\x86 1","np":3,"mn":"ADBE Vector Group","_render":true}],"ip":0,"op":40,"st":0,"bm":0,"sr":1,"completed":true},{"ddd":0,"ind":4,"ty":4,"nm":"\xe5\xbd\xa2\xe7\x8a\xb6\xe5\x9b\xbe\xe5\xb1\x82 1","ks":{"o":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":0,"s":[100],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"n":["0p833_0p833_0p333_0"],"t":12,"s":[30],"e":[100]},{"t":24}]},"r":{"k":0},"p":{"k":[82.625,76.625,0]},"a":{"k":[-76.625,-3.375,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":0,"s":[100,100,100],"e":[200,200,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0.333]},"n":["0p833_0p833_0p333_0","0p833_0p833_0p333_0","0p833_0p833_0p333_0p333"],"t":12,"s":[200,200,100],"e":[100,100,100]},{"t":24}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[18,18]},"p":{"k":[0,0]},"nm":"\xe6\xa4\xad\xe5\x9c\x86\xe8\xb7\xaf\xe5\xbe\x84 1","mn":"ADBE Vector Shape - Ellipse","_render":true},{"ty":"st","c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":0},"lc":1,"lj":1,"ml":4,"nm":"\xe6\x8f\x8f\xe8\xbe\xb9 1","mn":"ADBE Vector Graphic - Stroke","_render":true},{"ty":"fl","c":{"k":[0.3255,0.349,0.9922,1]},"o":{"k":100},"nm":"\xe5\xa1\xab\xe5\x85\x85 1","mn":"ADBE Vector Graphic - Fill","_render":true},{"ty":"tr","p":{"k":[-76.482,-3.482],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"\xe5\x8f\x98\xe6\x8d\xa2","_render":true}],"nm":"\xe6\xa4\xad\xe5\x9c\x86 1","np":3,"mn":"ADBE Vector Group","_render":true}],"ip":0,"op":40,"st":0,"bm":0,"sr":1,"completed":true}],"v":"4.5.4","ddd":0,"ip":0,"op":40,"fr":24,"w":280,"h":160,"__complete":true}');function i(){return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center w-full",children:(0,a.jsx)(n(),{animationData:o,className:"flex items-center justify-center",loop:!0})})}},73390:(e,t,r)=>{"use strict";r.d(t,{Tooltip:()=>l,TooltipContent:()=>d,TooltipProvider:()=>i,TooltipTrigger:()=>p});var a=r(57437),s=r(2265),n=r(60364),o=r(58214);let i=n.zt,l=n.fC,p=n.xz,d=s.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...i}=e;return(0,a.jsx)(n.h_,{children:(0,a.jsx)(n.VY,{ref:t,sideOffset:s,className:(0,o.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...i})})});d.displayName=n.VY.displayName},88794:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>p,j:()=>d});var a=r(57437),s=r(2265),n=r(60479);let o={cartItems:[]};function i(e,t){switch(t.type){case"ADD_TO_CART":if(e.cartItems.find(e=>e.id===t.payload.id))return{...e,cartItems:e.cartItems.map(e=>e.id===t.payload.id?{...e,quantity:e.quantity+1}:e)};return{...e,cartItems:[...e.cartItems,{...t.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...e,cartItems:e.cartItems.filter(e=>e.id!==t.payload.id)};case"UPDATE_QUANTITY":return{...e,cartItems:e.cartItems.map(e=>e.id===t.payload.id?{...e,quantity:Math.max(e.quantity+t.payload.delta,1)}:e)};case"CLEAR_CART":return o;default:return e}}let l=(0,s.createContext)();function p(e){let{children:t}=e,[r,p]=(0,s.useReducer)(i,(()=>{{let e=localStorage.getItem("cart");return e?JSON.parse(e):o}})()),[d,c]=(0,s.useState)(!1),[m,u]=(0,s.useState)("");(0,s.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(r))},[r]);let _=e=>{u(e),c(!0)};return(0,a.jsxs)(l.Provider,{value:{cartItems:r.cartItems,addToCart:function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];p({type:"ADD_TO_CART",payload:e}),t&&_("".concat(e.title," has been added to the cart."))},removeFromCart:e=>{p({type:"REMOVE_FROM_CART",payload:e}),_("".concat(e.title," has been removed from the cart."))},clearCart:e=>{let{isShowDialog:t=!0}=e;p({type:"CLEAR_CART"}),t&&_("Your cart has been cleared.")},handleQuantityChange:(e,t)=>{p({type:"UPDATE_QUANTITY",payload:{id:e,delta:t}})},getTotalItemCount:()=>r.cartItems.length},children:[t,(0,a.jsx)(n.l,{isOpen:d,message:m,onClose:()=>{c(!1)}})]})}function d(){return(0,s.useContext)(l)}},98789:(e,t,r)=>{"use strict";r.d(t,{jD:()=>l});var a=r(63019),s=r(5758);let n=(0,a.R)({locales:["en","kh"],defaultLocale:"en"}),{Link:o,redirect:i,usePathname:l,useRouter:p,getPathname:d}=(0,s.os)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[4705,8310,3393,231,8173,9325,8966,7809,2344,5787,364,4859,479,7130,6215,1744],()=>t(41382)),_N_E=e.O()}]);