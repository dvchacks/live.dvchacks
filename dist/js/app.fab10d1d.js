(function(t){function e(e){for(var a,o,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],s[o]&&f.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==s[i]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1adc":function(t,e,n){"use strict";var a=n("6dff"),s=n.n(a);s.a},3796:function(t,e,n){"use strict";var a=n("b320"),s=n.n(a);s.a},"38d0":function(t,e,n){"use strict";var a=n("8cf4"),s=n.n(a);s.a},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},4826:function(t,e,n){"use strict";var a=n("cd9c"),s=n.n(a);s.a},"5c0b":function(t,e,n){"use strict";var a=n("6879"),s=n.n(a);s.a},6879:function(t,e,n){},"6dff":function(t,e,n){},"8cf4":function(t,e,n){},9425:function(t,e,n){},b320:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=n("ce5b"),r=n.n(s);n("da64");a["default"].use(r.a,{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:"",fixed:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("v-img",{staticClass:"d-inline-block image",attrs:{src:n("d9fa"),height:"50px",width:"50px"}}),a("span",{staticClass:"ml-3"},[t._v("DVCHACKS")]),a("span",{staticClass:"font-weight-light ml-2 live-text"},[t._v("Live")])],1)],1),a("v-content",{staticClass:"main"},[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("DhCounter")],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("DhAnnouncement")],1),a("v-flex",{attrs:{xs12:"",md8:""}},[a("DhSchedule")],1)],1)],1)],1),a("DhFooter")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{attrs:{elevation:"8",color:"#ccc"}},[n("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline timer"},[n("h1",[t._v(t._s(t.hours||"00"))]),n("span",[t._v(":")]),n("h1",[t._v(t._s(t.minutes))]),n("span",[t._v(":")]),n("h1",[t._v(t._s(t.seconds))])])]),n("v-card-text",{staticClass:"text-md-center"},[n("div",{staticClass:"subtitle"},[t._v("UNTIL HACKING ENDS!!")])]),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{light:"",large:"",href:"/",target:"_blank",outline:!t.hover,color:"#4ab88a"},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[n("span",{staticClass:"mr-2 button-text",class:{hover:t.hover}},[t._v("Submit on Devpost")])])],1)],1)],1)},l=[],u=n("0a0d"),d=n.n(u),f=new Date(2019,3,28,12,0,0).getTime(),v=new Date(2019,3,27,12,0,0).getTime(),b=function(){var t=d()(),e=f-t,n=f-v;return e<n?e>0?e:0:n},h=a["default"].extend({data:function(){var t=b(),e=Math.floor(t/6e4)%60,n=Math.floor(t/1e3)%60;return{hover:!1,hours:Math.floor(t/36e5),minutes:e<10?"0".concat(e):e,seconds:n<10?"0".concat(n):n}},beforeMount:function(){setInterval(this.setTime,1e3)},methods:{calcTime:function(t){var e=Math.floor(t/6e4)%60,n=Math.floor(t/1e3)%60;this.hours=Math.floor(t/36e5),this.minutes=e<10?"0".concat(e):e,this.seconds=n<10?"0".concat(n):n},setTime:function(){var t=b();this.calcTime(t)}}}),p=h,j=(n("3796"),n("2877")),m=n("6544"),y=n.n(m),g=n("8336"),k=n("b0af"),C=n("99d9"),x=n("12b2"),_=n("a523"),w=Object(j["a"])(p,i,l,!1,null,"eca36780",null),V=w.exports;y()(w,{VBtn:g["a"],VCard:k["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:x["a"],VContainer:_["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{attrs:{elevation:"8",color:"#ccc",height:"75vh"}},[n("v-card-title",{staticClass:"justify-center card-title"},[n("h1",[t._v("Announcement")])]),n("v-card-text",{staticClass:"card-text-parent"},[n("div",{staticClass:"card-text"},t._l(t.announcements,function(e,a){return n("div",{key:a,staticClass:"announcement"},[n("span",{domProps:{innerHTML:t._s(e.text)}}),n("div",{staticClass:"time-display"},[t._v(t._s(e.time))])])}),0)])],1)],1)},T=[],D=n("bc3a"),S=n.n(D),O=n("c1df"),z=n.n(O),E=a["default"].extend({data:function(){return{announcements:[]}},beforeMount:function(){var t=this;S.a.get("/slack/announcements").then(function(e){console.log(e),t.announcements=e.data.map(function(t){return t.time=O["unix"](t.time).format("MMM DD, h:mm A"),t})}).catch(function(t){console.log(t)})}}),A=E,F=(n("1adc"),Object(j["a"])(A,M,T,!1,null,"cb732468",null)),B=F.exports;y()(F,{VCard:k["a"],VCardText:C["b"],VCardTitle:x["a"],VContainer:_["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"schedule-card",attrs:{elevation:"8",color:"#ccc",height:"75vh"}},[n("v-card-title",{staticClass:"justify-center"},[n("h1",[t._v("Schedule")])]),n("v-card-text",{staticClass:"card-content"},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.buttons,function(e){return n("v-flex",{key:e.title},[n("v-btn",{attrs:{outline:!e.hover&&!e.active,color:e.color,light:""},on:{mouseenter:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1},click:function(n){return t.buttonClick(e)}}},[n("span",{class:{hover:e.hover||e.active},domProps:{textContent:t._s(e.title)}})])],1)}),1),n("DhTimeline",{attrs:{days:t.filteredDays}})],1)],1)],1)},I=[],P=(n("6762"),n("2fdb"),n("cebc")),L=(n("7514"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{overflow:"auto","text-align":"left"}},[n("v-layout",{staticStyle:{height:"100%"},attrs:{wrap:""}},t._l(t.days,function(e,a){return n("v-flex",{key:a,attrs:{xs12:""}},[n("div",{staticClass:"day-header"},[n("span",[t._v("\n          "+t._s(e.date.format("MMMM D"))+"\n        ")]),n("span",{style:{color:"#4ab88a"}},[t._v("\n          "+t._s(e.date.format("dddd"))+"\n        ")])]),n("v-calendar",{attrs:{type:"day",color:"primary",start:e.date,"first-interval":e.start,"interval-count":e.end-e.start,"hide-header":""},scopedSlots:t._u([{key:"interval",fn:function(s){var r=s.hour,o=s.minutesToPixels;return[r===e.start&&t.currentTime.diff(t.dayStarts[a])>0?n("div",{staticClass:"bar",style:{top:o(t.currentTime.diff(t.dayStarts[a],"minutes"))+"px"}}):t._e(),t._l(e.events,function(e){return[r===+e.time.split(":")[0]?n("div",{key:e.title,staticClass:"event",style:{"border-color":e.color,top:o(+e.time.split(":")[1])+"px",height:o(e.duration)+"px",left:(e.offset||0)+"px"}},[n("span",{staticClass:"start-circle",style:{"background-color":e.color}}),n("v-chip",{staticClass:"ml-3",attrs:{color:e.color,label:"",small:"",light:"",outline:""}},[t._v("\n                "+t._s(e.title)+"\n              ")]),n("span",{staticClass:"end-circle",style:{"background-color":e.color}})],1):t._e()]})]}}],null,!0)})],1)}),1)],1)}),N=[],$=n("c0a4"),G=n.n($),H={props:["days"],data:function(){return{colors:G.a,currentTime:O(),timer:null}},mounted:function(){var t=this;this.timer=setTimeout(function(){t.currentTime=O()},6e4)},beforeDestroy:function(){clearInterval(this.timer)},computed:{dayStarts:function(){return this.days.map(function(t){var e=O(t.date).startOf("day");return e.add(t.start,"hours")})}}},q=H,J=(n("ee0c"),n("4826"),n("a4f6")),U=n("cc20"),K=n("0e8f"),R=n("a722"),Y=Object(j["a"])(q,L,N,!1,null,"ae1a6326",null),Q=Y.exports;y()(Y,{VCalendar:J["a"],VChip:U["a"],VContainer:_["a"],VFlex:K["a"],VLayout:R["a"]});var X=a["default"].extend({data:function(){return{buttons:[{title:"All",color:"#4ab88a",hover:!1,active:!0},{title:"Workshops",color:"light-blue",hover:!1,active:!1},{title:"Activities",color:"red",hover:!1,active:!1},{title:"Main Event",color:"cyan",hover:!1,active:!1},{title:"Food",color:"purple",hover:!1,active:!1}],activeButton:"",days:[{date:z()("2019-04-27"),start:8,end:21,events:[{title:"Registration starts",time:"09:00",duration:60,color:G.a.cyan.base,type:"Main Event"},{title:"Opening Ceremony",time:"10:00",duration:60,color:G.a.cyan.base,type:"Main Event"},{title:"Lunch",time:"11:00",duration:60,color:G.a.purple.base,type:"Food"},{title:"Team Formation",time:"12:00",duration:60,color:G.a.cyan.base,type:"Main Event"},{title:"Hacking Starts",time:"12:00",duration:0,color:G.a.cyan.base,type:"Main Event"},{title:"Workshop 1: Intro to Git & Github",time:"13:00",duration:60,color:G.a.lightBlue.base,type:"Workshops"},{title:"Workshop 2: Intro to Web Dev",time:"14:00",duration:60,color:G.a.lightBlue.base,type:"Workshops"},{title:"Snack",time:"15:00",duration:30,color:G.a.purple.base,offset:135,type:"Food"},{title:"Workshop 3: Intro to APIs",time:"16:00",duration:60,color:G.a.lightBlue.base,type:"Workshops"},{title:"Workshop 4: Cloud Computing AWS",time:"17:00",duration:60,color:G.a.lightBlue.base,type:"Workshops"},{title:"Dinner",time:"19:00",duration:60,color:G.a.purple.base,offset:135,type:"Food"},{title:"Venue Closes",time:"20:00",duration:0,color:G.a.cyan.base,type:"Main Event"}]},{date:z()("2019-4-28"),start:8,end:15,events:[{title:"Check-in starts",time:"09:00",duration:60,color:G.a.cyan.base,type:"Main Event"},{title:"Lunch",time:"11:00",duration:60,color:G.a.purple.base,type:"Food"},{title:"Judging",time:"12:00",duration:90,color:G.a.cyan.base,type:"Main Event"},{title:"Hacking Ends",time:"12:00",duration:0,color:G.a.cyan.base,type:"Main Event"},{title:"Closing Ceremony",time:"13:00",duration:0,color:G.a.cyan.base,type:"Main Event"}]}]}},components:{DhTimeline:Q},methods:{buttonClick:function(t){if("All"===t.title)t.active=!0,this.checkButton.forEach(function(t){t.active=!1});else{t.active=!t.active;var e=this.buttons.find(function(t){return"All"===t.title});e&&this.checkButton.every(function(t){return!t.active})?e.active=!0:e&&(e.active=!1)}}},computed:{checkButton:function(){return this.buttons.filter(function(t){return"All"!==t.title})},activeButtons:function(){return this.buttons.filter(function(t){return t.active}).map(function(t){return t.title})},filteredDays:function(){var t=this;return this.days.map(function(e){return Object(P["a"])({},e,{events:e.events.filter(function(e){return t.activeButtons.includes("All")||t.activeButtons.includes(e.type)})})})}}}),Z=X,tt=(n("38d0"),Object(j["a"])(Z,W,I,!1,null,"75c9c5e5",null)),et=tt.exports;y()(tt,{VBtn:g["a"],VCard:k["a"],VCardText:C["b"],VCardTitle:x["a"],VContainer:_["a"],VFlex:K["a"],VLayout:R["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"pa-3 justify-center"},[n("div",[t._v("© "+t._s((new Date).getFullYear()))])])},at=[],st=n("553a"),rt={},ot=Object(j["a"])(rt,nt,at,!1,null,null,null),ct=ot.exports;y()(ot,{VFooter:st["a"]});var it={name:"App",components:{DhCounter:V,DhAnnouncement:B,DhSchedule:et,DhFooter:ct},data:function(){return{}}},lt=it,ut=(n("5c0b"),n("7496")),dt=n("549c"),ft=n("adda"),vt=n("71d9"),bt=n("2a7f"),ht=Object(j["a"])(lt,o,c,!1,null,null,null),pt=ht.exports;y()(ht,{VApp:ut["a"],VContainer:_["a"],VContent:dt["a"],VFlex:K["a"],VImg:ft["a"],VLayout:R["a"],VToolbar:vt["a"],VToolbarTitle:bt["a"]});n("bf40");var jt=n("9483");Object(jt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(pt)}}).$mount("#app")},cd9c:function(t,e,n){},d9fa:function(t,e,n){t.exports=n.p+"img/WICS-Club-White.04b0c6fb.png"},ee0c:function(t,e,n){"use strict";var a=n("9425"),s=n.n(a);s.a}});
//# sourceMappingURL=app.fab10d1d.js.map