var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [21],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ctoptips%5Ctoptips!./src/components/toptips/toptips.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ctoptips%5Ctoptips!./src/components/toptips/toptips.ts ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./toptips.ts */ "./src/components/toptips/toptips.ts")

/***/ }),

/***/ "./src/components/toptips/toptips.ts":
/*!*******************************************!*\
  !*** ./src/components/toptips/toptips.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var typeClassMap = {
  warn: 'weui-toptips_warn',
  info: 'weui-toptips_info',
  success: 'weui-toptips_success',
  error: 'weui-toptips_error'
};
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    type: {
      type: String,
      value: 'error',
      observer: '_typeChange'
    },
    show: {
      type: Boolean,
      value: false,
      observer: '_showChange'
    },
    msg: {
      type: String,
      value: ''
    },
    delay: {
      type: Number,
      value: 2000
    },
    extClass: {
      type: String,
      value: ''
    }
  },
  data: {
    wrapperShow: false,
    innerShow: false
  },
  lifetimes: {
    ready: function ready() {
      this._showChange(this.data.show);
    },
    attached: function attached() {
      this._typeChange(this.data.type);
    }
  },
  methods: {
    _typeChange: function _typeChange(type) {
      this.setData({
        className: typeClassMap[type] || ''
      });
    },
    _showChange: function _showChange(show) {
      if (show) {
        this._showToptips();
      } else {
        this._hideToptips();
      }
    },
    _showToptips: function _showToptips() {
      var _this = this;

      if (this.data.delay) {
        setTimeout(function () {
          _this._hideToptips();

          _this.setData({
            show: false
          }, function () {
            // tooltips 隐藏了，触发 hide 事件
            _this.triggerEvent('hide', {}, {});
          });
        }, this.data.delay);
      }

      this.setData({
        wrapperShow: true,
        innerShow: true
      });
    },
    _hideToptips: function _hideToptips() {
      var _this2 = this;

      if (!this.data.innerShow) return;
      this.setData({
        innerShow: false
      });
      setTimeout(function () {
        _this2.setData({
          wrapperShow: false
        });
      }, 300);
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ctoptips%5Ctoptips!./src/components/toptips/toptips.ts",0]]
},
]);

// # sourceMappingURL=toptips.js.map