(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{145:function(e,t,a){"use strict";a.r(t);a(187);var n=a(7),r=a.n(n),i=(a(34),a(0)),o=a.n(i),c=a(160),s=a(170),l=a.n(s),p=a(207),u=a.n(p),m=a(200),d=a.n(m),g=a(157),f=a(186),h=a.n(f),y=a(164),E=a.n(y),v=a(215),b=a.n(v),w=a(267),x=a.n(w),N=a(214),T=a.n(N),j=a(167),C=a(166);function S(e){return o.a.createElement(d.a,Object.assign({button:!0,component:"a"},e))}var k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.pageContext,n=e.classes,r=a.branchData,i=a.collegesByBrchanCode,s=a.currentBranchData;return o.a.createElement(C.a,{pathname:t.pathname},o.a.createElement(E.a,{variant:"h4",gutterBottom:!0},s.node.bn),o.a.createElement(l.a,{container:!0,spacing:8},o.a.createElement(l.a,{item:!0,xs:12,md:8},i.map(function(e){return o.a.createElement(h.a,{className:n.content,elevation:1,key:e.node.id},o.a.createElement(l.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},o.a.createElement(E.a,{variant:"h6",gutterBottom:!0,color:"primary",component:c.a,to:"/"+e.node.slug},e.node.name),o.a.createElement(E.a,{variant:"subtitle1",gutterBottom:!0,color:"secondary"},e.node.collcode)),o.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.node.add1),o.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Year of Starts: ",e.node.yos))})),o.a.createElement(l.a,{item:!0,xs:12,md:4},o.a.createElement(h.a,{elevation:1},o.a.createElement(u.a,null,r.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.node.bc},o.a.createElement(S,{href:"/branches/"+x()(e.node.bn,{lower:!0})},o.a.createElement(T.a,{primary:e.node.bc+" - "+e.node.bn})),o.a.createElement(b.a,null))}))))))},t}(o.a.Component);t.default=Object(j.a)(Object(g.withStyles)(function(e){return{root:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),content:Object.assign({},e.mixins.gutters(),{marginTop:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(k))},158:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(32),s=a.n(c);a.d(t,"a",function(){return s.a});a(158),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(4),s=a.n(c),l=a(173),p=a.n(l),u=a(180),m=a.n(u),d=a(157),g=a(177),f=a.n(g),h=a(178),y=a.n(h),E=a(169),v=a.n(E),b=a(164),w=a.n(b),x=a(179),N=a.n(x),T=a(171),j=a.n(T),C=a(160);var S=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},menuitems:{display:"flex"},menuitem:{color:"#ffffff"}})(function(e){var t=e.classes,a=e.isShowBack;return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,null,o.a.createElement(y.a,null,a&&o.a.createElement(N.a,{className:t.menuButton,onClick:function(){window.history.back()},color:"inherit","aria-label":"Menu"},o.a.createElement(j.a,null)),o.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.grow},"KalviApp"),!a&&o.a.createElement("div",{className:t.menuitems},o.a.createElement(v.a,{className:t.menuitem,size:"small",component:C.a,to:"/"},"Home"),o.a.createElement(v.a,{className:t.menuitem,component:C.a,to:"/contact"},"Contact Us")))))}),k="https://kalviapp.com",_=[{"@context":"http://schema.org","@type":"WebSite",url:k,name:"kalviapp"}],A=[{"@context":"http://schema.org","@type":"Organization",url:k,email:"KalviApp(at)gmail.com",name:"kalviApp"}],O=[{"@context":"http://schema.org","@type":"MobileApplication",operatingSystem:"Android",applicationCategory:"Education",image:"https://lh3.googleusercontent.com/it-K1E_qW89VwFblMVCZOwRVkKK5ll5nZptv1gtNUyjqZ1j-5oa5aLTuNzM4ledPmA=s380-rw",description:"TNEA 2019 - Tamilnadu Engineering Counselling",publisher:"kalviApp",name:"kalviApp",offers:{"@type":"Offer",price:"0",priceCurrency:"INR",url:"https://play.google.com/store/apps/details?id=in.kalviapp.tamilnaduengineeringcolleges"},aggregateRating:{"@type":"AggregateRating",ratingValue:"5",reviewCount:"2"}}],B=[{"@context":"http://schema.org","@type":"Person",name:"KalviApp",url:k,sameAs:["https://www.instagram.com/kalviapp/","https://www.facebook.com/KalviApp/"]}],R=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.children,n=e.isShowBack,r=e.title,i=e.description,c=e.pathname,s=""+k+c,l="TNEA 2019 - Tamilnadu Engineering Colleges Counselling - No. 1 education assistance App",u=r?r+" - "+l:""+l,d=i?i+" - "+l:""+l;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null),o.a.createElement(p.a,null,o.a.createElement("title",null,u),o.a.createElement("meta",{name:"description",content:d}),o.a.createElement("link",{rel:"canonical",href:s}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(_)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(A)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(O)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(B)),o.a.createElement("meta",{property:"og:url",content:s}),o.a.createElement("meta",{property:"og:title",content:u}),o.a.createElement("meta",{property:"og:description",content:d})),o.a.createElement(S,{isShowBack:n}),o.a.createElement("main",null,o.a.createElement("div",{className:t.appBarSpacer}),o.a.createElement("div",{className:t.content},a)),o.a.createElement("div",{className:t.appBarSpacer}))},t}(o.a.PureComponent);R.propTypes={children:s.a.object.isRequired,classes:s.a.object.isRequired,isShowBack:s.a.bool,pathname:s.a.string};t.a=Object(d.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.grey[200]},containerFluid:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},stickToBottom:{width:"100%",position:"fixed",bottom:0},appBarSpacer:e.mixins.toolbar,contentPadding:{flexGrow:1,padding:e.spacing.unit},content:{maxWidth:1200,padding:2*e.spacing.unit,margin:"auto"}}})(R)},167:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(157),s=a(181),l=a.n(s),p=a(168);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(p.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(l.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(e,this.props)))},a}(o.a.Component)}},168:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return m});a(75),a(54),a(76),a(183);var r=a(172),i=a(157),o=a(175),c=a.n(o),s=a(176),l=a.n(s),p=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:c.a,secondary:c.a,background:{default:l.a[200]}}});function u(){return{theme:p,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function m(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=u()),n.__INIT_MATERIAL_UI__):u()}}).call(this,a(182),a(74))},214:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(228))},228:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(73)),i=n(a(33)),o=n(a(159)),c=n(a(0)),s=(n(a(4)),n(a(161))),l=n(a(162)),p=n(a(164)),u=n(a(201)),m=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function d(e){var t=e.children,a=e.classes,n=e.className,l=e.disableTypography,m=e.inset,d=e.primary,g=e.primaryTypographyProps,f=e.secondary,h=e.secondaryTypographyProps,y=e.theme,E=(0,o.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps","theme"]);return c.default.createElement(u.default.Consumer,null,function(e){var o,u=e.dense,v=null!=d?d:t;null==v||v.type===p.default||l||(v=c.default.createElement(p.default,(0,r.default)({variant:y.typography.useNextVariants?"body1":"subheading",className:(0,s.default)(a.primary,(0,i.default)({},a.textDense,u)),component:"span"},g),v));var b=f;return null==b||b.type===p.default||l||(b=c.default.createElement(p.default,(0,r.default)({className:(0,s.default)(a.secondary,(0,i.default)({},a.textDense,u)),color:"textSecondary"},h),b)),c.default.createElement("div",(0,r.default)({className:(0,s.default)(a.root,(o={},(0,i.default)(o,a.dense,u),(0,i.default)(o,a.inset,m),o),n)},E),v,b)})}t.styles=m,d.defaultProps={disableTypography:!1,inset:!1};var g=(0,l.default)(m,{name:"MuiListItemText",withTheme:!0})(d);t.default=g}}]);