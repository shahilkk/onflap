(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1031:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d}));var r=n(11);n(467),n(54),n(70),n(1166);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l=n(1019),c=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=[],i=0;i<t.length;i++){var o=l(t[i]).toHsl();o.h=Number(e),null!==n&&(o.s=Number(n)/100),r.push(l(o).toHexString())}return r},d=(t,e)=>{var n=t.map(((t,e)=>({hsl:l(t).toHsl(),index:e,isMostNearer:!1}))),r=e.map(((t,e)=>({hsl:l(t).toHsl(),index:e,fillColorIndexes:[]})));return n.forEach(((t,e)=>{var n=m(r.map((t=>t.hsl)),t.hsl);r[n.index].fillColorIndexes.push({index:e,distance:n.distance})})),r.forEach((t=>{t.fillColorIndexes=t.fillColorIndexes.sort(((a,b)=>a.distance-b.distance)),t.fillColorIndexes.length&&(n[t.fillColorIndexes[0].index].isMostNearer=!0)})),r.filter((t=>!t.fillColorIndexes.length)).forEach((t=>{var e=n.filter((t=>!t.isMostNearer));if(e.length){var o=m(e.map((t=>t.hex)),t.hex),l=e[o.index],c=n[l.index];r.filter((t=>t.fillColorIndexes.length)).forEach((t=>{t.fillColorIndexes.map((t=>t.index)).includes(c.index)&&(t.fillColorIndexes=t.fillColorIndexes.filter((t=>t.index!==c.index)))})),t.fillColorIndexes.push({index:c.index,distance:o.distance}),n[c.index].isMostNearer=!0}})),r.filter((t=>t.fillColorIndexes.length)).forEach((t=>{t.fillColorIndexes.forEach(((e,o)=>{n[e.index].hsl=0===o?t.hsl:h({paletteColors:r.map((t=>t.hsl)),paletteColor:t.hsl,fillColor:n[e.index].hsl})}))})),n.map((t=>l(t.hsl).toHexString()))},h=t=>{var{paletteColors:e,paletteColor:n,fillColor:l}=t,c=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},l);if(1===n.l){var d=e.filter((t=>!(0===t.l||1===t.l||0===t.s)));if(d.length){var h=d[m(d,n).index];c.h=h.h}else c.s=0}else 0===n.s||0===n.l?c.s=0:c.h=n.h;return c},m=(t,e)=>{var n=t.map((t=>f({color1:e,color2:t}))),r=Math.min.apply(Math,n);return{distance:r,index:n.indexOf(r)}},f=t=>{var{color1:e,color2:n}=t,r=v(e),o=v(n);return Math.hypot(o.x-r.x,o.y-r.y,o.z-r.z)},v=t=>{var e=l(t).toRgb();return{x:e.r,y:e.g,z:e.b}}},1039:function(t,e,n){"use strict";var r=n(37),o=n(25),l=n(1020),c=o([].reverse),d=[1,2];r({target:"Array",proto:!0,forced:String(d)===String(d.reverse())},{reverse:function(){return l(this)&&(this.length=this.length),c(this)}})},1044:function(t,e,n){var content=n(1298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("65d75218",content,!0,{sourceMap:!1})},1046:function(t,e,n){var content=n(1303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("25ea233a",content,!0,{sourceMap:!1})},1047:function(t,e,n){var content=n(1305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("43282f64",content,!0,{sourceMap:!1})},1051:function(t,e,n){"use strict";e.a={data:()=>({unsubscribe:null}),destroyed(){this.stopWatch()},methods:{startWatch(){this.unsubscribe||(this.unsubscribe=this.$store.subscribe(((t,e)=>{"settings/setPaletteId"===t.type&&this.$nextTick((()=>{this.onPaletteSelected(e)})),"brandPalettes/setAll"===t.type&&this.$nextTick((()=>{this.onPalettesLoaded(e)}))})))},stopWatch(){this.unsubscribe&&this.unsubscribe(),this.unsubscribe=null},onPalettesLoaded(){},onPaletteSelected(){}}}},1060:function(t,e,n){t.exports=n.p+"img/exclusive.1e1be47.svg"},1061:function(t,e,n){"use strict";var r=n(11),o=n(7),l=n(22),c=n.n(l),d=n(991);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={mixins:[n(1051).a],props:{item:{type:Object,default:()=>{}},imageAlt:{type:String,default:null}},data:()=>({originalContent:null,brandedContent:null,fallBackOriginalUrl:null,editorInstance:null,initiatedWithBrandColor:!1,appliedPaletteId:null,observer:null,isElementIntersecting:!0,initiatedBrandClient:null}),computed:{originalUrl(){return"icon"===this.item.asset?this.item.urls.original:this.item.urls.svg},preview(){return this.brandedContent&&this.getBase64Url(this.brandedContent)||this.originalContent&&this.getBase64Url(this.originalContent)||this.fallBackOriginalUrl},selectedBrandPalette(){return this.$store.getters["brandPalettes/selectedPalette"]},activeBrandClient(){return this.$store.getters["brandPalettes/getActiveBrandClient"]},isAlreadyApplied(){return this.appliedPaletteId&&this.selectedBrandPalette&&this.appliedPaletteId===this.selectedBrandPalette.id}},watch:{activeBrandClient(t){t===this.initiatedBrandClient?(this.preApply(),this.startWatch()):this.stopWatch()}},mounted(){this.initiatedBrandClient=this.activeBrandClient,"IntersectionObserver"in window&&(this.observer=new window.IntersectionObserver((t=>{t[0].isIntersecting?(this.isElementIntersecting=!0,this.preApply(),this.startWatch()):(this.isElementIntersecting=!1,this.stopWatch())}),{rootMargin:"icon"===this.item.asset?"78px":"230px"}),this.observer.observe(this.$el))},destroyed(){this.observer&&this.observer.disconnect()},methods:{downloadOriginalContent(){var t=this;return Object(o.a)((function*(){try{var{data:data}=yield c()(t.originalUrl,{withCredentials:!1});return t.originalContent=yield Object(d.a)(data,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},"illustration"===t.item.asset&&{mergePaths:!1})),!0}catch(e){return t.fallBackOriginalUrl=t.originalUrl,!1}}))()},onPalettesLoaded(){!this.initiatedWithBrandColor&&this.isElementIntersecting&&this.preApply()},onPaletteSelected(){this.preApply()},preApply(){var t=this;return Object(o.a)((function*(){if(t.isElementIntersecting){if(!t.originalContent)if(!(yield t.downloadOriginalContent()))return;t.selectedBrandPalette?t.apply():(t.appliedPaletteId=null,t.brandedContent=null)}}))()},apply(){var t=this,e=this.selectedBrandPalette;setTimeout(Object(o.a)((function*(){t.isAlreadyApplied||(t.brandedContent||(yield t.initColorSwapper()),t.brandedContent=yield t.editorInstance.getBrandSvg({palette:e.colors,processSvgPluginOptions:"illustration"===t.item.asset?{mergePaths:!1}:{}}),t.appliedPaletteId=e.id,t.initiatedWithBrandColor=!0)})),0)},initColorSwapper(){var t=this;return Object(o.a)((function*(){var{Editor:e}=n(1086);t.editorInstance=new e({originalContent:t.originalContent}),yield t.editorInstance.init()}))()},getBase64Url:data=>"data:image/svg+xml;utf8,".concat(encodeURIComponent(data))}},f=m,v=n(1087),w=n(9);var component=Object(w.a)(f,(function(){var t=this,e=t._self._c;return e("div",{class:["icon"===t.item.asset?null:t.$style.image]},[t.preview?e("img",{class:"icon"===t.item.asset?t.$style.icon:null,attrs:{src:t.preview,alt:t.imageAlt,loading:"lazy"}}):t._e()])}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null);e.a=component.exports},1070:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij4KPGNpcmNsZSBjeD0iOCIgY3k9IjE2IiByPSI2IiBmaWxsPSIjRkY2Njk5Ii8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNiIgZmlsbD0iI0ZGQkY2NiIvPgo8L2c+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTptdWx0aXBseSI+CjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iNiIgZmlsbD0iIzY2Q0NGRiIvPgo8L2c+Cjwvc3ZnPgo="},1086:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"Editor",(function(){return B}));n(47),n(214),n(84),n(27),n(42);var r=n(1105),o=n(1201),l=n.n(o),c=n(1202),d=n.n(c),h=n(55),m=n.n(h),f=n(1031),v=n(991),w=n(1019),y="data-name",x="fill",_="stop-color",O="fill",j="stroke",P="svgShape",S=["g","path","polyline","polygon","circle","rect","circle","ellipse"],I=["line","g","path","polygon","circle","rect","circle","ellipse"],C=["stop"];class B{constructor(t){var{originalContent:e}=t;this.originalContent=null,this.colors=[],this.$=null,this.apply={fillShapeColor:(t,e)=>{this.$.find("."+k(t)).fill(e)},fillStrokeColor:(t,e)=>{this.$.find("."+D(t)).stroke(e)},fillStopColorColor:(t,e)=>{this.$.find("."+$(t)).attr({[_]:e})}},this.originalContent=e}init(){return new Promise((t=>{try{var e=Object(r.a)(this.originalContent),n=[];e.each((function(){var data=this.attr(y);data&&this.attr(y,d()(data))})),e.find(S).each((function(){var t=null;if(this.attr(x)&&"#000000"!==this.attr(x).trim()?t=this.attr(x):this.css(O)?t=this.css(O):this.attr(j)&&"#000000"!==this.attr(j).trim()||(t="#000"),l()(t)){t=w(t).toHexString(),this.css(O,null),this.attr(x,t);var e=k(t);this.addClass(e),this.addClass(P),-1===m()(n,{originalHex:t})&&n.push({hex:t,lastHex:t,originalHex:t,className:e,element:"Shape"})}}),!0),e.find(I).each((function(){var t=null;if(this.attr(j)&&"#000000"!==this.attr(j).trim()&&(t=this.attr(j)),l()(t)){t=w(t).toHexString();var e=D(t);this.addClass(e),this.addClass("svgStroke"),-1===m()(n,{originalHex:t,element:"Stroke"})&&n.push({hex:t,lastHex:t,originalHex:t,className:e,element:"Stroke"})}})),e.find(C).each((function(){var t=null;if(t=this.attr(_),l()(t)){t=w(t).toHexString(),this.css(O,null),this.attr(_,t);var e=$(t);this.addClass(e),this.addClass(P),-1===m()(n,{originalHex:t,element:"StopColor"})&&n.push({hex:t,lastHex:t,originalHex:t,className:e,element:"StopColor"})}})),this.colors=n,this.$=e,t()}catch(t){console.error(t)}}))}getBrandSvg(e){var{palette:n,getBase64:r=!1,processSvgPluginOptions:o={}}=e;return new Promise(((e,l)=>{var c=Object(f.b)(this.colors.map((t=>t.originalHex)),n);this.colors.forEach(((t,e)=>{this.apply["fill".concat(t.element,"Color")](this.colors[e].originalHex,c[e]),this.colors[e].hex=c[e],this.colors[e].lastHex=c[e]}));var d=this.$.svg();r?e("data:image/svg+xml;base64,".concat(t.from(d).toString("base64"))):Object(v.a)(d,o).then((svg=>{e(svg)}))}))}}var k=t=>"color"+t.replace(/[\W+]/g,""),D=t=>"colorStroke"+t.replace(/[\W+]/g,""),$=t=>"stopColor"+t.replace(/[\W+]/g,"")}.call(this,n(469).Buffer)},1087:function(t,e,n){"use strict";var r=n(972),o=n.n(r);n.d(e,"default",(function(){return o.a}))},1088:function(t,e,n){var r=n(39)(!1);r.push([t.i,".icon_BjQb2{width:64px}.image_BVAs-{position:relative;display:block;overflow:hidden;border-radius:12px;display:flex;align-items:center;justify-content:center;height:100%;width:100%}.image_BVAs- img{pointer-events:none;max-width:100%;max-height:100%;transition:all 0.3s ease}.image_BVAs-:hover img{transform:scale(1.05)}\n",""]),r.locals={icon:"icon_BjQb2",image:"image_BVAs-"},t.exports=r},1092:function(t,e,n){"use strict";var r=n(219),o={props:{toggleText:{type:String,default:null},showCaret:{type:Boolean,default:!0},hoverEvent:{type:Boolean,default:!0}},data:()=>({showSubmenu:!1}),methods:{onShow(i){this.showSubmenu=!0,this.$nextTick((()=>{var t=this.$refs.itemButton;t&&new r.default(t,this.$refs.subMenu,{placement:"right-start"})}))},onHide(){this.showSubmenu&&(this.showSubmenu=!1)},onShowSubMenu(){this.showSubmenu=!0},onHideSubMenu(){this.showSubmenu=!1}}},l=n(1137),c=n(9);var component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._g({class:["dropdown",t.$style.container]},t.hoverEvent&&{mouseout:t.onHide}),[e("button",t._g({ref:"itemButton",class:[t.showCaret?t.$style.itemButton:null,t.showSubmenu?t.$style.hover:null,"dropdown-item"],attrs:{role:"menu",type:"button"}},t.hoverEvent?{mouseover:t.onShow}:{click:t.showSubmenu?t.onHide:t.onShow}),[t._t("button-content",(function(){return[t._v(t._s(t.toggleText))]}))],2),t._v(" "),e("div",t._g({ref:"subMenu",class:["dropdown-menu",t.showSubmenu?"show":null]},t.hoverEvent&&{mouseover:t.onShowSubMenu,mouseout:t.onHideSubMenu}),[t._t("default")],2)])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.a=component.exports},1101:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(11),l=(n(54),n(945),n(29),n(47),n(31),n(1160)),c=n(959),d=n.n(c),h=n(104),m=n(958),f=n(948),v=n(936),w=n(925),y=n(926),x=n(2143),_=n(1092),O=n(63),j={components:{UilImport:v.a,BDropdown:w.a,BDropdownItemButton:y.a,BDropdownDivider:x.a,BDropdownItemMenu:_.a},mixins:[O.a],props:{item:{type:Object,default:()=>{}},pngSizes:{type:Array,default:()=>[]},moreIconTypes:{type:Array,default:()=>[]},canBranded:{type:Boolean,default:!1}},methods:{onOver(){this.$refs.fileDownload.visible=!0},onLeave(){this.$refs.fileDownload.visible=!1},onEdit(){this.handleAuth()&&(this.$analytics.track("edit".concat(d()(this.item.asset)),{id:this.item.id,name:this.item.name,slug:this.item.slug,uuid:this.item.uuid,price:this.item.price,location:"item-download-options"}),this.$modal.open({id:"modalEditIcon",component:Promise.all([n.e(0),n.e(28),n.e(14),n.e(40),n.e(221)]).then(n.bind(null,2957)),options:{modalOnModal:!0},props:{item:this.item,initWithBrandColor:!!this.$store.getters["brandPalettes/selectedPalette"]}}))}}},P=n(1297),S=n(9);var component=Object(S.a)(j,(function(){var t=this,e=t._self._c;return e("div",[e("b-dropdown",{ref:"fileDownload",class:t.$style.dropdown,attrs:{"popper-opts":{placement:"right",boundariesElement:"viewport"},"menu-class":t.$style.dropdownMenu,"toggle-class":"btn-icon",variant:"primary",size:"sm","no-caret":""},nativeOn:{mouseover:function(e){return t.onOver.apply(null,arguments)},mouseleave:function(e){return t.onLeave.apply(null,arguments)}}},[e("template",{slot:"button-content"},[e("uil-import")],1),t._v(" "),e("b-dropdown-item-menu",{ref:"subMenu"},[e("template",{slot:"button-content"},[e("img",{staticClass:"mr-2",attrs:{src:"/file-types/png.svg",alt:"png",height:"20",width:"20"}}),t._v(" "),e("span",[t._v("PNG")])]),t._v(" "),t._l(t.pngSizes,(function(i,n){return e("b-dropdown-item-button",{key:n,class:t.$style.item,on:{click:function(e){return i.action({canBeBranded:t.canBranded})}}},[t._v("\n        "+t._s(i.text)+"\n      ")])}))],2),t._v(" "),t._l(t.moreIconTypes,(function(i,n){return e("b-dropdown-item-button",{key:n,on:{click:function(e){return i.action({canBeBranded:t.canBranded})}}},[e("img",{staticClass:"mr-2",attrs:{src:i.image,alt:i.text,height:"20",width:"20"}}),t._v(" "),e("span",[t._v("\n        "+t._s(i.text)+"\n      ")])])})),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-item-button",{on:{click:t.onEdit}},[e("img",{attrs:{src:n(1070),width:"20"}}),t._v(" "),e("span",{staticClass:"ml-2 text-uppercase"},[t._v(t._s(t.$t("buttons.edit_icon")))])]),t._v(" "),e("b-dropdown-item-button",{on:{click:function(e){return t.$emit("animate")}}},[e("img",{attrs:{src:n(317),width:"20"}}),t._v(" "),e("span",{staticClass:"ml-2 text-uppercase"},[t._v("Animate")])])],2)],1)}),[],!1,(function(t){this.$style=P.default.locals||P.default}),null,null),I=component.exports,C=n(1061),B=n(1167);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $={components:{UisFolderMedical:l.a,SvgBrandTemplate:C.a,DownloadOptions:I},mixins:[B.a],props:{item:{type:Object,default:()=>{}},items:{type:Array,default:()=>[]},searchInsight:{type:Object,default:()=>{}},trackListName:{type:String,default:null},target:{type:String,default:"self"},currentIndex:{type:Number,default:0}},data(){return{hover:!1,selectedLicenseId:this.item.licenses[0].id}},computed:D(D({},Object(h.d)({small:t=>t.settings.icons.smallView,thumb:t=>t.settings.icons.thumbView})),{},{canBranded(){return this.isLoggedIn&&(this.hasPremiumSubscription||this.isTester)&&["search","downloads","favorites","free-icons","featured-icons","latest-icons","popular-icons","exclusive-icons","pack-profile","bundle-profile","contributor-profile"].includes(this.trackListName)},href(){return this.$router.resolve({name:"icon-slug",params:{slug:this.item.slug}}).href},imageAlt(){return d()(this.item.description||this.item.name)+" "+this.$tc("items.".concat(this.item.asset,".name"),1,{category:Object(f.a)(this.item.additional_informations.category||Object(m.a)(this.item.asset))})}}),methods:{humanFriendlyName:f.a,defaultAssetCategory:m.a,onOpen(){this.trackClick(this.currentIndex),"modal"===window.history.state.type?window.history.replaceState({type:"modal"},null,this.href):window.history.pushState({type:"modal"},null,this.href);var{route:t}=this.$router.resolve({name:"".concat(this.item.asset,"-slug"),params:{slug:this.item.slug}});this.$modal.currentModal&&"modalItemPreview"===this.$modal.currentModal.id?this.$modal.update({slug:this.item.slug,items:this.items,searchInsight:{},currentIndex:this.currentIndex,fromPdpPage:!1},t):this.$modal.open({id:"modalItemPreview",component:Promise.all([n.e(0),n.e(41),n.e(12),n.e(15),n.e(223)]).then(n.bind(null,2877)),props:{slug:this.item.slug,items:this.items,searchInsight:this.searchInsight,currentIndex:this.currentIndex,backOnClose:!0,fromPdpPage:!1},route:t}),this.$analytics.track("screenView",{screen:"modalItemPreview",path:this.href})},onAnimate(){this.handleAuth()&&(this.$analytics.track("animate".concat(d()(this.item.asset)),{id:this.item.id,name:this.item.name,slug:this.item.slug,uuid:this.item.uuid,price:this.item.price,location:"item-download-options"}),this.$modal.open({id:"modalSvgToLottie",component:Promise.all([n.e(0),n.e(15),n.e(26),n.e(257)]).then(n.bind(null,3853)),options:{modalOnModal:!0},props:D(D({},this.$refs.brandTemplate&&this.$refs.brandTemplate.brandedContent&&{svgContent:this.$refs.brandTemplate.brandedContent}),{},{item:this.item,initWithBrandColor:!!this.$store.getters["brandPalettes/selectedPalette"]})}))}}},A=n(1302);var Z=Object(S.a)($,(function(){var t=this,e=t._self._c;return e("article",{class:[t.$style.container,t.$style.small,t.thumb?null:t.$style.withTitle],attrs:{title:t.name},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t.item.additional_informations&&t.item.additional_informations.iconscout_exclusive?e("div",{class:t.$style.exclusiveBadge},[e("img",{attrs:{src:n(1060),width:"24"}})]):t._e(),t._v(" "),e("a",{class:t.$style.link,attrs:{href:t.href,target:t.target},on:{click:function(e){return e.preventDefault(),t.onOpen.apply(null,arguments)}}},[e("div",{staticClass:"inner"},[t.canBranded?e("svg-brand-template",{ref:"brandTemplate",attrs:{item:t.item,"image-alt":t.imageAlt}}):e("img",{class:t.$style.thumb,attrs:{src:t.preview,srcset:"".concat(t.item.urls.png_64," 1x, ").concat(t.item.urls.png_128," 2x"),alt:t.imageAlt,loading:"lazy"}})],1)]),t._v(" "),t.hover?e("div",{class:t.$style.action},[e("p",{class:t.$style.title},[t._v("\n      "+t._s(t.item.name)+"\n      "),e("span",{staticClass:"sr-only"},[t._v("Icon")])]),t._v(" "),e("button",{class:["btn btn-default btn-icon btn-sm",t.$style.btnLike,t.item.liked_by_user?"text-primary":null],attrs:{type:"button"},on:{click:function(e){return t.like("PLP")}}},[e("uis-folder-medical")],1),t._v(" "),t.canDownload?e("download-options",{class:t.$style.btnDownloadContainer,attrs:{item:t.item,"png-sizes":t.pngSizesDD,"more-icon-types":t.moreIconTypes,"can-branded":t.canBranded},on:{animate:t.onAnimate}}):t._e()],1):t._e()])}),[],!1,(function(t){this.$style=A.default.locals||A.default}),null,null),M={components:{IconTemplate:Z.exports},mixins:[O.a],props:{items:{type:Array,default:()=>[]},searchInsight:{type:Object,default:()=>{}},trackListName:{type:String,default:null},target:{type:String,default:"self"}},watch:{items(t,e){t.length>=e.length&&this.trackImpressions(t.slice(e.length,t.length-1),e.length)}},mounted(){this.trackImpressions(this.items)},methods:{trackImpressions(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.length&&r.default.gtm.trackEvent({event:"productImpressions",ecommerce:{impressions:t.map(((t,n)=>({name:t.name,id:"item-".concat(t.id),list:this.trackListName,position:e+n})))}})}}},E=M,N=n(1304);var T=Object(S.a)(E,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:t.$style.container},[t._t("default"),t._v(" "),t._l(t.items,(function(n,r){return e("div",{key:n.uuid,class:t.$style.itemContainer},[e("icon-template",{attrs:{item:n,items:t.items,"search-insight":t.searchInsight,"track-list-name":t.trackListName,target:t.target,"current-index":r}})],1)}))],2)])}),[],!1,(function(t){this.$style=N.default.locals||N.default}),null,null);e.default=T.exports},1137:function(t,e,n){"use strict";var r=n(978),o=n.n(r);n.d(e,"default",(function(){return o.a}))},1138:function(t,e,n){var r=n(39)(!1);r.push([t.i,'.container_xDFNW .itemButton_gjo0\\+{padding-right:30px}.container_xDFNW .itemButton_gjo0\\+::after{content:"";position:absolute;display:block;height:7px;width:7px;border-right:2px solid #2E334D;border-bottom:2px solid #2E334D;transition:0.22s;transform:rotateZ(-45deg);position:absolute;right:10px;top:12px}.container_xDFNW .itemButton_gjo0\\+:hover:after{border-color:#fff}\n',""]),r.locals={container:"container_xDFNW",itemButton:"itemButton_gjo0+"},t.exports=r},1139:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=[16,24,32,48,64,96,128,192,256,512]},1160:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[e("path",{attrs:{d:"M19,5.5h-6.3l-0.3-0.9C12,3.3,10.9,2.5,9.6,2.5H5c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-10C22,6.8,20.7,5.5,19,5.5z M14,14.5h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,14.5,14,14.5z"}})])}),[],!1,null,null,null);e.a=component.exports},1164:function(t,e){},1165:function(t,e){},1167:function(t,e,n){"use strict";var r=n(11),o=(n(1039),n(1139)),l=n(963);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={mixins:[l.a],computed:{uuid(){return this.item&&this.item.uuid},pngSizes:()=>o.a,pngSizesDD(){return o.a.map((t=>({text:"PNG ".concat(t),action:e=>this.preDownload(d({format:"png",page:"PLP",size:{width:t,height:t}},e))}))).reverse()},moreTypes(){return[{text:this.$t("pages.icon.ai"),image:"/file-types/ai.svg",action:t=>this.preDownload(d({format:"ai",page:"PLP"},t))},{text:this.$t("pages.icon.ico"),image:"/file-types/ico.svg",action:t=>this.preDownload(d({format:"ico",page:"PLP"},t))},{text:this.$t("pages.icon.icns"),image:"/file-types/icns.svg",action:t=>this.preDownload(d({format:"icns",page:"PLP"},t))}]},moreIconTypes(){return[{text:this.$t("pages.icon.svg"),image:"/file-types/svg.svg",action:t=>this.preDownload(d({format:"svg",page:"PLP"},t))},{text:this.$t("pages.icon.pdf"),image:"/file-types/pdf.svg",action:t=>this.preDownload(d({format:"pdf",page:"PLP"},t))},{text:this.$t("pages.icon.eps"),image:"/file-types/eps.svg",action:t=>this.preDownload(d({format:"eps",page:"PLP"},t))},{text:this.$t("pages.icon.ico"),image:"/file-types/ico.svg",action:t=>this.preDownload(d({format:"ico",page:"PLP"},t))},{text:this.$t("pages.icon.icns"),image:"/file-types/icns.svg",action:t=>this.preDownload(d({format:"icns",page:"PLP"},t))}]}}}},1297:function(t,e,n){"use strict";var r=n(1044),o=n.n(r);n.d(e,"default",(function(){return o.a}))},1298:function(t,e,n){var r=n(39)(!1);r.push([t.i,".dropdown_WdIpA .btn{color:#fff;box-shadow:0px 1px 3px rgba(0,0,0,0.08),0px 4px 8px rgba(0,0,0,0.04) !important}.dropdown_WdIpA .dropdownMenu_q1w3E{width:160px;z-index:1070}.dropdown_WdIpA .item_STx-Z{width:160px}\n",""]),r.locals={dropdown:"dropdown_WdIpA",dropdownMenu:"dropdownMenu_q1w3E",item:"item_STx-Z"},t.exports=r},1302:function(t,e,n){"use strict";var r=n(1046),o=n.n(r);n.d(e,"default",(function(){return o.a}))},1303:function(t,e,n){var r=n(39)(!1);r.push([t.i,".container_w6hZo{min-width:140px;min-height:140px;border-radius:8px;background:#FAFAFC;display:flex;align-items:center;justify-content:center;position:relative;transition:box-shadow 0.2s ease-in}.container_w6hZo:after{content:'';padding-bottom:100%;display:block}@media (max-width: 1023.98px){.container_w6hZo{min-width:120px;min-height:120px}}.container_w6hZo .premiumIcon_fRqXh{position:absolute;top:2px;left:2px;z-index:10}.container_w6hZo .link_ZhMyq{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;justify-content:center;align-items:center;text-decoration:none !important;border-radius:8px}.container_w6hZo .link_ZhMyq:after{content:'';width:100%;height:100%;background:rgba(46,51,76,0.1);position:absolute;top:0;left:0;opacity:0;visibility:hidden;transition:all 0.3s ease;border-radius:8px}.container_w6hZo .link_ZhMyq img{transition:all 0.3s ease}.container_w6hZo .link_ZhMyq:hover img{transform:scale(1.05)}.container_w6hZo .thumb_p6OvR{width:64px}.container_w6hZo .title_nsrcO{position:absolute;left:.75rem;bottom:.5rem;margin:0 auto;font-size:var(--small-font-size);font-weight:400;line-height:1.375rem;text-align:center;color:#596080;margin-top:.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90px !important;max-height:0px;opacity:0;transition:transform 0.2s ease}.container_w6hZo .price_xB3EY,.container_w6hZo .purchased_WMdJS{display:block;font-size:var(--small-font-size);line-height:1.375rem;color:#0092e4;font-weight:500;text-align:center;transition:all 0.2s ease-in-out}.container_w6hZo .price_xB3EY.free,.container_w6hZo .purchased_WMdJS.free{color:#8F95B3;text-transform:uppercase}.container_w6hZo .base_-FAwO{display:block;color:#596080;font-weight:400;text-decoration:none !important}.container_w6hZo .base_-FAwO .icon_SRXph svg{vertical-align:middle}.container_w6hZo .base_-FAwO .icon_SRXph svg [fill-rule=nonzero]{fill:#596080}.container_w6hZo .base_-FAwO:hover,.container_w6hZo .base_-FAwO:focus,.container_w6hZo .base_-FAwO:active{text-decoration:none;color:#000}.container_w6hZo .base_-FAwO:hover .icon_SRXph svg,.container_w6hZo .base_-FAwO:focus .icon_SRXph svg,.container_w6hZo .base_-FAwO:active .icon_SRXph svg{vertical-align:middle}.container_w6hZo .base_-FAwO:hover .icon_SRXph svg [fill-rule=nonzero],.container_w6hZo .base_-FAwO:focus .icon_SRXph svg [fill-rule=nonzero],.container_w6hZo .base_-FAwO:active .icon_SRXph svg [fill-rule=nonzero]{fill:#000}.container_w6hZo .purchased_WMdJS{color:#24A8AF}.container_w6hZo .action_Hnbcf{opacity:0;transition:all 0.2s ease-in-out}.container_w6hZo .btnLike_7\\+l-Q{position:absolute;top:5px;right:5px;transition:all 0.22s;color:#596080;box-shadow:0px 1px 3px rgba(0,0,0,0.08),0px 4px 8px rgba(0,0,0,0.04)}.container_w6hZo .btn_rFeU3{width:32px;height:32px;text-align:center;border-radius:8px;box-shadow:0px 1px 4px rgba(0,0,0,0.08);display:flex;justify-content:center;align-items:center}.container_w6hZo .btnBuy_pe0u\\+{position:absolute;bottom:5px;right:5px}.container_w6hZo .btnDownloadContainer_PySti{position:absolute;bottom:5px;right:5px}.container_w6hZo.withTitle_IqlQ3 .title_nsrcO{display:block;opacity:1;max-height:18px;overflow:hidden}.container_w6hZo.small_bZXc6 .title_nsrcO{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:64px}.container_w6hZo:hover .action_Hnbcf{opacity:1}.container_w6hZo:hover .link_ZhMyq:after{opacity:1;visibility:visible}.container_w6hZo:hover .price_xB3EY,.container_w6hZo:hover .purchased_WMdJS{opacity:0}.container_w6hZo .exclusiveBadge_IhXF1{z-index:1;position:absolute;top:.5rem;left:.5rem}\n",""]),r.locals={container:"container_w6hZo",premiumIcon:"premiumIcon_fRqXh",link:"link_ZhMyq",thumb:"thumb_p6OvR",title:"title_nsrcO",price:"price_xB3EY",purchased:"purchased_WMdJS",base:"base_-FAwO",icon:"icon_SRXph",action:"action_Hnbcf",btnLike:"btnLike_7+l-Q",btn:"btn_rFeU3",btnBuy:"btnBuy_pe0u+",btnDownloadContainer:"btnDownloadContainer_PySti",withTitle:"withTitle_IqlQ3",small:"small_bZXc6",exclusiveBadge:"exclusiveBadge_IhXF1"},t.exports=r},1304:function(t,e,n){"use strict";var r=n(1047),o=n.n(r);n.d(e,"default",(function(){return o.a}))},1305:function(t,e,n){var r=n(39)(!1);r.push([t.i,".container_oSUnQ{display:grid;grid-template-columns:repeat(auto-fill, minmax(140px, 1fr));gap:.25rem}@media (max-width: 1023.98px){.container_oSUnQ{grid-template-columns:repeat(auto-fill, minmax(120px, 1fr))}}\n",""]),r.locals={container:"container_oSUnQ"},t.exports=r},2143:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n(11),o=n(3),l=n(158),c=n(16),d=n(4),h=n(2),m=n(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(h.c)({tag:Object(h.b)(d.p,"hr")},c.j),y=o.default.extend({name:c.j,functional:!0,props:w,render(t,e){var{props:n,data:data}=e;return t("li",Object(l.a)(Object(m.j)(data,["attrs"]),{attrs:{role:"presentation"}}),[t(n.tag,{staticClass:"dropdown-divider",attrs:v(v({},data.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})},972:function(t,e,n){var content=n(1088);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("1850a52e",content,!0,{sourceMap:!1})},978:function(t,e,n){var content=n(1138);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3849d852",content,!0,{sourceMap:!1})},991:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(11),o=n(7),l=n(1163),c=n.n(l),d={removeDoctype:!0,removeXMLProcInst:!0,removeComments:!0,removeMetadata:!0,removeXMLNS:!1,removeEditorsNSData:!0,cleanupAttrs:!1,inlineStyles:{onlyMatchedOnce:!1},minifyStyles:!0,convertStyleToAttrs:!0,cleanupIDs:!0,prefixIds:!1,removeRasterImages:!0,removeUselessDefs:!0,cleanupNumericValues:!0,cleanupListOfValues:!0,convertColors:!0,removeUnknownsAndDefaults:!0,removeNonInheritableGroupAttrs:!0,removeUselessStrokeAndFill:!0,removeViewBox:!1,cleanupEnableBackground:!1,removeHiddenElems:!1,removeEmptyText:!0,convertShapeToPath:!1,moveElemsAttrsToGroup:!1,moveGroupAttrsToElems:!1,collapseGroups:!0,convertPathData:!1,convertTransform:!0,removeEmptyAttrs:!0,removeEmptyContainers:!0,mergePaths:!0,removeUnusedNS:!0,sortAttrs:!0,removeTitle:!0,removeDesc:!0,removeDimensions:!0,removeAttrs:!1,removeElementsByAttr:!1,addClassesToSVGElement:!1,removeStyleElement:!0,removeScriptElement:!0,addAttributesToSVGElement:!1};function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=function(){var t=Object(o.a)((function*(content){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=c()(m(m({},d),t)),n=yield e.optimize(content);return n.data}));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=4d93946.modern.js.map