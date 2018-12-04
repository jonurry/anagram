//import Anagram from './anagram.js';

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
  }
}

if (process.env.NODE_ENV !== 'test') {
  const cli = new CLI(args);
}
