"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _lodash = _interopRequireDefault(require("lodash"));

var _tripleBeam = require("triple-beam");

var _winston = require("winston");

var prettifyError = function prettifyError(error) {
  var _error$extensions, _error$extensions$exc;

  return error ? "\n".concat(error.stack || JSON.stringify((_error$extensions = error.extensions) === null || _error$extensions === void 0 ? void 0 : (_error$extensions$exc = _error$extensions.exception) === null || _error$extensions$exc === void 0 ? void 0 : _error$extensions$exc.stacktrace, undefined, 2)) : '';
};
/**
 * Create a custom log format to display errors in the console "like" console.log
 * mainly used for local debug purposes
 */


var formatSplat = function formatSplat(splat) {
  if (!splat) return '';
  var splatFirstItem = splat[0];
  if (splatFirstItem === undefined) return '';
  if (splatFirstItem instanceof Error) return prettifyError(splatFirstItem);

  if ((0, _typeof2["default"])(splatFirstItem) === 'object') {
    return "\n".concat(JSON.stringify(_lodash["default"].omit(splatFirstItem, ['error', 'errorStack']), undefined, 2)).concat(prettifyError(splatFirstItem.error));
  }

  return "\n".concat(splatFirstItem);
};

var logFormat = _winston.format.printf(function (info) {
  return "".concat(info.timestamp, " ").concat(info.level, ": ").concat(info.message).concat(formatSplat(info[_tripleBeam.SPLAT]));
});

var consoleTransport = new _winston.transports.Console({
  format: _winston.format.combine(_winston.format.colorize(), logFormat)
});
var _default = consoleTransport;
exports["default"] = _default;