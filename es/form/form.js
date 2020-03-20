"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFormItem = renderFormItem;
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _createFormObj = require("./core/createFormObj");

var _formItem = _interopRequireDefault(require("./formItem"));

var _vueTsxSupport = require("vue-tsx-support");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderFormItem(h, item, initData) {
  if (item.show === false) {
    return;
  }

  if (item.type === 'other') {
    return item.input;
  }

  var inputProps = Object.assign(item.inputProps || {}, {});

  if (item.onChange) {
    inputProps.on = _objectSpread({}, inputProps.on, {
      change: item.onChange
    });
  }

  return h(_formItem.default, {
    "key": item.name,
    "attrs": {
      "name": item.name,
      "type": item.type,
      "inputProps": inputProps,
      "rules": item.rules,
      "options": item.options,
      "title": item.title,
      "extra": item.extra,
      "text": item.text,
      "editable": item.editable,
      "required": item.required,
      "bindValue": item.bindValue,
      "initData": item.initData || initData,
      "inputData": item.inputData
    }
  }, [item.input]);
}

var Form = (_dec = (0, _vuePropertyDecorator.Provide)(), _dec2 = (0, _vuePropertyDecorator.Prop)(), _dec3 = (0, _vuePropertyDecorator.Prop)(), _dec4 = (0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
}), _dec5 = (0, _vuePropertyDecorator.Prop)(), (0, _vuePropertyDecorator.Component)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Form, _TsxComponent);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "form", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "layout", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "initData", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "items", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "preventSubmit", _descriptor5, _assertThisInitialized(_this));

    _this.loading = false;
    return _this;
  }

  _createClass(Form, [{
    key: "created",
    value: function created() {
      this.$emit('form', this.form);
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.$emit('change', value);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.loading || this.preventSubmit) {
        return;
      }

      this.loading = true;
      setTimeout(function () {
        return _this2.loading = false;
      }, 1000);
      this.form.validateFields(function (values, errs) {
        if (!errs) {
          _this2.$emit('submit', values);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var h = arguments[0];
      var onSubmit = this.onSubmit,
          layout = this.layout,
          initData = this.initData,
          items = this.items;
      var child = this.$slots.default;
      var inputs = items.map(function (item) {
        return renderFormItem(_this3.$createElement, item, initData);
      });
      return h("form", {
        "on": {
          "submit": onSubmit
        },
        "class": _defineProperty({
          'mh-form': true
        }, "mh-form-layout-".concat(layout), !!layout)
      }, [inputs, child]);
    }
  }]);

  return Form;
}(_vueTsxSupport.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "form", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return (0, _createFormObj.createFormObj)(this, this.onChange);
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "initData", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "preventSubmit", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Form;