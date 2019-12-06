export interface ICoordinate {
  x: number;
  y: number;
}

export const parseCoordinate = (coordinateString: string): ICoordinate => {
  const split = coordinateString.split(',');
  return {
    x: +(split[0]),
    y: +(split[1])
  };
}
