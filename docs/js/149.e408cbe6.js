(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[149],{"82f2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"800px",width:"100%",overflow:"hidden"}},[a("q-calendar",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.left.right",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,left:!0,right:!0}}],ref:"calendar",attrs:{view:"week-scheduler",locale:"en-us",resources:e.resources,animated:"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},n=[],r=a("4082"),l=a.n(r),s={data:function(){return{selectedDate:"",resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}],dragging:!1,ignoreNextSwipe:!1}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},handleSwipe:function(e){var t=e.evt,a=l()(e,["evt"]);!1===this.dragging&&(a.duration>=30&&!1===this.ignoreNextSwipe?"right"===a.direction?this.calendarPrev():"left"===a.direction&&this.calendarNext():this.ignoreNextSwipe=!1),!1!==t.cancelable&&t.preventDefault(),t.stopPropagation()}}},o=s,c=a("2877"),d=a("12c5"),u=a("eebe"),h=a.n(u),p=Object(c["a"])(o,i,n,!1,null,null,null);t["default"]=p.exports;h()(p,"directives",{TouchSwipe:d["a"]})}}]);