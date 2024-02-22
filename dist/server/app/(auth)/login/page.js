(()=>{var e={};e.id=665,e.ids=[665],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},87936:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>u,routeModule:()=>x,tree:()=>c});var s=r(67096),i=r(16132),n=r(37284),a=r.n(n),o=r(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["(auth)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,99179)),"G:\\notion\\src\\app\\(auth)\\login\\page.tsx"]}]},{}]},{template:[()=>Promise.resolve().then(r.bind(r,17618)),"G:\\notion\\src\\app\\(auth)\\template.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,46647)),"G:\\notion\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["G:\\notion\\src\\app\\(auth)\\login\\page.tsx"],p="/(auth)/login/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(auth)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},97962:(e,t,r)=>{Promise.resolve().then(r.bind(r,40068))},40068:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var s=r(53854),i=r(34218),n=r(51018),a=r(92747),o=r(44468),l=r(61460);let c=l.z.object({email:l.z.string().describe("Email").email({message:"Invalid Email"}),password:l.z.string().describe("Password").min(1,"Password is required")});l.z.object({workspaceName:l.z.string().describe("Workspace Name").min(1,"Workspace must be min of 1 character"),logo:l.z.any()}),l.z.object({banner:l.z.string().describe("Banner Image")});var u=r(57932),p=r(75548),d=r.n(p),x=r(55766),m=r(41956),h=r.n(m),g=r(53110),f=r(59924),b=r(99615),j=r(65592);let q=()=>{let e=(0,n.useRouter)(),[t,r]=(0,i.useState)(""),l=(0,a.cI)({mode:"onChange",resolver:(0,o.F)(c),defaultValues:{email:"",password:""}}),p=l.formState.isSubmitting,m=async t=>{let{error:s}=await (0,j.t)(t);s&&(l.reset(),r(s.message)),e.replace("/dashboard")};return s.jsx(u.l0,{...l,children:(0,s.jsxs)("form",{onChange:()=>{t&&r("")},onSubmit:l.handleSubmit(m),className:"w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col    ",children:[(0,s.jsxs)(d(),{href:"/",className:"w-full flex justify-left items-center",children:[s.jsx(h(),{src:x.default,alt:"cypress logo",width:50,height:50}),s.jsx("span",{className:"font-semibold   dark:text-white text-4xl first-letter:ml-2   ",children:"Juniper"})]}),s.jsx(u.pf,{className:"text-foreground/60",children:"All-In-One Collaboration and Productivity Application"}),s.jsx(u.Wi,{disabled:p,control:l.control,name:"email",render:({field:e})=>(0,s.jsxs)(u.xJ,{children:[s.jsx(u.NI,{children:s.jsx(g.I,{type:"email",placeholder:"Email",...e})}),s.jsx(u.zG,{})]})}),s.jsx(u.Wi,{disabled:p,control:l.control,name:"password",render:({field:e})=>(0,s.jsxs)(u.xJ,{children:[s.jsx(u.NI,{children:s.jsx(g.I,{type:"password",placeholder:"Password",...e})}),s.jsx(u.zG,{})]})}),t&&s.jsx(u.zG,{children:t}),s.jsx(f.z,{type:"submit",className:"w-full p-6",size:"lg",disabled:p,children:p?s.jsx(b.Z,{}):"Login"}),(0,s.jsxs)("span",{className:"self-center",children:["Dont have an account?"," ",s.jsx(d(),{href:"/signup",className:"text-primary",children:"Sign Up"})]})]})})}},99179:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>l});var s=r(95153);let i=(0,s.createProxy)(String.raw`G:\notion\src\app\(auth)\login\page.tsx`),{__esModule:n,$$typeof:a}=i,o=i.default,l=o}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,524,883,969,800,548,92,676,234,932,812],()=>r(87936));module.exports=s})();