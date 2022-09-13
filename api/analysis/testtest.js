export function FragenZuFolgen2() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.folgen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.folgen.fragenUndAntworten[randomNumber].frage);
  return data.analysis.folgen.fragenUndAntworten[randomNumber].frage;
}

export function getRandomQuestionReihen() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.reihen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.reihen.fragenUndAntworten[randomNumber].frage);
  return data.analysis.reihen.fragenUndAntworten[randomNumber].frage;
}

export function getRandomQuestionDifferenzialrechnung() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.differenzialrechnung.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage);
  return data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage;
}



/*
export function FragenZuFolgen2() {
  let data = require('../../db.json');
  let randomNumber = Math.floor(Math.random() * data.fragenZuFolgen.length);;
  console.log(randomNumber);
  console.log(data.fragenZuFolgen[randomNumber].question);
  return data.fragenZuFolgen[randomNumber].question;
}*/