var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [11],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cgallery%5Cgallery!./src/components/gallery/gallery.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cgallery%5Cgallery!./src/components/gallery/gallery.ts ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./gallery.ts */ "./src/components/gallery/gallery.ts")

/***/ }),

/***/ "./src/components/gallery/gallery.ts":
/*!*******************************************!*\
  !*** ./src/components/gallery/gallery.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    imgUrls: {
      type: Array,
      value: [],
      observer: function observer(newVal) {
        this.setData({
          currentImgs: newVal
        });
      }
    },
    showDelete: {
      // 是否显示delete按钮
      type: Boolean,
      value: true
    },
    show: {
      type: Boolean,
      value: true,
      observer: '_showChange'
    },
    current: {
      type: Number,
      value: 0
    },
    hideOnClick: {
      type: Boolean,
      value: true
    },
    extClass: {
      type: String,
      value: ''
    }
  },
  data: {
    wrapperShow: false,
    innerShow: false,
    currentImgs: []
  },
  ready: function ready() {
    this._showChange(this.data.show);

    var data = this.data;
    this.setData({
      currentImgs: data.imgUrls
    });
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
    change: function change(e) {
      this.setData({
        current: e.detail.current
      });
      this.triggerEvent('change', {
        current: e.detail.current
      }, {});
    },
    deleteImg: function deleteImg() {
      var data = this.data;
      var imgs = data.currentImgs;
      var url = imgs.splice(data.current, 1);
      this.triggerEvent('delete', {
        url: url[0],
        index: data.current
      }, {});

      if (imgs.length === 0) {
        // @ts-ignore
        this.hideGallery();
        return;
      }

      this.setData({
        current: 0,
        currentImgs: imgs
      });
    },
    hideGallery: function hideGallery() {
      var data = this.data;

      if (data.hideOnClick) {
        this.setData({
          show: false
        });
        this.triggerEvent('hide', {}, {});
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cgallery%5Cgallery!./src/components/gallery/gallery.ts",0]]
},
]);

// # sourceMappingURL=gallery.js.map