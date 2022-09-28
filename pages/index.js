import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import HeadComponent from "../components/hidden/head";
import FootComponent from "../components/hidden/foot";

import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/carousel";
import FooterComponent from "../components/footer";
import FeatureLectureComponent from "../components/feature-lecture";

import * as API from "../api/datenbankAPI"

let lectures = API.getAllLectures()

export default function Home() {
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
          {(() => {
              let results = []
              let i = 0
              for(const lecture of lectures) {
                  if(i>=3) break
                  results.push(<FeatureLectureComponent title={lecture['name']} text={lecture['beschreibungstext']} image={lecture['image']}></FeatureLectureComponent>)
                  i++
              }
              return results
          })()}
        </Row>
        
        <Row>
          <Col className="center">
            <a href="/lectures">Weitere Vorlesungen</a>
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
