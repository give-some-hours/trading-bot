"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserFromToken = exports.createToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _config = _interopRequireDefault(require("config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var jwtSecret = _config["default"].get('security.jwt.secret');

var expiresIn = _config["default"].get('security.jwt.expiresIn');

var expectedEmail = _config["default"].get('security.email');

var createToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
    var email;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = user.email;
            return _context.abrupt("return", _jsonwebtoken["default"].sign({
              email: email
            }, jwtSecret, {
              expiresIn: expiresIn
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createToken = createToken;

var getUserFromToken = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token) {
    var tokenData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            tokenData = _jsonwebtoken["default"].verify(token, _config["default"].get('security.jwt.secret'));
            _context2.next = 7;
            break;

          case 4:
            _context2.prev = 4;
            _context2.t0 = _context2["catch"](0);
            throw new _apolloServer.AuthenticationError('Invalid JWT');

          case 7:
            if (!(tokenData.email !== expectedEmail)) {
              _context2.next = 9;
              break;
            }

            throw new _apolloServer.ApolloError('Invalid JWT');

          case 9:
            return _context2.abrupt("return", tokenData);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 4]]);
  }));

  return function getUserFromToken(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserFromToken = getUserFromToken;