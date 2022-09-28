import { Container, InputGroup, Form, Button, Row, Col, Card } from 'react-bootstrap';

import React from 'react';
import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import LectureCardComponent from "../components/lecture-card";
import { flexbox } from '@mui/system';

import * as API from "../api/datenbankAPI"

let lectures = API.getAllLectures()

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
                {(() => {
                    let results = []
                    for(const lecture of lectures) {
                        results.push(<LectureCardComponent id={lecture['id']} title={lecture['name']} text={lecture['beschreibungstext']} image={lecture['image']}></LectureCardComponent>)
                    }
                    return results
                })()}
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
