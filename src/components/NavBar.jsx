import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Torch</Navbar.Brand>
        <Nav className="me-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
