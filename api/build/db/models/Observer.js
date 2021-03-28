"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _objection = require("objection");

var _index = _interopRequireDefault(require("../index.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

_objection.Model.knex(_index["default"]);

var Observer = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Observer, _Model);

  var _super = _createSuper(Observer);

  function Observer() {
    (0, _classCallCheck2["default"])(this, Observer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Observer, null, [{
    key: "tableName",
    get: function get() {
      return 'observers';
    }
  }, {
    key: "relationMappings",
    get: function get() {
      var Alert = require('./Alert')["default"];

      return {
        alerts: {
          relation: _objection.Model.HasManyRelation,
          modelClass: Alert,
          join: {
            from: 'observers.id',
            to: 'alerts.observerId'
          }
        }
      };
    }
  }]);
  return Observer;
}(_objection.Model);

var _default = Observer;
exports["default"] = _default;