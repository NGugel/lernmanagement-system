//---------------Analysis------------------
//Folgen
export function getRandomFolgenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.folgen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.folgen.fragenUndAntworten[randomNumber].frage);
  return data.analysis.folgen.fragenUndAntworten[randomNumber].frage;
}

//Reihen
export function getRandomReihenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.reihen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.reihen.fragenUndAntworten[randomNumber].frage);
  return data.analysis.reihen.fragenUndAntworten[randomNumber].frage;
}

//Differenzialrechnung
export function getRandomDifferenzialrechnungsQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.differenzialrechnung.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage);
  return data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage;
}

//Integralrechnung
export function getRandomIntegralrechungsQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.integralrechnung.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.analysis.integralrechnung.fragenUndAntworten[randomNumber].frage);
  return data.analysis.integralrechnung.fragenUndAntworten[randomNumber].frage;
}


//---------------Theoretische Informatik I------------------
//Algebraische Strukturen
export function getRandomAlgebraischeStrukturenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten[randomNumber].frage);
  return data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten[randomNumber].frage;
}

//Logik
export function getRandomLogikQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.logik.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.theoretischeInformatikI.logik.fragenUndAntworten[randomNumber].frage);
  return data.theoretischeInformatikI.logik.fragenUndAntworten[randomNumber].frage;
}

//Algorithmen
export function getRandomAlgorithmenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.algorithmen.fragenUndAntworten.length);
  console.log(randomNumber);
  console.log(data.theoretischeInformatikI.algorithmen.fragenUndAntworten[randomNumber].frage);
  return data.theoretischeInformatikI.algorithmen.fragenUndAntworten[randomNumber].frage;
}