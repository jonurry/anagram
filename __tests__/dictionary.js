import Dictionary from '../src/dictionary.js';

describe('dictionary', () => {
  test('it should raise an error if the file does not exist', () => {
    const fileName = 'someFile.txt';
    expect(() => {
      new Dictionary(fileName);
    }).toThrowError(`file does not exist (${fileName})`);
  });
});
