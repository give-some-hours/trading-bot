"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _config = _interopRequireDefault(require("config"));

var _graphql = require("../../graphql");

var _authenticationUtils = require("../../shared/authenticationUtils");

var _logger = _interopRequireWildcard(require("../logger"));

var _loggerPlugin = _interopRequireDefault(require("./logger-plugin"));

var getUserFromHeader = function getUserFromHeader(req) {
  var token = req.get('Authorization');
  if (!token) return null;
  token = token.replace('Bearer ', '');
  return (0, _authenticationUtils.getUserFromToken)(token);
};

var server = new _apolloServer.ApolloServer({
  typeDefs: _graphql.typeDefs,
  resolvers: _graphql.resolvers,
  subscriptions: _graphql.subscriptions,
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var req, connection, me, contextLogger;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req, connection = _ref.connection;

              if (!connection) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", connection.context);

            case 3:
              _context2.next = 5;
              return getUserFromHeader(req);

            case 5:
              me = _context2.sent;
              contextLogger = (0, _logger.getContextLogger)();
              return _context2.abrupt("return", {
                me: me,
                req: req,
                logger: contextLogger
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }(),
  plugins: [_loggerPlugin["default"]],
  formatError: function formatError(error) {
    if (error.originalError instanceof _apolloServer.ApolloError) {
      return error;
    }

    _logger["default"].error(error);

    return new Error('Internal server error');
  }
});

var port = _config["default"].get('server.port');

var startApolloServer = function startApolloServer() {
  // server.installSubscriptionHandlers();
  server.listen({
    port: port
  }).then(function (_ref2) {
    var url = _ref2.url;

    _logger["default"].info("\uD83D\uDE80  Server ready at ".concat(url));
  });
};

var _default = startApolloServer;
exports["default"] = _default;