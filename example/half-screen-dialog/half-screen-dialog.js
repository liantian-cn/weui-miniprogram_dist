var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [35],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Chalf-screen-dialog%5Chalf-screen-dialog!./src/example/half-screen-dialog/half-screen-dialog.js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Chalf-screen-dialog%5Chalf-screen-dialog!./src/example/half-screen-dialog/half-screen-dialog.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./half-screen-dialog.js */ "./src/example/half-screen-dialog/half-screen-dialog.js")

/***/ }),

/***/ "./src/example/half-screen-dialog/half-screen-dialog.js":
/*!**************************************************************!*\
  !*** ./src/example/half-screen-dialog/half-screen-dialog.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    typeF: false,
    typeS: false,
    typeT: false,
    buttons: [{
      type: 'default',
      className: '',
      text: '辅助操作',
      value: 0
    }, {
      type: 'primary',
      className: '',
      text: '主操作',
      value: 1
    }]
  },
  openTypeF: function openTypeF() {
    this.setData({
      typeF: true
    });
  },
  openTypeS: function openTypeS() {
    this.setData({
      typeS: true
    });
  },
  openTypeT: function openTypeT() {
    this.setData({
      typeT: true
    });
  },
  buttontap: function buttontap(e) {
    console.log(e.detail);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Chalf-screen-dialog%5Chalf-screen-dialog!./src/example/half-screen-dialog/half-screen-dialog.js",0,61,58]]
},
]);

// # sourceMappingURL=half-screen-dialog.js.map