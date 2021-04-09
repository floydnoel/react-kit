(this["webpackJsonp@floydnoel/react-kit"]=this["webpackJsonp@floydnoel/react-kit"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(21),i=n.n(r),o=(n(31),n(4)),s=n(16),d=n.n(s),l=n(22),j=n(13),b=n(8),h=n(23),u=n(26),O=function(e){var t,n=e.content,a=e.section,c=0===a.indexOf("#")?a.slice(1):a;return(null===(t=function(e){var t={},n="";return e.split("\n\n").forEach((function(e){if(0===e.indexOf("#")){var a=e.toLowerCase().split(" ").slice(1).join("-");n=a,t[a]=[e]}else n&&(t[n]=[].concat(Object(u.a)(t[n]),[e]))})),t}(n)[c])||void 0===t?void 0:t.join("\n\n"))||""},m=n(1),x=function(e){var t=e.markdown,n=e.markdownUrl,c=e.link,r=void 0===c?w:c,i=e.section,s=e.children,u=void 0===s?t:s,x=e.initializingMessage,f=e.fetchingMessage,p=e.noMarkdownMessage,g=Object(b.a)(e,["markdown","markdownUrl","link","section","children","initializingMessage","fetchingMessage","noMarkdownMessage"]),v=Object(a.useState)(u||x),k=Object(j.a)(v,2),y=k[0],M=k[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.text();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n&&(f&&M(f),e({url:n}).then((function(e){if(i){var t=O({content:e,section:i});M(t||p)}else 0===e.indexOf("<!DOCTYPE html>")?M(p):M(e)})))}),[f,p,n,i]),u||n?Object(m.jsx)(h.a,Object(o.a)(Object(o.a)({},Object(o.a)({options:{overrides:{a:{component:r}}}},g)),{},{children:y})):p};x.defaultProps={initializingMessage:"",fetchingMessage:"",noMarkdownMessage:""};var f=x,p=function(e){var t=e.value,n=e.onChange,a=e.onChangeValue,c=e.children,r=e.style,i=Object(b.a)(e,["value","onChange","onChangeValue","children","style"]);return Object(m.jsx)("input",Object(o.a)({},Object(o.a)({type:"text",value:t||c,style:Object(o.a)({width:"100%"},r),onChange:function(e){n&&n(e),a&&a(e.target.value)}},i)))},g=n(17),v=n(2),k=function(e){var t=e.basename,n=void 0===t?"/react-kit":t,a=e.children,c=Object(b.a)(e,["basename","children"]);return Object(m.jsx)(g.a,Object(o.a)(Object(o.a)({},Object(o.a)({basename:n},c)),{},{children:a}))},w=function(e){var t=e.href,n=e.to,a=e.children,c=Object(b.a)(e,["href","to","children"]);return Object(m.jsx)(g.b,Object(o.a)(Object(o.a)({},Object(o.a)({to:n||t},c)),{},{children:a}))},y=n.p+"static/media/README.f4d6d74b.md";var M=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)(f,{markdownUrl:y,section:"react-kit"})}),Object(m.jsxs)("p",{children:["[ ",Object(m.jsx)("a",{href:"https://floydnoel.github.io/react-kit/",children:"docs"}),","," ",Object(m.jsx)("a",{href:"https://github.com/floydnoel/react-kit",children:"repo"})," ]"]}),Object(m.jsxs)("div",{style:{textAlign:"left",maxWidth:"800px",margin:"1em auto",padding:"1em"},children:[Object(m.jsx)(f,{markdownUrl:y,section:"about"}),Object(m.jsx)(f,{markdownUrl:y,section:"components"}),Object(m.jsx)(f,{markdownUrl:y,section:"code-conventions"})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n.p+"static/media/readme.b80d57e2.md",U=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[Object(m.jsx)(f,{markdownUrl:E}),Object(m.jsxs)("div",{style:{background:"rgb(246, 248, 250)",textAlign:"left",padding:"1em",maxWidth:"900px",margin:"32px auto"},children:[Object(m.jsx)("h2",{children:"Demo: Load any markdown from a URL here"}),Object(m.jsxs)("div",{children:["Try"," ",Object(m.jsx)("code",{children:"https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md"})]}),Object(m.jsx)(p,{onChangeValue:c,children:n}),Object(m.jsx)("button",{onClick:function(){return c("https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md")},children:"reset"}),Object(m.jsx)(f,{noMarkdownMessage:"Specify a markdown URL to begin",markdownUrl:n})]})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{children:Object(m.jsxs)(v.c,{children:[Object(m.jsx)(v.a,{exact:!0,path:"/src/components/markdown",children:Object(m.jsx)(U,{})}),Object(m.jsx)(v.a,{children:Object(m.jsx)(M,{})})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.fd3fab25.chunk.js.map