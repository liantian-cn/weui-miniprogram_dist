var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [9],
"modules":{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cform%5Cform!./src/components/form/form.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cform%5Cform!./src/components/form/form.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./form.ts */ "./src/components/form/form.ts")

/***/ }),

/***/ "./src/components/form/form-validator.ts":
/*!***********************************************!*\
  !*** ./src/components/form/form-validator.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/components/form/validator.ts");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/object */ "./src/components/utils/object.ts");




var toString = Object.prototype.toString;

var validateSingleRule = function validateSingleRule(rule, value) {
  var param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var models = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var message = '';
  var ruleKeys = Object.keys(rule);

  for (var i = 0, l = ruleKeys.length; i < l; ++i) {
    var ruleKey = ruleKeys[i];
    if (ruleKey === 'name' || ruleKey === 'message') continue;
    var validateMethod = typeof rule.validator !== 'undefined' ? rule.validator : _validator__WEBPACK_IMPORTED_MODULE_2__["default"][ruleKey];

    if (typeof validateMethod === 'function') {
      message = validateMethod(rule, value, param, models);

      if (message) {
        return message;
      }
    }
  }

  return message;
};

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(models, rules) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormValidator);

    this.models = void 0;
    this.rules = void 0;
    this.errors = void 0;
    this.models = models;
    this.rules = rules;
    this.errors = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FormValidator, [{
    key: "validate",
    value: function validate(cb) {
      var _this = this;

      return new Promise(function (resolve) {
        var failCount = 0;
        var errors = _this.errors;
        var models = _this.models; // let errorChanged = false

        Object.keys(_this.rules).forEach(function (fieldName) {
          var oldError = errors[fieldName];

          _this._innerValidateField(fieldName, models[fieldName], function (valid, newError) {
            if (!valid) failCount++;

            if (Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["diff"])(oldError, newError)) {
              errors[fieldName] = newError; // errorChanged = true
            }
          });
        });
        var keys = Object.keys(errors);
        keys.forEach(function (key) {
          if (!errors[key]) delete errors[key];
        }); // 先支持同步的接口吧

        resolve({
          isValid: !failCount,
          errors: failCount ? errors : undefined
        });
        cb && cb(!failCount, failCount ? errors : undefined);
      });
    }
  }, {
    key: "validateField",
    value: function validateField(name, value, cb) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2._innerValidateField(name, value, function (valid, error) {
          var errObj = {};
          errObj[name] = error;
          resolve({
            valid: valid,
            error: valid ? undefined : error
          });
          cb && cb(valid, valid ? undefined : errObj);
          var oldError = _this2.errors[name];
          var errorChanged = Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["diff"])(oldError, error);

          if (errorChanged) {
            if (!error) delete _this2.errors[name];
            _this2.errors[name] = error;
          }
        });
      });
    }
  }, {
    key: "_innerValidateField",
    value: function _innerValidateField(name, value, cb) {
      var rules = this.rules[name];

      if (!rules) {
        console.warn("[form-validator] rule name ".concat(name, " not exists."));
        cb(true);
        return;
      } // 处理参数


      if (typeof value === 'function') {
        cb = value;
        value = undefined;
      }

      var isFail = false;
      var models = this.models;

      if (toString.call(rules) === '[object Array]') {
        rules.forEach(function (rule) {
          rule.name = name; // 字段名称

          var resMessage = validateSingleRule(rule, value || models[name], rule.param, models); // 失败了直接中止

          if (resMessage && !isFail) {
            isFail = true; // errors[name] = {message: resMessage}

            var error = resMessage ? {
              message: resMessage,
              rule: rule
            } : undefined;
            cb(false, error);
          }
        }); // 成功的回调

        if (!isFail) {
          cb(!isFail);
        }
      } else {
        var rule = rules;
        rule.name = name;
        var resMessage = validateSingleRule(rule, value || models[name], rule.param, models);
        var error = resMessage ? {
          message: resMessage,
          rule: rule
        } : undefined;

        if (resMessage) {
          isFail = true;
        }

        cb(!isFail, error);
      }
    }
  }, {
    key: "setModel",
    value: function setModel(newModel) {
      this.models = newModel;
    }
  }, {
    key: "setRules",
    value: function setRules(newRules) {
      this.rules = newRules;
    }
  }], [{
    key: "addMethod",
    value: function addMethod(ruleName, method) {
      _validator__WEBPACK_IMPORTED_MODULE_2__["default"][ruleName] = method;
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ __webpack_exports__["default"] = (FormValidator);

/***/ }),

/***/ "./src/components/form/form.ts":
/*!*************************************!*\
  !*** ./src/components/form/form.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validator */ "./src/components/form/form-validator.ts");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/components/utils/object.ts");



function linked(target) {
  if (target.data.prop) {
    this.data.formItems[target.data.prop] = target;
  }

  if (target.setInForm) {
    target.setInForm();
  }

  if (!this.data.firstItem) {
    this.data.firstItem = target;
  }
}

