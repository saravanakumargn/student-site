(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{142:function(e,t,a){"use strict";a.r(t);a(184);var n=a(7),r=a.n(n),i=(a(34),a(0)),o=a.n(i),s=a(157),c=a(168),l=a.n(c),u=a(197),m=a.n(u),p=a(192),d=a.n(p),f=a(154),g=a(183),h=a.n(g),y=a(161),E=a.n(y),v=a(209),b=a.n(v),x=a(198),w=a.n(x),N=a(164),T=a(163);function _(e){return o.a.createElement(d.a,Object.assign({button:!0,component:"a"},e))}var j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.pageContext,n=e.classes,r=a.colleges,i=a.pageStartsArray;return o.a.createElement(T.a,{pathname:t.pathname},o.a.createElement(l.a,{container:!0,spacing:8},o.a.createElement(l.a,{item:!0,xs:12,md:8},r.map(function(e){return o.a.createElement(h.a,{className:n.content,elevation:1,key:e.node.id},o.a.createElement(l.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},o.a.createElement(E.a,{variant:"h6",gutterBottom:!0,color:"primary",component:s.a,to:"/"+e.node.slug},e.node.name),o.a.createElement(E.a,{variant:"subtitle1",gutterBottom:!0,color:"secondary"},e.node.collcode)),o.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.node.add1),o.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Year of Starts: ",e.node.yos))})),o.a.createElement(l.a,{item:!0,xs:12,md:4},o.a.createElement(h.a,{elevation:1},o.a.createElement(m.a,null,i.map(function(e){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement(_,{href:"/tamilnadu-engineering-colleges-starts-with-"+e},o.a.createElement(w.a,{primary:"Colleges starts with - "+e.toUpperCase()})),o.a.createElement(b.a,null))}))))))},t}(o.a.Component);t.default=Object(N.a)(Object(f.withStyles)(function(e){return{root:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),content:Object.assign({},e.mixins.gutters(),{marginTop:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(j))},156:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(t,"a",function(){return c.a});a(156),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(4),c=a.n(s),l=a(175),u=a.n(l),m=a(179),p=a.n(m),d=a(154),f=a(176),g=a.n(f),h=a(177),y=a.n(h),E=a(166),v=a.n(E),b=a(161),x=a.n(b),w=a(178),N=a.n(w),T=a(167),_=a.n(T),j=a(157);var S=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},menuitems:{display:"flex"},menuitem:{color:"#ffffff"}})(function(e){var t=e.classes,a=e.isShowBack;return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,null,o.a.createElement(y.a,null,a&&o.a.createElement(N.a,{className:t.menuButton,onClick:function(){window.history.back()},color:"inherit","aria-label":"Menu"},o.a.createElement(_.a,null)),o.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.grow},"KalviApp"),!a&&o.a.createElement("div",{className:t.menuitems},o.a.createElement(v.a,{className:t.menuitem,size:"small",component:j.a,to:"/"},"Home"),o.a.createElement(v.a,{className:t.menuitem,component:j.a,to:"/contact"},"Contact Us")))))}),C="https://www.kalviapp.com",k=[{"@context":"http://schema.org","@type":"WebSite",url:C,name:"kalviapp"}],B=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.children,n=e.isShowBack,r=e.title,i=e.description,s=e.pathname,c=""+C+s,l=r?"KalviApp - கல்வி - "+r:"KalviApp - கல்வி",m=i?"KalviApp - கல்வி - "+i:"KalviApp - கல்வி";return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null),o.a.createElement(u.a,null,o.a.createElement("title",null,l),o.a.createElement("meta",{name:"description",content:m}),o.a.createElement("link",{rel:"canonical",href:c}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(k)),o.a.createElement("meta",{property:"og:url",content:c}),o.a.createElement("meta",{property:"og:title",content:l}),o.a.createElement("meta",{property:"og:description",content:m})),o.a.createElement(S,{isShowBack:n}),o.a.createElement("main",null,o.a.createElement("div",{className:t.appBarSpacer}),o.a.createElement("div",{className:t.content},a)),o.a.createElement("div",{className:t.appBarSpacer}))},t}(o.a.PureComponent);B.propTypes={children:c.a.object.isRequired,classes:c.a.object.isRequired,isShowBack:c.a.bool,pathname:c.a.string};t.a=Object(d.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.grey[200]},containerFluid:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},stickToBottom:{width:"100%",position:"fixed",bottom:0},appBarSpacer:e.mixins.toolbar,contentPadding:{flexGrow:1,padding:e.spacing.unit},content:{maxWidth:1200,padding:2*e.spacing.unit,margin:"auto"}}})(B)},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(154),c=a(180),l=a.n(c),u=a(165);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(u.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(l.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(e,this.props)))},a}(o.a.Component)}},165:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return p});a(75),a(54),a(76),a(182);var r=a(169),i=a(154),o=a(173),s=a.n(o),c=a(174),l=a.n(c),u=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:s.a,secondary:s.a,background:{default:l.a[200]}}});function m(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function p(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(181),a(74))},198:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(217))},217:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(73)),i=n(a(33)),o=n(a(155)),s=n(a(0)),c=(n(a(4)),n(a(158))),l=n(a(159)),u=n(a(161)),m=n(a(193)),p=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function d(e){var t=e.children,a=e.classes,n=e.className,l=e.disableTypography,p=e.inset,d=e.primary,f=e.primaryTypographyProps,g=e.secondary,h=e.secondaryTypographyProps,y=e.theme,E=(0,o.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps","theme"]);return s.default.createElement(m.default.Consumer,null,function(e){var o,m=e.dense,v=null!=d?d:t;null==v||v.type===u.default||l||(v=s.default.createElement(u.default,(0,r.default)({variant:y.typography.useNextVariants?"body1":"subheading",className:(0,c.default)(a.primary,(0,i.default)({},a.textDense,m)),component:"span"},f),v));var b=g;return null==b||b.type===u.default||l||(b=s.default.createElement(u.default,(0,r.default)({className:(0,c.default)(a.secondary,(0,i.default)({},a.textDense,m)),color:"textSecondary"},h),b)),s.default.createElement("div",(0,r.default)({className:(0,c.default)(a.root,(o={},(0,i.default)(o,a.dense,m),(0,i.default)(o,a.inset,p),o),n)},E),v,b)})}t.styles=p,d.defaultProps={disableTypography:!1,inset:!1};var f=(0,l.default)(p,{name:"MuiListItemText",withTheme:!0})(d);t.default=f}}]);