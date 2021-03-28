"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _lodash = _interopRequireDefault(require("lodash"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var NOT_LOGGABLE_VARIABLES = ['password'];

var getRequestName = function getRequestName(request) {
  if (request.operationName) return request.operationName;

  try {
    var firstElement = request.query.split('\n')[1];
    return firstElement.trim().split(' ')[0];
  } catch (error) {
    return 'unknown request';
  }
};

var graphqlLoggerPlugin = {
  requestDidStart: function requestDidStart(_ref) {
    var request = _ref.request,
        context = _ref.context;
    context.logger.http("[GRAPHQL] ".concat(getRequestName(request)), {
      query: request.query,
      variables: _lodash["default"].omit(request.variables, NOT_LOGGABLE_VARIABLES)
    });
    return {
      didEncounterErrors: function didEncounterErrors(_ref2) {
        var errors = _ref2.errors;
        if (!errors) return;

        var _iterator = _createForOfIteratorHelper(errors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var error = _step.value;

            if (error.originalError instanceof _apolloServer.ApolloError) {
              var _error$extensions;

              var loggerLevel = ((_error$extensions = error.extensions) === null || _error$extensions === void 0 ? void 0 : _error$extensions.loggerLevel) || 'error';
              context.logger[loggerLevel]("[GRAPHQL] ".concat(error.message), error);
            } else {
              context.logger.error("[GRAPHQL] ".concat(error.message), error);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };
  }
};
var _default = graphqlLoggerPlugin;
exports["default"] = _default;