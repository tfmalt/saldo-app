(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(157),o=n(155),c=(n(158),n(150)),i=n.n(c),l=(n(149),n(151)),u=n.n(l),m=n(34),p=n.n(m),d=n(7),h=n.n(d),f=n(148),g=n(169),v=n(178),b=n.n(v),E=n(152),k=n.n(E),w=(n(74),function(e){var t=e.currency,n=e.amount,a=e.locale,s=n.toFixed(2).split("."),o=s[0],c=s[1],i=parseInt(o).toLocaleString(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t," "),i,r.a.createElement("span",null,".",c))}),y=n(146),x=null,T=function(e){function t(t){var n;return n=e.call(this,t)||this,k.a.config({name:"saldo"}),n.state={isAuthenticated:!1,userId:"",secret:"",accounts:[],progressBar:{class:b.a.gotTimeout}},n.fetchAccounts=n.fetchAccounts.bind(p()(n)),n}h()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=u()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("component did mount."),e.next=3,k.a.getItem("credentials");case 3:if(null!==(t=e.sent)&&!1!==t.success){e.next=7;break}return this.state.isAuthenticated=!1,e.abrupt("return",Object(f.a)("/authenticate"));case 7:!0===t.success&&(this.state.isAuthenticated=!0),console.log("Fetching accounts"),this.fetchAccounts();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.componentWillUnmount=function(){console.log("Balance will unmount."),clearTimeout(x)},n.render=function(){var e=this.state,t=e.accounts,n=e.progressBar;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b.a.updateProgressIndicator},r.a.createElement("div",{className:n.class})),r.a.createElement("ul",{className:b.a.accountList},t.map(function(e){return r.a.createElement("li",{className:b.a.item,key:e.accountId},r.a.createElement("div",{className:b.a.itemWrapper},r.a.createElement("h3",{className:b.a.name},e.name),r.a.createElement("div",{className:b.a.available},r.a.createElement(w,{currency:"kr",amount:e.available,locale:"nb"})),r.a.createElement("div",{className:b.a.balanceDiv},r.a.createElement(w,{currency:"kr",amount:e.balance,locale:"nb"}))))})))},n.getAccessToken=function(){var e=u()(i.a.mark(function e(){var t,n,a,r,s,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.getItem("access_token");case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:if(n=new Date(t.date),a=new Date,r=n.getTime()+1e3*(t.expires_in-300),!((s=r-a.getTime())>0)){e.next=12;break}return console.log("Access token valid for "+Math.round(s/1e3)+" seconds."),e.abrupt("return",t.access_token);case 12:return console.log("Access token stale."),e.next=15,k.a.getItem("credentials");case 15:return o=e.sent,e.next=18,fetch(g.a.token,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:o.userId,client_secret:o.secret})});case 18:if(400!==(c=e.sent).status){e.next=21;break}throw new Error("Invalid credentials "+c.status+" "+c.statusText);case 21:if(c.ok){e.next=23;break}throw new Error("Invalid response: "+c.status+" "+c.statusText);case 23:return e.next=25,c.json();case 25:if((l=e.sent).hasOwnProperty("access_token")&&l.hasOwnProperty("expires_in")){e.next=29;break}throw console.warn(l),new Error("Something is not right with the access_token Response.");case 29:return l.date=new Date,k.a.setItem("access_token",l),e.abrupt("return",l.access_token);case 32:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),n.fetchAccounts=function(){var e=u()(i.a.mark(function e(){var t,n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAccessToken();case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch(g.a.balance,{method:"get",headers:{Authorization:"Bearer "+t}});case 7:return n=e.sent,console.log("result:",n.status,n.statusText),e.next=11,n.json();case 11:if(a=e.sent,n.ok){e.next=15;break}return console.warn("error text:",a),e.abrupt("return");case 15:y.a.dispatchEvent(new CustomEvent("gotBalanceOk",{status:n.status,statusText:n.statusText})),console.log("Waiting for timeout"),this.setState({accounts:a,progressBar:{class:b.a.waitingForTimeout}}),x=setTimeout(function(){console.log("Got timeout"),this.setState({progressBar:{class:b.a.gotTimeout}}),this.fetchAccounts()}.bind(this),1e4);case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t}(r.a.Component);t.default=function(){return r.a.createElement(s.a,{headerTitle:"Saldo - Again"},r.a.createElement(o.a,{title:"Home",keywords:["gatsby","open banking","react"]}),r.a.createElement(T,null))}},146:function(e,t,n){"use strict";var a=n(7),r=n.n(a),s=new(function(e){function t(){var t;return(t=e.call(this)||this).addEventListener("authenticationFailed",t.handleAuthFailed),t.addEventListener("gotBalanceOk",t.handleGotBalanceOk),t}r()(t,e);var n=t.prototype;return n.handleAuthFailed=function(e){console.log("Got auth failed event:",e)},n.handleGotBalanceOk=function(e){console.log("Got balance ok",e)},t}(n(163).a));t.a=s},147:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(4),o=n.n(s),c=n(33);n.d(t,"a",function(){return c.navigate});n(147),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},153:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),s=n(4),o=n.n(s),c=n(55),i=n(2),l=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e){e.exports={a:"0.6.5"}},155:function(e,t,n){"use strict";var a=n(156),r=n(0),s=n.n(r),o=n(4),c=n.n(o),i=n(168),l=n.n(i);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,i=a.data.site,u=t||i.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},157:function(e,t,n){"use strict";var a=n(7),r=n.n(a),s=n(0),o=n.n(s),c=n(4),i=n.n(c),l=n(150),u=n.n(l),m=(n(149),n(151)),p=n.n(m),d=n(34),h=n.n(d),f=(n(158),n(159)),g=n.n(f),v=function(e){var t=e.name,n=e.trigger;return console.log("icon:",t,n),o.a.createElement("button",{className:g.a.iconButton,onClick:n},o.a.createElement("i",null,t))},b=n(160),E=n.n(b),k=function(e){var t=e.headerTitle,n=e.trigger;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"app-bar",className:E.a.appBar},o.a.createElement(v,{name:"menu",trigger:n}),o.a.createElement("h6",{id:"title",className:E.a.headerTitle},t)))},w=n(161),y=n.n(w),x=n(152),T=n.n(x),N=n(148),B=function(e){function t(t){var n;return(n=e.call(this,t)||this).openMenu=function(e){console.log("open menu:",e),n.setState({mainMenu:y.a.mainMenuOpen})},n.closeMenu=function(e){console.log("close menu:",e),n.setState({mainMenu:y.a.mainMenuClosed})},n.handleTouchStart=function(e){console.log("touch start:",e)},T.a.config({name:"saldo"}),console.log("header constructor"),n.state={mainMenu:y.a.mainMenuClosed,userId:"Ukjent"},n.openMenu=n.openMenu.bind(h()(n)),n.handleLogout=n.handleLogout.bind(h()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=p()(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.getItem("credentials");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={userId:"Ukjent"};case 5:t=e.t0,n=t.userId,console.log("Header did mount: userId:",n),this.setState({userId:n});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.props.headerTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:y.a.appBarHeader},o.a.createElement(k,{headerTitle:e,trigger:this.openMenu})),o.a.createElement("nav",{id:y.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},o.a.createElement("div",{className:y.a.topBar},o.a.createElement("h6",{className:y.a.topbarTitle},"Hovedmeny"),o.a.createElement(v,{name:"close",trigger:this.closeMenu})),o.a.createElement("div",{className:y.a.topbarMenuItems},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",null,"Logget inn som:")," ",o.a.createElement("span",{className:y.a.userId},this.state.userId)),o.a.createElement("button",{onClick:this.handleLogout,className:y.a.logoutButton},"Logg ut"))))))},n.handleLogout=function(){var e=p()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Got logout"),e.next=3,T.a.clear();case 3:return e.abrupt("return",Object(N.a)("/authenticate"));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t}(o.a.Component);B.propTypes={siteTitle:i.a.string},B.defaultProps={siteTitle:""};var M=B,I=n(154),O=n(162),S=n.n(O),j=function(){return o.a.createElement("footer",{className:S.a.footer},o.a.createElement("div",null,"Version ",o.a.createElement("span",{className:S.a.version},I.a)," - Thomas Malt ©"," ",(new Date).getFullYear()),o.a.createElement("div",{className:S.a.builtWith},"Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},A=(n(75),n(74),n(146)),F=n(164),C=n.n(F),L=function(e){function t(t){var n,a=(n=e.call(this,t)||this).getPositionObject(n.props.position),r=[C.a.snackbar,C.a[""+a.vertical+a.horizontal+"hide"]];return n.state={classes:r.join(" "),title:"Snackbar title",message:"Dummy snackbar message text.",position:a},n.handleEvent=n.handleEvent.bind(h()(n)),A.a.addEventListener("authenticationFailed",n.handleEvent),n}r()(t,e);var n=t.prototype;return n.getPositionObject=function(e){void 0===e&&(e="bottom left");var t=e.split(/[- ]/),n={vertical:t.filter(function(e){return e.match(/(top|bottom)/)}).shift(),horizontal:t.filter(function(e){return e.match(/(left|center|right)/)}).shift()};if(console.log("snackbar position object:",n),"string"!=typeof n.vertical||"string"!=typeof n.horizontal)throw new TypeError('"position" prop to SnackBar not valid.');return n},n.handleEvent=function(e){var t=this.props.timeout||5e3,n=this.state.position,a=e.detail,r=a.title,s=a.message,o=[C.a.snackbar,C.a[""+n.vertical+n.horizontal+"show"]],c=[C.a.snackbar,C.a[""+n.vertical+n.horizontal+"hide"]];this.setState({title:r,message:s,classes:o.join(" ")}),setTimeout(function(){console.log("doing snackbar timeout."),this.setState({classes:c.join(" ")})}.bind(this),t)},n.render=function(){var e=this.state,t=e.classes,n=e.title,a=e.message;return o.a.createElement("div",{className:t},o.a.createElement("h6",null,n),o.a.createElement("p",null,a))},t}(o.a.Component),_=n(165),D=n.n(_),P=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={classes:D.a.hide},n.handleBalanceOk=n.handleBalanceOk.bind(h()(n)),A.a.addEventListener("gotBalanceOk",n.handleBalanceOk),n}r()(t,e);var n=t.prototype;return n.handleBalanceOk=function(){console.log("Blip: got balance ok"),this.setState({classes:D.a.show}),setTimeout(function(){this.setState({classes:D.a.hide})}.bind(this),800)},n.render=function(){var e=this.state.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:D.a.blipBox,className:e}),o.a.createElement("div",null))},t}(o.a.Component),R=(n(166),n(167)),G=n.n(R),z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerTitle,n=e.children;return o.a.createElement("main",{className:G.a.mainWrapper},o.a.createElement(M,{headerTitle:t}),o.a.createElement("section",null,n),o.a.createElement(j,null),o.a.createElement(L,{timeout:"6000",position:"bottom right"}),o.a.createElement(P,null))},t}(o.a.Component);z.propTypes={children:i.a.node.isRequired};t.a=z},169:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},r=a.urls}}]);
//# sourceMappingURL=component---src-pages-index-js-2cdd8865e38d40357d1e.js.map