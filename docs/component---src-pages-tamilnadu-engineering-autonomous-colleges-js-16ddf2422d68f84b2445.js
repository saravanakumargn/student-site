(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y});n(187);var a=n(7),i=n.n(a),r=(n(34),n(0)),o=n.n(r),s=n(160),c=n(164),l=n.n(c),u=n(157),p=n(170),m=n.n(p),d=n(186),g=n.n(d),f=n(166),h=n(167),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.data,a=e.location,i=n.allGetCollegesJson.edges.filter(function(e){return"Yes"===e.node.autonomous});return o.a.createElement(f.a,{pathname:a.pathname,title:"Tamilnadu Engineering Autonomous Colleges"},o.a.createElement(l.a,{variant:"h4",gutterBottom:!0},"Tamilnadu Engineering Autonomous Colleges"),i.map(function(e){return o.a.createElement(g.a,{className:t.content,elevation:1,key:e.node.id},o.a.createElement(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},o.a.createElement(l.a,{variant:"h6",gutterBottom:!0,color:"primary",component:s.a,to:"/"+e.node.slug},e.node.name),o.a.createElement(l.a,{variant:"subtitle1",gutterBottom:!0,color:"secondary"},e.node.collcode)),o.a.createElement(l.a,{variant:"body1",gutterBottom:!0},e.node.add1),o.a.createElement(l.a,{variant:"body2",gutterBottom:!0},"Year of Starts: ",e.node.yos))}))},t}(o.a.Component),y="2856865788";t.default=Object(h.a)(Object(u.withStyles)(function(e){return{root:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,marginBottom:2*e.spacing.unit}),content:Object.assign({},e.mixins.gutters(),{marginTop:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(x))},158:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},160:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(32),c=n.n(s);n.d(t,"a",function(){return c.a});n(158),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},165:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(55),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},166:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),s=n(4),c=n.n(s),l=n(173),u=n.n(l),p=n(180),m=n.n(p),d=n(157),g=n(177),f=n.n(g),h=n(178),x=n.n(h),y=n(169),v=n.n(y),w=n(164),E=n.n(w),b=n(179),j=n.n(b),C=n(171),N=n.n(C),S=n(160);var k=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},menuitems:{display:"flex"},menuitem:{color:"#ffffff"}})(function(e){var t=e.classes,n=e.isShowBack;return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,null,o.a.createElement(x.a,null,n&&o.a.createElement(j.a,{className:t.menuButton,onClick:function(){window.history.back()},color:"inherit","aria-label":"Menu"},o.a.createElement(N.a,null)),o.a.createElement(E.a,{variant:"h6",color:"inherit",className:t.grow},"KalviApp"),!n&&o.a.createElement("div",{className:t.menuitems},o.a.createElement(v.a,{className:t.menuitem,size:"small",component:S.a,to:"/"},"Home"),o.a.createElement(v.a,{className:t.menuitem,component:S.a,to:"/contact"},"Contact Us")))))}),_="https://kalviapp.com",M=[{"@context":"http://schema.org","@type":"WebSite",url:_,name:"kalviapp"}],A=[{"@context":"http://schema.org","@type":"Organization",url:_,email:"KalviApp(at)gmail.com",name:"kalviApp"}],I=[{"@context":"http://schema.org","@type":"MobileApplication",operatingSystem:"Android",applicationCategory:"Education",image:"https://lh3.googleusercontent.com/it-K1E_qW89VwFblMVCZOwRVkKK5ll5nZptv1gtNUyjqZ1j-5oa5aLTuNzM4ledPmA=s380-rw",description:"TNEA 2019 - Tamilnadu Engineering Counselling",publisher:"kalviApp",name:"kalviApp",offers:{"@type":"Offer",price:"0",priceCurrency:"INR",url:"https://play.google.com/store/apps/details?id=in.kalviapp.tamilnaduengineeringcolleges"},aggregateRating:{"@type":"AggregateRating",ratingValue:"5",reviewCount:"2"}}],B=[{"@context":"http://schema.org","@type":"Person",name:"KalviApp",url:"https://kalviapp.com/",sameAs:["https://www.instagram.com/kalviapp/","https://www.facebook.com/KalviApp/"]}],O=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.children,a=e.isShowBack,i=e.title,r=e.description,s=e.pathname,c=""+_+s,l="TNEA 2019 - Tamilnadu Engineering Colleges Counselling - No. 1 education assistance App",p=i?i+" - "+l:""+l,d=r?r+" - "+l:""+l;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null),o.a.createElement(u.a,null,o.a.createElement("title",null,p),o.a.createElement("meta",{name:"description",content:d}),o.a.createElement("link",{rel:"canonical",href:c}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(M)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(A)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(I)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(B)),o.a.createElement("meta",{property:"og:url",content:c}),o.a.createElement("meta",{property:"og:title",content:p}),o.a.createElement("meta",{property:"og:description",content:d})),o.a.createElement(k,{isShowBack:a}),o.a.createElement("main",null,o.a.createElement("div",{className:t.appBarSpacer}),o.a.createElement("div",{className:t.content},n)),o.a.createElement("div",{className:t.appBarSpacer}))},t}(o.a.PureComponent);O.propTypes={children:c.a.object.isRequired,classes:c.a.object.isRequired,isShowBack:c.a.bool,pathname:c.a.string};t.a=Object(d.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.grey[200]},containerFluid:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},stickToBottom:{width:"100%",position:"fixed",bottom:0},appBarSpacer:e.mixins.toolbar,contentPadding:{flexGrow:1,padding:e.spacing.unit},content:{maxWidth:1200,padding:2*e.spacing.unit,margin:"auto"}}})(O)},167:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),s=n(157),c=n(181),l=n.n(c),u=n(168);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(u.a)(),n}i()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return o.a.createElement(l.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(e,this.props)))},n}(o.a.Component)}},168:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return m});n(75),n(54),n(76),n(183);var i=n(172),r=n(157),o=n(175),s=n.n(o),c=n(176),l=n.n(c),u=Object(r.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:s.a,secondary:s.a,background:{default:l.a[200]}}});function p(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new i.SheetsRegistry,generateClassName:Object(r.createGenerateClassName)()}}function m(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=p()),a.__INIT_MATERIAL_UI__):p()}}).call(this,n(182),n(74))},170:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(184))},184:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=a(n(33)),r=a(n(159)),o=a(n(73)),s=a(n(0)),c=(a(n(4)),a(n(161))),l=(n(163),a(n(162))),u=n(193),p=(a(n(185)),[0,8,16,24,32,40]),m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var d=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return p.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};m.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function g(e){var t,n=e.alignContent,a=e.alignItems,l=e.classes,u=e.className,p=e.component,m=e.container,d=e.direction,f=e.item,h=e.justify,x=e.lg,y=e.md,v=e.sm,w=e.spacing,E=e.wrap,b=e.xl,j=e.xs,C=e.zeroMinWidth,N=(0,r.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),S=(0,c.default)((t={},(0,i.default)(t,l.container,m),(0,i.default)(t,l.item,f),(0,i.default)(t,l.zeroMinWidth,C),(0,i.default)(t,l["spacing-xs-".concat(String(w))],m&&0!==w),(0,i.default)(t,l["direction-xs-".concat(String(d))],d!==g.defaultProps.direction),(0,i.default)(t,l["wrap-xs-".concat(String(E))],E!==g.defaultProps.wrap),(0,i.default)(t,l["align-items-xs-".concat(String(a))],a!==g.defaultProps.alignItems),(0,i.default)(t,l["align-content-xs-".concat(String(n))],n!==g.defaultProps.alignContent),(0,i.default)(t,l["justify-xs-".concat(String(h))],h!==g.defaultProps.justify),(0,i.default)(t,l["grid-xs-".concat(String(j))],!1!==j),(0,i.default)(t,l["grid-sm-".concat(String(v))],!1!==v),(0,i.default)(t,l["grid-md-".concat(String(y))],!1!==y),(0,i.default)(t,l["grid-lg-".concat(String(x))],!1!==x),(0,i.default)(t,l["grid-xl-".concat(String(b))],!1!==b),t),u);return s.default.createElement(p,(0,o.default)({className:S},N))}t.styles=d,g.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var f=(0,l.default)(d,{name:"MuiGrid"})(g);t.default=f},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},187:function(e,t,n){var a=n(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(17)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);