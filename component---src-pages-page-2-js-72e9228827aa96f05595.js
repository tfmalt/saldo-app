(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(158),c=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t){e.exports={themes:{cosmic:{primary:{light:"#FFFBE5",main:"#D8CBC7",dark:"#D8CBC7"},secondary:{main:"#6193BF",dark:"#6193BF",light:"#D4E6FC"}},teal:{primary:{main:"#4bb5ab",light:"#80e8dd",dark:"#00857c",text:"#000000"},secondary:{main:"#efebe9",light:"#ffffff",dark:"#bdb9b7",text:"#000000"}}}}},150:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.navigate});a(150);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e){e.exports={a:"0.3.4"}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(160),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},158:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(151),s=a(152),d=a(149),u=d.themes.teal,p=s.a.header.withConfig({displayName:"header__MyHeader",componentId:"sc-51kygl-0"})(["background-color:",";color:black;position:fixed;top:0px;width:100%;box-shadow:0px 5px 10px rgba(0,0,0,0.3);"],u.primary.main),m=s.a.h1.withConfig({displayName:"header__Title",componentId:"sc-51kygl-1"})(["color:rgba(0,0,0,0.66);text-decoration:none;font-size:1.4em;padding:0.8em;"]),f=function(e){var t=e.siteTitle;return i.a.createElement(p,null,i.a.createElement("div",null,i.a.createElement(m,null,t)))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var g=f,h=a(155),y=(a(159),d.themes.teal),b=s.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1ams6dg-0"})(["font-family:'Roboto',sans-serif;background-color:",";padding:0.5rem;text-align:center;color:#404040;font-size:0.9em;position:fixed;width:100%;bottom:0px;box-shadow:0px -2px 10px rgba(0,0,0,0.3);div#built-with{font-size:0.8em;}"],y.primary.main),w=s.a.span.withConfig({displayName:"layout__Version",componentId:"sc-1ams6dg-1"})(["font-weight:700;"]),x=s.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1ams6dg-2"})(["padding:72px 1rem 72px;background-color:",";height:100%;"],y.secondary.main),E=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(x,null,t),i.a.createElement(b,null,i.a.createElement("div",null,"Version ",i.a.createElement(w,null,h.a)," by Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{id:"built-with"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};E.propTypes={children:c.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-page-2-js-72e9228827aa96f05595.js.map