sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/cart-3", "./v4/cart-3"], function (_exports, _Theme, _cart, _cart2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _cart.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _cart.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _cart.pathData : _cart2.pathData;
  _exports.pathData = pathData;
  var _default = "cart-3";
  _exports.default = _default;
});