function unlinked(target) {
  if (target.data.prop) {
    delete this.data.formItems[target.data.prop];
  }
}

Component({
  properties: {
    models: {
      type: Object,
      value: {},
      observer: '_modelChange'
    },
    rules: {
      // 格式是[{name, rules: {}}]
      type: Array,
      value: [],
      observer: '_rulesChange'
    },
    extClass: {
      type: String,
      value: ''
    }
  },
  data: {
    errors: {},
    formItems: {},
    firstItem: null
  },
  relations: {
    '../cell/cell': {
      type: 'descendant',
      linked: linked,
      unlinked: unlinked
    },
    '../checkbox-group/checkbox-group': {
      type: 'descendant',
      linked: linked,
      unlinked: unlinked
    }
  },
  attached: function attached() {
    this.initRules();
    this.formValidator = new _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"](this.data.models, this.data.newRules);
  },
  methods: {
    initRules: function initRules(rules) {
      var newRules = {};
      (rules || this.data.rules).forEach(function (rule) {
        if (rule.name && rule.rules) {
          newRules[rule.name] = rule.rules || [];
        }
      });
      this.setData({
        newRules: newRules
      });
      return newRules;
    },
    _modelChange: function _modelChange(newVal, oldVal) {
      var _this = this;

      if (!this.formValidator) {
        return newVal;
      } // 这个必须在前面


      this.formValidator.setModel(newVal);
      var diffObj = Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["diffObject"])(oldVal, newVal);

      if (diffObj) {
        var isValid = true;
        var errors = [];
        var errorMap = {};
        Object.keys(diffObj).forEach(function (k) {
          _this.formValidator.validateField(k, diffObj[k], function (isValided, error) {
            if (error && error[k]) {
              errors.push(error[k]);
              errorMap[k] = error[k];
            }

            isValid = isValided;
          });
        });

        this._showErrors(diffObj, errorMap);

        this.triggerEvent(isValid ? 'success' : 'fail', isValid ? {
          trigger: 'change'
        } : {
          errors: errors,
          trigger: 'change'
        });
      }

      return newVal;
    },
    _rulesChange: function _rulesChange(newVal) {
      var newRules = this.initRules(newVal);

      if (this.formValidator) {
        this.formValidator.setRules(newRules);
      }

      return newVal;
    },
    _showAllErrors: function _showAllErrors(errors) {
      var _this2 = this;

      Object.keys(this.data.newRules).forEach(function (k) {
        _this2._showError(k, errors && errors[k]);
      });
    },
    _showErrors: function _showErrors(objs, errors) {
      var _this3 = this;

      Object.keys(objs).forEach(function (k) {
        _this3._showError(k, errors && errors[k]);
      });
    },
    _showError: function _showError(prop, error) {
      var formItem = this.data.formItems[prop];

      if (formItem && formItem.data.showError) {
        formItem.setError(error);
      }
    },
    validate: function validate(cb) {
      var _this4 = this;

      return this.formValidator.validate(function (isValid, errors) {
        _this4._showAllErrors(errors);

        var handleError = _this4.handleErrors(errors);

        _this4.triggerEvent(isValid ? 'success' : 'fail', isValid ? {
          trigger: 'validate'
        } : {
          errors: handleError,
          trigger: 'validate'
        });

        cb && cb(isValid, handleError);
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validateField: function validateField(name, value) {
      var _this5 = this;

      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v) {
        var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      };
      return this.formValidator.validateField(name, value, function (isValid, errors) {
        _this5._showError(name, errors);

        var handleError = _this5.handleErrors(errors);

        _this5.triggerEvent(isValid ? 'success' : 'fail', isValid ? {
          trigger: 'validate'
        } : {
          errors: handleError,
          trigger: 'validate'
        });

        cb && cb(isValid, handleError);
      });
    },
    handleErrors: function handleErrors(errors) {
      if (errors) {
        var newErrors = [];
        this.data.rules.forEach(function (rule) {
          if (errors[rule.name]) {
            errors[rule.name].name = rule.name;
            newErrors.push(errors[rule.name]);
          }
        });
        return newErrors;
      }

      return errors;
    },
    addMethod: function addMethod(ruleName, method) {
      return this.formValidator.addMethod(ruleName, method);
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (_form_validator__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/form/validator.ts":
/*!******************************************!*\
  !*** ./src/components/form/validator.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string */ "./src/components/utils/string.ts");

var defaultMessage = {
  required: '%s必填',
  minlength: '长度最少为%s',
  maxlength: '长度最大为%s',
  rangelength: '长度在%s和%s之间',
  bytelength: '最多只能输入%s个字',
  min: '值最小为%s',
  max: '值最大为%s',
  range: '值的范围为%s和%s之间',
  mobile: '请输入正确的手机号',
  email: '请输入正确的电子邮件',
  url: '请输入正确的URL地址',
  equalTo: '值和字段%s不相等'
};

var isEmpty = function isEmpty(val) {
  if (val === 0 || val === false) return false;
  return !val;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  required: function required(r, val) {
    if (r.required === false) return '';else if (isEmpty(val)) return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.required, r.name);else return '';
  },
  minlength: function minlength(r, val) {
    var minlen = r.minlength;
    val = val || '';
    if (val.length < minlen) return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.minlength, minlen);else return '';
  },
  maxlength: function maxlength(r, val) {
    var maxlen = r.maxlength;
    val = val || '';

    if (val.length > maxlen) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.maxlength, maxlen);
    } else {
      return '';
    }
  },
  rangelength: function rangelength(r, val) {
    var range = r.rangelength;
    val = val || '';

    if (val.length > range[1] || val.length < range[0]) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.rangelength, range[0], range[1]);
    } else {
      return '';
    }
  },
  min: function min(r, val) {
    var min = r.min;

    if (val < min) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.min, min);
    } else {
      return '';
    }
  },
  max: function max(r, val) {
    var max = r.max;

    if (val > max) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.max, max);
    } else {
      return '';
    }
  },
  range: function range(r, val) {
    var range = r.range;

    if (val < range[0] || val > range[1]) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.range, range[0], range[1]);
    } else {
      return '';
    }
  },
  mobile: function mobile(r, val) {
    val = val || '';

    if (r.mobile === false) {
      return '';
    } else if (val.length !== 11) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.mobile);
    } else {
      return '';
    }
  },
  email: function email(r, value) {
    if (r.email === false) return ''; // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
    // eslint-disable-next-line

    if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value)) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.email);
    } else {
      return '';
    }
  },
  // http://docs.jquery.com/Plugins/Validation/Methods/url
  url: function url(r, value) {
    if (r.url === false) return ''; // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/

    if ( // eslint-disable-next-line no-useless-escape
    !/^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)) {
      return r.message || defaultMessage.url;
    } else {
      return '';
    }
  },
  equalTo: function equalTo(r, value, param, models) {
    var equalTo = r.equalTo;

    if (value !== models[equalTo]) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.equalTo, r.name);
    } else {
      return '';
    }
  },
  bytelength: function bytelength(r, value, param) {
    param = r.param;
    value = value || ''; // eslint-disable-next-line no-control-regex

    var len = value.replace(/[^\x00-\xff]/g, '**').length;

    if (len > param) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.bytelength, param);
    } else {
      return '';
    }
  }
});

