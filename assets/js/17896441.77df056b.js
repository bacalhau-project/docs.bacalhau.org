(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7918],{1310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});n(7294);var s=n(6010),a=n(5281),o=n(3438),i=n(8596),l=n(9960),c=n(5999),r=n(4996),d=n(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.Z,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function b(){const e=(0,o.s1)(),t=(0,i.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(a.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(f,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},8032:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Lt});var s=n(7294),a=n(833),o=n(902),i=n(5893);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(6010),m=n(7524),h=n(4966);function p(){const{metadata:e}=r();return(0,i.jsx)(h.Z,{previous:e.previous,next:e.next})}var f=n(3120),x=n(4364),b=n(5281),g=n(5999);function j(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function v(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,i.jsxs)("span",{className:b.k.common.lastUpdated,children:[(0,i.jsx)(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(j,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,i.jsx)(v,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var C=n(9960);const k={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(k.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function y(e){let{editUrl:t}=e;return(0,i.jsxs)(C.Z,{to:t,className:b.k.common.editThisPage,children:[(0,i.jsx)(L,{}),(0,i.jsx)(g.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const _={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function B(e){let{permalink:t,label:n,count:s}=e;return(0,i.jsxs)(C.Z,{href:t,className:(0,u.Z)(_.tag,s?_.tagWithCount:_.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const w={tags:"tags_jXut",tag:"tag_QGVx"};function Z(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(g.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.Z)(w.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:w.tag,children:(0,i.jsx)(B,{label:t,permalink:n})},n)}))})]})}const T={lastUpdated:"lastUpdated_vwxv"};function E(e){return(0,i.jsx)("div",{className:(0,u.Z)(b.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(Z,{...e})})})}function H(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,u.Z)(b.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(y,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col",T.lastUpdated),children:(n||s)&&(0,i.jsx)(N,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function A(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,l=o.length>0,c=!!(t||n||a);return l||c?(0,i.jsxs)("footer",{className:(0,u.Z)(b.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,i.jsx)(E,{tags:o}),c&&(0,i.jsx)(H,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var I=n(6043),M=n(6668);function S(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function U(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=U({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function z(e){const t=e.getBoundingClientRect();return t.top===t.bottom?z(e.parentNode):t}function V(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>z(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(z(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function R(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,M.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function O(e){const t=(0,s.useRef)(void 0),n=R();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=V(l,{anchorTopOffset:n.current}),r=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function P(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(C.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(P,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const $=s.memo(P);function D(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c,...r}=e;const d=(0,M.L)(),u=l??d.tableOfContents.minHeadingLevel,m=c??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>U({toc:S(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return O((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)($,{toc:h,className:n,linkClassName:a,...r})}const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function F(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,I.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(q.tocCollapsible,!o&&q.tocCollapsibleExpanded,n),children:[(0,i.jsx)(F,{collapsed:o,onClick:l}),(0,i.jsx)(I.z,{lazy:!0,className:q.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(D,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const J={tocMobile:"tocMobile_ITEo"};function Y(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(b.k.docs.docTocMobile,J.tocMobile)})}const Q={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},X="table-of-contents__link toc-highlight",K="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.Z)(Q.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(D,{...n,linkClassName:X,linkActiveClassName:K})})}function te(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var ne=n(2503),se=n(1151),ae=n(5742),oe=n(2389),ie=n(2949);function le(){const{prism:e}=(0,M.L)(),{colorMode:t}=(0,ie.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var ce=n(7594),re=n.n(ce);const de=/title=(?<quote>["'])(?<title>.*?)\1/,ue=/\{(?<range>[\d,-]+)\}/,me={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function he(e,t){const n=e.map((e=>{const{start:n,end:s}=me[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function pe(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&ue.test(o)){const e=o.match(ue).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=re()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return he(["js","jsBlock"],t);case"jsx":case"tsx":return he(["js","jsBlock","jsx"],t);case"html":return he(["js","jsBlock","html"],t);case"python":case"py":case"bash":return he(["bash"],t);case"markdown":case"md":return he(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return he(["tex"],t);case"lua":case"haskell":case"sql":return he(["lua"],t);case"wasm":return he(["wasm"],t);default:return he(Object.keys(me).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,a),l=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<l.length;){const e=l[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?c[r[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),l.splice(h,1)}n=l.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;re()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const fe={codeBlockContainer:"codeBlockContainer_Ckt0"};function xe(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(le());return(0,i.jsx)(t,{...n,style:s,className:(0,u.Z)(n.className,fe.codeBlockContainer,b.k.common.codeBlock)})}const be={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function ge(e){let{children:t,className:n}=e;return(0,i.jsx)(xe,{as:"pre",tabIndex:0,className:(0,u.Z)(be.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:be.codeBlockLines,children:t})})}const je={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ve(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=je);const a=(0,o.zX)(t),i=(0,o.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Ne=n(4798);const Ce={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function ke(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,u.Z)(n,s&&Ce.codeLine)}),c=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e,key:t})},t)));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Ce.codeLineNumber}),(0,i.jsx)("span",{className:Ce.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}function Le(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function ye(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const _e={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Be(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,g.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,g.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,g.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,_e.copyButton,a&&_e.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:_e.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(Le,{className:_e.copyButtonIcon}),(0,i.jsx)(ye,{className:_e.copyButtonSuccessIcon})]})})}function we(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const Ze={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Te(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,g.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,s&&Ze.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,i.jsx)(we,{className:Ze.wordWrapButtonIcon,"aria-hidden":"true"})})}function Ee(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:l,language:c}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,M.L)(),m=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=le(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return ve(o,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),f=function(e){return e?.match(de)?.groups.title??""}(a)||o,{lineClassNames:x,code:b}=pe(t,{metastring:a,language:m,magicComments:d}),g=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,i.jsxs)(xe,{as:"div",className:(0,u.Z)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,i.jsx)("div",{className:be.codeBlockTitle,children:f}),(0,i.jsxs)("div",{className:be.codeBlockContent,children:[(0,i.jsx)(Ne.y$,{theme:h,code:b,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.Z)(t,be.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.Z)(be.codeBlockLines,g&&be.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(ke,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:g},t)))})})}}),(0,i.jsxs)("div",{className:be.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,i.jsx)(Te,{className:be.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,i.jsx)(Be,{className:be.codeButton,code:b})]})]})]})}function He(e){let{children:t,...n}=e;const a=(0,oe.Z)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?Ee:ge;return(0,i.jsx)(l,{...n,children:o},String(a))}const Ae={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Ie(e){return!!e&&("SUMMARY"===e.tagName||Ie(e.parentElement))}function Me(e,t){return!!e&&(e===t||Me(e.parentElement,t))}function Se(e){let{summary:t,children:n,...a}=e;const o=(0,oe.Z)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:r}=(0,I.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":c,className:(0,u.Z)(Ae.details,o&&Ae.isBrowser,a.className),onMouseDown:e=>{Ie(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ie(t)&&Me(t,l.current)&&(e.preventDefault(),c?(r(!1),m(!0)):r(!0))},children:[h,(0,i.jsx)(I.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),m(!e)},children:(0,i.jsx)("div",{className:Ae.collapsibleContent,children:n})})]})}const Ue={details:"details_b_Ee"},ze="alert alert--info";function Ve(e){let{...t}=e;return(0,i.jsx)(Se,{...t,className:(0,u.Z)(ze,Ue.details,t.className)})}function Re(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(Ve,{...e,summary:n,children:a})}function Oe(e){return(0,i.jsx)(ne.Z,{...e})}const Pe={containsTaskList:"containsTaskList_mC6p"};function $e(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&Pe.containsTaskList)}const De={img:"img_ev3q"};function We(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const Fe={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function qe(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,u.Z)(b.k.common.admonition,b.k.common.admonitionType(t),Fe.admonition,n),children:s})}function Ge(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:Fe.admonitionHeading,children:[(0,i.jsx)("span",{className:Fe.admonitionIcon,children:t}),n]})}function Je(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:Fe.admonitionContent,children:t}):null}function Ye(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,i.jsxs)(qe,{type:t,className:o,children:[(0,i.jsx)(Ge,{title:s,icon:n}),(0,i.jsx)(Je,{children:a})]})}function Qe(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const Xe={icon:(0,i.jsx)(Qe,{}),title:(0,i.jsx)(g.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Ke(e){return(0,i.jsx)(Ye,{...Xe,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}function et(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const tt={icon:(0,i.jsx)(et,{}),title:(0,i.jsx)(g.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function nt(e){return(0,i.jsx)(Ye,{...tt,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}function st(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const at={icon:(0,i.jsx)(st,{}),title:(0,i.jsx)(g.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function ot(e){return(0,i.jsx)(Ye,{...at,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function it(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const lt={icon:(0,i.jsx)(it,{}),title:(0,i.jsx)(g.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function ct(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const rt={icon:(0,i.jsx)(ct,{}),title:(0,i.jsx)(g.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const dt={icon:(0,i.jsx)(it,{}),title:(0,i.jsx)(g.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const ut={...{note:Ke,tip:nt,info:ot,warning:function(e){return(0,i.jsx)(Ye,{...lt,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(Ye,{...rt,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(Ke,{title:"secondary",...e}),important:e=>(0,i.jsx)(ot,{title:"important",...e}),success:e=>(0,i.jsx)(nt,{title:"success",...e}),caution:function(e){return(0,i.jsx)(Ye,{...dt,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}}};function mt(e){const t=We(e),n=(s=t.type,ut[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),ut.info));var s;return(0,i.jsx)(n,{...t})}const ht={Head:ae.Z,details:Re,Details:Re,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,i.jsx)("code",{...e}):(0,i.jsx)(He,{...e})},a:function(e){return(0,i.jsx)(C.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:$e(e.className)})},img:function(e){return(0,i.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,De.img))});var t},h1:e=>(0,i.jsx)(Oe,{as:"h1",...e}),h2:e=>(0,i.jsx)(Oe,{as:"h2",...e}),h3:e=>(0,i.jsx)(Oe,{as:"h3",...e}),h4:e=>(0,i.jsx)(Oe,{as:"h4",...e}),h5:e=>(0,i.jsx)(Oe,{as:"h5",...e}),h6:e=>(0,i.jsx)(Oe,{as:"h6",...e}),admonition:mt,mermaid:()=>null};function pt(e){let{children:t}=e;return(0,i.jsx)(se.Z,{components:ht,children:t})}function ft(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(b.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ne.Z,{as:"h1",children:n})}),(0,i.jsx)(pt,{children:t})]})}var xt=n(1310);function bt(){return(0,i.jsx)(g.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function gt(){return(0,i.jsx)(g.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function jt(){return(0,i.jsx)(ae.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function vt(e){let{className:t}=e;return(0,i.jsx)(mt,{type:"caution",title:(0,i.jsx)(bt,{}),className:(0,u.Z)(t,b.k.common.unlistedBanner),children:(0,i.jsx)(gt,{})})}function Nt(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(jt,{}),(0,i.jsx)(vt,{...e})]})}const Ct={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function kt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(Y,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(te,{})}}(),{metadata:{unlisted:s}}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&Ct.docItemCol),children:[s&&(0,i.jsx)(Nt,{}),(0,i.jsx)(f.Z,{}),(0,i.jsxs)("div",{className:Ct.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(xt.Z,{}),(0,i.jsx)(x.Z,{}),n.mobile,(0,i.jsx)(ft,{children:t}),(0,i.jsx)(A,{})]}),(0,i.jsx)(p,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Lt(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(kt,{children:(0,i.jsx)(n,{})})]})})}},4966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(7294);var s=n(5999),a=n(6010),o=n(9960),i=n(5893);function l(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,i.jsxs)(o.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function c(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(l,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(l,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(7294);var s=n(6010),a=n(5999),o=n(5281),i=n(4477),l=n(5893);function c(e){let{className:t}=e;const n=(0,i.E)();return n.badge?(0,l.jsx)("span",{className:(0,s.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});n(7294);var s=n(6010),a=n(2263),o=n(9960),i=n(5999),l=n(143),c=n(5281),r=n(373),d=n(4477),u=n(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.Z,{to:n,onClick:s,children:(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.Z)(),{pluginId:i}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,r.J)(i),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,l.Jo)(i),x=m??(b=f).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,s.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:f.label,to:x.path,onClick:()=>d(f.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(f,{className:t,versionMetadata:n}):null}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,a:()=>i});var s=n(7294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);