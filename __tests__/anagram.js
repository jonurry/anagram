import Anagram from '../src/anagram.js';

describe('anagram', () => {
  let anagram;
  let subject;
  let dictionary = ['Silent', 'Banana', 'Listen'];

  describe('#constructor', () => {
    beforeEach(() => {
      subject = 'Silent';
      anagram = new Anagram(subject, dictionary);
    });

    test('first parameter should be a word', () => {
      expect(anagram.subject).toEqual(subject);
    });

    test('second parameter should be an array of words (dictionary)', () => {
      expect(anagram.dictionary).toEqual(dictionary);
    });
  });

  describe('#getAnagrams', () => {
    test('it should return anagrams of the subject (same case)', () => {
      anagram = new Anagram('Silent', dictionary);
      expect(anagram.getAnagrams()).toEqual(['Listen']);
    });

    test('it should return anagrams of the subject (different case)', () => {
      anagram = new Anagram('lIsTeN', dictionary.concat(['Tinsel', 'Enlist']));
      expect(anagram.getAnagrams()).toEqual(['Silent', 'Tinsel', 'Enlist']);
    });

    test('it should return an empty array when no anagrams are found', () => {
      anagram = new Anagram('Global', dictionary);
      expect(anagram.getAnagrams()).toEqual([]);
    });
  });
});
