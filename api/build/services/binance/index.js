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

var _binanceApiNode = _interopRequireDefault(require("binance-api-node"));

var _config = _interopRequireDefault(require("config"));

var client = (0, _binanceApiNode["default"])({
  apiKey: _config["default"].get('binance.apiKey'),
  apiSecret: _config["default"].get('binance.secretKey')
});

var BinanceService = /*#__PURE__*/function () {
  function BinanceService() {
    (0, _classCallCheck2["default"])(this, BinanceService);
  }

  (0, _createClass2["default"])(BinanceService, null, [{
    key: "observe",
    value: function () {
      var _observe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(symbol) {
        var price;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return client.prices({
                  symbol: symbol
                });

              case 2:
                price = _context.sent;
                return _context.abrupt("return", price);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function observe(_x) {
        return _observe.apply(this, arguments);
      }

      return observe;
    }()
  }, {
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", client.exchangeInfo());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "placeMarketOrder",
    value: function () {
      var _placeMarketOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref, isTest) {
        var symbol, side, quantity, price, type, operation;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                symbol = _ref.symbol, side = _ref.side, quantity = _ref.quantity, price = _ref.price, type = _ref.type;
                operation = isTest ? client.orderTest : client.order;
                return _context3.abrupt("return", operation({
                  symbol: symbol,
                  side: side,
                  quantity: quantity,
                  type: type,
                  price: price
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function placeMarketOrder(_x2, _x3) {
        return _placeMarketOrder.apply(this, arguments);
      }

      return placeMarketOrder;
    }()
  }]);
  return BinanceService;
}();

var _default = BinanceService;
exports["default"] = _default;