(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{c818:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center",staticStyle:{"max-width":"800px",width:"100%",overflow:"hidden"}},[a("div",{staticClass:"q-gutter-sm"},[a("q-checkbox",{attrs:{label:"Use Touch (set if on mobile)"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),a("q-separator",{staticClass:"full-width"}),a("q-input",{staticClass:"q-pa-sm",attrs:{color:"blue-8",filled:"",label:"Enter date range",mask:"####-##-## - ####-##-##"},on:{input:e.onInputChanged},scopedSlots:e._u([{key:"append",fn:function(){return[a("div",{staticClass:"q-gutter-sm",staticStyle:{overflow:"hidden"}},[a("span",[a("q-icon",{staticClass:"cursor-pointer q-ma-md",attrs:{name:"far fa-calendar"}}),a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showCalendar,callback:function(t){e.showCalendar=t},expression:"showCalendar"}},[a("q-calendar",{ref:"calendar",staticStyle:{width:"170px"},attrs:{view:"month",locale:"en-us","mini-mode":"","short-weekday-label":"","selected-start-end-dates":e.startEndDates,"day-class":e.classDay},on:{"mousedown:day2":e.onMouseDownDay,"mouseup:day2":e.onMouseUpDay,"mousemove:day2":e.onMouseMoveDay},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)])]},proxy:!0}]),model:{value:e.convertedDates,callback:function(t){e.convertedDates=t},expression:"convertedDates"}})],1)},s=[],n=(a("99af"),a("ac1f"),a("1276"),a("278c")),o=a.n(n),r=a("384e");function c(e){return 0===e.button}var h={data:function(){return{selectedDate:"",convertedDates:"",showCalendar:!1,anchorTimestamp:"",otherTimestamp:"",mouseDown:!1,mobile:!1}},computed:{startEndDates:function(){var e=[];return!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier&&(this.anchorDayIdentifier<=this.otherDayIdentifier?e.push(this.anchorTimestamp.date,this.otherTimestamp.date):e.push(this.otherTimestamp.date,this.anchorTimestamp.date)),e},anchorDayIdentifier:function(){return""!==this.anchorTimestamp&&r["a"].getDayIdentifier(this.anchorTimestamp)},otherDayIdentifier:function(){return""!==this.otherTimestamp&&r["a"].getDayIdentifier(this.otherTimestamp)},lowIdentifier:function(){return Math.min(this.anchorDayIdentifier,this.otherDayIdentifier)},highIdentifier:function(){return Math.max(this.anchorDayIdentifier,this.otherDayIdentifier)}},watch:{startEndDates:function(){var e=o()(this.startEndDates,2),t=e[0],a=e[1];this.convertedDates="".concat(t," - ").concat(a)}},methods:{onInputChanged:function(e){var t=e.split(" - ");t[0]&&10===t[0].length&&(this.anchorTimestamp=r["a"].parseTimestamp(t[0])),t[1]&&10===t[1].length&&(this.otherTimestamp=r["a"].parseTimestamp(t[1]))},calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},classDay:function(e){if(!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier)return this.getBetween(e)},getBetween:function(e){var t=r["a"].getDayIdentifier(e);return{"q-selected-day-first":this.lowIdentifier===t,"q-selected-day":this.lowIdentifier<=t&&this.highIdentifier>=t,"q-selected-day-last":this.highIdentifier===t}},onMouseDownDay:function(e){var t=e.scope,a=e.event;if(c(a)){if(!0===this.mobile&&null!==this.anchorTimestamp&&null!==this.otherTimestamp&&this.anchorTimestamp.date===this.otherTimestamp.date)return this.otherTimestamp=t.timestamp,void(this.mouseDown=!1);this.mouseDown=!0,this.anchorTimestamp=t.timestamp,this.otherTimestamp=t.timestamp}},onMouseUpDay:function(e){var t=e.scope,a=e.event;c(a)&&(this.otherTimestamp=t.timestamp,this.mouseDown=!1)},onMouseMoveDay:function(e){var t=e.scope;e.event;!0===this.mouseDown&&(this.otherTimestamp=t.timestamp)}}},d=h,m=a("2877"),l=a("8f8e"),u=a("eb85"),p=a("27f9"),f=a("0016"),D=a("7cbe"),y=a("ddd8"),v=a("eebe"),w=a.n(v),I=Object(m["a"])(d,i,s,!1,null,null,null);t["default"]=I.exports;w()(I,"components",{QCheckbox:l["a"],QSeparator:u["a"],QInput:p["a"],QIcon:f["a"],QPopupProxy:D["a"],QSelect:y["a"]})}}]);