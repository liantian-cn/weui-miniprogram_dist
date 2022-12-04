var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [4],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccell%5Ccell!./src/components/cell/cell.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccell%5Ccell!./src/components/cell/cell.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cell.ts */ "./src/components/cell/cell.ts")

/***/ }),

/***/ "./src/components/cell/cell.ts":
/*!*************************************!*\
  !*** ./src/components/cell/cell.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    hover: {
      type: Boolean,
      value: false
    },
    link: {
      type: Boolean,
      value: false
    },
    extClass: {
      type: String,
      value: ''
    },
    iconClass: {
      type: String,
      value: ''
    },
    bodyClass: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    title: {
      // 和icon二选一，都是放在cell_hd里面
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    showError: {
      type: Boolean,
      value: false
    },
    prop: {
      // 校验的属性，给父元素form使用
      type: String,
      value: ''
    },
    url: {
      // 在link为true的时候有效，表示navigator的跳转url
      type: String,
      value: ''
    },
    footerClass: {
      type: String,
      value: ''
    },
    footer: {
      type: String,
      value: ''
    },
    inline: {
      // 左右布局样式还是上下布局
      type: Boolean,
      value: true
    },
    hasHeader: {
      type: Boolean,
      value: true
    },
    hasFooter: {
      type: Boolean,
      value: true
    },
    hasBody: {
      type: Boolean,
      value: true
    },
    extHoverClass: {
      // 提供给需要定制 hover-class 的场景，要求 hover 为 false
      type: String,
      value: ''
    },
    ariaRole: {
      type: String,
      value: ''
    }
  },
  relations: {
    '../form/form': {
      type: 'ancestor'
    },
    '../cells/cells': {
      type: 'ancestor'
    }
  },
  data: {
    inForm: false
  },
  methods: {
    setError: function setError(error) {
      this.setData({
        error: error || false
      });
    },
    setInForm: function setInForm() {
      this.setData({
        inForm: true
      });
    },
    setOuterClass: function setOuterClass(className) {
      this.setData({
        outerClass: className
      });
    },
    navigateTo: function navigateTo() {
      var _this = this;

      var data = this.data;

      if (data.url && data.link) {
        wx.navigateTo({
          url: data.url,
          success: function success(res) {
            _this.triggerEvent('navigatesuccess', res, {});
          },
          fail: function fail(_fail) {
            _this.triggerEvent('navigateerror', _fail, {});
          }
        });
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccell%5Ccell!./src/components/cell/cell.ts",0]]
},
]);

// # sourceMappingURL=cell.js.map