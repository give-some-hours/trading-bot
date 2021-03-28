"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _apolloServer = require("apollo-server");

var ps = new _apolloServer.PubSub();

var WSService = /*#__PURE__*/function () {
  function WSService() {
    (0, _classCallCheck2["default"])(this, WSService);
  }

  (0, _createClass2["default"])(WSService, null, [{
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _WSService$ps;

        var _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", (_WSService$ps = WSService.ps).publish.apply(_WSService$ps, _args));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function publish() {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _WSService$ps2;

        var _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (_WSService$ps2 = WSService.ps).asyncIterator.apply(_WSService$ps2, _args2));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function subscribe() {
        return _subscribe.apply(this, arguments);
      }

      return subscribe;
    }()
  }]);
  return WSService;
}();

WSService.ps = ps;
var _default = WSService;
exports["default"] = _default;