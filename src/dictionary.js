import fs from 'fs';

export default class Dictionary {
  constructor(file) {
    if (fs.existsSync(file) === false) {
      throw `file does not exist (${file})`;
    }
    this.dictionary = fs
      .readFileSync(file)
      .toString()
      .split('\n');
  }

  getDictionary() {
    return this.dictionary;
  }
}
