const fs = require('fs').promises;
import join from 'lodash/join';
import map from 'lodash/map';
import intCode from './intCode';

(async () => {
  try {
    console.log('Day 2 Problem 1');

    const inputText = await fs.readFile('./2/input.txt', 'utf8');
    let inputs = inputText.split(',');
    inputs = map(inputs, (str: string) => {
      return +str;
    });

    inputs[1]=12;
    inputs[2]=2;

    // const inputs = [1,9,10,3,2,3,11,0,99,30,40,50];
    
    const output = await intCode(inputs);
    const strOutput = join(output, ',');
    console.log(strOutput);
  }
  catch(e) {
    console.log(e);
  }
})();