(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(147),i=n(146);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,n){"use strict";var a=n(150),r=n(0),o=n.n(r),i=n(4),l=n.n(i),s=n(158),c=n.n(s);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title,s=a.data.site,u=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},147:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(4),s=n.n(l),c=n(157),u=n(34),m=n.n(u),p=(n(148),n(152),function(e){var t=e.name,n=e.trigger;return console.log("icon:",t,n),i.a.createElement("button",{className:"icon-button",onClick:n},i.a.createElement("i",null,t))}),d=(n(153),function(e){var t=e.headerTitle,n=e.trigger;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"app-bar"},i.a.createElement(p,{name:"menu",trigger:n}),i.a.createElement("h6",{id:"title"},t)))}),h=n(154),g=n.n(h),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).openMenu=function(e){console.log("open menu:",e),n.setState({mainMenu:g.a.mainMenuOpen})},n.closeMenu=function(e){console.log("close menu:",e),n.setState({mainMenu:g.a.mainMenuClosed})},n.handleTouchStart=function(e){console.log("touch start:",e)},console.log("header constructor"),n.state={mainMenu:g.a.mainMenuClosed},n.openMenu=n.openMenu.bind(m()(n)),n}return r()(t,e),t.prototype.render=function(){var e=this.props.headerTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(d,{headerTitle:e,trigger:this.openMenu})),i.a.createElement("nav",{id:g.a.mainMenu,onTouchStart:this.handleTouchStart,className:this.state.mainMenu},i.a.createElement("div",{id:"TopBar"},i.a.createElement("h6",{className:g.a.topbarTitle},"Hovedmeny"),i.a.createElement(p,{name:"close",trigger:this.closeMenu})),i.a.createElement("div",{className:g.a.topbarMenuItems},i.a.createElement("ul",null,i.a.createElement("li",null,"Logg ut")))))},t}(i.a.Component);f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var E=f,w=n(149),y=(n(155),n(156),c.a.span.withConfig({displayName:"Layout__Version",componentId:"sc-1obgvso-0"})(["font-weight:700;"])),M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerTitle,n=e.children;return i.a.createElement("main",null,i.a.createElement(E,{headerTitle:t}),i.a.createElement("section",null,n),i.a.createElement("footer",null,i.a.createElement("div",null,"Version ",i.a.createElement(y,null,w.a)," by Thomas Malt ©"," ",(new Date).getFullYear()),i.a.createElement("div",{id:"built-with"},"Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},t}(i.a.Component);M.propTypes={children:s.a.node.isRequired};t.a=M},149:function(e){e.exports={a:"0.5.4"}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Saldo",description:"A simple progressive web app to see the balance of banking accounts",author:"thomas@malt.no"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-44e20e0a3d422c216562.js.map