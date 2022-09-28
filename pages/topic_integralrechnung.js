import { Container, Button, Col } from 'react-bootstrap';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import QuestionComponent from '../components/question';

import * as API from "../api/datenbankAPI"

export default function TopicTest() {

  const lectureId = 1
  const topicId = 4
  const topic = API.getTopic(lectureId, topicId)

  const questions = API.getAllContent(lectureId, topicId)

  return (
  <>
    <HeadComponent title="DHBW Lernsoftware - Thema"></HeadComponent>
    {/*   --- Start Content ---  */}

    <NavbarComponent></NavbarComponent>

    <main>
        {/* Questions */}
        <Container className="topics">
            <h1 class="main-title">Thema: {topic['name']}</h1>
        </Container>

        <Container class="d-flex justify-content-center">
          <Col lg="6">
            {(() => {
                let results = []
                for(const question of questions) {
                    results.push(<QuestionComponent title={"Frage #"+question['id']} question={question['frage']} answers={question['antworten']}></QuestionComponent>)
                }
                return results
            })()}
            <Container className="btnWrapper" class="d-flex justify-content-center">
              <Button variant="primary">Absenden</Button>
            </Container>
          </Col>
        </Container>

        {/*<Pagination id="qpag" className="rounded-design justify-content-center">
            <Pagination.Prev/>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item >{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next/>
          </Pagination>*/}

      {/* Footer */}
      <FooterComponent></FooterComponent>
    </main>

    {/*   --- End Content ---  */}
    <FootComponent></FootComponent>
  </>
  );
}
