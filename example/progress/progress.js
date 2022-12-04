var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
{
"ids": [50],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cprogress%5Cprogress!./src/example/progress/progress.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cprogress%5Cprogress!./src/example/progress/progress.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./progress.js */ "./src/example/progress/progress.js")

/***/ }),

/***/ "./src/example/progress/progress.js":
/*!******************************************!*\
  !*** ./src/example/progress/progress.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _next() {
  var that = this;

  if (this.data.progress >= 100) {
    this.setData({
      disabled: false
    });
    return true;
  }

  this.setData({
    progress: ++this.data.progress
  });
  setTimeout(function () {
    _next.call(that);
  }, 20);
}

Page({
  data: {
    progress: 0,
    disabled: false
  },
  upload: function upload() {
    if (this.data.disabled) return;
    this.setData({
      progress: 0,
      disabled: true
    });

    _next.call(this);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cprogress%5Cprogress!./src/example/progress/progress.js",0,61]]
},
]);

// # sourceMappingURL=progress.js.map