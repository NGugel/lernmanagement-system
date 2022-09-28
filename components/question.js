import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function QuestionComponent({title, question, answers}) {
  return (
    <Row className="question-row">
        <Card className="question-card">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
            <Card.Title>{question}</Card.Title>
            <Card.Text>
                <Form>
                    {(() => {
                        let results = []
                        for(const answer of answers) {
                            results.push(<Form.Check type="radio" name={"q"+question['id']} label={answer}/>)
                        }
                        return results
                    })()}
                </Form>
            </Card.Text>
        </Card.Body>
        </Card>
    </Row>
  );
}

export default QuestionComponent;