var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [5],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccells%5Ccells!./src/components/cells/cells.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccells%5Ccells!./src/components/cells/cells.ts ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cells.ts */ "./src/components/cells/cells.ts")

/***/ }),

/***/ "./src/components/cells/cells.ts":
/*!***************************************!*\
  !*** ./src/components/cells/cells.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    extClass: {
      type: String,
      value: ''
    },
    footer: {
      type: String,
      value: ''
    },
    ariaRole: {
      type: String,
      value: ''
    }
  },
  data: {
    firstItem: null,
    checkboxCount: 0,
    checkboxIsMulti: false,
    outerClass: '',
    childClass: ''
  },
  relations: {
    '../cell/cell': {
      type: 'descendant',
      linked: function linked(target) {
        if (!this.data.firstItem) {
          this.data.firstItem = target;
        }

        if (target !== this.data.firstItem) {
          target.setOuterClass('weui-cell_wxss');
        }
      }
    },
    '../form-page/form-page': {
      type: 'ancestor'
    },
    '../checkbox-group/checkbox-group': {
      type: 'descendant',
      linked: function linked(target) {
        this.setData({
          checkboxCount: this.data.checkboxCount + 1,
          checkboxIsMulti: target.data.multi
        });
      },
      unlinked: function unlinked(target) {
        this.setData({
          checkboxCount: this.data.checkboxCount - 1,
          checkboxIsMulti: target.data.multi
        });
      }
    }
  },
  methods: {
    setCellMulti: function setCellMulti(multi) {
      this.setData({
        checkboxIsMulti: multi
      });
    },
    setCellsClass: function setCellsClass(className) {
      this.setData({
        childClass: className
      });
    },
    setOuterClass: function setOuterClass(className) {
      this.setData({
        outerClass: className
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccells%5Ccells!./src/components/cells/cells.ts",0]]
},
]);

// # sourceMappingURL=cells.js.map