/***/ }),

/***/ "./src/components/utils/object.ts":
/*!****************************************!*\
  !*** ./src/components/utils/object.ts ***!
  \****************************************/
/*! exports provided: diff, diffObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffObject", function() { return diffObject; });
var diff = function diff(old, newVal) {
  if (!old && newVal || old && !newVal) return true;

  for (var k in newVal) {
    if (old[k] !== newVal[k]) return true;
  }

  for (var _k in old) {
    if (old[_k] !== newVal[_k]) return true;
  }

  return false;
};
var diffObject = function diffObject(old, newVal) {
  if (!old && newVal) return newVal;
  if (!newVal && old) return old;
  var diffObj = {};
  var isDiff = false;

  for (var k in newVal) {
    if (old[k] !== newVal[k]) {
      isDiff = true;
      diffObj[k] = newVal[k];
    }
  }

  for (var _k2 in old) {
    if (old[_k2] !== newVal[_k2]) {
      isDiff = true;
      diffObj[_k2] = newVal[_k2];
    }
  }

  return isDiff ? diffObj : null;
};

/***/ }),

/***/ "./src/components/utils/string.ts":
/*!****************************************!*\
  !*** ./src/components/utils/string.ts ***!
  \****************************************/
/*! exports provided: sprintf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return sprintf; });
/**
 * 占位替换
 * @method sprintf
 * @method String.prototype.sprintf
 * @example
 * "my name is %s  %s".sprintf("a","b")  =》"my name is a  b"
 */
var sprintf = function sprintf() {
  var i;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var result = args[0] || '';
  var para;
  var reg;
  var length = args.length - 1;

  if (length < 1) {
    return result;
  }

  i = 1;

  while (i < length + 1) {
    result = result.replace(/%s/, '{#' + i + '#}');
    i++;
  }

  result.replace('%s', '');
  i = 1; // eslint-disable-next-line

  while (true) {
    para = args[i];

    if (para === undefined) {
      // 0 也是可能的替换数字
      break;
    }

    reg = new RegExp('{#' + i + '#}', 'g');
    result = result.replace(reg, para);
    i++;
  }

  return result;
};

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cform%5Cform!./src/components/form/form.ts",0]]
},
]);

// # sourceMappingURL=form.js.map