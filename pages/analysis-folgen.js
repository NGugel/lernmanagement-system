import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";

import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/carousel";
import FooterComponent from "../components/footer";

//import Questions from "./datenbankAPI";
//import FragenZuFolgen from './api/analysis/fragenZuFolgenAPI';
//import {FragenZuFolgen, FragenZuReihen} from './datenbankAPI';

import * as API from "../api/analysis/testtest"

export default function Folgen() {
  return (
  <>
    <HeadComponent title="DHBW Lernsoftware - Homepage"></HeadComponent>
    {/*   --- Start Content ---  */}

    <NavbarComponent></NavbarComponent>

    <main>
      {/* Carousel */}
      <CarouselComponent></CarouselComponent>

      {/* Popular Lecutres */}
      <Container className="marketing">
        <h1 class="main-title">Beliebte Vorlesungen</h1>

        <Row>
          <Col lg="4">
            <img className="roundedImage" src="assets/image/Mathejpg.jpg"/>

            <h2 className="fw-normal">Reihen</h2>
            <p>Hier lernen Sie alles rund um Folgen, Reihen und Abbildungen.</p>
          </Col>

          <Col lg="4">
            <img className="roundedImage" src="assets/image/thInf.jpg"/>

            <h2 className="fw-normal">Platzhaltertext {API.FragenZuFolgen2()}</h2>
            <p>Fragen zu den Themen Mengen und Relationen.</p>
          </Col>

          <Col lg="4">
            <img className="roundedImage" src="assets/image/prGrundlagen.png"/>
            
            <h2 className="fw-normal">Platzhaltertext2 {API.getRandomQuestionReihen()}</h2>
            <p>Fragen rund um die Programmiersprache Python.</p>
          </Col>

          <Col lg="4">
            <img className="roundedImage" src="assets/image/prGrundlagen.png"/>
            
            <h2 className="fw-normal">Platzhaltertext2 {API.getRandomQuestionDifferenzialrechnung()}</h2>
            <p>Fragen rund um die Programmiersprache Python.</p>
          </Col>

        </Row>

        <Row>
          <Col lg="4"><Button variant="danger" href="/analysis-reihen">Test1</Button></Col>
          <Col lg="4"><Button variant="danger" href="/analysis-folgen">Test2</Button></Col>
          <Col lg="4"><Button variant="danger" href="/analysis-differnzialrechnung">Test3</Button></Col>
        </Row>
        
        <Row>
          <Col className="center">
            <a href="#">Weitere Vorlesungen</a>
          </Col>
        </Row>
        
      </Container>

      {/* Map Component */}
      <Container>
        <hr/>
        <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=dhbw%20l%C3%B6rrach&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/></div></div>
      </Container>

      {/* Footer */}
      <FooterComponent></FooterComponent>
    </main>

    {/*   --- End Content ---  */}
    <FootComponent></FootComponent>
  </>
  );
}
