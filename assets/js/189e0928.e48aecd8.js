"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"JavaScript\u76f8\u5173/instanceof\u548ctypeof\u5224\u65ad\u7c7b\u578b",id:"JavaScript\u76f8\u5173/instanceof\u548ctypeof\u5224\u65ad\u7c7b\u578b",title:"instanceof\u548ctypeof\u5224\u65ad\u7c7b\u578b",description:"typeof\u64cd\u4f5c\u7b26",source:"@site/docs/JavaScript\u76f8\u5173/1. instanceof\u548ctypeof\u5224\u65ad\u7c7b\u578b.md",sourceDirName:"JavaScript\u76f8\u5173",slug:"/JavaScript\u76f8\u5173/instanceof\u548ctypeof\u5224\u65ad\u7c7b\u578b",permalink:"/JavaScript\u76f8\u5173/instanceof\u548ctypeof\u5224\u65ad\u7c7b\u578b",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"blogSidebar",previous:{title:"Git\u591a\u5206\u652f\u7ba1\u7406",permalink:"/Git/Git\u591a\u5206\u652f\u7ba1\u7406"},next:{title:"React-Router\u8def\u7531\u7ba1\u7406",permalink:"/React\u53ca\u5176\u6280\u672f\u6808/React-Router/React-Router\u8def\u7531\u7ba1\u7406"}},p={},c=[{value:"typeof\u64cd\u4f5c\u7b26",id:"typeof\u64cd\u4f5c\u7b26",level:3},{value:"\u8fd4\u56de\u503c\u8868",id:"\u8fd4\u56de\u503c\u8868",level:3},{value:"instanceof\u64cd\u4f5c\u7b26",id:"instanceof\u64cd\u4f5c\u7b26",level:3},{value:"\u4e0b\u9762\u662finstanceof\u7684\u4e00\u4e9b\u64cd\u4f5c\u65b9\u6cd5\u548c\u7ed3\u679c",id:"\u4e0b\u9762\u662finstanceof\u7684\u4e00\u4e9b\u64cd\u4f5c\u65b9\u6cd5\u548c\u7ed3\u679c",level:4},{value:"\u62a5\u9519\u6761\u4ef6",id:"\u62a5\u9519\u6761\u4ef6",level:4},{value:"\u8fd4\u56de\u503c\u7ed3\u679c",id:"\u8fd4\u56de\u503c\u7ed3\u679c",level:4}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"typeof\u64cd\u4f5c\u7b26"},"typeof\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://262.ecma-international.org/12.0/#sec-type-conversion"},"Ecmascript 2021 - the typeof operator")),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"typeof"),"\u64cd\u4f5c\u7b26\uff0c\u5b83\u4e3b\u8981\u7528\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5224\u65ad\u6570\u636e\u7c7b\u578b"),"\uff0c\u800c\u4e0d\u662f\u50cfinstanceof\u5224\u65ad\u539f\u578b\u5bf9\u8c61\u7b49\u7b49\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5b83\u662f\u4e00\u4e2a\u4e00\u5143\u8868\u8fbe\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"typeof target"),"\u5c31\u7528\u6765\u5f97\u5230target\u7684\u7c7b\u578b\u7ed3\u679c\uff0c\u7ed3\u679c\u5982\u4e0b\u9762\u7684\u8fd4\u56de\u503c\u8868\u3002")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u8868"},"\u8fd4\u56de\u503c\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type of val"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},'"undefined"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},'"object"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"boolean"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},'"number"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'"string"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},'"symbol"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null},'"bigint"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object (does not implement [","[Call]","])"),(0,r.kt)("td",{parentName:"tr",align:null},'"object"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object (implements [","[Call]","])"),(0,r.kt)("td",{parentName:"tr",align:null},'"function"')))),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff0cjs\u53ea\u4f1a\u901a\u8fc7\u5224\u65ad\u5b83\u7684\u539f\u578b\u94fe\u4e0a\u662f\u5426\u5b9e\u73b0\u4e86[","[Call]","]\u8fd9\u4e2a\u6807\u8bb0\u6765\u51b3\u5b9a\u662f\u5426\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"function"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"\u3002\u90a3\u4e48\u533a\u5206call\u7684\u65b9\u6cd5\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"\u662f\u5426\u6709call\u8fd9\u4e2a\u51fd\u6570\uff08\u6216\u8005\u53ef\u4ee5\u7528()\u6765\u8fdb\u884c\u8c03\u7528\uff09")),(0,r.kt)("h3",{id:"instanceof\u64cd\u4f5c\u7b26"},"instanceof\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://262.ecma-international.org/12.0/#sec-instanceofoperator"},"Ecmascript 2021 - the instanceof operator")),(0,r.kt)("p",null,"\u6839\u636e\u89c4\u8303\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof"),"\u7684\u63cf\u8ff0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof"),"\u63a5\u65362\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"V"),"\uff0c\u4e00\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Target"),"\uff0c(an EcmaScript Launguage value\uff0c\u4e5f\u5c31\u662fjs\u4e2d\u7684\u4e00\u4e2a\u503c)\u3002\n",(0,r.kt)("strong",{parentName:"p"},"instanceof\u7684\u4f7f\u7528\u65b9\u6cd5\u662f ",(0,r.kt)("inlineCode",{parentName:"strong"},"T instanceof Target"),"\uff0c\u5f97\u5230\u4e00\u4e2a\u8fd4\u56de\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"strong"},"true"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"strong"},"false"))),(0,r.kt)("h4",{id:"\u4e0b\u9762\u662finstanceof\u7684\u4e00\u4e9b\u64cd\u4f5c\u65b9\u6cd5\u548c\u7ed3\u679c"},"\u4e0b\u9762\u662finstanceof\u7684\u4e00\u4e9b\u64cd\u4f5c\u65b9\u6cd5\u548c\u7ed3\u679c"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"If Type(target) is not Object, throw a TypeError exception."),(0,r.kt)("li",{parentName:"ol"},"Let instOfHandler be ? GetMethod(target, @@hasInstance)."),(0,r.kt)("li",{parentName:"ol"},"If instOfHandler is not undefined, then\na. Return ! ToBoolean(? Call(instOfHandler, target, \xab V \xbb))."),(0,r.kt)("li",{parentName:"ol"},"If IsCallable(target) is false, throw a TypeError exception."),(0,r.kt)("li",{parentName:"ol"},"Return ? OrdinaryHasInstance(target, V)."))),(0,r.kt)("h4",{id:"\u62a5\u9519\u6761\u4ef6"},"\u62a5\u9519\u6761\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u7b2c\u4e00\u6761\uff0c\u5982\u679ctarget\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u4f1a\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"li"},"TypeError"),"\u7684\u5f02\u5e38\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u7b2c4\u6761\uff0c\u5982\u679ctarget\u4e0d\u662fIsCallable\uff0c\u4e5f\u4f1a\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"li"},"TypeError\u5f02\u5e38"),"\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5173\u4e8e\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"isCallable"),"\uff0c\u4e5f\u5c31\u662f",(0,r.kt)("strong",{parentName:"li"},"\u662f\u5426\u53ef\u8c03\u7528"),"\u3002\u50cfjs\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"Object"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"Function"),"\u7b49\u7b49\uff0c\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u800c\u51fd\u6570\u672c\u8d28\u4e0a\u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5728\u5bf9\u8c61\u4e0a\u9762\u6709\u4e00\u4e9b\u5c5e\u6027\uff0c\u90a3\u4e48\u5728\u8fd9\u4e9b\u5c5e\u6027\u91cc\u9762\u4f1a\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"call"),"\u53ef\u4ee5\u6807\u5fd7\u5b83\u4eec\u662f\u53ef\u8c03\u7528\u7684\u3002\u6240\u4ee5 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Object"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"String"),"\u7b49\u7b49\u4ee5\u53ca\u81ea\u5b9a\u4e49\u7684\u51fd\u6570\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u8fd9\u91cc\u7684target\u3002"))))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u7ed3\u679c"},"\u8fd4\u56de\u503c\u7ed3\u679c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6839\u636e\u7b2c2\u70b9\u53ef\u4ee5\u77e5\u9053\u5982\u679c @@hasInstance \u4e3aundefined\u5219\u76f4\u63a5\u8fd4\u56defalse"),"\uff0c\u5224\u65ad\u662f\u5426\u6709\u8fd9\u6837\u7684\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"@@hasInstance"),"\u5c5e\u6027\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b26\u53f7\u5bf9\u5e94\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"Symbol.hasInstance"),"\u7684\u5c5e\u6027\uff0c\u90a3\u4e48\u9700\u8981\u8bbf\u95ee\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"@@hasInstance"),"\u5c5e\u6027\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const target = new Function;\nconsole.log(target[Symbol.hasInstance])\n//\u8f93\u51faf(...)\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6839\u636e\u7b2c3\u70b9\u77e5\u9053\uff0c\u5982\u679c @@hasInstance\u4e0d\u4e3aundefined\uff0c\u5219\u5c06V\u7684\u503c\u4f20\u5165Target\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"strong"},"@@hasInstance"),"\u6765\u8c03\u7528\uff0c\u5c06\u7ed3\u679c\u8fd4\u56de\u3002"),"\u90a3\u4e48\u5c31\u6709\u4e0b\u9762\u7684\u4ee3\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\u540d\u5b57\u4e3afunc\uff0c\u90a3\u4e48\u5728\u8fd9\u91cc\u6211\u4eec\u77e5\u9053\u8fd9\u4e2afunc\u80af\u5b9a\u662finstanceof Function\u4e3atrue\u7684\uff0c\u90a3\u4e48\u73b0\u5728\u901a\u8fc7@@hasInstance\u6765\u5f97\u5230\u7ed3\u679c\u3002\nfunction func(){}\n\nconsole.log(Function[Symbol.hasInstance](func))\n//\u8f93\u51fatrue\nconsole.log(func instanceof Function)\n//\u8f93\u51fatrue\uff0c\u8fd92\u8005\u662f\u7b49\u4ef7\u7684\n")))}u.isMDXComponent=!0}}]);