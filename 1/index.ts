const fs = require('fs').promises;
import forEach from 'lodash/forEach';

(async () => {
  try {
    console.log('test');
    const inputs = await fs.readFile('./1/input.txt', 'utf8');
    forEach(inputs, (item: number, index: number) => {
      console.log(`${index}: ${item}`);
    })
    console.log(inputs);
  }
  catch(e) {
    console.log(e);
  }
})();