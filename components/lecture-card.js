import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function LectureCardComponent({id, title, text, image}) {
  return (
    <Col xs className="mb-4">
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary" href={"/lecture?id="+id}>Themenauswahl</Button>
            </Card.Body>
        </Card>
    </Col>
  );
}

export default LectureCardComponent;