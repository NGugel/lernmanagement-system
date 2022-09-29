import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TopicCardComponent({id, title, text, image}) {
  return (
    <Row className="topic mb-3 p-4 align-items-center rounded-3 border shadow">
      <Col lg="4" className="p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={image} alt="Topic Bild" width="400"/>
      </Col>
      <Col lg="7" className="px-5">
          <h2 className="lh-1">{title}</h2>
          <p className="lead">{text}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold" href={"/topic_"+(title.toLowerCase().split(' ').join('_'))}>Test anfangen</Button>
          </div>
      </Col>
    </Row>
  );
}

export default TopicCardComponent;