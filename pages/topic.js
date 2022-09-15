import { Container, ListGroup, Pagination, InputGroup, Form, Button, Row, Col, Card } from 'react-bootstrap';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import { flexbox } from '@mui/system';

export default function TopicTest() {
  return (
  <>
    <HeadComponent title="DHBW Lernsoftware - Thema"></HeadComponent>
    {/*   --- Start Content ---  */}

    <NavbarComponent></NavbarComponent>

    <main>
        {/* Questions */}
        <Container className="topics">
            <h1 class="main-title">Thema: Test</h1>
        </Container>

        <Pagination className="rounded-design justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>

      {/* Footer */}
      <FooterComponent></FooterComponent>
    </main>

    {/*   --- End Content ---  */}
    <FootComponent></FootComponent>
  </>
  );
}
