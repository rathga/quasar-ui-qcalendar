(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[278],{"3ae2":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row justify-center full-width" style="max-width: 800px; width: 100%;">\n    <div class="row justify-center full-width q-pa-md">\n      <div class="q-gutter-sm column justify-center">\n        <div class="row justify-evenly q-gutter-sm" style="width: 400px;">\n          <span>Note: setting any height to 0 will make it \'auto\'</span>\n        </div>\n        <div class="row justify-evenly q-gutter-sm" style="width: 400px;">\n          <span>Resource Width</span> <q-slider v-model="resourceWidth" label label-always :min="60" :max="200"/>\n        </div>\n        <div class="row justify-evenly q-gutter-sm" style="width: 400px;">\n          <span>Resource Height</span> <q-slider v-model="resourceHeight" label label-always :min="0" :max="200"/>\n        </div>\n      </div>\n    </div>\n    <div class="row justify-center full-width">\n      <q-calendar\n        v-model="selectedDate"\n        view="day-resource"\n        :resources="resources"\n        :resource-height="resourceHeight"\n        :resource-width="resourceWidth"\n        locale="en-us"\n        sticky\n        style="height: 200px; max-width: 800px; width: 100%;"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      resourceWidth: 100,\n      resourceHeight: 70,\n      selectedDate: \'2019-04-01\',\n      resources: [\n        { label: \'John\' },\n        { label: \'Mary\' },\n        { label: \'Susan\' },\n        { label: \'Olivia\' },\n        { label: \'Board Room\' },\n        { label: \'Room-1\' },\n        { label: \'Room-2\' }\n      ]\n    }\n  }\n}\n<\/script>\n'}}]);