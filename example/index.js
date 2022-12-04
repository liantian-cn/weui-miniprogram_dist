var globalThis = this, self = this;
module.exports =
require("../_commons/0.js")([
require("../_commons/61.js"),
require("../_commons/58.js"),
{
"ids": [37],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cindex!./src/example/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cindex!./src/example/index.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */ "./src/example/index.js")

/***/ }),

/***/ "./src/example/index.js":
/*!******************************!*\
  !*** ./src/example/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    list: [{
      id: 'form',
      name: '表单',
      open: false,
      pages: ['cell', 'slideview', 'form', 'uploader']
    }, {
      id: 'widget',
      name: '基础组件',
      open: false,
      pages: ['article', 'icons', 'badge', 'flex', 'footer', 'gallery', 'grid', 'loadmore', 'loading', 'panel', 'preview']
    }, {
      id: 'feedback',
      name: '操作反馈',
      open: false,
      pages: ['dialog', 'msg', 'half-screen-dialog', 'actionsheet', 'toptips']
    }, {
      id: 'nav',
      name: '导航相关',
      open: false,
      pages: ['navigation', 'tabbar']
    }, {
      id: 'search',
      name: '搜索相关',
      open: false,
      pages: ['searchbar']
    }]
  },
  kindToggle: function kindToggle(e) {
    var id = e.currentTarget.id,
        list = this.data.list;

    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }

    this.setData({
      list: list
    });
  },
  themeToggle: function themeToggle() {
    var App = getApp();

    if (App.themeChanged) {
      if (App.globalData.theme === 'light') {
        App.themeChanged('dark');
      } else {
        App.themeChanged('light');
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cindex!./src/example/index.js",0,61,58]]
},
]);

// # sourceMappingURL=index.js.map