(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(157),o=a(155),c=(a(158),a(150)),i=a.n(c),l=(a(149),a(151)),u=a.n(l),m=a(34),d=a.n(m),p=a(7),h=a.n(p),g=a(148),f=a(169),v=a(182),E=a.n(v),b=a(152),k=a.n(b),w=(a(75),function(e){var t=e.currency,a=e.amount,n=e.locale,s=a.toFixed(2).split("."),o=s[0],c=s[1],i=parseInt(o).toLocaleString(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t," "),i,r.a.createElement("span",null,".",c))}),y=a(146),x=null,T=function(e){function t(t){var a;return a=e.call(this,t)||this,k.a.config({name:"saldo"}),a.state={isAuthenticated:!1,userId:"",secret:"",accounts:[],progressBar:{class:E.a.gotTimeout}},a.fetchAccounts=a.fetchAccounts.bind(d()(a)),a}h()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=u()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("component did mount."),e.next=3,k.a.getItem("credentials");case 3:if(null!==(t=e.sent)&&!1!==t.success){e.next=7;break}return this.state.isAuthenticated=!1,e.abrupt("return",Object(g.a)("/authenticate"));case 7:!0===t.success&&(this.state.isAuthenticated=!0),console.log("Fetching accounts"),this.fetchAccounts();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.componentWillUnmount=function(){console.log("Balance will unmount."),clearTimeout(x)},a.render=function(){var e=this.state,t=e.accounts,a=e.progressBar;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:E.a.updateProgressIndicator},r.a.createElement("div",{className:a.class})),r.a.createElement("ul",{className:E.a.accountList},t.map(function(e){return r.a.createElement("li",{className:E.a.item,key:e.accountId},r.a.createElement("div",{className:E.a.itemWrapper},r.a.createElement("h3",{className:E.a.name},e.name),r.a.createElement("div",{className:E.a.available},r.a.createElement(w,{currency:"kr",amount:e.available,locale:"nb"})),r.a.createElement("div",{className:E.a.balanceDiv},r.a.createElement(w,{currency:"kr",amount:e.balance,locale:"nb"}))))})))},a.getAccessToken=function(){var e=u()(i.a.mark(function e(){var t,a,n,r,s,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.getItem("access_token");case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:if(a=new Date(t.date),n=new Date,r=a.getTime()+1e3*(t.expires_in-300),!((s=r-n.getTime())>0)){e.next=12;break}return console.log("Access token valid for "+Math.round(s/1e3)+" seconds."),e.abrupt("return",t.access_token);case 12:return console.log("Access token stale."),e.next=15,k.a.getItem("credentials");case 15:return o=e.sent,e.next=18,fetch(f.a.token,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:o.userId,client_secret:o.secret})});case 18:if(400!==(c=e.sent).status){e.next=21;break}throw new Error("Invalid credentials "+c.status+" "+c.statusText);case 21:if(c.ok){e.next=23;break}throw new Error("Invalid response: "+c.status+" "+c.statusText);case 23:return e.next=25,c.json();case 25:if((l=e.sent).hasOwnProperty("access_token")&&l.hasOwnProperty("expires_in")){e.next=29;break}throw console.warn(l),new Error("Something is not right with the access_token Response.");case 29:return l.date=new Date,k.a.setItem("access_token",l),e.abrupt("return",l.access_token);case 32:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),a.fetchAccounts=function(){var e=u()(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAccessToken();case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch(f.a.balance,{method:"get",headers:{Authorization:"Bearer "+t}});case 7:return a=e.sent,console.log("result:",a.status,a.statusText),e.next=11,a.json();case 11:if(n=e.sent,a.ok){e.next=15;break}return console.warn("error text:",n),e.abrupt("return");case 15:y.a.dispatchEvent(new CustomEvent("gotBalanceOk",{status:a.status,statusText:a.statusText})),console.log("Waiting for timeout"),this.setState({accounts:n,progressBar:{class:E.a.waitingForTimeout}}),x=setTimeout(function(){console.log("Got timeout"),this.setState({progressBar:{class:E.a.gotTimeout}}),this.fetchAccounts()}.bind(this),1e4);case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t}(r.a.Component);t.default=function(){return r.a.createElement(s.a,{headerTitle:"Saldo - Again"},r.a.createElement(o.a,{title:"Home",keywords:["gatsby","open banking","react"]}),r.a.createElement(T,null))}},146:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(163),o=new(function(e){function t(){var t;return(t=e.call(this)||this).addEventListener("authenticationFailed",t.handleAuthFailed),t.addEventListener("gotBalanceOk",t.handleGotBalanceOk),t}r()(t,e);var a=t.prototype;return a.handleAuthFailed=function(e){console.log("Got auth failed event:",e)},a.handleGotBalanceOk=function(e){console.log("Got balance ok",e)},t}(a.n(s)()(EventTarget)));t.a=o},147:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(4),o=a.n(s),c=a(33);a.d(t,"a",function(){return c.navigate});a(147),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},153:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),c=a(55),i=a(2),l=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e){e.exports={a:"0.6.3"}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),s=a.n(r),o=a(4),c=a.n(o),i=a(168),l=a.n(i);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,i=n.data.site,u=t||i.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),o=a.n(s),c=a(4),i=a.n(c),l=a(150),u=a.n(l),m=(a(149),a(151)),d=a.n(m),p=a(34),h=a.n(p),g=(a(158),a(159)),f=a.n(g),v=function(e){var t=e.name,a=e.trigger;return console.log("icon:",t,a),o.a.createElement("button",{className:f.a.iconButton,onClick:a},o.a.createElement("i",null,t))},E=a(160),b=a.n(E),k=function(e){var t=e.headerTitle,a=e.trigger;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"app-bar",className:b.a.appBar},o.a.createElement(v,{name:"menu",trigger:a}),o.a.createElement("h6",{id:"title",className:b.a.headerTitle},t)))},w=a(161),y=a.n(w),x=a(152),T=a.n(x),N=a(148),B=function(e){function t(t){var a;return(a=e.call(this,t)||this).openMenu=function(e){console.log("open menu:",e),a.setState({mainMenu:y.a.mainMenuOpen})},a.closeMenu=function(e){console.log("close menu:",e),a.setState({mainMenu:y.a.mainMenuClosed})},a.handleTouchStart=function(e){console.log("touch start:",e)},T.a.config({name:"saldo"}),console.log("header constructor"),a.state={mainMenu:y.a.mainMenuClosed,userId:"Ukjent"},a.openMenu=a.openMenu.bind(h()(a)),a.handleLogout=a.handleLogout.bind(h()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=d()(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.getItem("credentials");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={userId:"Ukjent"};case 5:t=e.t0,a=t.userId,console.log("Header did mount: userId:",a),this.setState({userId:a});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.props.headerTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:y.a.appBarHeader},o.a.createElement(k,{headerTitle:e,trigger:this.openMenu})),o.a.createElement("nav",{id:y.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},o.a.createElement("div",{className:y.a.topBar},o.a.createElement("h6",{className:y.a.topbarTitle},"Hovedmeny"),o.a.createElement(v,{name:"close",trigger:this.closeMenu})),o.a.createElement("div",{className:y.a.topbarMenuItems},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",null,"Logget inn som:")," ",o.a.createElement("span",{className:y.a.userId},this.state.userId)),o.a.createElement("button",{onClick:this.handleLogout,className:y.a.logoutButton},"Logg ut"))))))},a.handleLogout=function(){var e=d()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Got logout"),e.next=3,T.a.clear();case 3:return e.abrupt("return",Object(N.a)("/authenticate"));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t}(o.a.Component);B.propTypes={siteTitle:i.a.string},B.defaultProps={siteTitle:""};var M=B,I=a(154),S=a(162),A=a.n(S),O=function(){return o.a.createElement("footer",{className:A.a.footer},o.a.createElement("div",null,"Version ",o.a.createElement("span",{className:A.a.version},I.a)," - Thomas Malt ©"," ",(new Date).getFullYear()),o.a.createElement("div",{className:A.a.builtWith},"Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},F=a(146),j=a(164),C=a.n(j),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={classes:C.a.snackbar+" "+C.a.hide,title:"Snackbar title",message:"Dummy snackbar message text."},a.handleEvent=a.handleEvent.bind(h()(a)),F.a.addEventListener("authenticationFailed",a.handleEvent),a}r()(t,e);var a=t.prototype;return a.handleEvent=function(e){var t=this.props.timeout||5e3;console.log("snackbar got event:",t,e);var a=e.detail,n=a.title,r=a.message;this.setState({title:n,message:r,classes:C.a.snackbar+" "+C.a.show}),setTimeout(function(){console.log("doing snackbar timeout."),this.setState({classes:C.a.snackbar+" "+C.a.hide})}.bind(this),t)},a.render=function(){var e=this.state,t=e.classes,a=e.title,n=e.message;return o.a.createElement("div",{className:t},o.a.createElement("h6",null,a),o.a.createElement("p",null,n))},t}(o.a.Component),_=a(165),D=a.n(_),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={classes:D.a.hide},a.handleBalanceOk=a.handleBalanceOk.bind(h()(a)),F.a.addEventListener("gotBalanceOk",a.handleBalanceOk),a}r()(t,e);var a=t.prototype;return a.handleBalanceOk=function(){console.log("Blip: got balance ok"),this.setState({classes:D.a.show}),setTimeout(function(){this.setState({classes:D.a.hide})}.bind(this),800)},a.render=function(){var e=this.state.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:D.a.blipBox,className:e}),o.a.createElement("div",null))},t}(o.a.Component),G=(a(166),a(167)),P=a.n(G),q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerTitle,a=e.children;return o.a.createElement("main",{className:P.a.mainWrapper},o.a.createElement(M,{headerTitle:t}),o.a.createElement("section",null,a),o.a.createElement(O,null),o.a.createElement(L,{timeout:"6000"}),o.a.createElement(R,null))},t}(o.a.Component);q.propTypes={children:i.a.node.isRequired};t.a=q},169:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},r=n.urls}}]);
//# sourceMappingURL=component---src-pages-index-js-1e3d064d37100476a60b.js.map