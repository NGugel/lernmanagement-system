import { useEffect, useState } from 'react';
//import Typography from '@mui/material/Typography';
//import CourseCard from './CourseCard';

export function FragenZuFolgen2() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // fetch data from github.com/ngugel/lernmanagement-system/db.json
    // (fake REST server, see https://my-json-server.typicode.com)
    const loadData = async () => {
      const response = await fetch(
        'https://my-json-server.typicode.com/ngugel/lernmanagement-system/fragenZuFolgen'
      );
      const data = await response.json();
      setQuestions(data);
    };
    loadData().catch(console.error);
  }, []);

  if (questions.length === 0)
    return <h5>Keine Kurse</h5>;

  return questions;
}