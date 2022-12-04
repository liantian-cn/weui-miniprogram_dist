var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [28],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cdialog%5Cdialog!./src/example/dialog/dialog.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cdialog%5Cdialog!./src/example/dialog/dialog.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dialog.js */ "./src/example/dialog/dialog.js")

/***/ }),

/***/ "./src/example/dialog/dialog.js":
/*!**************************************!*\
  !*** ./src/example/dialog/dialog.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    oneButton: [{
      text: '确定'
    }]
  },
  openConfirm: function openConfirm() {
    this.setData({
      dialogShow: true
    });
  },
  tapDialogButton: function tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    });
  },
  tapOneDialogButton: function tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cdialog%5Cdialog!./src/example/dialog/dialog.js",0,61,58]]
},
]);

// # sourceMappingURL=dialog.js.map