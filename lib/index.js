"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeEnum = function makeEnum() {
    for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
        vals[_key] = arguments[_key];
    }

    return vals.reduce(function (obj, v) {
        obj[v] = v;
        return obj;
    }, {
        contains: function contains(s) {
            return this[s] ? true : false;
        }
    });
};

exports.default = makeEnum;