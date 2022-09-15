import { Container, InputGroup, Form, Button, Row, Col, Card } from 'react-bootstrap';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import { flexbox } from '@mui/system';

export default function AllLectures() {
  return (
  <>
    <HeadComponent title="DHBW Lernsoftware - Alle Vorlesung"></HeadComponent>
    {/*   --- Start Content ---  */}

    <NavbarComponent></NavbarComponent>

    <main>
        {/* Available Topics */}
        <Container className="topics">
            <h1 class="main-title">Alle Vorlesungen</h1>

            <Row className="justify-content-center mb-5 d-flex">
                <Col lg="6">
                    <InputGroup className="mb-3">
                        <Form.Control type="text" placeholder="Suche" aria-label="Suche"></Form.Control>
                        <div className="input-group-append">
                            <Button variant="outline-secondary"><i class="bi bi-search"></i></Button>
                        </div>
                    </InputGroup>
                </Col>
            </Row>
        </Container>

        <Container className="d-flex justify-content-md-center lectures-container">
            <Row>
                <Col xs className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/assets/image/Mathejpg.jpg"/>
                        <Card.Body>
                            <Card.Title>Mathematik I: Analysis</Card.Title>
                            <Card.Text>
                                Im Vorlesungsmodul Analysis finden Sie Themen zu Folgen, Reihen, Abbildungen und vieles mehr.
                            </Card.Text>
                            <Button variant="primary" href="/lecture">Themenauswahl</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col xs className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/assets/image/thInf.jpg"/>
                        <Card.Body>
                            <Card.Title>Theoretische Informatik I</Card.Title>
                            <Card.Text>
                                Im Vorlesungsmodul TI I finden Sie Themen rund um Mengenlehre und grundlagen zur Logik.
                            </Card.Text>
                            <Button variant="primary" href="/lecture">Themenauswahl</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/assets/image/prGrundlagen.png"/>
                        <Card.Body>
                            <Card.Title>Programmiersprachen: Python</Card.Title>
                            <Card.Text>
                                Im Vorlesungsmodul Programmiersprachen Python finden Sie Themen rund um die Programmiersprache Python.
                            </Card.Text>
                            <Button variant="primary" href="/lecture">Themenauswahl</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

      {/* Footer */}
      <FooterComponent></FooterComponent>
    </main>

    {/*   --- End Content ---  */}
    <FootComponent></FootComponent>
  </>
  );
}
