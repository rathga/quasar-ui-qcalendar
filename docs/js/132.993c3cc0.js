(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[132],{d36e:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center full-width"},[a("q-calendar",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.left.right",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,left:!0,right:!0}}],ref:"calendar",staticStyle:{height:"200px","max-width":"800px",width:"100%"},attrs:{view:"day-resource",resources:e.resources,"resource-height":50,locale:"en-us",sticky:"",animated:"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},r=[],n=a("4082"),l=a.n(n),s={data:function(){return{selectedDate:"2019-04-01",resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}],dragging:!1,ignoreNextSwipe:!1}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},handleSwipe:function(e){var t=e.evt,a=l()(e,["evt"]);!1===this.dragging&&(a.duration>=30&&!1===this.ignoreNextSwipe?"right"===a.direction?this.calendarPrev():"left"===a.direction&&this.calendarNext():this.ignoreNextSwipe=!1),!1!==t.cancelable&&t.preventDefault(),t.stopPropagation()}}},o=s,c=a("2877"),d=a("12c5"),u=a("eebe"),h=a.n(u),p=Object(c["a"])(o,i,r,!1,null,null,null);t["default"]=p.exports;h()(p,"directives",{TouchSwipe:d["a"]})}}]);