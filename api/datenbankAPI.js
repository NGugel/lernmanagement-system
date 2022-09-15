import AllLectures from '../pages/lectures';

//---------------Vorlesungen------------------
//alle Vorlesungsnamen im Array (von Objekten) abrufen
export function getAllLectures() {
  let data = require('../db.json');
  /*let allLectures = [];
  data.vorlesungen.forEach((lecture) => {
    allLectures.push(lecture.name);
  });*/
  //return allLectures;
  return data.vorlesungen;
}

//eine Vorlesung mittels ID abrufen (Rueckgabe ist des Objekt der Vorlesung)
export function getLecture(lectureId) {
  let data = require('../db.json');
  if(data.vorlesungen[lectureId - 1] != null) {
    return data.vorlesungen[lectureId - 1];
  } else {
    return "Keine gültige VorlesungsID!";
  }
}

//---------------Themen------------------
//alle Themen einer Vorlesung (via ID) im Array (von Objekten) abrufen
export function getAllTopics(lectureId) {
  let data = require('../db.json');
  let allTopics = [];
  if(data.vorlesungen[lectureId - 1] != null) {
    /*data.vorlesungen[lectureId - 1].themen.forEach((topic) => {
      allTopics.push(topic.name);
    });
    return allTopics;*/
    return data.vorlesungen[lectureId -1].themen;
  } else {
    return "Keine gültige VorlesungsID!";
  }
}

//ein Thema einer Vorlesung mittels IDs (1. Argument: ID der Vorlesung, 2. Argument: ID des Themas) abrufen (Rueckgabe ist des Objekt des Themas)
export function getTopic(lectureId, topicId) {
  let data = require('../db.json');
  if(data.vorlesungen[lectureId - 1] != null) {
    if(data.vorlesungen[lectureId - 1].themen[topicId - 1] != null) {
      return data.vorlesungen[lectureId - 1].themen[topicId - 1];
    } else {
      return "Keine gültige ThemenID!"
    }
  } else {
    return "Keine gültige VorlesungsID!";
  }
}

//alle Fragen eines Themas einer Vorlesung (via IDs) im Array (von Objekten) abrufen
export function getAllContent(lectureId, topicId) {
  let data = require('../db.json');
  if(data.vorlesungen[lectureId - 1] != null) {
    if(data.vorlesungen[lectureId - 1].themen[topicId - 1] != null) {
      return data.vorlesungen[lectureId - 1].themen[topicId - 1].lerninhalt;
    } else {
      return "Keine gültige ThemenID!"
    }
  } else {
    return "Keine gültige VorlesungsID!";
  }
}

//ein Lerninhalt eines Themas einer Vorlesung mittels IDs (1. Argument: ID der Vorlesung, 2. Argument: ID des Themas, 3. Argument: ID des Lerninhalts) abrufen (Rueckgabe ist des Objekt des Lerninhalts)
export function getContent(lectureId, topicId, contentId) {
  let data = require('../db.json');
  if(data.vorlesungen[lectureId - 1] != null) {
    if(data.vorlesungen[lectureId - 1].themen[topicId - 1] != null) {
      if(data.vorlesungen[lectureId - 1].themen[topicId - 1].lerninhalt[contentId - 1] != null) {
        return data.vorlesungen[lectureId - 1].themen[topicId - 1].lerninhalt[contentId - 1];
      } else {
        return "Keine gültige LerninhaltsID!";
      }
    } else {
      return "Keine gültige ThemenID!"
    }
  } else {
    return "Keine gültige VorlesungsID!";
  }
}

//eine zufaelliger Lerninhalt eines Themas einer Vorlesung mittels IDs (1. Argument: ID der Vorlesung, 2. Argument: ID des Themas, 3. Argument: ID des Lerninhalts) abrufen (Rueckgabe ist des Objekt des Lerninhalts)
export function getRandomContent(lectureId, topicId) {
  let data = require('../db.json');
  if(data.vorlesungen[lectureId - 1] != null) {
    if(data.vorlesungen[lectureId - 1].themen[topicId - 1] != null) {
      let randomNumber = Math.floor(Math.random() * data.vorlesungen[lectureId - 1].themen[topicId - 1].lerninhalt.length);
      return data.vorlesungen[lectureId - 1].themen[topicId - 1].lerninhalt[randomNumber];
    } else {
      return "Keine gültige ThemenID!"
    }
  } else {
    return "Keine gültige VorlesungsID!";
  }
}
/*
Deprecated > spaeter loeschen
//---------------Analysis------------------
//Folgen
export function getRandomFolgenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.folgen.fragenUndAntworten.length);
  return data.analysis.folgen.fragenUndAntworten[randomNumber].frage;
}

//Reihen
export function getRandomReihenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.reihen.fragenUndAntworten.length);
  return data.analysis.reihen.fragenUndAntworten[randomNumber].frage;
}

//Differenzialrechnung
export function getRandomDifferenzialrechnungsQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.differenzialrechnung.fragenUndAntworten.length);
  return data.analysis.differenzialrechnung.fragenUndAntworten[randomNumber].frage;
}

//Integralrechnung
export function getRandomIntegralrechungsQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.analysis.integralrechnung.fragenUndAntworten.length);
  return data.analysis.integralrechnung.fragenUndAntworten[randomNumber].frage;
}


//---------------Theoretische Informatik I------------------
//Algebraische Strukturen
export function getRandomAlgebraischeStrukturenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten.length);
  return data.theoretischeInformatikI.algebraischeStrukturen.fragenUndAntworten[randomNumber].frage;
}

//Logik
export function getRandomLogikQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.logik.fragenUndAntworten.length);
  return data.theoretischeInformatikI.logik.fragenUndAntworten[randomNumber].frage;
}

//Algorithmen
export function getRandomAlgorithmenQuestion() {
  let data = require('../db.json');
  let randomNumber = Math.floor(Math.random() * data.theoretischeInformatikI.algorithmen.fragenUndAntworten.length);
  return data.theoretischeInformatikI.algorithmen.fragenUndAntworten[randomNumber].frage;
}
*/