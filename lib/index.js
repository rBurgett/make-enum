'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeEnum = function makeEnum() {
    for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
        vals[_key] = arguments[_key];
    }

    var initialObj = Object.create({
        contains: function contains(v) {
            return this[v] ? true : false;
        },
        toList: function toList() {
            return Object.keys(this).filter(function (k) {
                return k !== 'contains' && k !== 'toList';
            });
        }
    });

    return vals.reduce(function (obj, v) {
        obj[v] = v;
        return obj;
    }, initialObj);
};

exports.default = makeEnum;