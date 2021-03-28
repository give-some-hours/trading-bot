"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

exports.seed = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(knex) {
    var observerId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex('observers').insert({
              name: 'Observer ADA/EUR',
              base_asset: 'ADA',
              quote_asset: 'EUR'
            }).returning('id').then(function (a) {
              return a[0];
            });

          case 2:
            observerId = _context.sent;
            _context.next = 5;
            return knex('alerts').insert([{
              observer_id: observerId,
              lim: '1.08',
              limit_direction: 'UP',
              status: 'pending',
              type: 'alert',
              executed_at: null,
              order_options: null
            }]);

          case 5:
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