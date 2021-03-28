"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Observer = _interopRequireDefault(require("../../db/models/Observer"));

var _logger = _interopRequireDefault(require("../../infrastructure/logger"));

var _binance = _interopRequireDefault(require("../binance"));

var ObserversService = /*#__PURE__*/function () {
  function ObserversService() {
    (0, _classCallCheck2["default"])(this, ObserversService);
  }

  (0, _createClass2["default"])(ObserversService, null, [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _Observer["default"].query());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _Observer["default"].query().findById(id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(input) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _Observer["default"].query().insertAndFetch(input));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, input) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _Observer["default"].query().patchAndFetchById(id, input));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _Observer["default"].query().deleteById(id);

              case 2:
                return _context5.abrupt("return", id);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteById(_x5) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "getUsedForAlerts",
    value: function () {
      var _getUsedForAlerts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _Observer["default"].query().joinRelated('alerts', {
                  alias: 'a'
                }).where('a.status', 'pending').groupBy('observers.id'));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getUsedForAlerts() {
        return _getUsedForAlerts.apply(this, arguments);
      }

      return getUsedForAlerts;
    }()
  }, {
    key: "getPendingActions",
    value: function () {
      var _getPendingActions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  status: 'pending'
                }).orderBy('id'));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getPendingActions(_x6) {
        return _getPendingActions.apply(this, arguments);
      }

      return getPendingActions;
    }()
  }, {
    key: "getPendingAlerts",
    value: function () {
      var _getPendingAlerts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  type: 'alert',
                  status: 'pending'
                }).orderBy('id'));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getPendingAlerts(_x7) {
        return _getPendingAlerts.apply(this, arguments);
      }

      return getPendingAlerts;
    }()
  }, {
    key: "getExecutedAlerts",
    value: function () {
      var _getExecutedAlerts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  type: 'alert'
                }).whereIn('status', ['executed', 'failed']).orderBy('id'));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getExecutedAlerts(_x8) {
        return _getExecutedAlerts.apply(this, arguments);
      }

      return getExecutedAlerts;
    }()
  }, {
    key: "getPendingOrders",
    value: function () {
      var _getPendingOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  type: 'order',
                  status: 'pending'
                }).orderBy('id'));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getPendingOrders(_x9) {
        return _getPendingOrders.apply(this, arguments);
      }

      return getPendingOrders;
    }()
  }, {
    key: "getExecutedOrders",
    value: function () {
      var _getExecutedOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  type: 'order'
                }).whereIn('status', ['executed', 'failed']).orderBy('id'));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getExecutedOrders(_x10) {
        return _getExecutedOrders.apply(this, arguments);
      }

      return getExecutedOrders;
    }()
  }, {
    key: "countPendingAlerts",
    value: function () {
      var _countPendingAlerts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id) {
        var _yield$Observer$relat, _yield$Observer$relat2, count;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  status: 'pending',
                  type: 'alert'
                }).count();

              case 2:
                _yield$Observer$relat = _context12.sent;
                _yield$Observer$relat2 = (0, _slicedToArray2["default"])(_yield$Observer$relat, 1);
                count = _yield$Observer$relat2[0].count;
                return _context12.abrupt("return", count || 0);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function countPendingAlerts(_x11) {
        return _countPendingAlerts.apply(this, arguments);
      }

      return countPendingAlerts;
    }()
  }, {
    key: "countPendingOrders",
    value: function () {
      var _countPendingOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id) {
        var _yield$Observer$relat3, _yield$Observer$relat4, count;

        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _Observer["default"].relatedQuery('alerts')["for"](id).where({
                  status: 'pending',
                  type: 'order'
                }).count();

              case 2:
                _yield$Observer$relat3 = _context13.sent;
                _yield$Observer$relat4 = (0, _slicedToArray2["default"])(_yield$Observer$relat3, 1);
                count = _yield$Observer$relat4[0].count;
                return _context13.abrupt("return", count || 0);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function countPendingOrders(_x12) {
        return _countPendingOrders.apply(this, arguments);
      }

      return countPendingOrders;
    }()
  }, {
    key: "getObservations",
    value: function () {
      var _getObservations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(observers) {
        var observationsPrice, observations;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return Promise.all(observers.map(function (obs) {
                  return _binance["default"].observe("".concat(obs.baseAsset).concat(obs.quoteAsset));
                }));

              case 2:
                observationsPrice = _context14.sent;
                observations = observers.map(function (observer) {
                  var symbol = "".concat(observer.baseAsset).concat(observer.quoteAsset);
                  var observation = observationsPrice.find(function (o) {
                    return Number(o[symbol]) > 0;
                  });
                  return {
                    observer: observer,
                    symbol: symbol,
                    observation: Number((observation === null || observation === void 0 ? void 0 : observation[symbol]) || undefined)
                  };
                });

                if (observations.length === 0) {
                  _logger["default"].log('info', "Nothing to observe");
                }

                if (observations.length !== 0) {
                  _logger["default"].log('info', "Observations: ".concat(observations.map(function (obs) {
                    return "".concat(obs.symbol, ": ").concat(obs.observation);
                  }).join(', ')));
                }

                return _context14.abrupt("return", observations);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function getObservations(_x13) {
        return _getObservations.apply(this, arguments);
      }

      return getObservations;
    }()
  }]);
  return ObserversService;
}();

var _default = ObserversService;
exports["default"] = _default;