(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(158),o=a(156),s=a(35),l=a.n(s),c=a(7),d=a.n(c),u=a(152),p=a(149),m=a(161),h=a(151),g=p.themes.teal,f=u.a.h1.withConfig({displayName:"authenticate__Heading",componentId:"vznaeb-0"})(["font-size:18px;color:",";"],g.primary.main),b=u.a.div.withConfig({displayName:"authenticate__Wrapper",componentId:"vznaeb-1"})(["min-height:66vh;"]),y=u.a.button.withConfig({displayName:"authenticate__Button",componentId:"vznaeb-2"})(["background-color:",";color:white;width:100%;text-align:center;border:none;padding:0.8em;margin-top:1.6em;border-radius:4px;"],g.primary.main),w=u.a.div.withConfig({displayName:"authenticate__TextField",componentId:"vznaeb-3"})(["border-bottom:1px solid ",";margin-bottom:0.6em;&:focus{border-bottom:3px solid ",";}label{padding-left:0px;padding-top:2px;display:inline-block;font-family:sans-serif;font-size:0.9em;color:",";}input{border:none;background-color:",";border-radius:4px 4px 0 0;}input:focus{border:0;border-color:white;}input[type='text']{border:none;padding:0.8em 0.6em;font-size:1em;width:100%;}"],g.primary.main,g.primary.main,g.primary.main,g.primary.main),x=u.a.form.withConfig({displayName:"authenticate__Form",componentId:"vznaeb-4"})([""]),v=function(e){function t(t){var a;a=e.call(this,t)||this;var n=JSON.parse(localStorage.getItem("sd60:authenticate"));return a.state={userId:n.userId||"",secret:n.secret||""},a.handleSubmit=a.handleSubmit.bind(l()(a)),a.handleChange=a.handleChange.bind(l()(a)),a}d()(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;console.log("Got a submit! "+this.state.userId),e.preventDefault(),fetch(m.a.token,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:this.state.userId,client_secret:this.state.secret})}).then(function(e){return console.log("Got res:",e.status,e.statusText),e.ok?e.json():e.json().then(function(t){throw console.log("json",t),new Error("Got an invalid response. "+e.statusText)})}).then(function(e){if(!e.hasOwnProperty("access_token")||!e.hasOwnProperty("expires_in"))throw console.warn(e),new Error("Something is not right with the access_token Response.");return e.date=new Date,localStorage.setItem("sd60:token",JSON.stringify(e)),localStorage.setItem("sd60:authenticate",JSON.stringify({success:!0,userId:t.state.userId,secret:t.state.secret})),Object(h.c)("/")}).catch(function(e){return console.warn(e)})},a.handleChange=function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)},a.render=function(){return r.a.createElement(b,null,r.a.createElement(f,null,"Authenticate"),r.a.createElement(x,{onSubmit:this.handleSubmit},r.a.createElement(w,null,r.a.createElement("label",null,"Bruker Id"),r.a.createElement("input",{type:"text",value:this.state.userId,onChange:this.handleChange,id:"userId"})),r.a.createElement(w,null,r.a.createElement("label",null,"Passord"),r.a.createElement("input",{type:"text",value:this.state.secret,onChange:this.handleChange,id:"secret"})),r.a.createElement(y,{type:"submit",id:"authenticate"},"Logg inn")))},t}(r.a.Component);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Authenticate"}),r.a.createElement(v,null))}},149:function(e,t){e.exports={themes:{cosmic:{primary:{light:"#FFFBE5",main:"#D8CBC7",dark:"#D8CBC7"},secondary:{main:"#6193BF",dark:"#6193BF",light:"#D4E6FC"}},teal:{primary:{main:"#4bb5ab",light:"#80e8dd",dark:"#00857c",text:"#000000"},secondary:{main:"#efebe9",light:"#ffffff",dark:"#bdb9b7",text:"#000000"}}}}},150:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return s.navigate});a(150);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},155:function(e){e.exports={a:"0.3.1"}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(160),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},158:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(151),c=a(152),d=a(149),u=d.themes.teal,p=c.a.header.withConfig({displayName:"header__MyHeader",componentId:"sc-51kygl-0"})(["background-color:",";color:black;position:fixed;top:0px;width:100%;box-shadow:0px 5px 10px rgba(0,0,0,0.3);"],u.primary.main),m=c.a.h1.withConfig({displayName:"header__Title",componentId:"sc-51kygl-1"})(["color:rgba(0,0,0,0.66);text-decoration:none;font-size:1.4em;padding:0.8em;"]),h=function(e){var t=e.siteTitle;return i.a.createElement(p,null,i.a.createElement("div",null,i.a.createElement(m,null,t)))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var g=h,f=a(155),b=(a(159),d.themes.teal),y=c.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1ams6dg-0"})(["font-family:'Roboto',sans-serif;background-color:",";padding:0.5rem;text-align:center;color:#404040;font-size:0.9em;position:fixed;width:100%;bottom:0px;box-shadow:0px -2px 10px rgba(0,0,0,0.3);div#built-with{font-size:0.8em;}"],b.primary.main),w=c.a.span.withConfig({displayName:"layout__Version",componentId:"sc-1ams6dg-1"})(["font-weight:700;"]),x=c.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1ams6dg-2"})(["padding:72px 1rem 72px;background-color:",";height:100%;"],b.secondary.main),v=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(x,null,t),i.a.createElement(y,null,i.a.createElement("div",null,"Version ",i.a.createElement(w,null,f.a)," by Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{id:"built-with"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};v.propTypes={children:s.a.node.isRequired};t.a=v},161:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},r=n.urls}}]);
//# sourceMappingURL=component---src-pages-authenticate-js-bc658228c04996806e5d.js.map