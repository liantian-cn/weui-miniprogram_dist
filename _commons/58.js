var globalThis = this, self = this;
module.exports = {
"ids": [58],
"modules":{

/***/ "./src/base/CustomPage.js":
/*!********************************!*\
  !*** ./src/base/CustomPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _behaviors_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behaviors/theme */ "./src/base/behaviors/theme.js");
/* harmony import */ var _behaviors_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_behaviors_theme__WEBPACK_IMPORTED_MODULE_0__);


var CustomPage = function CustomPage(options) {
  return Page(Object.assign({}, options, {
    behaviors: [_behaviors_theme__WEBPACK_IMPORTED_MODULE_0___default.a].concat(options.behaviors || []),
    onLoad: function onLoad(query) {
      var app = getApp();
      this.themeChanged(app.globalData.theme);
      app.watchThemeChange && app.watchThemeChange(this.themeChanged);
      options.onLoad && options.onLoad.call(this, query);
    },
    onUnload: function onUnload() {
      var app = getApp();
      app.unWatchThemeChange && app.unWatchThemeChange(this.themeChanged);
      options.onUnload && options.onUnload.call(this);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomPage);

/***/ }),

/***/ "./src/base/behaviors/theme.js":
/*!*************************************!*\
  !*** ./src/base/behaviors/theme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Behavior({
  data: {
    theme: 'light'
  },
  methods: {
    themeChanged: function themeChanged(theme) {
      this.setData({
        theme: theme
      });
    }
  }
});

/***/ })

}};
;
// # sourceMappingURL=58.js.map