sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/taxi", "./v4/taxi"], function (_exports, _Theme, _taxi, _taxi2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _taxi.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _taxi.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _taxi.pathData : _taxi2.pathData;
  _exports.pathData = pathData;
  var _default = "taxi";
  _exports.default = _default;
});