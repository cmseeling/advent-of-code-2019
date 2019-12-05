const fs = require('fs').promises;
import clone from 'lodash/clone';
import join from 'lodash/join';

export default async function(inputs: number[], filePath: string = ''): Promise<number[]> {
  let numbers = clone(inputs);
  //console.log(join(numbers, ','));
  const step = 4;
  let index = 0;

  let opcodeSequence: number[] = [];
  while(index < numbers.length){
    let opcode = numbers[index];
    opcodeSequence.push(opcode);
    // console.log(`opcode = ${opcode} at index ${index}`);
    let val1 = 0, val2 = 0, storageIndex = 0;

    if (index + 3 <= numbers.length){
      val1 = numbers[index+1];
      val2 = numbers[index+2];
      storageIndex = numbers[index+3]; 
    }
    else if(opcode != 99) {
      throw '1';
    }

    switch (opcode) {
      case 99:
        index = numbers.length;
        break;
      case 1:
        numbers[storageIndex] = numbers[val1] + numbers[val2];
        break;
      case 2:
        numbers[storageIndex] = numbers[val1] * numbers[val2];
        break;
      default:
        throw '2';
    }

    index += step;
  }

  if(filePath !== '') {
    await fs.appendFile(filePath, `opcode sequence = ${join(opcodeSequence, ',')}`);
  }

  return numbers;
}