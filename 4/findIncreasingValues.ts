import forEach from 'lodash/forEach';
import join from 'lodash/join';

const fs = require('fs').promises;

let storageArray: string[] = [];

export default async function (rangeStart: number, rangeEnd: number, logFilePath: string = ''): Promise<string[]> {
  let startDigit = rangeStart.toString().slice(0, 1);
  let endDigit = rangeEnd.toString().slice(0, 1);

  findValues(startDigit, endDigit, 0);

  console.log(storageArray);
  if(logFilePath !== '') {
    await fs.appendFile(logFilePath, `${join(storageArray, '\n')}`);
  }

  return storageArray;
}

const findValues = (startDigit: string, endDigit: string, column: number): string[] => {
  // console.log(`column: ${column}`);
  const maxLength = 6;
  let array = [];
  let count = 0;
  for(count = +startDigit; count <= +endDigit; count++) {
    // console.log(count);
    if(column === 5) {
      array.push(count.toString());
    } else {
      let tails = findValues(count.toString(), "9", column + 1);
      forEach(tails, (tail) => {
        let newString = count.toString() + tail;
        console.log(newString);
        if(newString.length === maxLength) {
          console.log(newString);
          storageArray.push(newString);
        } else {
          array.push(newString);
        }
      });
    }
  }

  return array;
}

/*
start with string filled with first digit
look to increment the 1s column
if 1s column is 9, start rollover
  if (index-1) is 9, continue rollover with index - 1
  else increment (index-1), set index equal to new (index-1)

else increment and add to array

*/