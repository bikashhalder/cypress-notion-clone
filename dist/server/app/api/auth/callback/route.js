(()=>{var e={};e.id=292,e.ids=[292],e.modules={30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},49384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{headerHooks:()=>y,originalPathname:()=>m,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>x,staticGenerationAsyncStorage:()=>f,staticGenerationBailout:()=>h});var s={};r.r(s),r.d(s,{GET:()=>l});var i=r(10884),a=r(16132),o=r(21040),u=r(46813),n=r(24596),c=r(95798);async function l(e){let t=new URL(e.url),r=t.searchParams.get("code");if(r){let e=(0,u.createRouteHandlerClient)({cookies:n.cookies});await e.auth.exchangeCodeForSession(r)}return c.Z.redirect(`${t.origin}/dashboard`)}let d=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/auth/callback/route",pathname:"/api/auth/callback",filename:"route",bundlePath:"app/api/auth/callback/route"},resolvedPagePath:"G:\\notion\\src\\app\\api\\auth\\callback\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:p,staticGenerationAsyncStorage:f,serverHooks:x,headerHooks:y,staticGenerationBailout:h}=d,m="/api/auth/callback/route";function g(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:f})}},79195:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DYNAMIC_ERROR_CODE:function(){return r},DynamicServerError:function(){return s}});let r="DYNAMIC_SERVER_USAGE";class s extends Error{constructor(e){super("Dynamic server usage: "+e),this.digest=r}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"staticGenerationBailout",{enumerable:!0,get:function(){return n}});let s=r(79195),i=r(22236),a=r(25319);class o extends Error{constructor(...e){super(...e),this.code="NEXT_STATIC_GEN_BAILOUT"}}function u(e,t){let{dynamic:r,link:s}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(s?" See more info here: "+s:"")}let n=(e,t)=>{let r=a.staticGenerationAsyncStorage.getStore();if(!r)return!1;if(r.forceStatic)return!0;if(r.dynamicShouldError){var n;throw new o(u(e,{...t,dynamic:null!=(n=null==t?void 0:t.dynamic)?n:"error"}))}let c=u(e,{...t,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if((0,i.maybePostpone)(r,e),r.revalidate=0,(null==t?void 0:t.dynamic)||(r.staticPrefetchBailout=!0),r.isStaticGeneration){let t=new s.DynamicServerError(c);throw r.dynamicUsageDescription=e,r.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,732,55,107],()=>r(49384));module.exports=s})();