(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(152),i=n(149),s=(n(36),n(37),n(153),n(34)),c=n.n(s),l=n(7),u=n.n(l),d=n(162),m=n(161),p=n(154),h=n(184).themes.teal,g=p.a.ul.withConfig({displayName:"Balance__List",componentId:"sc-1r4vk4z-0"})(["margin:0;padding:0;list-style:none;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),f=p.a.li.withConfig({displayName:"Balance__Item",componentId:"sc-1r4vk4z-1"})(["margin:1.4em 0;padding:0.5em;text-align:center;width:80vw;height:80vw;background-color:",";border-radius:50%;display:flex;justify-content:center;align-items:center;box-shadow:0px 0px 30px rgb(255,255,255);"],h.secondary.light),y=p.a.h3.withConfig({displayName:"Balance__Name",componentId:"sc-1r4vk4z-2"})(["font-size:6vw;font-weight:normal;font-family:'Roboto',sans-serif;font-weight:700;margin:12px 0 18px 0;padding:0;color:",";"],h.secondary.dark),w=p.a.div.withConfig({displayName:"Balance__Available",componentId:"sc-1r4vk4z-3"})(["font-size:14vw;height:100%;text-align:center;display:inline-block;font-family:'Sigmar One';color:",";padding:4vw 0;span{font-size:0.6em;}"],h.primary.dark),v=p.a.div.withConfig({displayName:"Balance__BalanceDiv",componentId:"sc-1r4vk4z-4"})(["font-size:6vw;margin:18px 0 12px 0;text-align:center;color:#404040;font-family:'Sigmar One';color:",";span{font-size:0.66em;color:",";}"],h.secondary.dark,h.secondary.dark),b=function(e){function t(t){var n;n=e.call(this,t)||this;var a="undefined"==typeof window?{success:!1,userId:"",secret:""}:JSON.parse(localStorage.getItem("sd60:authenticate"));return null===a&&(a={success:!1,userId:"",secret:""}),n.state={isAuthenticated:a.success||!1,userId:a.userId||"",secret:a.secret||"",accounts:[]},console.log("state:",n.state),n.fetcAccounts=n.fetchAccounts.bind(c()(n)),n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){!1===this.state.isAuthenticated&&Object(d.a)("/authenticate"),this.state.isAuthenticated&&this.fetchAccounts()},n.render=function(){return r.a.createElement(g,null,this.state.accounts.map(function(e){return r.a.createElement(f,{key:e.accountId},r.a.createElement("div",null,r.a.createElement(y,null,e.name),r.a.createElement(w,null,r.a.createElement("span",null,"kr "),e.available.toFixed(2)),r.a.createElement(v,null,r.a.createElement("span",null,"kr "),e.balance.toFixed(2))))}))},n.getAccessToken=function(){var e=JSON.parse(localStorage.getItem("sd60:token")),t=new Date(e.date),n=new Date;return t.getTime()+1e3*(e.expires_in-300)>n.getTime()?Promise.resolve(e.access_token):fetch(m.a.token,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:this.state.userId,client_secret:this.state.secret})}).then(function(e){if(e.ok)return e.json();throw new Error("Invalid response: "+e.status+" "+e.statusText)}).then(function(e){if(!e.hasOwnProperty("access_token")||!e.hasOwnProperty("expires_in"))throw console.warn(e),new Error("Something is not right with the access_token Response.");return e.date=new Date,localStorage.setItem("sd60:token",JSON.stringify(e)),e.access_token}).catch(function(e){return console.error(e.message)})},n.fetchAccounts=function(){var e=this;return this.getAccessToken().then(function(e){return fetch(m.a.balance,{method:"get",headers:{Authorization:"Bearer "+e}})}).then(function(e){return console.log("result:",e.status,e.statusText),e.ok?e.json():e.json().then(function(e){console.log("error text:",e)})}).then(function(t){console.log(t),e.setState({accounts:t})})},t}(r.a.Component);t.default=function(){return r.a.createElement(o.a,{headerTitle:"Saldo - Again"},r.a.createElement(i.a,{title:"Home",keywords:["gatsby","open banking","react"]}),r.a.createElement(b,null))}},148:function(e){e.exports={a:"0.4.2"}},149:function(e,t,n){"use strict";var a=n(150),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(160),l=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=e.title,c=a.data.site,u=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},151:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},152:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(4),c=n.n(s),l=n(154),u=n(34),d=n.n(u),m=(n(153),n(155),function(e){var t=e.name,n=e.trigger;return console.log("icon:",t,n),i.a.createElement("button",{className:"icon-button",onClick:n},i.a.createElement("i",null,t))}),p=(n(156),function(e){var t=e.headerTitle,n=e.trigger;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"app-bar"},i.a.createElement(m,{name:"menu",trigger:n}),i.a.createElement("h6",{id:"title"},t)))}),h=n(157),g=n.n(h),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).openMenu=function(e){console.log("open menu:",e),n.setState({mainMenu:g.a.mainMenuOpen})},n.closeMenu=function(e){console.log("close menu:",e),n.setState({mainMenu:g.a.mainMenuClosed})},n.handleTouchStart=function(e){console.log("touch start:",e)},console.log("header constructor"),n.state={mainMenu:g.a.mainMenuClosed},n.openMenu=n.openMenu.bind(d()(n)),n}return r()(t,e),t.prototype.render=function(){var e=this.props.headerTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(p,{headerTitle:e,trigger:this.openMenu})),i.a.createElement("nav",{id:g.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},i.a.createElement("div",{id:"TopBar"},i.a.createElement("h6",{className:g.a.topbarTitle},"Hovedmeny"),i.a.createElement(m,{name:"close",trigger:this.closeMenu})),i.a.createElement("div",{className:g.a.topbarMenuItems},i.a.createElement("ul",null,i.a.createElement("li",null,"Logg ut")))))},t}(i.a.Component);f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var y=f,w=n(148),v=(n(158),n(159),l.a.span.withConfig({displayName:"Layout__Version",componentId:"sc-1obgvso-0"})(["font-weight:700;"])),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerTitle,n=e.children;return i.a.createElement("main",null,i.a.createElement(y,{headerTitle:t}),i.a.createElement("section",null,n),i.a.createElement("footer",null,i.a.createElement("div",null,"Version ",i.a.createElement(v,null,w.a)," by Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{id:"built-with"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},t}(i.a.Component);b.propTypes={children:c.a.node.isRequired};t.a=b},161:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},r=a.urls},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(33);n.d(t,"a",function(){return s.navigate});n(151),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},163:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(56),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},184:function(e,t){e.exports={themes:{cosmic:{primary:{light:"#FFFBE5",main:"#D8CBC7",dark:"#D8CBC7"},secondary:{main:"#6193BF",dark:"#6193BF",light:"#D4E6FC"}},teal:{primary:{main:"#4bb5ab",light:"#80e8dd",dark:"#00857c",text:"#000000"},secondary:{main:"#efebe9",light:"#ffffff",dark:"#bdb9b7",text:"#000000"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-2d9819c902c74d56a559.js.map