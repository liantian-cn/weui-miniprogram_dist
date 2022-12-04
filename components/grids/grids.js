var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [12],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cgrids%5Cgrids!./src/components/grids/grids.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cgrids%5Cgrids!./src/components/grids/grids.ts ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./grids.ts */ "./src/components/grids/grids.ts")

/***/ }),

/***/ "./src/components/grids/grids.ts":
/*!***************************************!*\
  !*** ./src/components/grids/grids.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var defaultGridProps = {
  target: 'self',
  url: '',
  openType: 'navigate',
  delta: 1,
  appId: '',
  path: '',
  extraData: '',
  version: 'release',
  hoverClass: 'navigator-hover',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 600,
  bindsuccess: function bindsuccess() {},
  bindfail: function bindfail() {},
  bindcomplete: function bindcomplete() {}
};
Component({
  options: {
    addGlobalClass: true,
    pureDataPattern: /^_/
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    grids: {
      type: Array,
      value: [],
      observer: '_onGridsChange'
    }
  },
  data: {
    innerGrids: []
  },
  ready: function ready() {},
  methods: {
    _onGridsChange: function _onGridsChange(grids) {
      if (grids) {
        this.setData({
          innerGrids: grids.map(function (grid) {
            return Object.assign({}, defaultGridProps, grid);
          })
        });
      }
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cgrids%5Cgrids!./src/components/grids/grids.ts",0]]
},
]);

// # sourceMappingURL=grids.js.map