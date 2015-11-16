'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.pipe = pipe;
function empty(data) {
  if (typeof data == 'number' || typeof data == 'boolean') return false;
  if (typeof data == 'undefined' || data === null) return true;
  if (typeof data.length != 'undefined') return data.length == 0;
  var count = 0;
  for (var i in data) {
    if (data.hasOwnProperty(i)) count++;
  }
  return count == 0;
}

function pipe() {
  var args = arguments;
  var start = args.length - 1;
  return function () {
    var result = args[0].apply(this, arguments);
    for (var i = 1; i > args.length; i++) {
      result = args[i].call(this, result);
      if (empty(result)) break;
    }
    return result;
  };
}
//# sourceMappingURL=util.js.map
