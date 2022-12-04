var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [18],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Csearchbar%5Csearchbar!./src/components/searchbar/searchbar.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Csearchbar%5Csearchbar!./src/components/searchbar/searchbar.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./searchbar.ts */ "./src/components/searchbar/searchbar.ts")

/***/ }),

/***/ "./src/components/searchbar/searchbar.ts":
/*!***********************************************!*\
  !*** ./src/components/searchbar/searchbar.ts ***!
  \***********************************************/
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
    focus: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '搜索'
    },
    value: {
      type: String,
      value: ''
    },
    search: {
      // 返回Promise的函数
      type: null,
      // type: Function 等价 null
      value: null
    },
    throttle: {
      // 500ms内只会调用一次search函数
      type: Number,
      value: 500
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    cancel: {
      type: Boolean,
      value: true
    }
  },
  data: {
    result: [] // 搜索结果

  },
  // @ts-ignore
  lastSearch: Date.now(),
  lifetimes: {
    // @ts-ignore
    attached: function attached() {
      // @ts-ignore
      if (this.data.focus) {
        this.setData({
          searchState: true
        });
      }
    }
  },
  methods: {
    clearInput: function clearInput() {
      // @ts-ignore
      this.setData({
        value: '',
        focus: false,
        result: []
      }); // @ts-ignore

      this.triggerEvent('clear');
    },
    // @ts-ignore
    inputFocus: function inputFocus(e) {
      // this.setData({
      //     searchState: true
      // })
      // @ts-ignore
      this.triggerEvent('focus', e.detail);
    },
    // @ts-ignore
    inputBlur: function inputBlur(e) {
      this.setData({
        focus: false
      });
      this.triggerEvent('blur', e.detail);
    },
    showInput: function showInput() {
      this.setData({
        focus: true,
        searchState: true
      });
    },
    hideInput: function hideInput() {
      this.setData({
        searchState: false
      });
      this.triggerEvent('cancel');
    },
    // @ts-ignore
    inputChange: function inputChange(e) {
      var _this = this;

      this.setData({
        value: e.detail.value
      });
      this.triggerEvent('input', e.detail);

      if (Date.now() - this.lastSearch < this.data.throttle) {
        return;
      }

      if (typeof this.data.search !== 'function') {
        return;
      }

      this.lastSearch = Date.now();
      this.timerId = setTimeout(function () {
        _this.data.search(_this.data.value).then(function (json) {
          _this.setData({
            result: json
          });
        }).catch(function (err) {
          console.error('search error', err);
        });
      }, this.data.throttle);
    },
    // @ts-ignore
    selectResult: function selectResult(e) {
      var index = e.currentTarget.dataset.index;
      var item = this.data.result[index];
      this.triggerEvent('selectresult', {
        index: index,
        item: item
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Csearchbar%5Csearchbar!./src/components/searchbar/searchbar.ts",0]]
},
]);

// # sourceMappingURL=searchbar.js.map