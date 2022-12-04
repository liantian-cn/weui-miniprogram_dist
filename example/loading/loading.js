var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [38],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cloading%5Cloading!./src/example/loading/loading.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cloading%5Cloading!./src/example/loading/loading.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./loading.js */ "./src/example/loading/loading.js")

/***/ }),

/***/ "./src/example/loading/loading.js":
/*!****************************************!*\
  !*** ./src/example/loading/loading.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    tips: '请稍后',
    show: true,
    animated: true
  },
  onShow: function onShow() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.setData({
        show: !_this.data.show
      });
    }, 2000);
  },
  close: function close() {
    this.setData({
      animated: !this.data.animated
    });
  },
  onUnload: function onUnload() {
    clearInterval(this.timer);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cloading%5Cloading!./src/example/loading/loading.js",0,61,58]]
},
]);

// # sourceMappingURL=loading.js.map