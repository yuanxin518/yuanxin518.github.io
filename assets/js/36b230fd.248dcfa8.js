"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l="contentEditable \u7684 div \u5143\u7d20\uff0c\u8ba9\u805a\u7126\u65f6\u5149\u6807\u5230\u6700\u540e",i={permalink:"/blog/2023/10/9/ contentEditable\u8ba9\u5149\u6807\u5230\u8f93\u5165\u6846\u6700\u540e",source:"@site/blog/2023-10-9 contentEditable\u8ba9\u5149\u6807\u5230\u8f93\u5165\u6846\u6700\u540e.md",title:"contentEditable \u7684 div \u5143\u7d20\uff0c\u8ba9\u805a\u7126\u65f6\u5149\u6807\u5230\u6700\u540e",description:"\u8fd9\u662f\u5728React\u4e2d\u5199\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u6240\u4ee5\u7528\u4e86ref\u6765\u83b7\u53d6input\u3002",date:"2023-10-09T00:00:00.000Z",formattedDate:"2023\u5e7410\u67089\u65e5",tags:[],readingTime:.645,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"netlify \u90e8\u7f72\u8b66\u544a\u5bfc\u81f4 build \u4e2d\u65ad",permalink:"/blog/2023/10/10/ netlify\u90e8\u7f72\u8b66\u544a\u5bfc\u81f4build\u4e2d\u65ad"},nextItem:{title:" \u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u6e32\u67d3\u8868\u683c",permalink:"/blog/2023/9/13/ \u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u6e32\u67d3\u8868\u683c"}},c={authorsImageUrls:[]},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function focus() {\n    const input = inputItemRef.current\n    if (!input) return\n\n    input.innerText = initialValue === null ? "" : initialValue\n    const range = window.getSelection()\n    range?.selectAllChildren(input)\n    range?.collapseToEnd()\n}\n')),(0,o.kt)("p",null,"\u8fd9\u662f\u5728React\u4e2d\u5199\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u6240\u4ee5\u7528\u4e86ref\u6765\u83b7\u53d6input\u3002  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5176\u4e2d\u8ba9\u5149\u6807\u8dd1\u5230\u6700\u540e\u7684\u5173\u952e\u662f\uff0c",(0,o.kt)("inlineCode",{parentName:"strong"},"window.getSelection()"),"\u7684\u51fd\u6570\uff0c\u901a\u8fc7range\u6765\u627e\u5230\u6211\u4eec\u9700\u8981\u79fb\u52a8\u5149\u6807\u7684\u5143\u7d20\uff0c\u7136\u540e\u8c03\u7528collapseToEnd\u5c31\u53ef\u4ee5\u8ba9\u5149\u6807\u8dd1\u5230\u6700\u540e\u3002")),(0,o.kt)("p",null,"contentEditable\u548cinput\u5e76\u4e0d\u76f8\u540c\uff0c\u5982\u679c\u662finput\u5143\u7d20\uff0c\u53ef\u4ee5\u53bb\u8c03\u7528\u81ea\u8eab\u5143\u7d20\u4e0a\u9762\u7684\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"selectionSetSelectionRange"),"\u6765\u8bbe\u5b9a\u3002"))}f.isMDXComponent=!0}}]);