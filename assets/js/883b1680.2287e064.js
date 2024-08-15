"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=c(n),u=o,g=i["".concat(s,".").concat(u)]||i[u]||d[u]||p;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const p={},a=void 0,l={permalink:"/blog/2023/9/1/ passing props \u963b\u6b62styled-components\u7684props\u7ed1\u5b9a\u5230\u539f\u751fdom\u4e0a",source:"@site/blog/2023-9-1 passing props \u963b\u6b62styled-components\u7684props\u7ed1\u5b9a\u5230\u539f\u751fdom\u4e0a.md",title:" passing props \u963b\u6b62styled-components\u7684props\u7ed1\u5b9a\u5230\u539f\u751fdom\u4e0a",description:"styled-components \u662f\u7528\u4e8e react \u7684\u4e00\u4e2a css in js \u7684\u5e93\u3002",date:"2023-09-01T00:00:00.000Z",formattedDate:"2023\u5e749\u67081\u65e5",tags:[],readingTime:5.695,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:" \u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u6e32\u67d3\u8868\u683c",permalink:"/blog/2023/9/13/ \u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u6e32\u67d3\u8868\u683c"},nextItem:{title:" \u52a8\u6001\u751f\u6210\u81ea\u5b9a\u4e49svg\u7684\u89e3\u51b3\u65b9\u6cd5",permalink:"/blog/2023/8/30/ \u52a8\u6001\u751f\u6210\u81ea\u5b9a\u4e49svg\u7684\u89e3\u51b3\u65b9\u6cd5"}},s={authorsImageUrls:[]},c=[{value:"1. Passing props",id:"1-passing-props",level:2},{value:"2. styled-components \u4e2d\u7684\u53c2\u6570\u4f20\u9012",id:"2-styled-components-\u4e2d\u7684\u53c2\u6570\u4f20\u9012",level:2},{value:"\u7f16\u5199\u7ec4\u4ef6",id:"\u7f16\u5199\u7ec4\u4ef6",level:3},{value:"\u7ec4\u4ef6\u4f20\u53c2",id:"\u7ec4\u4ef6\u4f20\u53c2",level:3},{value:"\u6700\u7ec8\u6e32\u67d3 dom \u7684\u7ed3\u679c",id:"\u6700\u7ec8\u6e32\u67d3-dom-\u7684\u7ed3\u679c",level:3},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:3},{value:"3. \u4e0d\u5e0c\u671b\u88ab\u6ce8\u5165\u5230 dom \u7684 property \u88ab\u6ce8\u5165\uff0c\u6709\u4ec0\u4e48\u5f71\u54cd",id:"3-\u4e0d\u5e0c\u671b\u88ab\u6ce8\u5165\u5230-dom-\u7684-property-\u88ab\u6ce8\u5165\u6709\u4ec0\u4e48\u5f71\u54cd",level:2}],m={toc:c},i="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"styled-components \u662f\u7528\u4e8e react \u7684\u4e00\u4e2a css in js \u7684\u5e93\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a styled-components \u521b\u5efa\u7684\u4e00\u4e2a css in js \u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Styled borderColor={"red"}>{item}</Styled>\n')),(0,o.kt)("h2",{id:"1-passing-props"},"1. Passing props"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zh-hans.react.dev/learn/passing-props-to-a-component"},"React - Passing props")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/basics#passed-props"},"Styled-components - Passed props")),(0,o.kt)("p",null,"\u5728 React \u4e2d\u7684 passing props \u548c styled-components \u7684 passed props\uff0c\u90fd\u662f\u5bf9 props \u4f20\u9012\u7684\u5904\u7406\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6807\u51c6\u7684 html \u6807\u7b7e\u548c JSX \u7684\u6807\u7b7e\uff0c\u4f20\u9012 props \u7684\u65f6\u5019\u9020\u6210\u7684\u7ed3\u679c\u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6807\u51c6\u7684 html \u6807\u7b7e"),"\uff0c\u4f8b\u5982\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"img"),"\u6807\u7b7e\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4f20\u9012\u7684",(0,o.kt)("inlineCode",{parentName:"strong"},"width"),"\u3001",(0,o.kt)("inlineCode",{parentName:"strong"},"height"),"\u751a\u81f3",(0,o.kt)("inlineCode",{parentName:"strong"},"className"),"\uff08className \u662f react \u7b26\u5408 html \u6807\u51c6\u7684\u5c5e\u6027\uff0c\u4f1a\u88ab\u6ce8\u5165\u6210 class\uff09\u90fd\u4f1a\u88ab\u76f4\u63a5\u4f20\u9012\u5230 dom \u4e2d\u3002"),"\u4e5f\u5c31\u662f\u8bf4\u6700\u540e\u5728\u9875\u9762\u4e0a\u68c0\u67e5\u5143\u7d20\u6807\u7b7e\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u8fd9\u4e9b property\u3002\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<img width="100" class="xxx" />\n')),(0,o.kt)("p",null,"\u4f46\u662f\u662f\u4e00\u4e2a React \u7684 JSX \u7ec4\u4ef6\uff0c\u6211\u4eec\u5728\u8fd9\u4e2a\u7ec4\u4ef6\u4e0a\u4f20\u9012 props\uff0c\u8fd9\u4e2a props \u5c31\u662f\u5c5e\u4e8e\u8fd9\u4e2a react \u7684\u7ec4\u4ef6\uff0c\u5e76\u4e0d\u4f1a\u6ce8\u5165\u5230\u4efb\u4f55\u7684 html \u6807\u7b7e\u4e0a\uff0c\u56e0\u4e3a\u8fd9\u5c31\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u3002"),(0,o.kt)("h2",{id:"2-styled-components-\u4e2d\u7684\u53c2\u6570\u4f20\u9012"},"2. styled-components \u4e2d\u7684\u53c2\u6570\u4f20\u9012"),(0,o.kt)("h3",{id:"\u7f16\u5199\u7ec4\u4ef6"},"\u7f16\u5199\u7ec4\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f46\u662f\u5728 styled-components \u4e2d\uff0c\u4f1a\u56e0\u4e3a\u7ec4\u4ef6\u521b\u5efa\u7684\u903b\u8f91\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c\u3002"),"\u6211\u4eec\u4f1a\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"styled.div"),"\u4e4b\u7c7b\u7684\u53bb\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components"),"\u521b\u5efa\u51fa\u4e00\u4e2a React \u7684\u7ec4\u4ef6\uff0c\u4f46\u662f\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4f1a\u5bf9\u8fd9\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u53c2\u6570\u7684\u4f20\u9012\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u8fd9\u53ea\u662f\u5176\u4e2d\u7684\u4e00\u79cd\u4f20\u53c2\u7684\u5199\u6cd5\nconst Component =\n    styled.div <\n    { customColor: string } >\n    (({ customColor }) => {\n        return css`\n            height: 100px;\n            color: ${customColor};\n        `\n    })\n")),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4f20\u53c2"},"\u7ec4\u4ef6\u4f20\u53c2"),(0,o.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u8981\u5bf9\u8fd9\u4e2a\u7ec4\u4ef6\u53ca\u8fdb\u884c\u4f20\u53c2\uff0c\u4f20\u53c2\u7684\u65b9\u5f0f\u662f\u548c React \u4e00\u6837\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const ReactComponent:React.FC<...> = () => {\n\n    return (\n        <Component customColor={"red"}/>\n    )\n}\n')),(0,o.kt)("h3",{id:"\u6700\u7ec8\u6e32\u67d3-dom-\u7684\u7ed3\u679c"},"\u6700\u7ec8\u6e32\u67d3 dom \u7684\u7ed3\u679c"),(0,o.kt)("p",null,'\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u8fdb\u884c\u4f20\u53c2\u4e4b\u540e\uff0c\u5728\u9875\u9762\u4e2d\u68c0\u67e5\u5143\u7d20\u4f1a\u53d1\u73b0\uff0cdiv \u6807\u7b7e\u4e0a\u9762\u51fa\u73b0\u4e86\u4e00\u4e2a customcolor="red"\uff08\u6ce8\u610f \u5927\u9a7c\u5cf0\u88ab\u6539\u6210\u4e86\u5168\u5c0f\u5199\u3002'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="sc-xxxx" customcolor="red"></div>\n')),(0,o.kt)("p",null,"styled-components \u8fd8\u4f1a\u8fdb\u884c\u4e0b\u9762\u7684\u4e00\u4e2a\u63d0\u793a\u7684\u8b66\u544a\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"React does not recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},"customColor")," prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase ",(0,o.kt)("inlineCode",{parentName:"p"},"customcolor")," instead. If you accidentally passed it from a parent component, remove it from the DOM element.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6211\u4eec\u7684\u9884\u671f\u662f\u6700\u7ec8\u5728\u9875\u9762\u4e2d\u6e32\u67d3\u7ed3\u679c\u5982\u4e0b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="sc-xxxx" />\n')),(0,o.kt)("p",null,"\u663e\u7136\u5b9e\u9645\u7ed3\u679c\u548c\u6211\u4eec\u7684\u9884\u671f\u7ed3\u679c\u4e4b\u95f4\uff0c\u5dee\u4e86\u4e00\u4e2a\u4e0d\u5e0c\u671b\u88ab\u6ce8\u5165\u5230 dom \u6807\u7b7e\u4e0a\u9762\u7684 property\u3002\u8fd9\u8981\u6839\u636e styled-components \u7684 props \u7684 passing \u903b\u8f91\u6765\u5904\u7406\uff0c\u6839\u636e\u6587\u6863\u4e2d\u7684\u8bf4\u6cd5\uff0c\u4efb\u4f55\u4f7f\u7528\u5728 styled-components \u7684\u7ec4\u4ef6\u4e0a\u9762\u7684 property \u90fd\u4f1a\u88ab\u6ce8\u5165\u5230 html \u4e2d\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u6211\u4eec\u4e0d\u60f3\u88ab\u6ce8\u5165\uff0c\u8981\u5728\u5c5e\u6027\u524d\u9762\u52a0$\u6765\u5c4f\u853d\u6389"),"\u3002\u6240\u4ee5\u6700\u7ec8\u7684\u89e3\u51b3\u65b9\u6cd5\u662f\u5982\u4e0b"),(0,o.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Component =\n    styled.div <\n    { $customColor: string } >\n    (({ $customColor }) => {\n        return css`\n            height: 100px;\n            color: ${customColor};\n        `\n    })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const ReactComponent:React.FC<...> = () => {\n    return (\n        <Component $customColor={"red"}/>\n    )\n}\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u6700\u540e\u6e32\u67d3 dom \u7684\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="sc-xxxx" />\n')),(0,o.kt)("h2",{id:"3-\u4e0d\u5e0c\u671b\u88ab\u6ce8\u5165\u5230-dom-\u7684-property-\u88ab\u6ce8\u5165\u6709\u4ec0\u4e48\u5f71\u54cd"},"3. \u4e0d\u5e0c\u671b\u88ab\u6ce8\u5165\u5230 dom \u7684 property \u88ab\u6ce8\u5165\uff0c\u6709\u4ec0\u4e48\u5f71\u54cd"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u7b26\u5408\u89c4\u8303\u7684 dom \u7684 properties \u90fd\u662f\u5168\u5c0f\u5199\u7684\uff0c\u6709\u4e9b\u4f1a\u7528 \u6760 \u6765\u8fde\u63a5\u3002\u90a3\u4e48\u81f3\u5c11\u5728 React \u7684\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u4e0d\u662f\u89c4\u8303\u7684 property\uff0c\u90fd\u4f1a\u88ab\u8ba4\u4e3a\u662f\u5bf9\u7ec4\u4ef6\u7684\u4f20\u53c2\uff0c\u6240\u4ee5\u539f\u751f\u7684 React \u7684\u7ec4\u4ef6\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0c\u5f88\u591a\u60c5\u51b5\u4e0b\u662f\u6ca1\u6709\u4ec0\u4e48\u5f71\u54cd\u7684\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u5728 styled-components \u4e2d\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u88ab\u6ce8\u5165\u5230 html \u4e2d\u7684\u5c5e\u6027\u88ab\u6ce8\u5165\u4e0a\u53bb\u4e86\uff0c\u5e76\u4e14\u672c\u6765\u5e94\u8be5\u662f\u5927\u9a7c\u5cf0\u7684\uff0c\u6700\u540e\u53d8\u6210\u4e86\u5c0f\u9a7c\u5cf0\uff0c\u8fd9\u6837\u5728 dom \u5143\u7d20\u68c0\u67e5\u4e0a\u4f1a\u9020\u6210\u4e00\u5b9a\u7684\u8bef\u89e3\u3002"),(0,o.kt)("p",null,"\u800c\u6211\u8bb0\u5f55\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\uff0c\u5728\u6211\u6709\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u7684\u65f6\u5019\uff0c\u751f\u6210\u7684\u5feb\u7167\u4e0a\u9762\u7684\u6807\u7b7e\u4e0a\u7a81\u7136\u751f\u6210\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a property\uff0c\u63a7\u5236\u53f0\u8fd8\u629b\u51fa\u4e86\u5927\u91cf\u7684\u8b66\u544a\uff0c\u4e5f\u5c31\u662f\u4e0a\u9762\u63d0\u5230\u7684\u90a3\u4e2a\u8b66\u544a\u4fe1\u606f\u3002\u5f53\u65f6\u6211\u5e76\u6ca1\u6709\u610f\u8bc6\u5230\u8fd9\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"passing props"),"\u6982\u5ff5\u7684\u5b58\u5728\uff0c\u6211\u8ba4\u4e3a\u53ea\u6709\u6807\u51c6\u7684 property \u624d\u4f1a\u88ab\u6ce8\u5165\u5230 html \u6807\u7b7e\u4e0a\uff0c\u5176\u4ed6\u4e0d\u7b26\u5408\u6807\u51c6\u7684\u5e76\u4e0d\u4f1a\u88ab\u6ce8\u5165\u5230 dom \u4e0a\uff0c\u800c\u662f\u88ab\u5f53\u4f5c\u662f\u7ec4\u4ef6\u7684\u4f20\u53c2\uff0c\u4f46\u5b9e\u9645\u5e76\u4e0d\u662f\u8fd9\u6837\u3002"),(0,o.kt)("p",null,"\u6211\u60f3\u4e86\u4e00\u4e0b\uff0c\u6211\u5f53\u65f6\u4fee\u6539\u4e86\u4e00\u4e9b\u7ec4\u4ef6\u7684\u4f20\u53c2\u65b9\u5f0f\uff0c\u5c31\u9020\u6210\u4e86\u8fd9\u6837\u7684\u7ed3\u679c\uff0c\u6211\u89c9\u5f97",(0,o.kt)("strong",{parentName:"p"},"\u5728\u7075\u6d3b\u7684 React \u7ec4\u4ef6\u4f20\u53c2\u65b9\u5f0f\u4e0a\uff0c\u6709\u7684\u65b9\u5f0f\u4f1a\u9020\u6210\u8fd9\u6837\u7684\u7ed3\u679c\uff0c\u800c\u6709\u7684\u4e0d\u4f1a"),"\uff0c\u8fd9\u662f\u5e76\u4e0d\u5e0c\u671b\u51fa\u73b0\u7684\uff0c\u6240\u4ee5\u6700\u597d\u7684\u662f\u6839\u636e\u5b98\u65b9\u7684\u6587\u6863\u7528$\u7b26\u53f7\u6765\u786e\u5b9a\u6027\u7684\u5c06 property \u6392\u9664\u6389\u3002"))}d.isMDXComponent=!0}}]);