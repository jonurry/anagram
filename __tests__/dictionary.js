import Dictionary from '../src/dictionary.js';
import path from 'path';

describe('dictionary', () => {
  test('it should raise an error if the file does not exist', () => {
    const fileName = 'someFile.txt';
    expect(() => {
      new Dictionary(fileName);
    }).toThrowError(`file does not exist (${fileName})`);
  });

  test('it should create a dictionary if the file exists', () => {
    const fileName = path.join(__dirname, '..', 'dictionaries', 'sample.txt');
    const dictionary = new Dictionary(fileName);
    expect(dictionary.getWords().length).toBeGreaterThan(0);
  });
});
