"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sortSubjectAlphabetically = function sortSubjectAlphabetically(subject) {
  return subject.split('').sort(function (a, b) {
    return a.localeCompare(b);
  }).join('');
};

var filterMatchingAnagrams = function filterMatchingAnagrams(originalSubject, match, dictionary) {
  originalSubject = originalSubject.toLowerCase();
  match = match.toLowerCase();
  return dictionary.filter(function (subject) {
    subject = subject.toLowerCase();
    return originalSubject != subject && sortSubjectAlphabetically(subject) == match;
  });
};

var Anagram =
/*#__PURE__*/
function () {
  function Anagram(subject, dictionary) {
    _classCallCheck(this, Anagram);

    this.subject = subject;
    this.dictionary = dictionary;
  }

  _createClass(Anagram, [{
    key: "getAnagrams",
    value: function getAnagrams() {
      var alphaSubject = sortSubjectAlphabetically(this.subject);
      return filterMatchingAnagrams(this.subject, alphaSubject, this.dictionary);
    }
  }]);

  return Anagram;
}();

exports.default = Anagram;