(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(156),i=n(154),o=n(149),c=n.n(o),l=(n(148),n(150)),u=n.n(l),d=n(34),m=n.n(d),p=n(7),h=n.n(p),g=n(165),f=n(147),v=n(172),b=n.n(v),E=function(){return r.a.createElement("div",{className:b.a.wrapper},r.a.createElement("div",{className:b.a.spinner}))},w=n(173),y=n.n(w),k=n(151),x=n.n(k),M=function(e){function t(t){var n;return n=e.call(this,t)||this,x.a.config({name:"saldo"}),n.state={userId:"",secret:"",credentials:{userId:"",secret:"",success:!1},isWaiting:!1},n.handleSubmit=n.handleSubmit.bind(m()(n)),n.handleChange=n.handleChange.bind(m()(n)),n}h()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=u()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Authenticate did mount."),e.next=3,x.a.getItem("credentials");case 3:if(null===(t=e.sent)||!0!==t.success){e.next=7;break}return console.log("User Authenticated."),e.abrupt("return",Object(f.a)("/"));case 7:console.log("User not yet authenticated.");case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.state.isWaiting;return r.a.createElement("div",{id:y.a.wrapper},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:y.a.textfield},r.a.createElement("input",{type:"text",required:!0,value:this.state.userId,onChange:this.handleChange,id:"userId"}),r.a.createElement("div",{id:"underline"}),r.a.createElement("label",null,"Bruker id")),r.a.createElement("div",{className:y.a.textfield},r.a.createElement("input",{type:"text",required:!0,value:this.state.secret,onChange:this.handleChange,id:"secret"}),r.a.createElement("div",{id:"underline"}),r.a.createElement("label",null,"Passord")),r.a.createElement("button",{className:y.a.authenticate,type:"submit",id:"authenticate"},r.a.createElement("div",{className:e?y.a.hidden:y.a.visible},"Logg inn"),r.a.createElement("div",{className:e?y.a.visible:y.a.hidden},r.a.createElement(E,null)))))},n.handleSubmit=function(){var e=u()(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({isWaiting:!0}),(n=this.state.credentials).userId=this.state.userId,n.secret=this.state.secret,e.next=7,this.verifyCredentials(n);case 7:if(a=e.sent,this.setState({isWaiting:!1}),console.log("got result:",a),!0!==a.success){e.next=12;break}return e.abrupt("return",Object(f.a)("/"));case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)},n.verifyCredentials=function(){var e=u()(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Verifying credentials"),e.next=3,fetch(g.a.token,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:t.userId,client_secret:t.secret})});case 3:return n=e.sent,console.log("Got result:",n.status,n.statusText),e.next=7,n.json();case 7:if(a=e.sent,400!==n.status){e.next=12;break}return console.log("Got wrong auth:",a),t.success=!1,e.abrupt("return",t);case 12:if(n.ok){e.next=14;break}throw new Error("Somehthing unexpected went wrong with authentication.");case 14:if(!n.ok){e.next=23;break}if(a.hasOwnProperty("access_token")&&a.hasOwnProperty("expires_in")){e.next=18;break}throw console.warn(a),new Error("Something is not right with the access_token Response.");case 18:return a.date=new Date,t.success=!0,x.a.setItem("access_token",a),x.a.setItem("credentials",t),e.abrupt("return",t);case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t}(r.a.Component);t.default=function(){return r.a.createElement(s.a,{headerTitle:"Saldo - Logg inn"},r.a.createElement(i.a,{title:"Authenticate"}),r.a.createElement(M,null))}},146:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=n(33);n.d(t,"a",function(){return o.navigate});n(146),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=n(55),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={a:"0.6.1"}},154:function(e,t,n){"use strict";var a=n(155),r=n(0),s=n.n(r),i=n(4),o=n.n(i),c=n(164),l=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title,c=a.data.site,u=t||c.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),s=n(0),i=n.n(s),o=n(4),c=n.n(o),l=n(149),u=n.n(l),d=(n(148),n(150)),m=n.n(d),p=n(34),h=n.n(p),g=(n(157),n(158)),f=n.n(g),v=function(e){var t=e.name,n=e.trigger;return console.log("icon:",t,n),i.a.createElement("button",{className:f.a.iconButton,onClick:n},i.a.createElement("i",null,t))},b=n(159),E=n.n(b),w=function(e){var t=e.headerTitle,n=e.trigger;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"app-bar",className:E.a.appBar},i.a.createElement(v,{name:"menu",trigger:n}),i.a.createElement("h6",{id:"title",className:E.a.headerTitle},t)))},y=n(160),k=n.n(y),x=n(151),M=n.n(x),N=n(147),T=function(e){function t(t){var n;return(n=e.call(this,t)||this).openMenu=function(e){console.log("open menu:",e),n.setState({mainMenu:k.a.mainMenuOpen})},n.closeMenu=function(e){console.log("close menu:",e),n.setState({mainMenu:k.a.mainMenuClosed})},n.handleTouchStart=function(e){console.log("touch start:",e)},M.a.config({name:"saldo"}),console.log("header constructor"),n.state={mainMenu:k.a.mainMenuClosed,userId:"Ukjent"},n.openMenu=n.openMenu.bind(h()(n)),n.handleLogout=n.handleLogout.bind(h()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=m()(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.getItem("credentials");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={userId:"Ukjent"};case 5:t=e.t0,n=t.userId,console.log("Header did mount: userId:",n),this.setState({userId:n});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.props.headerTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:k.a.appBarHeader},i.a.createElement(w,{headerTitle:e,trigger:this.openMenu})),i.a.createElement("nav",{id:k.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},i.a.createElement("div",{className:k.a.topBar},i.a.createElement("h6",{className:k.a.topbarTitle},"Hovedmeny"),i.a.createElement(v,{name:"close",trigger:this.closeMenu})),i.a.createElement("div",{className:k.a.topbarMenuItems},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("div",null,i.a.createElement("span",null,"Logget inn som:")," ",i.a.createElement("span",{className:k.a.userId},this.state.userId)),i.a.createElement("button",{onClick:this.handleLogout,className:k.a.logoutButton},"Logg ut"))))))},n.handleLogout=function(){var e=m()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Got logout"),e.next=3,M.a.clear();case 3:return e.abrupt("return",Object(N.a)("/authenticate"));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t}(i.a.Component);T.propTypes={siteTitle:c.a.string},T.defaultProps={siteTitle:""};var S=T,I=n(153),C=n(161),j=n.n(C),O=function(){return i.a.createElement("footer",{className:j.a.footer},i.a.createElement("div",null,"Version ",i.a.createElement("span",{className:j.a.version},I.a)," - Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{className:j.a.builtWith},"Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},L=(n(162),n(163)),R=n.n(L),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerTitle,n=e.children;return i.a.createElement("main",{className:R.a.mainWrapper},i.a.createElement(S,{headerTitle:t}),i.a.createElement("section",null,n),i.a.createElement(O,null))},t}(i.a.Component);_.propTypes={children:c.a.node.isRequired};t.a=_},165:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},r=a.urls}}]);
//# sourceMappingURL=component---src-pages-authenticate-js-9c4cf2a573d8b11c8413.js.map