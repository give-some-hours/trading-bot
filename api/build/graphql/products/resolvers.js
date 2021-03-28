"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _products = _interopRequireDefault(require("../../services/products"));

var _isAuthenticated = _interopRequireDefault(require("../shared/resolvers/isAuthenticated"));

var _default = {
  Query: {
    getProducts: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _products["default"].getProducts());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })))
  }
};
exports["default"] = _default;