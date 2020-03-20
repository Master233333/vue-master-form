"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormObj = createFormObj;
exports.FormObj = void 0;

var _createStore = require("./createStore");

var _vnode = require("../../utils/vnode");

var _objectUtils = require("../../utils/objectUtils");

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var errorMessage = _config.default.errorMessage;

function validateRules(value) {
  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var trigger = arguments.length > 2 ? arguments[2] : undefined;

  if (!rules) {
    return [];
  }

  var errors = [];

  var addError = function addError(rule) {
    var defaultMsg = errorMessage[rule.type] || 'error'; // if (typeof defaultMsg === 'string') {
    //   defaultMsg = defaultMsg.replace(/%v/, rule.value);
    // }

    defaultMsg = defaultMsg.replace(/%v/, rule.value);
    errors.push({
      type: rule.type,
      message: rule.message || defaultMsg
    });
  };

  rules.forEach(function (rule) {
    if (rule.trigger === 'submit' && trigger !== 'submit') {
      return;
    }

    switch (rule.type) {
      case 'required':
        if (value === '' || value === undefined || value === null) {
          addError(rule);
        }

        if (value && value.length === 0) {
          addError(rule);
        }

        break;

      case 'max':
        if (typeof value === 'string' && value.length > rule.value) {
          addError(rule);
        }

        if (typeof value === 'number' && value > rule.value) {
          addError(rule);
        }

        break;

      case 'min':
        if (typeof value === 'string' && value.length < rule.value) {
          addError(rule);
        }

        if (typeof value === 'number' && value < rule.value) {
          addError(rule);
        }

        break;

      case 'diy':
      default:
        if (!rule.validator) {
          break;
        }

        var out = rule.validator(value, rule.value);

        if (typeof out !== 'boolean' && out && out.then) {
          out.then(function (res) {
            if (res) {
              addError(rule);
            }
          });
        } else if (out) {
          addError(rule);
        }

        break;
    }
  });
  return errors;
}

function getFullName(name, list) {
  if (!list) {
    list = [];
  }

  if (!name.length) {
    return list;
  }

  var index = name.indexOf('[');

  if (index !== -1) {
    if (index !== 0) {
      list.push(name.substring(0, index));
      name = name.substring(index);
    }

    list.push(name.substring(1, name.indexOf(']')));
    return getFullName(name.substring(name.indexOf(']') + 1), list);
  } else {
    return [].concat(_toConsumableArray(list), [name]);
  }
}

function setObjValues(out, name, value) {
  var reg = /^[\d|\.]*$/; // 把[ ]形式转list

  var ns = getFullName(name);
  var newName = '';
  ns.forEach(function (nn, i) {
    // tslint:disable-next-line:no-eval
    var obj = eval('out' + newName);

    if (i === ns.length - 1) {
      // 解析到最后一层，赋值
      obj[nn] = value;
    } else if (!obj[nn]) {
      // 不是最后一层，新建list或者object对象
      var isNum = reg.test(ns[i + 1]);
      obj[nn] = isNum ? [] : {};
    } else {
      var _isNum = reg.test(ns[i]);

      if (_isNum && Array.isArray(obj[nn])) {
        console.error('FormObj: can not setForm with diff type');
      }

      if (!_isNum && _typeof(obj[nn]) !== 'object') {
        console.error('FormObj: can not setForm with diff type');
      }
    }

    newName += "['".concat(nn, "']");
  });
}

