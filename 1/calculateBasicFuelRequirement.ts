import floor from 'lodash/floor';

export default function(moduleWeight: number) {
  return floor(moduleWeight/3) -2;
}