"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _apolloServer = _interopRequireDefault(require("./infrastructure/apollo-server"));

var _observers = _interopRequireDefault(require("./infrastructure/observers"));

(0, _apolloServer["default"])();
(0, _observers["default"])();