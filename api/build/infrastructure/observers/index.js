"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bot = _interopRequireDefault(require("../../services/bot"));

var startObservers = function startObservers() {
  _bot["default"].run();
};

var _default = startObservers;
exports["default"] = _default;