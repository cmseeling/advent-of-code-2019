import forEach from 'lodash/forEach';

const fs = require('fs').promises;

export default async function (rangeStart: number, rangeEnd: number, logFilePath: string = ''): Promise<number[]> {
  let validNumbers: number[] = [];
  const maxLength = 6;

  let currentNumber: number = rangeStart;
  while(currentNumber <= rangeEnd) {
    let numberString = currentNumber.toString();
    let index = 0;
    let currentDigit: string = numberString[index];

    let newNumberString: string = currentDigit.repeat(6);
    if(+newNumber > currentNumber) {
      currentNumber = +newNumber;
    } else {
      
    }
  }

  return validNumbers;
}

let storageArray: string[] = [];

const func = (startDigit: string, prefix: string) => {
  const maxLength = 6;
  // if(padLength === 0) {
  //   return storageArray;
  // }

  // let paddedString = startDigit.repeat(padLength);
  // let count = 0;
  // for(count = +startDigit; count < 10; count++) {
  //   let newNumber = paddedString.replaceAt()
  // }

  if(prefix.length > 5) {
    return [];
  }

  let count = 0;
  for(count = +startDigit; count < 10; count++) {
    let tails = func(startDigit, prefix + count);
    forEach(tails, (tail: string) => {
      storageArray.push(prefix + tail);
    });
  }
}

/*
start with string filled with first digit
look to increment the 1s column
if 1s column is 9, start rollover
  if (index-1) is 9, continue rollover with index - 1
  else increment (index-1), set index equal to new (index-1)

else increment and add to array

*/