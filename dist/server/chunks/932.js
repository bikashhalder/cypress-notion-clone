"use strict";exports.id=932,exports.ids=[932],exports.modules={7893:(e,t,r)=>{r.r(t),r.d(t,{aalLevel:()=>s,codeChallengeMethod:()=>c,collaborators:()=>x,customers:()=>h,factorStatus:()=>i,factorType:()=>d,files:()=>b,folders:()=>m,keyStatus:()=>o,keyType:()=>n,prices:()=>g,pricesRelations:()=>T,pricingPlanInterval:()=>p,pricingType:()=>u,products:()=>_,productsRelations:()=>N,subscriptionStatus:()=>f,subscriptions:()=>k,users:()=>y,workspaces:()=>w});var a=r(64808),l=r(44806);let o=(0,a.pgEnum)("key_status",["default","valid","invalid","expired"]),n=(0,a.pgEnum)("key_type",["aead-ietf","aead-det","hmacsha512","hmacsha256","auth","shorthash","generichash","kdf","secretbox","secretstream","stream_xchacha20"]),d=(0,a.pgEnum)("factor_type",["totp","webauthn"]),i=(0,a.pgEnum)("factor_status",["unverified","verified"]),s=(0,a.pgEnum)("aal_level",["aal1","aal2","aal3"]),c=(0,a.pgEnum)("code_challenge_method",["s256","plain"]),u=(0,a.pgEnum)("pricing_type",["one_time","recurring"]),p=(0,a.pgEnum)("pricing_plan_interval",["day","week","month","year"]),f=(0,a.pgEnum)("subscription_status",["trialing","active","canceled","incomplete","incomplete_expired","past_due","unpaid"]),w=(0,a.pgTable)("workspaces",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),createdAt:(0,a.timestamp)("created_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),workspaceOwner:(0,a.uuid)("workspace_owner").notNull(),title:(0,a.text)("title").notNull(),iconId:(0,a.text)("icon_id").notNull(),data:(0,a.text)("data"),inTrash:(0,a.text)("in_Trash"),logo:(0,a.text)("logo"),bannerUrl:(0,a.text)("banner_url")}),m=(0,a.pgTable)("folders",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),createdAt:(0,a.timestamp)("created_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),title:(0,a.text)("title").notNull(),iconId:(0,a.text)("icon_id").notNull(),data:(0,a.text)("data"),inTrash:(0,a.text)("in_Trash"),bannerUrl:(0,a.text)("banner_url"),workspaceId:(0,a.uuid)("workspace_id").notNull().references(()=>w.id,{onDelete:"cascade"})}),b=(0,a.pgTable)("files",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),createdAt:(0,a.timestamp)("created_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),title:(0,a.text)("title").notNull(),iconId:(0,a.text)("icon_id").notNull(),data:(0,a.text)("data"),inTrash:(0,a.text)("in_Trash"),bannerUrl:(0,a.text)("banner_url"),workspaceId:(0,a.uuid)("workspace_id").notNull().references(()=>w.id,{onDelete:"cascade"}),folderId:(0,a.uuid)("folder_id").notNull().references(()=>m.id,{onDelete:"cascade"})}),y=(0,a.pgTable)("users",{id:(0,a.uuid)("id").primaryKey().notNull(),fullName:(0,a.text)("full_name"),avatarUrl:(0,a.text)("avatar_url"),billingAddress:(0,a.jsonb)("billing_address"),updatedAt:(0,a.timestamp)("updated_at",{withTimezone:!0,mode:"string"}),paymentMethod:(0,a.jsonb)("payment_method"),email:(0,a.text)("email")}),h=(0,a.pgTable)("customers",{id:(0,a.uuid)("id").primaryKey().notNull(),stripeCustomerId:(0,a.text)("stripe_customer_id")}),g=(0,a.pgTable)("prices",{id:(0,a.text)("id").primaryKey().notNull(),productId:(0,a.text)("product_id").references(()=>_.id),active:(0,a.boolean)("active"),description:(0,a.text)("description"),unitAmount:(0,a.bigint)("unit_amount",{mode:"number"}),currency:(0,a.text)("currency"),type:u("type"),interval:p("interval"),intervalCount:(0,a.integer)("interval_count"),trialPeriodDays:(0,a.integer)("trial_period_days"),metadata:(0,a.jsonb)("metadata")}),_=(0,a.pgTable)("products",{id:(0,a.text)("id").primaryKey().notNull(),active:(0,a.boolean)("active"),name:(0,a.text)("name"),description:(0,a.text)("description"),image:(0,a.text)("image"),metadata:(0,a.jsonb)("metadata")}),k=(0,a.pgTable)("subscriptions",{id:(0,a.text)("id").primaryKey().notNull(),userId:(0,a.uuid)("user_id").notNull(),status:f("status"),metadata:(0,a.jsonb)("metadata"),priceId:(0,a.text)("price_id").references(()=>g.id),quantity:(0,a.integer)("quantity"),cancelAtPeriodEnd:(0,a.boolean)("cancel_at_period_end"),created:(0,a.timestamp)("created",{withTimezone:!0,mode:"string"}).default(l.sql`now()`).notNull(),currentPeriodStart:(0,a.timestamp)("current_period_start",{withTimezone:!0,mode:"string"}).default(l.sql`now()`).notNull(),currentPeriodEnd:(0,a.timestamp)("current_period_end",{withTimezone:!0,mode:"string"}).default(l.sql`now()`).notNull(),endedAt:(0,a.timestamp)("ended_at",{withTimezone:!0,mode:"string"}).default(l.sql`now()`),cancelAt:(0,a.timestamp)("cancel_at",{withTimezone:!0,mode:"string"}).default(l.sql`now()`),canceledAt:(0,a.timestamp)("canceled_at",{withTimezone:!0,mode:"string"}).default(l.sql`now()`),trialStart:(0,a.timestamp)("trial_start",{withTimezone:!0,mode:"string"}).default(l.sql`now()`),trialEnd:(0,a.timestamp)("trial_end",{withTimezone:!0,mode:"string"}).default(l.sql`now()`)}),x=(0,a.pgTable)("collaborators",{workspaceId:(0,a.uuid)("workspace_id").notNull().references(()=>w.id,{onDelete:"cascade"}),cancelAt:(0,a.timestamp)("cancel_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),userId:(0,a.uuid)("user_id").notNull().references(()=>y.id,{onDelete:"cascade"}),id:(0,a.uuid)("id").defaultRandom().notNull()}),N=(0,l.relations)(_,({many:e})=>({prices:e(g)})),T=(0,l.relations)(g,({one:e})=>({product:e(_,{fields:[g.productId],references:[_.id]})}))},73827:(e,t,r)=>{r.d(t,{default:()=>s});var a=r(76989),l=r(20620),o=r(84217),n=r(7893);o.config({path:".env"}),process.env.DATABASE_URL||console.log("no database URL");let d=(0,l.default)(process.env.DATABASE_URL,{max:1}),i=(0,a.drizzle)(d,{schema:n}),s=i},58932:(e,t,r)=>{r.r(t),r.d(t,{addCollaborators:()=>y,createFile:()=>N,createFolder:()=>k,createWorkspace:()=>u,deleteFile:()=>I,deleteFolder:()=>v,deleteWorkspace:()=>g,findUser:()=>D,getActiveProductWithPrice:()=>U,getCollaboratingWorkspaces:()=>m,getCollaborators:()=>z,getFileDetails:()=>E,getFiles:()=>p,getFolderDetails:()=>P,getFolders:()=>f,getPrivateWorkspace:()=>w,getSharedWorkspaces:()=>b,getUserFromSearch:()=>_,getUserSubscriptionStatus:()=>c,getWorkspaceDetails:()=>q,removeCollaborators:()=>h,updateFile:()=>T,updateFolder:()=>x,updateWorkspace:()=>A});var a=r(68065);r(18106);var l=r(79358),o=r(73827),n=r(7893),d=r(44806),i=r(94825),s=r(28116);let c=async e=>{try{let t=await o.default.query.subscriptions.findFirst({where:(t,{eq:r})=>r(t.userId,e)});if(t)return{data:t,error:null};return{data:null,error:null}}catch(e){return console.log(e),{data:null,error:`Error ${e}`}}},u=async e=>{try{return await o.default.insert(n.workspaces).values(e),{data:null,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},p=async e=>{let t=(0,l.validate)(e);if(!t)return{data:null,error:"Error"};try{let t=await o.default.select().from(n.files).orderBy(n.files.createdAt).where((0,d.eq)(n.files.folderId,e));return{data:t,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},f=async e=>{let t=(0,l.validate)(e);if(!t)return{data:null,error:"Error"};try{let t=await o.default.select().from(n.folders).orderBy(n.folders.createdAt).where((0,d.eq)(n.folders.workspaceId,e));return{data:t,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},w=async e=>{if(!e)return[];let t=await o.default.select({id:n.workspaces.id,createdAt:n.workspaces.createdAt,workspaceOwner:n.workspaces.workspaceOwner,title:n.workspaces.title,iconId:n.workspaces.iconId,data:n.workspaces.data,inTrash:n.workspaces.inTrash,logo:n.workspaces.logo,bannerUrl:n.workspaces.bannerUrl}).from(n.workspaces).where((0,d.and)((0,d.notExists)(o.default.select().from(i.collaborators).where((0,d.eq)(i.collaborators.workspaceId,n.workspaces.id))),(0,d.eq)(n.workspaces.workspaceOwner,e)));return t},m=async e=>{if(!e)return[];let t=await o.default.select({id:n.workspaces.id,createdAt:n.workspaces.createdAt,workspaceOwner:n.workspaces.workspaceOwner,title:n.workspaces.title,iconId:n.workspaces.iconId,data:n.workspaces.data,inTrash:n.workspaces.inTrash,logo:n.workspaces.logo,bannerUrl:n.workspaces.bannerUrl}).from(n.users).innerJoin(i.collaborators,(0,d.eq)(n.users.id,i.collaborators.userId)).innerJoin(n.workspaces,(0,d.eq)(i.collaborators.workspaceId,n.workspaces.id)).where((0,d.eq)(n.users.id,e));return t},b=async e=>{if(!e)return[];let t=await o.default.selectDistinct({id:n.workspaces.id,createdAt:n.workspaces.createdAt,workspaceOwner:n.workspaces.workspaceOwner,title:n.workspaces.title,iconId:n.workspaces.iconId,data:n.workspaces.data,inTrash:n.workspaces.inTrash,logo:n.workspaces.logo,bannerUrl:n.workspaces.bannerUrl}).from(n.workspaces).orderBy(n.workspaces.createdAt).innerJoin(i.collaborators,(0,d.eq)(n.workspaces.id,i.collaborators.workspaceId)).where((0,d.eq)(n.workspaces.workspaceOwner,e));return t},y=async(e,t)=>{e.forEach(async e=>{let r=await o.default.query.collaborators.findFirst({where:(r,{eq:a})=>(0,d.and)(a(r.userId,e.id),a(r.workspaceId,t))});r||await o.default.insert(i.collaborators).values({workspaceId:t,userId:e.id})})},h=async(e,t)=>{e.forEach(async e=>{let r=await o.default.query.collaborators.findFirst({where:(r,{eq:a})=>(0,d.and)(a(r.userId,e.id),a(r.workspaceId,t))});r&&await o.default.delete(i.collaborators).where((0,d.and)((0,d.eq)(i.collaborators.workspaceId,t),(0,d.eq)(i.collaborators.userId,e.id)))})},g=async e=>{e&&await o.default.delete(n.workspaces).where((0,d.eq)(n.workspaces.id,e))},_=async e=>{if(!e)return[];let t=o.default.select().from(n.users).where((0,d.ilike)(n.users.email,`${e}%`));return t},k=async e=>{try{return await o.default.insert(n.folders).values(e),{data:null,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},x=async(e,t)=>{try{return await o.default.update(n.folders).set(e).where((0,d.eq)(n.folders.id,t)),{data:null,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},N=async e=>{try{return await o.default.insert(n.files).values(e),{data:null,error:null}}catch(e){return{data:null,error:"Error"}}},T=async(e,t)=>{try{return await o.default.update(n.files).set(e).where((0,d.eq)(n.files.id,t)),{data:null,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},A=async(e,t)=>{if(t)try{return await o.default.update(n.workspaces).set(e).where((0,d.eq)(n.workspaces.id,t)),{data:null,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},q=async e=>{let t=(0,l.validate)(e);if(!t)return{data:[],error:"Error"};try{let t=await o.default.select().from(n.workspaces).where((0,d.eq)(n.workspaces.id,e)).limit(1);return{data:t,error:null}}catch(e){return console.log(e),{data:null,error:"Error"}}},I=async e=>{e&&await o.default.delete(n.files).where((0,d.eq)(n.files.id,e))},v=async e=>{e&&await o.default.delete(n.folders).where((0,d.eq)(n.folders.id,e))},E=async e=>{(0,l.validate)(e);try{let t=await o.default.select().from(n.files).where((0,d.eq)(n.files.id,e)).limit(1);return{data:t,error:null}}catch(e){return console.log("\uD83D\uDD34Error",e),{data:[],error:"Error"}}},P=async e=>{(0,l.validate)(e);try{let t=await o.default.select().from(n.folders).where((0,d.eq)(n.folders.id,e)).limit(1);return{data:t,error:null}}catch(e){return{data:[],error:"Error"}}},z=async e=>{let t=await o.default.select().from(i.collaborators).where((0,d.eq)(i.collaborators.workspaceId,e));if(!t.length)return[];let r=t.map(async e=>{let t=await o.default.query.users.findFirst({where:(t,{eq:r})=>r(t.id,e.userId)});return t}),a=await Promise.all(r);return a.filter(Boolean)},D=async e=>{let t=await o.default.query.users.findFirst({where:(t,{eq:r})=>r(t.id,e)});return t},U=async()=>{try{let e=await o.default.query.products.findMany({where:(e,{eq:t})=>t(e.active,!0),with:{prices:{where:(e,{eq:t})=>t(e.active,!0)}}});if(e.length)return{data:e,error:null};return{data:[],error:null}}catch(e){return console.log(e),{data:[],error:e}}};(0,s.ensureServerEntryExports)([c,u,p,f,w,m,b,y,h,g,_,k,x,N,T,A,q,I,v,E,P,z,D,U]),(0,a.createActionProxy)("2c6a85d56141f1302f550bf73641f1bb437f8c30",null,c),(0,a.createActionProxy)("d79fda52b74c10070baeb50e62e519b3ba4ea129",null,u),(0,a.createActionProxy)("bf13edd666219981da2d2ad51cac7537023d1d90",null,p),(0,a.createActionProxy)("f46303b3608098cba15a480ceec93690bfc2435d",null,f),(0,a.createActionProxy)("417b18ab59f27cadda6a49c7b96e769adca685b7",null,w),(0,a.createActionProxy)("0f13f0cd8d72390a7469a60f7d29f257096024cb",null,m),(0,a.createActionProxy)("d643431fc06c5cc4ba5ca3d71aef88824802032b",null,b),(0,a.createActionProxy)("a2d4ea10404f44a150e4c7c1ab021f369fbf21e0",null,y),(0,a.createActionProxy)("1f35766a2c7399231db38ff7e71d889523e35320",null,h),(0,a.createActionProxy)("f1c4575f1aa04b0b171265e1a582eaa946f577a8",null,g),(0,a.createActionProxy)("1d7956b46734ac5762684d2906bb4ecb9e7afc96",null,_),(0,a.createActionProxy)("4a2cab8d48c7ab565dc194d925837c9af8e41d45",null,k),(0,a.createActionProxy)("45296063453c47b2d59b262faee8cdb4b9615201",null,x),(0,a.createActionProxy)("b67d2b8528a174e713442eac3b93e4e40ddf2151",null,N),(0,a.createActionProxy)("d016c8e248949cf0e0679cea37a599b256564949",null,T),(0,a.createActionProxy)("23d258b4a0ed2cd54c2684f72dd9708f858897ed",null,A),(0,a.createActionProxy)("453834eaf571f615d95d1dc2663c8f75db24fe49",null,q),(0,a.createActionProxy)("d09f14ac4ef39816839c0413ba841e2c9f00f930",null,I),(0,a.createActionProxy)("079e33a7786d357bf8b15353b8dee8f948ebd93b",null,v),(0,a.createActionProxy)("4e60e9c17aa85b5e328f6db15ff1dec244d6afb2",null,E),(0,a.createActionProxy)("847a8ef020990095f03fc54601460ec72777b66c",null,P),(0,a.createActionProxy)("4af80a06816005e931cd7f0ead5a1e93455a28fc",null,z),(0,a.createActionProxy)("05748815d7a50bb0da1dd63e2e666ca8430be215",null,D),(0,a.createActionProxy)("fca7d3ede7a1acca1350701808fdd80e09ceec6e",null,U)},94825:(e,t,r)=>{r.d(t,{collaborators:()=>i});var a=r(64808),l=r(7893),o=r(44806);let n=(0,a.pgTable)("workspaces",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),createdAt:(0,a.timestamp)("created_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),workspaceOwner:(0,a.uuid)("workspace_owner").notNull(),title:(0,a.text)("title").notNull(),iconId:(0,a.text)("icon_id").notNull(),data:(0,a.text)("data"),inTrash:(0,a.text)("in_Trash"),logo:(0,a.text)("logo"),bannerUrl:(0,a.text)("banner_url")}),d=(0,a.pgTable)("folders",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),createdAt:(0,a.timestamp)("created_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),title:(0,a.text)("title").notNull(),iconId:(0,a.text)("icon_id").notNull(),data:(0,a.text)("data"),inTrash:(0,a.text)("in_Trash"),bannerUrl:(0,a.text)("banner_url"),workspaceId:(0,a.uuid)("workspace_id").notNull().references(()=>n.id,{onDelete:"cascade"})});(0,a.pgTable)("files",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),createdAt:(0,a.timestamp)("created_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),title:(0,a.text)("title").notNull(),iconId:(0,a.text)("icon_id").notNull(),data:(0,a.text)("data"),inTrash:(0,a.text)("in_Trash"),bannerUrl:(0,a.text)("banner_url"),workspaceId:(0,a.uuid)("workspace_id").notNull().references(()=>n.id,{onDelete:"cascade"}),folderId:(0,a.uuid)("folder_id").notNull().references(()=>d.id,{onDelete:"cascade"})}),(0,a.pgTable)("subscriptions",{id:(0,a.text)("id").primaryKey().notNull(),userId:(0,a.uuid)("user_id").notNull(),status:(0,l.subscriptionStatus)("status"),metadata:(0,a.jsonb)("metadata"),priceId:(0,a.text)("price_id").references(()=>l.prices.id),quantity:(0,a.integer)("quantity"),cancelAtPeriodEnd:(0,a.boolean)("cancel_at_period_end"),created:(0,a.timestamp)("created",{withTimezone:!0,mode:"string"}).default(o.sql`now()`).notNull(),currentPeriodStart:(0,a.timestamp)("current_period_start",{withTimezone:!0,mode:"string"}).default(o.sql`now()`).notNull(),currentPeriodEnd:(0,a.timestamp)("current_period_end",{withTimezone:!0,mode:"string"}).default(o.sql`now()`).notNull(),endedAt:(0,a.timestamp)("ended_at",{withTimezone:!0,mode:"string"}).default(o.sql`now()`),cancelAt:(0,a.timestamp)("cancel_at",{withTimezone:!0,mode:"string"}).default(o.sql`now()`),canceledAt:(0,a.timestamp)("canceled_at",{withTimezone:!0,mode:"string"}).default(o.sql`now()`),trialStart:(0,a.timestamp)("trial_start",{withTimezone:!0,mode:"string"}).default(o.sql`now()`),trialEnd:(0,a.timestamp)("trial_end",{withTimezone:!0,mode:"string"}).default(o.sql`now()`)});let i=(0,a.pgTable)("collaborators",{id:(0,a.uuid)("id").defaultRandom().primaryKey().notNull(),workspaceId:(0,a.uuid)("workspace_id").notNull().references(()=>n.id,{onDelete:"cascade"}),cancelAt:(0,a.timestamp)("cancel_at",{withTimezone:!0,mode:"string"}).defaultNow().notNull(),userId:(0,a.uuid)("user_id").notNull().references(()=>l.users.id,{onDelete:"cascade"})});(0,o.relations)(l.products,({many:e})=>({prices:e(l.prices)})),(0,o.relations)(l.prices,({one:e})=>({product:e(l.products,{fields:[l.prices.productId],references:[l.products.id]})}))}};