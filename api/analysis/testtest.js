export function FragenZuFolgen2() {
  let dataFile = require('../../db.json');
  console.log(dataFile.fragenZuFolgen.length);
  return dataFile.fragenZuFolgen.length;
}