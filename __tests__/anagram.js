import Anagram from '../src/anagram.js';

describe('anagram', () => {
  let anagram;
  let word = 'SiLeNt';
  let dictionary = ['Silent', 'Banana', 'Listen'];

  beforeEach(() => {
    anagram = new Anagram(word, dictionary);
  });

  describe('#constructor - should take two arguments', () => {
    test('first parameter should be a word', () => {
      expect(anagram.word).toEqual(word);
    });

    test('second parameter should be an array of words (dictionary)', () => {
      expect(anagram.dictionary).toEqual(dictionary);
    });
  });

  describe('#getAnagrams - it should return anagrams of the word', () => {
    test('it should return anagrams of the word', () => {
      expect(anagram.getAnagrams()).toEqual(['Listen']);
    });
  });
});
