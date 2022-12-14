import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as API from "../api/datenbankAPI"

let lectures = API.getAllLectures()

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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Vorlesungen" id="basic-nav-dropdown">
              {(() => {
                  let results = []
                  for(const lecture of lectures) {
                      results.push(<NavDropdown.Item href={"/lecture_"+(lecture['name'].toLowerCase().split(' ').join('_'))}>{lecture['name']}</NavDropdown.Item>)
                  }
                  return results
              })()}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/lectures">Alle</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" id="loginButton"><i class="bi bi-person-fill"></i>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;