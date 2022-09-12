import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="../assets/image/dhbw.svg" class="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Vorlesungen" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Analysis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Theoretische Informatik</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Python</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Alle</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Hilfe</Nav.Link>
          </Nav>
          <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" id="loginButton"><i class="bi bi-person-fill"></i>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;