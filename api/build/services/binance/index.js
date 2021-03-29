"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _binanceApiNode = _interopRequireDefault(require("binance-api-node"));

var _config = _interopRequireDefault(require("config"));

var _logger = _interopRequireDefault(require("../../infrastructure/logger"));

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
                _context.prev = 0;
                _context.next = 3;
                return client.prices({
                  symbol: symbol
                });

              case 3:
                price = _context.sent;
                return _context.abrupt("return", price);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _logger["default"].log('error', _context.t0);

                return _context.abrupt("return", (0, _defineProperty2["default"])({}, symbol, -1));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
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
      var _placeMarketOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref2, isTest) {
        var symbol, side, quantity, price, type, operation, params;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                symbol = _ref2.symbol, side = _ref2.side, quantity = _ref2.quantity, price = _ref2.price, type = _ref2.type;
                operation = isTest ? client.orderTest : client.order;
                params = {
                  symbol: symbol,
                  side: side,
                  quantity: quantity,
                  type: type,
                  price: price
                };
                if (type === 'limit') params.timeInForce = 'GTC';
                return _context3.abrupt("return", operation(params));

              case 5:
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