var FormObj =
/*#__PURE__*/
function (_Store) {
  _inherits(FormObj, _Store);

  function FormObj(context, onChange) {
    var _this;

    _classCallCheck(this, FormObj);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormObj).call(this));
    _this.context = void 0;
    _this.onChange = void 0;
    _this.items = {};
    _this.context = context;
    _this.onChange = onChange;
    return _this;
  }

  _createClass(FormObj, [{
    key: "addField",
    value: function addField(name, context) {
      _get(_getPrototypeOf(FormObj.prototype), "addField", this).call(this, name);

      this.items[name] = context;
    }
  }, {
    key: "removeField",
    value: function removeField(name) {
      _get(_getPrototypeOf(FormObj.prototype), "removeField", this).call(this, name);

      delete this.items[name];
    }
  }, {
    key: "setValues",
    value: function setValues(val) {
      _get(_getPrototypeOf(FormObj.prototype), "setValues", this).call(this, val);

      this.forceUpdateAll();
    }
  }, {
    key: "resetFields",
    value: function resetFields(names) {
      _get(_getPrototypeOf(FormObj.prototype), "resetFields", this).call(this, names);

      this.forceUpdateAll();
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      var value = _get(_getPrototypeOf(FormObj.prototype), "getValue", this).call(this, name);

      if ((value === undefined || value === null) && this.getOption(name, 'hasChange') !== true) {
        return this.getOption(name, 'initValue');
      }

      return value;
    }
  }, {
    key: "getValues",
    value: function getValues(names) {
      var out = {};
      var values = this.getFieldValues(names);
      (0, _objectUtils.getNames)(values).forEach(function (name) {
        var nt = name.trim();

        if (nt.charAt(0) === '[' && nt.charAt(nt.length - 1) === ']') {
          nt = nt.substring(1, nt.length - 1);
          nt.split(',').map(function (s, i) {
            setObjValues(out, s.trim(), values[name] && values[name][i]);
          });
        } else if (nt.charAt(0) === '{' && nt.charAt(nt.length - 1) === '}') {
          nt = nt.substring(1, nt.length - 1);
          nt.split(',').map(function (s) {
            setObjValues(out, s.trim(), values[name] && values[name][s]);
          });
        } else {
          setObjValues(out, nt, values[name]);
        }
      });
      return out;
    }
  }, {
    key: "bindField",
    value: function bindField(context, name, rules) {
      var _this2 = this;

      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      this.setOption(name, _objectSpread({
        rules: rules
      }, options));
      return function (input) {
        var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _nodeProps$props = nodeProps.props,
            props = _nodeProps$props === void 0 ? {} : _nodeProps$props,
            _nodeProps$on = nodeProps.on,
            on = _nodeProps$on === void 0 ? {} : _nodeProps$on;
        var trigger = options.trigger || 'change';
        var initListeners = (0, _vnode.getVNodeListeners)(input);

        var newOn = _objectSpread({}, on);

        newOn[trigger] = function () {
          if (on[trigger]) {
            // @ts-ignore
            on[trigger].apply(on, arguments);
          }

          _this2.addListenerOn(name, options.getValueFromEvent).apply(void 0, arguments);

          context.$forceUpdate();
        };

        (0, _objectUtils.getNames)(newOn).forEach(function (key) {
          if (initListeners && initListeners.hasOwnProperty(key)) {
            var initAction = newOn[key];

            newOn[key] = function () {
              // @ts-ignore
              initListeners[key].apply(initListeners, arguments); // @ts-ignore

              initAction.apply(void 0, arguments);
            };
          }
        });

        var value = _this2.getValue(name);

        if (options.normalize) {
          value = options.normalize(value);
        }

        props.value = value;
        return (0, _vnode.cloneElement)(input, _objectSpread({}, nodeProps, {
          on: newOn,
          props: props
        }));
      };
    }
  }, {
    key: "validateFields",
    value: function validateFields(func, names) {
      var _this3 = this;

      var values = this.getFieldValues(names);
      var errors = {};
      (0, _objectUtils.getNames)(values).forEach(function (name) {
        var rules = _this3.getOption(name, 'rules');

        var errs = validateRules(values[name], rules, 'submit');

        _this3.setOption(name, {
          errors: errs
        });

        if (errs.length) {
          errors[name] = errs;
        }
      });
      this.forceUpdateAll();
      func(this.getValues(names), (0, _objectUtils.getNames)(errors).length ? errors : undefined);
    }
  }, {
    key: "setFields",
    value: function setFields(val) {
      var _this4 = this;

      (0, _objectUtils.getNames)(val).forEach(function (name) {
        var setValues = _this4.setValues,
            getMeta = _this4.getMeta,
            setMeta = _this4.setMeta;
        setValues({
          name: val[name].value
        });
        var meta = getMeta(name);
        meta.errors = val[name].errors;
        setMeta(name, meta);
      });
    }
  }, {
    key: "getError",
    value: function getError(name) {
      return this.getOption(name, 'errors');
    }
  }, {
    key: "getErrors",
    value: function getErrors(names) {
      var metas = this.getMetas(names);
      var out = {};
      (0, _objectUtils.getNames)(metas).forEach(function (name) {
        var errors = metas[name].errors;

        if (errors) {
          out[name] = errors;
        }
      });
      return (0, _objectUtils.getNames)(out).length ? out : undefined;
    }
  }, {
    key: "getFieldValues",
    value: function getFieldValues(names) {
      var _this5 = this;

      var out = {};
      var ns = names;

      if (!ns) {
        ns = (0, _objectUtils.getNames)(_get(_getPrototypeOf(FormObj.prototype), "getValues", this).call(this));
      }

      ns.forEach(function (name) {
        return out[name] = _this5.getValue(name);
      });
      return out;
    }
  }, {
    key: "setOption",
    value: function setOption(name, option) {
      var meta = this.getMeta(name);
      (0, _objectUtils.getNames)(option).forEach(function (key) {
        meta[key] = option[key];
      });
      this.setMeta(name, meta);
    }
  }, {
    key: "getOption",
    value: function getOption(name, key) {
      var meta = this.getMeta(name);
      return meta && meta[key];
    }
  }, {
    key: "addListenerOn",
    value: function addListenerOn(name, getValueFromEvent) {
      var _this6 = this;

      return function (e) {
        var value = e;

        if (getValueFromEvent) {
          value = getValueFromEvent(e);
        } else if (e && e.target) {
          value = e.target.checked || e.target.value;
        }

        _get(_getPrototypeOf(FormObj.prototype), "setValues", _this6).call(_this6, _defineProperty({}, name, value));

        var errs = validateRules(value, _this6.getOption(name, 'rules'), 'change');

        _this6.setOption(name, {
          hasChange: true,
          errors: errs
        });

        _this6.onChange(_defineProperty({}, name, value));
      };
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      this.context.$forceUpdate();
    }
  }, {
    key: "forceUpdateAll",
    value: function forceUpdateAll() {
      this.forceUpdate();
      var items = this.items;
      Object.keys(items).forEach(function (c) {
        if (items[c] && items[c].$forceUpdate) {
          items[c].$forceUpdate();
        }
      });
    }
  }]);

  return FormObj;
}(_createStore.Store);

exports.FormObj = FormObj;

function createFormObj(context, onChange) {
  return Object.freeze(new FormObj(context, onChange));
}