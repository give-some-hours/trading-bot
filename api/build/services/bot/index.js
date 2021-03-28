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

var _config = _interopRequireDefault(require("config"));

var _logger = _interopRequireDefault(require("../../infrastructure/logger"));

var _alerts = _interopRequireDefault(require("../alerts"));

var _observers = _interopRequireDefault(require("../observers"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var threshold = Math.max(_config["default"].get('binance.threshold'), 1000);

var BotService = /*#__PURE__*/function () {
  function BotService() {
    (0, _classCallCheck2["default"])(this, BotService);
  }

  (0, _createClass2["default"])(BotService, null, [{
    key: "run",
    value: //
    function () {
      var _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var stopFlag, _loop;

        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _logger["default"].log('info', 'Starting bot...');

                stopFlag = true;
                _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop() {
                  var observers, observations, observersAlerts, enrichedObservations;
                  return _regenerator["default"].wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return BotService.sleep(threshold);

                        case 2:
                          // Log start time
                          _logger["default"].log('info', "Timestamp: ".concat(new Date().getTime())); //


                          _context.next = 5;
                          return _observers["default"].getUsedForAlerts();

                        case 5:
                          observers = _context.sent;
                          _context.next = 8;
                          return _observers["default"].getObservations(observers);

                        case 8:
                          observations = _context.sent;
                          _context.next = 11;
                          return Promise.all(observations.map(function (_ref) {
                            var observer = _ref.observer;
                            return _observers["default"].getPendingActions(observer.id);
                          }));

                        case 11:
                          observersAlerts = _context.sent;
                          enrichedObservations = observations.map(function (_ref2, index) {
                            var observer = _ref2.observer,
                                symbol = _ref2.symbol,
                                observation = _ref2.observation;
                            return {
                              observer: observer,
                              symbol: symbol,
                              observation: observation,
                              alerts: observersAlerts[index]
                            };
                          });
                          _context.next = 15;
                          return BotService.doWhatToDo(enrichedObservations);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });

              case 3:
                if (!stopFlag) {
                  _context2.next = 7;
                  break;
                }

                return _context2.delegateYield(_loop(), "t0", 5);

              case 5:
                _context2.next = 3;
                break;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "doWhatToDo",
    value: function () {
      var _doWhatToDo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(enrichedObservations) {
        return _regenerator["default"].wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Promise.all(enrichedObservations.map( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(enrichedObservation) {
                    var alerts, observation, _iterator, _step, alert, UP;

                    return _regenerator["default"].wrap(function _callee2$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            alerts = enrichedObservation.alerts, observation = enrichedObservation.observation;
                            _iterator = _createForOfIteratorHelper(alerts);
                            _context3.prev = 2;

                            _iterator.s();

                          case 4:
                            if ((_step = _iterator.n()).done) {
                              _context3.next = 12;
                              break;
                            }

                            alert = _step.value;
                            UP = alert.limitDirection === 'UP';

                            if (!(UP && Number(observation) >= Number(alert.lim) || !UP && Number(observation) <= Number(alert.lim))) {
                              _context3.next = 10;
                              break;
                            }

                            _context3.next = 10;
                            return _alerts["default"].execute(alert, enrichedObservation);

                          case 10:
                            _context3.next = 4;
                            break;

                          case 12:
                            _context3.next = 17;
                            break;

                          case 14:
                            _context3.prev = 14;
                            _context3.t0 = _context3["catch"](2);

                            _iterator.e(_context3.t0);

                          case 17:
                            _context3.prev = 17;

                            _iterator.f();

                            return _context3.finish(17);

                          case 20:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee2, null, [[2, 14, 17, 20]]);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3);
      }));

      function doWhatToDo(_x) {
        return _doWhatToDo.apply(this, arguments);
      }

      return doWhatToDo;
    }()
  }, {
    key: "sleep",
    value: function sleep(time) {
      return new Promise(function (res) {
        return setTimeout(res, time);
      });
    }
  }]);
  return BotService;
}();

var _default = BotService;
exports["default"] = _default;