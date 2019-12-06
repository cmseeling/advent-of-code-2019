const fs = require('fs').promises;
import map from 'lodash/map';
import min from 'lodash/min';
import without from 'lodash/without';
import findIntersections from './findIntersections';
import { parseCoordinate } from './ICoordinate';
import getVisitedCoordinates from './getVisitedCoordinates';
import forEach from 'lodash/forEach';
import { indexOf } from 'lodash';

(async () => {
  try {
    console.log('Day 3 Problem 1');
    // const outputFilePath = './3/output.txt';
    const outputFilePath = '';

    const inputText = await fs.readFile('./3/input.txt', 'utf8');
    const wireInputs = inputText.split('\n');

    const wire1Path = wireInputs[0].split(',');
    const wire2Path = wireInputs[1].split(',');

    // const wire1Path = ['R8','U5','L5','D3'];
    // const wire2Path = ['U7','R6','D4','L4'];

    // const wire1Path = ['R75','D30','R83','U83','L12','D49','R71','U7','L72'];
    // const wire2Path = ['U62','R66','U55','R34','D71','R55','D58','R83'];

    // const wire1Path = ['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51'];
    // const wire2Path = ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7'];
    
    const wire1Coordinates = await getVisitedCoordinates(wire1Path);
    const wire2Coordinates = await getVisitedCoordinates(wire2Path);

    const intersections = await findIntersections(wire1Path, wire2Path, outputFilePath);
    console.log(intersections);

    let combinedSteps = map(intersections, (intersection: string) => {
      const wire1Steps = indexOf(wire1Coordinates, intersection);
      const wire2Steps = indexOf(wire2Coordinates, intersection);
      console.log(`${wire1Steps} + ${wire2Steps}`);
      return wire1Steps + wire2Steps;
    });

    console.log(combinedSteps);
    
    combinedSteps = without(combinedSteps, 0);

    let minSteps = min(combinedSteps);
    console.log(minSteps);
  }
  catch(e) {
    console.log(e);
  }
})();