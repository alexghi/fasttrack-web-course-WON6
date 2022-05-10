"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Teacher = void 0;

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.define-property.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var test = function test(param) {
  console.log(param);
};

var Teacher = /*#__PURE__*/function () {
  function Teacher(name) {
    _classCallCheck(this, Teacher);

    this.name = name;
  }

  _createClass(Teacher, [{
    key: "getTeacherName",
    value: function getTeacherName() {
      return "Mr. ".concat(this.name);
    }
  }]);

  return Teacher;
}();

exports.Teacher = Teacher;
var _default = test;
exports["default"] = _default;