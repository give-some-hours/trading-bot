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

var _binance = _interopRequireDefault(require("../binance"));

var ProductsService = /*#__PURE__*/function () {
  function ProductsService() {
    (0, _classCallCheck2["default"])(this, ProductsService);
  }

  (0, _createClass2["default"])(ProductsService, null, [{
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var products;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _binance["default"].getProducts();

              case 2:
                products = _context.sent;
                return _context.abrupt("return", products.symbols);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }]);
  return ProductsService;
}();

var _default = ProductsService;
exports["default"] = _default;