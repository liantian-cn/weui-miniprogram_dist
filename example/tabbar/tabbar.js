var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [54],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ctabbar%5Ctabbar!./src/example/tabbar/tabbar.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ctabbar%5Ctabbar!./src/example/tabbar/tabbar.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./tabbar.js */ "./src/example/tabbar/tabbar.js")

/***/ }),

/***/ "./src/example/tabbar/tabbar.js":
/*!**************************************!*\
  !*** ./src/example/tabbar/tabbar.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

var app = getApp();
Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    list: [{
      text: '微信',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar,
      badge: '8',
      ariaLabel: '8个新通知'
    }, {
      text: '通讯录',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar
    }, {
      text: '发现',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar,
      dot: true,
      ariaLabel: '未读'
    }, {
      text: '我',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar
    }]
  },
  tabChange: function tabChange(e) {
    console.log('tab change', e);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Ctabbar%5Ctabbar!./src/example/tabbar/tabbar.js",0,61,58]]
},
]);

// # sourceMappingURL=tabbar.js.map