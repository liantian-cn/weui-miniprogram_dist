var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [7],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccheckbox-group%5Ccheckbox-group!./src/components/checkbox-group/checkbox-group.ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccheckbox-group%5Ccheckbox-group!./src/components/checkbox-group/checkbox-group.ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./checkbox-group.ts */ "./src/components/checkbox-group/checkbox-group.ts")

/***/ }),

/***/ "./src/components/checkbox-group/checkbox-group.ts":
/*!*********************************************************!*\
  !*** ./src/components/checkbox-group/checkbox-group.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    multi: {
      type: Boolean,
      value: true,
      observer: '_multiChange'
    },
    extClass: {
      type: String,
      value: ''
    },
    prop: {
      type: String,
      value: ''
    }
  },
  data: {
    targetList: [],
    parentCell: null
  },
  relations: {
    '../checkbox/checkbox': {
      type: 'descendant',
      linked: function linked(target) {
        this.data.targetList.push(target);
        target.setMulti(this.data.multi);

        if (!this.data.firstItem) {
          this.data.firstItem = target;
        }

        if (target !== this.data.firstItem) {
          target.setOuterClass('weui-cell_wxss');
        }
      },
      unlinked: function unlinked(target) {
        var index = -1;
        this.data.targetList.forEach(function (item, idx) {
          if (item === target) {
            index = idx;
          }
        });
        this.data.targetList.splice(index, 1);

        if (!this.data.targetList) {
          this.data.firstItem = null;
        }
      }
    },
    '../form/form': {
      type: 'ancestor'
    },
    '../cells/cells': {
      type: 'ancestor',
      linked: function linked(target) {
        if (!this.data.parentCell) {
          this.data.parentCell = target;
        }

        this.setParentCellsClass();
      },
      unlinked: function unlinked() {
        this.data.parentCell = null; // 方便内存回收
      }
    }
  },
  methods: {
    checkedChange: function checkedChange(checked, target) {
      if (this.data.multi) {
        var vals = [];
        this.data.targetList.forEach(function (item) {
          if (item.data.checked) {
            vals.push(item.data.value);
          }
        });
        this.triggerEvent('change', {
          value: vals
        });
      } else {
        var val = '';
        this.data.targetList.forEach(function (item) {
          if (item === target) {
            val = item.data.value;
          } else {
            item.setData({
              checked: false
            });
          }
        });
        this.triggerEvent('change', {
          value: val
        }, {});
      }
    },
    setParentCellsClass: function setParentCellsClass() {
      var className = this.data.multi ? 'weui-cells_checkbox' : 'weui-cells_radio';

      if (this.data.parentCell) {
        this.data.parentCell.setCellsClass(className);
      }
    },
    _multiChange: function _multiChange(multi) {
      this.data.targetList.forEach(function (target) {
        target.setMulti(multi);
      });

      if (this.data.parentCell) {
        this.data.parentCell.setCellMulti(multi);
      }

      return multi;
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccheckbox-group%5Ccheckbox-group!./src/components/checkbox-group/checkbox-group.ts",0]]
},
]);

// # sourceMappingURL=checkbox-group.js.map