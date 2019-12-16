"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneVNode = cloneVNode;
exports.cloneVNodes = cloneVNodes;
exports.cloneElement = cloneElement;
exports.getVNodeListeners = getVNodeListeners;

var _utils = require("./utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function cloneVNode(vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var data = vnode.data;
  var listeners = {};

  if (componentOptions && componentOptions.listeners) {
    listeners = _objectSpread({}, componentOptions.listeners);
  }

  var on = {};

  if (data && data.on) {
    on = _objectSpread({}, data.on);
  }

  var cloned = new vnode.constructor(vnode.tag, data ? _objectSpread({}, data, {
    on: on
  }) : data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions ? _objectSpread({}, componentOptions, {
    listeners: listeners
  }) : componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;

  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }

    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }

  return cloned;
}

function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);

  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }

  return res;
}

function cloneElement(n) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var deep = arguments.length > 2 ? arguments[2] : undefined;
  var node = cloneVNode(n, deep);
  var _nodeProps$props = nodeProps.props,
      props = _nodeProps$props === void 0 ? {} : _nodeProps$props,
      key = nodeProps.key,
      _nodeProps$on = nodeProps.on,
      on = _nodeProps$on === void 0 ? {} : _nodeProps$on,
      children = nodeProps.children,
      _nodeProps$directives = nodeProps.directives,
      directives = _nodeProps$directives === void 0 ? [] : _nodeProps$directives;
  var data = node.data || {};
  var cls = {};
  var style = {};
  var _nodeProps$attrs = nodeProps.attrs,
      attrs = _nodeProps$attrs === void 0 ? {} : _nodeProps$attrs,
      ref = nodeProps.ref,
      _nodeProps$domProps = nodeProps.domProps,
      domProps = _nodeProps$domProps === void 0 ? {} : _nodeProps$domProps,
      _nodeProps$style = nodeProps.style,
      tempStyle = _nodeProps$style === void 0 ? {} : _nodeProps$style,
      _nodeProps$class = nodeProps.class,
      tempCls = _nodeProps$class === void 0 ? {} : _nodeProps$class,
      _nodeProps$scopedSlot = nodeProps.scopedSlots,
      scopedSlots = _nodeProps$scopedSlot === void 0 ? {} : _nodeProps$scopedSlot;

  if (typeof data.style === 'string') {
    style = (0, _utils.parseStyleText)(data.style);
  } else {
    style = _objectSpread({}, data.style, {}, style);
  }

  if (typeof tempStyle === 'string') {
    style = _objectSpread({}, style, {}, (0, _utils.parseStyleText)(tempStyle));
  } else {
    style = _objectSpread({}, style, {}, tempStyle);
  }

  if (typeof data.class === 'string' && data.class.trim() !== '') {
    data.class.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(data.class)) {
    data.class.forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = _objectSpread({}, data.class, {}, cls);
  }

  if (typeof tempCls === 'string' && tempCls.trim() !== '') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = _objectSpread({}, cls, {}, tempCls);
  }

  node.data = Object.assign({}, data, {
    style: style,
    attrs: _objectSpread({}, data.attrs, {}, attrs),
    class: cls,
    domProps: _objectSpread({}, data.domProps, {}, domProps),
    scopedSlots: _objectSpread({}, data.scopedSlots, {}, scopedSlots),
    directives: [].concat(_toConsumableArray(data.directives || []), _toConsumableArray(directives))
  });

  if (node.componentOptions) {
    node.componentOptions.propsData = node.componentOptions.propsData || {};
    node.componentOptions.listeners = node.componentOptions.listeners || {};
    node.componentOptions.propsData = _objectSpread({}, node.componentOptions.propsData, {}, props);
    node.componentOptions.listeners = _objectSpread({}, node.componentOptions.listeners, {}, on);

    if (children) {
      node.componentOptions.children = children;
    }
  } else {
    node.data.on = _objectSpread({}, node.data.on || {}, {}, on);
  }

  if (key !== undefined) {
    node.key = key;
    node.data.key = key;
  }

  if (typeof ref === 'string') {
    node.data.ref = ref;
  }

  return node;
}

function getVNodeListeners(n) {
  return n.componentOptions && n.componentOptions.listeners;
}