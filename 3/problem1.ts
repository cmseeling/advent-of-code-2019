const fs = require('fs').promises;
import map from 'lodash/map';
import min from 'lodash/min';
import without from 'lodash/without';
import findIntersections from './findIntersections';
import { parseCoordinate } from './ICoordinate';

(async () => {
  try {
    console.log('Day 3 Problem 1');
    const outputFilePath = './3/output.txt';

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
    
    const intersections = await findIntersections(wire1Path, wire2Path, outputFilePath);
    console.log(intersections);

    let distances = map(intersections, (intersection: string) => {
      const coordinate = parseCoordinate(intersection);
      return Math.abs(coordinate.x) + Math.abs(coordinate.y);
    });

    distances = without(distances, 0);
    let minDistance = min(distances);

    console.log(minDistance);
  }
  catch(e) {
    console.log(e);
  }
})();