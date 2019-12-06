import forEach from 'lodash/forEach';
import map from 'lodash/map';
import { ICoordinate } from './ICoordinate';

export default async function(path: string[]): Promise<string[]> {
  let coordinateArray: ICoordinate[] = [{x: 0, y: 0}];
  forEach(path, (vector: string) => {
    const parsedVector = parseVector(vector);
    const lastCoordinate = coordinateArray[coordinateArray.length - 1];
    let counter = 0;
    for(counter=1; counter < parsedVector.distance + 1; counter++) {
      let newCoordinate;
      switch(parsedVector.direction) {
        case 'U':
          newCoordinate = {x:lastCoordinate.x, y:lastCoordinate.y + counter};
          break;
        case 'D':
          newCoordinate = {x:lastCoordinate.x, y:lastCoordinate.y - counter};
          break;
        case 'L':
          newCoordinate = {x:lastCoordinate.x - counter, y:lastCoordinate.y};
          break;
        case 'R':
          newCoordinate = {x:lastCoordinate.x + counter, y:lastCoordinate.y};
          break;
        default:
          console.log('direction was not parsed');
          newCoordinate = {x: NaN, y: NaN};
      }
      coordinateArray.push(newCoordinate);
    }

  });
  const stringifiedArray = map(coordinateArray, (coordinate: ICoordinate) => {
    return `${coordinate.x},${coordinate.y}`;
  });

  return stringifiedArray;
}

interface IVector {
  direction: string;
  distance: number;
}

const parseVector = (vector: string): IVector => {
  return {
    direction: vector.slice(0,1),
    distance: +(vector.slice(1))
  };
}
