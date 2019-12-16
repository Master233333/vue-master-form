"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNames = getNames;

function getNames(obj) {
  if (!obj) {
    return [];
  }

  return Object.keys(obj);
}