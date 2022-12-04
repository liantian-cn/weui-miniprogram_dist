var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [2],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cactionsheet%5Cactionsheet!./src/components/actionsheet/actionsheet.ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cactionsheet%5Cactionsheet!./src/components/actionsheet/actionsheet.ts ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./actionsheet.ts */ "./src/components/actionsheet/actionsheet.ts")

/***/ }),

/***/ "./src/components/actionsheet/actionsheet.ts":
/*!***************************************************!*\
  !*** ./src/components/actionsheet/actionsheet.ts ***!
  \***************************************************/
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
      // 标题
      type: String,
      value: ''
    },
    showCancel: {
      // 是否显示取消按钮
      type: Boolean,
      value: true
    },
    cancelText: {
      // 取消按钮文案
      type: String,
      value: '取消'
    },
    maskClass: {
      // 遮罩层class
      type: String,
      value: ''
    },
    extClass: {
      // 弹出窗 class
      type: String,
      value: ''
    },
    maskClosable: {
      // 点击遮罩 关闭 actionsheet
      type: Boolean,
      value: true
    },
    mask: {
      // 是否需要 遮罩层
      type: Boolean,
      value: true
    },
    show: {
      // 是否开启 actionsheet
      type: Boolean,
      value: false,
      observer: '_showChange'
    },
    actions: {
      // actions 列表
      type: Array,
      value: [],
      // {text, extClass}
      observer: '_groupChange'
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
    _groupChange: function _groupChange(e) {
      // 支持 一维数组 写法
      if (e.length > 0 && typeof e[0] !== 'string' && !(e[0] instanceof Array)) {
        this.setData({
          actions: [this.data.actions]
        });
      }
    },
    buttonTap: function buttonTap(e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          value = _e$currentTarget$data.value,
          groupindex = _e$currentTarget$data.groupindex,
          index = _e$currentTarget$data.index;
      this.triggerEvent('actiontap', {
        value: value,
        groupindex: groupindex,
        index: index
      });
    },
    closeActionSheet: function closeActionSheet(e) {
      var type = e.currentTarget.dataset.type;

      if (this.data.maskClosable || type) {
        // 点击 action 里面的 取消
        this.setData({
          show: false
        }); // 关闭回调事件

        this.triggerEvent('close');
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cactionsheet%5Cactionsheet!./src/components/actionsheet/actionsheet.ts",0]]
},
]);

// # sourceMappingURL=actionsheet.js.map