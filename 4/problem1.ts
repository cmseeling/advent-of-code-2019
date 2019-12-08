import forEach from 'lodash/forEach';
import findIncreasingValues from './findIncreasingValues';

(async () => {
  try {
    console.log('Day 4 Problem 1');
    const outputFilePath = './4/output.txt';

    const start = 402328;
    const end = 864247;

    let increasingNumbers = await findIncreasingValues(start, end, outputFilePath);    
  }
  catch(e) {
    console.log(e);
  }
})();