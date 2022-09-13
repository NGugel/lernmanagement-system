export function getRandomFolgenQuestion() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.folgen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.folgen.fragenUndAntworten[randomNumber].frage);
  return data.analysis.folgen.fragenUndAntworten[randomNumber].frage;
}

export function getRandomReihenQuestion() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.reihen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.reihen.fragenUndAntworten[randomNumber].frage);
  return data.analysis.reihen.fragenUndAntworten[randomNumber].frage;
}

export function getRandomDifferenzialrechnungsQuestion() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.differenzialrechnung.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage);
  return data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage;
}

export function getRandomIntegralrechungsQuestion() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.integralrechnung.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.integralrechnung.fragenUndAntworten[randomNumber].frage);
  return data.analysis.integralrechnung.fragenUndAntworten[randomNumber].frage;
}

export function getRandomAlgebraischeStrukturenQuestion() {
  let data = require('../../db2.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten[randomNumber].frage);
  return data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten[randomNumber].frage;
}

/*
export function FragenZuFolgen2() {
  let data = require('../../db.json');
  let randomNumber = Math.floor(Math.random() * data.fragenZuFolgen.length);;
  console.log(randomNumber);
  console.log(data.fragenZuFolgen[randomNumber].question);
  return data.fragenZuFolgen[randomNumber].question;
}*/