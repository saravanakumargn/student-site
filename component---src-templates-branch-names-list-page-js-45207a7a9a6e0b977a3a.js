(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=(n(34),n(0)),o=n.n(i),s=n(157),l=n(168),c=n.n(l),u=(n(192),n(166)),d=n.n(u),f=n(154),m=n(183),p=n.n(m),g=n(247),v=n.n(g),x=n(164),h=n(163);n(246);var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.pageContext,a=e.classes,r=n.branchData;return o.a.createElement(h.a,{pathname:t.pathname},o.a.createElement(c.a,{xs:12,item:!0},o.a.createElement(p.a,{className:a.root,elevation:1},o.a.createElement(c.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.node.bc},o.a.createElement(d.a,{variant:"outlined",size:"small",color:"primary",className:a.margin,component:s.a,to:"/branches/"+v()(e.node.bn,{lower:!0})},e.node.bn))})))))},t}(o.a.Component);t.default=Object(x.a)(Object(f.withStyles)(function(e){return{root:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),margin:{margin:e.spacing.unit}}})(b))},156:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(32),l=n.n(s);n.d(t,"a",function(){return l.a});n(156),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},162:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(4),l=n.n(s),c=n(175),u=n.n(c),d=n(179),f=n.n(d),m=n(154),p=n(176),g=n.n(p),v=n(177),x=n.n(v),h=n(166),b=n.n(h),y=n(161),w=n.n(y),C=n(178),E=n.n(C),j=n(167),N=n.n(j),I=n(157);var _=Object(m.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},menuitems:{display:"flex"},menuitem:{color:"#ffffff"}})(function(e){var t=e.classes,n=e.isShowBack;return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,null,o.a.createElement(x.a,null,n&&o.a.createElement(E.a,{className:t.menuButton,onClick:function(){window.history.back()},color:"inherit","aria-label":"Menu"},o.a.createElement(N.a,null)),o.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.grow},"KalviApp"),!n&&o.a.createElement("div",{className:t.menuitems},o.a.createElement(b.a,{className:t.menuitem,size:"small",component:I.a,to:"/"},"Home"),o.a.createElement(b.a,{className:t.menuitem,component:I.a,to:"/contact"},"Contact Us")))))}),S="https://www.kalviapp.com",M=[{"@context":"http://schema.org","@type":"WebSite",url:S,name:"kalviapp"}],P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.children,a=e.isShowBack,r=e.title,i=e.description,s=e.pathname,l=""+S+s,c=r?"KalviApp - கல்வி - "+r:"KalviApp - கல்வி",d=i?"KalviApp - கல்வி - "+i:"KalviApp - கல்வி";return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null),o.a.createElement(u.a,null,o.a.createElement("title",null,c),o.a.createElement("meta",{name:"description",content:d}),o.a.createElement("link",{rel:"canonical",href:l}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(M)),o.a.createElement("meta",{property:"og:url",content:l}),o.a.createElement("meta",{property:"og:title",content:c}),o.a.createElement("meta",{property:"og:description",content:d})),o.a.createElement(_,{isShowBack:a}),o.a.createElement("main",null,o.a.createElement("div",{className:t.appBarSpacer}),o.a.createElement("div",{className:t.content},n)),o.a.createElement("div",{className:t.appBarSpacer}))},t}(o.a.PureComponent);P.propTypes={children:l.a.object.isRequired,classes:l.a.object.isRequired,isShowBack:l.a.bool,pathname:l.a.string};t.a=Object(m.withStyles)(function(e){return{heroUnit:{backgroundColor:e.palette.grey[200]},containerFluid:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},stickToBottom:{width:"100%",position:"fixed",bottom:0},appBarSpacer:e.mixins.toolbar,contentPadding:{flexGrow:1,padding:e.spacing.unit},content:{maxWidth:1200,padding:2*e.spacing.unit,margin:"auto"}}})(P)},164:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(154),l=n(180),c=n.n(l),u=n(165);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(u.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return o.a.createElement(c.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(e,this.props)))},n}(o.a.Component)}},165:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return f});n(75),n(54),n(76),n(182);var r=n(169),i=n(154),o=n(173),s=n.n(o),l=n(174),c=n.n(l),u=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:s.a,secondary:s.a,background:{default:c.a[200]}}});function d(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function f(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=d()),a.__INIT_MATERIAL_UI__):d()}}).call(this,n(181),n(74))},168:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(171))},171:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(33)),i=a(n(155)),o=a(n(73)),s=a(n(0)),l=(a(n(4)),a(n(158))),c=(n(160),a(n(159))),u=n(185),d=(a(n(172)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var m=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};f.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function p(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,d=e.component,f=e.container,m=e.direction,g=e.item,v=e.justify,x=e.lg,h=e.md,b=e.sm,y=e.spacing,w=e.wrap,C=e.xl,E=e.xs,j=e.zeroMinWidth,N=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),I=(0,l.default)((t={},(0,r.default)(t,c.container,f),(0,r.default)(t,c.item,g),(0,r.default)(t,c.zeroMinWidth,j),(0,r.default)(t,c["spacing-xs-".concat(String(y))],f&&0!==y),(0,r.default)(t,c["direction-xs-".concat(String(m))],m!==p.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(w))],w!==p.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==p.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==p.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(v))],v!==p.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(E))],!1!==E),(0,r.default)(t,c["grid-sm-".concat(String(b))],!1!==b),(0,r.default)(t,c["grid-md-".concat(String(h))],!1!==h),(0,r.default)(t,c["grid-lg-".concat(String(x))],!1!==x),(0,r.default)(t,c["grid-xl-".concat(String(C))],!1!==C),t),u);return s.default.createElement(d,(0,o.default)({className:I},N))}t.styles=m,p.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,c.default)(m,{name:"MuiGrid"})(p);t.default=g},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},192:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(215))},193:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)).default.createContext({});t.default=r},196:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElementWithClassName=o,t.cloneChildrenWithClassName=function(e,t){return r.default.Children.map(e,function(e){return r.default.isValidElement(e)&&o(e,t)})},t.isMuiElement=function(e,t){return r.default.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},t.setRef=function(e,t){"function"==typeof e?e(t):e&&(e.current=t)};var r=a(n(0)),i=a(n(158));function o(e,t){return r.default.cloneElement(e,{className:(0,i.default)(e.props.className,t)})}},215:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(73)),i=a(n(33)),o=a(n(155)),s=a(n(0)),l=(a(n(4)),a(n(158))),c=(n(160),a(n(159))),u=a(n(208)),d=n(196),f=a(n(216)),m=function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:11,paddingBottom:11,"&$selected, &$selected:hover, &$selected:focus":{backgroundColor:e.palette.action.selected}},container:{position:"relative"},focusVisible:{},default:{},dense:{paddingTop:8,paddingBottom:8},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{opacity:.5},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&:focus":{backgroundColor:e.palette.action.hover}},secondaryAction:{paddingRight:32},selected:{}}};function p(e){var t=e.alignItems,n=e.button,a=e.children,c=e.classes,m=e.className,p=e.component,g=e.ContainerComponent,v=e.ContainerProps,x=(v=void 0===v?{}:v).className,h=(0,o.default)(v,["className"]),b=e.dense,y=e.disabled,w=e.disableGutters,C=e.divider,E=e.focusVisibleClassName,j=e.selected,N=(0,o.default)(e,["alignItems","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]);return s.default.createElement(f.default,{dense:b,alignItems:t},function(e){var o,f=e.dense,v=s.default.Children.toArray(a),b=v.some(function(e){return(0,d.isMuiElement)(e,["ListItemAvatar"])}),I=v.length&&(0,d.isMuiElement)(v[v.length-1],["ListItemSecondaryAction"]),_=(0,l.default)(c.root,c.default,(o={},(0,i.default)(o,c.dense,f||b),(0,i.default)(o,c.gutters,!w),(0,i.default)(o,c.divider,C),(0,i.default)(o,c.disabled,y),(0,i.default)(o,c.button,n),(0,i.default)(o,c.alignItemsFlexStart,"flex-start"===t),(0,i.default)(o,c.secondaryAction,I),(0,i.default)(o,c.selected,j),o),m),S=(0,r.default)({className:_,disabled:y},N),M=p||"li";return n&&(S.component=p||"div",S.focusVisibleClassName=(0,l.default)(c.focusVisible,E),M=u.default),I?(M=S.component||p?M:"div","li"===g&&("li"===M?M="div":"li"===S.component&&(S.component="div")),s.default.createElement(g,(0,r.default)({className:(0,l.default)(c.container,x)},h),s.default.createElement(M,S,v),v.pop())):s.default.createElement(M,S,v)})}t.styles=m,p.defaultProps={alignItems:"center",button:!1,ContainerComponent:"li",dense:!1,disabled:!1,disableGutters:!1,divider:!1,selected:!1};var g=(0,c.default)(m,{name:"MuiListItem"})(p);t.default=g},216:function(e,t,n){"use strict";var a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(a(n(4)),a(n(193)));var o=function(e){var t=e.alignItems,n=e.children,a=e.dense;return r.default.createElement(i.default.Consumer,null,function(e){var o={dense:a||e.dense||!1,alignItems:t};return r.default.createElement(i.default.Provider,{value:o},n(o))})};t.default=o}}]);