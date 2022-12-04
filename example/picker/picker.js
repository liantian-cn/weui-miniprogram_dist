var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
{
"ids": [48],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cpicker%5Cpicker!./src/example/picker/picker.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cpicker%5Cpicker!./src/example/picker/picker.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./picker.js */ "./src/example/picker/picker.js")

/***/ }),

/***/ "./src/example/picker/picker.js":
/*!**************************************!*\
  !*** ./src/example/picker/picker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Page({
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange: function bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value
    });
  },
  bindDateChange: function bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },
  bindTimeChange: function bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cpicker%5Cpicker!./src/example/picker/picker.js",0,61]]
},
]);

// # sourceMappingURL=picker.js.map