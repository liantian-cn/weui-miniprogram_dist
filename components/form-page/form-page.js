var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [10],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cform-page%5Cform-page!./src/components/form-page/form-page.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cform-page%5Cform-page!./src/components/form-page/form-page.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./form-page.ts */ "./src/components/form-page/form-page.ts")

/***/ }),

/***/ "./src/components/form-page/form-page.ts":
/*!***********************************************!*\
  !*** ./src/components/form-page/form-page.ts ***!
  \***********************************************/
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
    subtitle: {
      // icon 的 type
      type: String,
      value: ''
    }
  },
  relations: {
    '../cells/cells': {
      type: 'descendant',
      linked: function linked(target) {
        if (!this.data.firstItem) {
          this.data.firstItem = target;
        }

        target.setOuterClass('weui-cells__group weui-cells__group_form weui-cells_form');

        if (target !== this.data.firstItem) {
          target.setOuterClass('weui-cells__group_wxss weui-cells__group weui-cells__group_form weui-cells_form');
        }
      }
    }
  },
  data: {
    firstItem: null
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cform-page%5Cform-page!./src/components/form-page/form-page.ts",0]]
},
]);

// # sourceMappingURL=form-page.js.map