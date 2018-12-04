import CLI from '../src/app.js';

describe('Command Line Interface (CLI)', () => {
  describe('it should require 2 arguments', () => {
    test('no arguments given', () => {
      expect(() => {
        new CLI();
      }).toThrowError('expecting 2 arguments, was given 0');
    });
    test('one arguments given', () => {
      expect(() => {
        new CLI(['']);
      }).toThrowError('expecting 2 arguments, was given 1');
    });
    test('three arguments given', () => {
      expect(() => {
        new CLI(['', '', '']);
      }).toThrowError('expecting 2 arguments, was given 3');
    });
  });
});
