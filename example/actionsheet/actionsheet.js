var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [23],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cactionsheet%5Cactionsheet!./src/example/actionsheet/actionsheet.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cactionsheet%5Cactionsheet!./src/example/actionsheet/actionsheet.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./actionsheet.js */ "./src/example/actionsheet/actionsheet.js")

/***/ }),

/***/ "./src/example/actionsheet/actionsheet.js":
/*!************************************************!*\
  !*** ./src/example/actionsheet/actionsheet.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  open: function open() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function success(res) {
        if (!res.cancel) {
          console.log(res.tapIndex);
        }
      }
    });
  },
  data: {
    showDialog: false,
    groups: [{
      text: '示例菜单',
      value: 1
    }, {
      text: '示例菜单',
      value: 2
    }, {
      text: '负向菜单',
      type: 'warn',
      value: 3
    }]
  },
  openDialog: function openDialog() {
    this.setData({
      showDialog: true
    });
  },
  closeDialog: function closeDialog() {
    this.setData({
      showDialog: false
    });
  },
  btnClick: function btnClick(e) {
    console.log(e);
    this.closeDialog();
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cactionsheet%5Cactionsheet!./src/example/actionsheet/actionsheet.js",0,61,58]]
},
]);

// # sourceMappingURL=actionsheet.js.map