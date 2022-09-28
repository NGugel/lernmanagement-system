import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import TopicCardComponent from "../components/topic-cards";

import * as API from "../api/datenbankAPI"

export default function Lecture() {
    const route = useRouter()
    const params = route.params

    const lectureId = 2
    const lecture = API.getLecture(lectureId)

    const topics = API.getAllTopics(lectureId)

    return (
        <>
            <HeadComponent title="DHBW Lernsoftware - Vorlesung"></HeadComponent>
            {/*   --- Start Content ---  */}

            <NavbarComponent></NavbarComponent>

            <main>
                {/* Available Topics */}
                <Container className="topics">
                    <h1 class="main-title">{lecture['name']}</h1>

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

                <Container class="d-flex justify-content-center">
                    <Col lg="8">
                        <Container className="topics-container">
                            <Row className="topic mb-3 p-4 align-items-center rounded-3 border shadow">
                                <Col lg="4" className="p-0 overflow-hidden shadow-lg">
                                    <img class="rounded-lg-3" src="assets/image/Mathejpg.jpg" alt="Reihen Bild" width="400"/>
                                </Col>
                                <Col lg="7" className="px-5">
                                    <h2 className="lh-1">Reihen</h2>
                                    <p className="lead">Fragen Rund um die Gundlagen von Reihen: Was sind Reihen, etc.? Für was brauchen wir sie?</p>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                        <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold">Test anfangen</Button>
                                        <Button variant="outline-secondary" size="lg" className="px-4 me-md-2 fw-bold">Infos</Button>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="topic mb-3 p-4 align-items-center rounded-3 border shadow">
                                <Col lg="4" className="p-0 overflow-hidden shadow-lg">
                                    <img class="rounded-lg-3" src="assets/image/thInf.jpg" alt="Konvergenzradius Bild" width="400"/>
                                </Col>
                                <Col lg="7" className="px-5">
                                    <h2 className="lh-1">Reihen Knovergenzradius</h2>
                                    <p className="lead">Was ist der Konvergenzradius? Wie berechnet man den Konvergenzradius einer Reihe?</p>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                        <Button variant="primary" size="lg" className="px-4 me-md-2 fw-bold">Test anfangen</Button>
                                        <Button variant="outline-secondary" size="lg" className="px-4 me-md-2 fw-bold">Infos</Button>
                                    </div>
                                </Col>
                            </Row>

                            {(() => {
                                let results = []
                                for(const topic of topics) {
                                    results.push(<TopicCardComponent id={topic['id']} title={topic['name']} text={topic['beschreibungstext']} image={topic['image']}></TopicCardComponent>)
                                }
                                return results
                            })()}
                        </Container>
                    </Col>
                </Container>

            {/* Footer */}
            <FooterComponent></FooterComponent>
            </main>

            {/*   --- End Content ---  */}
            <FootComponent></FootComponent>
        </>
    );
}