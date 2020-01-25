(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{c76b:function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%;\">\n    <q-splitter\n      v-model=\"splitterModel\"\n      :limits=\"[30, 100]\"\n      emit-immediately\n    >\n      <template v-slot:before>\n        <div style=\"overflow: hidden;\">\n          <q-calendar\n            ref=\"calendar\"\n            v-model=\"selectedDate\"\n            view=\"month\"\n            locale=\"en-us\"\n            :mini-mode=\"miniMode\"\n          >\n            <template #day=\"{ date, miniMode }\">\n              <template v-for=\"(event, index) in getEvents(date)\">\n                <template v-if=\"miniMode\">\n                  <q-badge\n                    :key=\"index\"\n                    style=\"width: 5px; max-width: 5px; height: 5px; max-height: 5px\"\n                    class=\"q-ma-xs q-event\"\n                    :class=\"badgeClasses(event, 'day')\"\n                    :style=\"badgeStyles(event, 'day')\"\n                  ></q-badge>\n                </template>\n                <template v-else>\n                  <q-badge\n                    :key=\"index\"\n                    style=\"width: 100%; cursor: pointer; height: 16px; max-height: 16px\"\n                    class=\"q-mb-xs q-event\"\n                    :class=\"badgeClasses(event, 'day')\"\n                    :style=\"badgeStyles(event, 'day')\"\n                  >\n                    <q-icon v-if=\"event.icon\" :name=\"event.icon\" class=\"q-mr-xs\"></q-icon><span class=\"ellipsis\">{{ event.title }}</span>\n                  </q-badge>\n                </template>\n              </template>\n            </template>\n          </q-calendar>\n        </div>\n      </template>\n      <template v-slot:separator>\n        <q-avatar color=\"primary\" text-color=\"white\" size=\"40px\" icon=\"drag_indicator\" />\n      </template>\n      <template v-slot:after>\n        <div style=\"min-width: 20px\"></div>\n      </template>\n    </q-splitter>\n  </div>\n</template>\n\n<script>\n// normally you would not import \"all\" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from 'ui' // ui is aliased from '@quasar/quasar-ui-qcalendar'\n\nconst CURRENT_DAY = new Date()\n\nfunction getCurrentDay (day) {\n  const newDay = new Date(CURRENT_DAY)\n  newDay.setDate(day)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nconst reRGBA = /^\\s*rgb(a)?\\s*\\((\\s*(\\d+)\\s*,\\s*?){2}(\\d+)\\s*,?\\s*([01]?\\.?\\d*?)?\\s*\\)\\s*$/\n\nfunction textToRgb (color) {\n  if (typeof color !== 'string') {\n    throw new TypeError('Expected a string')\n  }\n\n  const m = reRGBA.exec(color)\n  if (m) {\n    const rgb = {\n      r: Math.min(255, parseInt(m[2], 10)),\n      g: Math.min(255, parseInt(m[3], 10)),\n      b: Math.min(255, parseInt(m[4], 10))\n    }\n    if (m[1]) {\n      rgb.a = Math.min(1, parseFloat(m[5]))\n    }\n    return rgb\n  }\n  return hexToRgb(color)\n}\n\nfunction hexToRgb (hex) {\n  if (typeof hex !== 'string') {\n    throw new TypeError('Expected a string')\n  }\n\n  hex = hex.replace(/^#/, '')\n\n  if (hex.length === 3) {\n    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]\n  } else if (hex.length === 4) {\n    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]\n  }\n\n  const num = parseInt(hex, 16)\n\n  return hex.length > 6\n    ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) }\n    : { r: num >> 16, g: num >> 8 & 255, b: num & 255 }\n}\n\nfunction luminosity (color) {\n  if (typeof color !== 'string' && (!color || color.r === void 0)) {\n    throw new TypeError('Expected a string or a {r, g, b} object as color')\n  }\n\n  const\n    rgb = typeof color === 'string' ? textToRgb(color) : color,\n    r = rgb.r / 255,\n    g = rgb.g / 255,\n    b = rgb.b / 255,\n    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),\n    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),\n    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)\n  return 0.2126 * R + 0.7152 * G + 0.0722 * B\n}\n\nexport default {\n  data () {\n    return {\n      splitterModel: 90, // start at 90%\n      selectedDate: '',\n      miniMode: false,\n      events: [\n        {\n          title: '1st of the Month',\n          details: 'Everything is funny as long as it is happening to someone else',\n          date: getCurrentDay(1),\n          bgcolor: 'orange'\n        },\n        {\n          title: 'Sisters Birthday',\n          details: 'Buy a nice present',\n          date: getCurrentDay(4),\n          bgcolor: 'green',\n          icon: 'fas fa-birthday-cake'\n        },\n        {\n          title: 'Meeting',\n          details: 'Time to pitch my idea to the company',\n          date: getCurrentDay(8),\n          time: '10:00',\n          duration: 120,\n          bgcolor: 'red',\n          icon: 'fas fa-handshake'\n        },\n        {\n          title: 'Lunch',\n          details: 'Company is paying!',\n          date: getCurrentDay(8),\n          time: '11:30',\n          duration: 90,\n          bgcolor: 'teal',\n          icon: 'fas fa-hamburger'\n        },\n        {\n          title: 'Visit mom',\n          details: 'Always a nice chat with mom',\n          date: getCurrentDay(20),\n          time: '17:00',\n          duration: 90,\n          bgcolor: 'blue-grey',\n          icon: 'fas fa-car'\n        },\n        {\n          title: 'Conference',\n          details: 'Teaching Javascript 101',\n          date: getCurrentDay(15),\n          time: '08:00',\n          duration: 540,\n          bgcolor: 'blue',\n          icon: 'fas fa-chalkboard-teacher'\n        },\n        {\n          title: 'Girlfriend',\n          details: 'Meet GF for dinner at Swanky Restaurant',\n          date: getCurrentDay(15),\n          time: '19:00',\n          duration: 180,\n          bgcolor: 'teal',\n          icon: 'fas fa-utensils'\n        },\n        {\n          title: 'Fishing',\n          details: 'Time for some weekend R&R',\n          date: getCurrentDay(16),\n          bgcolor: 'purple',\n          icon: 'fas fa-fish',\n          days: 2\n        },\n        {\n          title: 'Vacation',\n          details: 'Trails and hikes, going camping! Don\\'t forget to bring bear spray!',\n          date: getCurrentDay(22),\n          bgcolor: 'purple',\n          icon: 'fas fa-plane',\n          days: 5\n        }\n      ]\n    }\n  },\n  watch: {\n    splitterModel (val) {\n      const rect = this.$refs.calendar.$el.getBoundingClientRect()\n      this.miniMode = rect.width < 500\n    }\n  },\n  methods: {\n    isCssColor (color) {\n      return !!color && !!color.match(/^(#|(rgb|hsl)a?\\()/)\n    },\n\n    badgeClasses (event, type) {\n      const cssColor = this.isCssColor(event.bgcolor)\n      const isHeader = type === 'header'\n      return {\n        [`text-white bg-${event.bgcolor}`]: !cssColor,\n        'full-width': !isHeader && (!event.side || event.side === 'full'),\n        'left-side': !isHeader && event.side === 'left',\n        'right-side': !isHeader && event.side === 'right'\n      }\n    },\n\n    badgeStyles (event, type, timeStartPos, timeDurationHeight) {\n      const s = {}\n      if (this.isCssColor(event.bgcolor)) {\n        s['background-color'] = event.bgcolor\n        s.color = luminosity(event.bgcolor) > 0.5 ? 'black' : 'white'\n      }\n      if (timeStartPos) {\n        s.top = timeStartPos(event.time) + 'px'\n      }\n      if (timeDurationHeight) {\n        s.height = timeDurationHeight(event.duration) + 'px'\n      }\n      s['align-items'] = 'flex-start'\n      return s\n    },\n\n    getEvents (dt) {\n      const currentDate = QCalendar.parseTimestamp(dt)\n      const events = []\n      for (let i = 0; i < this.events.length; ++i) {\n        let added = false\n        if (this.events[i].date === dt) {\n          if (this.events[i].time) {\n            if (events.length > 0) {\n              // check for overlapping times\n              const startTime = QCalendar.parseTimestamp(this.events[i].date + ' ' + this.events[i].time)\n              const endTime = QCalendar.addToDate(startTime, { minute: this.events[i].duration })\n              for (let j = 0; j < events.length; ++j) {\n                const startTime2 = QCalendar.parseTimestamp(events[j].date + ' ' + events[j].time)\n                const endTime2 = QCalendar.addToDate(startTime2, { minute: events[j].duration })\n                if (QCalendar.isBetweenDates(startTime, startTime2, endTime2) || QCalendar.isBetweenDates(endTime, startTime2, endTime2)) {\n                  events[j].side = 'left'\n                  this.events[i].side = 'right'\n                  events.push(this.events[i])\n                  added = true\n                  break\n                }\n              }\n            }\n          }\n          if (!added) {\n            this.events[i].side = void 0\n            events.push(this.events[i])\n          }\n        } else if (this.events[i].days) {\n          // check for overlapping dates\n          const startDate = QCalendar.parseTimestamp(this.events[i].date)\n          const endDate = QCalendar.addToDate(startDate, { day: this.events[i].days })\n          if (QCalendar.isBetweenDates(currentDate, startDate, endDate)) {\n            events.push(this.events[i])\n            added = true\n          }\n        }\n      }\n      return events\n    }\n  }\n}\n<\/script>\n"}}]);