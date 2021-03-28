"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("config"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _logger = _interopRequireDefault(require("../../infrastructure/logger"));

var createTransporter = function createTransporter() {
  return _nodemailer["default"].createTransport({
    service: _config["default"].get('notifier.nodemailer_service'),
    auth: {
      user: _config["default"].get('notifier.user'),
      pass: _config["default"].get('notifier.pass')
    }
  });
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
      var pathFile = _path["default"].join(__dirname, 'templates', "".concat(templateName, ".html"));

      var templateFile = _fs["default"].readFileSync(pathFile, {
        encoding: 'utf8',
        flag: 'r'
      });

      var replacer = function replacer(fm, g1) {
        return (map === null || map === void 0 ? void 0 : map[g1]) || null;
      };

      return templateFile.replace(/{{(.*)}}/, replacer);
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