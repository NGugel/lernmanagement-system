export function FragenZuFolgen2() {
  let data = require('../../db.json');
  let randomNumber = Math.random(data.fragenZuFolgen.length);
  console.log(data.fragenZuFolgen[0].question);
  return data.fragenZuFolgen[0].question;
}