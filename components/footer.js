import Container from 'react-bootstrap/Container';

function FooterComponent() {
  return (
    <Container>
        <p className="float-end"><a href="#">Zurück</a></p>
        <p>&copy; 2022 TIF21B-Team &middot; <a href="#">Datenschutzerklärung</a> &middot; <a href="#">AGB</a></p>
    </Container>
  );
}

export default FooterComponent;