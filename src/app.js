import Anagram from './anagram.js';
import Dictionary from './dictionary.js';

const args = process.argv.slice(2);

const checkArguments = args => {
  if (args.length !== 2) {
    throw `expecting 2 arguments, was given ${args.length}`;
  }

  if (args[0].length === 0) {
    throw 'first argument must be a word';
  }

  if (args[1].length === 0) {
    throw 'second argument must be a file name';
  }
};

export default class CLI {
  constructor(args = []) {
    checkArguments(args);

    this.subject = args[0];
    this.fileName = args[1];

    const dictionary = new Dictionary(this.fileName);
    const anagramFinder = new Anagram(this.subject, dictionary.getWords());
    const anagrams = anagramFinder.getAnagrams();

    console.log('');
    console.log(`The anagrams of ${this.subject} are:`);
    if (anagrams.length > 0) {
      console.log(anagramFinder.getAnagrams().join('\n'));
    } else {
      console.log('none :(');
    }
    console.log('');
  }
}

if (process.env.NODE_ENV !== 'test') {
  const cli = new CLI(args);
}
