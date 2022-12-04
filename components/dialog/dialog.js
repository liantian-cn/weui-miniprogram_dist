var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [8],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cdialog%5Cdialog!./src/components/dialog/dialog.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cdialog%5Cdialog!./src/components/dialog/dialog.ts ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dialog.ts */ "./src/components/dialog/dialog.ts")

/***/ }),

/***/ "./src/components/dialog/dialog.ts":
/*!*****************************************!*\
  !*** ./src/components/dialog/dialog.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    multipleSlots: true,
    // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  properties: {
    title: {
      // 弹窗标题，也可以通过 slot 自定义
      type: String,
      value: ''
    },
    extClass: {
      // 弹窗 class
      type: String,
      value: ''
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mask: {
      // 是否需要 遮罩层
      type: Boolean,
      value: true
    },
    show: {
      // 是否开启弹窗
      type: Boolean,
      value: false,
      observer: '_showChange'
    },
    buttons: {
      type: Array,
      value: [] // {text, extClass}

    }
  },
  data: {
    wrapperShow: false,
    innerShow: false
  },
  ready: function ready() {
    var buttons = this.data.buttons;
    var len = buttons.length;
    buttons.forEach(function (btn, index) {
      if (len === 1) {
        btn.className = 'weui-dialog__btn_primary';
      } else if (index === 0) {
        btn.className = 'weui-dialog__btn_default';
      } else {
        btn.className = 'weui-dialog__btn_primary';
      }
    });
    this.setData({
      buttons: buttons
    });

    this._showChange(this.data.show);
  },
  methods: {
    _showChange: function _showChange(show) {
      var _this = this;

      if (show) {
        this.setData({
          wrapperShow: true,
          innerShow: true
        });
      } else {
        this.setData({
          innerShow: false
        });
        setTimeout(function () {
          _this.setData({
            wrapperShow: false
          });
        }, 300);
      }
    },
    buttonTap: function buttonTap(e) {
      var index = e.currentTarget.dataset.index;
      this.triggerEvent('buttontap', {
        index: index,
        item: this.data.buttons[index]
      }, {});
    },
    close: function close() {
      var data = this.data;
      if (!data.maskClosable) return;
      this.setData({
        show: false
      });
      this.triggerEvent('close', {}, {});
    },
    stopEvent: function stopEvent() {}
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cdialog%5Cdialog!./src/components/dialog/dialog.ts",0]]
},
]);

// # sourceMappingURL=dialog.js.map