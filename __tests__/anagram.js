import Anagram from '../src/anagram.js';

describe('anagram', () => {
  describe('it should take two arguments', () => {
    let anagram;
    let word = 'SILENT';
    let dictionary = ['Silent', 'Banana', 'Listen'];

    beforeEach(() => {
      anagram = new Anagram(word, dictionary);
    });

    test('first parameter should be a word', () => {
      expect(anagram.word).toEqual(word);
    });

    test('second parameter should be an array of words (dictionary)', () => {
      expect(anagram.dictionary).toEqual(dictionary);
    });
  });
});
