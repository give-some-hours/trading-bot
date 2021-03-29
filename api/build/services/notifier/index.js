"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("config"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _logger = _interopRequireDefault(require("../../infrastructure/logger"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createTransporter = function createTransporter() {
  try {
    return _nodemailer["default"].createTransport({
      service: _config["default"].get('notifier.nodemailer_service'),
      auth: {
        user: _config["default"].get('notifier.user'),
        pass: _config["default"].get('notifier.pass')
      }
    });
  } catch (err) {
    _logger["default"].log('error', err);

    return null;
  }
};

var NotifierService = /*#__PURE__*/function () {
  function NotifierService() {
    (0, _classCallCheck2["default"])(this, NotifierService);
  }

  (0, _createClass2["default"])(NotifierService, null, [{
    key: "setSubject",
    value: function setSubject(subject) {
      NotifierService.subject = subject;
    }
  }, {
    key: "setHtml",
    value: function setHtml(html) {
      NotifierService.html = html;
    }
  }, {
    key: "clear",
    value: function clear() {
      NotifierService.subject = null;
      NotifierService.html = null;
    }
  }, {
    key: "getHTMLTemplate",
    value: function getHTMLTemplate(templateName, map) {
      var mapObject = _objectSpread(_objectSpread({}, map), {}, {
        preheader: (map === null || map === void 0 ? void 0 : map.body) || ''
      });

      var pathFile = _path["default"].join(__dirname, 'templates', "".concat(templateName, ".html"));

      var templateFile = _fs["default"].readFileSync(pathFile, {
        encoding: 'utf8',
        flag: 'r'
      });

      var formatedFile = templateFile;

      for (var _i = 0, _Object$keys = Object.keys(mapObject); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        formatedFile = formatedFile.replace("{{".concat(key, "}}"), mapObject[key]);
      }

      return formatedFile;
    }
  }, {
    key: "send",
    value: function send(transporter, options) {
      return new Promise(function (res, rej) {
        return transporter.sendMail(options, function (err, info) {
          NotifierService.clear();
          if (err) return rej(err);
          return res(info);
        });
      });
    }
  }, {
    key: "notify",
    value: function notify() {
      if (!(NotifierService.subject && NotifierService.html)) throw new Error('Subject & html are required.');
      var options = {
        from: _config["default"].get('notifier.user'),
        to: _config["default"].get('notifier.address_to'),
        subject: NotifierService.subject,
        text: NotifierService.html,
        html: NotifierService.html
      };

      try {
        _logger["default"].log('info', 'Notifying ...');

        NotifierService.send(NotifierService.transporter, options);

        _logger["default"].log('info', 'Notified.');
      } catch (err) {
        _logger["default"].log('error', err);

        _logger["default"].log('info', 'Fail to notify.');
      }
    }
  }]);
  return NotifierService;
}();

NotifierService.transporter = createTransporter();
NotifierService.subject = null;
NotifierService.html = null;
var _default = NotifierService;
exports["default"] = _default;