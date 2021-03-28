"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _graphqlResolvers = require("graphql-resolvers");

var isAuthenticated = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, _ref) {
    var me;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            me = _ref.me;
            return _context.abrupt("return", me ? _graphqlResolvers.skip : new _apolloServer.ApolloError('Not authenticated', 401, {
              loggerLevel: 'warn'
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function isAuthenticated(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = isAuthenticated;
exports["default"] = _default;