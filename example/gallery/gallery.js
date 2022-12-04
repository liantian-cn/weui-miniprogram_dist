var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [33],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cgallery%5Cgallery!./src/example/gallery/gallery.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cgallery%5Cgallery!./src/example/gallery/gallery.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./gallery.js */ "./src/example/gallery/gallery.js")

/***/ }),

/***/ "./src/example/gallery/gallery.js":
/*!****************************************!*\
  !*** ./src/example/gallery/gallery.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    imgUrls: ['http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg', 'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg', 'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg'],
    show: true
  },
  openGallery: function openGallery() {
    this.setData({
      show: true
    });
  },
  change: function change(e) {
    console.log('current index has changed', e.detail);
  },
  delete: function _delete(e) {
    console.log('delete', e.detail);
  },
  hide: function hide() {
    console.log('component hide');
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cgallery%5Cgallery!./src/example/gallery/gallery.js",0,61,58]]
},
]);

// # sourceMappingURL=gallery.js.map