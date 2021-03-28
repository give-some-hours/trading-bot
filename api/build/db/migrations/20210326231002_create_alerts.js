"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

exports.up = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(knex) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex.schema.createTable('alerts', function (table) {
              table.increments('id').primary();
              table.integer('observer_id').notNullable().references('id').inTable('observers');
              table.string('lim').notNullable();
              table.enu('limit_direction', ['UP', 'DOWN'], {
                useNative: true,
                enumName: 'alerts_limit_direction_enum'
              }).defaultTo('UP');
              table.enu('status', ['pending', 'executed', 'failed'], {
                useNative: true,
                enumName: 'alerts_status_enum'
              }).defaultTo('pending');
              table.dateTime('executed_at');
              table.enu('type', ['alert', 'order'], {
                useNative: true,
                enumName: 'alerts_type_enum'
              }).notNullable().defaultTo('alert');
              table.json('order_options').defaultTo('{}');
              table.json('info').defaultTo('{}');
            });

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

exports.down = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(knex) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return knex.schema.dropTable('alerts');

          case 2:
            _context2.next = 4;
            return knex.schema.raw("\n  DROP TYPE \"alerts_limit_direction_enum\";\n  DROP TYPE \"alerts_status_enum\";\n  DROP TYPE \"alerts_type_enum\";\n");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();