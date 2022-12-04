var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
{
"ids": [45],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cnavbar%5Cnavbar!./src/example/navbar/navbar.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cnavbar%5Cnavbar!./src/example/navbar/navbar.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./navbar.js */ "./src/example/navbar/navbar.js")

/***/ }),

/***/ "./src/example/navbar/navbar.js":
/*!**************************************!*\
  !*** ./src/example/navbar/navbar.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function onLoad() {
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function tabClick(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cnavbar%5Cnavbar!./src/example/navbar/navbar.js",0,61]]
},
]);

// # sourceMappingURL=navbar.js.map