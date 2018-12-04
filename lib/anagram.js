"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sortWordAlphabetically = function sortWordAlphabetically(word) {
  return word.split('').sort(function (a, b) {
    return a.localeCompare(b);
  }).join('');
};

var filterMatchingAnagrams = function filterMatchingAnagrams(originalWord, match, dictionary) {
  originalWord = originalWord.toLowerCase();
  match = match.toLowerCase();
  return dictionary.filter(function (word) {
    word = word.toLowerCase();
    return originalWord != word && sortWordAlphabetically(word) == match;
  });
};

var Anagram =
/*#__PURE__*/
function () {
  function Anagram(word, dictionary) {
    _classCallCheck(this, Anagram);

    this.word = word;
    this.dictionary = dictionary;
  }

  _createClass(Anagram, [{
    key: "getAnagrams",
    value: function getAnagrams() {
      var alphaWord = sortWordAlphabetically(this.word);
      return filterMatchingAnagrams(this.word, alphaWord, this.dictionary);
    }
  }]);

  return Anagram;
}();

exports.default = Anagram;