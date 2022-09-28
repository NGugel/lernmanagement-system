import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import TopicCardComponent from "../components/topic-cards";

import * as API from "../api/datenbankAPI"

export default function Lecture_Theoretische_Informatik_I() {
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