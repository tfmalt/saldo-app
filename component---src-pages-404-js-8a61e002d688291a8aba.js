(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(157),i=a(155);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=new(function(e){function t(){var t;return(t=e.call(this)||this).addEventListener("authenticationFailed",t.handleAuthFailed),t.addEventListener("gotBalanceOk",t.handleGotBalanceOk),t}r()(t,e);var a=t.prototype;return a.handleAuthFailed=function(e){console.log("Got auth failed event:",e)},a.handleGotBalanceOk=function(e){console.log("Got balance ok",e)},t}(a(163).a));t.a=o},147:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(33);a.d(t,"a",function(){return s.navigate});a(147),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},153:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e){e.exports={a:"0.6.5"}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),o=a.n(r),i=a(4),s=a.n(i),l=a(168),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(4),l=a.n(s),c=a(150),u=a.n(c),d=(a(149),a(151)),m=a.n(d),p=a(34),h=a.n(p),f=(a(158),a(159)),g=a.n(f),v=function(e){var t=e.name,a=e.trigger;return console.log("icon:",t,a),i.a.createElement("button",{className:g.a.iconButton,onClick:a},i.a.createElement("i",null,t))},E=a(160),b=a.n(E),k=function(e){var t=e.headerTitle,a=e.trigger;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"app-bar",className:b.a.appBar},i.a.createElement(v,{name:"menu",trigger:a}),i.a.createElement("h6",{id:"title",className:b.a.headerTitle},t)))},y=a(161),w=a.n(y),T=a(152),M=a.n(T),N=a(148),B=function(e){function t(t){var a;return(a=e.call(this,t)||this).openMenu=function(e){console.log("open menu:",e),a.setState({mainMenu:w.a.mainMenuOpen})},a.closeMenu=function(e){console.log("close menu:",e),a.setState({mainMenu:w.a.mainMenuClosed})},a.handleTouchStart=function(e){console.log("touch start:",e)},M.a.config({name:"saldo"}),console.log("header constructor"),a.state={mainMenu:w.a.mainMenuClosed,userId:"Ukjent"},a.openMenu=a.openMenu.bind(h()(a)),a.handleLogout=a.handleLogout.bind(h()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=m()(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.getItem("credentials");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={userId:"Ukjent"};case 5:t=e.t0,a=t.userId,console.log("Header did mount: userId:",a),this.setState({userId:a});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.props.headerTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:w.a.appBarHeader},i.a.createElement(k,{headerTitle:e,trigger:this.openMenu})),i.a.createElement("nav",{id:w.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},i.a.createElement("div",{className:w.a.topBar},i.a.createElement("h6",{className:w.a.topbarTitle},"Hovedmeny"),i.a.createElement(v,{name:"close",trigger:this.closeMenu})),i.a.createElement("div",{className:w.a.topbarMenuItems},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("div",null,i.a.createElement("span",null,"Logget inn som:")," ",i.a.createElement("span",{className:w.a.userId},this.state.userId)),i.a.createElement("button",{onClick:this.handleLogout,className:w.a.logoutButton},"Logg ut"))))))},a.handleLogout=function(){var e=m()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Got logout"),e.next=3,M.a.clear();case 3:return e.abrupt("return",Object(N.a)("/authenticate"));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t}(i.a.Component);B.propTypes={siteTitle:l.a.string},B.defaultProps={siteTitle:""};var O=B,j=a(154),S=a(162),x=a.n(S),F=function(){return i.a.createElement("footer",{className:x.a.footer},i.a.createElement("div",null,"Version ",i.a.createElement("span",{className:x.a.version},j.a)," - Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{className:x.a.builtWith},"Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},L=(a(75),a(74),a(146)),C=a(164),I=a.n(C),R=function(e){function t(t){var a,n=(a=e.call(this,t)||this).getPositionObject(a.props.position),r=[I.a.snackbar,I.a[""+n.vertical+n.horizontal+"hide"]];return a.state={classes:r.join(" "),title:"Snackbar title",message:"Dummy snackbar message text.",position:n},a.handleEvent=a.handleEvent.bind(h()(a)),L.a.addEventListener("authenticationFailed",a.handleEvent),a}r()(t,e);var a=t.prototype;return a.getPositionObject=function(e){void 0===e&&(e="bottom left");var t=e.split(/[- ]/),a={vertical:t.filter(function(e){return e.match(/(top|bottom)/)}).shift(),horizontal:t.filter(function(e){return e.match(/(left|center|right)/)}).shift()};if(console.log("snackbar position object:",a),"string"!=typeof a.vertical||"string"!=typeof a.horizontal)throw new TypeError('"position" prop to SnackBar not valid.');return a},a.handleEvent=function(e){var t=this.props.timeout||5e3,a=this.state.position,n=e.detail,r=n.title,o=n.message,i=[I.a.snackbar,I.a[""+a.vertical+a.horizontal+"show"]],s=[I.a.snackbar,I.a[""+a.vertical+a.horizontal+"hide"]];this.setState({title:r,message:o,classes:i.join(" ")}),setTimeout(function(){console.log("doing snackbar timeout."),this.setState({classes:s.join(" ")})}.bind(this),t)},a.render=function(){var e=this.state,t=e.classes,a=e.title,n=e.message;return i.a.createElement("div",{className:t},i.a.createElement("h6",null,a),i.a.createElement("p",null,n))},t}(i.a.Component),G=a(165),q=a.n(G),z=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={classes:q.a.hide},a.handleBalanceOk=a.handleBalanceOk.bind(h()(a)),L.a.addEventListener("gotBalanceOk",a.handleBalanceOk),a}r()(t,e);var a=t.prototype;return a.handleBalanceOk=function(){console.log("Blip: got balance ok"),this.setState({classes:q.a.show}),setTimeout(function(){this.setState({classes:q.a.hide})}.bind(this),800)},a.render=function(){var e=this.state.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:q.a.blipBox,className:e}),i.a.createElement("div",null))},t}(i.a.Component),P=(a(166),a(167)),A=a.n(P),D=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerTitle,a=e.children;return i.a.createElement("main",{className:A.a.mainWrapper},i.a.createElement(O,{headerTitle:t}),i.a.createElement("section",null,a),i.a.createElement(F,null),i.a.createElement(R,{timeout:"6000",position:"bottom right"}),i.a.createElement(z,null))},t}(i.a.Component);D.propTypes={children:l.a.node.isRequired};t.a=D}}]);
//# sourceMappingURL=component---src-pages-404-js-8a61e002d688291a8aba.js.map