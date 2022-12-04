var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [13],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Chalf-screen-dialog%5Chalf-screen-dialog!./src/components/half-screen-dialog/half-screen-dialog.ts":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Chalf-screen-dialog%5Chalf-screen-dialog!./src/components/half-screen-dialog/half-screen-dialog.ts ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./half-screen-dialog.ts */ "./src/components/half-screen-dialog/half-screen-dialog.ts")

/***/ }),

/***/ "./src/components/half-screen-dialog/half-screen-dialog.ts":
/*!*****************************************************************!*\
  !*** ./src/components/half-screen-dialog/half-screen-dialog.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    multipleSlots: true,
    // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true
  },
  properties: {
    closabled: {
      // 是否具有关闭标签
      type: Boolean,
      value: true
    },
    title: {
      // 标题，也可以通过 slot 自定义
      type: String,
      value: ''
    },
    subTitle: {
      // 副标题，也可以通过 slot 自定义
      type: String,
      value: ''
    },
    extClass: {
      // 弹窗 class
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    tips: {
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
  lifetimes: {
    ready: function ready() {
      this._showChange(this.data.show);
    }
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
    close: function close(e) {
      var type = e.currentTarget.dataset.type;

      if (this.data.maskClosable || type === 'close') {
        this.setData({
          show: false
        }); // 关闭弹窗回调事件

        this.triggerEvent('close');
      }
    },
    buttonTap: function buttonTap(e) {
      var index = e.currentTarget.dataset.index;
      this.triggerEvent('buttontap', {
        index: index,
        item: this.data.buttons[index]
      }, {});
    },
    onMaskMouseMove: function onMaskMouseMove() {// do nothing
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Chalf-screen-dialog%5Chalf-screen-dialog!./src/components/half-screen-dialog/half-screen-dialog.ts",0]]
},
]);

// # sourceMappingURL=half-screen-dialog.js.map