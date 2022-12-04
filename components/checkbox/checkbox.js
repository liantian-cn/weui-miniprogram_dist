var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [6],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccheckbox%5Ccheckbox!./src/components/checkbox/checkbox.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccheckbox%5Ccheckbox!./src/components/checkbox/checkbox.ts ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./checkbox.ts */ "./src/components/checkbox/checkbox.ts")

/***/ }),

/***/ "./src/components/checkbox/checkbox.ts":
/*!*********************************************!*\
  !*** ./src/components/checkbox/checkbox.ts ***!
  \*********************************************/
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
      value: true
    },
    checked: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: 'label'
    },
    extClass: {
      type: String,
      value: ''
    }
  },
  data: {},
  relations: {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor',
      linked: function linked(target) {
        this.data.group = target;
      },
      unlinked: function unlinked() {
        this.data.group = null;
      }
    }
  },
  methods: {
    setMulti: function setMulti(multi) {
      this.setData({
        multi: multi
      });
    },
    setOuterClass: function setOuterClass(className) {
      this.setData({
        outerClass: className
      });
    },
    checkedChange: function checkedChange() {
      if (this.data.multi) {
        var checked = !this.data.checked;
        this.setData({
          checked: checked
        });

        if (this.data.group) {
          this.data.group.checkedChange(checked, this);
        }
      } else {
        var _checked = this.data.checked;
        if (_checked) return;
        this.setData({
          checked: true
        });

        if (this.data.group) {
          this.data.group.checkedChange(_checked, this);
        }
      }

      this.triggerEvent('change', {
        value: this.data.value,
        checked: this.data.checked
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Ccheckbox%5Ccheckbox!./src/components/checkbox/checkbox.ts",0]]
},
]);

// # sourceMappingURL=checkbox.js.map