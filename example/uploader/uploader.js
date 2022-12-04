var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [57],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cuploader%5Cuploader!./src/example/uploader/uploader.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cuploader%5Cuploader!./src/example/uploader/uploader.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./uploader.js */ "./src/example/uploader/uploader.js")

/***/ }),

/***/ "./src/example/uploader/uploader.js":
/*!******************************************!*\
  !*** ./src/example/uploader/uploader.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    files: [{
      url: 'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0'
    }]
  },
  onLoad: function onLoad() {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    });
  },
  chooseImage: function chooseImage(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      // 可以指定来源是相册还是相机，默认二者都有
      success: function success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    });
  },
  previewImage: function previewImage(e) {
    wx.previewImage({
      current: e.currentTarget.id,
      // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表

    });
  },
  selectFile: function selectFile(files) {
    console.log('files', files); // 返回false可以阻止某次文件上传
  },
  uplaodFile: function uplaodFile(files) {
    console.log('upload files', files); // 文件上传的函数，返回一个promise

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject('some error');
      }, 1000);
    });
  },
  uploadError: function uploadError(e) {
    console.log('upload error', e.detail);
  },
  uploadSuccess: function uploadSuccess(e) {
    console.log('upload success', e.detail);
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cuploader%5Cuploader!./src/example/uploader/uploader.js",0,61,58]]
},
]);

// # sourceMappingURL=uploader.js.map