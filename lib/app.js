"use strict";

var _anagram = _interopRequireDefault(require("./anagram.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2);

if (args.length !== 2) {
  throw "expecting 2 arguments, was given ".concat(args.length);
}

if (args[0].length === 0) {
  throw 'first argument must be a word';
}