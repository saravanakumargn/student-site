(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return v});n(184);var a=n(7),r=n.n(a),i=(n(34),n(0)),o=n.n(i),c=n(157),s=n(161),l=n.n(s),u=n(154),m=n(168),d=n.n(m),p=n(183),f=n.n(p),g=n(163),x=n(164),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.data,a=e.location,r=n.allGetCollegesJson.edges.filter(function(e){return 2===e.node.gender});return o.a.createElement(g.a,{pathname:a.pathname},o.a.createElement(l.a,{variant:"h4",gutterBottom:!0},"Tamilnadu Engineering Womens Colleges"),r.map(function(e){return o.a.createElement(f.a,{className:t.content,elevation:1,key:e.node.id},o.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},o.a.createElement(l.a,{variant:"h6",gutterBottom:!0,color:"primary",component:c.a,to:"/"+e.node.slug},e.node.name),o.a.createElement(l.a,{variant:"subtitle1",gutterBottom:!0,color:"secondary"},e.node.collcode)),o.a.createElement(l.a,{variant:"body1",gutterBottom:!0},e.node.add1),o.a.createElement(l.a,{variant:"body2",gutterBottom:!0},"Year of Starts: ",e.node.yos))}))},t}(o.a.Component),v="1078939542";t.default=Object(x.a)(Object(u.withStyles)(function(e){var t;return{root:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,marginBottom:2*e.spacing.unit}),card:(t={width:300,margin:e.spacing.unit},t[e.breakpoints.down("sm")]={minWidth:"100%"},t),content:Object.assign({},e.mixins.gutters(),{marginTop:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(h))},156:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(32),s=n.n(c);n.d(t,"a",function(){return s.a});n(156),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},162:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(56),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(4),s=n.n(c),l=n(175),u=n.n(l),m=n(179),d=n.n(m),p=n(154),f=n(176),g=n.n(f),x=n(177),h=n.n(x),v=n(166),y=n.n(v),w=n(161),b=n.n(w),E=n(178),j=n.n(E),C=n(167),S=n.n(C),N=n(157);var _=Object(p.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},menuitems:{display:"flex"},menuitem:{color:"#ffffff"}})(function(e){var t=e.classes,n=e.isShowBack;return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,null,o.a.createElement(h.a,null,n&&o.a.createElement(j.a,{className:t.menuButton,onClick:function(){window.history.back()},color:"inherit","aria-label":"Menu"},o.a.createElement(S.a,null)),o.a.createElement(b.a,{variant:"h6",color:"inherit",className:t.grow},"KalviApp"),!n&&o.a.createElement("div",{className:t.menuitems},o.a.createElement(y.a,{className:t.menuitem,size:"small",component:N.a,to:"/"},"Home"),o.a.createElement(y.a,{className:t.menuitem,component:N.a,to:"/contact"},"Contact Us")))))}),B="https://www.kalviapp.com",I=[{"@context":"http://schema.org","@type":"WebSite",url:B,name:"kalviapp"}],M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.children,a=e.isShowBack,r=e.title,i=e.description,c=e.pathname,s=""+B+c,l=r?"KalviApp - கல்வி - "+r:"KalviApp - கல்வி",m=i?"KalviApp - கல்வி - "+i:"KalviApp - கல்வி";return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null),o.a.createElement(u.a,null,o.a.createElement("title",null,l),o.a.createElement("meta",{name:"description",content:m}),o.a.createElement("link",{rel:"canonical",href:s}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(I)),o.a.createElement("meta",{property:"og:url",content:s}),o.a.createElement("meta",{property:"og:title",content:l}),o.a.createElement("meta",{property:"og:description",content:m})),o.a.createElement(_,{isShowBack:a}),o.a.createElement("main",null,o.a.createElement("div",{className:t.appBarSpacer}),o.a.createElement("div",{className:t.content},n)),o.a.createElement("div",{className:t.appBarSpacer}))},t}(o.a.PureComponent);M.propTypes={children:s.a.object.isRequired,classes:s.a.object.isRequired,isShowBack:s.a.bool,pathname:s.a.string};t.a=Object(p.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.grey[200]},containerFluid:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},stickToBottom:{width:"100%",position:"fixed",bottom:0},appBarSpacer:e.mixins.toolbar,contentPadding:{flexGrow:1,padding:e.spacing.unit},content:{maxWidth:1200,padding:2*e.spacing.unit,margin:"auto"}}})(M)},164:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(154),s=n(180),l=n.n(s),u=n(165);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(u.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return o.a.createElement(l.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(e,this.props)))},n}(o.a.Component)}},165:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return d});n(75),n(54),n(76),n(182);var r=n(169),i=n(154),o=n(173),c=n.n(o),s=n(174),l=n.n(s),u=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:c.a,secondary:c.a,background:{default:l.a[200]}}});function m(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function d(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=m()),a.__INIT_MATERIAL_UI__):m()}}).call(this,n(181),n(74))},168:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(171))},171:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(33)),i=a(n(155)),o=a(n(73)),c=a(n(0)),s=(a(n(4)),a(n(158))),l=(n(160),a(n(159))),u=n(185),m=(a(n(172)),[0,8,16,24,32,40]),d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return m.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};d.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function f(e){var t,n=e.alignContent,a=e.alignItems,l=e.classes,u=e.className,m=e.component,d=e.container,p=e.direction,g=e.item,x=e.justify,h=e.lg,v=e.md,y=e.sm,w=e.spacing,b=e.wrap,E=e.xl,j=e.xs,C=e.zeroMinWidth,S=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),N=(0,s.default)((t={},(0,r.default)(t,l.container,d),(0,r.default)(t,l.item,g),(0,r.default)(t,l.zeroMinWidth,C),(0,r.default)(t,l["spacing-xs-".concat(String(w))],d&&0!==w),(0,r.default)(t,l["direction-xs-".concat(String(p))],p!==f.defaultProps.direction),(0,r.default)(t,l["wrap-xs-".concat(String(b))],b!==f.defaultProps.wrap),(0,r.default)(t,l["align-items-xs-".concat(String(a))],a!==f.defaultProps.alignItems),(0,r.default)(t,l["align-content-xs-".concat(String(n))],n!==f.defaultProps.alignContent),(0,r.default)(t,l["justify-xs-".concat(String(x))],x!==f.defaultProps.justify),(0,r.default)(t,l["grid-xs-".concat(String(j))],!1!==j),(0,r.default)(t,l["grid-sm-".concat(String(y))],!1!==y),(0,r.default)(t,l["grid-md-".concat(String(v))],!1!==v),(0,r.default)(t,l["grid-lg-".concat(String(h))],!1!==h),(0,r.default)(t,l["grid-xl-".concat(String(E))],!1!==E),t),u);return c.default.createElement(m,(0,o.default)({className:N},S))}t.styles=p,f.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,l.default)(p,{name:"MuiGrid"})(f);t.default=g},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},184:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(17)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);