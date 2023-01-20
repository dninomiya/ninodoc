"use strict";(self.webpackChunkninodoc=self.webpackChunkninodoc||[]).push([[245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(7462),i=(r(7294),r(3905));const n={},l="\u30a8\u30c7\u30a3\u30bf\u30fc",o={unversionedId:"basic/editor",id:"basic/editor",title:"\u30a8\u30c7\u30a3\u30bf\u30fc",description:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3068\u306f",source:"@site/docs/basic/3-editor.md",sourceDirName:"basic",slug:"/basic/editor",permalink:"/ninodoc/basic/editor",draft:!1,editUrl:"https://github.com/dninomiya/ninodoc/edit/main/docs/basic/3-editor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"basicSidebar",previous:{title:"\u7aef\u672b",permalink:"/ninodoc/basic/device"},next:{title:"\u5468\u8fba\u30c4\u30fc\u30eb",permalink:"/ninodoc/basic/tools"}},s={},u=[{value:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3068\u306f",id:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3068\u306f",level:2},{value:"\u30dd\u30a4\u30f3\u30c8",id:"\u30dd\u30a4\u30f3\u30c8",level:2},{value:"\u30d5\u30a1\u30a4\u30eb\u306f\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3067\u958b\u304f",id:"\u30d5\u30a1\u30a4\u30eb\u306f\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3067\u958b\u304f",level:3},{value:"\u63a8\u5968\u62e1\u5f35\u6a5f\u80fd",id:"\u63a8\u5968\u62e1\u5f35\u6a5f\u80fd",level:2},{value:"Web \u7cfb",id:"web-\u7cfb",level:3},{value:"\u30a2\u30d7\u30ea\uff08Flutter\uff09\u7cfb",id:"\u30a2\u30d7\u30eaflutter\u7cfb",level:3},{value:"\u305d\u306e\u4ed6",id:"\u305d\u306e\u4ed6",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u30a8\u30c7\u30a3\u30bf\u30fc"},"\u30a8\u30c7\u30a3\u30bf\u30fc"),(0,i.kt)("h2",{id:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3068\u306f"},"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3068\u306f"),(0,i.kt)("p",null,"\u958b\u767a\u306f\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3068\u547c\u3070\u308c\u308b\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u884c\u3044\u307e\u3059\u3002\u3044\u308d\u3044\u308d\u7a2e\u985e\u304c\u3042\u308b\u306e\u3067\u3059\u304c\u73fe\u5728\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/ja-jp/products/visual-studio-code"},"Visual Studio Code")," \u304c\u4e16\u754c\u4e2d\u3067\u5727\u5012\u7684\u306a\u30b7\u30a7\u30a2\u3092\u8a87\u3063\u3066\u3044\u307e\u3059\u3002\u60c5\u5831\u91cf\u3082\u591a\u3044\u306e\u3067\u3053\u308c\u304b\u3089\u958b\u767a\u3092\u59cb\u3081\u308b\u65b9\u306f\u8ff7\u308f\u305a Visual Studio Code \u3092\u9078\u3073\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/csOaPNMDEwg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"\u30dd\u30a4\u30f3\u30c8"},"\u30dd\u30a4\u30f3\u30c8"),(0,i.kt)("h3",{id:"\u30d5\u30a1\u30a4\u30eb\u306f\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3067\u958b\u304f"},"\u30d5\u30a1\u30a4\u30eb\u306f\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3067\u958b\u304f"),(0,i.kt)("p",null,"\u5b9f\u969b\u306e\u958b\u767a\u3067\u306f 100 \u4ee5\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6271\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u76ee\u8996\u3067\u76ee\u7684\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u63a2\u3057\u3066\u958b\u304f\u306e\u306f\u975e\u5e38\u306b\u52b9\u7387\u304c\u60aa\u3044\u306e\u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2318 + P")," \u3067\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u4e00\u90e8\u3092\u5165\u529b\u3057\u3001\u5019\u88dc\u304b\u3089\u9078\u629e\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u76ee\u7684\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u76f4\u611f\u7684\u306b\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u63a8\u5968\u62e1\u5f35\u6a5f\u80fd"},"\u63a8\u5968\u62e1\u5f35\u6a5f\u80fd"),(0,i.kt)("h3",{id:"web-\u7cfb"},"Web \u7cfb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets"},"Next.js snippets")," - Next.js \u306e\u30b9\u30cb\u30da\u30c3\u30c8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"},"Tailwind CSS IntelliSense")," - Tailwind CSS \u306e\u8a18\u8ff0\u3092\u52b9\u7387\u5316"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"},"ES7+ React/Redux/React-Native snippets")," - JavaScript\u3001React \u306e\u8a18\u8ff0\u3092\u52b9\u7387\u5316")),(0,i.kt)("h3",{id:"\u30a2\u30d7\u30eaflutter\u7cfb"},"\u30a2\u30d7\u30ea\uff08Flutter\uff09\u7cfb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter"},"Flutter")," - Flutter \u958b\u767a\u306b\u5fc5\u9808"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"},"Dart")," - Flutter \u958b\u767a\u306b\u5fc5\u9808")),(0,i.kt)("h3",{id:"\u305d\u306e\u4ed6"},"\u305d\u306e\u4ed6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja"},"Japanese Language Pack for Visual Studio Code")," - \u65e5\u672c\u8a9e\u5316"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier - Code formatter")," - \u30b3\u30fc\u30c9\u3092\u6574\u5f62\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=toba.vsfire"},"Firebase")," - Firebase \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30eb\u30fc\u30eb\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github"},"GitHub Pull Requests and Issues")," - \u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089 GitHub Issues \u3084 Pull Request \u3092\u64cd\u4f5c\u53ef\u80fd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils"},"File Utils")," - \u30b3\u30de\u30f3\u30c9\u3067\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\uff08\u79fb\u52d5\uff09\u3001\u524a\u9664\u3001\u8907\u88fd\u304c\u53ef\u80fd\u306b\u306a\u308b")))}p.isMDXComponent=!0}}]);