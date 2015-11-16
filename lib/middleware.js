'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Middelware = (function () {
  function Middelware() {
    _classCallCheck(this, Middelware);

    this._middleware = [];
  }

  _createClass(Middelware, [{
    key: 'map',
    value: function map(fn) {
      this._middleware.push(fn);
      return this;
    }
  }, {
    key: 'fork',
    value: function fork(fn) {
      this._middleware.push(function (data) {
        setTimeout(function () {
          return fn(data);
        });
        return data;
      });
      return this;
    }
  }, {
    key: 'emit',
    value: function emit() {
      if (this._middleware.length > 0) return _util.pipe.apply(undefined, _toConsumableArray(this._middleware));
      return function (x) {
        return x;
      };
    }
  }, {
    key: 'subscribe',
    value: function subscribe() {
      if (this._middleware.length > 0) return _util.pipe.apply(undefined, _toConsumableArray(this._middleware));
      return function (x) {
        return x;
      };
    }
  }]);

  return Middelware;
})();

exports.default = Middelware;
//# sourceMappingURL=middleware.js.map
