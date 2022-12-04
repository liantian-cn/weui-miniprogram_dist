var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
require("../../_commons/60.js"),
require("../../_commons/59.js"),
{
"ids": [27],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ccell%5Ccell!./src/example/cell/cell.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ccell%5Ccell!./src/example/cell/cell.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cell.js */ "./src/example/cell/cell.js")

/***/ }),

/***/ "./src/example/cell/cell.js":
/*!**********************************!*\
  !*** ./src/example/cell/cell.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/base64 */ "./src/example/images/base64.js");
/* harmony import */ var _images_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");


Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_1__["default"])({
  onLoad: function onLoad() {
    this.setData({
      icon: _images_base64__WEBPACK_IMPORTED_MODULE_0___default.a.icon20,
      slideButtons: [{
        text: '普通',
        src: __webpack_require__(/*! ./icon_love.svg */ "./src/example/cell/icon_love.svg").default // icon的路径

      }, {
        text: '普通',
        extClass: 'test',
        src: __webpack_require__(/*! ./icon_star.svg */ "./src/example/cell/icon_star.svg").default // icon的路径

      }, {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: __webpack_require__(/*! ./icon_del.svg */ "./src/example/cell/icon_del.svg").default // icon的路径

      }]
    });
  },
  slideButtonTap: function slideButtonTap(e) {
    console.log('slide button tap', e.detail);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ccell%5Ccell!./src/example/cell/cell.js",0,61,58,60,59]]
},
]);

// # sourceMappingURL=cell.js.map