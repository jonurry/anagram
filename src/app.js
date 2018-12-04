//import Anagram from './anagram.js';

const args = process.argv.slice(2);

export default class CLI {
  constructor(args = []) {
    if (args.length !== 2) {
      throw `expecting 2 arguments, was given ${args.length}`;
    }

    if (args[0].length === 0) {
      throw 'first argument must be a word';
    }
  }
}

if (process.env.NODE_ENV !== 'test') {
  const cli = new CLI(args);
}
