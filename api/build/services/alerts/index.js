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

var _config = _interopRequireDefault(require("config"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _Alert = _interopRequireDefault(require("../../db/models/Alert"));

var _logger = _interopRequireDefault(require("../../infrastructure/logger"));

var _binance = _interopRequireDefault(require("../binance"));

var _notifier = _interopRequireDefault(require("../notifier"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AlertsService = /*#__PURE__*/function () {
  function AlertsService() {
    (0, _classCallCheck2["default"])(this, AlertsService);
  }

  (0, _createClass2["default"])(AlertsService, null, [{
    key: "queryAll",
    value: function () {
      var _queryAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filters) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Alert["default"].query().modify('filters', filters).orderBy('id', 'DESC'));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function queryAll(_x) {
        return _queryAll.apply(this, arguments);
      }

      return queryAll;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(input) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _Alert["default"].query().insertAndFetch(input));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, input) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _Alert["default"].query().patchAndFetchById(id, input));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Alert["default"].query().deleteById(id);

              case 2:
                return _context4.abrupt("return", id);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteById(_x5) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(alert, enrichedObservation) {
        var now, observer, symbol, observation, body, isTest, orderOptions, placedOrder, _body, _body2;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                now = new Date().toISOString();
                _context5.next = 3;
                return _Alert["default"].query().patchAndFetchById(alert.id, {
                  status: 'executed',
                  executedAt: now
                });

              case 3:
                observer = enrichedObservation.observer, symbol = enrichedObservation.symbol, observation = enrichedObservation.observation;

                if (!(alert.type === 'alert')) {
                  _context5.next = 11;
                  break;
                }

                // Notify
                _notifier["default"].setSubject("[ALERT][#".concat(alert.id, "] ").concat(symbol, " ~=").concat(observation, " ").concat(observer.quoteAsset));

                body = _notifier["default"].getHTMLTemplate('simple', {
                  body: "\n            <h6>Your goal ended up!</h6>\n            <p>Observed at: ".concat((0, _dayjs["default"])(now).format('DD/MM/YYYY HH:mm:ss'), "</p>\n            <h3>").concat(symbol, "</h3>\n            <h5>~=").concat(observation, " ").concat(observer.quoteAsset, "</h5>\n            <small>This is the last registered observation</small>\n        ")
                });

                _notifier["default"].setHtml(body);

                _notifier["default"].notify();

                _context5.next = 36;
                break;

              case 11:
                if (!(alert.type === 'order')) {
                  _context5.next = 36;
                  break;
                }

                _context5.prev = 12;
                isTest = _config["default"].get('binance.test');
                orderOptions = alert.orderOptions;
                _context5.next = 17;
                return _binance["default"].placeMarketOrder(orderOptions, isTest);

              case 17:
                placedOrder = _context5.sent;

                _logger["default"].log('info', "order placed", placedOrder);

                if (!placedOrder) {
                  _context5.next = 26;
                  break;
                }

                _context5.next = 22;
                return _Alert["default"].query().patchAndFetchById(alert.id, {
                  info: isTest ? _objectSpread(_objectSpread({}, orderOptions), {}, {
                    orderId: 'test-order'
                  }) : placedOrder
                });

              case 22:
                _notifier["default"].setSubject("[".concat(isTest ? 'TEST:' : '', "ORDER][").concat(orderOptions.side, "] You placed an order"));

                _body = _notifier["default"].getHTMLTemplate('simple', {
                  body: "\n            <h6>Your goal ended up!</h6>\n            <p>Observed at: ".concat((0, _dayjs["default"])(now).format('DD/MM/YYYY HH:mm:ss'), "</p>\n            <h3>").concat(symbol, "</h3>\n            <h5>~=").concat(observation, " ").concat(observer.quoteAsset, "</h5>\n            <small>This is the last registered observation</small>\n            <p></p>\n            <h2>Congratulations, you placed an order.</h2>\n            <h3>Here are the relatives information</h3>\n            <p>Type: ").concat(orderOptions.type, "</p>\n            <p>Symbol: ").concat(orderOptions.symbol, "</p>\n            <p>Quantity: ").concat(orderOptions.quantity, "</p>\n            ").concat(orderOptions.type !== 'MARKET' && "\n              <p>Price: ".concat(orderOptions.price, "</p>\n              "), "\n            <small>This is a test order.</small>\n        ")
                });

                _notifier["default"].setHtml(_body);

                _notifier["default"].notify();

              case 26:
                _context5.next = 36;
                break;

              case 28:
                _context5.prev = 28;
                _context5.t0 = _context5["catch"](12);
                _context5.next = 32;
                return _Alert["default"].query().patchAndFetchById(alert.id, {
                  status: 'failed',
                  info: {
                    error: _context5.t0.toString()
                  }
                });

              case 32:
                _notifier["default"].setSubject("[ORDER][FAILED] An order failed");

                _body2 = _notifier["default"].getHTMLTemplate('simple', {
                  body: "\n          <h6>Oops, something went wrong!</h6>\n          <p>Failed at: ".concat((0, _dayjs["default"])(now).format('DD/MM/YYYY HH:mm:ss'), "</p>\n          <p>").concat(_context5.t0, "</p>\n      ")
                });

                _notifier["default"].setHtml(_body2);

                _notifier["default"].notify();

              case 36:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[12, 28]]);
      }));

      function execute(_x6, _x7) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return AlertsService;
}();

var _default = AlertsService;
exports["default"] = _default;