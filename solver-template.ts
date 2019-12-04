const fs = require('fs').promises;
import forEach from 'lodash/forEach';
import floor from 'lodash/floor';

(async () => {
  try {
    console.log('Day 1 Problem 1');

    const inputText = await fs.readFile('./1/input.txt', 'utf8');
    const inputs = inputText.split('\n');
    
    forEach(inputs, (input: number, index: number) => {
      console.log(`${index}: ${input}`);
    });
  }
  catch(e) {
    console.log(e);
  }
})();