(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6994],{9724:(e,t,s)=>{Promise.resolve().then(s.bind(s,55418))},96753:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a=(0,s(78030).Z)("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]])},55418:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var a=s(57437),r=s(53277),l=s(17147),n=s(2265),i=s(58214);let o=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...r})});o.displayName="Textarea";var d=s(12200),c=s(85456),u=s(86788),m=s(88794),p=s(96753),h=s(16463),f=s(18087),x=s(35841),b=s(20357);function g(){let e=(0,h.useRouter)(),t=(0,f.useTranslations)("Index"),{cartItems:s,clearCart:i}=(0,m.j)(),[g,v]=(0,n.useState)({name:"",phone:"",note:""}),[j,y]=(0,n.useState)(!1),[w,N]=(0,n.useState)(null),[_,S]=(0,n.useState)({}),[k,C]=(0,n.useState)(!1);(0,n.useEffect)(()=>{C(!0)},[]);let P=e=>{let{id:t,value:s}=e.target;v(e=>({...e,[t]:s}))},R=async t=>{t.preventDefault(),N(null),S({});let a={};if(g.name.trim()||(a.name="Name is required."),g.phone.trim()?/^\d{7,15}$/.test(g.phone)||(a.phone="Phone number must be between 7 to 15 digits."):a.phone="Phone number is required.",Object.keys(a).length>0){S(a);return}let r={...g,items:s.map(e=>({id:e.id,title:e.title,image:e.image,price:e.price,discount:e.discount,quantity:e.quantity}))};y(!0);try{if(!(await fetch(b.env.BASE_API_URL+"/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw Error("Failed to place the order. Please contact admin.");i({isShowDialog:!1}),e.push("/cart/success")}catch(e){N(e.message)}finally{y(!1)}};return k?(0,a.jsxs)("div",{className:"flex flex-col min-h-screen mb-8 lg:px-4",children:[(0,a.jsx)(x.default,{}),(0,a.jsx)(u.Z,{currentStep:2,allowCheckout:!0},s),(0,a.jsxs)("main",{className:"flex-1 grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8",children:[(0,a.jsxs)("div",{className:"p-2 py-4 border rounded-lg shadow-lg lg:p-8 bg-background",children:[(0,a.jsx)("h1",{className:"mb-4 text-2xl font-bold",children:t("checkout")}),(0,a.jsxs)("form",{className:"grid grid-cols-2 gap-4",onSubmit:R,children:[(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)(r._,{htmlFor:"name",children:t("name")}),(0,a.jsx)(l.I,{autoFocus:!0,id:"name",placeholder:t("name"),value:g.name,onChange:P}),_.name&&(0,a.jsx)("p",{className:"mt-1 text-sm text-red-500",children:_.name})]}),(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)(r._,{htmlFor:"phone",children:t("phone")}),(0,a.jsx)(l.I,{id:"phone",type:"number",placeholder:"ex: 061561155",value:g.phone,onChange:P}),_.phone&&(0,a.jsx)("p",{className:"mt-1 text-sm text-red-500",children:_.phone})]}),(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)(r._,{htmlFor:"note",children:t("note")}),(0,a.jsx)(o,{id:"note",placeholder:t("note"),value:g.note,onChange:P})]}),(0,a.jsx)("div",{className:"flex justify-end col-span-2",children:s.length>0&&(0,a.jsx)(d.z,{type:"submit",size:"lg",disabled:j,children:j?(0,a.jsxs)("p",{className:"flex gap-2",children:[(0,a.jsx)(p.Z,{className:"text-white animate-spin"}),t("placingOrder"),"..."]}):t("placeOrder")})})]}),w&&(0,a.jsx)("p",{className:"mt-4 text-center text-red-500",children:w})]}),(0,a.jsx)(c.Z,{})]})]}):null}},17147:(e,t,s)=>{"use strict";s.d(t,{I:()=>n});var a=s(57437),r=s(2265),l=s(58214);let n=r.forwardRef((e,t)=>{let{className:s,type:r,...n}=e;return(0,a.jsx)("input",{type:r,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-md shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...n})});n.displayName="Input"},53277:(e,t,s)=>{"use strict";s.d(t,{_:()=>d});var a=s(57437),r=s(2265),l=s(38837),n=s(12218),i=s(58214);let o=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(l.f,{ref:t,className:(0,i.cn)(o(),s),...r})});d.displayName=l.f.displayName},38837:(e,t,s)=>{"use strict";s.d(t,{f:()=>o});var a=s(2265);s(54887);var r=s(63355),l=s(57437),n=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let s=a.forwardRef((e,s)=>{let{asChild:a,...n}=e,i=a?r.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...n,ref:s})});return s.displayName=`Primitive.${t}`,{...e,[t]:s}},{}),i=a.forwardRef((e,t)=>(0,l.jsx)(n.label,{...e,ref:t,onMouseDown:t=>{var s;t.target.closest("button, input, select, textarea")||(null===(s=e.onMouseDown)||void 0===s||s.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var o=i}},e=>{var t=t=>e(e.s=t);e.O(0,[4705,8310,3393,231,8173,9325,8966,7809,3810,479,726,7130,6215,1744],()=>t(9724)),_N_E=e.O()}]);