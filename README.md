# anagram

Given a word, what other words are an anagram of that word?

An anagram is a word or phrase formed from another by rearranging its letters, e.g. SILENT is an anagram of LISTEN.

## Requirements

Write a command line app in the language of your choice which implements the following user story:

```
As an investigator,
I would like to check whether a word is an anagram of any of the words in a given list
so that I can solve the mystery of the crime, given the clues left behind.
```

## Acceptance Criteria

The following are accepted as input:

1. Word to check (known as the subject)
2. A file containing the list of words to check against

The output should be the list of words that are anagrams of the subject

## Approach

I followed a test-driven development (TDD) approach to this challenge using the red, green, refactor approach. I chose to implement the code using `node.js`. I wrote the code using ES6 syntax including ES modules and classes. This meant that the code had to be transpiled using `Babel` so that node could run it from the command line.

The testing framework that I chose is `Jest`. It's really powerful and I enjoy using it. Tests are run in watch mode with coverage reports generated. Current coverage across all files is 95%.

I assumed that the subject would be a string and that the file name would also be a string. I also assumed that the dictionary file would be a text file with one word per line. I implemented a few checks to make sure that the command line arguments were as expected. Errors are thrown with useful messages if the arguments don't make sense.

When finding anagrams, the algorithm is case-insensitive so searching for anagrams of `silent`, `SILENT` or `sIlEnT` will return the same results.

## Installation

Clone the repository:

`git clone git@github.com:jonurry/anagram.git`

Change to the directory:

`cd anagram`

Install dependencies:

`npm install`

If you need to transpile the ES5 compliant after making source code changes:

`npm run build`

## Test

To test the application:

`npm test`

## To Use Application

The application takes two command line arguments, the subject (word) for which anagrams need to be found, and the path of a dictionary file:

`node path/to/app subject dictionary`

e.g.

`node ./lib/app.js silent ./dictionaries/sample.txt`

This will display the anagrams of 'silent'.

```
The anagrams of silent are:
Listen
Tinsel
Enlist
```
