"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContextLogger = exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _winston = _interopRequireWildcard(require("winston"));

var _consoleTransport = _interopRequireDefault(require("./console-transport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Our custom logger
 */
var logger = _winston["default"].createLogger({
  format: _winston.format.combine(_winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  })),
  exitOnError: false,
  transports: [_consoleTransport["default"]]
});
/**
 * We wrapp our custom logger to provide a context logger
 * that will add automatically meta info like the requestID
 */


var loggWithMetaInfo = function loggWithMetaInfo(level, metaInfo) {
  return function (message, params) {
    var _params$extensions, _params$extensions$ex;

    var info = params instanceof Error ? {
      error: params,
      errorStack: params.stack || ((_params$extensions = params.extensions) === null || _params$extensions === void 0 ? void 0 : (_params$extensions$ex = _params$extensions.exception) === null || _params$extensions$ex === void 0 ? void 0 : _params$extensions$ex.stacktrace)
    } : _objectSpread({}, params || {});
    logger[level](message, _objectSpread(_objectSpread({}, info), metaInfo));
  };
};

var getContextLogger = function getContextLogger(metaInfo) {
  return {
    error: loggWithMetaInfo('error', metaInfo),
    warn: loggWithMetaInfo('warn', metaInfo),
    info: loggWithMetaInfo('info', metaInfo),
    http: loggWithMetaInfo('http', metaInfo),
    verbose: loggWithMetaInfo('verbose', metaInfo),
    debug: loggWithMetaInfo('debug', metaInfo),
    silly: loggWithMetaInfo('silly', metaInfo)
  };
};
/**
 * the only supported log fomart is logger[level](message, object)
 * where object is optional
 *
 * ATTENTION : you must use the contextLogger as soon as you are
 * in the scope of a request Which is basically almost always the case
 */


exports.getContextLogger = getContextLogger;
var _default = logger;
exports["default"] = _default;