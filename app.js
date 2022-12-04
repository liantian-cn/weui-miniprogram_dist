var globalThis = this, self = this;
module.exports =
require("./_commons/0.js")([
{
"ids": [1],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/app-loader.js!./src/app.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/app-loader.js!./src/app.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./app.js */ "./src/app.js")

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var themeListeners = [];
App({
  onLaunch: function onLaunch() {
    console.log('App Launch');
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  themeChanged: function themeChanged(theme) {
    this.globalData.theme = theme;
    themeListeners.forEach(function (listener) {
      listener(theme);
    });
  },
  watchThemeChange: function watchThemeChange(listener) {
    if (themeListeners.indexOf(listener) < 0) {
      themeListeners.push(listener);
    }
  },
  unWatchThemeChange: function unWatchThemeChange(listener) {
    var index = themeListeners.indexOf(listener);

    if (index > -1) {
      themeListeners.splice(index, 1);
    }
  },
  globalData: {
    hasLogin: false,
    theme: 'light',
    GRID_DEMO_URL: '/example/index',
    iconTabbar: __webpack_require__(/*! /example/images/icon_tabbar.png */ "./src/example/images/icon_tabbar.png").default
  }
});

/***/ }),

/***/ "./src/example/images/icon_tabbar.png":
/*!********************************************!*\
  !*** ./src/example/images/icon_tabbar.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/_assets/icon_tabbar.eeebc5bc.png");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./node_modules/@mpflow/webpack-plugin/lib/loaders/app-loader.js!./src/app ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\GitHub\weui-miniprogram\node_modules\@mpflow\webpack-plugin\lib\loaders\app-loader.js!D:\Documents\GitHub\weui-miniprogram\src\app */"./node_modules/@mpflow/webpack-plugin/lib/loaders/app-loader.js!./src/app.js");


/***/ })

},
"entries": [[0,0]]
},
]);

// # sourceMappingURL=app.js.map