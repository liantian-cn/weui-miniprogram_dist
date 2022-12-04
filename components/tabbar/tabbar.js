var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [20],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ctabbar%5Ctabbar!./src/components/tabbar/tabbar.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ctabbar%5Ctabbar!./src/components/tabbar/tabbar.ts ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./tabbar.ts */ "./src/components/tabbar/tabbar.ts")

/***/ }),

/***/ "./src/components/tabbar/tabbar.ts":
/*!*****************************************!*\
  !*** ./src/components/tabbar/tabbar.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true,
    writeIdToDOM: true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    },
    reactive: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    tabChange: function tabChange(e) {
      var index = e.currentTarget.dataset.index;

      if (index === this.data.current) {
        return;
      }

      this.setData({
        current: index
      });
      this.triggerEvent('change', {
        index: index,
        item: this.data.list[index]
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ctabbar%5Ctabbar!./src/components/tabbar/tabbar.ts",0]]
},
]);

// # sourceMappingURL=tabbar.js.map