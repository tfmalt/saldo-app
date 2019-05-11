(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(152),i=n(149),c=n(178),s=n.n(c),u=(n(165),n(179)),l=n.n(u),h=n(34),p=n.n(h),f=n(7),d=n.n(f),m=n(161),g=n(162),v=n(180),y=n.n(v),w=function(){return a.a.createElement("div",{className:y.a.wrapper},a.a.createElement("div",{className:y.a.spinner}))},E=n(181),b=n.n(E),x=function(t){function e(e){var n;n=t.call(this,e)||this;var r="undefined"==typeof window?{userId:"",secret:""}:JSON.parse(localStorage.getItem("sd60:authenticate"));return n.state={userId:null===r?"":r.userId,secret:null===r?"":r.secret,isWaiting:!1},n.handleSubmit=n.handleSubmit.bind(p()(n)),n.handleChange=n.handleChange.bind(p()(n)),n}d()(e,t);var n=e.prototype;return n.handleSubmit=function(){var t=l()(s.a.mark(function t(e){var n,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Got a submit! "+this.state.userId),e.preventDefault(),this.setState({isWaiting:!0}),t.next=5,fetch(m.a.token,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:this.state.userId,client_secret:this.state.secret})});case 5:return n=t.sent,console.log("Got res:",n.status,n.statusText),t.next=9,n.json();case 9:if(r=t.sent,this.setState({isWaiting:!1}),400!==n.status){t.next=14;break}return console.log("Got wrong auth:",r),t.abrupt("return");case 14:if(!n.ok){t.next=21;break}if(r.hasOwnProperty("access_token")&&r.hasOwnProperty("expires_in")){t.next=18;break}throw console.warn(r),new Error("Something is not right with the access_token Response.");case 18:return r.date=new Date,"undefined"!=typeof window&&(localStorage.setItem("sd60:token",JSON.stringify(r)),localStorage.setItem("sd60:authenticate",JSON.stringify({success:!0,userId:this.state.userId,secret:this.state.secret}))),t.abrupt("return",Object(g.a)("/"));case 21:throw new Error("Got an invalid response. "+n.statusText);case 22:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.handleChange=function(t){var e={};e[t.target.id]=t.target.value,this.setState(e)},n.render=function(){var t=this.state.isWaiting;return a.a.createElement("div",{id:"wrapper"},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",{className:"textfield"},a.a.createElement("input",{type:"text",required:!0,value:this.state.userId,onChange:this.handleChange,id:"userId"}),a.a.createElement("div",{id:"underline"}),a.a.createElement("label",null,"Bruker id")),a.a.createElement("div",{className:"textfield"},a.a.createElement("input",{type:"text",required:!0,value:this.state.secret,onChange:this.handleChange,id:"secret"}),a.a.createElement("div",{id:"underline"}),a.a.createElement("label",null,"Passord")),a.a.createElement("button",{className:b.a.authenticate,type:"submit",id:"authenticate"},a.a.createElement("div",{className:t?b.a.hidden:b.a.visible},"Logg inn"),a.a.createElement("div",{className:t?b.a.visible:b.a.hidden},a.a.createElement(w,null)))))},e}(a.a.Component);e.default=function(){return a.a.createElement(o.a,{headerTitle:"Saldo - Logg inn"},a.a.createElement(i.a,{title:"Authenticate"}),a.a.createElement(x,null))}},148:function(t){t.exports={a:"0.5.1"}},149:function(t,e,n){"use strict";var r=n(150),a=n(0),o=n.n(a),i=n(4),c=n.n(i),s=n(160),u=n.n(s);function l(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,c=t.title,s=r.data.site,l=e||s.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},150:function(t){t.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}},151:function(t,e,n){var r;t.exports=(r=n(163))&&r.default||r},152:function(t,e,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=n(4),s=n.n(c),u=n(154),l=n(34),h=n.n(l),p=(n(153),n(155),function(t){var e=t.name,n=t.trigger;return console.log("icon:",e,n),i.a.createElement("button",{className:"icon-button",onClick:n},i.a.createElement("i",null,e))}),f=(n(156),function(t){var e=t.headerTitle,n=t.trigger;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"app-bar"},i.a.createElement(p,{name:"menu",trigger:n}),i.a.createElement("h6",{id:"title"},e)))}),d=n(157),m=n.n(d),g=function(t){function e(e){var n;return(n=t.call(this,e)||this).openMenu=function(t){console.log("open menu:",t),n.setState({mainMenu:m.a.mainMenuOpen})},n.closeMenu=function(t){console.log("close menu:",t),n.setState({mainMenu:m.a.mainMenuClosed})},n.handleTouchStart=function(t){console.log("touch start:",t)},console.log("header constructor"),n.state={mainMenu:m.a.mainMenuClosed},n.openMenu=n.openMenu.bind(h()(n)),n}return a()(e,t),e.prototype.render=function(){var t=this.props.headerTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(f,{headerTitle:t,trigger:this.openMenu})),i.a.createElement("nav",{id:m.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},i.a.createElement("div",{id:"TopBar"},i.a.createElement("h6",{className:m.a.topbarTitle},"Hovedmeny"),i.a.createElement(p,{name:"close",trigger:this.closeMenu})),i.a.createElement("div",{className:m.a.topbarMenuItems},i.a.createElement("ul",null,i.a.createElement("li",null,"Logg ut")))))},e}(i.a.Component);g.propTypes={siteTitle:s.a.string},g.defaultProps={siteTitle:""};var v=g,y=n(148),w=(n(158),n(159),u.a.span.withConfig({displayName:"Layout__Version",componentId:"sc-1obgvso-0"})(["font-weight:700;"])),E=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props,e=t.headerTitle,n=t.children;return i.a.createElement("main",null,i.a.createElement(v,{headerTitle:e}),i.a.createElement("section",null,n),i.a.createElement("footer",null,i.a.createElement("div",null,"Version ",i.a.createElement(w,null,y.a)," by Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{id:"built-with"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},e}(i.a.Component);E.propTypes={children:s.a.node.isRequired};e.a=E},161:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r={urls:{token:"https://api.malt.no/banking/oauth2/token",balance:"https://api.malt.no/banking/balance"}},a=r.urls},162:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(33);n.d(e,"a",function(){return c.navigate});n(151),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},163:function(t,e,n){"use strict";n.r(e);n(35);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(56),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},165:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(t,e,n){var r=l;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?f:h,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",f="completed",d={};function m(){}function g(){}function v(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(_([])));E&&E!==n&&r.call(E,o)&&(y=E);var b=v.prototype=m.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(n,a){function o(){return new Promise(function(e,o){!function e(n,a,o,i){var c=u(t[n],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,i)})}i(c.arg)}(n,a,e,o)})}return e=e?e.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=b.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,a){var o=new L(s(e,n,r,a));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;T(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},178:function(t,e,n){t.exports=n(165)},179:function(t,e){function n(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)})}}}}]);
//# sourceMappingURL=component---src-pages-authenticate-js-8ab4a4b668db65de6638.js.map