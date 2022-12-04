var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
require("../../_commons/61.js"),
require("../../_commons/58.js"),
{
"ids": [31],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cform%5Cform!./src/example/form/form.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cform%5Cform!./src/example/form/form.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./form.js */ "./src/example/form/form.js")

/***/ }),

/***/ "./src/example/form/form.js":
/*!**********************************!*\
  !*** ./src/example/form/form.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    showTopTips: false,
    radioItems: [{
      name: 'cell standard',
      value: '0',
      checked: true
    }, {
      name: 'cell standard',
      value: '1'
    }],
    checkboxItems: [{
      name: 'standard is dealt for u.',
      value: '0',
      checked: true
    }, {
      name: 'standard is dealicient for u.',
      value: '1'
    }],
    items: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }],
    date: "2016-09-01",
    time: "12:01",
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
    isAgree: false,
    formData: {},
    rules: [{
      name: 'radio',
      rules: {
        required: false,
        message: '单选列表是必选项'
      }
    }, {
      name: 'checkbox',
      rules: {
        required: true,
        message: '多选列表是必选项'
      }
    }, {
      name: 'name',
      rules: {
        required: true,
        message: '请输入姓名'
      }
    }, {
      name: 'qq',
      rules: {
        required: true,
        message: 'qq必填'
      }
    }, {
      name: 'mobile',
      rules: [{
        required: true,
        message: 'mobile必填'
      }, {
        mobile: true,
        message: 'mobile格式不对'
      }]
    }, {
      name: 'vcode',
      rules: {
        required: true,
        message: '验证码必填'
      }
    }, {
      name: 'idcard',
      rules: {
        validator: function validator(rule, value, param, modeels) {
          if (!value || value.length !== 18) {
            return 'idcard格式不正确';
          }
        }
      }
    }]
  },
  radioChange: function radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;

    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems,
      ["formData.radio"]: e.detail.value
    });
  },
  checkboxChange: function checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.checkboxItems,
        values = e.detail.value;

    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems,
      ["formData.checkbox"]: e.detail.value
    });
  },
  bindDateChange: function bindDateChange(e) {
    this.setData({
      date: e.detail.value,
      ["formData.date"]: e.detail.value
    });
  },
  formInputChange: function formInputChange(e) {
    var field = e.currentTarget.dataset.field;
    this.setData({
      ["formData.".concat(field)]: e.detail.value
    });
  },
  bindTimeChange: function bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    });
  },
  bindCountryCodeChange: function bindCountryCodeChange(e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryCodeIndex: e.detail.value
    });
  },
  bindCountryChange: function bindCountryChange(e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryIndex: e.detail.value
    });
  },
  bindAccountChange: function bindAccountChange(e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      accountIndex: e.detail.value
    });
  },
  bindAgreeChange: function bindAgreeChange(e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  submitForm: function submitForm() {
    var _this = this;

    this.selectComponent('#form').validate(function (valid, errors) {
      console.log('valid', valid, errors);

      if (!valid) {
        var firstError = Object.keys(errors);

        if (firstError.length) {
          _this.setData({
            error: errors[firstError[0]].message
          });
        }
      } else {
        wx.showToast({
          title: '校验通过'
        });
      }
    }); // this.selectComponent('#form').validateField('mobile', (valid, errors) => {
    //     console.log('valid', valid, errors)
    // })
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%5Cform%5Cform!./src/example/form/form.js",0,61,58]]
},
]);

// # sourceMappingURL=form.js.map