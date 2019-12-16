"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vueTsxSupport = require("vue-tsx-support");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

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

var Item = (_dec = (0, _vuePropertyDecorator.Inject)(), _dec2 = (0, _vuePropertyDecorator.Prop)(), _dec3 = (0, _vuePropertyDecorator.Prop)(), _dec4 = (0, _vuePropertyDecorator.Prop)(), _dec5 = (0, _vuePropertyDecorator.Prop)(), _dec6 = (0, _vuePropertyDecorator.Prop)(), (0, _vuePropertyDecorator.Component)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_TsxComponent) {
  _inherits(Item, _TsxComponent);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "form", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "name", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "inputProps", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "rules", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "options", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "context", _descriptor6, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(Item, [{
    key: "created",
    value: function created() {
      this.form.addField(this.name, this.context);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      if (this.options && this.options.preserve) {
        return;
      }

      this.form.removeField(this.name);
    }
  }, {
    key: "render",
    value: function render() {
      var name = this.name,
          inputProps = this.inputProps,
          rules = this.rules,
          options = this.options,
          form = this.form,
          context = this.context; // @ts-ignore

      var input = this.$slots.default[0];
      return form.bindField(context, name, rules, options)(input, inputProps);
    }
  }]);

  return Item;
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
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inputProps", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rules", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "options", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "context", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Item;