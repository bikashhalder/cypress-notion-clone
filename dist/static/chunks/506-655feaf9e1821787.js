"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{4622:function(e,a,t){t.d(a,{pm:function(){return u}});var r=t(2265);let o=0,d=new Map,n=e=>{if(d.has(e))return;let a=setTimeout(()=>{d.delete(e),i({type:"REMOVE_TOAST",toastId:e})},1e6);d.set(e,a)},s=(e,a)=>{switch(a.type){case"ADD_TOAST":return{...e,toasts:[a.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===a.toast.id?{...e,...a.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=a;return t?n(t):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===a.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==a.toastId)}}},c=[],f={toasts:[]};function i(e){f=s(f,e),c.forEach(e=>{e(f)})}function l(e){let{...a}=e,t=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>i({type:"DISMISS_TOAST",toastId:t});return i({type:"ADD_TOAST",toast:{...a,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>i({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function u(){let[e,a]=r.useState(f);return r.useEffect(()=>(c.push(a),()=>{let e=c.indexOf(a);e>-1&&c.splice(e,1)}),[e]),{...e,toast:l,dismiss:e=>i({type:"DISMISS_TOAST",toastId:e})}}},4163:function(e,a,t){t.r(a),t.d(a,{useAppState:function(){return i}});var r=t(7437),o=t(2265),d=t(4033),n=t(1880);let s={workspaces:[]},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_WORKSPACE":return{...e,workspaces:[...e.workspaces,a.payload]};case"DELETE_WORKSPACE":return{...e,workspaces:e.workspaces.filter(e=>e.id!==a.payload)};case"UPDATE_WORKSPACE":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,...a.payload.workspace}:e)};case"SET_WORKSPACES":return{...e,workspaces:a.payload.workspaces};case"SET_FOLDERS":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folders:a.payload.folders.sort((e,a)=>new Date(e.createdAt).getTime()-new Date(a.createdAt).getTime())}:e)};case"ADD_FOLDER":return{...e,workspaces:e.workspaces.map(e=>({...e,folders:[...e.folders,a.payload.folder].sort((e,a)=>new Date(e.createdAt).getTime()-new Date(a.createdAt).getTime())}))};case"UPDATE_FOLDER":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folders:e.folders.map(e=>e.id===a.payload.folderId?{...e,...a.payload.folder}:e)}:e)};case"DELETE_FOLDER":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folders:e.folders.filter(e=>e.id!==a.payload.folderId)}:e)};case"SET_FILES":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folders:e.folders.map(e=>e.id===a.payload.folderId?{...e,files:a.payload.files}:e)}:e)};case"ADD_FILE":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folders:e.folders.map(e=>e.id===a.payload.folderId?{...e,files:[...e.files,a.payload.file].sort((e,a)=>new Date(e.createdAt).getTime()-new Date(a.createdAt).getTime())}:e)}:e)};case"DELETE_FILE":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folder:e.folders.map(e=>e.id===a.payload.folderId?{...e,files:e.files.filter(e=>e.id!==a.payload.fileId)}:e)}:e)};case"UPDATE_FILE":return{...e,workspaces:e.workspaces.map(e=>e.id===a.payload.workspaceId?{...e,folders:e.folders.map(e=>e.id===a.payload.folderId?{...e,files:e.files.map(e=>e.id===a.payload.fileId?{...e,...a.payload.file}:e)}:e)}:e)};default:return s}},f=(0,o.createContext)(void 0);a.default=e=>{let{children:a}=e,[t,i]=(0,o.useReducer)(c,s),l=(0,d.usePathname)(),u=(0,o.useMemo)(()=>{let e=null==l?void 0:l.split("/").filter(Boolean);if(e&&e.length>1)return e[1]},[l]),p=(0,o.useMemo)(()=>{let e=null==l?void 0:l.split("/").filter(Boolean);if(e&&(null==e?void 0:e.length)>2)return e[2]},[l]),b=(0,o.useMemo)(()=>{let e=null==l?void 0:l.split("/").filter(Boolean);if(e&&(null==e?void 0:e.length)>3)return e[3]},[l]);return(0,o.useEffect)(()=>{if(!p||!u)return;let e=async()=>{let{error:e,data:a}=await (0,n.bE)(p);e&&console.log(e),a&&i({type:"SET_FILES",payload:{workspaceId:u,files:a,folderId:p}})};e()},[p,u]),(0,o.useEffect)(()=>{console.log("App State Changed",t)},[t]),(0,r.jsx)(f.Provider,{value:{state:t,dispatch:i,workspaceId:u,folderId:p,fileId:b},children:a})};let i=()=>{let e=(0,o.useContext)(f);if(!e)throw Error("useAppState must be used within an AppStateProvider");return e}},1880:function(e,a,t){t.d(a,{Dd:function(){return b},Go:function(){return T},I$:function(){return o},L6:function(){return l},MB:function(){return d},NN:function(){return S},Tb:function(){return u},_I:function(){return y},a4:function(){return s},bE:function(){return n},cd:function(){return m},cn:function(){return p},eA:function(){return w},fD:function(){return c},oe:function(){return A},qd:function(){return E},rj:function(){return i},vW:function(){return k},zl:function(){return f}}),t(5231),t(470);var r=t(1162),o=(0,r.$)("2c6a85d56141f1302f550bf73641f1bb437f8c30"),d=(0,r.$)("d79fda52b74c10070baeb50e62e519b3ba4ea129"),n=(0,r.$)("bf13edd666219981da2d2ad51cac7537023d1d90");(0,r.$)("f46303b3608098cba15a480ceec93690bfc2435d"),(0,r.$)("417b18ab59f27cadda6a49c7b96e769adca685b7"),(0,r.$)("0f13f0cd8d72390a7469a60f7d29f257096024cb"),(0,r.$)("d643431fc06c5cc4ba5ca3d71aef88824802032b");var s=(0,r.$)("a2d4ea10404f44a150e4c7c1ab021f369fbf21e0"),c=(0,r.$)("1f35766a2c7399231db38ff7e71d889523e35320"),f=(0,r.$)("f1c4575f1aa04b0b171265e1a582eaa946f577a8"),i=(0,r.$)("1d7956b46734ac5762684d2906bb4ecb9e7afc96"),l=(0,r.$)("4a2cab8d48c7ab565dc194d925837c9af8e41d45"),u=(0,r.$)("45296063453c47b2d59b262faee8cdb4b9615201"),p=(0,r.$)("b67d2b8528a174e713442eac3b93e4e40ddf2151"),b=(0,r.$)("d016c8e248949cf0e0679cea37a599b256564949"),w=(0,r.$)("23d258b4a0ed2cd54c2684f72dd9708f858897ed"),E=(0,r.$)("453834eaf571f615d95d1dc2663c8f75db24fe49"),y=(0,r.$)("d09f14ac4ef39816839c0413ba841e2c9f00f930"),T=(0,r.$)("079e33a7786d357bf8b15353b8dee8f948ebd93b"),m=(0,r.$)("4e60e9c17aa85b5e328f6db15ff1dec244d6afb2"),S=(0,r.$)("847a8ef020990095f03fc54601460ec72777b66c"),k=(0,r.$)("4af80a06816005e931cd7f0ead5a1e93455a28fc"),A=(0,r.$)("05748815d7a50bb0da1dd63e2e666ca8430be215");(0,r.$)("fca7d3ede7a1acca1350701808fdd80e09ceec6e")},345:function(e,a,t){t.d(a,{T4:function(){return n},cn:function(){return d},qC:function(){return s}});var r=t(7042),o=t(4769);function d(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,o.m6)((0,r.W)(a))}let n=e=>{let a=new Intl.NumberFormat("en-US",{style:"currency",currency:e.currency||void 0,minimumFractionDigits:0}).format(((null==e?void 0:e.unitAmount)||0)/100);return a},s=async e=>{let{url:a,data:t}=e;console.log("posting",a,t);let r=await fetch(a,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),credentials:"same-origin",body:JSON.stringify(t)});if(!r.ok)throw console.log("Error in postData",{url:a,data:t,res:r}),Error(r.statusText);return r.json()}}}]);