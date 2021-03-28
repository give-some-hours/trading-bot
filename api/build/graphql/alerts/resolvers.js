"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _alerts = _interopRequireDefault(require("../../services/alerts"));

var _observers = _interopRequireDefault(require("../../services/observers"));

var _default = {
  Query: {
    getEvents: function () {
      var _getEvents = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, _ref) {
        var filters;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filters = _ref.filters;
                return _context.abrupt("return", _alerts["default"].queryAll(filters));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getEvents(_x, _x2) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }()
  },
  Mutation: {
    deleteAlert: function () {
      var _deleteAlert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, _ref2) {
        var id;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                return _context2.abrupt("return", _alerts["default"].deleteById(id));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteAlert(_x3, _x4) {
        return _deleteAlert.apply(this, arguments);
      }

      return deleteAlert;
    }(),
    createAlert: function () {
      var _createAlert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent, _ref3) {
        var input;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                input = _ref3.input;
                return _context3.abrupt("return", _alerts["default"].create(input));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createAlert(_x5, _x6) {
        return _createAlert.apply(this, arguments);
      }

      return createAlert;
    }()
  },
  Alert: {
    observer: function () {
      var _observer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(alert) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _observers["default"].findById(alert.observerId));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function observer(_x7) {
        return _observer.apply(this, arguments);
      }

      return observer;
    }()
  }
};
exports["default"] = _default;