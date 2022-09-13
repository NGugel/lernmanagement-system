//import Typography from '@mui/material/Typography';
//import CourseCard from './CourseCard';

export function FragenZuFolgen2() {
  const data = fetch(
    'https://my-json-server.typicode.com/ngugel/lernmanagement-system/fragenZuFolgen'
  );
  return data;
}
