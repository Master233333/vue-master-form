"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vueTsxSupport = require("vue-tsx-support");

var _item = _interopRequireDefault(require("./core/item"));

var _config = _interopRequireDefault(require("./config"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var FormItem = (_dec = (0, _vuePropertyDecorator.Inject)(), _dec2 = (0, _vuePropertyDecorator.Prop)(), _dec3 = (0, _vuePropertyDecorator.Prop)(), _dec4 = (0, _vuePropertyDecorator.Prop)(), _dec5 = (0, _vuePropertyDecorator.Prop)(), _dec6 = (0, _vuePropertyDecorator.Prop)(), _dec7 = (0, _vuePropertyDecorator.Prop)(), _dec8 = (0, _vuePropertyDecorator.Prop)(), _dec9 = (0, _vuePropertyDecorator.Prop)(), _dec10 = (0, _vuePropertyDecorator.Prop)(), _dec11 = (0, _vuePropertyDecorator.Prop)(), _dec12 = (0, _vuePropertyDecorator.Prop)(), _dec13 = (0, _vuePropertyDecorator.Prop)(), _dec14 = (0, _vuePropertyDecorator.Prop)(), (0, _vuePropertyDecorator.Component)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(FormItem, _TsxComponent);

  function FormItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "form", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "name", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "type", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "inputProps", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "rules", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "options", _descriptor6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "title", _descriptor7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "extra", _descriptor8, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "text", _descriptor9, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "editable", _descriptor10, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "required", _descriptor11, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "bindValue", _descriptor12, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "initData", _descriptor13, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "inputData", _descriptor14, _assertThisInitialized(_this));

    _this.getInput = _config.default.getInputs(_this.$createElement);
    return _this;
  }

  _createClass(FormItem, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          type = this.type,
          inputProps = this.inputProps,
          rules = this.rules,
          options = this.options,
          title = this.title,
          extra = this.extra,
          text = this.text,
          editable = this.editable,
          required = this.required,
          bindValue = this.bindValue,
          initData = this.initData,
          getInput = this.getInput,
          inputData = this.inputData,
          form = this.form;
      var input = this.$slots.default || getInput(type || 'text', inputData);
      var data = initData && name && initData[name];
      var rl = rules || [];
      var errorMsg;

      if (required) {
        var f = rl.find(function (r) {
          return r.type === 'required';
        });

        if (!f) {
          rl.push({
            type: 'required'
          });
        }
      }

      var opt = options || {};

      if (data && !opt.initValue) {
        opt = _objectSpread({}, opt, {
          initValue: data
        });
      }

      if (editable === false) {
        if (text && typeof text === 'string') {
          input = text;
        } else if (text) {
          input = text(data, initData);
        } else {
          input = data;
        }
      } else if (input && bindValue !== false && name) {
        input = h(_item.default, {
          "attrs": {
            "name": name,
            "context": this,
            "rules": rl,
            "options": opt,
            "inputProps": inputProps
          }
        }, [input]);
        var errors = this.form.getError(name);

        if (errors && errors.length) {
          errorMsg = errors[0].message;
        }
      } // if (typeof errorMsg === 'string') {
      //   // @ts-ignore
      //   errorMsg = errorMsg.replace(/%t/, title || '');
      // }
      // @ts-ignore


      return h("div", {
        "class": {
          'mh-form-item': true,
          'mh-form-item-help': errorMsg || extra,
          'mh-form-item-editable': editable === false,
          'has-error': errorMsg
        },
        "attrs": {
          "for": name
        }
      }, [h("div", {
        "class": {
          'mh-form-item-label': true,
          'mh-form-item-label-required': required && editable !== false
        }
      }, [title && h("label", [title])]), h("div", {
        "class": "mh-form-item-control-wrapper"
      }, [h("div", {
        "class": "mh-form-item-control"
      }, [input]), errorMsg && h("div", {
        "class": "mh-form-item-error"
      }, [errorMsg.replace(/%t/, title || '')]), extra && h("div", {
        "class": "mh-form-item-extra"
      }, [extra])])]);
    }
  }]);

  return FormItem;
}(_vueTsxSupport.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "form", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "inputProps", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rules", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "options", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "extra", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "editable", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "required", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bindValue", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "initData", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "inputData", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = FormItem;