"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var config = require('config');

exports.seed = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(knex) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex('settings').insert([{
              name: 'binance',
              options: JSON.stringify({
                apiKey: config.get('binance.apiKey'),
                secretKey: config.get('binance.secretKey'),
                threshold: config.get('binance.threshold'),
                test: config.get('binance.test')
              })
            }, {
              name: 'notifier',
              options: JSON.stringify({
                service: config.get('notifier.nodemailer_service'),
                user: config.get('notifier.user'),
                pass: config.get('notifier.pass'),
                address_to: config.get('notifier.address_to')
              })
            }]);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();