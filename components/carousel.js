import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="../assets/image/bild1.jpg"/>
        <Carousel.Caption>
          <h3>Wilkommen in der DHBW Lernsoftware</h3>
          <p>Testen Sie ihr Wissen über Themen aus Vorlesungen an der DHBW.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../assets/image/banner2.jpg"/>
        <Carousel.Caption>
          <h3>Effizientes Lernen</h3>
          <p>Unsere Fragen und Antworten wurden von Experten erstellt, um den Lernprozess effizient zu untersützen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../assets/image/study.gif"/>
        <Carousel.Caption>
          <h3>Verbesserte Leistung</h3>
          <p>Steigern Sie Ihre Leistung mit der DHBW Lernsoftware.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;