const fs = require('fs').promises;
import map from 'lodash/map';
import intCode from './intCode';

(async () => {
  try {
    console.log('Day 2 Problem 2');

    const inputText = await fs.readFile('./2/input.txt', 'utf8');
    let inputs = inputText.split(',');
    inputs = map(inputs, (str: string) => {
      return +str;
    });

    // inputs[1]=12;
    // inputs[2]=2;

    // const inputs = [1,9,10,3,2,3,11,0,99,30,40,50];

    let noun = 0;
    let verb = 0;
    let found = false;

    for(noun=0; noun < inputs.length; noun++) {
      for(verb=0; verb < inputs.length; verb++) {
        await fs.appendFile('./2/output.txt', `for noun=${noun} and verb=${verb} | `);
        try {
          inputs[1] = noun;
          inputs[2] = verb;
          
          console.log(`trying ${noun},${verb}`);
          const output = await intCode(inputs, './2/output.txt');
          let total = output[0];

          await fs.appendFile('./2/output.txt', ` | result=${total}\n`);
          if(total == 19690720) {
            found = true;
            break;
          }
        }
        catch(e) {
          await fs.appendFile('./2/output.txt', ` | no result\n`);
        }
      }

      if(found) {
        break;
      }
    }
    
    console.log(100*noun + verb);
  }
  catch(e) {
    console.log(e);
  }
})();