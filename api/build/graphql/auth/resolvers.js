"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _auth = _interopRequireDefault(require("../../services/auth"));

var _isAuthenticated = _interopRequireDefault(require("../shared/resolvers/isAuthenticated"));

var _default = {
  Query: {
    me: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, _ref) {
        var me;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                me = _ref.me;
                return _context.abrupt("return", me);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }())
  },
  Mutation: {
    login: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, _ref3) {
        var email, password;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                email = _ref3.email, password = _ref3.password;
                return _context2.abrupt("return", _auth["default"].login({
                  email: email,
                  password: password
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x4, _x5) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }
};
exports["default"] = _default;