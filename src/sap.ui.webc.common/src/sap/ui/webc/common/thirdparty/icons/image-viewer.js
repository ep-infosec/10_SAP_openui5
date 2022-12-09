sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/image-viewer", "./v4/image-viewer"], function (_exports, _Theme, _imageViewer, _imageViewer2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _imageViewer.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _imageViewer.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _imageViewer.pathData : _imageViewer2.pathData;
  _exports.pathData = pathData;
  var _default = "image-viewer";
  _exports.default = _default;
});