var globalThis = this, self = this;
module.exports =
require("../../_commons/0.js")([
{
"ids": [22],
"modules":{

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cuploader%5Cuploader!./src/components/uploader/uploader.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cuploader%5Cuploader!./src/components/uploader/uploader.ts ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./uploader.ts */ "./src/components/uploader/uploader.ts")

/***/ }),

/***/ "./src/components/uploader/uploader.ts":
/*!*********************************************!*\
  !*** ./src/components/uploader/uploader.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    title: {
      type: String,
      value: '图片上传'
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed']
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera']
    },
    maxSize: {
      type: Number,
      value: 5 * 1024 * 1024
    },
    maxCount: {
      // 最多上传多少个文件
      type: Number,
      value: 1
    },
    files: {
      // 当前的图片列表, {url, error, loading}
      type: Array,
      value: [],
      observer: function observer(newVal) {
        this.setData({
          currentFiles: newVal
        });
      }
    },
    select: {
      // 过滤某个文件
      type: null,
      value: function value() {}
    },
    upload: {
      // 返回Promise的一个文件上传的函数
      type: null,
      value: null
    },
    tips: {
      type: String,
      value: ''
    },
    extClass: {
      type: String,
      value: ''
    },
    showDelete: {
      // 是否显示delete按钮
      type: Boolean,
      value: true
    }
  },
  data: {
    currentFiles: [],
    showPreview: false,
    previewImageUrls: []
  },
  ready: function ready() {},
  methods: {
    previewImage: function previewImage(e) {
      var index = e.currentTarget.dataset.index;
      var previewImageUrls = [];
      this.data.files.forEach(function (item) {
        previewImageUrls.push(item.url);
      });
      this.setData({
        previewImageUrls: previewImageUrls,
        previewCurrent: index,
        showPreview: true
      });
    },
    chooseImage: function chooseImage() {
      var _this = this;

      if (this.uploading) return;
      wx.chooseImage({
        count: this.data.maxCount - this.data.files.length,
        sizeType: this.data.sizeType,
        sourceType: this.data.sourceType,
        success: function success(res) {
          // console.log('chooseImage resp', res)
          // 首先检查文件大小
          var invalidIndex = -1; // @ts-ignore

          res.tempFiles.forEach(function (item, index) {
            if (item.size > _this.data.maxSize) {
              invalidIndex = index;
            }
          });

          if (typeof _this.data.select === 'function') {
            var ret = _this.data.select(res);

            if (ret === false) {
              return;
            }
          }

          if (invalidIndex >= 0) {
            _this.triggerEvent('fail', {
              type: 1,
              errMsg: "chooseImage:fail size exceed ".concat(_this.data.maxSize),
              total: res.tempFilePaths.length,
              index: invalidIndex
            }, {});

            return;
          } // 获取文件内容


          var mgr = wx.getFileSystemManager();
          var contents = res.tempFilePaths.map(function (item) {
            // @ts-ignore
            var fileContent = mgr.readFileSync(item);
            return fileContent;
          });
          var obj = {
            tempFilePaths: res.tempFilePaths,
            tempFiles: res.tempFiles,
            contents: contents
          }; // 触发选中的事件，开发者根据内容来上传文件，上传了把上传的结果反馈到files属性里面

          _this.triggerEvent('select', obj, {});

          var files = res.tempFilePaths.map(function (item, i) {
            return {
              loading: true,
              // @ts-ignore
              url: res.tempFilePaths[i] || "data:image/jpg;base64,".concat(wx.arrayBufferToBase64(contents[i]))
            };
          });
          if (!files || !files.length) return;

          if (typeof _this.data.upload === 'function') {
            var len = _this.data.files.length;

            var newFiles = _this.data.files.concat(files);

            _this.setData({
              files: newFiles,
              currentFiles: newFiles
            });

            _this.loading = true;

            _this.data.upload(obj).then(function (json) {
              _this.loading = false;

              if (json.urls) {
                var oldFiles = _this.data.files;
                json.urls.forEach(function (url, index) {
                  oldFiles[len + index].url = url;
                  oldFiles[len + index].loading = false;
                });

                _this.setData({
                  files: oldFiles,
                  currentFiles: newFiles
                });

                _this.triggerEvent('success', json, {});
              } else {
                _this.triggerEvent('fail', {
                  type: 3,
                  errMsg: 'upload file fail, urls not found'
                }, {});
              }
            }).catch(function (err) {
              _this.loading = false;
              var oldFiles = _this.data.files;
              res.tempFilePaths.forEach(function (item, index) {
                oldFiles[len + index].error = true;
                oldFiles[len + index].loading = false;
              });

              _this.setData({
                files: oldFiles,
                currentFiles: newFiles
              });

              _this.triggerEvent('fail', {
                type: 3,
                errMsg: 'upload file fail',
                error: err
              }, {});
            });
          }
        },
        fail: function fail(_fail) {
          if (_fail.errMsg.indexOf('chooseImage:fail cancel') >= 0) {
            _this.triggerEvent('cancel', {}, {});

            return;
          }

          _fail.type = 2;

          _this.triggerEvent('fail', _fail, {});
        }
      });
    },
    deletePic: function deletePic(e) {
      var index = e.detail.index;
      var files = this.data.files;
      var file = files.splice(index, 1);
      this.setData({
        files: files,
        currentFiles: files
      });
      this.triggerEvent('delete', {
        index: index,
        item: file[0]
      });
    }
  }
});

/***/ })

},
"entries": [["./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%5Cuploader%5Cuploader!./src/components/uploader/uploader.ts",0]]
},
]);

// # sourceMappingURL=uploader.js.map