"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config() {
  _classCallCheck(this, Config);

  this.errorMessage = {
    required: '%t不能为空',
    max: '%t不能大于%v',
    min: '%t不能小于%v'
  };

  this.getInputs = function (h) {
    return function (type, data) {};
  };
};

var config = new Config();
var _default = config;
exports.default = _default;