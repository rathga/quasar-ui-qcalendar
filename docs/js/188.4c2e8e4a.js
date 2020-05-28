(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[188],{dbd1:function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n    <div class="q-gutter-sm">\n      <q-checkbox v-model="mobile" label="Use Touch (set if on mobile)" />\n    </div>\n    <q-separator class="full-width" />\n    <q-input color="blue-8" filled v-model="convertedDates" @input="onInputChanged" label="Enter date range" mask="####-##-## - ####-##-##" class="q-pa-sm">\n      <template v-slot:append>\n        <div class="q-gutter-sm" style="overflow: hidden;">\n          <span>\n            <q-icon name="far fa-calendar" class="cursor-pointer q-ma-md" />\n            <q-popup-proxy v-model="showCalendar" anchor="top right" self="bottom middle">\n              <div style="width: 300px;">\n                <div class="row q-pa-sm">\n                  <div class="col-8 row justify-evenly items-center">\n                    <q-icon name="fas fa-chevron-left" @click="calendarPrev" />\n                    <div class="text-center" style="min-width: 100px;">{{ formattedMonth }}</div>\n                    <q-icon name="fas fa-chevron-right" @click="calendarNext" />\n                  </div>\n                  <div class="col-4 row justify-evenly items-center">\n                    <q-icon name="fas fa-chevron-left" @click="addToYear(-1)" />\n                    {{ selectedYear }}\n                    <q-icon name="fas fa-chevron-right" @click="addToYear(1)" />\n                  </div>\n                </div>\n                <q-calendar\n                  ref="calendar"\n                  v-model="selectedDate"\n                  view="month"\n                  :locale="locale"\n                  mini-mode\n                  :day-class="classDay"\n                  @changed="onChanged"\n                  @mousedown:day="onMouseDownDay"\n                  @mouseup:day="onMouseUpDay"\n                  @mousemove:day="onMouseMoveDay"\n                  style="height: 250px;"\n                />\n                <div class="row justify-center q-pa-xs">\n                  <q-btn label="Today" no-caps flat size="sm" @click="onToday" />\n                </div>\n              </div>\n            </q-popup-proxy>\n          </span>\n        </div>\n      </template>\n    </q-input>\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nconst CURRENT_DAY = new Date()\n\nfunction getCurrentDay (day) {\n  const newDay = new Date(CURRENT_DAY)\n  newDay.setDate(day)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nfunction leftClick (e) {\n  return e.button === 0\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate: getCurrentDay(CURRENT_DAY.getDate()),\n      selectedYear: CURRENT_DAY.getFullYear(),\n      convertedDates: \'\',\n      showCalendar: false,\n      anchorTimestamp: \'\',\n      otherTimestamp: \'\',\n      mouseDown: false,\n      mobile: false,\n      locale: \'en-us\'\n    }\n  },\n\n  computed: {\n    startEndDates () {\n      const dates = []\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        if (this.anchorDayIdentifier <= this.otherDayIdentifier) {\n          dates.push(this.anchorTimestamp.date, this.otherTimestamp.date)\n        } else {\n          dates.push(this.otherTimestamp.date, this.anchorTimestamp.date)\n        }\n      }\n      return dates\n    },\n\n    anchorDayIdentifier () {\n      if (this.anchorTimestamp !== \'\') {\n        return QCalendar.getDayIdentifier(this.anchorTimestamp)\n      }\n      return false\n    },\n\n    otherDayIdentifier () {\n      if (this.otherTimestamp !== \'\') {\n        return QCalendar.getDayIdentifier(this.otherTimestamp)\n      }\n      return false\n    },\n\n    lowIdentifier () {\n      // returns lowest of the two values\n      return Math.min(this.anchorDayIdentifier, this.otherDayIdentifier)\n    },\n\n    highIdentifier () {\n      // returns highest of the two values\n      return Math.max(this.anchorDayIdentifier, this.otherDayIdentifier)\n    },\n\n    formattedMonth () {\n      const date = new Date(this.selectedDate)\n      return this.monthFormatter().format(date)\n    }\n  },\n\n  watch: {\n    startEndDates () {\n      const [start, end] = this.startEndDates\n      this.convertedDates = `${start} - ${end}`\n    },\n\n    selectedDate () {\n      const tm = QCalendar.parseTimestamp(this.selectedDate)\n      this.selectedYear = tm.year\n    }\n  },\n\n  methods: {\n    onInputChanged (val) {\n      const items = val.split(\' - \')\n      if (items[0] && items[0].length === 10) this.anchorTimestamp = QCalendar.parseTimestamp(items[0])\n      if (items[1] && items[1].length === 10) this.otherTimestamp = QCalendar.parseTimestamp(items[1])\n    },\n\n    onChanged ({ start, end }) {\n      console.log(start, end)\n    },\n\n    addToYear (amount) {\n      // parse current date to timestamp\n      let ts = QCalendar.parseTimestamp(this.selectedDate)\n      // add specified amount of days\n      ts = QCalendar.addToDate(ts, { year: amount })\n      // re-assign values\n      this.selectedDate = ts.date\n      this.selectedYear = ts.year\n    },\n\n    onToday () {\n      this.selectedDate = getCurrentDay(CURRENT_DAY.getDate())\n    },\n\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n\n    classDay (timestamp) {\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        return this.getBetween(timestamp)\n      }\n    },\n\n    getBetween (timestamp) {\n      const nowIdentifier = QCalendar.getDayIdentifier(timestamp)\n      return {\n        \'q-selected-day-first\': this.lowIdentifier === nowIdentifier,\n        \'q-selected-day\': this.lowIdentifier <= nowIdentifier && this.highIdentifier >= nowIdentifier,\n        \'q-selected-day-last\': this.highIdentifier === nowIdentifier\n      }\n    },\n\n    onMouseDownDay ({ scope, event }) {\n      if (leftClick(event)) {\n        if (this.mobile === true &&\n          this.anchorTimestamp !== null &&\n          this.otherTimestamp !== null &&\n          this.anchorTimestamp.date === this.otherTimestamp.date) {\n          this.otherTimestamp = scope\n          this.mouseDown = false\n          return\n        }\n        // mouse is down, start selection and capture current\n        this.mouseDown = true\n        this.anchorTimestamp = scope\n        this.otherTimestamp = scope\n      }\n    },\n\n    onMouseUpDay ({ scope, event }) {\n      if (leftClick(event)) {\n        // mouse is up, capture last and cancel selection\n        this.otherTimestamp = scope\n        this.mouseDown = false\n      }\n    },\n\n    onMouseMoveDay ({ scope, event }) {\n      if (this.mouseDown === true) {\n        this.otherTimestamp = scope\n      }\n    },\n\n    monthFormatter () {\n      try {\n        return new Intl.DateTimeFormat(this.locale || void 0, {\n          month: \'long\',\n          timeZone: \'UTC\'\n        })\n      } catch (e) {\n        //\n      }\n    }\n  }\n}\n<\/script>\n'}}]);