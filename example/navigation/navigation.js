var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [46],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cnavigation%5Cnavigation!./src/example/navigation/navigation.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cnavigation%5Cnavigation!./src/example/navigation/navigation.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./navigation.js */ "./src/example/navigation/navigation.js")

/***/ }),

/***/ "./src/example/navigation/navigation.js":
/*!**********************************************!*\
  !*** ./src/example/navigation/navigation.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    loading: false,
    show: true,
    animated: false
  },
  toggleLoading: function toggleLoading() {
    this.setData({
      loading: !this.data.loading
    });
  },
  changeColor: function changeColor() {
    this.setData({
      color: '#07C160'
    });
  },
  changeBgColor: function changeBgColor() {
    this.setData({
      background: '#adadad'
    });
  },
  toggleShow: function toggleShow() {
    this.setData({
      show: !this.data.show
    });
  },
  toggleAnimated: function toggleAnimated() {
    this.setData({
      animated: !this.data.animated,
      show: !this.data.show
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cnavigation%5Cnavigation!./src/example/navigation/navigation.js",0,61,58]]
},
]);

// # sourceMappingURL=navigation.js.map