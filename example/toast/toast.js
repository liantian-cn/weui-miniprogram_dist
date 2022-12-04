var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
{
"ids": [55],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ctoast%5Ctoast!./src/example/toast/toast.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ctoast%5Ctoast!./src/example/toast/toast.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./toast.js */ "./src/example/toast/toast.js")

/***/ }),

/***/ "./src/example/toast/toast.js":
/*!************************************!*\
  !*** ./src/example/toast/toast.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Page({
  openToast: function openToast() {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 3000
    });
  },
  openLoading: function openLoading() {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ctoast%5Ctoast!./src/example/toast/toast.js",0,61]]
},
]);

// # sourceMappingURL=toast.js.map