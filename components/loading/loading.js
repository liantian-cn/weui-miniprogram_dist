var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [15],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cloading%5Cloading!./src/components/loading/loading.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cloading%5Cloading!./src/components/loading/loading.ts ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./loading.ts */ "./src/components/loading/loading.ts")

/***/ }),

/***/ "./src/components/loading/loading.ts":
/*!*******************************************!*\
  !*** ./src/components/loading/loading.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    show: {
      // 默认显示出来
      type: Boolean,
      value: true
    },
    animated: {
      type: Boolean,
      value: false
    },
    duration: {
      // 过渡动画时间
      type: Number,
      value: 350
    },
    type: {
      type: String,
      value: 'dot-gray' // 取值dot-white、dot-gray、circle

    },
    tips: {
      // type是circle的时候才有效
      type: String,
      value: '加载中'
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cloading%5Cloading!./src/components/loading/loading.ts",0]]
},
]);

// # sourceMappingURL=loading.js.map