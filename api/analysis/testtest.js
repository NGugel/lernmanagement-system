export function FragenZuFolgen2() {
  let data = require('../../db.json');
  let randomNumber = Math.floor(Math.random() * data.fragenZuFolgen.length);;
  console.log(randomNumber);
  console.log(data.fragenZuFolgen[randomNumber].question);
  return data.fragenZuFolgen[randomNumber].question;
}