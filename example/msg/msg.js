var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [40],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cmsg%5Cmsg!./src/example/msg/msg.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cmsg%5Cmsg!./src/example/msg/msg.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./msg.js */ "./src/example/msg/msg.js")

/***/ }),

/***/ "./src/example/msg/msg.js":
/*!********************************!*\
  !*** ./src/example/msg/msg.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  openSuccess: function openSuccess() {
    wx.navigateTo({
      url: 'msg_success'
    });
  },
  openText: function openText() {
    wx.navigateTo({
      url: 'msg_text'
    });
  },
  openTextPrimary: function openTextPrimary() {
    wx.navigateTo({
      url: 'msg_text_primary'
    });
  },
  openFail: function openFail() {
    wx.navigateTo({
      url: 'msg_fail'
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cmsg%5Cmsg!./src/example/msg/msg.js",0,61,58]]
},
]);

// # sourceMappingURL=msg.js.map