const fs = require('fs').promises;
import intersection from 'lodash/intersection';
import join from 'lodash/join';
import getVisitedCoordinates from './getVisitedCoordinates';

export default async function(pathOne: string[], pathTwo: string[], logFilePath: string = ''): Promise<string[]> {
  const firstPathCoordinates = await getVisitedCoordinates(pathOne);
  console.log(pathOne);
  const secondPathCoordinates = await getVisitedCoordinates(pathTwo);

  if(logFilePath !== '') {
    await fs.appendFile(logFilePath, `path1sequence: ${join(firstPathCoordinates, ':')}\n`
     + `path2sequence: ${join(secondPathCoordinates, ':')}`);
  }

  return intersection(firstPathCoordinates, secondPathCoordinates);
}
