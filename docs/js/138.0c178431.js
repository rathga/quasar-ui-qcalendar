(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[138],{"76e3":function(e,a,t){"use strict";t.r(a);var d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{"max-width":"800px",width:"100%"}},[t("q-calendar",{staticStyle:{height:"400px"},attrs:{view:"week-scheduler",resources:e.resources,"disabled-before":e.disabledBefore,"disabled-after":e.disabledAfter,"resource-style":e.modifiedStyle,locale:"en-us"},model:{value:e.selectedDate,callback:function(a){e.selectedDate=a},expression:"selectedDate"}})],1)},l=[],s=t("384e"),r=new Date;function o(e){var a=new Date(r);a.setDate(e);var t=s["a"].parseDate(a);return t.date}var i={data:function(){return{selectedDate:"2019-04-01",resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}]}},beforeMount:function(){this.selectedDate=o(r.getDate())},computed:{disabledBefore:function(){if(this.selectedDate){var e=1,a=s["a"].parseTimestamp(this.selectedDate);return a=s["a"].addToDate(a,{day:a.weekday>e?-(a.weekday-e):e-a.weekday}),a.date}},disabledAfter:function(){if(this.selectedDate){var e=5,a=s["a"].parseTimestamp(this.selectedDate);return a=s["a"].addToDate(a,{day:a.weekday>e?-(a.weekday-e):e-a.weekday}),a.date}}},methods:{modifiedStyle:function(e){return!0===e.timestamp.disabled?{backgroundColor:"#ffcb9c!important",cursor:"not-allowed"}:{}}}},n=i,c=t("2877"),u=Object(c["a"])(n,d,l,!1,null,null,null);a["default"]=u.exports}}]);