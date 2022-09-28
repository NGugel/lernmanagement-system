import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function QuestionComponent({title, question}) {
  return (
    <Row className="question-row">
        <Card className="question-card">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
            <Card.Title>{question}</Card.Title>
            <Card.Text>
                <Form>
                    <Form.Check type="radio" name="q1" label="Die Antwort auf die Frage ist 3"/>
                    <Form.Check type="radio" name="q1" label="Nein ich würde sagen es ist 5"/>
                    <Form.Check type="radio" name="q1" label="Oder ist es vielleicht doch 1"/>
                </Form>
            </Card.Text>
        </Card.Body>
        </Card>
    </Row>
  );
}

export default QuestionComponent;