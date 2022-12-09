sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/outgoing-call", "./v4/outgoing-call"], function (_exports, _Theme, _outgoingCall, _outgoingCall2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _outgoingCall.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _outgoingCall.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _outgoingCall.pathData : _outgoingCall2.pathData;
  _exports.pathData = pathData;
  var _default = "outgoing-call";
  _exports.default = _default;
});