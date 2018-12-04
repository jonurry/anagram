const sortWordAlphabetically = word => {
  return word
    .split('')
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join('');
};

const filterMatchingAnagrams = (originalWord, match, dictionary) => {
  originalWord = originalWord.toLowerCase();
  match = match.toLowerCase();
  return dictionary.filter(word => {
    word = word.toLowerCase();
    return originalWord != word && sortWordAlphabetically(word) == match;
  });
};

export default class Anagram {
  constructor(word, dictionary) {
    this.word = word;
    this.dictionary = dictionary;
  }

  getAnagrams() {
    const alphaWord = sortWordAlphabetically(this.word);
    return filterMatchingAnagrams(this.word, alphaWord, this.dictionary);
  }
}
