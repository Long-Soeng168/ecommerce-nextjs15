(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{53051:(e,a,t)=>{Promise.resolve().then(t.bind(t,39819)),Promise.resolve().then(t.bind(t,83105)),Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,49261)),Promise.resolve().then(t.bind(t,54010)),Promise.resolve().then(t.bind(t,35841)),Promise.resolve().then(t.bind(t,4980)),Promise.resolve().then(t.bind(t,50541))},49261:(e,a,t)=>{"use strict";t.d(a,{MyBlogCategoriesSelect:()=>h});var s=t(57437),l=t(2265),r=t(1282),o=t(22468),n=t(16463),d=t(58214),i=t(12200),c=t(23856),u=t(64634),m=t(18087);function h(e){var a,t;let{categories:h,locale:f}=e,x=(0,n.usePathname)(),p=(0,n.useSearchParams)(),{replace:g}=(0,n.useRouter)(),v=(0,m.useTranslations)("Index"),y=p.get("categoryId"),[N,j]=l.useState(!1),[b,w]=l.useState(y||""),k=e=>{let a=new URLSearchParams(p);return e?(a.set("categoryId",e),a.set("page",1)):a.delete("categoryId"),"".concat(x,"?").concat(a.toString())},P=e=>{g(k(e))};return(0,s.jsxs)(u.J2,{open:N,onOpenChange:j,children:[(0,s.jsx)(u.xo,{asChild:!0,className:"h-auto",children:(0,s.jsxs)(i.z,{variant:"outline",role:"combobox","aria-expanded":N,className:"w-[200px] justify-between h-auto",children:[b?"kh"==f?null==h?void 0:null===(a=h.find(e=>e.id==b))||void 0===a?void 0:a.name_kh:null==h?void 0:null===(t=h.find(e=>e.id==b))||void 0===t?void 0:t.name:v("selectCategory"),(0,s.jsx)(r.Z,{className:"opacity-50"})]})}),(0,s.jsx)(u.yk,{className:"w-[200px] p-0",children:(0,s.jsxs)(c.mY,{children:[(0,s.jsx)(c.sZ,{placeholder:v("searchCategory"),className:"h-9"}),(0,s.jsxs)(c.e8,{children:[(0,s.jsx)(c.rb,{children:v("noData")}),(0,s.jsxs)(c.fu,{children:[(0,s.jsxs)(c.di,{value:"",onSelect:()=>{w(""),j(!1),P("")},children:[v("all"),(0,s.jsx)(o.Z,{className:(0,d.cn)("ml-auto",""===b?"opacity-100":"opacity-0")})]},"all"),null==h?void 0:h.map(e=>(0,s.jsxs)(c.di,{value:e.id,onSelect:()=>{w(b===e.id?"":e.id),j(!1),P(b===e.id?"":e.id)},children:["kh"==f?e.name_kh:e.name," ",e.pages_count?"(".concat(e.pages_count,")"):"",(0,s.jsx)(o.Z,{className:(0,d.cn)("ml-auto",b===e.id?"opacity-100":"opacity-0")})]},e.id))]})]})]})})]})}},35841:(e,a,t)=>{"use strict";t.d(a,{default:()=>l});var s=t(2265);function l(){return(0,s.useEffect)(()=>{console.log("trigger scroll to top"),window.scrollTo({top:0,behavior:"smooth"})},[]),null}},15094:(e,a,t)=>{"use strict";t.d(a,{$N:()=>x,Be:()=>p,Vq:()=>d,cN:()=>f,cZ:()=>m,fK:()=>h,hg:()=>i});var s=t(57437),l=t(2265),r=t(98966),o=t(58214),n=t(4867);let d=r.fC,i=r.xz,c=r.h_;r.x8;let u=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(r.aV,{ref:a,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...l})});u.displayName=r.aV.displayName;let m=l.forwardRef((e,a)=>{let{className:t,children:l,...d}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(r.VY,{ref:a,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]  border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...d,children:[l,(0,s.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(n.Pxu,{className:"w-8 h-8"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=r.VY.displayName;let h=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};h.displayName="DialogHeader";let f=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};f.displayName="DialogFooter";let x=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(r.Dx,{ref:a,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...l})});x.displayName=r.Dx.displayName;let p=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,s.jsx)(r.dk,{ref:a,className:(0,o.cn)("text-sm text-muted-foreground",t),...l})});p.displayName=r.dk.displayName},4980:(e,a,t)=>{"use strict";t.d(a,{default:()=>d});var s=t(57437),l=t(54817),r=t(16463),o=t(27266),n=t(98789);function d(e){var a;let{placeholder:t}=e,d=(0,r.useSearchParams)(),i=(0,n.jD)(),{replace:c}=(0,r.useRouter)(),u=(0,o.y1)(e=>{let a=new URLSearchParams(d);e?(a.set("search",e),a.set("page",1)):a.delete("search"),c("".concat(i,"?").concat(a.toString()))},300);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative flex flex-1 flex-shrink-0 h-full border rounded-md border-primary",children:[(0,s.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,s.jsx)("input",{className:"block w-full py-2 pl-10 text-sm border border-gray-200 rounded-md peer outline-1 placeholder:text-gray-500",placeholder:t,onChange:e=>{u(e.target.value)},defaultValue:null===(a=d.get("search"))||void 0===a?void 0:a.toString()}),(0,s.jsx)(l.Z,{className:"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500  dark:text-white"})]})})}},98789:(e,a,t)=>{"use strict";t.d(a,{jD:()=>d});var s=t(63019),l=t(5758);let r=(0,s.R)({locales:["en","kh"],defaultLocale:"en"}),{Link:o,redirect:n,usePathname:d,useRouter:i,getPathname:c}=(0,l.os)(r)},58214:(e,a,t)=>{"use strict";t.d(a,{cn:()=>r});var s=t(44839),l=t(96164);function r(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,l.m6)((0,s.W)(a))}}},e=>{var a=a=>e(e.s=a);e.O(0,[4705,8310,3393,231,8173,9325,8966,7809,2344,6576,3334,1020,7130,6215,1744],()=>a(53051)),_N_E=e.O()}]);