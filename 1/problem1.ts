const fs = require('fs').promises;
import forEach from 'lodash/forEach';
import calculateBasicFuelRequirement from './calculateBasicFuelRequirement';

(async () => {
  try {
    console.log('Day 1 Problem 1');

    const inputText = await fs.readFile('./1/inputs.txt', 'utf8');
    const inputs = inputText.split('\n');

    // const inputs = [12, 14, 1969, 100756];

    let totalFuel = 0;
    forEach(inputs, (input: number, index: number) => {
      const moduleFuel = calculateBasicFuelRequirement(input);
      totalFuel += moduleFuel;
    });

    console.log(totalFuel);
  }
  catch(e) {
    console.log(e);
  }
})();
