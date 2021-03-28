"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlResolvers = require("graphql-resolvers");

var _observers = _interopRequireDefault(require("../../services/observers"));

var _isAuthenticated = _interopRequireDefault(require("../shared/resolvers/isAuthenticated"));

var _default = {
  Query: {
    getObservers: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _observers["default"].findAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))),
    getPendingAlerts: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, _ref2) {
        var id;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                return _context2.abrupt("return", _observers["default"].getPendingAlerts(id));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }()),
    getExecutedAlerts: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent, _ref4) {
        var id;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _ref4.id;
                return _context3.abrupt("return", _observers["default"].getExecutedAlerts(id));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }()),
    getPendingOrders: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parent, _ref6) {
        var id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref6.id;
                return _context4.abrupt("return", _observers["default"].getPendingOrders(id));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5, _x6) {
        return _ref7.apply(this, arguments);
      };
    }()),
    getExecutedOrders: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(parent, _ref8) {
        var id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _ref8.id;
                return _context5.abrupt("return", _observers["default"].getExecutedOrders(id));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x7, _x8) {
        return _ref9.apply(this, arguments);
      };
    }())
  },
  Mutation: {
    createObserver: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(parent, _ref10) {
        var input;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                input = _ref10.input;
                return _context6.abrupt("return", _observers["default"].create(input));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x9, _x10) {
        return _ref11.apply(this, arguments);
      };
    }()),
    updateObserver: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(parent, _ref12) {
        var id, input;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id = _ref12.id, input = _ref12.input;
                return _context7.abrupt("return", _observers["default"].update(id, input));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x11, _x12) {
        return _ref13.apply(this, arguments);
      };
    }()),
    deleteObserver: (0, _graphqlResolvers.combineResolvers)(_isAuthenticated["default"], /*#__PURE__*/function () {
      var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(parent, _ref14) {
        var id;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                id = _ref14.id;
                return _context8.abrupt("return", _observers["default"].deleteById(id));

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x13, _x14) {
        return _ref15.apply(this, arguments);
      };
    }())
  },
  Observer: {
    countPendingAlerts: function () {
      var _countPendingAlerts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(observer) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", _observers["default"].countPendingAlerts(observer.id));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function countPendingAlerts(_x15) {
        return _countPendingAlerts.apply(this, arguments);
      }

      return countPendingAlerts;
    }(),
    countPendingOrders: function () {
      var _countPendingOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(observer) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _observers["default"].countPendingOrders(observer.id));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function countPendingOrders(_x16) {
        return _countPendingOrders.apply(this, arguments);
      }

      return countPendingOrders;
    }()
  }
};
exports["default"] = _default;