import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FeatureLectureComponent({title, text, image}) {
  return (
    <Col lg="4">
        <img className="roundedImage" src={image}/>

        <h2 className="fw-normal">{title}</h2>
        <p>{text}</p>

        <Button variant="danger" href={"/lecture_"+(title.toLowerCase().split(' ').join('_'))}>Themen</Button>
    </Col>
  );
}

export default FeatureLectureComponent;