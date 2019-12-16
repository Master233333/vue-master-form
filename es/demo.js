"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuePropertyDecorator = require("vue-property-decorator");

require("vue-tsx-support/enable-check");

var _form = require("./form");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App = (0, _vuePropertyDecorator.Component)(_class = (_temp =
/*#__PURE__*/
function (_VueComponent) {
  _inherits(App, _VueComponent);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.form = void 0;
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var items = [{
        name: 'test1',
        title: 'test1',
        required: true,
        inputProps: {
          attrs: {
            placeholder: 'test',
            addonAfter: 'aaa',
            allowClear: true,
            prefix: 'ppp'
          }
        }
      }, {
        name: 'test2',
        title: 'test2',
        rules: [{
          type: 'max',
          value: 5
        }],
        extra: 'test'
      }];
      return h("div", [h("div", [h("h3", ["test for base form"]), h(_form.Form, {
        "on": {
          "form": function form(f) {
            return _this2.form = f;
          }
        },
        "attrs": {
          "items": items,
          "layout": "horizontal"
        }
      }, [h("button", {
        "attrs": {
          "type": "submit"
        }
      }, ["sub"])]), h("button", {
        "on": {
          "click": function click() {
            return _this2.form.resetFields();
          }
        }
      }, ["reset"]), h("button", {
        "on": {
          "click": function click() {
            return _this2.form.setValues({
              test1: '321'
            });
          }
        }
      }, ["set"]), h("button", {
        "on": {
          "click": function click() {
            return _this2.form.validateFields(function (val, errs) {});
          }
        }
      }, ["va"])])]);
    }
  }]);

  return App;
}(_vuePropertyDecorator.Vue), _temp)) || _class;

_vue.default.config.productionTip = false;
new _vue.default({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');