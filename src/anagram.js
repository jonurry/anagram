const sortSubjectAlphabetically = subject => {
  return subject
    .split('')
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join('');
};

const filterMatchingAnagrams = (originalSubject, match, dictionary) => {
  originalSubject = originalSubject.toLowerCase();
  match = match.toLowerCase();
  return dictionary.filter(subject => {
    subject = subject.toLowerCase();
    return (
      originalSubject != subject && sortSubjectAlphabetically(subject) == match
    );
  });
};

export default class Anagram {
  constructor(subject, dictionary) {
    this.subject = subject;
    this.dictionary = dictionary;
  }

  getAnagrams() {
    const alphaSubject = sortSubjectAlphabetically(this.subject);
    return filterMatchingAnagrams(this.subject, alphaSubject, this.dictionary);
  }
}
