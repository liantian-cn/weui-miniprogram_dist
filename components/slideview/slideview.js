var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [19],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cslideview%5Cslideview!./src/components/slideview/slideview.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cslideview%5Cslideview!./src/components/slideview/slideview.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./slideview.ts */ "./src/components/slideview/slideview.ts")

/***/ }),

/***/ "./src/components/slideview/slideview.ts":
/*!***********************************************!*\
  !*** ./src/components/slideview/slideview.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    buttons: {
      type: Array,
      value: [],
      // type, data, text, src, extClass
      observer: function observer() {
        this.addClassNameForButton();
      }
    },
    disable: {
      type: Boolean,
      value: false
    },
    icon: {
      // 是否是icon
      type: Boolean,
      value: false
    },
    show: {
      type: Boolean,
      value: false
    },
    duration: {
      type: Number,
      value: 350 // 动画市场，单位ms

    },
    throttle: {
      type: Number,
      value: 40
    },
    rebounce: {
      type: Number,
      value: 0 // 回弹距离

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    size: null
  },

  /**
   * 组件的方法列表
   */
  ready: function ready() {
    // @ts-ignore
    this.updateRight();
    this.addClassNameForButton();
  },
  methods: {
    updateRight: function updateRight() {
      var _this = this;

      // 获取右侧滑动显示区域的宽度
      var data = this.data;
      var query = wx.createSelectorQuery().in(this);
      query.select('.left').boundingClientRect(function (res) {
        var btnQuery = wx.createSelectorQuery().in(_this);
        btnQuery.selectAll('.btn').boundingClientRect(function (rects) {
          _this.setData({
            size: {
              buttons: rects,
              button: res,
              show: data.show,
              disable: data.disable,
              throttle: data.throttle,
              rebounce: data.rebounce
            }
          });
        }).exec();
      }).exec();
    },
    addClassNameForButton: function addClassNameForButton() {
      // @ts-ignore
      var _this$data = this.data,
          buttons = _this$data.buttons,
          icon = _this$data.icon;
      buttons.forEach(function (btn) {
        if (icon) {
          btn.className = '';
        } else if (btn.type === 'warn') {
          btn.className = 'weui-slideview__btn-group_warn';
        } else {
          btn.className = 'weui-slideview__btn-group_default';
        }
      });
      this.setData({
        buttons: buttons
      });
    },
    buttonTapByWxs: function buttonTapByWxs(data) {
      this.triggerEvent('buttontap', data, {});
    },
    hide: function hide() {
      this.triggerEvent('hide', {}, {});
    },
    show: function show() {
      this.triggerEvent('show', {}, {});
    },
    transitionEnd: function transitionEnd() {}
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cslideview%5Cslideview!./src/components/slideview/slideview.ts",0]]
},
]);

// # sourceMappingURL=slideview.js.map