(function(t){function e(e){for(var n,i,c=e[0],s=e[1],d=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=s;o.push(["200e","chunk-vendors"]),r()})({"200e":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("h1",[t._v("A Vue2 Full Calendar")]),r("h2",{on:{click:t.changeDate}},[t._v("Has month and week two mode. And you can custom all style")]),r("div",{staticClass:"container"},[r("Calendar",{ref:"calendar",staticClass:"ui-calendar",attrs:{dateData:t.dateData,mode:t.mode,"render-header":t.renderHeader},on:{onMonthChange:t.onMonthChange,next:t.onNext,prev:t.onPrev},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.data;return[r("transition",{attrs:{name:t.transitionName}},[r("div",{key:t.indentifier,staticClass:"calendar-body-grid"},t._l(n,(function(e,n){return r("div",{key:n,staticClass:"calendar-body-row"},t._l(e,(function(e){return e?r("div",{key:e.date.full,staticClass:"calendar-day-item"},[r("div",{class:["ui-calendar-item",{"is-otherMonth":e.isPrevMonth||e.isNextMonth,"is-today":e.isToday}]},[r("div",{staticClass:"ui-calendar-item-date"},[t._v("\n                    "+t._s(e.date.date)+"\n                  ")]),t._l(e.data,(function(e,n){return r("div",{key:n,staticClass:"ui-calendar-item-name"},[r("span",[t._v(t._s(e.title))]),r("span",{staticClass:"del",on:{click:function(r){return t.deleteItem(e.title)}}},[t._v("✖️")])])}))],2)]):t._e()})),0)})),0)])]}}])},[r("div",{staticClass:"ui-calendar-header__left",attrs:{slot:"header-left"},slot:"header-left"},[r("button",{class:["ui-calendar-modeBtn",{active:"month"===t.mode}],on:{click:function(e){t.mode="month"}}},[t._v("\n          Month\n        ")]),r("button",{class:["ui-calendar-modeBtn",{active:"week"===t.mode}],on:{click:function(e){t.mode="week"}}},[t._v("\n          Week\n        ")])])])],1)])},o=[],i=(r("d25f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[""+t.prefixCls,"is-"+t.mode]},[r("calendar-header",{attrs:{mode:t.mode,"prefix-cls":t.prefixCls,"first-day":t.firstDay,"render-header":t.renderHeader,"header-left":t.$slots["header-left"],"header-right":t.$slots["header-right"],"current-date":t.formatedDay},on:{prev:t.prev,next:t.next}}),r("div",{class:t.prefixCls+"-week"},t._l(t.titleArray,(function(e){return r("div",{key:e,class:t.prefixCls+"-week__item"},[t._v("\n      "+t._s(e)+"\n    ")])})),0),r("div",{class:t.prefixCls+"-body"},[t._t("body",[r("div",{class:t.prefixCls+"-body-grid"},t._l(t.monthData,(function(e,n){return r("div",{key:n,class:t.prefixCls+"-body-row"},[t._l(e,(function(e){return[e?r("div",{key:e.date.full,class:t.prefixCls+"-day-item"},[t._t("default",[r("span",[t._v(t._s(e.date.date))])],{date:e})],2):t._e()]}))],2)})),0)],{data:t.monthData})],2)],1)}),c=[],s=r("5a0c"),d=r.n(s);function u(t,e,r){var n=d()(t).startOf(r);return n.day()<e&&(n=n.subtract(1,"week")),n=n.add(e-n.day(),"day"),n}var l={props:{prefixCls:{type:String,required:!0},mode:String,firstDay:{required:!0},renderHeader:Function,headerLeft:[Object,Array],headerRight:[Object,Array],currentDate:[Date,Object,String]},computed:{pre:function(t){return"".concat(t.prefixCls,"-header")},headerDateText:function(){var t=this.currentDate,e=this.firstDay,r=this.mode;if("week"===this.mode){var n=u(t,e,r),a=n.format("YYYY-MM-DD"),o=n.add(6,"d").format("YYYY-MM-DD");return"".concat(a," - ").concat(o)}return t.format("YYYY-MM")},HeaderCenter:function(){var t=this.$createElement,e=this.$parent,r=e.prev,n=e.next,a=this.prefixCls,o=this.renderHeader?this.renderHeader({prev:r,next:n,selectedDate:this.headerDateText}):t("div",{class:"".concat(a,"-header-center")},[t("a",{class:["".concat(a,"-control"),"".concat(a,"-prev")],on:{click:r}},["<"]),t("span",{class:"".concat(a,"-header-date")},[this.headerDateText]),t("a",{class:["".concat(a,"-control"),"".concat(a,"-next")],on:{click:n}},[">"])]);return o}},render:function(){var t=arguments[0],e=this.prefixCls;return t("div",{class:"".concat(e,"-header")},[t("div",{class:"".concat(e,"-header-left")},[this.headerLeft]),this.HeaderCenter,t("div",{class:"".concat(e,"-header-right")},[this.headerRight])])}};function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m="YYYY/MM/DD",y=7,v=function(t){return new Date(t.replace(/-/g,"/"))},D={name:"VueCalendar",components:{CalendarHeader:l},props:{prefixCls:{type:String,default:"calendar"},startDate:[Number,String,Date],dateData:{type:[Object,Array],default:function(){return[]}},matchKey:{type:String,default:"date"},locale:{type:String,default:"en"},firstDay:{type:Number,default:0},mode:{type:String,default:"month",validator:function(t){return"month"===t||"week"===t}},weekDateShort:{type:Array,validator:function(t){return 7===t.length}},renderHeader:Function,weekLocaleData:Array},data:function(){return{today:this.currentDay,rowNum:6,currentDay:null}},computed:{localeData:function(){return{"zh-cn":"周日_周一_周二_周三_周四_周五_周六".split("_"),en:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")}},formatedDay:function(){return d()(new Date(this.currentDay))},titleArray:function(){var t=this.weekDateShort||this.weekLocaleData||this.localeData[this.locale],e=this.firstDay-1;return t.map((function(){return e+=1,e>=7&&(e=0),t[e]}))},userData:function(){var t={},e=this.dateData,r=this.matchKey;return Array.isArray(e)?e.forEach((function(e){var n=d()(v(e[r])).format(m);t[n]?t[n].push(e):t[n]=[e]})):Object.keys(e).forEach((function(r){var n=d()(v(r)).format(m);t[n]=[e[r]]})),t},monthData:function(){var t=this.formatedDay,e=this.firstDay,r=this.mode,n=this.userData,a=this.rowNum;if(!t)return[];for(var o=u(t,e,r),i=[],c=0;c<a;c+=1)for(var s=0;s<y;s+=1)i[c]||(i[c]=[]),i[c].push(h({},this.getItemStatus(o),{data:n[o.format(m)]||[],date:this.getDate(o)})),o=o.add(1,"day");return i}},watch:{startDate:{immediate:!0,handler:function(t){this.currentDay=t?new Date(t):new Date,this.today||(this.today=this.currentDay)}},currentDay:{immediate:!0,handler:"onMonthChange"},mode:{immediate:!0,handler:function(t){this.rowNum="week"===t?1:6,this.onMonthChange()}}},methods:{getItemStatus:function(t){var e=d()(t),r=this.formatedDay,n=e.month()===r.month(),a=!n&&e.isBefore(this.formatedDay,"month"),o=!n&&e.isAfter(this.formatedDay,"month"),i=!!a&&e.isSame(e.endOf("month")),c=!!o&&e.isSame(e.startOf("month"));return{isPrevMonth:a,isPrevLastDay:i,isNextMonth:o,isNextFirstDay:c,isToday:t.format("YYYY-MM-DD")===d()(this.today).format("YYYY-MM-DD"),isCurMonth:n}},getDate:function(t){return{year:t.year(),month:t.month()+1,date:t.date(),day:t.day(),full:t.format("YYYY-MM-DD")}},getEventArgs:function(){var t=this.monthData,e=this.formatedDay,r=this.rowNum;return{startDate:t[0][0].date,endDay:t[r-1][y-1].date,now:this.getDate(e)}},onMonthChange:function(){this.$emit("onMonthChange",this.getEventArgs())},changeDate:function(t){"string"===typeof t||"[object Date]"===Object.prototype.toString.call(t)?this.currentDay=t:console.error("invalied date!")},prev:function(){var t=this.formatedDay,e=this.mode;this.currentDay=t.subtract(1,e).startOf(e).format("YYYY-MM-DD"),this.$emit("prev",this.getEventArgs())},next:function(){var t=this.formatedDay,e=this.mode;this.currentDay=t.add(1,e).startOf(e).format("YYYY-MM-DD"),this.$emit("next",this.getEventArgs())}}},g=D,b=(r("e138"),r("2877")),O=Object(b["a"])(g,i,c,!1,null,null,null),w=O.exports,_=(r("1c01"),r("58b2"),r("8e6e"),r("456d"),r("bd86"));r("ac6a"),r("f3e2");function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(r,!0).forEach((function(e){Object(_["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t){var e=t?new Date(t):new Date,r=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),o=[{date:"".concat(r,"-").concat(n,"-").concat(a),title:"buy something"},{date:"".concat(r,"-").concat(n,"-").concat(a),title:"shopping"},{date:"".concat(r,"-").concat(n+1,"-2"),title:"remember homework"},{date:"".concat(r,"-").concat(n+1,"-15"),title:"music festival"},{date:"".concat(r,"-").concat(n+2,"-6"),title:"a course of lectures"}],i={};return o.forEach((function(t){i[t.date]=x({},t)})),{Array:o,Object:i}}var M={name:"App",components:{Calendar:w},data:function(){return{indentifier:"",dateData:C().Array,transitionName:"slide-left",mode:"month"}},methods:{onMonthChange:function(t){console.log(t),this.indentifier=t.now.full},onNext:function(){this.transitionName="slide-left"},onPrev:function(){this.transitionName="slide-right"},changeDate:function(){this.$refs.calendar.changeDate("2017-12-12")},deleteItem:function(t){this.dateData=this.dateData.filter((function(e){return e.title!==t}))},renderHeader:function(t){var e=t.prev,r=t.next,n=t.selectedDate,a=this.$createElement,o=a("div",{class:["ui-calendar-modeBtn"],on:{click:e}},["prev"]),i=a("div",{class:["ui-calendar-modeBtn"],on:{click:r}},["next"]),c=a("div",{class:["ui-calendar-modeBtn"]},[n]);return a("div",[o,c,i])}}},k=M,Y=(r("37c9"),Object(b["a"])(k,a,o,!1,null,null,null)),P=Y.exports;new n["a"]({el:"#app",components:{App:P},render:function(t){return t(P)}})},"37c9":function(t,e,r){"use strict";var n=r("57f0"),a=r.n(n);a.a},"57f0":function(t,e,r){},"7cce":function(t,e,r){},e138:function(t,e,r){"use strict";var n=r("7cce"),a=r.n(n);a.a}});
//# sourceMappingURL=app.b8d7cb23.js.map