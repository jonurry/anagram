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
  describe('#constructor', () => {
    test('first argument should be a word', () => {
      expect(() => {
        new CLI(['', '']);
      }).toThrowError('first argument must be a word');
    });

    test('second argument should be an array', () => {
      expect(() => {
        new CLI(['word', '']);
      }).toThrowError('second argument must be a file name');
    });
  });
});
