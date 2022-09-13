//import Typography from '@mui/material/Typography';
//import CourseCard from './CourseCard';
/*
export function FragenZuFolgen2Old() {
  const data = fetch('https://my-json-server.typicode.com/ngugel/lernmanagement-system/fragenZuFolgen');
  return data;
}

export async function FragenZuFolgen2() {
  const response = await fetch('https://my-json-server.typicode.com/ngugel/lernmanagement-system/fragenZuFolgen');
  const data = await response.json();
  console.log(names); 
  return data;
  // logs [{ name: 'Joker'}, { name: 'Batman' }]
}*/

export function FragenZuFolgen2() {
  let data = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
  console.log(data);
  return {data};
}