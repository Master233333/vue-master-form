"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
exports.Store = void 0;

var _objectUtils = require("../../utils/objectUtils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    this.values = {};
    this.meta = {};
  }

  _createClass(Store, [{
    key: "addField",
    value: function addField(name) {
      if (this.values.hasOwnProperty(name)) {
        console.error('FormObj: can not setForm with the same name');
        return;
      }

      this.values[name] = undefined;
      this.meta[name] = {};
    }
  }, {
    key: "removeField",
    value: function removeField(name) {
      delete this.values[name];
      delete this.meta[name];
    }
  }, {
    key: "setValues",
    value: function setValues(obj) {
      var _this = this;

      (0, _objectUtils.getNames)(obj).forEach(function (name) {
        if (!_this.values.hasOwnProperty(name)) {
          console.warn('form store: can not set value not on form dom');
          return;
        }

        _this.values[name] = obj[name];
      });
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      return this.values[name];
    }
  }, {
    key: "getValues",
    value: function getValues(names) {
      var _this2 = this;

      if (!names) {
        return this.values;
      }

      return names.map(function (name) {
        return _this2.values[name];
      });
    }
  }, {
    key: "getMeta",
    value: function getMeta(name) {
      return this.meta[name];
    }
  }, {
    key: "getMetas",
    value: function getMetas(names) {
      var _this3 = this;

      if (names) {
        var out = {};
        names.forEach(function (name) {
          return out[name] = _this3.meta[name];
        });
        return out;
      }

      return this.meta;
    }
  }, {
    key: "setMeta",
    value: function setMeta(name, obj) {
      if (!this.meta.hasOwnProperty(name)) {
        console.warn('form store: can not set meta not on form dom');
        return;
      }

      this.meta[name] = obj;
    }
  }, {
    key: "resetFields",
    value: function resetFields(names) {
      var _this4 = this;

      if (names) {
        names.forEach(function (name) {
          _this4.resetField(name);
        });
      } else {
        (0, _objectUtils.getNames)(this.values).forEach(function (name) {
          _this4.resetField(name);
        });
      }
    }
  }, {
    key: "resetField",
    value: function resetField(name) {
      this.values[name] = undefined;
      this.meta[name] = {};
    }
  }]);

  return Store;
}();

exports.Store = Store;

function createStore() {
  return Object.freeze(new Store());
}