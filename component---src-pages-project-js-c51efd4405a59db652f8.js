(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(0),i=n.n(a),r=(n(140),n(146)),o=n(148);t.default=function(e){return e.data.allPagesJson.edges.map(function(e){var t=e.node,n=e.index;return i.a.createElement(r.a,null,i.a.createElement("h2",null,t.title),i.a.createElement("p",null,t.summary),i.a.createElement(o.h,null,i.a.createElement(o.g,null,i.a.createElement(o.a,null,i.a.createElement(o.c,null),i.a.createElement(o.d,null),i.a.createElement(o.b,null))),i.a.createElement(o.e,null,i.a.createElement("div",{key:n},t.projects.map(function(e,t){return i.a.createElement("div",null,i.a.createElement(o.f,{style:{fontSize:"20px"}},"/* ",e.project_title," */"),i.a.createElement("div",null,"Built for: ",e.description),i.a.createElement("div",null,"Built with: ",e.tools))})))))})};var l="3478037857"},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(139),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(141),s=n.n(d);n.d(t,"PageRenderer",function(){return s.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var u=i.a.createContext({}),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Sigit Kuncoro | Web Developer Engineer",siteTitle:"Sigit Kuncoro",description:"Web Developer Engineer"}}}}},144:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(50),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},145:function(e,t,n){},146:function(e,t,n){"use strict";var a=n(143),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(147),d=n.n(c),s=n(140),p=n(7),u=n.n(p),m=n(142),g=m.a.div.withConfig({displayName:"headerstyle__HeaderWrapper",componentId:"sc-1brgj5b-0"})(["width:100%;@media (min-width:769px){top:0;position:absolute;}"]),f=m.a.div.withConfig({displayName:"headerstyle__Navigation",componentId:"sc-1brgj5b-1"})(["display:block;padding:1rem 10vw;text-align:right;z-index:200;@media (min-width:769px){position:fixed;top:0;left:0;right:0;}"]),h=m.a.ul.withConfig({displayName:"headerstyle__NavigationUl",componentId:"sc-1brgj5b-2"})(["list-style:none;"]),b=m.a.li.withConfig({displayName:"headerstyle__NavigationLi",componentId:"sc-1brgj5b-3"})(["display:inline-block;margin-left:1rem;"]),y=Object(m.a)(s.Link).withConfig({displayName:"headerstyle__NavigationLink",componentId:"sc-1brgj5b-4"})(["text-transform:capitalize;font-weight:bold;text-decoration:none;color:",";transition:all 0.3s ease 0s;:hover{border-bottom:4px solid ",";}"],function(e){return e.colorMenu},function(e){return e.colorHover}),w=m.a.div.withConfig({displayName:"headerstyle__SiteTitleWrapper",componentId:"sc-1brgj5b-5"})(["z-index:500;padding:15px;@media (min-width:769px){position:fixed;top:50%;left:calc(20vw - 10rem);-webkit-transform:translateY(-50%);transform:translateY(-50%);width:25%;}"]),x=m.a.div.withConfig({displayName:"headerstyle__LogoWrapper",componentId:"sc-1brgj5b-6"})(["display:flex;justify-content:space-between;align-items:center;width:45vh;"]),v=m.a.span.withConfig({displayName:"headerstyle__Logo",componentId:"sc-1brgj5b-7"})(["text-transform:uppercase;font-weight:bold;letter-spacing:1px;color:#fff;position:relative;z-index:10;font-size:35px;height:60px;width:60px;margin-right:10px;background:",";padding:5px;overflow:hidden;display:flex;justify-content:center;align-items:center;"],function(e){return e.bgLogo}),E=m.a.h1.withConfig({displayName:"headerstyle__SiteTitle",componentId:"sc-1brgj5b-8"})(["text-transform:capitalize;font-weight:bold;margin:0 auto;"]),_=m.a.p.withConfig({displayName:"headerstyle__Description",componentId:"sc-1brgj5b-9"})([""]),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={colorMenu:"rgb(39,39,39)",bgLogo:"rgb(22,160,133)"},t.changeColorMenu=function(){document.addEventListener("scroll",function(){t.setState(function(e,t){return window.scrollY>118?{colorMenu:"rgb(255, 255, 255)"}:{colorMenu:"rgb(39,39,39)"}})})},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.changeColorMenu()},n.render=function(){var e=this.props,t=e.siteTitle,n=e.siteDescription;return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(y,{colorMenu:this.state.colorMenu,colorHover:"rgb(22, 160, 133)",to:"/"},"Home")),r.a.createElement(b,null,r.a.createElement(y,{colorMenu:this.state.colorMenu,colorHover:"rgb(231, 76, 60)",to:"/about"},"About")),r.a.createElement(b,null,r.a.createElement(y,{colorMenu:this.state.colorMenu,colorHover:"rgb(41, 128, 185)",to:"/project"},"Project")),r.a.createElement(b,null,r.a.createElement(y,{colorMenu:this.state.colorMenu,colorHover:"#ffbd4c",to:"/contact"},"Contact")))),r.a.createElement(w,null,r.a.createElement(x,null,r.a.createElement(v,{bgLogo:this.state.bgLogo},"SK"),r.a.createElement(E,null,t)),r.a.createElement(_,null,n))))},t}(r.a.Component);C.propTypes={siteTitle:l.a.string,siteDescription:l.a.string},C.defaultProps={siteTitle:"",siteDescription:""};var k=C,j=m.a.div.withConfig({displayName:"layoutstyle__Main",componentId:"gixflx-0"})(["padding:1rem;@media (min-width:769px){position:absolute;top:25%;right:10vw;left:40vw;display:block;padding:0;margin-bottom:30px;min-height:76vh;}"]),I=(n(145),function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"114715209",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Sigit, Kuncoro, javascript, reactjs, nodejs, web developer"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Inconsolata",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700",rel:"stylesheet"}),r.a.createElement(k,{siteTitle:e.site.siteMetadata.siteTitle,siteDescription:e.site.siteMetadata.description}),r.a.createElement(j,null,t))},data:a})});I.propTypes={children:l.a.node.isRequired};t.a=I},148:function(e,t,n){"use strict";n.d(t,"h",function(){return i}),n.d(t,"g",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return p});var a=n(142),i=a.a.div.withConfig({displayName:"pagestyle__Window",componentId:"re4zww-0"})(["font-family:Inconsolata,monospace;color:#e8e3e3;@media (min-width:769px){display:block;box-shadow:rgba(0,0,0,0.2) 1px 1px 10px;border-radius:0 0 6px 6px;}"]),r=a.a.div.withConfig({displayName:"pagestyle__TitleBar",componentId:"re4zww-1"})(["background:rgb(39,39,39);width:100%;display:flex;justify-content:left;align-items:center;border-radius:6px 6px 0px 0px;height:18px;"]),o=a.a.div.withConfig({displayName:"pagestyle__Button",componentId:"re4zww-2"})(["padding:0px 6px;"]),l=a.a.div.withConfig({displayName:"pagestyle__ButtonRed",componentId:"re4zww-3"})(["background:#ff5c5c;font-size:9pt;width:6px;height:6px;border:1px solid #e33e41;border-radius:50%;display:inline-block;"]),c=a.a.div.withConfig({displayName:"pagestyle__ButtonYellow",componentId:"re4zww-4"})(["background:#ffbd4c;font-size:9pt;line-height:11px;margin-left:4px;width:6px;height:6px;border:1px solid #e09e3e;border-radius:50%;display:inline-block;"]),d=a.a.div.withConfig({displayName:"pagestyle__ButtonGreen",componentId:"re4zww-5"})(["background:#00ca56;font-size:9pt;line-height:11px;margin-left:6px;width:6px;height:6px;border:1px solid #14ae46;border-radius:50%;display:inline-block;"]),s=a.a.div.withConfig({displayName:"pagestyle__Content",componentId:"re4zww-6"})(["padding:1rem;background:#1b1b1b;border-radius:0 0 6px 6px;@media (min-width:769px){top:25%;right:10vw;left:40vw;display:block;padding-right:15px;padding-left:15px;padding-top:15px;padding-bottom:30px;}"]),p=a.a.h4.withConfig({displayName:"pagestyle__Title",componentId:"re4zww-7"})(["font-family:Inconsolata,monospace;font-weight:400;color:rgb(170,170,170);margin:20px 0px 20px;"])}}]);
//# sourceMappingURL=component---src-pages-project-js-c51efd4405a59db652f8.js.map