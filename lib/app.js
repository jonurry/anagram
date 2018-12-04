"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _anagram = _interopRequireDefault(require("./anagram.js"));

var _dictionary = _interopRequireDefault(require("./dictionary.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var args = process.argv.slice(2);

var checkArguments = function checkArguments(args) {
  if (args.length !== 2) {
    throw "expecting 2 arguments, was given ".concat(args.length);
  }

  if (args[0].length === 0) {
    throw 'first argument must be a word';
  }

  if (args[1].length === 0) {
    throw 'second argument must be a file name';
  }
};

var CLI = function CLI() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  _classCallCheck(this, CLI);

  checkArguments(args);
  this.subject = args[0];
  this.fileName = args[1];
  var dictionary = new _dictionary.default(this.fileName);
  var anagramFinder = new _anagram.default(this.subject, dictionary.getWords());
  var anagrams = anagramFinder.getAnagrams();
  console.log('');
  console.log("The anagrams of ".concat(this.subject, " are:"));

  if (anagrams.length > 0) {
    console.log(anagramFinder.getAnagrams().join('\n'));
  } else {
    console.log('none :(');
  }

  console.log('');
};

exports.default = CLI;

if (process.env.NODE_ENV !== 'test') {
  var cli = new CLI(args);
}