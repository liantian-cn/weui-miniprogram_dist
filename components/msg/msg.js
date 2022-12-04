var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [16],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cmsg%5Cmsg!./src/components/msg/msg.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cmsg%5Cmsg!./src/components/msg/msg.ts ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./msg.ts */ "./src/components/msg/msg.ts")

/***/ }),

/***/ "./src/components/msg/msg.ts":
/*!***********************************!*\
  !*** ./src/components/msg/msg.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    title: {
      // Msg 标题
      type: String,
      value: ''
    },
    type: {
      // icon 的 type
      type: String,
      value: ''
    },
    icon: {
      // 可以自行设置 icon, 设置icon 之后，type 失效
      type: String,
      value: ''
    },
    desc: {
      // 描述
      type: String,
      value: ''
    },
    extClass: {
      type: String,
      value: ''
    },
    size: {
      // 可以自行设置 icon, 设置icon 之后，type 失效
      type: Number,
      value: 64
    }
  },
  data: {}
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cmsg%5Cmsg!./src/components/msg/msg.ts",0]]
},
]);

// # sourceMappingURL=msg.js.map