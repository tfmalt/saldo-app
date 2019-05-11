(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(158),r=n(156),s=(n(36),n(37),n(175),n(35)),c=n.n(s),l=n(7),d=n.n(l),u=n(151),m=n(161),p=n(152),f=n(149).themes.teal,h=p.a.ul.withConfig({displayName:"balance__List",componentId:"sc-1lzzobf-0"})(["margin:0;padding:0;list-style:none;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),g=p.a.li.withConfig({displayName:"balance__Item",componentId:"sc-1lzzobf-1"})(["margin:1.4em 0;padding:0.5em;text-align:center;width:80vw;height:80vw;background-color:",";border-radius:50%;display:flex;justify-content:center;align-items:center;box-shadow:0px 0px 30px rgb(255,255,255);"],f.secondary.light),y=p.a.h3.withConfig({displayName:"balance__Name",componentId:"sc-1lzzobf-2"})(["font-size:6vw;font-weight:normal;font-family:'Roboto',sans-serif;font-weight:700;margin:12px 0 18px 0;padding:0;color:",";"],f.secondary.dark),b=p.a.div.withConfig({displayName:"balance__Available",componentId:"sc-1lzzobf-3"})(["font-size:14vw;height:100%;text-align:center;display:inline-block;font-family:'Sigmar One';color:",";padding:4vw 0;span{font-size:0.6em;}"],f.primary.dark),w=p.a.div.withConfig({displayName:"balance__BalanceDiv",componentId:"sc-1lzzobf-4"})(["font-size:6vw;margin:18px 0 12px 0;text-align:center;color:#404040;font-family:'Sigmar One';color:",";span{font-size:0.66em;color:",";}"],f.secondary.dark,f.secondary.dark),x=function(e){function t(t){var n;n=e.call(this,t)||this;var a="undefined"==typeof window?{}:JSON.parse(localStorage.getItem("sd60:authenticate"));return n.state={isAuthenticated:a.success,userId:a.userId,secret:a.secret,accounts:[]},console.log("state:",n.state),n.fetcAccounts=n.fetchAccounts.bind(c()(n)),n}d()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.state.isAuthenticated&&this.fetchAccounts()},n.render=function(){return!1===this.state.isAuthenticated&&Object(u.c)("/authenticate"),o.a.createElement(h,null,this.state.accounts.map(function(e){return o.a.createElement(g,{key:e.accountId},o.a.createElement("div",null,o.a.createElement(y,null,e.name),o.a.createElement(b,null,o.a.createElement("span",null,"kr "),e.available.toFixed(2)),o.a.createElement(w,null,o.a.createElement("span",null,"kr "),e.balance.toFixed(2))))}))},n.getAccessToken=function(){var e=JSON.parse(localStorage.getItem("sd60:token")),t=new Date(e.date),n=new Date;return t.getTime()+1e3*(e.expires_in-300)>n.getTime()?Promise.resolve(e.access_token):fetch(m.a.token,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:this.state.userId,client_secret:this.state.secret})}).then(function(e){if(e.ok)return e.json();throw new Error("Invalid response: "+e.status+" "+e.statusText)}).then(function(e){if(!e.hasOwnProperty("access_token")||!e.hasOwnProperty("expires_in"))throw console.warn(e),new Error("Something is not right with the access_token Response.");return e.date=new Date,localStorage.setItem("sd60:token",JSON.stringify(e)),e.access_token}).catch(function(e){return console.error(e.message)})},n.fetchAccounts=function(){var e=this;return this.getAccessToken().then(function(e){return fetch(m.a.balance,{method:"get",headers:{Authorization:"Bearer "+e}})}).then(function(e){return console.log("result:",e.status,e.statusText),e.ok?e.json():e.json().then(function(e){console.log("error text:",e)})}).then(function(t){console.log(t),e.setState({accounts:t})})},t}(o.a.Component);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(r.a,{title:"Home",keywords:["gatsby","open banking","react"]}),o.a.createElement(x,null))}},149:function(e,t){e.exports={themes:{cosmic:{primary:{light:"#FFFBE5",main:"#D8CBC7",dark:"#D8CBC7"},secondary:{main:"#6193BF",dark:"#6193BF",light:"#D4E6FC"}},teal:{primary:{main:"#4bb5ab",light:"#80e8dd",dark:"#00857c",text:"#000000"},secondary:{main:"#efebe9",light:"#ffffff",dark:"#bdb9b7",text:"#000000"}}}}},150:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},151:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),s=n(33),c=n.n(s);n.d(t,"a",function(){return c.a}),n.d(t,"c",function(){return s.navigate});n(150);var l=o.a.createContext({}),d=function(e){return o.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo"}}}}},154:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),s=n(55),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},155:function(e){e.exports={a:"0.3.1"}},156:function(e,t,n){"use strict";var a=n(157),o=n(0),i=n.n(o),r=n(4),s=n.n(r),c=n(160),l=n.n(c);function d(e){var t=e.description,n=e.lang,o=e.meta,r=e.keywords,s=e.title,c=a.data.site,d=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},158:function(e,t,n){"use strict";var a=n(153),o=n(0),i=n.n(o),r=n(4),s=n.n(r),c=n(151),l=n(152),d=n(149),u=d.themes.teal,m=l.a.header.withConfig({displayName:"header__MyHeader",componentId:"sc-51kygl-0"})(["background-color:",";color:black;position:fixed;top:0px;width:100%;box-shadow:0px 5px 10px rgba(0,0,0,0.3);"],u.primary.main),p=l.a.h1.withConfig({displayName:"header__Title",componentId:"sc-51kygl-1"})(["color:rgba(0,0,0,0.66);text-decoration:none;font-size:1.4em;padding:0.8em;"]),f=function(e){var t=e.siteTitle;return i.a.createElement(m,null,i.a.createElement("div",null,i.a.createElement(p,null,t)))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var h=f,g=n(155),y=(n(159),d.themes.teal),b=l.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1ams6dg-0"})(["font-family:'Roboto',sans-serif;background-color:",";padding:0.5rem;text-align:center;color:#404040;font-size:0.9em;position:fixed;width:100%;bottom:0px;box-shadow:0px -2px 10px rgba(0,0,0,0.3);div#built-with{font-size:0.8em;}"],y.primary.main),w=l.a.span.withConfig({displayName:"layout__Version",componentId:"sc-1ams6dg-1"})(["font-weight:700;"]),x=l.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1ams6dg-2"})(["padding:72px 1rem 72px;background-color:",";height:100%;"],y.secondary.main),k=function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(x,null,t),i.a.createElement(b,null,i.a.createElement("div",null,"Version ",i.a.createElement(w,null,g.a)," by Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{id:"built-with"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})};k.propTypes={children:s.a.node.isRequired};t.a=k},161:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},o=a.urls},175:function(e,t,n){var a=n(25).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(18)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-641f5390d05d301e3728.js.map