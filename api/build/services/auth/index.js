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

var _config = _interopRequireDefault(require("config"));

var _authenticationUtils = require("../../shared/authenticationUtils");

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    (0, _classCallCheck2["default"])(this, AuthService);
  }

  (0, _createClass2["default"])(AuthService, null, [{
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var email, password, expectedEmail, expectedPassword, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                expectedEmail = _config["default"].get('security.email');
                expectedPassword = _config["default"].get('security.password');

                if (!(email === expectedEmail && password === expectedPassword)) {
                  _context.next = 6;
                  break;
                }

                token = (0, _authenticationUtils.createToken)({
                  email: email
                });
                return _context.abrupt("return", {
                  token: token
                });

              case 6:
                throw new _apolloServer.ApolloError('Invalid credentials');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return AuthService;
}();

var _default = AuthService;
exports["default"] = _default;