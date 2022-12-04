var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [51],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Csearchbar%5Csearchbar!./src/example/searchbar/searchbar.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Csearchbar%5Csearchbar!./src/example/searchbar/searchbar.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./searchbar.js */ "./src/example/searchbar/searchbar.js")

/***/ }),

/***/ "./src/example/searchbar/searchbar.js":
/*!********************************************!*\
  !*** ./src/example/searchbar/searchbar.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    inputShowed: false,
    inputVal: "",
    i: 0
  },
  onLoad: function onLoad() {
    this.setData({
      search: this.search.bind(this)
    });
  },
  search: function search(value) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (_this.data.i % 2 === 0) {
        setTimeout(function () {
          resolve([{
            text: '搜索结果',
            value: 1
          }, {
            text: '搜索结果2',
            value: 2
          }]);
        }, 200);
      } else {
        setTimeout(function () {
          resolve([]);
        }, 200);
      }

      _this.setData({
        i: _this.data.i + 1
      });
    });
  },
  selectResult: function selectResult(e) {
    console.log('select result', e.detail);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Csearchbar%5Csearchbar!./src/example/searchbar/searchbar.js",0,61,58]]
},
]);

// # sourceMappingURL=searchbar.js.map